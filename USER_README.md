# Authorization

Setup an env variable `DEVREV_TOKEN` It will be used as an auth token by default, You can also pass in the url and token in `client.setup()` as a param (see below).

# Installation

Make sure your GitHub token has the permission for the devrev org. To install the package to your project folder, run

```
npm login --scope=@devrev --auth-type=legacy --registry=https://npm.pkg.github.com
```

Login with your GitHub username and Github PAT.

```
npm install @devrev/typescript-sdk
```
The version can be found in package.json
Make sure that your project's **package.json** contains `"type":"module"` setting.

# Example Usage of the Internal SDK

```
import {client, internalSDK} from "@devrev/typescript-sdk";

const devrevInternalSDK = client.setupInternal({ endpoint: "https://api.devrev.ai",
token: process.env.DEVREV_TOKEN });

async function test(){
    const response = await devrevInternalSDK.worksCreate({title:"New work item!",
    applies_to_part: "PROD-1",
    owned_by:["DEVU-16"],
    type: internalSDK.WorkType.Issue})
    console.log(response)
}

test()

```

# Example Usage of the Public SDK

```
import {client, publicSDK} from "@devrev/typescript-sdk";

const devrevSDK = client.setup({ endpoint: "https://api.devrev.ai", token: process.env.DEVREV_TOKEN });

async function test(){
    const response = await devrevSDK.worksCreate({title:"New work item!", applies_to_part: "PROD-1", owned_by:["DEVU-16"], type: publicSDK.WorkType.Issue})
    console.log(response.status)
}

test()
```
