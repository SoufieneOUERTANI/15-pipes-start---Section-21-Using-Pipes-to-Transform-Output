# 15PipesStart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## npm install

## Add bootstrap

    npm install --save bootstrap@3	
    in the angular.json, replace 	
        "styles": [
          "src/styles.css"
        ,
        
        by this
        
        "styles": [
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
          "src/styles.css"
        ,

## 328. Using Pipes : uppercase, date

    <strong>{{ server.name }}</strong> |
    {{ server.instanceType | uppercase}} | 
    {{ server.started | date}}

##  329. Parametrizing Pipes

    https://angular.dev/api

    {{ server.started | date:'dd/MM/yyyy'}} 

## 331. Chaining Multiple Pipe
The order maybe important

    {{ server.started | date:'fullDate' | uppercase }}

## 332. Creating a Custom Pipe ; @Pipe, implements PipeTransform

    @Pipe({name:'shorten'})
    export class ShortenPipe implements PipeTransform{


    declarations: [
      AppComponent,
      ShortenPipe
    ],

## 333. Parametrizing a Custom Pipe

    transform(value: any, limit : number, dot : string) {

    <strong>{{ server.name | shorten:15:' ...'}}</strong> |

## 334. Example: Creating a Filter Pipe

    ng g p filter

    <input type="text" [(ngModel)]="filetredStatus">

    *ngFor="let server of servers | filter:filetredStatus:'status'"

    transform(value: any, filterString:string, propName : string): any {
      if(value.length===0){
        return value;
      }
      const returnArray:any =[];
      for(const item of value){
        if(item[propName] ===filterString){
          returnArray.push(item)
        }
      }
      return returnArray;
    }

## 335. Pure and Impure Pipes (or: How to "fix" the Filter Pipe)

    @Pipe({
      name: 'filter',
      pure : false
    })

pure : false => 

  - updates the page display whenever the data changes, even when the filter does not change
  - else the page display changes only if the filter changes


 ## 336. Understanding the "async" Pipe

    appStatus = new Promise ((resolve)=>{
      setTimeout( ()=> {
        resolve('stable')
      },2000)
    });

    <h2>App status : {{appStatus | async}}</h2>

Without async, as the data is a promise object, that data will not be displayed

## 336-After Assignement 8 - Pipes : reverse a word , sort a list 

