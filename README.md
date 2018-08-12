# Angular datatable with Observable (JSON) using <a href="/gif/-TqJ-CN" title=""><img src="https://restcountries.eu/" alt="">REST Countries</a> API

Example how use angular datatable with sort and filtering with json data

<a href="/gif/-TqJ-CN" title=""><img src="https://i.makeagif.com/media/8-12-2018/TqJ-CN.gif" alt=""></a>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.3.

## Install Angular-Datatable dependencies

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

