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
 * Class representing a LegacyAccountResponse.
 */
class LegacyAccountResponse {
  /**
   * Create a LegacyAccountResponse.
   * @property {object} [account] Object containing the account information.
   */
  constructor() {
  }

  /**
   * Defines the metadata of LegacyAccountResponse
   *
   * @returns {object} metadata of LegacyAccountResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LegacyAccountResponse',
      type: {
        name: 'Composite',
        className: 'LegacyAccountResponse',
        modelProperties: {
          account: {
            required: false,
            serializedName: 'account',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'LegacyAccountResponseAccountValueElementType',
                  type: {
                    name: 'Composite',
                    className: 'LegacyAccountResponseAccountValue'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = LegacyAccountResponse;
