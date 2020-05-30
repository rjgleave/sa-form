/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRequest = /* GraphQL */ `
  query GetRequest($id: ID!) {
    getRequest(id: $id) {
      id
      accountLink
      accountName
      accountOpportunity
      activityTitle
      activityType
      activityTopic
      activityDomain
      activityComplexity
      activityFromDate
      activityToDate
      activityDetails
      activityLocation
      activityInteractionType
      createdAt
      updatedAt
    }
  }
`;
export const listRequests = /* GraphQL */ `
  query ListRequests(
    $filter: ModelRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        accountLink
        accountName
        accountOpportunity
        activityTitle
        activityType
        activityTopic
        activityDomain
        activityComplexity
        activityFromDate
        activityToDate
        activityDetails
        activityLocation
        activityInteractionType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
