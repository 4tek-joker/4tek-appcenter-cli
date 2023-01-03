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
 * Class representing a TestGDPRTestRun.
 */
class TestGDPRTestRun {
  /**
   * Create a TestGDPRTestRun.
   * @property {uuid} [id]
   * @property {uuid} [appHashFileId]
   * @property {string} [locale]
   * @property {uuid} [dsymHashFileId]
   * @property {string} [appHashFileUrl]
   * @property {string} [dsymHashFileUrl]
   * @property {string} [appIconUrl]
   */
  constructor() {
  }

  /**
   * Defines the metadata of TestGDPRTestRun
   *
   * @returns {object} metadata of TestGDPRTestRun
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TestGDPRTestRun',
      type: {
        name: 'Composite',
        className: 'TestGDPRTestRun',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          appHashFileId: {
            required: false,
            serializedName: 'app_hash_file_id',
            type: {
              name: 'String'
            }
          },
          locale: {
            required: false,
            serializedName: 'locale',
            type: {
              name: 'String'
            }
          },
          dsymHashFileId: {
            required: false,
            serializedName: 'dsym_hash_file_id',
            type: {
              name: 'String'
            }
          },
          appHashFileUrl: {
            required: false,
            serializedName: 'app_hash_file_url',
            type: {
              name: 'String'
            }
          },
          dsymHashFileUrl: {
            required: false,
            serializedName: 'dsym_hash_file_url',
            type: {
              name: 'String'
            }
          },
          appIconUrl: {
            required: false,
            serializedName: 'app_icon_url',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TestGDPRTestRun;
