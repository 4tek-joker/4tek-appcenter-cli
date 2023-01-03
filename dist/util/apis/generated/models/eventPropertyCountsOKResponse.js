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
 * Event property value counts during the time range in descending order.
 *
 */
class EventPropertyCountsOKResponse {
  /**
   * Create a EventPropertyCountsOKResponse.
   * @property {number} [total] The total property value counts.
   * @property {array} [values] The event property values.
   */
  constructor() {
  }

  /**
   * Defines the metadata of EventPropertyCountsOKResponse
   *
   * @returns {object} metadata of EventPropertyCountsOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EventPropertyCountsOKResponse',
      type: {
        name: 'Composite',
        className: 'EventPropertyCountsOKResponse',
        modelProperties: {
          total: {
            required: false,
            serializedName: 'total',
            type: {
              name: 'Number'
            }
          },
          values: {
            required: false,
            serializedName: 'values',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'EventPropertyCountsOKResponseValuesItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'EventPropertyCountsOKResponseValuesItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = EventPropertyCountsOKResponse;
