import { client, publicSDK } from '../index';

declare global {
    var workId: string;
    var userId: string;
    var partId: string;
}
const devrevSDK = client.setup({ endpoint: 'https://api.devrev.ai', token: process.env.DEVREV_TOKEN });

export async function init() {
    const userResponse = await devrevSDK.devUsersSelf();
    const partResponse = await devrevSDK.partsCreate({
        name: 'test part',
        type: publicSDK.PartType.Product,
        owned_by: [userResponse.data.dev_user.id],
    });
    globalThis.partId = partResponse.data.part.id;
    globalThis.userId = userResponse.data.dev_user.id;
    const workResponse = await devrevSDK.worksCreate({
        applies_to_part: partResponse.data.part.id,
        title: 'New work item',
        type: publicSDK.WorkType.Ticket,
        owned_by: [userResponse.data.dev_user.id],
    });
    globalThis.workId = workResponse.data.work.id;
}
export async function timelineCreateGet() {
    const timelineCreateResponse = await devrevSDK.timelineEntriesCreate({
        object: globalThis.workId,
        type: publicSDK.TimelineEntriesCreateRequestType.TimelineComment,
        body: 'test comment',
        body_type: publicSDK.TimelineCommentBodyType.Text,
    });
    const timelineGetResponse = await devrevSDK.timelineEntriesGet({
        id: timelineCreateResponse.data.timeline_entry.id,
    });
    const create = timelineCreateResponse.data.timeline_entry;
    const get = timelineGetResponse.data.timeline_entry;
    expect([200, 201]).toContain(timelineCreateResponse.status);
    expect([200, 201]).toContain(timelineGetResponse.status);
    expect(create.artifacts).toBe(get.artifacts);
    expect(create.body).toBe(get.body);
    expect(create.body_type).toBe(get.body_type);
    if (create.created_by !== undefined && get.created_by !== undefined) {
        expect(create.created_by).toStrictEqual(get.created_by);
    }
    expect(create.created_date).toBe(get.created_date);
    expect(create.display_id).toBe(get.display_id);
    expect(create.snap_kit_body).toBe(get.snap_kit_body);
    expect(create.type).toBe(get.type);
    expect(create.body).toBe('test comment');
    expect(create.body_type).toBe('text');
    return create.id;
}
export async function timelineUpdateGet(id: string) {
    const timelimeUpdateResponse = await devrevSDK.timelineEntriesUpdate({
        id: id,
        type: publicSDK.TimelineEntriesUpdateRequestType.TimelineComment,
        body: 'test comment updated',
        body_type: publicSDK.TimelineCommentBodyType.Text,
    });
    const timelineGetResponse = await devrevSDK.timelineEntriesGet({
        id: timelimeUpdateResponse.data.timeline_entry.id,
    });
    const updateComment = timelimeUpdateResponse.data.timeline_entry;
    const getComment = timelineGetResponse.data.timeline_entry;
    expect(timelimeUpdateResponse.status).toBe(200);
    expect(timelineGetResponse.status).toBe(200);
    expect(updateComment.body).toBe(getComment.body);
    expect(updateComment.body).toBe('test comment updated');
    expect(updateComment.artifacts).toBe(getComment.artifacts);
    expect(updateComment.body).toBe(getComment.body);
    expect(updateComment.body_type).toBe(getComment.body_type);
    if (updateComment.created_by !== undefined && getComment.created_by !== undefined) {
        expect(updateComment.created_by).toStrictEqual(getComment.created_by);
    }
    expect(updateComment.created_date).toBe(getComment.created_date);
    expect(updateComment.display_id).toBe(getComment.display_id);
    if (updateComment.modified_by !== undefined && getComment.modified_by !== undefined) {
        expect(updateComment.modified_by).toStrictEqual(getComment.modified_by);
    }
    expect(updateComment.modified_date).toBe(getComment.modified_date);
    expect(updateComment.snap_kit_body).toBe(getComment.snap_kit_body);
    expect(updateComment.type).toBe(getComment.type);
}
export async function timelineList() {
    const comment1 = await devrevSDK.timelineEntriesCreate({
        object: globalThis.workId,
        type: publicSDK.TimelineEntriesCreateRequestType.TimelineComment,
        body: 'test comment1',
        body_type: publicSDK.TimelineCommentBodyType.Text,
    });
    const comment2 = await devrevSDK.timelineEntriesCreate({
        object: globalThis.workId,
        type: publicSDK.TimelineEntriesCreateRequestType.TimelineComment,
        body: 'test comment2',
        body_type: publicSDK.TimelineCommentBodyType.Text,
    });
    const timelineListResponse = await devrevSDK.timelineEntriesList({
        object: globalThis.workId,
    });
    expect(timelineListResponse.status).toBe(200);
    expect(timelineListResponse.data.timeline_entries.length).toBe(3);
}
export async function cleanup() {
    await devrevSDK.partsDelete({ id: globalThis.partId });
    await devrevSDK.worksDelete({ id: globalThis.workId });
}

