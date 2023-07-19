/* eslint-disable @typescript-eslint/comma-dangle */
import { client } from './index';

/* Example function to describe Public SDK usage */
const devrevSDK = client.setup({ endpoint: 'https://api.devrev.ai', token: process.env.DEVREV_TOKEN });
(async () => {
    const response = await devrevSDK.worksGet({
        id: 'don:core:dvrv-us-1:devo/1DYPnPy0f:issue/8',
    });

    console.info(response.data.work.title);
})();

