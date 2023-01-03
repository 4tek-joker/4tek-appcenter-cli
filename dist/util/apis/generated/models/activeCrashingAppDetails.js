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
 * Class representing a ActiveCrashingAppDetails.
 */
class ActiveCrashingAppDetails {
  /**
   * Create a ActiveCrashingAppDetails.
   * @property {string} [nextLink]
   * @property {array} [appsWithCrashes] details of the apps with crashes
   */
  constructor() {
  }

  /**
   * Defines the metadata of ActiveCrashingAppDetails
   *
   * @returns {object} metadata of ActiveCrashingAppDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ActiveCrashingAppDetails',
      type: {
        name: 'Composite',
        className: 'ActiveCrashingAppDetails',
        modelProperties: {
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          },
          appsWithCrashes: {
            required: false,
            serializedName: 'appsWithCrashes',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ActiveCrashingAppDetailsAppsWithCrashesItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'ActiveCrashingAppDetailsAppsWithCrashesItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ActiveCrashingAppDetails;
