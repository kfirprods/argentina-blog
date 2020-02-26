import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password = '';
  isSuccessful = false;

  faCheck = faCheck;

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  async login() {
    this.isSuccessful = await this.authenticationService.login(this.password);
  }
}
