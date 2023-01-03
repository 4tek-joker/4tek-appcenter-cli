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
 * Agent queue
 *
 */
class AgentQueuesResponseItem {
  /**
   * Create a AgentQueuesResponseItem.
   * @property {number} [id]
   * @property {string} [name]
   */
  constructor() {
  }

  /**
   * Defines the metadata of AgentQueuesResponseItem
   *
   * @returns {object} metadata of AgentQueuesResponseItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AgentQueuesResponseItem',
      type: {
        name: 'Composite',
        className: 'AgentQueuesResponseItem',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'Number'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AgentQueuesResponseItem;
