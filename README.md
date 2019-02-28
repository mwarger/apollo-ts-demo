# Usage

## Install deps

`yarn install`

## Run app

`yarn start`

## Generate types

Server implementation available at https://codesandbox.io/s/l9mlzv756q

- download schema

`apollo schema:download --endpoint=https://l9mlzv756q.sse.codesandbox.io/ graphql-schema.json`

- generate using apollo

`apollo codegen:generate --localSchemaFile=graphql-schema.json --target=typescript --includes=src/**/*.ts --tagName=gql --addTypename types`
