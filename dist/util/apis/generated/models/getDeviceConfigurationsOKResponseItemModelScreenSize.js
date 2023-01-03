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
 * Physical device screen dimensions
 *
 */
class GetDeviceConfigurationsOKResponseItemModelScreenSize {
  /**
   * Create a GetDeviceConfigurationsOKResponseItemModelScreenSize.
   * @property {string} [cm]
   * @property {string} [inProperty]
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetDeviceConfigurationsOKResponseItemModelScreenSize
   *
   * @returns {object} metadata of GetDeviceConfigurationsOKResponseItemModelScreenSize
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetDeviceConfigurationsOKResponseItem_model_screenSize',
      type: {
        name: 'Composite',
        className: 'GetDeviceConfigurationsOKResponseItemModelScreenSize',
        modelProperties: {
          cm: {
            required: false,
            serializedName: 'cm',
            type: {
              name: 'String'
            }
          },
          inProperty: {
            required: false,
            serializedName: 'in',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GetDeviceConfigurationsOKResponseItemModelScreenSize;
