/* eslint-disable @typescript-eslint/comma-dangle */
import { client } from '../index';


const devrevSDK = client.setup({ endpoint: 'https://api.devrev.ai', token: process.env.DEVREV_TOKEN });

declare global {
    var artifactId: string;
}


export async function artifactPrepare() {
    const artifactsPrepareResponse = await devrevSDK.artifactsPrepare({
        file_name: 'PATH_TO_ARTIFACT',
    });
    expect(artifactsPrepareResponse.status).toBe(200);
    return artifactsPrepareResponse.data.id;

}
export async function artifactLocate(id: string) {
    const artifactsLocateResponse = await devrevSDK.artifactsLocate({
        id: id
    });
    expect(artifactsLocateResponse.status).toBe(200);
}

