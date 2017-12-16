import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';

import { AppComponent } from './app.component';

/*const appRoutes: Routes = [
  
  {
     path : "",
  children :[
    {path: '', component: HomeComponent },
  {  path: 'content-page', component: ContentComponent },
  { path:'intro-page',component: IntroComponent }]}
];*/

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'content-page', component: ContentComponent },
  { path: 'intro-page', component: IntroComponent }
 ];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    IntroComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }