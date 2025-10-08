<h1 align="center"">EscrowPi API</h1>

<div align="center">

[![Hackathon](https://img.shields.io/badge/hackathon-PiCommerce-purple.svg)](https://github.com/pi-apps/PiOS/blob/main/pi-commerce.md)
![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-PIOS-blue.svg)

</div>

<div>
    <p align="justify"><b>EscrowPi</b> is a prototype payment solution designed for the Pi Hackathon 2025, providing a secure, escrow-based payment flow for transactions between buyers and sellers using Pi cryptocurrency. The system aims to simplify how developers integrate Pi payments into their own applications while ensuring that both parties in a transaction are protected through an escrow-like process until all fulfillment conditions are met.</p>
</div>

## Table of Contents

- [Overview](#overview)
- [Brand Design](#brand-design)
- [Tech Stack](#tech-stack)
- [Backend Local Execution](#backend-local-execution)
- [Team](#team)
- [Contributions](#contributions)

## <a name='overview'></a>Overview 🚀

## <a name='brand-design'></a>Brand Design

| App Logo  | App Icon |
| ------------- |:-------------:|
| <img src="https://i.ibb.co/fYS0ZjVZ/escrow-pi-logo-design.png" alt="escrow-pi-logo" border="0">     | <img src="https://i.ibb.co/fYS0ZjVZ/escrow-pi-logo-design.png" alt="escrow-pi-logo" border="0">

## <a name='tech-stack'></a>Tech Stack 📊

- **Backend**: Express/ NodeJS, REST API
- **Database**: MongoDB
- **DevOps**: GitHub Actions

## <a name='backend-local-execution'></a>Backend Local Execution

The EscrowPi Back End is a [Node.js](https://nodejs.org/) project.

### Build the Project

- Run `npm run build` to build the project; compile Typescript into Javascript for production to the `.dist` folder.
    - The build artifacts are bundled for production mode.

### Execute the Development Server

- Create .env file from the .env.development template and replace placeholders with actual values.
- Execute `npm run dev` to connect to nodemon and MongoDB server.
- Navigate to http://localhost:8001/ in your browser.
- Utilize API tools like Insomnia or Postman to execute the API endpoints.
    - The application will automatically reload if you change any of the source files. 
    - For local debugging in VS Code, attach the runtime server to the appropriate Process ID.

### Execute Unit Tests

- Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io/).

## <a name='team'></a>Team 🧑👩‍🦱🧔👨🏾‍🦱👨🏾 

### Project Manager
- Philip Jennings

### Technical Lead/ DevOps
- Danny Lee

### Application Developers
- Yusuf Adisa
- Rajasekhar Reddy

## <a name='contributions'></a>Contributions

<div>
    <p align="justify">We welcome contributions from the community to improve the EscrowPi project.</p>
</div>
