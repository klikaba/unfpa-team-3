import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { 
    path: 'content-page', 
    component: ContentComponent 
  },
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'intro-page',
    component: IntroComponent
  }
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }