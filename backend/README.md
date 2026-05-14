## Backend

### Before all

`npm install`

### TO RUN

`npm start`

### run codegen after schema changes

`npm run codegen`

#### IMPORTANT!!!

- do not try to run yet, graphql is a WIP
-

### Rules for development

- Keep resolvers segmented by parent type
- try to keep resolvers free from logic, develop this in lib
- any expensive calls should be made field level resolvers
- use custom type validation logic inside of lib for any microservices
- use types from within types.ts in lib
