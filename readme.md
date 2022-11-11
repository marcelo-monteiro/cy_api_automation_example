# Automated API Tests Suite with Cypress
These tests suit runs only in local environment.
All depencies must be installed locally:

```sh
yarn install
```

Nodejs version required for running tests: >=16.10.0

On this project the reporter used is Allure. To install it execute the following command:
```sh
yarn global add allure-commandline
```


**Tests Structure**

```sh
.
├── cypress
│   ├── downloads
│   ├── e2e
│   │   ├── getPets.cy.js
│   │   └── postPets.cy.js
│   ├── fixtures
│   │   └── petstore
│   │       ├── get
│   │       │   └── valid_pet.json
│   │       └── post
│   │           ├── empty_post.json
│   │           └── valid_post.json
│   ├── screenshots
│   │   └── getPets.cy.js
│   ├── support
│   │   ├── commands.js
│   │   └── e2e.js
│   └── videos
├── cypress.config.js
├── package.json
├── readme.md
└── yarn.lock
```


## Running Api Tests

All dependencies for tests are listed in package.json, which will be installed running yarn command.

All tests will performed in Chrome browser, defined as default on package.json scripts. 

To perform front-end tests please run the following commands on the root directory, after installing all dependecies:

```sh
# Open Cypress to execute tests on GUI 
$ yarn open 

# To run e2e tests with report
$ yarn tests:report
```

##### Maintainability

The tests were scripted using Cypress native fixtures solution handling test data, in this case using for store the payloads and schemas for tests in the folder "fixtures"

#### Opening the report

After performing the API tests, the reports are generated using Allure (depencies listed on package.json), but it requires JDK in order to open the report correctly.
Executing the command bellow, will open the report in your browser:

```sh
# To open report 
$ allure server
```

## Next Steps

Only a few endpoints and some schema are validated in this project, so it is possible to enhance it greatly adding more tests and schema validation rules

Like in the Front-End tests example, dockerizing these tests would enhance the realiability of the scenarios, by avoiding errors caused by libraries and dependencies.