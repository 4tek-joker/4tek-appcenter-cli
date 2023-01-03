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
 * A unique identifier for a destination. A destination can be identified by an
 * ID (guid) or by a name. DestinationId encapsulates both options. A
 * destination can be either a distribution group or a store.
 *
 */
class ReleaseUpdateRequestDestinationsItem {
  /**
   * Create a ReleaseUpdateRequestDestinationsItem.
   * @property {string} [name] Name of a distribution group / distribution
   * store. The release will be associated with this distribution group or
   * store. If the distribution group / store doesn't exist a 400 is returned.
   * If both distribution group / store name and id are passed, the id is
   * taking precedence.
   * @property {string} [id] Id of a distribution group / store. The release
   * will be associated with this distribution group / store. If the
   * distribution group / store doesn't exist a 400 is returned. If both
   * distribution group / store name and id are passed, the id is taking
   * precedence.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ReleaseUpdateRequestDestinationsItem
   *
   * @returns {object} metadata of ReleaseUpdateRequestDestinationsItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReleaseUpdateRequest_destinationsItem',
      type: {
        name: 'Composite',
        className: 'ReleaseUpdateRequestDestinationsItem',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ReleaseUpdateRequestDestinationsItem;
