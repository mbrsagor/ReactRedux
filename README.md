# React-Redux Task manager app

The following steps will walk you thru installation on a Mac. Linux should be similar. It's also possible to develop on a Windows machine, but I have not documented the steps. If you've developed the apps on Windows, you should have little problem getting up and running.

#### 
If below version is available it will be very easy to install and run the project in your local deve server.
- v14.4.0
- 6.14.8

```
git clone https://github.com/mbrsagor/ReactRedux.git
cd ReactRedux
npm install
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### The project Features:
- Authentication token system:
 - Registration system.
 - Login system.
 - Reset password.
- Backend API connection.
- Develop simple admin-template
- Frontend latest development with responsive, and SCSS how to work. 

###### Implement SCSS in new React version
```base
yarn add node-sass@4.14.1
```

If you already have scss and any error raise then you may replace and follow the command.
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

If react dev tools are installed and any error raise then you may replace and follow the code below.
```javascript
compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
```
