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
 * A response containing information pertaining to starting a symbol upload
 * process
 *
 */
class SymbolUploadBeginResponse {
  /**
   * Create a SymbolUploadBeginResponse.
   * @property {string} symbolUploadId The id for the current upload
   * @property {string} uploadUrl The URL where the client needs to upload the
   * symbol blob to
   * @property {date} expirationDate Describes how long the upload_url is valid
   */
  constructor() {
  }

  /**
   * Defines the metadata of SymbolUploadBeginResponse
   *
   * @returns {object} metadata of SymbolUploadBeginResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SymbolUploadBeginResponse',
      type: {
        name: 'Composite',
        className: 'SymbolUploadBeginResponse',
        modelProperties: {
          symbolUploadId: {
            required: true,
            serializedName: 'symbol_upload_id',
            type: {
              name: 'String'
            }
          },
          uploadUrl: {
            required: true,
            serializedName: 'upload_url',
            type: {
              name: 'String'
            }
          },
          expirationDate: {
            required: true,
            serializedName: 'expiration_date',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = SymbolUploadBeginResponse;
