/* eslint-disable @typescript-eslint/comma-dangle */
import { client } from '../index';


const devrevSDK = client.setup({ endpoint: 'https://api.devrev.ai', token: process.env.DEVREV_TOKEN });

declare global {
    var artifactId: string;
}


export async function artifactPrepare() {
    try{
        const artifactsPrepareResponse = await devrevSDK.artifactsPrepare({
            file_name: 'PATH_TO_ARTIFACT',
        });
        expect(artifactsPrepareResponse.status).toBe(200);
        return artifactsPrepareResponse.data.id;
    } catch (error) {
        console.log(error);
    }

}
export async function artifactLocate(id: string) {
    try {
        const artifactsLocateResponse = await devrevSDK.artifactsLocate({
            id: id
        });
        expect(artifactsLocateResponse.status).toBe(200);
    } catch (error) {
        console.log(error);
    }
}

