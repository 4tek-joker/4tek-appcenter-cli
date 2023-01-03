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
 * Class representing a Versions.
 */
class Versions {
  /**
   * Create a Versions.
   * @property {array} [versions] List of version count.
   * @property {number} [total] The total count of versions.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Versions
   *
   * @returns {object} metadata of Versions
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Versions',
      type: {
        name: 'Composite',
        className: 'Versions',
        modelProperties: {
          versions: {
            required: false,
            serializedName: 'versions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'VersionsVersionsItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'VersionsVersionsItem'
                  }
              }
            }
          },
          total: {
            required: false,
            serializedName: 'total',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = Versions;
