import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrormessageComponent } from './components/alerts/errormessage/errormessage.component';
import { SuccessmessageComponent } from './components/alerts/successmessage/successmessage.component';
import { ContentComponent } from './components/includes/content/content.component';
import { HeaderComponent } from './components/includes/header/header.component';
import { PagenotfoundComponent } from './components/includes/pagenotfound/pagenotfound.component';
import { DepartmentdetailsComponent } from './components/departments/departmentdetails/departmentdetails.component';
import { DepartmentslistComponent } from './components/departments/departmentslist/departmentslist.component';
import { NewdepartmentComponent } from './components/departments/newdepartment/newdepartment.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrormessageComponent,
    SuccessmessageComponent,
    ContentComponent,
    HeaderComponent,
    PagenotfoundComponent,
    DepartmentdetailsComponent,
    DepartmentslistComponent,
    NewdepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
