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

  constructor(private http: HttpClient, private router: Router) {
    this.user$ = null;
    this.isAdmin$ = of(false);
  }
}
