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
 * Class representing a ErrorAttachment.
 */
class ErrorAttachment {
  /**
   * Create a ErrorAttachment.
   * @property {string} [appId]
   * @property {string} [attachmentId]
   * @property {string} [crashId]
   * @property {string} [blobLocation]
   * @property {string} [contentType]
   * @property {string} [fileName]
   * @property {date} [createdTime]
   * @property {number} [size]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorAttachment
   *
   * @returns {object} metadata of ErrorAttachment
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorAttachment',
      type: {
        name: 'Composite',
        className: 'ErrorAttachment',
        modelProperties: {
          appId: {
            required: false,
            serializedName: 'appId',
            type: {
              name: 'String'
            }
          },
          attachmentId: {
            required: false,
            serializedName: 'attachmentId',
            type: {
              name: 'String'
            }
          },
          crashId: {
            required: false,
            serializedName: 'crashId',
            type: {
              name: 'String'
            }
          },
          blobLocation: {
            required: false,
            serializedName: 'blobLocation',
            type: {
              name: 'String'
            }
          },
          contentType: {
            required: false,
            serializedName: 'contentType',
            type: {
              name: 'String'
            }
          },
          fileName: {
            required: false,
            serializedName: 'fileName',
            type: {
              name: 'String'
            }
          },
          createdTime: {
            required: false,
            serializedName: 'createdTime',
            type: {
              name: 'DateTime'
            }
          },
          size: {
            required: false,
            serializedName: 'size',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorAttachment;
