import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './shared/api.service';


@NgModule(
  {
    declarations: [
      AppComponent,
      EmployeeDashboardComponent
     
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
  }
)
export class AppModule { }

