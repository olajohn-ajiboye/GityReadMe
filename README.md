# Github Fetcher

A simple Vue App to fetch Github repos of given users and render the readme of repos as HTML

- [See it live!](https://leadiqfe.firebaseapp.com/)

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) 
<p align="center"><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="100" src="https://vuejs.org/images/logo.png" alt="Vue logo"></a></p>
[vue-cli](https://github.com/vuejs/vue-cli) and [vuex](https://github.com/vuejs/vuex).
<p align="center">
  <a href="https://circleci.com/gh/vuejs/vue/tree/dev"><img src="https://img.shields.io/circleci/project/vuejs/vue/dev.svg" alt="Build Status"></a>
  <a href="https://codecov.io/github/vuejs/vue?branch=dev"><img src="https://img.shields.io/codecov/c/github/vuejs/vue/dev.svg" alt="Coverage Status"></a>
  <a href="https://npmcharts.com/compare/vue?minimal=true"><img src="https://img.shields.io/npm/dm/vue.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/v/vue.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/l/vue.svg" alt="License"></a>
  <a href="https://chat.vuejs.org/"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg" alt="Chat"></a>
  <br>
  <a href="https://saucelabs.com/u/vuejs"><img src="https://saucelabs.com/browser-matrix/vuejs.svg" alt="Sauce Test Status"></a>
</p>

Also I suggest you to use [vue-devtools](https://github.com/vuejs/vue-devtools) if you want a see how everything happens.

## How it works.
- Search bar to enter username.
- Get User Repos on Enter.
- Get Readme of Repo on click each repo. Render Readme as HTML


## Build Setup


####  -Clone 
```
 git clone https://MOMGOPARK@bitbucket.org/MOMGOPARK/leadiq-git-fend.git (or download Zip && Exract)
```
####  -cd (change directory) into project folder
```
 cd [project folder]
```
####  - install dependecies
```
 npm install
```
####  - start dev build on Localhost
```
 npm start or npm run dev
```
####  - build for production
```
 npm run build --prod
```
default port will be: http://localhost:8080/ or http://localhost:8081/

####  - npm test
I have attempted to write few basic e2e test with cypress. To run test. This is my first e2e test,
hence it's quite basic and incomplete. I have since gained tremendous enthutiasm to learn more.

- on npm install you will get cypress installed also (be patient it takes more time).
- After getting all dependencies installed  run ``` npx cypress open``` .
-  This will lunch cypress GUI , click on the `run spec `  to run the test in chrome (this also take time)
- You have to reconfigure the cypress.json file's "baseUrl" option to match your local host.Or test with the one I have setup.
- More info on running cypress - https://medium.com/js-dojo/end-to-end-testing-a-vuejs-hackernews-clone-23b9415fd5c5
 https://www.cypress.io/


