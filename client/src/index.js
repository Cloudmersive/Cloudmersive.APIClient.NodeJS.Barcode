/**
 * barcodeapi
 * Barcode APIs let you generate barcode images, and recognize values from images of barcodes.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BarcodeLookupResponse', 'model/ProductMatch', 'api/BarcodeLookupApi', 'api/GenerateBarcodeApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/BarcodeLookupResponse'), require('./model/ProductMatch'), require('./api/BarcodeLookupApi'), require('./api/GenerateBarcodeApi'));
  }
}(function(ApiClient, BarcodeLookupResponse, ProductMatch, BarcodeLookupApi, GenerateBarcodeApi) {
  'use strict';

  /**
   * Barcode_APIs_let_you_generate_barcode_images_and_recognize_values_from_images_of_barcodes_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var CloudmersiveBarcodeapiClient = require('index'); // See note below*.
   * var xxxSvc = new CloudmersiveBarcodeapiClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new CloudmersiveBarcodeapiClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new CloudmersiveBarcodeapiClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new CloudmersiveBarcodeapiClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.1.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The BarcodeLookupResponse model constructor.
     * @property {module:model/BarcodeLookupResponse}
     */
    BarcodeLookupResponse: BarcodeLookupResponse,
    /**
     * The ProductMatch model constructor.
     * @property {module:model/ProductMatch}
     */
    ProductMatch: ProductMatch,
    /**
     * The BarcodeLookupApi service constructor.
     * @property {module:api/BarcodeLookupApi}
     */
    BarcodeLookupApi: BarcodeLookupApi,
    /**
     * The GenerateBarcodeApi service constructor.
     * @property {module:api/GenerateBarcodeApi}
     */
    GenerateBarcodeApi: GenerateBarcodeApi
  };

  return exports;
}));
