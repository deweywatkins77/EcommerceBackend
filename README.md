# EcommerceBackend
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

API interface for an Ecommerce backend. API allows for get, post, put, and deletions of data for all tables.

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

```
npm i
```

## Usage

Setup your .env file for DB access. Run schema.sql in the db folder to initialize the DB. There are seed files in the seeds folder. You can run all the seeds by using npm run seed. Once that is all setup you can start the app with npm run start. 

You can get all entries, get one entry by id, create a record, update a record by id, and delete a record by id for
each of the following routes

/api/products
/api/categories
/api/tags

For getting one entry by id, updating a record by id, and deleting a record by id you will need to append an id number to the path. For example, using the DELETE method with /api/products/1, will delete the record with an id of 1 in the products table.

[How to use](https://watch.screencastify.com/v/YFAxefnj1ARTfdzymhH3) the API.

## License

This project is licensed under the MIT license.
  
## Contributing

For contributions please email me at deweywatkins77@gmail.com

## Tests

To run tests, run the following command:

```
N/A
```

## Questions

If you have any questions about the repo, open an issue or contact me directly at deweywatkins77@gmail.com. You can find more of my work at [deweywatkins77](https://github.com/deweywatkins77/).
