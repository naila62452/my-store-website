import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<[]> {
    return this.http.get<[]>('https://jsonplaceholder.typicode.com/users');
  }
}
