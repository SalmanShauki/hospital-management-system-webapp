import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../../services/department.service'
import { HttpResponse } from '@angular/common/http';
import { Department } from '../../../models/Department';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-departmentdetails',
  templateUrl: './departmentdetails.component.html',
  styleUrls: ['./departmentdetails.component.css']
})
export class DepartmentdetailsComponent implements OnInit {

  departmentDetails: any;
  departmentId: string = '';

  name: string = '';
  apiKey: string = '';
  contactPersonName: string = '';
  contactPersonEmail: string = '';
  contactPersonTelephone: string = '';

  errorMessage: boolean = false;
  errorMessageContent: string = '';
  successMessage: boolean = false;
  successMessageContent: string = '';

  constructor(private departmentService: DepartmentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    this.departmentId = routeParams.get('departmentId');

    this.fetchDepartmentDetails(this.departmentId);
  }

  fetchDepartmentDetails(departmentId) {
    return this.departmentService.fetchSingleDepartment(departmentId).subscribe((res: HttpResponse<any>) => {
      if (res.status == 200) {
        this.departmentDetails = res.body;

        this.name = this.departmentDetails.departmentInfo.name;
        this.apiKey = this.departmentDetails.departmentInfo.apiKey;
        this.contactPersonName = this.departmentDetails.departmentContactPersonInfo.name;
        this.contactPersonEmail = this.departmentDetails.departmentContactPersonInfo.email;
        this.contactPersonTelephone = this.departmentDetails.departmentContactPersonInfo.telephone;
      }
      else {
        this.errorMessage = true;
        this.errorMessageContent = 'Error in fetching the department from the system.';
      }

      this.disableAlert();
    })
  }

  updateDepartment(departmentId): void {
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
        departmentid: departmentId,
        name: this.name,
        apiKey: this.apiKey,
        contactPersonName: this.contactPersonName,
        contactPersonEmail: this.contactPersonEmail,
        contactPersonTelephone: this.contactPersonTelephone
      };

      this.departmentService.updateDepartment(this.departmentDetails).subscribe((res: HttpResponse<any>) => {
        if (res.status == 200) {
          // this.successMessage = true;
          // this.successMessageContent = 'Department updated successfully.';

          this.router.navigate(['/departments']);
        }
        else {
          this.errorMessage = true;
          this.errorMessageContent = 'Error in updating the department.';
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
