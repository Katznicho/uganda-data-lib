# UGANDA DATA LIB
- Welcome to the Uganda Data Project documentation. This guide will help you get started with accessing data related to districts, counties, sub-counties, parishes, and villages in Uganda through the Uganda Data Project API.
{{% /pageinfo %}}

## Prerequisites

Before you begin, ensure that you have the following prerequisite:

- **Uganda Data Project Account:** Visit [uganda.rapharm.shop](https://uganda.rapharm.shop) and sign up for an account if you don't have one.

## Generating API Key

Once you have an account on the Uganda Data Project, follow these steps to generate an API key:

1. Log in to your Uganda Data Project account at [uganda.rapharm.shop](https://uganda.rapharm.shop).
2. Navigate to your profile settings.
3. Under the "API Keys" section, generate an API key. Keep this key secure.

## Accessing Data Through API

Now that you have an API key, you can access data through the Uganda Data Project API:

1. Use the API key in your requests to authenticate and access the Library.
2. Explore the available datasets related to districts, counties, sub-counties, parishes, and villages in Uganda.
3. Follow the Library documentation for details on endpoints, parameters, and response formats.



Feel free to customize the content further based on the specific API features and setup process of the Uganda Data Project.

## Authorization

The Uganda Data Project API utilizes API keys for authorization, ensuring secure access to its services. To interact with the API, users must possess valid API credentials, which can be generated from the "API Keys" section within their Uganda Data Project account.

### API Key Authorization

API Key Authorization involves including a unique API key in the HTTP headers of the API request. The Uganda Data Project API utilizes this method to authenticate and authorize users.

### Generating API Key

Follow these steps to generate an API key:

1. **Log in to Your Uganda Data Project Account:**

   - Visit [uganda.rapharm.shop](https://uganda.rapharm.shop) and log in to your Uganda Data Project account.

2. **Navigate to API Keys:**

   - In your account profile settings, find the "API Keys" section. This is where you can generate and manage your API keys.

3. **Generate API Key:**

   - Inside the "API Keys" section, find an option to generate a new API key. Click on this option to create a unique key for API access.

4. **Copy Your API Key:**
   - Once generated, copy your API key. This key serves as your authentication token.

### Using API Key

To make API requests, include your API key in the HTTP headers of your requests. Here is an example using the `curl` command-line tool:



## Description

The Uganda Data Library is a JavaScript library that provides an interface to the Uganda Rapharm API, allowing users to retrieve information about districts, counties, sub-counties, parishes, and villages.

## Installation

To install the library, use npm:

```bash
npm install uganda-data-lib

```

## Usage
const UgandaData = require('uganda-data-lib');

ugandaDataLib.fetchDistricts()
  .then(data => console.log(data))
  .catch(error => console.error(error.message));
  

| Method                               | Description                                              | Parameters                                      | Return Type       |
| ------------------------------------ | -------------------------------------------------------- | ----------------------------------------------- | ----------------- |
| `constructor(apiKey)`                | Initializes an instance of the class.                    | `apiKey` (string)                              | -                 |
| `setApiKey(apiKey)`                  | Sets the API key and headers for the request.            | `apiKey` (string)                              | -                 |
| `async fetchData(url)`               | Fetches data from the specified URL.                     | `url` (string)                                 | `Promise<any>`    |
| `async fetchDistricts(limit, page, sort_order)` | Fetches the districts with specified limit, page, and sort order. | `limit` (number, default: 100), `page` (number, default: 1), `sort_order` (string, default: "asc") | `Promise<any>`    |
| `async fetchDistrict(uuid)`          | Fetches a district from the API based on the given UUID. | `uuid` (string)                                | `Promise<any>`    |
| `async fetchDistrictCounty(uuid)`    | Fetches a county from the API based on the given UUID of a district. | `uuid` (string)                                | `Promise<any>`    |
| `async fetchDistrictSubcounty(uuid)` | Fetches a sub-county from the API based on the given UUID of a district. | `uuid` (string)                                | `Promise<any>`    |
| `async fetchDistrictParish(uuid)`    | Fetches a parish from the API based on the given UUID of a district. | `uuid` (string)                                | `Promise<any>`    |
| `async fetchDistrictVillage(uuid)`   | Fetches a village from the API based on the given UUID of a district. | `uuid` (string)                                | `Promise<any>`    |

