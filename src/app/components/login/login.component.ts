import { faCheck, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hasAttempted = false;
  isSuccessful = false;

  faCheck = faCheck;
  faWindowClose = faWindowClose;

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  async login(password: string) {
    console.log(`attempting login with pass ${password}`);
    this.isSuccessful = await this.authenticationService.login(password);
    this.hasAttempted = true;
  }
}
