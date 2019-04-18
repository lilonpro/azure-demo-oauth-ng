import { Component, OnInit } from '@angular/core';
import { OAuthService} from 'angular-oauth2-oidc';

import { JwksValidationHandler } from 'angular-oauth2-oidc';

import {authConfig} from './app.auth_config'
import { shiftInitState } from '@angular/core/src/view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'azure-demo-oauth-ng';
  token = '';
  constructor(private oauthService: OAuthService) {

  }

  private async configureAuth(): Promise<void> {
    this.oauthService.configure(authConfig);
    // we don't validate token here for demo, but make sure to validate token for production usage
    // this.oauthService.tokenValidationHandler = new JwksValidationHandler();
  }
  
  async ngOnInit() {
    await this.configureAuth();
    this.oauthService.tryLogin();
    if(!this.oauthService.getAccessToken()) {
      await this.oauthService.initImplicitFlow();
    }
    this.token = this.oauthService.getAccessToken();
    console.log(this.oauthService.getAccessToken());
  }
}
