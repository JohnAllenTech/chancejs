# Chance

[![Chance Logo](http://chancejs.com/logo.png)](http://chancejs.com)

[![Build](https://github.com/JohnAllenTech/chancejs/actions/workflows/build.yml/badge.svg)](https://github.com/JohnAllenTech/chancejs/actions/workflows/build.yml) [![GitHub license](https://img.shields.io/github/license/chancejs/chancejs.svg)](https://github.com/chancejs/chancejs) [![GitHub stars](https://img.shields.io/github/stars/chancejs/chancejs.svg)](https://github.com/chancejs/chancejs) [![npm](https://img.shields.io/npm/dm/chance.svg)](https://npmjs.com/package/chance) [![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/chance/badge?style=rounded)](https://www.jsdelivr.com/package/npm/chance) [![npm](https://img.shields.io/npm/v/chance.svg)](https://npmjs.com/package/chance) [![Coverage Status](https://coveralls.io/repos/chancejs/chancejs/badge.svg?branch=master)](https://coveralls.io/r/chancejs/chancejs?branch=master) [![awesomeness](https://img.shields.io/badge/awesomeness-maximum-red.svg)](https://github.com/chancejs/chancejs)

Chance - Random generator helper for JavaScript

Homepage: [http://chancejs.com](http://chancejs.com)

Many more details on [http://chancejs.com](http://chancejs.com) but this single
library can generate random numbers, characters, strings, names, addresses,
dice, and pretty much anything else.

It includes the basic building blocks for all these items and is built on top
of a Mersenne Twister so it can generate these things with repeatability, if
desired.

## Usage

See the [full docs](https://chancejs.com) for details on installation and usage.

## Dependent tools

- [Chance CLI](https://github.com/chancejs/chance-cli) - Use Chance on the command line.
- [Chance Token Replacer](https://github.com/drewbrokke/chance-token-replacer) - Replace tokens in a string with Chance generated items.
- [Dream.js](https://github.com/adleroliveira/dreamjs) - Lightweight json data generator
- [Fake JSON Schema](https://github.com/pateketrueke/json-schema-faker/) - Use chance generators to populate JSON Schema samples.
- [Mocker Data Generator](https://github.com/danibram/mocker-data-generator/) - Minimal JSON data generator.
- [swagger-mock-api](https://github.com/dzdrazil/swagger-mock-api/) - Generate API mocks from a Swagger spec file enriched with Chance types and constraints
- [fony](https://github.com/captainsafia/fony) - A simple command line tool for generating fake data from a template string

Or [view all of the dependents on npm](https://www.npmjs.com/package/chance)

_Know a library that uses Chance that isn't here? Update the README and submit a PR!_

### Victor Quinn

[https://www.victorquinn.com](https://www.victorquinn.com)
[@victorquinn](https://twitter.com/victorquinn)

Please feel free to reach out to me if you have any questions or suggestions.

### Contributors

THANK YOU!

### Contribute!

Be a part of this project! You can run the tests using the following.

1. Install dependencies from package.json by running `yarn install`
2. Run the tests via `npm run test:all`

#### Adding new packages and or enhancing functionality of existing packages !

To add a new package like @chancejs/person or @chancejs/web you can run `npm run package:create`

To add functions to that (or any other) package you can run `npm run function:create`

These commands will scaffold all the boilerplate you need and get you working on logic straight away!

This project is licensed under the [MIT License](http://en.wikipedia.org/wiki/MIT_License) so feel free to hack away :)

### Run Tests

Run tests for all packages with `npm run test:all `

Run test for individual package with `yarn workspace @chancejs/${PACKAGE_TO_TEST} test` ie `yarn workspace @chancejs/letter test`

Proudly written in Washington, D.C. 🇺🇸

Shamelessly rewritten in TypeScript in Kilkenny, Ireland 🇮🇪
