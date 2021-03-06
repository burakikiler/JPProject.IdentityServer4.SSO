import { environment } from '@env/environment';
import { AuthConfig } from 'angular-oauth2-oidc';

export const authProdConfig: AuthConfig = {
    issuer: environment.AuthorityUri,
    clientId: "UserManagementUI",
    responseType: "code",
    requireHttps: environment.RequireHttps,
    redirectUri: environment.Uri + "/login-callback",
    silentRefreshRedirectUri: environment.Uri + '/silent-refresh.html',
    scope: "openid profile email jp_api.user",
    sessionChecksEnabled: true,
    clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040
    waitForTokenInMsec: 5000,
    postLogoutRedirectUri: environment.Uri
};
