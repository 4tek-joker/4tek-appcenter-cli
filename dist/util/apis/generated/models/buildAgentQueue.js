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
 * Class representing a BuildAgentQueue.
 */
class BuildAgentQueue {
  /**
   * Create a BuildAgentQueue.
   * @property {string} queue
   */
  constructor() {
  }

  /**
   * Defines the metadata of BuildAgentQueue
   *
   * @returns {object} metadata of BuildAgentQueue
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BuildAgentQueue',
      type: {
        name: 'Composite',
        className: 'BuildAgentQueue',
        modelProperties: {
          queue: {
            required: true,
            serializedName: 'queue',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BuildAgentQueue;
