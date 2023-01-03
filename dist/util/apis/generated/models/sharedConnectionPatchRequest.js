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
 * Shared connection patch request
 *
 */
class SharedConnectionPatchRequest {
  /**
   * Create a SharedConnectionPatchRequest.
   * @property {string} [displayName] Display name of the shared connection
   * @property {object} data Represents the data for connecting to service
   */
  constructor() {
  }

  /**
   * Defines the metadata of SharedConnectionPatchRequest
   *
   * @returns {object} metadata of SharedConnectionPatchRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SharedConnectionPatchRequest',
      type: {
        name: 'Composite',
        className: 'SharedConnectionPatchRequest',
        modelProperties: {
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          data: {
            required: true,
            serializedName: 'data',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = SharedConnectionPatchRequest;
