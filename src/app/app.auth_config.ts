

import { AuthConfig } from 'angular-oauth2-oidc';
export const authConfig: AuthConfig = {
    // we don't validate token here so we don't need issuer
    // issuer: 'https://sts.windows.net/d82d2341-61c5-4691-b04e-54694e7e8093/',
    // OAuth 2.0 Authorization Endpoint of your APP
    loginUrl: 'https://login.microsoftonline.com/d82d2341-61c5-4691-b04e-54694e7e8093/oauth2/authorize',
    // URL of the SPA to redirect the user to after login must match the redirect url you configed on azure
    redirectUri: window.location.origin + '/',
    // Application ID 6c7730e7-f526-47cc-99a1-84847a57c2b3
    clientId:  '6c7730e7-f526-47cc-99a1-84847a57c2b3',
    // API APP ID URI
    resource: 'https://mingz.onmicrosoft.com/f2b9d4c2-91b2-4f72-abe1-61e8f26f7c8e',
    // Same as OAuth 2.0 Authorization Endpoint of your APP but change authorize to logout
    logoutUrl: 'https://login.microsoftonline.com/d82d2341-61c5-4691-b04e-54694e7e8093/oauth2/logout',
    // set the scope for the permissions the client should request
    scope: 'openid',
    oidc: true,
    // allow http since we are using localhost:4200
    requireHttps: false,
    strictDiscoveryDocumentValidation: false
  }