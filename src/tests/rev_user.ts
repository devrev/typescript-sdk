import { client, betaSDK } from '../index';
import { RevUser } from '../auto-generated/beta/beta-devrev-sdk';

const devrevBetaSDK = client.setupBeta({ endpoint: 'https://api.devrev.ai', token: process.env.DEVREV_TOKEN });

export async function revUsersCreateGet() {
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

}
export async function revUsersUpdateGet(id: string) {
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

}
export async function revUsersDeleteGet(id: string) {
  const revUsersDeleteResponse = await devrevBetaSDK.revUsersDelete({ id: id });
  expect(revUsersDeleteResponse.status).toBe(200);
}
export async function RevUsersList() {
  var newRevUser1: betaSDK.RevUsersCreateRequest = {
    email: "user1@example.com",
    display_name: "TestUser1"    
  };
  const revUsersCreateResponse1 = await devrevBetaSDK.revUsersCreate(
    newRevUser1,
  );
  var newRevUser2: betaSDK.RevUsersCreateRequest = {
    email: "user2@example.com",
    display_name: "TestUser2"    
  };
  const revUsersCreateResponse2 = await devrevBetaSDK.revUsersCreate(
    newRevUser2,
  );
  const revUsersListResponse = await devrevBetaSDK.revUsersList({
    email: ["user1@example.com"],
  });
  expect(revUsersListResponse.status).toBe(200);
  await devrevBetaSDK.revUsersDelete({ id: revUsersCreateResponse1.data.rev_user.id });
  await devrevBetaSDK.revUsersDelete({ id: revUsersCreateResponse2.data.rev_user.id });
}

