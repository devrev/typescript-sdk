import * as artifacts from './artifacts';
import * as parts from './parts';
import * as timeline from './timeline';
import * as works from './works';
import * as revUsers from './rev_user';


test('Test parts SDK functions', async () => {
    try {
        await parts.init();
        var newPartId = await parts.partsCreateGet();
        await parts.partsUpdateGet(<string>newPartId);
        await expect(parts.partsDeleteGet(<string>newPartId)).rejects.toThrow();
        await parts.partsList();
    } catch (error) {
        console.log(error);
    }
}, 50000);

test('Test works SDK functions', async () => {
    try {
        await works.init();
        var id = await works.worksCreateGet();
        await works.worksUpdatedGet(<string>id);
        await works.worksExport();
        await works.worksList();
        await expect(works.worksDeleteGet(id)).rejects.toThrow();
        await works.cleanup();
    } catch (error) {
        console.log(error);
        await works.cleanup();
    }
}, 30000);

test('Test artifacts SDK functions', async () => {
    try {
        var id = await artifacts.artifactPrepare();
        await artifacts.artifactLocate(<string>id);
    } catch (error) {
        console.log(error);
    }
});

test('Test timeline SDK functions', async () => {
    try {
        await timeline.init();
        var id = await timeline.timelineCreateGet();
        await timeline.timelineUpdateGet(<string>id);
        await timeline.timelineList();
        await timeline.cleanup();
    } catch (error) {
        console.log(error);
        await timeline.cleanup();
    }
}, 50000);

test('Test rev_user SDK functions', async () => {
    try {
        var id = await revUsers.revUsersCreateGet();
        await revUsers.revUsersUpdateGet(<string>id);
        await revUsers.RevUsersList();
        await revUsers.revUsersDeleteGet(<string>id);
    } catch (error) {
        console.log(error);
        revUsers.cleanup();
    }
}, 30000);
