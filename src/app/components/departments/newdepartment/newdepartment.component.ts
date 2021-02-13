import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../../services/department.service';
import { HttpResponse } from '@angular/common/http';
import { Department } from '../../../models/department';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newdepartment',
  templateUrl: './newdepartment.component.html',
  styleUrls: ['./newdepartment.component.css']
})
export class NewdepartmentComponent implements OnInit {

  departmentDetails: Department;

  name: string = '';
  apiKey: string = '';
  contactPersonName: string = '';
  contactPersonEmail: string = '';
  contactPersonTelephone: string = '';

  errorMessage: boolean = false;
  errorMessageContent: string = '';
  successMessage: boolean = false;
  successMessageContent: string = '';

  constructor(private departmentService: DepartmentService, private router: Router) { }

  ngOnInit(): void {
  }

  createDepartment(): void {
    if (this.name == '' || this.name == null || this.name == undefined) {
      this.errorMessage = true;
      this.errorMessageContent = 'Department name is required.';

      this.disableAlert();
    }
    else if (this.apiKey == '' || this.apiKey == null || this.apiKey == undefined) {
      this.errorMessage = true;
      this.errorMessageContent = 'Api Key is required.';

      this.disableAlert();
    }
    else if (this.contactPersonName == '' || this.contactPersonName == null || this.contactPersonName == undefined) {
      this.errorMessage = true;
      this.errorMessageContent = 'Contact Person Name is required.';

      this.disableAlert();
    }
    else if (this.contactPersonEmail == '' || this.contactPersonEmail == null || this.contactPersonEmail == undefined) {
      this.errorMessage = true;
      this.errorMessageContent = 'Contact Person Email is required.';

      this.disableAlert();
    }
    else if (this.contactPersonTelephone == '' || this.contactPersonTelephone == null || this.contactPersonTelephone == undefined) {
      this.errorMessage = true;
      this.errorMessageContent = 'Contact Person Telephone is required.';

      this.disableAlert();
    }
    else {
      this.departmentDetails = {
        name: this.name,
        apiKey: this.apiKey,
        contactPersonName: this.contactPersonName,
        contactPersonEmail: this.contactPersonEmail,
        contactPersonTelephone: this.contactPersonTelephone
      };

      this.departmentService.addDepartment(this.departmentDetails).subscribe((res: HttpResponse<any>) => {
        if (res.status == 201) {
          // this.successMessage = true;
          // this.successMessageContent = 'Department created successfully.';

          this.router.navigate(['/departments']);
        }
        else {
          this.errorMessage = true;
          this.errorMessageContent = 'Error in creating a new department.';
        }
        this.disableAlert();
      })
    }
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
