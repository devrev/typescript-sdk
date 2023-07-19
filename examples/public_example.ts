import {client, publicSDK} from "@devrev/typescript-sdk";

const devrevSDK = client.setup({ endpoint: "https://api.devrev.ai", token: process.env.DEVREV_TOKEN });

async function test(){
    const response = await devrevSDK.worksCreate({title:"New work item!", applies_to_part: "PROD-1", owned_by:["DEVU-16"], type: publicSDK.WorkType.Issue})
    console.log(response)
}

test()
