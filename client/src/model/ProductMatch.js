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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveBarcodeapiClient) {
      root.CloudmersiveBarcodeapiClient = {};
    }
    root.CloudmersiveBarcodeapiClient.ProductMatch = factory(root.CloudmersiveBarcodeapiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProductMatch model module.
   * @module model/ProductMatch
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>ProductMatch</code>.
   * @alias module:model/ProductMatch
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ProductMatch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductMatch} obj Optional instance to populate.
   * @return {module:model/ProductMatch} The populated <code>ProductMatch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('EAN')) {
        obj['EAN'] = ApiClient.convertToType(data['EAN'], 'String');
      }
      if (data.hasOwnProperty('Title')) {
        obj['Title'] = ApiClient.convertToType(data['Title'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} EAN
   */
  exports.prototype['EAN'] = undefined;
  /**
   * @member {String} Title
   */
  exports.prototype['Title'] = undefined;



  return exports;
}));


