# CloudmersiveBarcodeapiClient.GenerateBarcodeApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateBarcodeCode128**](GenerateBarcodeApi.md#generateBarcodeCode128) | **POST** /barcode/generate/code-128 | Generate a EAN-13 code barcode as PNG file
[**generateBarcodeEAN13**](GenerateBarcodeApi.md#generateBarcodeEAN13) | **POST** /barcode/generate/ean-13 | Generate a EAN-13 code barcode as PNG file
[**generateBarcodeEAN8**](GenerateBarcodeApi.md#generateBarcodeEAN8) | **POST** /barcode/generate/ean-8 | Generate a EAN-8 code barcode as PNG file
[**generateBarcodeQRCode**](GenerateBarcodeApi.md#generateBarcodeQRCode) | **POST** /barcode/generate/qrcode | Generate a QR code barcode as PNG file
[**generateBarcodeUPCA**](GenerateBarcodeApi.md#generateBarcodeUPCA) | **POST** /barcode/generate/upc-a | Generate a UPC-A code barcode as PNG file
[**generateBarcodeUPCE**](GenerateBarcodeApi.md#generateBarcodeUPCE) | **POST** /barcode/generate/upc-e | Generate a UPC-E code barcode as PNG file


<a name="generateBarcodeCode128"></a>
# **generateBarcodeCode128**
> &#39;Blob&#39; generateBarcodeCode128(value, opts)

Generate a EAN-13 code barcode as PNG file

Validates and generate a EAN-13 barcode as a PNG file, a type of 1D barcode

### Example
```javascript
var CloudmersiveBarcodeapiClient = require('cloudmersive-barcodeapi-client');
var defaultClient = CloudmersiveBarcodeapiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveBarcodeapiClient.GenerateBarcodeApi();

var value = "value_example"; // String | Barcode value to generate from

var opts = { 
  'width': 56, // Number | Optional: width of the barcode in pixels.  Minimum value of 10.
  'height': 56, // Number | Optional: width of the barcode in pixels.  Minimum value of 10.
  'includeLabel': true // Boolean | Optional: show text label on the image of the barcode value, default is true.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateBarcodeCode128(value, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| Barcode value to generate from | 
 **width** | **Number**| Optional: width of the barcode in pixels.  Minimum value of 10. | [optional] 
 **height** | **Number**| Optional: width of the barcode in pixels.  Minimum value of 10. | [optional] 
 **includeLabel** | **Boolean**| Optional: show text label on the image of the barcode value, default is true. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/octet-stream

<a name="generateBarcodeEAN13"></a>
# **generateBarcodeEAN13**
> &#39;Blob&#39; generateBarcodeEAN13(value, opts)

Generate a EAN-13 code barcode as PNG file

Validates and generate a EAN-13 barcode as a PNG file, a type of 1D barcode

### Example
```javascript
var CloudmersiveBarcodeapiClient = require('cloudmersive-barcodeapi-client');
var defaultClient = CloudmersiveBarcodeapiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveBarcodeapiClient.GenerateBarcodeApi();

var value = "value_example"; // String | Barcode value to generate from

var opts = { 
  'width': 56, // Number | Optional: width of the barcode in pixels.  Minimum value of 10.
  'height': 56, // Number | Optional: width of the barcode in pixels.  Minimum value of 10.
  'includeLabel': true // Boolean | Optional: show text label on the image of the barcode value, default is true.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateBarcodeEAN13(value, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| Barcode value to generate from | 
 **width** | **Number**| Optional: width of the barcode in pixels.  Minimum value of 10. | [optional] 
 **height** | **Number**| Optional: width of the barcode in pixels.  Minimum value of 10. | [optional] 
 **includeLabel** | **Boolean**| Optional: show text label on the image of the barcode value, default is true. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/octet-stream

<a name="generateBarcodeEAN8"></a>
# **generateBarcodeEAN8**
> &#39;Blob&#39; generateBarcodeEAN8(value, opts)

Generate a EAN-8 code barcode as PNG file

Validates and generate a EAN-8 barcode as a PNG file, a type of 1D barcode

### Example
```javascript
var CloudmersiveBarcodeapiClient = require('cloudmersive-barcodeapi-client');
var defaultClient = CloudmersiveBarcodeapiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveBarcodeapiClient.GenerateBarcodeApi();

var value = "value_example"; // String | Barcode value to generate from

var opts = { 
  'width': 56, // Number | Optional: width of the barcode in pixels.  Minimum value of 10.
  'height': 56, // Number | Optional: width of the barcode in pixels.  Minimum value of 10.
  'includeLabel': true // Boolean | Optional: show text label on the image of the barcode value, default is true.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateBarcodeEAN8(value, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| Barcode value to generate from | 
 **width** | **Number**| Optional: width of the barcode in pixels.  Minimum value of 10. | [optional] 
 **height** | **Number**| Optional: width of the barcode in pixels.  Minimum value of 10. | [optional] 
 **includeLabel** | **Boolean**| Optional: show text label on the image of the barcode value, default is true. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/octet-stream

<a name="generateBarcodeQRCode"></a>
# **generateBarcodeQRCode**
> &#39;Blob&#39; generateBarcodeQRCode(value, opts)

Generate a QR code barcode as PNG file

Generate a QR code barcode as a PNG file, a type of 2D barcode which can encode free-form text information

### Example
```javascript
var CloudmersiveBarcodeapiClient = require('cloudmersive-barcodeapi-client');
var defaultClient = CloudmersiveBarcodeapiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveBarcodeapiClient.GenerateBarcodeApi();

var value = "value_example"; // String | QR code text to convert into the QR code barcode

var opts = { 
  'width': 56, // Number | Optional: width of the barcode in pixels.  Minimum value of 10.
  'height': 56 // Number | Optional: width of the barcode in pixels.  Minimum value of 10.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateBarcodeQRCode(value, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| QR code text to convert into the QR code barcode | 
 **width** | **Number**| Optional: width of the barcode in pixels.  Minimum value of 10. | [optional] 
 **height** | **Number**| Optional: width of the barcode in pixels.  Minimum value of 10. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/octet-stream

<a name="generateBarcodeUPCA"></a>
# **generateBarcodeUPCA**
> &#39;Blob&#39; generateBarcodeUPCA(value, opts)

Generate a UPC-A code barcode as PNG file

Validate and generate a UPC-A barcode as a PNG file, a type of 1D barcode

### Example
```javascript
var CloudmersiveBarcodeapiClient = require('cloudmersive-barcodeapi-client');
var defaultClient = CloudmersiveBarcodeapiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveBarcodeapiClient.GenerateBarcodeApi();

var value = "value_example"; // String | UPC-A barcode value to generate from

var opts = { 
  'width': 56, // Number | Optional: width of the barcode in pixels.  Minimum value of 10.
  'height': 56, // Number | Optional: width of the barcode in pixels.  Minimum value of 10.
  'includeLabel': true // Boolean | Optional: show text label on the image of the barcode value, default is true.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateBarcodeUPCA(value, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| UPC-A barcode value to generate from | 
 **width** | **Number**| Optional: width of the barcode in pixels.  Minimum value of 10. | [optional] 
 **height** | **Number**| Optional: width of the barcode in pixels.  Minimum value of 10. | [optional] 
 **includeLabel** | **Boolean**| Optional: show text label on the image of the barcode value, default is true. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/octet-stream

<a name="generateBarcodeUPCE"></a>
# **generateBarcodeUPCE**
> &#39;Blob&#39; generateBarcodeUPCE(value, opts)

Generate a UPC-E code barcode as PNG file

Validates and generate a UPC-E barcode as a PNG file, a type of 1D barcode

### Example
```javascript
var CloudmersiveBarcodeapiClient = require('cloudmersive-barcodeapi-client');
var defaultClient = CloudmersiveBarcodeapiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveBarcodeapiClient.GenerateBarcodeApi();

var value = "value_example"; // String | UPC-E barcode value to generate from

var opts = { 
  'width': 56, // Number | Optional: width of the barcode in pixels.  Minimum value of 10.
  'height': 56, // Number | Optional: width of the barcode in pixels.  Minimum value of 10.
  'includeLabel': true // Boolean | Optional: show text label on the image of the barcode value, default is true.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateBarcodeUPCE(value, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| UPC-E barcode value to generate from | 
 **width** | **Number**| Optional: width of the barcode in pixels.  Minimum value of 10. | [optional] 
 **height** | **Number**| Optional: width of the barcode in pixels.  Minimum value of 10. | [optional] 
 **includeLabel** | **Boolean**| Optional: show text label on the image of the barcode value, default is true. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/octet-stream

