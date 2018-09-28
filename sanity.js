
var authEndpoint = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?';
var redirectUri = 'http://localhost:8080';
var appId = 'YOUR APP ID HERE';
var scopes = 'openid profile User.Read Mail.Read';

class OutlookApiConfig
{
    // App configuration
    constructor(authEndpoint, redirectUri, appId, scopes)
    {
        this.authEndpoint = authEndpoint;
        this.redirectUri = redirectUri;
        this.appId = appId;
        this.scopes = scopes;
    }

    getAccesToken()
    {
        this.accessToken = "";

        
    }
}

function init()
{

}

function exit()
{

}

function main()
{
    init();

    let outlookApiConfig = new OutlookApiConfig(authEndpoint, redirectUri, appId, scopes);

    console.log("This is how outlookApiConfig looks like: " + outlookApiConfig.authEndpoint);

    exit();
}

main();
