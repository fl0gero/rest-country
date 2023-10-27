# Rest Country

Rest Country is an app that provides essential information about any country you wish to search.

Stack of technologies:

- Frontend
  - React
  - Tailwind
  - Vite
  - TypeScript
- Backend
  - Node.js
  - Express.js

## Set up

Before you get started, make sure you have the following prerequisites:

```
Windows with WSL, Linux or MacOS system
Node (v19.7.0)
npm (v9.5.0)
```

## Installation

- Clone the repository using the following command:

  ```
  git clone https://github.com/fl0gero/rest-country
  ```

- Enter the repository directory:
  ```
  cd rest-country
  ```
- Enter the `frontend` folder:
  ```
  cd frontend
  ```
- Install the dependencies for the frontend:
  ```
  npm install
  ```
- Return to the parent directory, then enter the backend folder and install its dependencies:
  ```
  cd ../
  cd backend
  npm install
  ```

## How to start

To start the frontend, open your terminal and run the following commands:

```
cd frontend
npm run dev
```

For the backend, follow the same steps:

```
cd backend
npm run dev
```

## Usage

To find needed country:

- click on the input
- type country name (e.x `Sweden`)
- press `Search` button

You will receive information about the selected country.

### Additional

If the selected country shares borders with neighboring countries, you can access more information about them by simply clicking on their names.
