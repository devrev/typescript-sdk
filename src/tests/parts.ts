import { client, publicSDK } from '../index';

const devrevSDK = client.setup({ endpoint: 'https://api.devrev.ai', token: process.env.DEVREV_TOKEN });

declare global {
  var userId: string;
}
export async function init() {
  const userResponse = await devrevSDK.devUsersSelf();
  globalThis.userId = userResponse.data.dev_user.id;
}

export async function partsCreateGet() {
  var newPart: publicSDK.PartsCreateRequest = {
    owned_by: [globalThis.userId],
    type: publicSDK.PartType.Product,
    name: 'Typescript Part',
    description: 'new ts part',
  };
  const partsCreateResponse = await devrevSDK.partsCreate(
    newPart,
  );
  const partsGetResponse = await devrevSDK.partsGet({ id: partsCreateResponse.data.part.id });
  expect(newPart.name).toBe(partsCreateResponse.data.part.name);
  expect(newPart.owned_by[0]).toBe(partsCreateResponse.data.part.owned_by[0].id);
  expect(newPart.type).toBe(partsCreateResponse.data.part.type);
  expect(newPart.description).toBe(partsCreateResponse.data.part.description);
  expect(newPart.name).toBe(partsGetResponse.data.part.name);
  expect(newPart.owned_by[0]).toBe(partsGetResponse.data.part.owned_by[0].id);
  expect(newPart.type).toBe(partsGetResponse.data.part.type);
  expect(newPart.description).toBe(partsGetResponse.data.part.description);
  return partsCreateResponse.data.part.id;

}
export async function partsUpdateGet(id: string) {
  var updPart: publicSDK.PartsUpdateRequest = {
    owned_by: { set: ['DEVU-14'] },
    type: publicSDK.PartType.Product,
    name: 'Typescript Part UPDATED',
    description: 'updated ts part',
    id: id,
  };
  const partsUpdateResponse = await devrevSDK.partsUpdate(
    updPart,
  );
  const partsGetResponse = await devrevSDK.partsGet({ id: partsUpdateResponse.data.part.id });
  expect(updPart.name).toBe(partsUpdateResponse.data.part.name);
  expect(updPart.type).toBe(partsUpdateResponse.data.part.type);
  expect(updPart.description).toBe(partsUpdateResponse.data.part.description);
  expect(updPart.name).toBe(partsGetResponse.data.part.name);
  expect(updPart.type).toBe(partsGetResponse.data.part.type);
  expect(updPart.description).toBe(partsGetResponse.data.part.description);
  return partsUpdateResponse.data.part.id;

}
export async function partsDeleteGet(id: string) {
  const partsDeleteResponse = await devrevSDK.partsDelete({ id: id });
  expect(partsDeleteResponse.status).toBe(200);
  await devrevSDK.partsDelete({ id: id });
}
export async function partsList() {
  const partsCreateResponse1 = await devrevSDK.partsCreate(
    {
      owned_by: ['DEVU-1'],
      type: publicSDK.PartType.Product,
      name: 'Typescript Part-Test1',
      description: 'test part 1',
    },
  );
  const partsCreateResponse2 = await devrevSDK.partsCreate(
    {
      owned_by: ['DEVU-2'],
      type: publicSDK.PartType.Product,
      name: 'Typescript Part-Test2',
      description: 'test part 2',
    },
  );
  const partsCreateResponse3 = await devrevSDK.partsCreate(
    {
      owned_by: ['DEVU-2'],
      type: publicSDK.PartType.Product,
      name: 'Typescript Part-Test3',
      description: 'test part 3',
    },
  );
  const partsListResponse = await devrevSDK.partsList({
    name: ['Typescript Part-Test1'],
    owned_by: ['DEVU-1'],
  });
  expect(partsListResponse.status).toBe(200);
  expect(partsListResponse.data.parts.length).toBe(1);
  await devrevSDK.partsDelete({ id: partsCreateResponse1.data.part.id });
  await devrevSDK.partsDelete({ id: partsCreateResponse2.data.part.id });
  await devrevSDK.partsDelete({ id: partsCreateResponse3.data.part.id });
}
