import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { TestPipe } from './pipes/test.pipe';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './search/search.component'

const routes: Routes = [
  {path:'',component:Comp2Component },
  {path:'cuntrys',component:Comp2Component },
  {path:'about',component:AboutComponent },
  {path:'Search',component:SearchComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    TestPipe,
    HomeComponent,
    AboutComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
