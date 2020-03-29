# Project 2 Template


## Instructions

Use this boilerplate code for Project 2. Follow the instructions below to set up your project

### Branch Protection Rules
1. In Github, go to Settings > Branches > Branch Protection Rules > Add Rule
2. To apply rules to the master branch, type `master` in the branch name pattern
3. Apply the following rules
    - Require pull request reviews before merging
    - Require status checks to pass before merging
         - Require branches to be up to date before merging
    - Include administrators

### ESLint & Travis CI

#### ESLint
__ESLint__ ensures our code styles are consistent across a project. The styling rules for eslint can be defined in the [.eslintrc.json file](./.eslintrc.json)


Download the [ESLint VSCode Extension here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). You can also download the [Prettier VS Code Extension here](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to auto format your code. I have included some default rules in the [settings.json](./.vscode/settings.json) file to ensure they will work together.

#### Travis CI
__Travis CI__ tests our code for us when a pull request is opened. If Github branch protections are set up correctly, Travis CI should block pull requests when the tests failed. Tests for Travis CI are specified in the `test` script of the [package.json file](./package.json). For our purposes, we will just be using Travis CI to ensure our ESLint rules are followed before allowing deployment.   


Click [here](https://github.com/marketplace/travis-ci) to set up Travis CI. Make sure to give it access to your project repository

## Project Requirements

### Code Requirements

* Must use a Node and Express server

* Must be backed by a MySQL database and an ORM (not necessarily Sequelize)

* Must utilize both GET and POST routes for retrieving and adding new data

* Must be deployed using Heroku (with data)

* Must utilize at least one new third-party API

* Must have a polished UI

* Must use a CSS framework _other than_ Bootstrap

* Must follow MVC paradigm

* Must meet good quality coding standards (indentation, scoping, naming)

### Presentation Requirements

Use this [project presentation template](https://docs.google.com/presentation/d/1_u8TKy5zW5UlrVQVnyDEZ0unGI2tjQPDEpA0FNuBKAw/edit?usp=sharing) to address the following: 

* Elevator pitch: a one minute description of your application

* Concept: What is your user story? What was your motivation for development?

* Process: What were the technologies used? How were tasks and roles broken down and assigned? What challenges did you encounter? What were your successes?

* Demo: Show your stuff!

* Directions for Future Development

* Links to to the deployed application and the GitHub repository

### Grading Metrics
| Metric        | Weight | 
| ---           | ---    |
| Concept       | 10%    |
| Design        | 20%    |
| Functionality | 30%    |
| Collaboration | 30%    |
| Presentation  | 10%    |
