import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAnswers, IFormDefinition } from 'src/app/form/iform-definition';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  
  apiUrl = 'http://localhost:8090/api/v1'; 
 
  constructor(private http: HttpClient) {}

  submitFormData(formData: IFormDefinition): Observable<any> {
    return this.http.post<any>(this.apiUrl+"/form_data", formData);
  }

  getFormData(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl+"/forms/"+id);
  }

  getFormWithAnswers(formId: number): Observable<any> {
    return this.http.get<any>(this.apiUrl+"/forms/answers/"+formId);
  }
  
  submitAnswers(answersData: IAnswers[]): Observable<any> {
    return this.http.post<any>(this.apiUrl+"/answer", answersData);
  }


}
