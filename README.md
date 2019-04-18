# Angular App to demo Azure AD Oauth
Library used https://www.npmjs.com/package/angular-oauth2-oidc

## Azure setup
### Register your APP
1. Azure AD -> App registrations -> New App registrations 
2. Enter name "Test_B2C_OAuth_APP" (This will be your app name e.g. eRegistration)
3. Sign-on URL is you web app url
4. After registed the app Edit its manifest so it uses ImplicitFlow
5. Go back to App Registrations page and click on Endpoints and the "OAuth 2.0 Authorization Endpoint" is auth end point.
    * e.g. https://login.microsoftonline.com/d82d2341-61c5-4691-b04e-54694e7e8093/oauth2/authorize?client_id=6c7730e7-f526-47cc-99a1-84847a57c2b3
   * Note all your app under the same AD will have the same login endpoint but client_id will different for each app.
6. The your app's authentication url will build base on that endpoint url plus client id etc.

### Register your APIs (Rest services to be protected by AD authentication)
1. Azure AD -> App registrations -> New App registrations 
2. Enter name API0 (The name will be the actual API name you are registering)
3. Sign-on URL is you API url

### Protect your API with OAuth
1. Go back to "Test_B2C_OAuth_APP"
2. Click on "Required permission"
3. Click on "Add" -> "Select an API" -> Search "API0" -> click "Select"
4. Then check "DELEGATED PERMISSIONS" -> click on "Select" -> click on "Done"

## Run app
```
    npm install
    npm start
```
## Testing credentials 
(As of 2019-04-17 my Azure trail will expire in 30 days. But you should be able to setup your own Azure AD and update OAuth config to point to your own Azure endpoints)

User: liaoniu@mingz.onmicrosoft.com

Passwd: Wsib2019

## Note
The demo did not do token validation, make sure to provide issuer and initialize JwksValidationHandler in production use.
