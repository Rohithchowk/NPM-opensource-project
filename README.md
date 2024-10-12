<h1>1.<u>react-easy-login</u></h1>


`react-easy-login` is a simple and easy-to-use React component for implementing a login page with minimal code. It provides a pre-styled login form that you can use in your React applications by simply passing a few props.

## Features

- **Simple to integrate**: Drop the login form into your React project without the need to write a full login page.
- **Customizable**: Easily configure input fields and authentication endpoint.
- **Routing support**: Automatically redirect users after successful login.
- **Built-in form validation**: Basic form validation out of the box.
- **Error handling**: Displays error messages for failed login attempts.

## Installation

You can install `react-easy-login` using npm or yarn.

### Using npm:
```bash
npm install react-easy-login
```
### Using the module

```jsx
import React from 'react';
import Login from 'react-easy-login';

function App() {
  return (
    <div className="App">
      <Login
        inputs={['email', 'password']}
        authFields={['email', 'password']}
        uri="https://your-auth-api.com/login"
        redirectto="/dashboard"
        registerroute="/register"
      />
    </div>
  );
}

export default App;
```




## Props

The `Login` component accepts the following props:

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>inputs</code></td>
      <td>Array</td>
      <td>An array of strings that specify the input fields (e.g., <code>['email', 'password']</code>).</td>
    </tr>
    <tr>
      <td><code>authFields</code></td>
      <td>Array</td>
      <td>Fields to be sent in the authentication request (should match your backend API fields).</td>
    </tr>
    <tr>
      <td><code>uri</code></td>
      <td>String</td>
      <td>The API endpoint to which login credentials are submitted.</td>
    </tr>
    <tr>
      <td><code>redirectto</code></td>
      <td>String</td>
      <td>Path to redirect to after a successful login (e.g., <code>/dashboard</code>).</td>
    </tr>
    <tr>
      <td><code>registerroute</code></td>
      <td>String</td>
      <td>Path to the registration page (e.g., <code>/register</code>). Users will be redirected here if they don't have an account.</td>
    </tr>
  </tbody>
</table>

## Customization

You can customize the styles by overriding the default CSS classes defined in Login.css. You can also change the structure of your authentication form using props.

```css

.auth-container {
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 10px;
}

.submit-btn {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #218838;
}

```


# react-easy-register

`react-easy-register` is a simple and customizable registration component for React applications. With this component, you can easily create a registration page with minimal setup.

## Installation

You can install the package via npm:

```bash
npm install react-easy-register
```

## Using the module react-easy-register
To use the Register component, simply import it and include it in your React component. Here is an example:
```jsx
import React from 'react';
import Register from 'react-easy-register';

function App() {
  return (
    <div className="App">
      <Register
        inputs={['name', 'email', 'password']}
        authFields={['name', 'email', 'password']}
        uri="https://your-auth-api.com/register"
        redirectto="/login"
        loginroute="/login"
      />
    </div>
  );
}

export default App;
```

# Auth Server Module

This module creates a simple authentication server using Express and MongoDB. It provides endpoints for user registration and login, and it supports JSON Web Tokens (JWT) for authentication. This module is designed to work seamlessly with `react-easy-login` and `react-easy-register`.

## Features

- User registration and login
- Password hashing with bcrypt
- JWT-based authentication
- Dynamic schema creation based on user-defined fields
- CORS support
- Middleware for protected routes

## Installation

To use this module, first install the necessary dependencies:

```bash
npm install express mongoose bcrypt jsonwebtoken body-parser cors
```
## Usage
Here's how to create an authentication server using this module:
```jsx
const createAuthServer = require('path/to/your/auth-server-module');

const serverConfig = {
  port: 5000, // Specify the port for the server
  mongoUri: 'mongodb://localhost:27017/yourdbname', // Replace with your MongoDB URI
  authFields: ['email', 'password'], // Specify authentication fields
  fields: ['name', 'email', 'password'], // Specify user fields
  jwtSecretKey: 'your_jwt_secret_key', // Replace with a strong secret key
};

createAuthServer(serverConfig);
```
<h2>Configuration</h2>
<h3>Server Configuration Options</h3>
<table>
    <thead>
        <tr>
            <th>Option</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>port</code></td>
            <td>Number</td>
            <td>The port on which the server will listen</td>
        </tr>
        <tr>
            <td><code>mongoUri</code></td>
            <td>String</td>
            <td>The connection URI for MongoDB</td>
        </tr>
        <tr>
            <td><code>authFields</code></td>
            <td>Array</td>
            <td>Fields used for authentication (e.g., email)</td>
        </tr>
        <tr>
            <td><code>fields</code></td>
            <td>Array</td>
            <td>User data fields for the schema</td>
        </tr>
        <tr>
            <td><code>jwtSecretKey</code></td>
            <td>String</td>
            <td>Secret key for signing JWTs</td>
        </tr>
    </tbody>
</table>

# License
This project is licensed under the MIT License. 


## `MIT License`

## `Copyright (c) 2024 RohithChowki`

`Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:`

`1. The above copyright notice and this permission notice shall be included in
   all copies or substantial portions of the Software.`

`2. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   SOFTWARE.`



