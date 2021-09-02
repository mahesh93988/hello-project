import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NewgitComponent } from './newgit/newgit.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NewgitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
