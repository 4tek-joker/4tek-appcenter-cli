/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a SigningConfig.
 */
class SigningConfig {
  /**
   * Create a SigningConfig.
   * @property {boolean} [hasStoreFile] Indicates if storeFile is specified in
   * the signing configuration
   */
  constructor() {
  }

  /**
   * Defines the metadata of SigningConfig
   *
   * @returns {object} metadata of SigningConfig
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SigningConfig',
      type: {
        name: 'Composite',
        className: 'SigningConfig',
        modelProperties: {
          hasStoreFile: {
            required: false,
            serializedName: 'hasStoreFile',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = SigningConfig;
