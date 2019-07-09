import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { registrationService } from './registration.Service';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule,HttpClientModule],
  declarations: [AppComponent],
  providers: [registrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
