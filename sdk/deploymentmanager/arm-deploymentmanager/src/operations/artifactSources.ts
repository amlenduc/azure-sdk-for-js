/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/artifactSourcesMappers";
import * as Parameters from "../models/parameters";
import { AzureDeploymentManagerContext } from "../azureDeploymentManagerContext";

/** Class representing a ArtifactSources. */
export class ArtifactSources {
  private readonly client: AzureDeploymentManagerContext;

  /**
   * Create a ArtifactSources.
   * @param {AzureDeploymentManagerContext} client Reference to the service client.
   */
  constructor(client: AzureDeploymentManagerContext) {
    this.client = client;
  }

  /**
   * Synchronously creates a new artifact source or updates an existing artifact source.
   * @summary Creates or updates an artifact source.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param artifactSourceName The name of the artifact source.
   * @param [options] The optional parameters
   * @returns Promise<Models.ArtifactSourcesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, artifactSourceName: string, options?: Models.ArtifactSourcesCreateOrUpdateOptionalParams): Promise<Models.ArtifactSourcesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param artifactSourceName The name of the artifact source.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, artifactSourceName: string, callback: msRest.ServiceCallback<Models.ArtifactSource>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param artifactSourceName The name of the artifact source.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, artifactSourceName: string, options: Models.ArtifactSourcesCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.ArtifactSource>): void;
  createOrUpdate(resourceGroupName: string, artifactSourceName: string, options?: Models.ArtifactSourcesCreateOrUpdateOptionalParams | msRest.ServiceCallback<Models.ArtifactSource>, callback?: msRest.ServiceCallback<Models.ArtifactSource>): Promise<Models.ArtifactSourcesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        artifactSourceName,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ArtifactSourcesCreateOrUpdateResponse>;
  }

  /**
   * @summary Gets an artifact source.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param artifactSourceName The name of the artifact source.
   * @param [options] The optional parameters
   * @returns Promise<Models.ArtifactSourcesGetResponse>
   */
  get(resourceGroupName: string, artifactSourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ArtifactSourcesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param artifactSourceName The name of the artifact source.
   * @param callback The callback
   */
  get(resourceGroupName: string, artifactSourceName: string, callback: msRest.ServiceCallback<Models.ArtifactSource>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param artifactSourceName The name of the artifact source.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, artifactSourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ArtifactSource>): void;
  get(resourceGroupName: string, artifactSourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ArtifactSource>, callback?: msRest.ServiceCallback<Models.ArtifactSource>): Promise<Models.ArtifactSourcesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        artifactSourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ArtifactSourcesGetResponse>;
  }

  /**
   * @summary Deletes an artifact source.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param artifactSourceName The name of the artifact source.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, artifactSourceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param artifactSourceName The name of the artifact source.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, artifactSourceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param artifactSourceName The name of the artifact source.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, artifactSourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, artifactSourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        artifactSourceName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * @summary Lists the artifact sources in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.ArtifactSourcesListResponse>
   */
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ArtifactSourcesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param callback The callback
   */
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ArtifactSource[]>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ArtifactSource[]>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ArtifactSource[]>, callback?: msRest.ServiceCallback<Models.ArtifactSource[]>): Promise<Models.ArtifactSourcesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ArtifactSourcesListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/artifactSources/{artifactSourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.artifactSourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "artifactSourceInfo"
    ],
    mapper: Mappers.ArtifactSource
  },
  responses: {
    201: {
      bodyMapper: Mappers.ArtifactSource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/artifactSources/{artifactSourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.artifactSourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ArtifactSource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/artifactSources/{artifactSourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.artifactSourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/artifactSources",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ArtifactSource"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
