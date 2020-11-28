// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
// import { MyStackComponent } from './components/my-stack/my-stack.component';
// import { MyQueueComponent } from './components/my-queue/my-queue.component';
// //import { MyQueueComponent } from './Components/my-queue/my-queue.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     MyStackComponent,
//     MyQueueComponent,
//     //MyQueueComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule{}


import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';





import { AppComponent } from './app.component';

//import { MyStackComponent } from './Components/my-stack/my-stack.component';

//import { MyQueueComponent } from './Components/my-queue/my-queue.component';
//import { ServicesComponent } from './components/my-stack/services/services.component';
import { MyStackImplementationComponent } from './services/my-stack-implementation/my-stack-implementation.component';
import { MyStackComponent } from './components/my-stack/my-stack.component';
import { MyQueueComponent } from './components/my-queue/my-queue.component';
import { ServicesComponent } from './services/services.component';





@NgModule({

  declarations: [

    AppComponent,

    MyStackComponent,

    MyQueueComponent,

    ServicesComponent,

    MyStackImplementationComponent

  ],

  imports: [

    BrowserModule,

    RouterModule.forRoot([

      {

        path:"Stack",

        component:MyStackComponent

      },

      {

        path:"Queue",

        component:MyQueueComponent

      },

    ])

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }