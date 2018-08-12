# Angular datatable with Observable (JSON)

Example how use angular datatable with sort and filtering with json data

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.3.

## Install Angular-Datatable

https://l-lin.github.io/angular-datatables/#/getting-started

```
npm install jquery --save
npm install datatables.net --save
npm install datatables.net-dt --save
npm install angular-datatables --save
npm install @types/jquery --save-dev
npm install @types/datatables.net --save-dev

```
## Configure angular.json file

```
{
  "projects": {
    "your-app-name": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/datatables.net-dt/css/jquery.dataTables.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.js",
              "node_modules/datatables.net/js/jquery.dataTables.js"
            ],
            ...
}

```
## Import the DataTablesModule at the appropriate level of your app.

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    DataTablesModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

```

