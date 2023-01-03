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
 * Class representing a AnalyticsReleasesResponse.
 */
class AnalyticsReleasesResponse {
  /**
   * Create a AnalyticsReleasesResponse.
   * @property {array} [releases]
   */
  constructor() {
  }

  /**
   * Defines the metadata of AnalyticsReleasesResponse
   *
   * @returns {object} metadata of AnalyticsReleasesResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AnalyticsReleasesResponse',
      type: {
        name: 'Composite',
        className: 'AnalyticsReleasesResponse',
        modelProperties: {
          releases: {
            required: false,
            serializedName: 'releases',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AnalyticsReleasesResponseReleasesItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'AnalyticsReleasesResponseReleasesItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = AnalyticsReleasesResponse;
