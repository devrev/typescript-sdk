#!/usr/bin/env sh

# NOTE: This script may not work if you are connected to the AWS VPN.
# Try disconnecting if the `npx swagger-typescript-api` step fails.

set -e # exit script on any error

readonly TEMP_PATH=/tmp
readonly SCRIPT_PATH="$(
  cd -- "$(dirname "$0")" >/dev/null 2>&1
  pwd -P
)"
readonly API_REPO_ROOT_PATH="$TEMP_PATH/gateway"
readonly OUTPUT_DIRECTORY="$SCRIPT_PATH/src/auto-generated"
readonly OUTPUT_FILENAME=data-contracts.ts
readonly OUTPUT_FILE_PATH="$OUTPUT_DIRECTORY/$OUTPUT_FILENAME"

# Install dependencies if not already installed
(npm list -g --depth=0 | grep yargs >/dev/null) || npm i -g yargs
(npm list -g --depth=0 | grep yaml-convert >/dev/null) || npm i -g yaml-convert

# Pull API YAML contract from GitHub
if test -f "$API_REPO_ROOT_PATH"; then
  rm -rf $API_REPO_ROOT_PATH
if !test -f $"TEMP_PATH"; then
  mkdir -p $TEMP_PATH
fi
git clone --depth 1 git@github.com:devrev/gateway.git $API_REPO_ROOT_PATH || git clone --depth 1 https://github.com/devrev/gateway.git $API_REPO_ROOT_PATH
fi

# cp $API_YAML_FILE_PATH $CONTRACT_DIRECTORY

readonly PUBLIC_API_YAML_FILE="$API_REPO_ROOT_PATH/apiv2/specs/public/openapi.yaml"
readonly PUBLIC_API_JSON_FILE="./src/contract/public-data-contracts.json"
readonly PUBLIC_API_OUTPUT_FILE_NAME=public-data-contracts.ts
readonly PUBLIC_API_FILE_NAME="$OUTPUT_DIRECTORY/$PUBLIC_API_OUTPUT_FILE_NAME"
#cp $PUBLIC_API_YAML_FILE $OUTPUT_DIRECTORY

readonly BETA_API_YAML_FILE="$API_REPO_ROOT_PATH/apiv2/specs/beta/openapi-beta.yaml"
readonly BETA_API_JSON_FILE="./src/contract/beta-data-contracts.json"
readonly BETA_API_OUTPUT_FILE_NAME=beta-internal-data-contracts.ts
#cp $BETA_API_YAML_FILE $OUTPUT_DIRECTORY

yaml-convert --input $PUBLIC_API_YAML_FILE --output $PUBLIC_API_JSON_FILE --pretty
yaml-convert --input $BETA_API_YAML_FILE --output $BETA_API_JSON_FILE --pretty
# Generate Swagger Typescript definition
npx swagger-typescript-api -p $PUBLIC_API_JSON_FILE -o ./src/auto-generated -n public-devrev-sdk.ts --axios --templates ./templates/default --clean-output

npx swagger-typescript-api -p $BETA_API_JSON_FILE -o ./src/auto-generated/beta -n beta-devrev-sdk.ts --axios --clean-output --templates ./templates/default

# Auto-format the file using Prettier
npx prettier --write ./src/auto-generated/
