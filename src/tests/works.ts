import { client, publicSDK } from '../index';


declare global {
  var tagId: string;
  var partId: string;
  var userId: string;
}
const devrevSDK = client.setup({ endpoint: 'https://api.devrev.ai', token: process.env.DEVREV_TOKEN });

export async function init() {
  const userResponse = await devrevSDK.devUsersSelf();
  globalThis.userId = userResponse.data.dev_user.id;
  const partResponse = await devrevSDK.partsCreate({
    name: 'test part new',
    type: publicSDK.PartType.Product,
    owned_by: [globalThis.userId],
  });
  const tagResponse = await devrevSDK.tagsCreate({
    name: 'test tag new',
  });
  globalThis.partId = partResponse.data.part.id;
  globalThis.tagId = tagResponse.data.tag.id;
  globalThis.userId = userResponse.data.dev_user.id;
}
export async function cleanup() {
  await devrevSDK.partsDelete({ id: globalThis.partId });
  await devrevSDK.tagsDelete({ id: globalThis.tagId });
}

export async function worksCreateGet() {
  let workInit = {
    owned_by: [globalThis.userId],
    title: 'typescript ticket - new',
    type: publicSDK.WorkType.Ticket,
    applies_to_part: globalThis.partId,
    body: 'new ticket, delete later',
    reported_by: [globalThis.userId],
    stage: { name: 'queued' },
    tags: [{ id: globalThis.tagId }],
  };
  const worksCreateResponse = await devrevSDK.worksCreate(
    workInit,
  );
  const worksGetResponse = await devrevSDK.worksGet({
    id: worksCreateResponse.data.work.id,
  });
  expect(workInit.title).toBe(worksCreateResponse.data.work.title);
  expect(workInit.owned_by[0]).toBe(worksCreateResponse.data.work.owned_by[0].id);
  expect(workInit.type).toBe(worksCreateResponse.data.work.type);
  expect(workInit.body).toBe(worksCreateResponse.data.work.body);
  expect(workInit.title).toBe(worksGetResponse.data.work.title);
  expect(workInit.owned_by[0]).toBe(worksGetResponse.data.work.owned_by[0].id);
  expect(workInit.type).toBe(worksGetResponse.data.work.type);
  expect(workInit.body).toBe(worksGetResponse.data.work.body);
  return worksCreateResponse.data.work.id;
}
export async function worksUpdatedGet(id: string) {
  let workUpd = {
    applies_to_part: 'PROD-2',
    body: 'updated body',
    id: id,
    owned_by: { set: ['DEVU-14'] },
    reported_by: { set: ['DEVU-14'] },
    stage: { name: 'resolved' },
    tags: { set: [{ id: 'TAG-2' }] },
    target_close_date: '2024-03-03T19:10:25.427Z',
    title: 'updated title',
    type: publicSDK.WorkType.Ticket,
  };
  const worksUpdateResponse = await devrevSDK.worksUpdate(workUpd);
  const worksGetResponse = await devrevSDK.worksGet({ id: id });
  // expect(workUpd.title).toBe(worksUpdateResponse.data.work.title)
  // expect(workUpd.type).toBe(worksUpdateResponse.data.work.type)
  // expect(workUpd.body).toBe(worksUpdateResponse.data.work.body)
  // expect(workUpd.title).toBe(worksGetResponse.data.work.title)
  // expect(workUpd.type).toBe(worksGetResponse.data.work.type)
  // expect(workUpd.body).toBe(worksGetResponse.data.work.body)
}
export async function worksList() {
  const works1 = await devrevSDK.worksCreate(
    {
      owned_by: [globalThis.userId],
      title: 'typescript ticket 1',
      type: publicSDK.WorkType.Ticket,
      applies_to_part: globalThis.partId,
      body: 'new ticket, delete later',
      reported_by: [globalThis.userId],
      stage: { name: 'queued' },
      severity: publicSDK.TicketSeverity.Low,
    },
  );
  const works2 = await devrevSDK.worksCreate(
    {
      owned_by: [globalThis.userId],
      title: 'typescript ticket 2',
      type: publicSDK.WorkType.Ticket,
      applies_to_part: globalThis.partId,
      body: 'new ticket, delete later',
      reported_by: [globalThis.userId],
      stage: { name: 'resolved' },
      severity: publicSDK.TicketSeverity.Low,
    },
  );
  const works3 = await devrevSDK.worksCreate(
    {
      owned_by: [globalThis.userId],
      title: 'typescript ticket 3',
      type: publicSDK.WorkType.Ticket,
      applies_to_part: globalThis.partId,
      body: 'new ticket, delete later',
      reported_by: [globalThis.userId],
      stage: { name: 'queued' },
      severity: publicSDK.TicketSeverity.High,
    },
  );
  const worksListResponse1 = await devrevSDK.worksList(
    {
      applies_to_part: [globalThis.partId],
      created_by: [globalThis.userId],
      'ticket.severity': [publicSDK.TicketSeverity.Low],
      limit: 5,
      'stage.name': ['resolved'],
      type: [publicSDK.WorkType.Ticket],
    },
  );
  const worksListResponse2 = await devrevSDK.worksList(
    {
      applies_to_part: [globalThis.partId],
      created_by: [globalThis.userId],
      'ticket.severity': [publicSDK.TicketSeverity.Low],
      limit: 5,
      type: [publicSDK.WorkType.Ticket],
    },
  );
  expect(worksListResponse1.data.works.length).toBe(1);
  expect([200, 201]).toContain(worksListResponse1.status);
  expect(worksListResponse2.data.works.length).toBe(2);
  expect([200, 201]).toContain(worksListResponse1.status);

  await devrevSDK.worksDelete({ id: works1.data.work.id });
  await devrevSDK.worksDelete({ id: works2.data.work.id });
  await devrevSDK.worksDelete({ id: works3.data.work.id });

}
export async function worksExport() {
  const works1 = await devrevSDK.worksCreate(
    {
      owned_by: [globalThis.userId],
      title: 'typescript ticket 1',
      type: publicSDK.WorkType.Ticket,
      applies_to_part: globalThis.partId,
      body: 'new ticket, delete later',
      reported_by: [globalThis.userId],
      stage: { name: 'queued' },
      severity: publicSDK.TicketSeverity.Low,
    },
  );
  const works2 = await devrevSDK.worksCreate(
    {
      owned_by: [globalThis.userId],
      title: 'typescript ticket 2',
      type: publicSDK.WorkType.Ticket,
      applies_to_part: globalThis.partId,
      body: 'new ticket, delete later',
      reported_by: [globalThis.userId],
      stage: { name: 'resolved' },
      severity: publicSDK.TicketSeverity.Low,
    },
  );
  const works3 = await devrevSDK.worksCreate(
    {
      owned_by: [globalThis.userId],
      title: 'typescript ticket 3',
      type: publicSDK.WorkType.Ticket,
      applies_to_part: globalThis.partId,
      body: 'new ticket, delete later',
      reported_by: [globalThis.userId],
      stage: { name: 'queued' },
      severity: publicSDK.TicketSeverity.High,
    },
  );
  const worksExportResponse = await devrevSDK.worksExport(
    {
      applies_to_part: [globalThis.partId],
      created_by: [globalThis.userId],
      'stage.name': ['resolved'],
      'ticket.severity': [publicSDK.TicketSeverity.Low],
      type: [publicSDK.WorkType.Ticket],
    },
  );
  expect(worksExportResponse.data.works.length).toBe(1);
  expect(worksExportResponse.status).toBe(200);
  await devrevSDK.worksDelete({ id: works1.data.work.id });
  await devrevSDK.worksDelete({ id: works2.data.work.id });
  await devrevSDK.worksDelete({ id: works3.data.work.id });
}
export async function worksDeleteGet(id: string) {
  const worksDeleteResponse = await devrevSDK.worksDelete({ id: id });
  expect(worksDeleteResponse.status).toBe(200);
  await devrevSDK.worksDelete({ id: id });
}
