import { client, betaSDK } from '../index';
import { RevUser } from '../auto-generated/beta/beta-devrev-sdk';

const devrevBetaSDK = client.setupBeta({ endpoint: 'https://api.devrev.ai', token: process.env.DEVREV_TOKEN });
declare global {
  var newRevUser1Id: string;
  var newRevUser2Id: string;
}
export async function init() {
  try {
    var newRevUser1: betaSDK.RevUsersCreateRequest = {
      email: "user1@example.com",
      display_name: "TestUser1"
    };
    const revUsersCreateResponse1 = await devrevBetaSDK.revUsersCreate(
      newRevUser1,
    );
    globalThis.newRevUser1Id = revUsersCreateResponse1.data.rev_user.id;
    var newRevUser2: betaSDK.RevUsersCreateRequest = {
      email: "user2@example.com",
      display_name: "TestUser2"
    };
    const revUsersCreateResponse2 = await devrevBetaSDK.revUsersCreate(
      newRevUser2,
    );
    globalThis.newRevUser2Id = revUsersCreateResponse2.data.rev_user.id;
  } catch (error) {
    console.log(error);
  }
}
export async function cleanup() {
  revUsersDeleteGet(globalThis.newRevUser1Id);
  revUsersDeleteGet(globalThis.newRevUser2Id);
}

export async function revUsersCreateGet() {
  try {
    var newRevUser: betaSDK.RevUsersCreateRequest = {
      email: "user@example.com",
      display_name: "TestUser"
    };
    const revUsersCreateResponse = await devrevBetaSDK.revUsersCreate(
      newRevUser,
    );
    const revUsersGetResponse = await devrevBetaSDK.revUsersGet({ id: revUsersCreateResponse.data.rev_user.id });
    expect(newRevUser.email).toBe(revUsersCreateResponse.data.rev_user.email);
    expect(newRevUser.display_name).toBe(revUsersCreateResponse.data.rev_user.display_name);
    return revUsersGetResponse.data.rev_user.id;
  } catch (error) {
    console.log(error);
  }

}
export async function revUsersUpdateGet(id: string) {
  try {
    var upRevUser: betaSDK.RevUsersUpdateRequest = {
      id: id,
      display_name: 'UpdatedTestUser',
    };
    const revUsersUpdateResponse = await devrevBetaSDK.revUsersUpdate(
      upRevUser,
    );
    const revUsersGetResponse = await devrevBetaSDK.revUsersGet({ id: revUsersUpdateResponse.data.rev_user.id });
    expect(upRevUser.display_name).toBe(revUsersUpdateResponse.data.rev_user.display_name);
    return revUsersUpdateResponse.data.rev_user.id ;
  } catch (error) {
    console.log(error);
  }

}
export async function revUsersDeleteGet(id: string) {
  try {
    const revUsersDeleteResponse = await devrevBetaSDK.revUsersDelete({ id: id });
    expect(revUsersDeleteResponse.status).toBe(200);
  } catch(error) {
    console.log(error);
  }
}

export async function RevUsersList() {
  try {
    const revUsersListResponse = await devrevBetaSDK.revUsersList({
      email: ["user1@example.com"],
    });
    expect(revUsersListResponse.status).toBe(200);
} catch(error) {
    console.log(error);
    cleanup();
}
}

