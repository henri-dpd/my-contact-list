# My Contact List Test Project

## Overview

This project is a comprehensive contact list application implemented with modern web technologies. The client-side is built using `React` and styled with `Tailwind CSS`, ensuring a responsive and visually appealing user interface. The server-side is powered by `NestJS`, a progressive Node.js framework, which provides a robust and scalable backend. For data storage, the application utilizes `MySQL`, a reliable and widely-used relational database management system.

The application serves the website through a static server, ensuring fast load times and a seamless user experience. This setup allows for efficient handling of user interactions and data management, making it a reliable tool for managing contacts.

Key features include:
- **Responsive Design**: Ensures usability across various devices and screen sizes.
- **Scalable Backend**: Built with `NestJS` to handle growing data and user demands.
- **Efficient Data Management**: Utilizes `MySQL` for reliable and structured data storage.
- **Modern UI**: Styled with `Tailwind CSS` for a clean and intuitive user interface.

## Installation

To set up the project, follow these steps:

1. Clone the repository:
  ```bash
  git clone https://github.com/henri-dpd/my-contact-list.git
  cd my-contact-list
  ```

2. Install server dependencies:
  ```bash
  npm install
  ```

3. Install client dependencies:
  ```bash
  cd ./client
  npm install
  ```

4. Build the client:
  ```bash
  npm run build
  ```

## Running the Application in Development Mode

To run the application, use the following commands:

1. Start the server:
  ```bash
  npm run start:dev
  ```

2. Start the client:
  ```bash
  cd ./client
  npm run dev
  ```

## Running with Docker for Production Mode

To create images and run the container, execute the following command:

```bash
docker-compose up
```

## Running Unit Tests

To run unit tests for the application, use the following command:

```bash
npm run test
```