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
 * Class representing a UserLiteProfileResponse.
 */
class UserLiteProfileResponse {
  /**
   * Create a UserLiteProfileResponse.
   * @property {uuid} id The unique id (UUID) of the user
   * @property {string} displayName The full name of the user. Might for
   * example be first and last name
   * @property {string} email The email address of the user
   */
  constructor() {
  }

  /**
   * Defines the metadata of UserLiteProfileResponse
   *
   * @returns {object} metadata of UserLiteProfileResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UserLiteProfileResponse',
      type: {
        name: 'Composite',
        className: 'UserLiteProfileResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: true,
            serializedName: 'display_name',
            type: {
              name: 'String'
            }
          },
          email: {
            required: true,
            serializedName: 'email',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UserLiteProfileResponse;
