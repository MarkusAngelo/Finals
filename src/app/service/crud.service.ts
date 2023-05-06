import { Injectable } from '@angular/core';
import { Petition } from './Petition';
import { Member } from './Member';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  // Node/Express API
  REST_API: string = 'http://localhost:8000/aps';
  REST_API_T: string = 'http://localhost:8000/api';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  // Add
  AddPetition(data: Petition): Observable<any> {
    let API_URL = `${this.REST_API}/add-petition`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }
  // Get all objects
  GetMembers() {
    return this.httpClient.get(`${this.REST_API_T}`);
  }
  // Get all objects
  GetPetitions() {
    return this.httpClient.get(`${this.REST_API}`);
  }

  // Get single object
  GetPetition(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/read-petition/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Update
  updatePetition(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update-petition/${id}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Delete
  deletePetition(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-petition/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Add
  AddMember(data: Member): Observable<any> {
    let API_URL = `${this.REST_API_T}/add-member`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }

  // Get single object
  GetMember(id: any): Observable<any> {
    let API_URL = `${this.REST_API_T}/read-member/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Update
  updateMember(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API_T}/update-member/${id}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Delete
  deleteMember(id: any): Observable<any> {
    let API_URL = `${this.REST_API_T}/delete-member/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
