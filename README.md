
# Meowsletter API

A simple express.js API for receiving newsletter information.

## Tech Stack
Node, Express, Nodemon, Jest, Typescript

## Installation

Clone the project

```bash
  git clone https://github.com/Arya-Aghaei/meowsletter-api.git
```

Install dependencies with npm or yarn

```bash
  npm install 
```
or 

```bash
  yarn install
```


it is recommended to put the front-end and back-end projects side by side in a folder structure like this:

```sh
meowsletter
├── meowsletter-api
└── meowsletter
```
    
## Usage/Examples

Start the API server with the following command:

#### For development mode:
```bash
yarn dev
```

#### For production mode:
```bash
yarn start
```


The API will listen on http://localhost:8080 by default. to change the default port, please modify `.env` file.

## Endpoints

#### POST /newsletter
This endpoint allows you to submit newsletter information.

### Request Body
```json
{
  "name": "John Doe",
  "email": "example@example.com",
  "language": "de",
  "time": "MM"
}
```

- name (__optional__): Can be a string
- email (__required__): Should be a string
- language (__default is en-gb__): Can be en-gb (British English), en-us (American English), de (German) or fa (Persian)
- time (__required__): Time must be MM (Monday Morning), WM (Wednesday Morning) or SE (Sunday Evening)

### Response

- 200: Newsletter information successfully received.

```json
{
    message: "Newsletter added successfully",
    status: "OK",
    data: Request_Body,
  }
```

- 400: Newsletter information is wrong/missing.

```json
{
      message: "Please fill in all fields correctly!",
      errors: [
        {
          field: FIELD_NAME,
          message: VALIDATION_MESSAGE,
        }
      ],
      status: "NOT_VALID",
      invalidFields: LIST_OF_INVALID_FIELDS,
    }
```

- 404: Endpoint is wrong or does not exist.

```json
{
    message: "not found,
}
```









## Running Tests

To run tests, run the following command

```bash
  npm run test
```
or 
```bash
 yarn test
```


## Authors

- [@arya-aghaei](https://github.com/Arya-Aghaei/)

