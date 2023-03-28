import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../model/users';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<Users[]> {
    return this.http.get<Users[]>(this.usersUrl);
  }

  public save(users: Users) {
    return this.http.post<Users>(this.usersUrl, users);
  }
}