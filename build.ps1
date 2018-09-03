Remove-Item –path ./client –recurse
& java -jar swagger-codegen-cli.jar generate -i https://api.cloudmersive.com/swagger/api/barcode -l javascript -o client -c packageconfig.json
#(Get-Content ./client/package.json).replace('v1', '1.0.1') | Set-Content ./client/package.json
(Get-Content ./client/src/api/GenerateBarcodeApi.js).replace('var returnType = File;', "var returnType = 'Blob';") | Set-Content ./client/src/api/GenerateBarcodeApi.js
(Get-Content ./client/package.json).replace('"superagent": "3.5.2"', '"superagent": "3.7.0"') | Set-Content ./client/package.json
& npm build ./client