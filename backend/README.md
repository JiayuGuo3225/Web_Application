# Backend


## Major files
```
.
|-- README.md 
|-- config            #config files for database, admins, middleware, plugins and apis
    |-- cron-tasks.js #code to get and update match information
|-- src
    |-- admin
    |-- api           #schema for the main contents and their controllers
    |   |-- available-bet
    |   |-- bet
    |   `-- user1
    `-- index.js      # graphql customization

```
## Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

