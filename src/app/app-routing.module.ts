import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentslistComponent } from '../app/components/departments/departmentslist/departmentslist.component'
import { DepartmentdetailsComponent } from '../app/components/departments/departmentdetails/departmentdetails.component'
import { NewdepartmentComponent } from '../app/components/departments/newdepartment/newdepartment.component'
import { PagenotfoundComponent } from '../app/components/includes/pagenotfound/pagenotfound.component'

const routes: Routes = [
  { path: '',   redirectTo: '/departments', pathMatch: 'full' }, // redirect to `departments`
  { path: 'departments', component: DepartmentslistComponent },
  { path: 'department/new', component: NewdepartmentComponent },
  { path: 'department/:departmentId', component: DepartmentdetailsComponent },
  { path: '**', component: PagenotfoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
