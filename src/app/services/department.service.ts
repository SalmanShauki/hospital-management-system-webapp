import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  // REST API endpoint
  private apiUrl: string = 'http://localhost:8000';

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  // Method for fetching the departments
  fetchDepartments() {
    return this.http.get(`${this.apiUrl}/api/departments`, {
      headers: this.httpHeader.headers,
      observe: 'response'
    }).pipe(
      retry(2),
      catchError(this.errorHandler)
    )
  }

  // Method for fetching a single department
  fetchSingleDepartment(departmentid) {
    return this.http.get(`${this.apiUrl}/api/department/${departmentid}`, {
      observe: "response"
    }).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  // Method for creating a single department
  addDepartment(data) {
    return this.http.post(`${this.apiUrl}/api/department`, JSON.stringify(data), {
      headers: this.httpHeader.headers,
      observe: 'response'
    }).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  // Method for updating a department
  updateDepartment(data) {
    return this.http.put(`${this.apiUrl}/api/department`, JSON.stringify(data), {
      headers: this.httpHeader.headers,
      observe: 'response'
    }).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  // Method for deleting a department
  deleteDepartment(departmentid) {
    return this.http.delete(`${this.apiUrl}/api/department/${departmentid}`, {
      headers: this.httpHeader.headers,
      observe: 'response'
    }).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  errorHandler(err) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    }
    else {
      message = `Error Code: ${err.status}\n Message: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
  }
}
