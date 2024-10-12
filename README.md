# react-easy-login

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
