Step.1  
First one, Please register your instagram account.  
Next,It needs Instagram token key to use Web API,so access this site.  
[Instagram Developer Page](https://www.instagram.com/developer/)


Click Register Your Application  
Please enter the input.  
Change security tab.then release check  _Disable implicit OAuth_  

Next, add your infomation and access this site.  
```
https://instagram.com/oauth/authorize/?client_id=<Your CLIENT ID>&redirect_uri=<Your Valid redirect URIs>&response_type=token
```

Click _Authorize_ button.  
You redirect valid readirect URI. This URI is _added access_token_ which is your token key.If you wanna check access token key, access authorize url again.
