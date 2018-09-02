# Github Fetcher

A simple Vue App to fetch Github repos of given users and render the readme of repos as HTML

- [See it live!](https://leadiqfe.firebaseapp.com/)

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)  

<p align="center"> :collision: :collision: :collision:
  <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="100" src="https://vuejs.org/images/logo.png" alt="Vue logo"></a>:sparkling_heart: :sparkling_heart: :sparkling_heart:
   
  </p>
  
  
<p align="center">
https://github.com/vuejs/vue-cli and https://github.com/vuejs/vuex .
</p>
  


<p align="center">
  <a href="https://circleci.com/gh/vuejs/vue/tree/dev"><img src="https://img.shields.io/circleci/project/vuejs/vue/dev.svg" alt="Build Status"></a>
  <a href="https://codecov.io/github/vuejs/vue?branch=dev"><img src="https://img.shields.io/codecov/c/github/vuejs/vue/dev.svg" alt="Coverage Status"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/l/vue.svg" alt="License"></a>
</p>

Also I suggest you to use [vue-devtools](https://github.com/vuejs/vue-devtools) if you want a see how everything happens.

## How it works.
- Search bar to enter username.
- Get User Repos on Enter.
- Get Readme of Repo on click each repo. Render Readme as HTML



## Build Setup


####  -Clone 
```
 git clone https://github.com/olajohn-ajiboye/GityReadMe.git (or download Zip && Exract)
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

- on npm install you will get cypress installed also (be patient it takes more time).
- After getting all dependencies installed  run ``` npx cypress open``` .
-  This will lunch cypress GUI , click on the `run spec `  to run the test in chrome (this also take time)
- You have to reconfigure the cypress.json file's "baseUrl" option to match your local host.Or test with the one I have setup.
- More info on running cypress - https://medium.com/js-dojo/end-to-end-testing-a-vuejs-hackernews-clone-23b9415fd5c5
 https://www.cypress.io/


