import angular from 'angular';
import { ngTable } from 'ng-table';
import { myTableComponent } from './my-table/my-table.component';

const demoApp = angular.module('demo-app', [ngTable.name]);

demoApp
    .component('myTable', myTableComponent);

export { demoApp };