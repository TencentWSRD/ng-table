# ngTable ES6+SystemJS Demo App

## Overview

* Loads `ng-table` on to the page using webpack
* Application code written in ES2015

## Running sample App

1. cd demo-apps/es5
2. `npm install`
3. `npm run setup:local`
    * runs typescript compiler for ng-table
    * in this app's node_modules, creates a symlink reference to your local ng-table on disk
4. `npm start`
    * runs typescript compiler for ng-table in watch mode
    * runs webpack-dev-server to serve this app's index.html