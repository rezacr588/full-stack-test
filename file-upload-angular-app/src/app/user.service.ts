import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signup(username: string, password: string) {
    return this.http.post('/users/signup', { username, password });
  }

  signin(username: string, password: string) {
    return this.http.post('/users/signin', { username, password });
  }
}
