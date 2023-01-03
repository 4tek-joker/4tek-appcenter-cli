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
 * Class representing a DeviceModelDeviceFrame.
 */
class DeviceModelDeviceFrame {
  /**
   * Create a DeviceModelDeviceFrame.
   * @property {object} [grid]
   * @property {number} [grid.width]
   * @property {number} [grid.height]
   * @property {string} [grid.frameUrl]
   * @property {array} [grid.screen]
   * @property {object} [full]
   * @property {number} [full.width]
   * @property {number} [full.height]
   * @property {string} [full.frameUrl]
   * @property {array} [full.screen]
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeviceModelDeviceFrame
   *
   * @returns {object} metadata of DeviceModelDeviceFrame
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeviceModel_deviceFrame',
      type: {
        name: 'Composite',
        className: 'DeviceModelDeviceFrame',
        modelProperties: {
          grid: {
            required: false,
            serializedName: 'grid',
            type: {
              name: 'Composite',
              className: 'DeviceModelDeviceFrameGrid'
            }
          },
          full: {
            required: false,
            serializedName: 'full',
            type: {
              name: 'Composite',
              className: 'DeviceModelDeviceFrameFull'
            }
          }
        }
      }
    };
  }
}

module.exports = DeviceModelDeviceFrame;
