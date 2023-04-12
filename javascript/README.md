# Calling Cakework

To call Cakework to build and deploy a function, you'll need to do the following:
1.  When you deploy your end user's code, send the code (minus the node_modules library) to your backend server
2. On the backend server, unzip the user's code and add 2 files to the directory: a Dockerfile, and a handler.js. 
3. Create a tar.gz archive of the directory, excluding any non-relevant files. Sample command:
```
tar --exclude='node_modules' --exclude='.git' -cvzf ~/javascript.tar.gz .
```

4. Call Cakework `deployFunctionFromArchive` using the REST API and your cakework API key. 

Sample request using `curl`: 
```
curl --location --request POST 'https://api.cakework.com/v1/function/deploy/archive' \
--header 'X-Api-Key: REDACTED' \
--form 'archive=@"/Users/jessieyoung/javascript.tar.gz"' \
--form 'runtime="nodejs18.x"' \
--form 'platform="lambda"' \
--form 'handlerFile="handler.js"' \
--form 'handlerFunction="functionHandler"'
```

5. The `deployFunctionFromArchive` call will return a function id, as well as an endpoint you can use to now call your function.

Sample request using curl, using an endpoint which was returned by a `deploy` call:
```
curl --location --request POST 'https://le2bipucx7.execute-api.us-west-2.amazonaws.com/c24fcd79-c275-4ae3-a679-6114dca71562?yourName=jessie&yourAge=12' \
--header 'X-Api-Key: REDACTED' \
--data-raw ''
```



