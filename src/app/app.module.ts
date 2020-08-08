import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Routes} from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NextComponent } from './next/next.component';

@NgModule({
  declarations: [
    AppComponent,
    NextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,RouterModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
