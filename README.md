# Simple Task Manager App

> This project is a basic task management web application designed to help users create, view, and manage their tasks efficiently. The frontend is built using React.js, a popular JavaScript library for building user interfaces. For handling global application state and ensuring smooth data flow between components, the project utilizes React-Redux, a predictable state management library that integrates seamlessly with React.

The following steps will walk you through installation on a Mac. Linux should be similar. It's also possible to develop on a Windows machine, but I have not documented the steps. If you've developed the apps on Windows, you should have little problem getting up and running.

#### 
If the below version is available, it will be very easy to install and run the project on your local development server.
- v14.4.0
- 6.14.8

```
git clone https://github.com/mbrsagor/ReactRedux.git
cd ReactRedux
npm install
npm start
```

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### The project Features:
- Authentication token system:
 - Registration system.
 - Login system.
 - Reset password.
- Backend API connection.
- Develop a simple admin template
- Frontend latest development with responsive, SCSS, and how to work. 

###### Implement SCSS in the new React version
```base
yarn add node-sass@4.14.1
```

If you already have scss and any error is raised, then you may replace it and follow the command.
>NPM
```base
npm uninstall node-sass
npm install node-sass@4.14.1
```
>Yarn
```base
yarn remove node-sass
yarn add node-sass@4.14.1
```

If React dev tools are installed and any error is raised, then you may replace and follow the code below.
```javascript
compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
```
