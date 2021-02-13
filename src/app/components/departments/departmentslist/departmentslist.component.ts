import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../../services/department.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-departmentslist',
  templateUrl: './departmentslist.component.html',
  styleUrls: ['./departmentslist.component.css']
})
export class DepartmentslistComponent implements OnInit {

  departments: any = [];
  searchDepartment: string = '';
  errorMessage: boolean = false;
  errorMessageContent: string = '';
  successMessage: boolean = false;
  successMessageContent: string = '';

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.fetchDepartments();
  }

  fetchDepartments() {
    return this.departmentService.fetchDepartments().subscribe((res: HttpResponse<any>) => {
      if (res.status == 200) {
        this.departments = res.body;
      }
      else {
        this.errorMessage = true;
        this.errorMessageContent = 'Error in fetching the departments from the system.';

        this.disableAlert();
      }
    })
  }

  removeDepartment(departmentid) {
    this.departmentService.deleteDepartment(departmentid).subscribe((res: HttpResponse<any>) => {
      if (res.status == 200) {
        this.successMessage = true;
        this.successMessageContent = 'Department removed successfully.';

        this.fetchDepartments();
      }
      else {
        this.errorMessage = true;
        this.errorMessageContent = 'Error in removing the department from the system.';
      }
      this.disableAlert();
    })
  }

  disableAlert() {
    setTimeout(() => {
      this.errorMessage = false;
      this.successMessage = false;
      this.errorMessageContent = '';
      this.successMessageContent = '';
    }, 1500)
  }

}
