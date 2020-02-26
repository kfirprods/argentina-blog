import { serverAddress } from './consts';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user$: Observable<string>;
  isAdmin$: Observable<boolean>;
  password = '';

  constructor(private http: HttpClient, private router: Router) {
    this.user$ = null;
    this.isAdmin$ = of(true);
  }

  async login(password: string) {
    const response = await this.http.post<any>(`${serverAddress}/login`, {password}).toPromise();

    if (response.isSuccessful) {
      this.password = password;
    }

    return response.isSuccessful;
  }
}
