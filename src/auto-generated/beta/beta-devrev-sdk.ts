/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum AccessLevel {
  External = 'external',
  Internal = 'internal',
  Private = 'private',
  Public = 'public',
  Restricted = 'restricted',
}

/** account */
export type Account = OrgBase & {
  /** The artifacts attached to the Account. */
  artifacts?: ArtifactSummary[];
  /** Custom fields. */
  custom_fields?: object;
  /**
   * Custom schema fragments.
   * @example ["don:core:<partition>:devo/<dev-org-id>:custom_type_fragment/<custom-type-fragment-id>"]
   */
  custom_schema_fragments?: string[];
  /** Description of the corresponding Account. */
  description?: string;
  /** Company's domain names. Example - 'devrev.ai'. */
  domains?: string[];
  /**
   * External refs are unique identifiers from your customer system of
   * records, stored as a list.
   */
  external_refs: string[];
  /** List of Dev user IDs owning this Account. */
  owned_by: UserSummary[];
  /**
   * Stock schema fragment.
   * @example "don:core:<partition>:devo/<dev-org-id>:custom_type_fragment/<custom-type-fragment-id>"
   */
  stock_schema_fragment?: string;
  /** Tags associated with an object. */
  tags?: TagWithValue[];
  /** The Tier of the corresponding Account. */
  tier?: string;
};

/** account-summary */
export type AccountSummary = OrgBaseSummary;

/**
 * accounts-create-request
 * Request object to create a new account in the Dev organization.
 */
export interface AccountsCreateRequest {
  /**
   * The IDs of the artifacts to associate with the account.
   * @example ["don:core:<partition>:devo/<dev-org-id>:artifact/<artifact-id>"]
   */
  artifacts?: string[];
  /** Application-defined custom fields. */
  custom_fields?: object;
  /** Description of the account. */
  description?: string;
  /** Name of the account. */
  display_name: string;
  /** List of company's domain names. Example - ['devrev.ai']. */
  domains?: string[];
  /**
   * External refs are unique identifiers from your customer system of
   * records, stored as a list. Currently the length of this field is
   * limited to 1.
   */
  external_refs?: string[];
  /** List of Dev users owning this account. */
  owned_by?: string[];
  /**
   * Schema fragment IDs associated with this account SOR.
   * @example ["don:core:<partition>:devo/<dev-org-id>:custom_type_fragment/<custom-type-fragment-id>"]
   */
  schema_fragment_ids?: string[];
  /** Tags associated with the account. */
  tags?: SetTagWithValue[];
  /** The tier of the account. */
  tier?: string;
}

/**
 * accounts-create-response
 * Response object for request to create a new account.
 */
export interface AccountsCreateResponse {
  account: Account;
}

/**
 * accounts-delete-request
 * Request object to delete an account.
 */
export interface AccountsDeleteRequest {
  /**
   * The ID of account to delete.
   * @example "don:core:<partition>:devo/<dev-org-id>:account/<account-id>"
   */
  id: string;
}

/**
 * accounts-delete-response
 * The response to deleting an account.
 */
export type AccountsDeleteResponse = object;

/**
 * accounts-export-request
 * The request to export a collection of accounts.
 */
export interface AccountsExportRequest {
  /** Filters for accounts created by the specified user(s). */
  created_by?: string[];
  created_date?: DateTimeFilter;
  /** Domains for accounts to be filtered. */
  domains?: string[];
  /** Array of references of accounts to be filtered. */
  external_refs?: string[];
  /**
   * The number of accounts to return. The default is '50'.
   * @format int32
   * @min 1
   * @max 500
   */
  first?: number;
  modified_date?: DateTimeFilter;
  /** Filters for accounts owned by the specified user(s). */
  owned_by?: string[];
  /** Fields to sort the accounts by and the direction to sort them in. */
  sort_by?: string[];
  /** Filters for accounts on specified stages. */
  stage?: string[];
  /** List of tags to be filtered. */
  tags?: string[];
}

/**
 * accounts-export-response
 * The response to exporting a collection of accounts.
 */
export interface AccountsExportResponse {
  /** The exported accounts. */
  accounts: Account[];
}

/**
 * accounts-get-request
 * Request object to get an account's information.
 */
export interface AccountsGetRequest {
  /**
   * The ID of the account to be retrieved.
   * @example "don:core:<partition>:devo/<dev-org-id>:account/<account-id>"
   */
  id: string;
}

/**
 * accounts-get-response
 * The returned account.
 */
export interface AccountsGetResponse {
  account: Account;
}

/**
 * accounts-list-request
 * List the accounts.
 */
export interface AccountsListRequest {
  /** Filters for accounts created by the specified user(s). */
  created_by?: string[];
  created_date?: DateTimeFilter;
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /** Domains for accounts to be filtered. */
  domains?: string[];
  /** Array of references of accounts to be filtered. */
  external_refs?: string[];
  /**
   * The maximum number of accounts to return per page. The default is
   * '50'.
   * @format int32
   */
  limit?: number;
  /**
   * The iteration mode to use. If "after", then entries after the provided
   * cursor will be returned, or if no cursor is provided, then from the
   * beginning. If "before", then entries before the provided cursor will be
   * returned, or if no cursor is provided, then from the end. Entries will
   * always be returned in the specified sort-by order.
   */
  mode?: ListMode;
  modified_date?: DateTimeFilter;
  /** Filters for accounts owned by the specified user(s). */
  owned_by?: string[];
  /** Fields to sort the accounts by and the direction to sort them in. */
  sort_by?: string[];
  /** Filters for accounts on specified stages. */
  stage?: string[];
  /** List of tags to be filtered. */
  tags?: string[];
}

/**
 * accounts-list-response
 * The response to listing all accounts matching the filter criteria.
 */
export interface AccountsListResponse {
  /** List containing all the accounts */
  accounts: Account[];
  /**
   * The cursor used to iterate subsequent results in accordance to the
   * sort order. If not set, then no later elements exist.
   */
  next_cursor?: string;
  /**
   * The cursor used to iterate preceding results in accordance to the
   * sort order. If not set, then no prior elements exist.
   */
  prev_cursor?: string;
}

/**
 * accounts-update-request
 * Request to update details of the account.
 */
export interface AccountsUpdateRequest {
  artifacts?: AccountsUpdateRequestArtifacts;
  /** Application-defined custom fields. */
  custom_fields?: object;
  /** Updated description of the account. */
  description?: string;
  /** Updated display name for the account. */
  display_name?: string;
  /** Updated list of company's domain names. Example - ['devrev.ai']. */
  domains?: string[];
  /**
   * Updated External Refs of account. Currently the length of this
   * field is limited to 1.
   */
  external_refs?: string[];
  /**
   * The ID of account to update.
   * @example "don:core:<partition>:devo/<dev-org-id>:account/<account-id>"
   */
  id: string;
  /** Updated list of the users owning this account. */
  owned_by?: string[];
  /**
   * Schema fragment IDs associated with this account SOR.
   * @example ["don:core:<partition>:devo/<dev-org-id>:custom_type_fragment/<custom-type-fragment-id>"]
   */
  schema_fragment_ids?: string[];
  /** Updated tags list associated with the account. */
  tags?: SetTagWithValue[];
  /** Updated tier of the account. */
  tier?: string;
}

/** accounts-update-request-artifacts */
export interface AccountsUpdateRequestArtifacts {
  /**
   * Sets the IDs to the provided artifact IDs.
   * @example ["don:core:<partition>:devo/<dev-org-id>:artifact/<artifact-id>"]
   */
  set?: string[];
}

/**
 * accounts-update-response
 * Updated account object.
 */
export interface AccountsUpdateResponse {
  account: Account;
}

/**
 * aggregated-schema
 * List of custom fields from multiple source fragments.
 */
export type AggregatedSchema = object;

/** aggregated-schema-get-request */
export interface AggregatedSchemaGetRequest {
  /** The list of custom schema fragment DONs which are to be aggregated. */
  custom_schema_fragment_ids: string[];
  /** Per object schema, if associated with the leaf type. */
  per_object_schema?: FieldDescriptor[];
  /** The stock schema fragment which is to be aggregated. */
  stock_schema_fragment_id?: string;
}

/** aggregated-schema-get-response */
export interface AggregatedSchemaGetResponse {
  /** List of custom fields from multiple source fragments. */
  schema: AggregatedSchema;
}

/** app-fragment */
export type AppFragment = CustomSchemaFragmentBase;

/** article */
export type Article = AtomBase & {
  /** Details of the parts relevant to the article. */
  applies_to_parts: PartSummary[];
  /** Description of the article. */
  description?: string;
  /** Artifacts containing the extracted content. */
  extracted_content?: ArtifactSummary[];
  /** Resource details. */
  resource?: Resource;
  /** Title of the article. */
  title?: string;
};

/** Status of the article. */
export enum ArticleStatus {
  Archived = 'archived',
  Draft = 'draft',
  Published = 'published',
  ReviewNeeded = 'review_needed',
}

/** articles-count-request */
export interface ArticlesCountRequest {
  /**
   * Filters for articles belonging to any of the provided parts.
   * @example ["don:core:<partition>:devo/<dev-org-id>:<part-type>/<part-id>"]
   */
  applies_to_parts?: string[];
  /**
   * Filters for articles authored by any of the provided users.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  authored_by?: string[];
  /**
   * Filters for articles created by any of the provided users.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  created_by?: string[];
  /**
   * Filters for articles owned by any of the provided users.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  owned_by?: string[];
}

/** articles-count-response */
export interface ArticlesCountResponse {
  /**
   * The total number of articles matching the filter.
   * @format int32
   */
  count: number;
}

/**
 * articles-create-request
 * The request to create an article.
 */
export interface ArticlesCreateRequest {
  access_level?: AccessLevel;
  /**
   * The parts that the article applies to.
   * @minItems 1
   * @example ["don:core:<partition>:devo/<dev-org-id>:<part-type>/<part-id>"]
   */
  applies_to_parts: string[];
  /**
   * The authors of the article.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  authored_by?: string[];
  /** Description for the article. */
  description?: string;
  /**
   * ID of the extracted content artifact.
   * @example ["don:core:<partition>:devo/<dev-org-id>:artifact/<artifact-id>"]
   */
  extracted_content?: string[];
  /** Language of the article. */
  language?: string;
  /**
   * The users that own the article.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  owned_by?: string[];
  /**
   * The published date of the article.
   * @format date-time
   */
  published_at?: string;
  resource: ArticlesCreateRequestResource;
  /** Status of the article. */
  status?: ArticleStatus;
  /** Tags associated with the article. */
  tags?: SetTagWithValue[];
  /** Name of the article. */
  title: string;
}

/** articles-create-request-resource */
export interface ArticlesCreateRequestResource {
  /**
   * IDs of the artifacts.
   * @example ["don:core:<partition>:devo/<dev-org-id>:artifact/<artifact-id>"]
   */
  artifacts?: string[];
  /** URL of the external article. */
  url?: string;
}

/**
 * articles-create-response
 * Create article response.
 */
export interface ArticlesCreateResponse {
  article: Article;
}

/**
 * articles-delete-request
 * The request to delete an article.
 */
export interface ArticlesDeleteRequest {
  /**
   * The ID of the article to delete.
   * @example "don:core:<partition>:devo/<dev-org-id>:article/<article-id>"
   */
  id: string;
}

/** articles-delete-response */
export type ArticlesDeleteResponse = object;

/**
 * articles-get-request
 * The request to get an article.
 */
export interface ArticlesGetRequest {
  /**
   * The ID of the required article.
   * @example "don:core:<partition>:devo/<dev-org-id>:article/<article-id>"
   */
  id: string;
}

/**
 * articles-get-response
 * Get article response.
 */
export interface ArticlesGetResponse {
  article: Article;
}

/**
 * articles-list-request
 * The request to list articles.
 */
export interface ArticlesListRequest {
  /**
   * Filters for articles belonging to any of the provided parts.
   * @example ["don:core:<partition>:devo/<dev-org-id>:<part-type>/<part-id>"]
   */
  applies_to_parts?: string[];
  /**
   * Filters for articles authored by any of the provided users.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  authored_by?: string[];
  /**
   * Filters for articles created by any of the provided users.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  created_by?: string[];
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /**
   * The maximum number of articles to return. The default is '50'.
   * @format int32
   */
  limit?: number;
  /**
   * The iteration mode to use. If "after", then entries after the provided
   * cursor will be returned, or if no cursor is provided, then from the
   * beginning. If "before", then entries before the provided cursor will be
   * returned, or if no cursor is provided, then from the end. Entries will
   * always be returned in the specified sort-by order.
   */
  mode?: ListMode;
  /**
   * Filters for articles owned by any of the provided users.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  owned_by?: string[];
}

/**
 * articles-list-response
 * List articles response.
 */
export interface ArticlesListResponse {
  /** The article entries matching the request. */
  articles: Article[];
  /**
   * The cursor used to iterate subsequent results in accordance to the
   * sort order. If not set, then no later elements exist.
   */
  next_cursor?: string;
  /**
   * The cursor used to iterate preceding results in accordance to the
   * sort order. If not set, then no prior elements exist.
   */
  prev_cursor?: string;
  /**
   * Total number of article items for the request.
   * @format int32
   */
  total: number;
}

/**
 * articles-update-request
 * The request to update an article.
 */
export interface ArticlesUpdateRequest {
  access_level?: AccessLevel;
  applies_to_parts?: ArticlesUpdateRequestAppliesToParts;
  artifacts?: ArticlesUpdateRequestArtifacts;
  authored_by?: ArticlesUpdateRequestAuthoredBy;
  /**
   * Updated description of the article object, or unchanged if not
   * provided.
   */
  description?: string;
  extracted_content?: ArticlesUpdateRequestExtractedContent;
  /**
   * The article's ID.
   * @example "don:core:<partition>:devo/<dev-org-id>:article/<article-id>"
   */
  id: string;
  /** Updates the language of the article. */
  language?: string;
  owned_by?: ArticlesUpdateRequestOwnedBy;
  /** Status of the article. */
  status?: ArticleStatus;
  tags?: ArticlesUpdateRequestTags;
  /** Updated title of the article object, or unchanged if not provided. */
  title?: string;
  /** Updates the URL of the external article. */
  url?: string;
}

/** articles-update-request-applies-to-parts */
export interface ArticlesUpdateRequestAppliesToParts {
  /**
   * Updates the parts that the article applies to.
   * @example ["don:core:<partition>:devo/<dev-org-id>:<part-type>/<part-id>"]
   */
  set?: string[];
}

/** articles-update-request-artifacts */
export interface ArticlesUpdateRequestArtifacts {
  /**
   * Updates IDs of the artifacts.
   * @example ["don:core:<partition>:devo/<dev-org-id>:artifact/<artifact-id>"]
   */
  set?: string[];
}

/** articles-update-request-authored-by */
export interface ArticlesUpdateRequestAuthoredBy {
  /**
   * Sets the users that authored the article.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  set?: string[];
}

/** articles-update-request-extracted-content */
export interface ArticlesUpdateRequestExtractedContent {
  /**
   * Update the ID of the extracted content.
   * @example ["don:core:<partition>:devo/<dev-org-id>:artifact/<artifact-id>"]
   */
  set?: string[];
}

/** articles-update-request-owned-by */
export interface ArticlesUpdateRequestOwnedBy {
  /**
   * Sets the owner IDs to the provided user IDs. This must not be
   * empty.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  set?: string[];
}

/** articles-update-request-tags */
export interface ArticlesUpdateRequestTags {
  /** Sets the provided tags on the article. */
  set?: SetTagWithValue[];
}

/** articles-update-response */
export interface ArticlesUpdateResponse {
  article: Article;
}

/** artifact-summary */
export type ArtifactSummary = AtomBaseSummary;

/** atom-base */
export interface AtomBase {
  created_by?: UserSummary;
  /**
   * Timestamp when the object was created.
   * @format date-time
   */
  created_date?: string;
  /** Human-readable object ID unique to the Dev organization. */
  display_id?: string;
  /** Globally unique object ID. */
  id: string;
  modified_by?: UserSummary;
  /**
   * Timestamp when the object was last modified.
   * @format date-time
   */
  modified_date?: string;
}

/** atom-base-summary */
export interface AtomBaseSummary {
  /** Human-readable object ID unique to the Dev organization. */
  display_id?: string;
  /** Globally unique object ID. */
  id: string;
}

/** capability-summary */
export type CapabilitySummary = PartBaseSummary;

/** conversation */
export type Conversation = AtomBase & {
  /** Description of the conversation object. */
  description?: string;
  group?: GroupSummary;
  /** The users in the conversation. */
  members: UserSummary[];
  /** The latest messages on the conversation. */
  messages?: TimelineEntry[];
  /** Metadata on conversation. */
  metadata?: ConversationMetadata;
  /** Owner IDs for the conversation. */
  owned_by?: UserSummary[];
  /** Describes the current stage of a work item. */
  stage?: Stage;
  /** Title of the conversation object. */
  title?: string;
};

/**
 * conversation-metadata
 * Metadata on conversation.
 */
export interface ConversationMetadata {
  /**
   * URL from which the conversation was created if the conversation was
   * created via PLuG.
   */
  url_context?: string;
}

/** conversation-summary */
export type ConversationSummary = AtomBaseSummary & {
  /** Title of the conversation object. */
  title?: string;
};

/**
 * conversations-create-request
 * The request to create a new conversation.
 */
export interface ConversationsCreateRequest {
  /** Description for the conversation. */
  description?: string;
  /** The group that the conversation is associated with. */
  group?: string;
  /** Whether the conversation is spam. */
  is_spam?: boolean;
  /**
   * The users in the conversation.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  members?: string[];
  /** Initial messages on the conversation. */
  messages?: ConversationsCreateRequestMessage[];
  metadata?: ConversationsCreateRequestMetadata;
  /** Whether the conversation is from a source channel. */
  source_channel?: string;
  /** Sets an object's initial stage. */
  stage?: StageInit;
  /** Tags associated with the conversation. */
  tags?: SetTagWithValue[];
  /** The title for the conversation. */
  title?: string;
  type: ConversationsCreateRequestTypeValue;
  /** The IDs of user sessions associated with the conversation. */
  user_sessions?: string[];
}

/** conversations-create-request-message */
export interface ConversationsCreateRequestMessage {
  /**
   * The IDs of the artifacts to the message.
   * @example ["don:core:<partition>:devo/<dev-org-id>:artifact/<artifact-id>"]
   */
  artifacts?: string[];
  /** The message's body. */
  body?: string;
}

/** conversations-create-request-metadata */
export interface ConversationsCreateRequestMetadata {
  url_context?: string;
}

export enum ConversationsCreateRequestTypeValue {
  Support = 'support',
}

/**
 * conversations-create-response
 * The response to creating a new conversation.
 */
export interface ConversationsCreateResponse {
  conversation: Conversation;
}

/**
 * conversations-delete-request
 * The request to delete a conversation.
 */
export interface ConversationsDeleteRequest {
  /** The ID of the conversation to delete. */
  id: string;
}

/**
 * conversations-delete-response
 * The response for deleting a conversation.
 */
export type ConversationsDeleteResponse = object;

/** conversations-export-request */
export interface ConversationsExportRequest {
  /**
   * Filters for conversations belonging to any of the provided parts.
   * @example ["don:core:<partition>:devo/<dev-org-id>:<part-type>/<part-id>"]
   */
  applies_to_parts?: string[];
  /**
   * The number of conversation items to return. The default is '50',
   * the maximum is '5000'.
   * @format int32
   */
  first?: number;
  /** Filters for conversation that belong to the given groups. */
  group?: string[];
  /** Filters for conversations that are created by verified users. */
  is_creator_verified?: boolean;
  /** Filters for conversations that are spam. */
  is_spam?: boolean;
  /**
   * Filters for conversations where these users are participants.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  members?: string[];
  /**
   * Filters for conversations owned by any of these users.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  owned_by?: string[];
  /**
   * Filters for conversations that are associated with any of the
   * provided Rev organizations.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"]
   */
  rev_org?: string[];
  /** The filter for SLA summary. */
  sla_summary?: SlaSummaryFilter;
  /** Filters for conversations with any of the provided source channels. */
  source_channels?: string[];
  /** The filter for stages. */
  stage?: StageFilter;
  /**
   * Filters for conversations with any of the provided tags.
   * @example ["don:core:<partition>:devo/<dev-org-id>:tag/<tag-id>"]
   */
  tags?: string[];
}

/** conversations-export-response */
export interface ConversationsExportResponse {
  /** The resulting collection of conversation items. */
  conversations: Conversation[];
}

/**
 * conversations-get-request
 * The request to get a conversation's information.
 */
export interface ConversationsGetRequest {
  /** The requested conversation's ID. */
  id: string;
}

/**
 * conversations-get-response
 * The response to getting a conversation's information.
 */
export interface ConversationsGetResponse {
  conversation: Conversation;
}

/**
 * conversations-list-request
 * The request to get information about a list of conversations.
 */
export interface ConversationsListRequest {
  /**
   * Filters for conversations belonging to any of the provided parts.
   * @example ["don:core:<partition>:devo/<dev-org-id>:<part-type>/<part-id>"]
   */
  applies_to_parts?: string[];
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /** Filters for conversation that belong to the given groups. */
  group?: string[];
  /** Filters for conversations that are created by verified users. */
  is_creator_verified?: boolean;
  /** Filters for conversations that are spam. */
  is_spam?: boolean;
  /**
   * The maximum number of conversations to return. The default is '50'.
   * @format int32
   */
  limit?: number;
  /**
   * Filters for conversations where these users are participants.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  members?: string[];
  /**
   * The iteration mode to use. If "after", then entries after the provided
   * cursor will be returned, or if no cursor is provided, then from the
   * beginning. If "before", then entries before the provided cursor will be
   * returned, or if no cursor is provided, then from the end. Entries will
   * always be returned in the specified sort-by order.
   */
  mode?: ListMode;
  /**
   * Filters for conversations owned by any of these users.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  owned_by?: string[];
  /**
   * Filters for conversations that are associated with any of the
   * provided Rev organizations.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"]
   */
  rev_org?: string[];
  /** The filter for SLA summary. */
  sla_summary?: SlaSummaryFilter;
  /** Filters for conversations with any of the provided source channels. */
  source_channels?: string[];
  /** The filter for stages. */
  stage?: StageFilter;
  /**
   * Filters for conversations with any of the provided tags.
   * @example ["don:core:<partition>:devo/<dev-org-id>:tag/<tag-id>"]
   */
  tags?: string[];
}

/**
 * conversations-list-response
 * The response to listing the conversations.
 */
export interface ConversationsListResponse {
  /** The list of conversations. */
  conversations: Conversation[];
  /**
   * The cursor used to iterate subsequent results in accordance to the
   * sort order. If not set, then no later elements exist.
   */
  next_cursor?: string;
  /**
   * The cursor used to iterate preceding results in accordance to the
   * sort order. If not set, then no prior elements exist.
   */
  prev_cursor?: string;
}

/**
 * conversations-update-request
 * The request to update a conversation.
 */
export interface ConversationsUpdateRequest {
  applies_to_parts?: ConversationsUpdateRequestAppliesToParts;
  /** The updated description for the conversation. */
  description?: string;
  /** The group that the conversation is associated with. */
  group?: string;
  /** The ID of the conversation to update. */
  id: string;
  /** Whether the conversation is spam. */
  is_spam?: boolean;
  metadata?: ConversationsUpdateRequestMetadata;
  /** Updates an object's stage. */
  stage?: StageUpdate;
  /** The updated status of the conversation. */
  status?: string;
  tags?: ConversationsUpdateRequestTags;
  /** The updated title of the conversation. */
  title?: string;
  user_sessions?: ConversationsUpdateRequestUserSessions;
}

/** conversations-update-request-applies-to-parts */
export interface ConversationsUpdateRequestAppliesToParts {
  /**
   * Updates the parts that the conversation applies to.
   * @example ["don:core:<partition>:devo/<dev-org-id>:<part-type>/<part-id>"]
   */
  set?: string[];
}

/** conversations-update-request-metadata */
export interface ConversationsUpdateRequestMetadata {
  url_context?: string;
}

/** conversations-update-request-tags */
export interface ConversationsUpdateRequestTags {
  /** Sets the tag IDs to the provided tags. */
  set?: SetTagWithValue[];
}

/** conversations-update-request-user-sessions */
export interface ConversationsUpdateRequestUserSessions {
  /** The updated user sessions that the conversation is associated with. */
  set?: string[];
}

/**
 * conversations-update-response
 * The response for updating a conversation.
 */
export interface ConversationsUpdateResponse {
  conversation: Conversation;
}

/** create-org-schedule-interval */
export interface CreateOrgScheduleInterval {
  /**
   * Date (inclusive) on which the interval begins.
   * @format date-time
   */
  from: string;
  /**
   * If true, no organization schedule is looked up for these days and
   * they are marked as holidays.
   */
  is_excluded?: boolean;
  /**
   * The name of the period, for example the event or holiday it
   * represents.
   */
  name: string;
  /**
   * Date (exclusive) on which the interval ends. If omitted, it is a
   * single day interval.
   * @format date-time
   */
  to?: string;
}

/** create-weekly-org-schedule-interval */
export interface CreateWeeklyOrgScheduleInterval {
  /**
   * Duration in minutes of the week when the interval starts. 0 is
   * Sunday midnight, when Sunday ends and Monday begins.
   * @format int64
   */
  from: number;
  /**
   * Duration in minutes of the week when the interval ends (must be
   * larger than 'from'). 0 is Sunday midnight, when Sunday ends and
   * Monday begins.
   * @format int64
   */
  to: number;
}

/** custom-schema-fragment */
export type CustomSchemaFragment = (
  | AppFragment
  | CustomTypeFragment
  | TenantFragment
) & {
  type: CustomSchemaFragmentType;
};

/** custom-schema-fragment-base */
export type CustomSchemaFragmentBase = AtomBase;

/**
 * custom-schema-fragment-condition
 * The condition associated with a field.
 */
export type CustomSchemaFragmentCondition = object;

export enum CustomSchemaFragmentType {
  AppFragment = 'app_fragment',
  CustomTypeFragment = 'custom_type_fragment',
  TenantFragment = 'tenant_fragment',
}

/** custom-schema-fragments-get-request */
export interface CustomSchemaFragmentsGetRequest {
  /** The ID of the custom schema fragment. */
  id: string;
}

/** custom-schema-fragments-get-response */
export interface CustomSchemaFragmentsGetResponse {
  fragment: CustomSchemaFragment;
}

/** custom-schema-fragments-list-request */
export interface CustomSchemaFragmentsListRequest {
  /** The list of app names. */
  app?: string[];
  /**
   * The cursor to resume iteration from, otherwise if not provided,
   * then iteration starts from the beginning.
   */
  cursor?: string;
  /** The list of leaf types. */
  leaf_type?: string[];
  /**
   * The maximum number of items.
   * @format int32
   */
  limit?: number;
  /** The list of fields to sort the items by and how to sort them. */
  sort_by?: string[];
  /** The list of subtypes. */
  subtype?: string[];
  /** Filters for custom schema fragment of the provided types. */
  types?: CustomSchemaFragmentType[];
}

/** custom-schema-fragments-list-response */
export interface CustomSchemaFragmentsListResponse {
  /**
   * The cursor to resume iteration from, otherwise if not provided,
   * then iteration starts from the beginning.
   */
  cursor?: string;
  /** The custom schema fragments. */
  result: CustomSchemaFragment[];
}

/** custom-schema-fragments-set-request */
export type CustomSchemaFragmentsSetRequest = (
  | CustomSchemaFragmentsSetRequestAppFragment
  | CustomSchemaFragmentsSetRequestCustomTypeFragment
  | CustomSchemaFragmentsSetRequestTenantFragment
) & {
  /** List of conditions for this fragment. */
  conditions?: CustomSchemaFragmentCondition[];
  /** List of field names which are being dropped. */
  deleted_fields?: string[];
  /** Whether this fragment has been deprecated. */
  deprecated?: boolean;
  /** The description of the custom schema fragment. */
  description: string;
  /** List of all fields in this fragment. */
  fields?: SchemaFieldDescriptor[];
  /** The leaf type this fragment applies to. */
  leaf_type: string;
  type: CustomSchemaFragmentsSetRequestType;
};

/** custom-schema-fragments-set-request-app-fragment */
export interface CustomSchemaFragmentsSetRequestAppFragment {
  /** The app this fragment applies to. */
  app: string;
}

/** custom-schema-fragments-set-request-custom-type-fragment */
export interface CustomSchemaFragmentsSetRequestCustomTypeFragment {
  /** The ID of the associated custom stage diagram. */
  stage_diagram?: string;
  /** List of stock field enum overrides. */
  stock_field_enum_overrides?: StockFieldEnumOverride[];
  /** The string used to populate the subtype in the leaf type. */
  subtype: string;
  /** The display name of the subtype. */
  subtype_display_name?: string;
}

/** custom-schema-fragments-set-request-tenant-fragment */
export type CustomSchemaFragmentsSetRequestTenantFragment = object;

export enum CustomSchemaFragmentsSetRequestType {
  AppFragment = 'app_fragment',
  CustomTypeFragment = 'custom_type_fragment',
  TenantFragment = 'tenant_fragment',
}

/** custom-schema-fragments-set-response */
export interface CustomSchemaFragmentsSetResponse {
  /** The ID of the custom schema fragment. */
  id: string;
}

/** custom-type-fragment */
export type CustomTypeFragment = CustomSchemaFragmentBase;

/**
 * date-filter
 * Provides ways to specify date ranges on objects.
 */
export type DateFilter = (DateTimeFilter | DateTimePreset) & {
  /** Type of date filter. */
  type: DateFilterType;
};

/** Type of date filter. */
export enum DateFilterType {
  Preset = 'preset',
  Range = 'range',
}

/** date-time-filter */
export interface DateTimeFilter {
  /**
   * Filters for objects created after the provided timestamp
   * (inclusive).
   * @format date-time
   */
  after?: string;
  /**
   * Filters for objects created before the provided timestamp
   * (inclusive).
   * @format date-time
   */
  before?: string;
}

/**
 * date-time-preset
 * Provides preset types for date filter.
 */
export type DateTimePreset = (
  | DateTimePresetLastNDays
  | DateTimePresetNextNDays
) & {
  /** Type of date preset. */
  preset_type: DateTimePresetType;
};

/** date-time-preset-last-n-days */
export interface DateTimePresetLastNDays {
  /**
   * The range starts from the current timestamp and continues for the
   * past n days.
   * @min 0
   * @max 4294967295
   */
  days: number;
}

/** date-time-preset-next-n-days */
export interface DateTimePresetNextNDays {
  /**
   * The range starts from the current timestamp and continues for the
   * next n days.
   * @min 0
   * @max 4294967295
   */
  days: number;
}

/** Type of date preset. */
export enum DateTimePresetType {
  LastNDays = 'last_n_days',
  NextNDays = 'next_n_days',
}

/** dev-user-summary */
export type DevUserSummary = UserBaseSummary;

/** empty */
export type Empty = object;

/** engagement */
export type Engagement = AtomBase & {
  /** Description of the engagement object. */
  description?: string;
};

/** Type of engagement. */
export enum EngagementType {
  Call = 'call',
  Default = 'default',
  Email = 'email',
  LinkedIn = 'linked_in',
  Meeting = 'meeting',
  Offline = 'offline',
  Survey = 'survey',
}

/** engagements-count-request */
export interface EngagementsCountRequest {
  /** Filters for meetings with the provided external_refs. */
  external_ref?: string[];
  /**
   * Filters for engagement of the provided members.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  members?: string[];
  /**
   * Filters for engagements with the provided parent.
   * @example ["don:core:<partition>:devo/<dev-org-id>:account/<account-id>"]
   */
  parent?: string[];
  /** Filters for engagement of the provided types. */
  type?: EngagementType[];
}

/** engagements-count-response */
export interface EngagementsCountResponse {
  /**
   * The number of engagements matching the filter.
   * @format int64
   */
  count: number;
}

/** engagements-create-request */
export interface EngagementsCreateRequest {
  /**
   * The IDs of the artifacts to associate with the engagement.
   * @example ["don:core:<partition>:devo/<dev-org-id>:artifact/<artifact-id>"]
   */
  artifacts?: string[];
  /** The description of the engagement. */
  description?: string;
  /** The type of engagement. */
  engagement_type?: EngagementsCreateRequestEngagementType;
  /** External Reference for the engagement. */
  external_ref?: string;
  /** External URL for the engagement. */
  external_url?: string;
  /**
   * IDs of the users that were part of the engagement.
   * @maxItems 50
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  members?: string[];
  /**
   * The parent object ID in which the engagement was created.
   * Currently, only accounts and opportunities are supported.
   * @example "don:core:<partition>:devo/<dev-org-id>:account/<account-id>"
   */
  parent: string;
  /**
   * The date and time when the engagement was scheduled.
   * @format date-time
   */
  scheduled_date?: string;
  /** Tags associated with the engagement. */
  tags?: SetTagWithValue[];
  /** The title of the engagement. */
  title: string;
}

/** The type of engagement. */
export enum EngagementsCreateRequestEngagementType {
  Call = 'call',
  Default = 'default',
  Email = 'email',
  LinkedIn = 'linked_in',
  Offline = 'offline',
}

/** engagements-create-response */
export interface EngagementsCreateResponse {
  engagement: Engagement;
}

/** engagements-delete-request */
export interface EngagementsDeleteRequest {
  /** The engagement ID. */
  id: string;
}

/** engagements-delete-response */
export type EngagementsDeleteResponse = object;

/** engagements-get-request */
export interface EngagementsGetRequest {
  /** The engagement ID. */
  id: string;
}

/** engagements-get-response */
export interface EngagementsGetResponse {
  engagement: Engagement;
}

/** engagements-list-request */
export interface EngagementsListRequest {
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /** Filters for meetings with the provided external_refs. */
  external_ref?: string[];
  /**
   * The maximum number of engagements to return.
   * @format int32
   */
  limit?: number;
  /**
   * Filters for engagement of the provided members.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  members?: string[];
  /**
   * The iteration mode to use. If "after", then entries after the provided
   * cursor will be returned, or if no cursor is provided, then from the
   * beginning. If "before", then entries before the provided cursor will be
   * returned, or if no cursor is provided, then from the end. Entries will
   * always be returned in the specified sort-by order.
   */
  mode?: ListMode;
  /**
   * Filters for engagements with the provided parent.
   * @example ["don:core:<partition>:devo/<dev-org-id>:account/<account-id>"]
   */
  parent?: string[];
  /** Fields to sort the engagements by and the direction to sort them. */
  sort_by?: string[];
  /** Filters for engagement of the provided types. */
  type?: EngagementType[];
}

/** engagements-list-response */
export interface EngagementsListResponse {
  /** The list of engagements. */
  engagements: Engagement[];
  /**
   * The cursor used to iterate subsequent results in accordance to the
   * sort order. If not set, then no later elements exist.
   */
  next_cursor?: string;
  /**
   * The cursor used to iterate preceding results in accordance to the
   * sort order. If not set, then no prior elements exist.
   */
  prev_cursor?: string;
}

/** engagements-update-request */
export interface EngagementsUpdateRequest {
  artifacts?: EngagementsUpdateRequestArtifactIds;
  /** Updates the description of the engagement. */
  description?: string;
  /** External Reference for the engagement. */
  external_ref?: string;
  /** Updates the external URL for the engagement. */
  external_url?: string;
  /** The engagement ID. */
  id: string;
  members?: EngagementsUpdateRequestMembers;
  /**
   * Updates the date and time when the engagement was scheduled.
   * @format date-time
   */
  scheduled_date?: string | null;
  tags?: EngagementsUpdateRequestTags;
  /** Updates the title of the engagement. */
  title?: string;
}

/** engagements-update-request-artifact-ids */
export interface EngagementsUpdateRequestArtifactIds {
  /**
   * Sets the IDs to the provided artifact IDs.
   * @example ["don:core:<partition>:devo/<dev-org-id>:artifact/<artifact-id>"]
   */
  set?: string[];
}

/** engagements-update-request-members */
export interface EngagementsUpdateRequestMembers {
  /**
   * Sets the members to the provided user IDs. If specified, this must
   * not be empty.
   * @maxItems 50
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  set?: string[];
}

/** engagements-update-request-tags */
export interface EngagementsUpdateRequestTags {
  /** Sets the provided tags on the engagement item. */
  set?: SetTagWithValue[];
}

/** engagements-update-response */
export interface EngagementsUpdateResponse {
  engagement: Engagement;
}

/** enhancement-summary */
export type EnhancementSummary = PartBaseSummary;

/** error */
export interface Error {
  /** Information about the error. */
  message: string;
  /**
   * The corresponding HTTP status code.
   * @format int32
   */
  status: number;
  /** The error type. */
  type?: string;
}

/** error-bad-request */
export type ErrorBadRequest = ErrorBase &
  (
    | ErrorBadRequestBadRequest
    | ErrorBadRequestInvalidEnumValue
    | ErrorBadRequestInvalidField
    | ErrorBadRequestMissingRequiredField
    | ErrorBadRequestParseError
    | ErrorBadRequestValueNotPermitted
  ) & {
    type: ErrorBadRequestType;
  };

/** error-bad-request-bad-request */
export type ErrorBadRequestBadRequest = object;

/** error-bad-request-invalid-enum-value */
export interface ErrorBadRequestInvalidEnumValue {
  /** The allowed values for the field. */
  allowed_values: string[];
  /** The field whose enum value is invalid. */
  field_name: string;
  /** The value that was received. */
  value: string;
}

/** error-bad-request-invalid-field */
export interface ErrorBadRequestInvalidField {
  /** The field name that's invalid. */
  field_name: string;
}

/** error-bad-request-missing-required-field */
export interface ErrorBadRequestMissingRequiredField {
  /** The missing field's name. */
  field_name: string;
}

/** error-bad-request-parse-error */
export type ErrorBadRequestParseError = object;

export enum ErrorBadRequestType {
  BadRequest = 'bad_request',
  InvalidEnumValue = 'invalid_enum_value',
  InvalidField = 'invalid_field',
  MissingRequiredField = 'missing_required_field',
  ParseError = 'parse_error',
  ValueNotPermitted = 'value_not_permitted',
}

/** error-bad-request-value-not-permitted */
export interface ErrorBadRequestValueNotPermitted {
  /** The field whose value is not permitted. */
  field_name: string;
  /** The reason the value isn't permitted. */
  reason?: string;
}

/** error-base */
export interface ErrorBase {
  /** Error detail information. */
  detail?: string;
  /** The message associated with the error. */
  message?: string;
}

/** error-forbidden */
export type ErrorForbidden = ErrorBase &
  ErrorForbiddenForbidden & {
    type: ErrorForbiddenType;
  };

/** error-forbidden-forbidden */
export type ErrorForbiddenForbidden = object;

export enum ErrorForbiddenType {
  Forbidden = 'forbidden',
}

/** error-internal-server-error */
export type ErrorInternalServerError = ErrorBase &
  ErrorInternalServerErrorInternalError & {
    /**
     * A unique ID that's generated for the error that can be used for
     * inquiry.
     */
    reference_id?: string;
    type: ErrorInternalServerErrorType;
  };

/** error-internal-server-error-internal-error */
export type ErrorInternalServerErrorInternalError = object;

export enum ErrorInternalServerErrorType {
  InternalError = 'internal_error',
}

/** error-not-found */
export type ErrorNotFound = ErrorBase &
  ErrorNotFoundNotFound & {
    type: ErrorNotFoundType;
  };

/** error-not-found-not-found */
export type ErrorNotFoundNotFound = object;

export enum ErrorNotFoundType {
  NotFound = 'not_found',
}

/** error-service-unavailable */
export type ErrorServiceUnavailable = ErrorBase &
  ErrorServiceUnavailableServiceUnavailable & {
    type: ErrorServiceUnavailableType;
  };

/** error-service-unavailable-service-unavailable */
export type ErrorServiceUnavailableServiceUnavailable = object;

export enum ErrorServiceUnavailableType {
  ServiceUnavailable = 'service_unavailable',
}

/** error-too-many-requests */
export type ErrorTooManyRequests = ErrorBase &
  ErrorTooManyRequestsTooManyRequests & {
    /**
     * The number of seconds after which the client should retry.
     * @format int64
     */
    retry_after?: number;
    type: ErrorTooManyRequestsType;
  };

/** error-too-many-requests-too-many-requests */
export type ErrorTooManyRequestsTooManyRequests = object;

export enum ErrorTooManyRequestsType {
  TooManyRequests = 'too_many_requests',
}

/** error-unauthorized */
export type ErrorUnauthorized = ErrorBase &
  ErrorUnauthorizedUnauthenticated & {
    type: ErrorUnauthorizedType;
  };

export enum ErrorUnauthorizedType {
  Unauthenticated = 'unauthenticated',
}

/** error-unauthorized-unauthenticated */
export type ErrorUnauthorizedUnauthenticated = object;

/** event-source */
export type EventSource = AtomBase & {
  /**
   * Configuration of the event source. Fields depend on the event
   * source type.
   */
  config?: object;
  /** Name of the event source. */
  name?: string;
  /** Instructions for setting up the event source. */
  setup_instructions?: EventSourceSetupInstructions;
  /**
   * Status of the event source. Note that paused/blocked event sources
   * return NotFound error on triggering.
   */
  status?: EventSourceStatus;
  /**
   * The URL to trigger the event source. Valid only for HTTP
   * based-event sources. This URL supports both GET and POST requests.
   */
  trigger_url?: string;
};

/** event-source-get-request */
export interface EventSourceGetRequest {
  /** The event source's ID. */
  id: string;
}

/** event-source-get-response */
export interface EventSourceGetResponse {
  event_source: EventSource;
}

/**
 * event-source-setup-instructions
 * Instructions for setting up the event source.
 */
export interface EventSourceSetupInstructions {
  /** Content of the instructions. */
  content?: string;
}

/**
 * Status of the event source. Note that paused/blocked event sources
 * return NotFound error on triggering.
 */
export enum EventSourceStatus {
  Active = 'active',
  Blocked = 'blocked',
  Paused = 'paused',
}

/** event-sources-delete-scheduled-event-request */
export interface EventSourcesDeleteScheduledEventRequest {
  /** The event key for the event which we want to delete. */
  event_key: string;
  /** The event source's ID. */
  id: string;
}

/** event-sources-schedule-event-request */
export interface EventSourcesScheduleEventRequest {
  /**
   * A unique key for this event (scoped to an event source) used for
   * updating/getting/deleting scheduled events.
   */
  event_key?: string;
  /** The type of the event. */
  event_type: string;
  /** The event source's ID. */
  id: string;
  /**
   * The raw payload of the event.
   * @format byte
   */
  payload: string;
  /**
   * The timestamp at which the event should be published. The event is
   * guaranteed to be published after this. If omitted, the event is
   * published immediately.
   * @format date-time
   */
  publish_at?: string;
  /**
   * Whether or not to update an existing scheduled event with the same
   * event key. If this is false, and an event is already scheduled with
   * the same event key, then HTTP 409 Conflict is returned.
   */
  update_if_exists?: boolean;
}

/** event-sources-schedule-event-response */
export interface EventSourcesScheduleEventResponse {
  /**
   * The event key for this event. Auto-generated if the caller doesn't
   * specify the event key. This may be empty if the event was published
   * immediately.
   */
  event_key?: string;
}

/** feature-summary */
export type FeatureSummary = PartBaseSummary;

/**
 * field-descriptor
 * Set of field attributes.
 */
export type FieldDescriptor = object;

/**
 * get-accounts-default-rev-org-request
 * Request object to get an account's default Rev organization.
 */
export interface GetAccountsDefaultRevOrgRequest {
  /**
   * The ID of Account for which default Rev organization is to be
   * fetched.
   * @example "don:core:<partition>:devo/<dev-org-id>:account/<account-id>"
   */
  id: string;
}

/**
 * get-accounts-default-rev-org-response
 * Response object for getting account's default Rev organization.
 */
export interface GetAccountsDefaultRevOrgResponse {
  rev_org: RevOrg;
}

/** group */
export type Group = AtomBase & {
  /** Description of the group. */
  description?: string;
  /** Whether it is a default group. */
  is_default: boolean;
  /** Type of the members in the group. */
  member_type?: GroupMemberType;
  /** Name of the group. */
  name?: string;
  owner?: UserSummary;
};

/** Type of the members in the group. */
export enum GroupMemberType {
  DevUser = 'dev_user',
  RevUser = 'rev_user',
}

/** group-summary */
export type GroupSummary = AtomBaseSummary & {
  /** Name of the group. */
  name?: string;
};

/**
 * groups-create-request
 * A request to create a new group.
 */
export interface GroupsCreateRequest {
  /** Description of the group. */
  description: string;
  /** Type of the members in the group. */
  member_type?: GroupMemberType;
  /** Unique name of the group. */
  name: string;
  /** Owner of the group. */
  owner?: string;
}

/**
 * groups-create-response
 * The response to group creation.
 */
export interface GroupsCreateResponse {
  group: Group;
}

/**
 * groups-get-request
 * A request to get information about a group.
 */
export interface GroupsGetRequest {
  /** The ID of the group to get. */
  id: string;
}

/**
 * groups-get-response
 * The response to getting the group.
 */
export interface GroupsGetResponse {
  group: Group;
}

/**
 * groups-list-request
 * A request to get information about a list of groups.
 */
export interface GroupsListRequest {
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /**
   * The maximum number of groups to return. The default is '50'.
   * @format int32
   */
  limit?: number;
  /** Filters the groups on basis of member type. */
  member_type?: GroupMemberType[];
  /**
   * The iteration mode to use. If "after", then entries after the provided
   * cursor will be returned, or if no cursor is provided, then from the
   * beginning. If "before", then entries before the provided cursor will be
   * returned, or if no cursor is provided, then from the end. Entries will
   * always be returned in the specified sort-by order.
   */
  mode?: ListMode;
  /** Comma-separated fields to sort the groups by. */
  sort_by?: string[];
}

/**
 * groups-list-response
 * The response to listing the groups.
 */
export interface GroupsListResponse {
  /** The list of groups. */
  groups: Group[];
  /**
   * The cursor used to iterate subsequent results in accordance to the
   * sort order. If not set, then no later elements exist.
   */
  next_cursor?: string;
  /**
   * The cursor used to iterate preceding results in accordance to the
   * sort order. If not set, then no prior elements exist.
   */
  prev_cursor?: string;
}

/**
 * groups-update-request
 * A request to update a group.
 */
export interface GroupsUpdateRequest {
  /** The updated group's description. */
  description?: string;
  /** The ID of the group to update. */
  id: string;
  /** The updated group's name. */
  name?: string;
  /** The updated group's owner. */
  owner?: string;
}

/**
 * groups-update-response
 * The response to group update.
 */
export interface GroupsUpdateResponse {
  group: Group;
}

/** issue */
export type Issue = WorkBase & {
  /** Priority of the work based upon impact and criticality. */
  priority?: IssuePriority;
};

/** Priority of the work based upon impact and criticality. */
export enum IssuePriority {
  P0 = 'p0',
  P1 = 'p1',
  P2 = 'p2',
  P3 = 'p3',
}

/** issue-summary */
export type IssueSummary = WorkBaseSummary & {
  /** Priority of the work based upon impact and criticality. */
  priority?: IssuePriority;
};

/** link */
export type Link = AtomBase & {
  /** Type of link used to define the relationship. */
  link_type: LinkType;
  source: LinkEndpointSummary;
  target: LinkEndpointSummary;
};

/** link-endpoint-summary */
export type LinkEndpointSummary = (
  | CapabilitySummary
  | ConversationSummary
  | EnhancementSummary
  | FeatureSummary
  | IssueSummary
  | OpportunitySummary
  | ProductSummary
  | TaskSummary
  | TicketSummary
) & {
  type: LinkEndpointType;
};

export enum LinkEndpointType {
  Capability = 'capability',
  Conversation = 'conversation',
  Enhancement = 'enhancement',
  Feature = 'feature',
  Issue = 'issue',
  Opportunity = 'opportunity',
  Product = 'product',
  Task = 'task',
  Ticket = 'ticket',
}

/**
 * link-rev-user-to-rev-org-request
 * A request to link a rev user to a rev org.
 */
export interface LinkRevUserToRevOrgRequest {
  /**
   * The don of the rev org to link the rev user to.
   * @example "don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"
   */
  rev_org_don: string;
  /** The don of the rev user to link. */
  user_don: string;
}

/**
 * link-rev-user-to-rev-org-response
 * The response to link a rev user to a rev org.
 */
export interface LinkRevUserToRevOrgResponse {
  rev_user: RevUser;
}

/** Type of link used to define the relationship. */
export enum LinkType {
  DevelopedWith = 'developed_with',
  Imports = 'imports',
  IsDependentOn = 'is_dependent_on',
  IsDuplicateOf = 'is_duplicate_of',
  IsParentOf = 'is_parent_of',
  IsPartOf = 'is_part_of',
  IsRelatedTo = 'is_related_to',
  Serves = 'serves',
}

/**
 * links-create-request
 * The request to create a new link.
 */
export interface LinksCreateRequest {
  /** Type of link used to define the relationship. */
  link_type: LinkType;
  /** The ID of the source object. */
  source: string;
  /** The ID of the target object. */
  target: string;
}

/**
 * links-create-response
 * The response to creating a new link.
 */
export interface LinksCreateResponse {
  link: Link;
}

/**
 * links-delete-request
 * The request to delete a link.
 */
export interface LinksDeleteRequest {
  /** The ID of the link to delete. */
  id: string;
}

/**
 * links-delete-response
 * The response for deleting a link.
 */
export type LinksDeleteResponse = object;

/**
 * The direction of link, which can either be outbound such that the
 * object is the source of the link, otherwise inbound where the object is
 * the target of the link.
 */
export enum LinksDirection {
  IsSource = 'is_source',
  IsTarget = 'is_target',
}

/**
 * links-get-request
 * The request to get a link's information.
 */
export interface LinksGetRequest {
  /** The requested link's ID. */
  id: string;
}

/**
 * links-get-response
 * The response to getting a link's information.
 */
export interface LinksGetResponse {
  link: Link;
}

/**
 * links-list-request
 * The request to get information about a list of links.
 */
export interface LinksListRequest {
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /**
   * The direction of link, which can either be outbound such that the
   * object is the source of the link, otherwise inbound where the object is
   * the target of the link.
   */
  direction?: LinksDirection;
  /**
   * The maximum number of links to return. If not set, then the default
   * is '50'.
   * @format int32
   */
  limit?: number;
  /**
   * The link type(s) to filter for, otherwise if not present, all link
   * types are included.
   */
  link_type?: LinkType[];
  /**
   * The iteration mode to use. If "after", then entries after the provided
   * cursor will be returned, or if no cursor is provided, then from the
   * beginning. If "before", then entries before the provided cursor will be
   * returned, or if no cursor is provided, then from the end. Entries will
   * always be returned in the specified sort-by order.
   */
  mode?: ListMode;
  /** The ID of the object to list the links for. */
  object: string;
  /**
   * The link types to filter for, otherwise if not present, all link
   * types are included.
   * @deprecated
   */
  types?: LinkType[];
}

/**
 * links-list-response
 * The response to listing the links.
 */
export interface LinksListResponse {
  /** The list of links. */
  links: Link[];
  /**
   * The cursor used to iterate subsequent results in accordance to the
   * sort order. If not set, then no later elements exist.
   */
  next_cursor?: string;
  /**
   * The cursor used to iterate preceding results in accordance to the
   * sort order. If not set, then no prior elements exist.
   */
  prev_cursor?: string;
}

/**
 * The iteration mode to use. If "after", then entries after the provided
 * cursor will be returned, or if no cursor is provided, then from the
 * beginning. If "before", then entries before the provided cursor will be
 * returned, or if no cursor is provided, then from the end. Entries will
 * always be returned in the specified sort-by order.
 */
export enum ListMode {
  After = 'after',
  Before = 'before',
}

/** metric-definition */
export type MetricDefinition = AtomBase;

/** The list of item types on which the metric might be applied. */
export enum MetricDefinitionAppliesTo {
  Conversation = 'conversation',
  Issue = 'issue',
  Task = 'task',
  Ticket = 'ticket',
}

/**
 * The type of the metric. 'time' metrics track the time spent in some
 * state, supporting operations like 'start', 'stop', 'pause', 'resume'.
 * 'value' metrics track a value, supporting operations like 'set',
 * 'increment', 'decrement'.
 */
export enum MetricDefinitionMetricType {
  Time = 'time',
  Value = 'value',
}

/** metric-definitions-list-request */
export interface MetricDefinitionsListRequest {
  /** The type of objects the metric definition applies to. */
  applies_to_type?: MetricDefinitionAppliesTo[];
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /**
   * The maximum number of records to return. The default is '50'.
   * @format int32
   */
  limit?: number;
  /**
   * The iteration mode to use. If "after", then entries after the provided
   * cursor will be returned, or if no cursor is provided, then from the
   * beginning. If "before", then entries before the provided cursor will be
   * returned, or if no cursor is provided, then from the end. Entries will
   * always be returned in the specified sort-by order.
   */
  mode?: ListMode;
  /** The type of metric definitions sought. */
  type?: MetricDefinitionMetricType[];
}

/** metric-definitions-list-response */
export interface MetricDefinitionsListResponse {
  /** The list of metric definitions. */
  metric_definitions: MetricDefinition[];
  /**
   * The cursor used to iterate subsequent results in accordance to the
   * sort order. If not set, then no later elements exist.
   */
  next_cursor?: string;
  /**
   * The cursor used to iterate preceding results in accordance to the
   * sort order. If not set, then no prior elements exist.
   */
  prev_cursor?: string;
}

/** opportunity */
export type Opportunity = WorkBase;

/** Forecast category of the opportunity. */
export enum OpportunityForecastCategory {
  BestCase = 'best_case',
  Commit = 'commit',
  MostLikely = 'most_likely',
  Omitted = 'omitted',
  Pipeline = 'pipeline',
  Won = 'won',
}

/** Priority of the opportunity. */
export enum OpportunityPriority {
  P0 = 'p0',
  P1 = 'p1',
  P2 = 'p2',
  P3 = 'p3',
}

/** opportunity-summary */
export type OpportunitySummary = WorkBaseSummary;

/** org-base */
export type OrgBase = AtomBase & {
  /** Name of the Organization. */
  display_name?: string;
};

/** org-base-summary */
export type OrgBaseSummary = AtomBaseSummary & {
  /** Name of the Organization. */
  display_name?: string;
};

/** The environment of the Org. Defaults to 'production' if not specified. */
export enum OrgEnvironment {
  Production = 'production',
  Staging = 'staging',
  Test = 'test',
}

/** org-schedule */
export type OrgSchedule = AtomBase & {
  /** The schedule for each week. */
  default_weekly_org_schedule?: WeeklyOrgSchedule;
  /**
   * The schedule must be valid and well-defined for at least this many
   * days in the future, otherwise a warning notification is generated.
   * Default is 0 if not specified.
   * @format int32
   */
  min_valid_days?: number;
  /** Human-readable name. */
  name?: string;
  /**
   * The list of schedule fragments. It must be an ordered list of
   * contiguous fragments (the next starting when the previous one
   * ends), updates in a published schedule are only allowed to add new
   * ones to the future.
   */
  org_schedule_fragments?: OrgScheduleFragmentOverview[];
  /**
   * Status determines how an item can be used. In 'draft' status an item
   * can be edited but can't be used. When 'published' the item can longer
   * be edited but can be used. 'Archived' is read-only.
   */
  status: OrgScheduleStatus;
  /**
   * Timezone in which this is defined. Only organization schedules in
   * the same timezone can be directly combined.
   */
  timezone?: string;
  /**
   * Derived field indicating when a valid organization schedule will
   * become invalid. If omitted, the schedule is already invalid. A
   * schedule is valid if it has a weekly schedule for all named periods
   * for all its schedule fragments, and if it has a schedule fragment
   * for the time period in question.
   * @format date-time
   */
  valid_until?: string;
  /**
   * If the organization schedule fragment specifies that the given day
   * belongs to a named period, a weekly schedule from this list with
   * the matching name will be selected.
   */
  weekly_org_schedules?: WeeklyOrgSchedule[];
};

/** org-schedule-fragment */
export type OrgScheduleFragment = AtomBase & {
  /**
   * The date (inclusive) on which the organization schedule fragment
   * begins.
   * @format date-time
   */
  from?: string;
  /**
   * Periods during which the schedule is considered to be 'off' or to
   * be in some specific named period.
   */
  intervals?: OrgScheduleInterval[];
  /** Human-readable name, indicating the purpose of the schedule. */
  name?: string;
  /**
   * CLDR region code of the countries/regions it is meant to be valid
   * for. Does not drive logic, serves only for easier filtering and
   * organization.
   */
  region_codes?: string[];
  /**
   * Status determines how an item can be used. In 'draft' status an item
   * can be edited but can't be used. When 'published' the item can longer
   * be edited but can be used. 'Archived' is read-only.
   */
  status: OrgScheduleFragmentStatus;
  /**
   * The date (exclusive) on which the organization schedule fragment's
   * validity ends.
   * @format date-time
   */
  to?: string;
};

/**
 * org-schedule-fragment-overview
 * The representation of the organization schedule fragment embedded
 * inside a organization schedule, used to quickly look up the schedule
 * fragment for the right period.
 */
export type OrgScheduleFragmentOverview = object;

/**
 * Status determines how an item can be used. In 'draft' status an item
 * can be edited but can't be used. When 'published' the item can longer
 * be edited but can be used. 'Archived' is read-only.
 */
export enum OrgScheduleFragmentStatus {
  Archived = 'archived',
  Draft = 'draft',
  Published = 'published',
}

/** org-schedule-fragments-create-request */
export interface OrgScheduleFragmentsCreateRequest {
  /**
   * Date (inclusive) on which the organization schedule fragment
   * begins.
   * @format date-time
   */
  from: string;
  /** The intervals that comprise the schedule fragment. */
  intervals: CreateOrgScheduleInterval[];
  /** Name of the organization schedule fragment. */
  name: string;
  /**
   * CLDR region code of the countries/regions it is meant to be valid
   * for. Does not drive logic, serves only for easier filtering and
   * organization.
   */
  region_codes?: string[];
  /**
   * Date (exclusive) on which the organization schedule fragment's
   * validity ends.
   * @format date-time
   */
  to: string;
}

/** org-schedule-fragments-create-response */
export interface OrgScheduleFragmentsCreateResponse {
  org_schedule_fragment: OrgScheduleFragment;
}

/** org-schedule-fragments-get-request */
export interface OrgScheduleFragmentsGetRequest {
  /** Organization schedule Fragment ID. */
  id: string;
}

/** org-schedule-fragments-get-response */
export interface OrgScheduleFragmentsGetResponse {
  org_schedule_fragment: OrgScheduleFragment;
}

/** org-schedule-fragments-transition-request */
export interface OrgScheduleFragmentsTransitionRequest {
  /** Organization schedule Fragment ID. */
  id: string;
  /**
   * Status determines how an item can be used. In 'draft' status an item
   * can be edited but can't be used. When 'published' the item can longer
   * be edited but can be used. 'Archived' is read-only.
   */
  status: OrgScheduleFragmentStatus;
}

/** org-schedule-fragments-transition-response */
export interface OrgScheduleFragmentsTransitionResponse {
  org_schedule_fragment: OrgScheduleFragment;
}

/**
 * org-schedule-interval
 * An optionally named period on day granularity.
 */
export type OrgScheduleInterval = object;

/**
 * Status determines how an item can be used. In 'draft' status an item
 * can be edited but can't be used. When 'published' the item can longer
 * be edited but can be used. 'Archived' is read-only.
 */
export enum OrgScheduleStatus {
  Archived = 'archived',
  Draft = 'draft',
  Published = 'published',
}

/** org-schedules-create-request */
export interface OrgSchedulesCreateRequest {
  default_weekly_org_schedule?: SetWeeklyOrgSchedule;
  /**
   * Organization schedule must be valid for at least this many days in
   * the future. Meaning organization schedule fragments must cover this
   * period. 0 if omitted.
   * @format int64
   */
  min_valid_days?: number;
  /** Human-readable name. */
  name: string;
  /** List of organization schedule fragments with no overlaps or gaps. */
  org_schedule_fragments?: SetOrgScheduleFragmentSummary[];
  /**
   * Timezone in which the organization schedule applies. Expected to be
   * a valid IANA time zone name such as America/New_York.
   */
  timezone: string;
  /**
   * If this day belongs to a named period according to the currently
   * active organization schedule fragment, a weekly organization
   * schedule from this list with the corresponding name will apply.
   */
  weekly_org_schedules?: SetWeeklyOrgSchedule[];
}

/** org-schedules-create-response */
export interface OrgSchedulesCreateResponse {
  org_schedule: OrgSchedule;
}

/** org-schedules-get-request */
export interface OrgSchedulesGetRequest {
  /** Organization schedule ID. */
  id: string;
}

/** org-schedules-get-response */
export interface OrgSchedulesGetResponse {
  org_schedule: OrgSchedule;
}

/** org-schedules-list-request */
export interface OrgSchedulesListRequest {
  /** Creator ID the filter matches. */
  created_by_id?: string[];
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /**
   * Max number of organization schedules returned in a page. Default is
   * 50.
   * @format int32
   */
  limit?: number;
  /**
   * The iteration mode to use. If "after", then entries after the provided
   * cursor will be returned, or if no cursor is provided, then from the
   * beginning. If "before", then entries before the provided cursor will be
   * returned, or if no cursor is provided, then from the end. Entries will
   * always be returned in the specified sort-by order.
   */
  mode?: ListMode;
  /** The organization schedule statuses the filter matches. */
  status?: OrgScheduleStatus[];
  /** Provides ways to specify date ranges on objects. */
  valid_until?: DateFilter;
}

/** org-schedules-list-response */
export interface OrgSchedulesListResponse {
  /**
   * The cursor used to iterate subsequent results in accordance to the
   * sort order. If not set, then no later elements exist.
   */
  next_cursor?: string;
  /** The list of organization schedules. */
  org_schedules: OrgSchedule[];
  /**
   * The cursor used to iterate preceding results in accordance to the
   * sort order. If not set, then no prior elements exist.
   */
  prev_cursor?: string;
}

/** org-schedules-set-future-request */
export interface OrgSchedulesSetFutureRequest {
  /** Organization schedule ID. */
  id: string;
  /** Organization schedule Fragment ID. */
  org_schedule_fragment_id: string;
}

/** org-schedules-set-future-response */
export interface OrgSchedulesSetFutureResponse {
  org_schedule: OrgSchedule;
}

/** org-schedules-transition-request */
export interface OrgSchedulesTransitionRequest {
  /** Organization schedule ID. */
  id: string;
  /**
   * Status determines how an item can be used. In 'draft' status an item
   * can be edited but can't be used. When 'published' the item can longer
   * be edited but can be used. 'Archived' is read-only.
   */
  status: OrgScheduleStatus;
}

/** org-schedules-transition-response */
export interface OrgSchedulesTransitionResponse {
  org_schedule: OrgSchedule;
}

/** org-schedules-update-request */
export interface OrgSchedulesUpdateRequest {
  default_weekly_org_schedule?: SetWeeklyOrgSchedule;
  /** Organization schedule ID. */
  id: string;
  /**
   * Organization schedule must be valid for at least this many days in
   * the future. Meaning organization schedule fragments must cover this
   * period. 0 if omitted.
   * @format int64
   */
  min_valid_days?: number;
  /** Human-readable name. */
  name?: string;
  /** List of organization schedule fragments with no overlaps or gaps. */
  org_schedule_fragments?: SetOrgScheduleFragmentSummary[];
  /**
   * Timezone in which the organization schedule applies. Expected to be
   * a valid IANA time zone name such as America/New_York.
   */
  timezone?: string;
  /**
   * If this day belongs to a named period according to the currently
   * active organization schedule fragment, a weekly organization
   * schedule from this list with the corresponding name will apply.
   */
  weekly_org_schedules?: SetWeeklyOrgSchedule[];
}

/** org-schedules-update-response */
export interface OrgSchedulesUpdateResponse {
  org_schedule: OrgSchedule;
}

/** org-summary */
export type OrgSummary = (AccountSummary | RevOrgSummary) & {
  type: OrgType;
};

export enum OrgType {
  Account = 'account',
  RevOrg = 'rev_org',
}

/** part-base-summary */
export type PartBaseSummary = AtomBaseSummary & {
  /** Name of the part. */
  name: string;
};

/** part-summary */
export type PartSummary = (
  | CapabilitySummary
  | EnhancementSummary
  | FeatureSummary
  | ProductSummary
) & {
  type: PartType;
};

export enum PartType {
  Capability = 'capability',
  Enhancement = 'enhancement',
  Feature = 'feature',
  Product = 'product',
}

/** product-summary */
export type ProductSummary = PartBaseSummary;

/**
 * resource
 * Resource details.
 */
export interface Resource {
  /** Ids of the artifacts. */
  artifacts?: ArtifactSummary[];
  /** URL of the external article. */
  url?: string;
}

/** rev-org */
export type RevOrg = OrgBase & {
  account?: AccountSummary;
  /** The artifacts attached to the Rev organization. */
  artifacts?: ArtifactSummary[];
  /** Custom fields. */
  custom_fields?: object;
  /**
   * Custom schema fragments.
   * @example ["don:core:<partition>:devo/<dev-org-id>:custom_type_fragment/<custom-type-fragment-id>"]
   */
  custom_schema_fragments?: string[];
  /** Description of the Rev organization. */
  description?: string;
  /** Company's domain name. Example - 'devrev.ai'. */
  domain?: string;
  /**
   * External ref is a unique identifier for the Rev (customer)
   * organization from your primary customer system of records. If none
   * is specified, a system-generated identifier will be assigned to the
   * organization.
   */
  external_ref?: string;
  /**
   * Stock schema fragment.
   * @example "don:core:<partition>:devo/<dev-org-id>:custom_type_fragment/<custom-type-fragment-id>"
   */
  stock_schema_fragment?: string;
};

/** rev-org-summary */
export type RevOrgSummary = OrgBaseSummary;

/**
 * rev-orgs-create-request
 * Request object to create a new Rev organization in the Dev
 * organization.
 */
export interface RevOrgsCreateRequest {
  /**
   * Account Id to associate with this Rev organization.
   * @example "don:core:<partition>:devo/<dev-org-id>:account/<account-id>"
   */
  account?: string;
  /**
   * The IDs of the artifacts to associate with the Rev organization.
   * @example ["don:core:<partition>:devo/<dev-org-id>:artifact/<artifact-id>"]
   */
  artifacts?: string[];
  /** Application-defined custom fields. */
  custom_fields?: object;
  /**
   * Schema fragment IDs associated with this Rev organization.
   * @example ["don:core:<partition>:devo/<dev-org-id>:custom_type_fragment/<custom-type-fragment-id>"]
   */
  custom_schema_fragments?: string[];
  /** Description of the Rev organization. */
  description?: string;
  /** Name of the Rev organization. */
  display_name: string;
  /** Company's domain name. Example - 'devrev.ai'. */
  domain?: string;
  /** The environment of the Org. Defaults to 'production' if not specified. */
  environment?: OrgEnvironment;
  /**
   * External ref is a custom unique identifier which is a reference to
   * an unique id for this organization's data in some system of
   * records.
   */
  external_ref?: string;
  /** The tier of the RevOrg. */
  tier?: string;
}

/**
 * rev-orgs-create-response
 * Response object for request to create a new Rev organization.
 */
export interface RevOrgsCreateResponse {
  rev_org: RevOrg;
}

/**
 * rev-orgs-get-request
 * Request object to get Rev organization's information.
 */
export interface RevOrgsGetRequest {
  /**
   * The ID of the required Rev organization.
   * @example "don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"
   */
  id: string;
}

/**
 * rev-orgs-get-response
 * The response to getting a Rev organization's information.
 */
export interface RevOrgsGetResponse {
  rev_org: RevOrg;
}

/**
 * rev-orgs-list-request
 * A request to get the list of Rev organizations for the authenticated
 * user's Dev organization.
 */
export interface RevOrgsListRequest {
  /**
   * Filters by account.
   * @example ["don:core:<partition>:devo/<dev-org-id>:account/<account-id>"]
   */
  account?: string[];
  /** Filters by creator. */
  created_by?: string[];
  created_date?: DateTimeFilter;
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /**
   * Filters on custom fields. Input will be of the format
   * (custom_field_filter=field_name1:val1,val2,val3&custom_field_filter=field_name2:val1,val2).
   */
  custom_field_filter?: string[];
  /** List of external refs to filter Rev organizations for. */
  external_ref?: string[];
  /**
   * The maximum number of Rev organizations to be retrieved per page.
   * @format int32
   */
  limit?: number;
  /**
   * The iteration mode to use. If "after", then entries after the provided
   * cursor will be returned, or if no cursor is provided, then from the
   * beginning. If "before", then entries before the provided cursor will be
   * returned, or if no cursor is provided, then from the end. Entries will
   * always be returned in the specified sort-by order.
   */
  mode?: ListMode;
  modified_date?: DateTimeFilter;
  /**
   * Fields to sort the Rev organizations by and the direction to sort
   * them.
   */
  sort_by?: string[];
}

/**
 * rev-orgs-list-response
 * The response to getting a list of Rev organizations' information.
 */
export interface RevOrgsListResponse {
  /**
   * The cursor used to iterate subsequent results in accordance to the
   * sort order. If not set, then no later elements exist.
   */
  next_cursor?: string;
  /**
   * The cursor used to iterate preceding results in accordance to the
   * sort order. If not set, then no prior elements exist.
   */
  prev_cursor?: string;
  /** List with all of the Rev organizations' information. */
  rev_orgs: RevOrg[];
}

/**
 * rev-orgs-update-request
 * Request object to update information of the Rev organization.
 */
export interface RevOrgsUpdateRequest {
  /**
   * New account ID to associate with this Rev organization.
   * @example "don:core:<partition>:devo/<dev-org-id>:account/<account-id>"
   */
  account?: string;
  artifacts?: RevOrgsUpdateRequestArtifacts;
  /**
   * Schema fragment IDs associated with this Rev organization.
   * @example ["don:core:<partition>:devo/<dev-org-id>:custom_type_fragment/<custom-type-fragment-id>"]
   */
  custom_schema_fragments?: string[];
  /** Description of the Rev organization. */
  description?: string;
  /** Customer chosen name for the Rev organization. */
  display_name?: string;
  /** Company's domain name. Example - 'devrev.ai'. */
  domain?: string;
  /** The environment of the Org. Defaults to 'production' if not specified. */
  environment?: OrgEnvironment;
  /**
   * External ref is a custom unique identifier which is a reference to
   * an unique id for this organization's data in some system of
   * records.
   */
  external_ref?: string;
  /**
   * The ID of Rev organization to update.
   * @example "don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"
   */
  id: string;
  /** The tier of the RevOrg. */
  tier?: string;
}

/** rev-orgs-update-request-artifacts */
export interface RevOrgsUpdateRequestArtifacts {
  /**
   * Sets the IDs to the provided artifact IDs.
   * @example ["don:core:<partition>:devo/<dev-org-id>:artifact/<artifact-id>"]
   */
  set?: string[];
}

/**
 * rev-orgs-update-response
 * Response object to updating Rev organization's information.
 */
export interface RevOrgsUpdateResponse {
  rev_org: RevOrg;
}

/** rev-user */
export type RevUser = UserBase & {
  /** The artifacts attached to the Rev user. */
  artifacts?: ArtifactSummary[];
  /** Custom fields. */
  custom_fields?: object;
  /**
   * Custom schema fragments.
   * @example ["don:core:<partition>:devo/<dev-org-id>:custom_type_fragment/<custom-type-fragment-id>"]
   */
  custom_schema_fragments?: string[];
  /** Description of the Rev user. */
  description?: string;
  /**
   * External ref is a mutable unique identifier for a user within the
   * Rev organization from your primary customer record. If none is
   * available, a good alternative is the email address/phone number
   * which could uniquely identify the user. If none is specified, a
   * system-generated identifier will be assigned to the user.
   */
  external_ref?: string;
  /** Whether the Rev user is verified or not. */
  is_verified?: boolean;
  rev_org?: OrgSummary;
  /**
   * Stock schema fragment.
   * @example "don:core:<partition>:devo/<dev-org-id>:custom_type_fragment/<custom-type-fragment-id>"
   */
  stock_schema_fragment?: string;
};

/** rev-user-summary */
export type RevUserSummary = UserBaseSummary & {
  /**
   * External ref is a mutable unique identifier for a user within the
   * Rev organization from your primary customer record. If none is
   * available, a good alternative is the email address/phone number
   * which could uniquely identify the user. If none is specified, a
   * system-generated identifier will be assigned to the user.
   */
  external_ref?: string;
  rev_org?: OrgSummary;
};

/**
 * rev-users-create-request
 * Request object to create a new Rev user for a Rev organization.
 */
export interface RevUsersCreateRequest {
  /**
   * The IDs of the artifacts to associate with the Rev user.
   * @example ["don:core:<partition>:devo/<dev-org-id>:artifact/<artifact-id>"]
   */
  artifacts?: string[];
  /** Application-defined custom fields. */
  custom_fields?: object;
  /**
   * The schema fragment IDs associated with the Rev user.
   * @example ["don:core:<partition>:devo/<dev-org-id>:custom_type_fragment/<custom-type-fragment-id>"]
   */
  custom_schema_fragments?: string[];
  /** Description of the Rev user. */
  description?: string;
  /** The user's display name. The name is non-unique and mutable. */
  display_name?: string;
  /** Email address of the Rev user. */
  email?: string;
  /**
   * External ref is a mutable unique identifier for a user within the
   * Dev organization from your primary customer record. If none is
   * available, a good alternative is the email address/phone number
   * which could uniquely identify the user. If none is specified, a
   * system-generated identifier will be assigned to the user.
   */
  external_ref?: string;
  /** Phone numbers of the Rev user. */
  phone_numbers?: string[];
  /**
   * The ID of Rev organization for which a Rev user is to be created.
   * @example "don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"
   */
  rev_org?: string;
}

/**
 * rev-users-create-response
 * Response object for creating a new Rev user for Rev organization.
 */
export interface RevUsersCreateResponse {
  rev_user: RevUser;
}

/**
 * rev-users-delete-request
 * Request object to delete a Rev user.
 */
export interface RevUsersDeleteRequest {
  /** The ID of Rev user to delete. */
  id: string;
}

/**
 * rev-users-delete-response
 * The response to deleting a Rev user of a Rev organization.
 */
export type RevUsersDeleteResponse = object;

/**
 * rev-users-get-request
 * Request object to get a Rev user.
 */
export interface RevUsersGetRequest {
  /** The ID of Rev user to be retrieved. */
  id: string;
}

/**
 * rev-users-get-response
 * The returned Rev user.
 */
export interface RevUsersGetResponse {
  rev_user: RevUser;
}

/**
 * rev-users-list-request
 * Gets the list of Rev users belonging to the authenticated user's Dev
 * Organization which the user is also authorized to access.
 */
export interface RevUsersListRequest {
  /** Filters for Rev users that were created by the specified user(s). */
  created_by?: string[];
  created_date?: DateTimeFilter;
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /** List of emails of Rev users to be filtered. */
  email?: string[];
  /** List of external refs to filter Rev users for. */
  external_ref?: string[];
  /**
   * The maximum number of Rev users to return. The default is '50'.
   * @format int32
   */
  limit?: number;
  /**
   * The iteration mode to use. If "after", then entries after the provided
   * cursor will be returned, or if no cursor is provided, then from the
   * beginning. If "before", then entries before the provided cursor will be
   * returned, or if no cursor is provided, then from the end. Entries will
   * always be returned in the specified sort-by order.
   */
  mode?: ListMode;
  modified_date?: DateTimeFilter;
  /** List of phone numbers to filter Rev users on. */
  phone_numbers?: string[];
  /**
   * List of IDs of Rev organizations to be filtered.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"]
   */
  rev_org?: string[];
  /** Fields to sort the Rev users by and the direction to sort them. */
  sort_by?: string[];
}

/**
 * rev-users-list-response
 * The response to listing all Rev users matching the filter criteria.
 */
export interface RevUsersListResponse {
  /**
   * The cursor used to iterate subsequent results in accordance to the
   * sort order. If not set, then no later elements exist.
   */
  next_cursor?: string;
  /**
   * The cursor used to iterate preceding results in accordance to the
   * sort order. If not set, then no prior elements exist.
   */
  prev_cursor?: string;
  /** List containing all the Rev users. */
  rev_users: RevUser[];
}

/**
 * rev-users-update-request
 * Request to update details of a Rev user.
 */
export interface RevUsersUpdateRequest {
  artifacts?: RevUsersUpdateRequestArtifacts;
  /** Application-defined custom fields. */
  custom_fields?: object;
  custom_schema_fragments?: RevUsersUpdateRequestCustomSchemaFragments;
  /** Updated description of the Rev user. */
  description?: string;
  /** Updated display name of the Rev user. */
  display_name?: string;
  /** Updated email address of the Rev user. */
  email?: string;
  /** Updated external ref value of the Rev user. */
  external_ref?: string;
  /** The ID of Rev user to update. */
  id: string;
}

/** rev-users-update-request-artifacts */
export interface RevUsersUpdateRequestArtifacts {
  /**
   * Sets the IDs to the provided artifact IDs.
   * @example ["don:core:<partition>:devo/<dev-org-id>:artifact/<artifact-id>"]
   */
  set?: string[];
}

/** rev-users-update-request-custom-schema-fragments */
export interface RevUsersUpdateRequestCustomSchemaFragments {
  /**
   * Sets the IDs to the provided schema fragment IDs.
   * @example ["don:core:<partition>:devo/<dev-org-id>:custom_type_fragment/<custom-type-fragment-id>"]
   */
  set?: string[];
}

/**
 * rev-users-update-response
 * Updated Rev user object.
 */
export interface RevUsersUpdateResponse {
  rev_user: RevUser;
}

/** schema-bool-field-descriptor */
export type SchemaBoolFieldDescriptor = SchemaFieldDescriptorBase & {
  /** Default value. */
  default_value?: boolean;
};

/** schema-bool-list-field-descriptor */
export type SchemaBoolListFieldDescriptor = SchemaFieldDescriptorBase & {
  /** Default value. */
  default_value?: boolean[];
};

/** schema-composite-field-descriptor */
export type SchemaCompositeFieldDescriptor = SchemaFieldDescriptorBase & {
  /** Composite type. Required when field type is composite. */
  composite_type?: string;
};

/** schema-composite-list-field-descriptor */
export type SchemaCompositeListFieldDescriptor = SchemaFieldDescriptorBase & {
  /** Composite type. Required when field type is composite. */
  composite_type?: string;
};

/** schema-date-field-descriptor */
export type SchemaDateFieldDescriptor = SchemaFieldDescriptorBase & {
  /** Default value. */
  default_value?: string;
};

/** schema-date-list-field-descriptor */
export type SchemaDateListFieldDescriptor = SchemaFieldDescriptorBase & {
  /** Default value. */
  default_value?: string[];
};

/** schema-double-field-descriptor */
export type SchemaDoubleFieldDescriptor = SchemaFieldDescriptorBase & {
  /**
   * Default value.
   * @format double
   */
  default_value?: number;
};

/** schema-double-list-field-descriptor */
export type SchemaDoubleListFieldDescriptor = SchemaFieldDescriptorBase & {
  /** Default value. */
  default_value?: number[];
};

/** schema-enum-field-descriptor */
export type SchemaEnumFieldDescriptor = SchemaFieldDescriptorBase & {
  /** Allowed values for the field. */
  allowed_values: string[];
  /** Default value. */
  default_value?: string;
};

/** schema-enum-list-field-descriptor */
export type SchemaEnumListFieldDescriptor = SchemaFieldDescriptorBase & {
  /** Allowed values for the field. */
  allowed_values: string[];
  /** Default value. */
  default_value?: string[];
};

/**
 * schema-field-descriptor
 * Set of field attributes.
 */
export type SchemaFieldDescriptor = (
  | SchemaBoolFieldDescriptor
  | SchemaCompositeFieldDescriptor
  | SchemaDateFieldDescriptor
  | SchemaDoubleFieldDescriptor
  | SchemaEnumFieldDescriptor
  | SchemaFieldDescriptorArrayType
  | SchemaIdFieldDescriptor
  | SchemaIntFieldDescriptor
  | SchemaRichTextFieldDescriptor
  | SchemaTextFieldDescriptor
  | SchemaTimestampFieldDescriptor
  | SchemaTokensFieldDescriptor
) & {
  field_type: SchemaFieldDescriptorFieldType;
};

/** schema-field-descriptor-array-type */
export type SchemaFieldDescriptorArrayType = (
  | SchemaBoolListFieldDescriptor
  | SchemaCompositeListFieldDescriptor
  | SchemaDateListFieldDescriptor
  | SchemaDoubleListFieldDescriptor
  | SchemaEnumListFieldDescriptor
  | SchemaIdListFieldDescriptor
  | SchemaIntListFieldDescriptor
  | SchemaRichTextListFieldDescriptor
  | SchemaTextListFieldDescriptor
  | SchemaTimestampListFieldDescriptor
  | SchemaTokensListFieldDescriptor
) & {
  base_type: SchemaFieldDescriptorArrayTypeBaseType;
  /**
   * The maximum array length.
   * @format int64
   */
  max_items?: number;
  /**
   * The minimum array length.
   * @format int64
   */
  min_items?: number;
};

export enum SchemaFieldDescriptorArrayTypeBaseType {
  Bool = 'bool',
  Composite = 'composite',
  Date = 'date',
  Double = 'double',
  Enum = 'enum',
  Id = 'id',
  Int = 'int',
  RichText = 'rich_text',
  Text = 'text',
  Timestamp = 'timestamp',
  Tokens = 'tokens',
}

/** schema-field-descriptor-base */
export interface SchemaFieldDescriptorBase {
  /** Description of the field. */
  description?: string;
  /** Whether this field is filterable, groupable and sortable. */
  is_filterable?: boolean;
  /**
   * Whether this field can hold Personally Identifiable Information
   * (PII).
   */
  is_pii?: boolean;
  /** Whether this field is required or not. */
  is_required?: boolean;
  /** The schema of MFZ specific fields. */
  mfz?: SchemaFieldMfzMetadata;
  /** Name of the field. */
  name: string;
  /** Type this field is from. */
  origin?: string;
  /** The schema of ui specific fields. */
  ui?: SchemaFieldUiMetadata;
}

export enum SchemaFieldDescriptorFieldType {
  Array = 'array',
  Bool = 'bool',
  Composite = 'composite',
  Date = 'date',
  Double = 'double',
  Enum = 'enum',
  Id = 'id',
  Int = 'int',
  RichText = 'rich_text',
  Text = 'text',
  Timestamp = 'timestamp',
  Tokens = 'tokens',
}

/**
 * schema-field-mfz-metadata
 * The schema of MFZ specific fields.
 */
export type SchemaFieldMfzMetadata = object;

/**
 * schema-field-ui-metadata
 * The schema of ui specific fields.
 */
export interface SchemaFieldUiMetadata {
  /** Display name of the field. */
  display_name?: string;
}

/** schema-id-field-descriptor */
export type SchemaIdFieldDescriptor = SchemaFieldDescriptorBase & {
  /** Default value. */
  default_value?: string;
  /** Object ID types. Required when field type is ID. */
  id_type?: string[];
};

/** schema-id-list-field-descriptor */
export type SchemaIdListFieldDescriptor = SchemaFieldDescriptorBase & {
  /** Default value. */
  default_value?: string[];
  /** Object ID types. Required when field type is ID. */
  id_type?: string[];
};

/** schema-int-field-descriptor */
export type SchemaIntFieldDescriptor = SchemaFieldDescriptorBase & {
  /**
   * Default value.
   * @format int64
   */
  default_value?: number;
  /**
   * The minimum value for the integer (exclusive).
   * @format int64
   */
  gt?: number;
  /**
   * The minimum value for the integer (inclusive).
   * @format int64
   */
  gte?: number;
  /**
   * The maximum value for the integer (exclusive).
   * @format int64
   */
  lt?: number;
  /**
   * The maximum value for the integer (inclusive).
   * @format int64
   */
  lte?: number;
};

/** schema-int-list-field-descriptor */
export type SchemaIntListFieldDescriptor = SchemaFieldDescriptorBase & {
  /** Default value. */
  default_value?: number[];
  /**
   * The minimum value for the integer (exclusive).
   * @format int64
   */
  gt?: number;
  /**
   * The minimum value for the integer (inclusive).
   * @format int64
   */
  gte?: number;
  /**
   * The maximum value for the integer (exclusive).
   * @format int64
   */
  lt?: number;
  /**
   * The maximum value for the integer (inclusive).
   * @format int64
   */
  lte?: number;
};

/** schema-rich-text-field-descriptor */
export type SchemaRichTextFieldDescriptor = SchemaFieldDescriptorBase & {
  /** The contained substring. */
  contains?: string;
  /** Default value. */
  default_value?: string;
  /**
   * The exact string length.
   * @format int64
   */
  eq_len?: number;
  /**
   * The maximum string length.
   * @format int64
   */
  max_len?: number;
  /**
   * The minimum string length.
   * @format int64
   */
  min_len?: number;
  /** The string pattern (regular expression). */
  pattern?: string;
  /** The string prefix. */
  prefix?: string;
  /** The string suffix. */
  suffix?: string;
};

/** schema-rich-text-list-field-descriptor */
export type SchemaRichTextListFieldDescriptor = SchemaFieldDescriptorBase & {
  /** The contained substring. */
  contains?: string;
  /** Default value. */
  default_value?: string[];
  /**
   * The exact string length.
   * @format int64
   */
  eq_len?: number;
  /**
   * The maximum string length.
   * @format int64
   */
  max_len?: number;
  /**
   * The minimum string length.
   * @format int64
   */
  min_len?: number;
  /** The string pattern (regular expression). */
  pattern?: string;
  /** The string prefix. */
  prefix?: string;
  /** The string suffix. */
  suffix?: string;
};

/** schema-text-field-descriptor */
export type SchemaTextFieldDescriptor = SchemaFieldDescriptorBase & {
  /** The contained substring. */
  contains?: string;
  /** Default value. */
  default_value?: string;
  /**
   * The exact string length.
   * @format int64
   */
  eq_len?: number;
  /**
   * The maximum string length.
   * @format int64
   */
  max_len?: number;
  /**
   * The minimum string length.
   * @format int64
   */
  min_len?: number;
  /** The string pattern (regular expression). */
  pattern?: string;
  /** The string prefix. */
  prefix?: string;
  /** The string suffix. */
  suffix?: string;
};

/** schema-text-list-field-descriptor */
export type SchemaTextListFieldDescriptor = SchemaFieldDescriptorBase & {
  /** The contained substring. */
  contains?: string;
  /** Default value. */
  default_value?: string[];
  /**
   * The exact string length.
   * @format int64
   */
  eq_len?: number;
  /**
   * The maximum string length.
   * @format int64
   */
  max_len?: number;
  /**
   * The minimum string length.
   * @format int64
   */
  min_len?: number;
  /** The string pattern (regular expression). */
  pattern?: string;
  /** The string prefix. */
  prefix?: string;
  /** The string suffix. */
  suffix?: string;
};

/** schema-timestamp-field-descriptor */
export type SchemaTimestampFieldDescriptor = SchemaFieldDescriptorBase & {
  /** Default value. */
  default_value?: string;
};

/** schema-timestamp-list-field-descriptor */
export type SchemaTimestampListFieldDescriptor = SchemaFieldDescriptorBase & {
  /** Default value. */
  default_value?: string[];
};

/** schema-tokens-field-descriptor */
export type SchemaTokensFieldDescriptor = SchemaFieldDescriptorBase & {
  /** The contained substring. */
  contains?: string;
  /** Default value. */
  default_value?: string;
  /**
   * The exact string length.
   * @format int64
   */
  eq_len?: number;
  /**
   * The maximum string length.
   * @format int64
   */
  max_len?: number;
  /**
   * The minimum string length.
   * @format int64
   */
  min_len?: number;
  /** The string pattern (regular expression). */
  pattern?: string;
  /** The string prefix. */
  prefix?: string;
  /** The string suffix. */
  suffix?: string;
};

/** schema-tokens-list-field-descriptor */
export type SchemaTokensListFieldDescriptor = SchemaFieldDescriptorBase & {
  /** The contained substring. */
  contains?: string;
  /** Default value. */
  default_value?: string[];
  /**
   * The exact string length.
   * @format int64
   */
  eq_len?: number;
  /**
   * The maximum string length.
   * @format int64
   */
  max_len?: number;
  /**
   * The minimum string length.
   * @format int64
   */
  min_len?: number;
  /** The string pattern (regular expression). */
  pattern?: string;
  /** The string prefix. */
  prefix?: string;
  /** The string suffix. */
  suffix?: string;
};

/** service-account */
export type ServiceAccount = UserBase;

/** service-account-summary */
export type ServiceAccountSummary = UserBaseSummary;

/**
 * service-accounts-get-request
 * The request object to get a service account's information.
 */
export interface ServiceAccountsGetRequest {
  /** The ID of the requested service account. */
  id: string;
}

/**
 * service-accounts-get-response
 * The response object that carries the service account's information
 * corresponding to the request.
 */
export interface ServiceAccountsGetResponse {
  service_account: ServiceAccount;
}

/** set-org-schedule-fragment-summary */
export interface SetOrgScheduleFragmentSummary {
  /** Organization schedule fragment ID. */
  id: string;
}

/** set-sla-policy */
export interface SetSlaPolicy {
  /** Metrics to apply to the selected items. */
  metrics?: SetSupportMetricTarget[];
  /** Human-readable name. */
  name: string;
  selector: SetSlaSelector;
}

/** set-sla-selector */
export interface SetSlaSelector {
  /** The item type for which the SLA policy applies. */
  applies_to: SlaSelectorAppliesTo;
  /**
   * Custom fields with their fully qualified names and associated with
   * their exact allowed values. The SLA policy applies to records where
   * all named custom fields have exactly the specified values. If the
   * value is null, the field must have null value or not be present.
   */
  custom_fields?: object;
  /**
   * The SLA policy applies to the tickets of these parts.
   * @example ["don:core:<partition>:devo/<dev-org-id>:<part-type>/<part-id>"]
   */
  parts?: string[];
  /** The SLA policy applies to conversations with these priorities. */
  priority?: SlaSelectorPriority[];
  /** The SLA policy applies to tickets with these severities. */
  severity?: SlaSelectorSeverity[];
  /** The SLA policy applies to conversations with these sources. */
  source_channel?: string[];
  /**
   * The SLA policy applies to items with these tags.
   * @example ["don:core:<partition>:devo/<dev-org-id>:tag/<tag-id>"]
   */
  tags?: string[];
}

/** set-support-metric-target */
export interface SetSupportMetricTarget {
  /** The metric to apply. */
  metric: string;
  /**
   * The organization schedule controlling this metrics calculation.
   * Time based metrics don't consume time while their schedule is off.
   */
  org_schedule_id?: string;
  /**
   * The percentage of instances for which this metric's target must not
   * be breached, in order to avoid breaching the overall SLA policy.
   * @format double
   */
  performance?: number;
  /**
   * The target value to be achieved, for example the time in which to
   * do something, or the maximum allowed number of message pairs. The
   * units and interpretation of the value is controlled by the
   * properties of the referenced metric.
   * @format int32
   */
  target: number;
  /**
   * The threshold in the same units as target where the metric is
   * considered to be 'at risk'.
   * @format int32
   */
  warning_target?: number;
}

/** set-tag-with-value */
export interface SetTagWithValue {
  /**
   * The ID of the tag.
   * @example "don:core:<partition>:devo/<dev-org-id>:tag/<tag-id>"
   */
  id: string;
  /**
   * The value for the object's association with the tag. If specified,
   * the value must be one that's specified in the tag's allowed values.
   */
  value?: string;
}

/** set-weekly-org-schedule */
export interface SetWeeklyOrgSchedule {
  /** The 'on' intervals of the week. */
  intervals: CreateWeeklyOrgScheduleInterval[];
  /**
   * The name of the period during which the organization schedule
   * applies.
   */
  period_name: string;
}

/** sla */
export type Sla = AtomBase & {
  /**
   * Describes the compensation to be provided in case of SLA breach. It is
   * not 'self-executing', it is the responsibility of the organization
   * providing the SLA to actually transfer the promised credit, resource or
   * other payment.
   */
  compensation?: SlaCompensation;
  /** Description of the purpose and capabilities of the SLA. */
  description?: string;
  /**
   * Specifies the frequency of when the contractually-meaningful evaluation
   * of the SLA happens. The organization for their own information might
   * evaluate the various metrics contained in the policy as often as we can
   * make it feasible for them, but only the evaluation at the end of the
   * evaluation period triggers a compensation and needs to be shared with
   * the customer.
   */
  evaluation_period?: SlaEvaluationPeriod;
  /** Human-readable name. */
  name: string;
  /**
   * The policies encompassed by this SLA, ordered in decreasing
   * priority.
   */
  policies?: SlaPolicy[];
  /**
   * Status determines how an item can be used. In 'draft' status an item
   * can be edited but can't be used. When 'published' the item can longer
   * be edited but can be used. 'Archived' is read-only.
   */
  status: SlaStatus;
};

/** sla-assign-result */
export interface SlaAssignResult {
  error?: Error;
  rev_org: RevOrgSummary;
}

/**
 * sla-compensation
 * Describes the compensation to be provided in case of SLA breach. It is
 * not 'self-executing', it is the responsibility of the organization
 * providing the SLA to actually transfer the promised credit, resource or
 * other payment.
 */
export type SlaCompensation = object;

/**
 * Specifies the frequency of when the contractually-meaningful evaluation
 * of the SLA happens. The organization for their own information might
 * evaluate the various metrics contained in the policy as often as we can
 * make it feasible for them, but only the evaluation at the end of the
 * evaluation period triggers a compensation and needs to be shared with
 * the customer.
 */
export enum SlaEvaluationPeriod {
  Monthly = 'monthly',
  Quarterly = 'quarterly',
  Weekly = 'weekly',
  Yearly = 'yearly',
}

/**
 * sla-policy
 * A policy that represents a promise to your revs.
 */
export type SlaPolicy = object;

/** The item type for which the SLA policy applies. */
export enum SlaSelectorAppliesTo {
  Conversation = 'conversation',
  Ticket = 'ticket',
}

/** Th SLA policy applies to conversations with these priorities. */
export enum SlaSelectorPriority {
  P0 = 'p0',
  P1 = 'p1',
  P2 = 'p2',
}

/** The SLA policy applies to tickets with these severities. */
export enum SlaSelectorSeverity {
  Blocker = 'blocker',
  High = 'high',
  Low = 'low',
  Medium = 'medium',
}

/**
 * Status determines how an item can be used. In 'draft' status an item
 * can be edited but can't be used. When 'published' the item can longer
 * be edited but can be used. 'Archived' is read-only.
 */
export enum SlaStatus {
  Archived = 'archived',
  Draft = 'draft',
  Published = 'published',
}

/**
 * sla-summary-filter
 * The filter for SLA summary.
 */
export type SlaSummaryFilter = object;

/** slas-assign-request */
export interface SlasAssignRequest {
  /**
   * The SLA which would be assigned to the Rev organizations. If
   * omitted, the SLA of all the rev organizations referenced will be
   * unset.
   */
  id?: string;
  /**
   * The Rev organizations to apply the SLA to.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"]
   */
  rev_orgs: string[];
}

/** slas-assign-response */
export interface SlasAssignResponse {
  /** The list of outcomes for each Rev organization. */
  results: SlaAssignResult[];
}

/** slas-create-request */
export interface SlasCreateRequest {
  /** Description of the purpose and capabilities of the SLA. */
  description?: string;
  /**
   * Specifies the frequency of when the contractually-meaningful evaluation
   * of the SLA happens. The organization for their own information might
   * evaluate the various metrics contained in the policy as often as we can
   * make it feasible for them, but only the evaluation at the end of the
   * evaluation period triggers a compensation and needs to be shared with
   * the customer.
   */
  evaluation_period?: SlaEvaluationPeriod;
  /** Human-readable name. */
  name: string;
  /**
   * The policies encompassed by this SLA, ordered in decreasing
   * priority.
   */
  policies?: SetSlaPolicy[];
}

/** slas-create-response */
export interface SlasCreateResponse {
  sla: Sla;
}

/** slas-get-request */
export interface SlasGetRequest {
  /** The ID of the SLA to get. */
  id: string;
}

/** slas-get-response */
export interface SlasGetResponse {
  sla: Sla;
}

/** slas-list-request */
export interface SlasListRequest {
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /**
   * The maximum number of SLAs to return. The default is '50'.
   * @format int32
   */
  limit?: number;
  /**
   * The iteration mode to use. If "after", then entries after the provided
   * cursor will be returned, or if no cursor is provided, then from the
   * beginning. If "before", then entries before the provided cursor will be
   * returned, or if no cursor is provided, then from the end. Entries will
   * always be returned in the specified sort-by order.
   */
  mode?: ListMode;
  /** The SLA statuses the filter matches. */
  status?: SlaStatus[];
}

/** slas-list-response */
export interface SlasListResponse {
  /**
   * The cursor used to iterate subsequent results in accordance to the
   * sort order. If not set, then no later elements exist.
   */
  next_cursor?: string;
  /**
   * The cursor used to iterate preceding results in accordance to the
   * sort order. If not set, then no prior elements exist.
   */
  prev_cursor?: string;
  /** The list of SLAs. */
  slas: Sla[];
}

/** slas-transition-request */
export interface SlasTransitionRequest {
  /** The updated SLA. */
  id: string;
  /**
   * Status determines how an item can be used. In 'draft' status an item
   * can be edited but can't be used. When 'published' the item can longer
   * be edited but can be used. 'Archived' is read-only.
   */
  status: SlaStatus;
}

/** slas-transition-response */
export interface SlasTransitionResponse {
  sla: Sla;
}

/** slas-update-request */
export interface SlasUpdateRequest {
  /** Description of the purpose and capabilities of the SLA. */
  description?: string;
  /**
   * Specifies the frequency of when the contractually-meaningful evaluation
   * of the SLA happens. The organization for their own information might
   * evaluate the various metrics contained in the policy as often as we can
   * make it feasible for them, but only the evaluation at the end of the
   * evaluation period triggers a compensation and needs to be shared with
   * the customer.
   */
  evaluation_period?: SlaEvaluationPeriod;
  /** The SLA's ID. */
  id: string;
  /** Human-readable name. */
  name?: string;
  /**
   * The policies encompassed by this SLA, ordered in decreasing
   * priority, the whole array will be overwritten by the contents of
   * this array.
   */
  policies?: SetSlaPolicy[];
}

/** slas-update-response */
export interface SlasUpdateResponse {
  sla: Sla;
}

/**
 * stage
 * Describes the current stage of a work item.
 */
export interface Stage {
  /** Current stage name of the work item. */
  name: string;
}

/**
 * stage-filter
 * The filter for stages.
 */
export interface StageFilter {
  /** Filters for records in the provided stage(s) by name. */
  name?: string[];
  /** Filters for records in the provided stage(s) by ordinal. */
  ordinal?: number[];
}

/**
 * stage-init
 * Sets an object's initial stage.
 */
export interface StageInit {
  /** The name of the stage. */
  name?: string;
}

/**
 * stage-update
 * Updates an object's stage.
 */
export interface StageUpdate {
  /** The updated name of the stage, otherwise unchanged if not set. */
  name?: string;
}

/**
 * stock-field-enum-override
 * Override for the allowed values of a stock field enum.
 */
export type StockFieldEnumOverride = object;

/** subtype */
export interface Subtype {
  /** Display name of the subtype. */
  display_name?: string;
  /** DON of the custom type fragment this subtype belongs to. */
  fragment_id: string;
  /** Leaf type for the subtype. */
  leaf_type: string;
  /** Value of the subtype. */
  value: string;
}

/** subtypes-list-request */
export interface SubtypesListRequest {
  /**
   * Leaf type for which subtypes are required.
   * @deprecated
   */
  leaf_type?: string;
  /** List of leaf types for which subtypes are required. */
  leaf_types?: string[];
}

/** subtypes-list-response */
export interface SubtypesListResponse {
  /** List of subtypes. */
  subtypes: Subtype[];
}

/**
 * survey-aggregation-filter
 * The filter for survey aggregation.
 */
export type SurveyAggregationFilter = object;

/** sys-user */
export type SysUser = UserBase;

/** sys-user-summary */
export type SysUserSummary = UserBaseSummary;

/**
 * sys-users-list-request
 * A request to get the list of system user's information.
 */
export interface SysUsersListRequest {
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /**
   * The maximum number of system users to return. Value can range from
   * '1' to '100', with a default of '50'.
   * @format int32
   */
  limit?: number;
  /**
   * The iteration mode to use. If "after", then entries after the provided
   * cursor will be returned, or if no cursor is provided, then from the
   * beginning. If "before", then entries before the provided cursor will be
   * returned, or if no cursor is provided, then from the end. Entries will
   * always be returned in the specified sort-by order.
   */
  mode?: ListMode;
  /** Fields to sort the system users by and the direction to sort them. */
  sort_by?: string[];
}

/**
 * sys-users-list-response
 * The response to listing the system users.
 */
export interface SysUsersListResponse {
  /**
   * The cursor used to iterate subsequent results in accordance to the
   * sort order. If not set, then no later elements exist.
   */
  next_cursor?: string;
  /**
   * The cursor used to iterate preceding results in accordance to the
   * sort order. If not set, then no prior elements exist.
   */
  prev_cursor?: string;
  /** The list of system users. */
  sys_users: SysUser[];
}

/**
 * sys-users-update-request
 * Request to update information of the system user.
 */
export interface SysUsersUpdateRequest {
  /** Updated display name for the system user. */
  display_name?: string;
  /**
   * Artifact ID of the system user's new display picture.
   * @example "don:core:<partition>:devo/<dev-org-id>:artifact/<artifact-id>"
   */
  display_picture?: string | null;
  /** Updated full name for the system user. */
  full_name?: string;
  /** The ID of system user to update. */
  id: string;
}

/**
 * sys-users-update-response
 * Updated Sys user object.
 */
export interface SysUsersUpdateResponse {
  sys_user: SysUser;
}

/** tag-summary */
export type TagSummary = AtomBaseSummary & {
  /**
   * The name of the tag, which denotes the logical concept by which all
   * tagged objects will be associated. The name is guaranteed to be
   * unique.
   */
  name: string;
};

/** tag-with-value */
export interface TagWithValue {
  tag: TagSummary;
  /** The value for the object's association with the tag. */
  value?: string;
}

/** task */
export type Task = WorkBase;

/** Priority of the work based upon impact and criticality. */
export enum TaskPriority {
  P0 = 'p0',
  P1 = 'p1',
  P2 = 'p2',
  P3 = 'p3',
}

/** task-summary */
export type TaskSummary = WorkBaseSummary;

/** tenant-fragment */
export type TenantFragment = CustomSchemaFragmentBase;

/** ticket */
export type Ticket = WorkBase & {
  group?: GroupSummary;
  rev_org?: OrgSummary;
  /** Severity of the ticket. */
  severity?: TicketSeverity;
};

/** Severity of the ticket. */
export enum TicketSeverity {
  Blocker = 'blocker',
  High = 'high',
  Low = 'low',
  Medium = 'medium',
}

/** ticket-summary */
export type TicketSummary = WorkBaseSummary & {
  rev_org?: OrgSummary;
  /** Severity of the ticket. */
  severity?: TicketSeverity;
};

/** timeline-comment */
export type TimelineComment = TimelineEntryBase & {
  /** The artifacts for the comment. */
  artifacts?: ArtifactSummary[];
  /**
   * The comment's body. If the comment has been deleted, then no body
   * will appear in the response.
   */
  body?: string;
  /** The type of the body to use for the comment. */
  body_type?: TimelineCommentBodyType;
  /** Snap Kit Body of the comment. */
  snap_kit_body?: TimelineSnapKitBody;
};

/** The type of the body to use for the comment. */
export enum TimelineCommentBodyType {
  SnapKit = 'snap_kit',
  Text = 'text',
}

/** Describes collections of timeline entries. */
export enum TimelineEntriesCollection {
  Discussions = 'discussions',
  Events = 'events',
}

/**
 * timeline-entries-create-request
 * The request to create a timeline entry for an object.
 */
export type TimelineEntriesCreateRequest =
  TimelineEntriesCreateRequestTimelineComment & {
    /**
     * The collection(s) that the entry belongs to, otherwise if not
     * provided, then the entry's default collection is used.
     */
    collections?: TimelineEntriesCollection[];
    /**
     * If set, then the entry is ephemeral and will be deleted after the
     * provided time. The minimum value should be at least a minute more
     * than the current timestamp.
     * @format date-time
     */
    expires_at?: string;
    /**
     * The labels to be associated with the entry.
     * @minLength 1
     * @maxLength 64
     * @maxItems 16
     */
    labels?: string[];
    /**
     * The ID of the object to create the timeline entry for.
     * @example "don:core:<partition>:devo/<dev-org-id>:<part-type>/<part-id>"
     */
    object: string;
    /**
     * If the visibility of the entry is private, this specifies the users
     * that the entry is private to. Note the creator is always implicitly
     * included in this list.
     * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
     */
    private_to?: string[];
    type: TimelineEntriesCreateRequestType;
    /**
     * The visibility of the entry. If 'private', then the entry is only
     * visible to the creator, 'internal' is visible with the Dev
     * organization, 'external' is visible to the Dev organzation and Rev
     * users, and 'public' is visible to all. If not set, then the default
     * visibility is 'external'.
     */
    visibility?: TimelineEntryVisibility;
  };

/** timeline-entries-create-request-timeline-comment */
export interface TimelineEntriesCreateRequestTimelineComment {
  /**
   * The IDs of the artifacts attached to the comment.
   * @example ["don:core:<partition>:devo/<dev-org-id>:artifact/<artifact-id>"]
   */
  artifacts?: string[];
  /** The comment's body. */
  body?: string;
  /** The type of the body to use for the comment. */
  body_type?: TimelineCommentBodyType;
  /**
   * The IDs of the previews of the links posted in the comment.
   * @example ["don:core:<partition>:devo/<dev-org-id>:snap_widget/<snap-widget-id>"]
   */
  link_previews?: string[];
  /** Snap Kit Body of the comment. */
  snap_kit_body?: TimelineSnapKitBody;
}

export enum TimelineEntriesCreateRequestType {
  TimelineComment = 'timeline_comment',
}

/**
 * timeline-entries-create-response
 * The response to creating a timeline entry for an object.
 */
export interface TimelineEntriesCreateResponse {
  timeline_entry: TimelineEntry;
}

/**
 * timeline-entries-list-request
 * The request to list timeline entries for an object.
 */
export interface TimelineEntriesListRequest {
  /**
   * The collection(s) to list entries from, otherwise if not provided,
   * all entries are returned.
   */
  collections?: TimelineEntriesCollection[];
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /**
   * Filters for entries containing at least one of the provided labels,
   * otherwise if no labels are provided, then no label filtering is
   * done.
   * @minLength 1
   * @maxLength 64
   */
  labels?: string[];
  /**
   * The maximum number of entries to return. If not set, then this
   * defaults to `50`.
   * @format int32
   */
  limit?: number;
  /**
   * The iteration mode to use. If "after", then entries after the provided
   * cursor will be returned, or if no cursor is provided, then from the
   * beginning. If "before", then entries before the provided cursor will be
   * returned, or if no cursor is provided, then from the end. Entries will
   * always be returned in the specified sort-by order.
   */
  mode?: ListMode;
  /**
   * The ID of the object to list timeline entries for.
   * @example "don:core:<partition>:devo/<dev-org-id>:<part-type>/<part-id>"
   */
  object: string;
  /**
   * The visibility of the timeline entries to filter for. Note this is
   * a strict filter, such that only entries with the exact visibilities
   * specified will be returned.
   */
  visibility?: TimelineEntryVisibility[];
}

/**
 * timeline-entries-list-response
 * The response to listing timeline entries for an object.
 */
export interface TimelineEntriesListResponse {
  /**
   * The cursor used to iterate subsequent results in accordance to the
   * sort order. If not set, then no later elements exist.
   */
  next_cursor?: string;
  /**
   * The cursor used to iterate preceding results in accordance to the
   * sort order. If not set, then no prior elements exist.
   */
  prev_cursor?: string;
  /** The timeline entries for the object. */
  timeline_entries: TimelineEntry[];
}

/**
 * timeline-entries-update-request
 * The request to update a timeline entry.
 */
export type TimelineEntriesUpdateRequest =
  TimelineEntriesUpdateRequestTimelineComment & {
    /**
     * The ID of the timeline entry to update.
     * @example "don:core:<partition>:devo/<dev-org-id>:ticket/123:timeline_event/<timeline-event-id>"
     */
    id: string;
    type: TimelineEntriesUpdateRequestType;
  };

/** timeline-entries-update-request-timeline-comment */
export interface TimelineEntriesUpdateRequestTimelineComment {
  artifacts?: TimelineEntriesUpdateRequestTimelineCommentArtifacts;
  /** The updated comment's body. */
  body?: string;
  /** The type of the body to use for the comment. */
  body_type?: TimelineCommentBodyType;
  link_previews?: TimelineEntriesUpdateRequestTimelineCommentLinkPreviews;
  /** Snap Kit Body of the comment. */
  snap_kit_body?: TimelineSnapKitBody;
}

/** timeline-entries-update-request-timeline-comment-artifacts */
export interface TimelineEntriesUpdateRequestTimelineCommentArtifacts {
  /**
   * Adds the provided artifacts to the comment. An artifact cannot be
   * added more than once, i.e. nothing is done if the artifact is
   * already attached. Mutually exclusive with `set`.
   * @example ["don:core:<partition>:devo/<dev-org-id>:artifact/<artifact-id>"]
   */
  add?: string[];
  /**
   * Removes the provided artifacts from the comment. If an artifact is
   * not present, then it's ignored. Mututally exclusive with `set`.
   * @example ["don:core:<partition>:devo/<dev-org-id>:artifact/<artifact-id>"]
   */
  remove?: string[];
  /**
   * Sets the field to the provided artifacts.
   * @example ["don:core:<partition>:devo/<dev-org-id>:artifact/<artifact-id>"]
   */
  set?: string[];
}

/** timeline-entries-update-request-timeline-comment-link-previews */
export interface TimelineEntriesUpdateRequestTimelineCommentLinkPreviews {
  /**
   * Adds the provided link previews to the comment. A link preview
   * cannot be added more than once, i.e. nothing is done if the link
   * preview is already present. Mutually exclusive with `set`.
   * @example ["don:core:<partition>:devo/<dev-org-id>:snap_widget/<snap-widget-id>"]
   */
  add?: string[];
  /**
   * Removes the provided link previews from the comment. If a link
   * preview is not present, then it's ignored. Mutually exclusive with
   * `set`.
   * @example ["don:core:<partition>:devo/<dev-org-id>:snap_widget/<snap-widget-id>"]
   */
  remove?: string[];
  /**
   * Set the link previews to the provided IDs.
   * @example ["don:core:<partition>:devo/<dev-org-id>:snap_widget/<snap-widget-id>"]
   */
  set?: string[];
}

export enum TimelineEntriesUpdateRequestType {
  TimelineComment = 'timeline_comment',
}

/**
 * timeline-entries-update-response
 * The response to updating a timeline entry.
 */
export interface TimelineEntriesUpdateResponse {
  timeline_entry: TimelineEntry;
}

/** timeline-entry */
export type TimelineEntry = TimelineComment & {
  type: TimelineEntryType;
};

/** timeline-entry-base */
export type TimelineEntryBase = AtomBase & {
  /** Labels that are associated with the Timeline entry. */
  labels?: string[];
  /** The object that the Timeline entry belongs to. */
  object: string;
  /** The type of object that the Timeline entry belongs to. */
  object_type?: TimelineEntryObjectType;
  /** The reactions to the entry. */
  reactions?: TimelineReaction[];
  /** Thread. */
  thread?: TimelineThread;
  /**
   * The visibility of the entry. If 'private', then the entry is only
   * visible to the creator, 'internal' is visible with the Dev
   * organization, 'external' is visible to the Dev organzation and Rev
   * users, and 'public' is visible to all. If not set, then the default
   * visibility is 'external'.
   */
  visibility?: TimelineEntryVisibility;
};

/** The type of object that the Timeline entry belongs to. */
export enum TimelineEntryObjectType {
  Account = 'account',
  Capability = 'capability',
  Conversation = 'conversation',
  Engagement = 'engagement',
  Enhancement = 'enhancement',
  Feature = 'feature',
  Issue = 'issue',
  Meeting = 'meeting',
  Opportunity = 'opportunity',
  Product = 'product',
  RevOrg = 'rev_org',
  RevUser = 'rev_user',
  Task = 'task',
  Ticket = 'ticket',
  TimelineComment = 'timeline_comment',
}

export enum TimelineEntryType {
  TimelineComment = 'timeline_comment',
}

/**
 * The visibility of the entry. If 'private', then the entry is only
 * visible to the creator, 'internal' is visible with the Dev
 * organization, 'external' is visible to the Dev organzation and Rev
 * users, and 'public' is visible to all. If not set, then the default
 * visibility is 'external'.
 */
export enum TimelineEntryVisibility {
  External = 'external',
  Internal = 'internal',
  Private = 'private',
  Public = 'public',
}

/**
 * timeline-reaction
 * Reaction.
 */
export interface TimelineReaction {
  /** The reaction emoji's unicode codepoint, e.g. "1f44d". */
  emoji?: string;
  /** Whether the requesting user reacted. */
  reacted?: boolean;
  /**
   * The total number of users with this reaction.
   * @format int32
   */
  total_users?: number;
}

/**
 * timeline-snap-kit-body
 * Snap Kit Body of the comment.
 */
export interface TimelineSnapKitBody {
  /** The JSON body of the SnapKit. */
  body?: object;
  /**
   * The name of an action defined in the SnapIn. The combination of
   * snap_in_id and snap_in_action_name uniquely identifies the
   * interaction object which is to be called when actions on a snapkit
   * element is taken.
   */
  snap_in_action_name?: string;
  /** ID of the snap-in which created the SnapKit. */
  snap_in_id?: string;
}

/**
 * timeline-thread
 * Thread.
 */
export interface TimelineThread {
  /**
   * The total number of replies in the thread.
   * @format int32
   */
  total_replies?: number;
}

/**
 * unlink-rev-user-from-rev-org-request
 * A request to unlink a rev user from a rev org.
 */
export interface UnlinkRevUserFromRevOrgRequest {
  /**
   * The don of the rev org to unlink the rev user from.
   * @example "don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"
   */
  rev_org_don: string;
  /** The don of the rev user to unlink. */
  user_don: string;
}

/**
 * unlink-rev-user-from-rev-org-response
 * The response to unlink a rev user from a rev org.
 */
export interface UnlinkRevUserFromRevOrgResponse {
  rev_user: RevUser;
}

/** user-base */
export type UserBase = AtomBase & {
  /** The user's display name. The name is non-unique and mutable. */
  display_name?: string;
  display_picture?: ArtifactSummary;
  /** Email address of the user. */
  email?: string;
  /** Full name of the user. */
  full_name?: string;
  /** Phone numbers of the user. */
  phone_numbers?: string[];
  /** State of the user. */
  state?: UserState;
};

/** user-base-summary */
export type UserBaseSummary = AtomBaseSummary & {
  /** The user's display name. The name is non-unique and mutable. */
  display_name?: string;
  display_picture?: ArtifactSummary;
  /** Email address of the user. */
  email?: string;
  /** Full name of the user. */
  full_name?: string;
  /** State of the user. */
  state?: UserState;
};

/** State of the user. */
export enum UserState {
  Active = 'active',
  Deactivated = 'deactivated',
  Deleted = 'deleted',
  Locked = 'locked',
  Shadow = 'shadow',
  Unassigned = 'unassigned',
}

/** user-summary */
export type UserSummary = (
  | DevUserSummary
  | RevUserSummary
  | ServiceAccountSummary
  | SysUserSummary
) & {
  type: UserType;
};

export enum UserType {
  DevUser = 'dev_user',
  RevUser = 'rev_user',
  ServiceAccount = 'service_account',
  SysUser = 'sys_user',
}

/**
 * weekly-org-schedule
 * The schedule for each week.
 */
export type WeeklyOrgSchedule = object;

/** work */
export type Work = (Issue | Opportunity | Task | Ticket) & {
  type: WorkType;
};

/** work-base */
export type WorkBase = AtomBase & {
  applies_to_part?: PartSummary;
  /** The artifacts attached to the work item. */
  artifacts?: ArtifactSummary[];
  /** Body of the work object. */
  body?: string;
  /** Custom fields. */
  custom_fields?: object;
  /**
   * Custom schema fragments.
   * @example ["don:core:<partition>:devo/<dev-org-id>:custom_type_fragment/<custom-type-fragment-id>"]
   */
  custom_schema_fragments?: string[];
  /** The users that own the work. */
  owned_by: UserSummary[];
  /** Users that reported the work. */
  reported_by?: UserSummary[];
  /** Describes the current stage of a work item. */
  stage?: Stage;
  /**
   * Stock schema fragment.
   * @example "don:core:<partition>:devo/<dev-org-id>:custom_type_fragment/<custom-type-fragment-id>"
   */
  stock_schema_fragment?: string;
  /** Tags associated with the object. */
  tags?: TagWithValue[];
  /**
   * Timestamp when the work is expected to be complete.
   * @format date-time
   */
  target_close_date?: string;
  /** Title of the work object. */
  title: string;
};

/** work-base-summary */
export type WorkBaseSummary = AtomBaseSummary & {
  /** Title of the work object. */
  title: string;
};

export enum WorkType {
  Issue = 'issue',
  Opportunity = 'opportunity',
  Task = 'task',
  Ticket = 'ticket',
}

/** works-create-request */
export type WorksCreateRequest = (
  | WorksCreateRequestIssue
  | WorksCreateRequestOpportunity
  | WorksCreateRequestTask
  | WorksCreateRequestTicket
) & {
  /**
   * The [part](https://devrev.ai/docs/product/parts) that the work
   * applies to. Specifying a part is required when creating tickets and
   * issues.
   * @example "don:core:<partition>:devo/<dev-org-id>:<part-type>/<part-id>"
   */
  applies_to_part: string;
  /**
   * The IDs of the artifacts to associate with the work item.
   * @example ["don:core:<partition>:devo/<dev-org-id>:artifact/<artifact-id>"]
   */
  artifacts?: string[];
  /** Body of the work object. */
  body?: string;
  /** Custom fields. */
  custom_fields?: object;
  /**
   * The custom schema fragments to use.
   * @example ["don:core:<partition>:devo/<dev-org-id>:custom_type_fragment/<custom-type-fragment-id>"]
   */
  custom_schema_fragments?: string[];
  /**
   * The users that own the work.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  owned_by: string[];
  /**
   * The users that reported the work.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  reported_by?: string[];
  /** Sets an object's initial stage. */
  stage?: StageInit;
  /** Tags associated with the work item. */
  tags?: SetTagWithValue[];
  /**
   * Timestamp for when the work is expected to be complete.
   * @format date-time
   */
  target_close_date?: string;
  /** Title of the work object. */
  title: string;
  type: WorkType;
};

/** works-create-request-issue */
export interface WorksCreateRequestIssue {
  /** Priority of the work based upon impact and criticality. */
  priority?: IssuePriority;
  /** The sprint that the issue belongs to. */
  sprint?: string;
}

/** works-create-request-opportunity */
export interface WorksCreateRequestOpportunity {
  /**
   * The ID of the account that the opportunity is associated with.
   * @example "don:core:<partition>:devo/<dev-org-id>:account/<account-id>"
   */
  account: string;
  /**
   * Total opportunity amount.
   * @format double
   */
  amount?: number;
  /** Contacts involved in the opportunity. */
  contacts?: string[];
  /**
   * Budget of the customer.
   * @format double
   */
  customer_budget?: number;
  /** Forecast category of the opportunity. */
  forecast_category?: OpportunityForecastCategory;
  /** Priority of the opportunity. */
  priority?: OpportunityPriority;
  /**
   * The probability of winning the deal, lies between 0.0 and 1.0.
   * @format double
   */
  probability?: number;
}

/** works-create-request-task */
export interface WorksCreateRequestTask {
  /** Whether the task is embedded in the work. */
  embedded?: boolean;
  /** Priority of the work based upon impact and criticality. */
  priority?: TaskPriority;
  /**
   * Timestamp when the task was started.
   * @format date-time
   */
  start_date?: string;
}

/** works-create-request-ticket */
export interface WorksCreateRequestTicket {
  /** The group that the ticket is associated with. */
  group?: string;
  /** Whether the ticket is spam. */
  is_spam?: boolean;
  /**
   * The Rev organization that the ticket is associated with.
   * @example "don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"
   */
  rev_org?: string;
  /** Severity of the ticket. */
  severity?: TicketSeverity;
  /** The source channel of the ticket. */
  source_channel?: string;
}

/** works-create-response */
export interface WorksCreateResponse {
  work: Work;
}

/** works-delete-request */
export interface WorksDeleteRequest {
  /**
   * The work's ID.
   * @example "don:core:<partition>:devo/<dev-org-id>:<work-type>/<work-id>"
   */
  id: string;
}

/** works-delete-response */
export type WorksDeleteResponse = object;

/** works-export-request */
export interface WorksExportRequest {
  /** Provides ways to specify date ranges on objects. */
  actual_close_date?: DateFilter;
  /**
   * Filters for work belonging to any of the provided parts.
   * @example ["don:core:<partition>:devo/<dev-org-id>:<part-type>/<part-id>"]
   */
  applies_to_part?: string[];
  /**
   * Filters for work created by any of these users.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  created_by?: string[];
  /** Provides ways to specify date ranges on objects. */
  created_date?: DateFilter;
  /** Filters for custom fields. */
  custom_fields?: object;
  /**
   * The number of work items to return. The default is '50', the
   * maximum is '5000'.
   * @format int32
   */
  first?: number;
  issue?: WorksFilterIssue;
  /** Provides ways to specify date ranges on objects. */
  modified_date?: DateFilter;
  opportunity?: WorksFilterOpportunity;
  /**
   * Filters for work owned by any of these users.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  owned_by?: string[];
  /** Fields to sort the work items by and the direction to sort them. */
  sort_by?: string[];
  /** The filter for stages. */
  stage?: StageFilter;
  /** Provides ways to specify date ranges on objects. */
  target_close_date?: DateFilter;
  ticket?: WorksFilterTicket;
  /** Filters for work of the provided types. */
  type?: WorkType[];
}

/** works-export-response */
export interface WorksExportResponse {
  /** The resulting collection of work items. */
  works: Work[];
}

/** works-filter-issue */
export interface WorksFilterIssue {
  /** Filters for issues with any of the provided priorities. */
  priority?: IssuePriority[];
  /**
   * Filters for issues with any of the provided Rev organizations.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"]
   */
  rev_orgs?: string[];
}

/** works-filter-opportunity */
export interface WorksFilterOpportunity {
  /**
   * Filters for opportunities belonging to any of the provided
   * accounts.
   * @example ["don:core:<partition>:devo/<dev-org-id>:account/<account-id>"]
   */
  account?: string[];
  /** Filters for opportunities with any of the provided contacts. */
  contacts?: string[];
}

/** works-filter-ticket */
export interface WorksFilterTicket {
  /** Filters for tickets belonging to specific groups. */
  group?: string[];
  /** Filters for tickets that are spam. */
  is_spam?: boolean;
  /** Filters for tickets that need response. */
  needs_response?: boolean;
  /**
   * Filters for tickets that are associated with any of the provided
   * Rev organizations.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"]
   */
  rev_org?: string[];
  /** Filters for tickets with any of the provided severities. */
  severity?: TicketSeverity[];
  /** The filter for SLA summary. */
  sla_summary?: SlaSummaryFilter;
  /** Filters for tickets with any of the provided source channels. */
  source_channel?: string[];
  /** The filter for survey aggregation. */
  surveys?: SurveyAggregationFilter;
}

/** works-get-request */
export interface WorksGetRequest {
  /**
   * The work's ID.
   * @example "don:core:<partition>:devo/<dev-org-id>:<work-type>/<work-id>"
   */
  id: string;
}

/** works-get-response */
export interface WorksGetResponse {
  work: Work;
}

/** works-list-request */
export interface WorksListRequest {
  /** Provides ways to specify date ranges on objects. */
  actual_close_date?: DateFilter;
  /**
   * Filters for work belonging to any of the provided parts.
   * @example ["don:core:<partition>:devo/<dev-org-id>:<part-type>/<part-id>"]
   */
  applies_to_part?: string[];
  /**
   * Filters for work created by any of these users.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  created_by?: string[];
  /** Provides ways to specify date ranges on objects. */
  created_date?: DateFilter;
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /** Filters for custom fields. */
  custom_fields?: object;
  issue?: WorksFilterIssue;
  /**
   * The maximum number of works to return. The default is '50'.
   * @format int32
   */
  limit?: number;
  /**
   * The iteration mode to use. If "after", then entries after the provided
   * cursor will be returned, or if no cursor is provided, then from the
   * beginning. If "before", then entries before the provided cursor will be
   * returned, or if no cursor is provided, then from the end. Entries will
   * always be returned in the specified sort-by order.
   */
  mode?: ListMode;
  /** Provides ways to specify date ranges on objects. */
  modified_date?: DateFilter;
  opportunity?: WorksFilterOpportunity;
  /**
   * Filters for work owned by any of these users.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  owned_by?: string[];
  /** Fields to sort the works by and the direction to sort them. */
  sort_by?: string[];
  /** The filter for stages. */
  stage?: StageFilter;
  /** Provides ways to specify date ranges on objects. */
  target_close_date?: DateFilter;
  ticket?: WorksFilterTicket;
  /** Filters for work of the provided types. */
  type?: WorkType[];
}

/** works-list-response */
export interface WorksListResponse {
  /**
   * The cursor used to iterate subsequent results in accordance to the
   * sort order. If not set, then no later elements exist.
   */
  next_cursor?: string;
  /**
   * The cursor used to iterate preceding results in accordance to the
   * sort order. If not set, then no prior elements exist.
   */
  prev_cursor?: string;
  /** The list of works. */
  works: Work[];
}

/** works-update-request */
export type WorksUpdateRequest = (
  | WorksUpdateRequestIssue
  | WorksUpdateRequestOpportunity
  | WorksUpdateRequestTask
  | WorksUpdateRequestTicket
) & {
  /**
   * Updates the part that the work item applies to.
   * @example "don:core:<partition>:devo/<dev-org-id>:<part-type>/<part-id>"
   */
  applies_to_part?: string;
  artifacts?: WorksUpdateRequestArtifactIds;
  /** Updated body of the work object, or unchanged if not provided. */
  body?: string;
  /** Custom fields. */
  custom_fields?: object;
  /**
   * The custom schema fragments to use.
   * @example ["don:core:<partition>:devo/<dev-org-id>:custom_type_fragment/<custom-type-fragment-id>"]
   */
  custom_schema_fragments?: string[];
  /**
   * The work's ID.
   * @example "don:core:<partition>:devo/<dev-org-id>:<work-type>/<work-id>"
   */
  id: string;
  owned_by?: WorksUpdateRequestOwnedBy;
  reported_by?: WorksUpdateRequestReportedBy;
  /** Updates an object's stage. */
  stage?: StageUpdate;
  tags?: WorksUpdateRequestTags;
  /**
   * Updates the timestamp for when the work is expected to be complete.
   * @format date-time
   */
  target_close_date?: string;
  /** Updated title of the work object, or unchanged if not provided. */
  title?: string;
  type: WorkType;
};

/** works-update-request-artifact-ids */
export interface WorksUpdateRequestArtifactIds {
  /**
   * Sets the IDs to the provided artifact IDs.
   * @example ["don:core:<partition>:devo/<dev-org-id>:artifact/<artifact-id>"]
   */
  set?: string[];
}

/** works-update-request-issue */
export interface WorksUpdateRequestIssue {
  /** Priority of the work based upon impact and criticality. */
  priority?: IssuePriority;
  /** Updates the sprint that the issue belongs to. */
  sprint?: string | null;
}

/** works-update-request-opportunity */
export interface WorksUpdateRequestOpportunity {
  /**
   * Updates the account that the opportunity is associated with.
   * @example "don:core:<partition>:devo/<dev-org-id>:account/<account-id>"
   */
  account?: string;
  /**
   * Updates the total opportunity amount.
   * @format double
   */
  amount?: number | null;
  contacts?: WorksUpdateRequestOpportunityContacts;
  /**
   * Updates the customer budget.
   * @format double
   */
  customer_budget?: number | null;
  /**
   * Updates the probability of winning the deal, lies between 0.0 and
   * 1.0.
   * @format double
   */
  probability?: number | null;
}

/** works-update-request-opportunity-contacts */
export interface WorksUpdateRequestOpportunityContacts {
  /** Sets the contact IDs to the provided contact IDs. */
  set: string[];
}

/** works-update-request-owned-by */
export interface WorksUpdateRequestOwnedBy {
  /**
   * Sets the owner IDs to the provided user IDs. This must not be
   * empty.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  set?: string[];
}

/** works-update-request-reported-by */
export interface WorksUpdateRequestReportedBy {
  /**
   * Sets the users that reported the work to the provided user IDs.
   * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
   */
  set?: string[];
}

/** works-update-request-tags */
export interface WorksUpdateRequestTags {
  /** Sets the provided tags on the work item. */
  set?: SetTagWithValue[];
}

/** works-update-request-task */
export interface WorksUpdateRequestTask {
  /** Whether the task is embedded in the work. */
  embedded?: boolean;
  /** Priority of the work based upon impact and criticality. */
  priority?: TaskPriority;
  /**
   * Timestamp when the task was started.
   * @format date-time
   */
  start_date?: string;
}

/** works-update-request-ticket */
export interface WorksUpdateRequestTicket {
  /** The group that the ticket is associated with. */
  group?: string;
  /** Updates whether the ticket is spam. */
  is_spam?: boolean;
  /**
   * Updates the Rev organization that the ticket is associated with.
   * @example "don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"
   */
  rev_org?: string | null;
  /** Severity of the ticket. */
  severity?: TicketSeverity;
}

/** works-update-response */
export interface WorksUpdateResponse {
  work: Work;
}

import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || '{protocol}://{hostname}',
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem)
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === 'object'
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== 'string'
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData
          ? { 'Content-Type': type }
          : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title DevRev Beta REST API
 * @version BETA
 * @baseUrl {protocol}://{hostname}
 *
 * DevRev's BETA REST API Specification.
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Creates an account, which is a record representing a customer or an organization.
   *
   * @tags accounts
   * @name AccountsCreate
   * @request POST:/accounts.create
   * @secure
   */
  accountsCreate = (data: AccountsCreateRequest, params: RequestParams = {}) =>
    this.request<
      AccountsCreateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/accounts.create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Fetches account's default Rev organization.
   *
   * @tags accounts
   * @name GetAccountsDefaultRevOrg
   * @request GET:/accounts.default-rev-org.get
   * @secure
   */
  getAccountsDefaultRevOrg = (
    query: {
      /**
       * The ID of Account for which default Rev organization is to be
       * fetched.
       * @example "don:core:<partition>:devo/<dev-org-id>:account/<account-id>"
       */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      GetAccountsDefaultRevOrgResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/accounts.default-rev-org.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Fetches account's default Rev organization.
   *
   * @tags accounts
   * @name GetAccountsDefaultRevOrgPost
   * @request POST:/accounts.default-rev-org.get
   * @secure
   */
  getAccountsDefaultRevOrgPost = (
    data: GetAccountsDefaultRevOrgRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      GetAccountsDefaultRevOrgResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/accounts.default-rev-org.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Deletes an account.
   *
   * @tags accounts
   * @name AccountsDelete
   * @request POST:/accounts.delete
   * @secure
   */
  accountsDelete = (data: AccountsDeleteRequest, params: RequestParams = {}) =>
    this.request<
      AccountsDeleteResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/accounts.delete`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Exports a collection of accounts.
   *
   * @tags accounts
   * @name AccountsExport
   * @request GET:/accounts.export
   * @secure
   */
  accountsExport = (
    query?: {
      /** Filters for accounts created by the specified user(s). */
      created_by?: string[];
      /**
       * Filters for objects created after the provided timestamp (inclusive).
       * @format date-time
       */
      'created_date.after'?: string;
      /**
       * Filters for objects created before the provided timestamp
       * (inclusive).
       * @format date-time
       */
      'created_date.before'?: string;
      /** Domains for accounts to be filtered. */
      domains?: string[];
      /** Array of references of accounts to be filtered. */
      external_refs?: string[];
      /**
       * The number of accounts to return. The default is '50'.
       * @format int32
       * @min 1
       * @max 500
       */
      first?: number;
      /**
       * Filters for objects created after the provided timestamp (inclusive).
       * @format date-time
       */
      'modified_date.after'?: string;
      /**
       * Filters for objects created before the provided timestamp
       * (inclusive).
       * @format date-time
       */
      'modified_date.before'?: string;
      /** Filters for accounts owned by the specified user(s). */
      owned_by?: string[];
      /** Fields to sort the accounts by and the direction to sort them in. */
      sort_by?: string[];
      /** Filters for accounts on specified stages. */
      stage?: string[];
      /** List of tags to be filtered. */
      tags?: string[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      AccountsExportResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/accounts.export`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Exports a collection of accounts.
   *
   * @tags accounts
   * @name AccountsExportPost
   * @request POST:/accounts.export
   * @secure
   */
  accountsExportPost = (
    data: AccountsExportRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      AccountsExportResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/accounts.export`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Retrieves an account's information.
   *
   * @tags accounts
   * @name AccountsGet
   * @request GET:/accounts.get
   * @secure
   */
  accountsGet = (
    query: {
      /**
       * The ID of the account to be retrieved.
       * @example "don:core:<partition>:devo/<dev-org-id>:account/<account-id>"
       */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      AccountsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/accounts.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Retrieves an account's information.
   *
   * @tags accounts
   * @name AccountsGetPost
   * @request POST:/accounts.get
   * @secure
   */
  accountsGetPost = (data: AccountsGetRequest, params: RequestParams = {}) =>
    this.request<
      AccountsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/accounts.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets a list of accounts.
   *
   * @tags accounts
   * @name AccountsList
   * @request GET:/accounts.list
   * @secure
   */
  accountsList = (
    query?: {
      /** Filters for accounts created by the specified user(s). */
      created_by?: string[];
      /**
       * Filters for objects created after the provided timestamp (inclusive).
       * @format date-time
       */
      'created_date.after'?: string;
      /**
       * Filters for objects created before the provided timestamp
       * (inclusive).
       * @format date-time
       */
      'created_date.before'?: string;
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /** Domains for accounts to be filtered. */
      domains?: string[];
      /** Array of references of accounts to be filtered. */
      external_refs?: string[];
      /**
       * The maximum number of accounts to return per page. The default is
       * '50'.
       * @format int32
       */
      limit?: number;
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
      /**
       * Filters for objects created after the provided timestamp (inclusive).
       * @format date-time
       */
      'modified_date.after'?: string;
      /**
       * Filters for objects created before the provided timestamp
       * (inclusive).
       * @format date-time
       */
      'modified_date.before'?: string;
      /** Filters for accounts owned by the specified user(s). */
      owned_by?: string[];
      /** Fields to sort the accounts by and the direction to sort them in. */
      sort_by?: string[];
      /** Filters for accounts on specified stages. */
      stage?: string[];
      /** List of tags to be filtered. */
      tags?: string[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      AccountsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/accounts.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets a list of accounts.
   *
   * @tags accounts
   * @name AccountsListPost
   * @request POST:/accounts.list
   * @secure
   */
  accountsListPost = (data: AccountsListRequest, params: RequestParams = {}) =>
    this.request<
      AccountsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/accounts.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Updates an account's information.
   *
   * @tags accounts
   * @name AccountsUpdate
   * @request POST:/accounts.update
   * @secure
   */
  accountsUpdate = (data: AccountsUpdateRequest, params: RequestParams = {}) =>
    this.request<
      AccountsUpdateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/accounts.update`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Get count of articles matching given filter.
   *
   * @tags articles
   * @name ArticlesCount
   * @request GET:/articles.count
   * @secure
   */
  articlesCount = (
    query?: {
      /**
       * Filters for articles belonging to any of the provided parts.
       * @example ["don:core:<partition>:devo/<dev-org-id>:<part-type>/<part-id>"]
       */
      applies_to_parts?: string[];
      /**
       * Filters for articles authored by any of the provided users.
       * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
       */
      authored_by?: string[];
      /**
       * Filters for articles created by any of the provided users.
       * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
       */
      created_by?: string[];
      /**
       * Filters for articles owned by any of the provided users.
       * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
       */
      owned_by?: string[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      ArticlesCountResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/articles.count`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Get count of articles matching given filter.
   *
   * @tags articles
   * @name ArticlesCountPost
   * @request POST:/articles.count
   * @secure
   */
  articlesCountPost = (
    data: ArticlesCountRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      ArticlesCountResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/articles.count`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Article is an object which can contain a URL or artifacts in the resource. It also contains the data regarding the owner, author, status and published date of the object. This call creates an article.
   *
   * @tags articles
   * @name CreateArticle
   * @request POST:/articles.create
   * @secure
   */
  createArticle = (data: ArticlesCreateRequest, params: RequestParams = {}) =>
    this.request<
      ArticlesCreateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/articles.create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Deletes an article.
   *
   * @tags articles
   * @name DeleteArticle
   * @request POST:/articles.delete
   * @secure
   */
  deleteArticle = (data: ArticlesDeleteRequest, params: RequestParams = {}) =>
    this.request<
      ArticlesDeleteResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/articles.delete`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets an article.
   *
   * @tags articles
   * @name GetArticle
   * @request GET:/articles.get
   * @secure
   */
  getArticle = (
    query: {
      /**
       * The ID of the required article.
       * @example "don:core:<partition>:devo/<dev-org-id>:article/<article-id>"
       */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      ArticlesGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/articles.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets an article.
   *
   * @tags articles
   * @name GetArticlePost
   * @request POST:/articles.get
   * @secure
   */
  getArticlePost = (data: ArticlesGetRequest, params: RequestParams = {}) =>
    this.request<
      ArticlesGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/articles.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists a collection of articles.
   *
   * @tags articles
   * @name ListArticles
   * @request GET:/articles.list
   * @secure
   */
  listArticles = (
    query?: {
      /**
       * Filters for articles belonging to any of the provided parts.
       * @example ["don:core:<partition>:devo/<dev-org-id>:<part-type>/<part-id>"]
       */
      applies_to_parts?: string[];
      /**
       * Filters for articles authored by any of the provided users.
       * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
       */
      authored_by?: string[];
      /**
       * Filters for articles created by any of the provided users.
       * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
       */
      created_by?: string[];
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /**
       * The maximum number of articles to return. The default is '50'.
       * @format int32
       */
      limit?: number;
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
      /**
       * Filters for articles owned by any of the provided users.
       * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
       */
      owned_by?: string[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      ArticlesListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/articles.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists a collection of articles.
   *
   * @tags articles
   * @name ListArticlesPost
   * @request POST:/articles.list
   * @secure
   */
  listArticlesPost = (data: ArticlesListRequest, params: RequestParams = {}) =>
    this.request<
      ArticlesListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/articles.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Updates an article.
   *
   * @tags articles
   * @name UpdateArticle
   * @request POST:/articles.update
   * @secure
   */
  updateArticle = (data: ArticlesUpdateRequest, params: RequestParams = {}) =>
    this.request<
      ArticlesUpdateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/articles.update`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Creates a conversation.
   *
   * @tags conversations
   * @name ConversationsCreate
   * @request POST:/conversations.create
   * @secure
   */
  conversationsCreate = (
    data: ConversationsCreateRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      ConversationsCreateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/conversations.create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Deletes the requested conversation.
   *
   * @tags conversations
   * @name ConversationsDelete
   * @request POST:/conversations.delete
   * @secure
   */
  conversationsDelete = (
    data: ConversationsDeleteRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      ConversationsDeleteResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/conversations.delete`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Exports a collection of conversation items.
   *
   * @tags conversations
   * @name ConversationsExport
   * @request GET:/conversations.export
   * @secure
   */
  conversationsExport = (
    query?: {
      /**
       * Filters for conversations belonging to any of the provided parts.
       * @example ["don:core:<partition>:devo/<dev-org-id>:<part-type>/<part-id>"]
       */
      applies_to_parts?: string[];
      /**
       * The number of conversation items to return. The default is '50', the
       * maximum is '5000'.
       * @format int32
       */
      first?: number;
      /** Filters for conversation that belong to the given groups. */
      group?: string[];
      /** Filters for conversations that are created by verified users. */
      is_creator_verified?: boolean;
      /** Filters for conversations that are spam. */
      is_spam?: boolean;
      /**
       * Filters for conversations where these users are participants.
       * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
       */
      members?: string[];
      /**
       * Filters for conversations owned by any of these users.
       * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
       */
      owned_by?: string[];
      /**
       * Filters for conversations that are associated with any of the
       * provided Rev organizations.
       * @example ["don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"]
       */
      rev_org?: string[];
      /** Filters for conversations with any of the provided source channels. */
      source_channels?: string[];
      /** Filters for records in the provided stage(s) by name. */
      'stage.name'?: string[];
      /** Filters for records in the provided stage(s) by ordinal. */
      'stage.ordinal'?: number[];
      /**
       * Filters for conversations with any of the provided tags.
       * @example ["don:core:<partition>:devo/<dev-org-id>:tag/<tag-id>"]
       */
      tags?: string[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      ConversationsExportResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/conversations.export`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Exports a collection of conversation items.
   *
   * @tags conversations
   * @name ConversationsExportPost
   * @request POST:/conversations.export
   * @secure
   */
  conversationsExportPost = (
    data: ConversationsExportRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      ConversationsExportResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/conversations.export`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets the requested conversation's information.
   *
   * @tags conversations
   * @name ConversationsGet
   * @request GET:/conversations.get
   * @secure
   */
  conversationsGet = (
    query: {
      /** The requested conversation's ID. */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      ConversationsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/conversations.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets the requested conversation's information.
   *
   * @tags conversations
   * @name ConversationsGetPost
   * @request POST:/conversations.get
   * @secure
   */
  conversationsGetPost = (
    data: ConversationsGetRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      ConversationsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/conversations.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists the available conversations.
   *
   * @tags conversations
   * @name ConversationsList
   * @request GET:/conversations.list
   * @secure
   */
  conversationsList = (
    query?: {
      /**
       * Filters for conversations belonging to any of the provided parts.
       * @example ["don:core:<partition>:devo/<dev-org-id>:<part-type>/<part-id>"]
       */
      applies_to_parts?: string[];
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /** Filters for conversation that belong to the given groups. */
      group?: string[];
      /** Filters for conversations that are created by verified users. */
      is_creator_verified?: boolean;
      /** Filters for conversations that are spam. */
      is_spam?: boolean;
      /**
       * The maximum number of conversations to return. The default is '50'.
       * @format int32
       */
      limit?: number;
      /**
       * Filters for conversations where these users are participants.
       * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
       */
      members?: string[];
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
      /**
       * Filters for conversations owned by any of these users.
       * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
       */
      owned_by?: string[];
      /**
       * Filters for conversations that are associated with any of the
       * provided Rev organizations.
       * @example ["don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"]
       */
      rev_org?: string[];
      /** Filters for conversations with any of the provided source channels. */
      source_channels?: string[];
      /** Filters for records in the provided stage(s) by name. */
      'stage.name'?: string[];
      /** Filters for records in the provided stage(s) by ordinal. */
      'stage.ordinal'?: number[];
      /**
       * Filters for conversations with any of the provided tags.
       * @example ["don:core:<partition>:devo/<dev-org-id>:tag/<tag-id>"]
       */
      tags?: string[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      ConversationsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/conversations.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists the available conversations.
   *
   * @tags conversations
   * @name ConversationsListPost
   * @request POST:/conversations.list
   * @secure
   */
  conversationsListPost = (
    data: ConversationsListRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      ConversationsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/conversations.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Updates the requested conversation.
   *
   * @tags conversations
   * @name ConversationsUpdate
   * @request POST:/conversations.update
   * @secure
   */
  conversationsUpdate = (
    data: ConversationsUpdateRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      ConversationsUpdateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/conversations.update`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Counts the engagement records.
   *
   * @tags engagements
   * @name EngagementsCount
   * @request GET:/engagements.count
   * @secure
   */
  engagementsCount = (
    query?: {
      /** Filters for meetings with the provided external_refs. */
      external_ref?: string[];
      /**
       * Filters for engagement of the provided members.
       * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
       */
      members?: string[];
      /**
       * Filters for engagements with the provided parent.
       * @example ["don:core:<partition>:devo/<dev-org-id>:account/<account-id>"]
       */
      parent?: string[];
      /** Filters for engagement of the provided types. */
      type?: EngagementType[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      EngagementsCountResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/engagements.count`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Counts the engagement records.
   *
   * @tags engagements
   * @name EngagementsCountPost
   * @request POST:/engagements.count
   * @secure
   */
  engagementsCountPost = (
    data: EngagementsCountRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      EngagementsCountResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/engagements.count`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Creates a new engagement record.
   *
   * @tags engagements
   * @name EngagementsCreate
   * @request POST:/engagements.create
   * @secure
   */
  engagementsCreate = (
    data: EngagementsCreateRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      EngagementsCreateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/engagements.create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Deletes the engagement record.
   *
   * @tags engagements
   * @name EngagementsDelete
   * @request POST:/engagements.delete
   * @secure
   */
  engagementsDelete = (
    data: EngagementsDeleteRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      EngagementsDeleteResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/engagements.delete`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets the engagement record.
   *
   * @tags engagements
   * @name EngagementsGet
   * @request GET:/engagements.get
   * @secure
   */
  engagementsGet = (
    query: {
      /** The engagement ID. */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      EngagementsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/engagements.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets the engagement record.
   *
   * @tags engagements
   * @name EngagementsGetPost
   * @request POST:/engagements.get
   * @secure
   */
  engagementsGetPost = (
    data: EngagementsGetRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      EngagementsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/engagements.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists the engagement records.
   *
   * @tags engagements
   * @name EngagementsList
   * @request GET:/engagements.list
   * @secure
   */
  engagementsList = (
    query?: {
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /** Filters for meetings with the provided external_refs. */
      external_ref?: string[];
      /**
       * The maximum number of engagements to return.
       * @format int32
       */
      limit?: number;
      /**
       * Filters for engagement of the provided members.
       * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
       */
      members?: string[];
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
      /**
       * Filters for engagements with the provided parent.
       * @example ["don:core:<partition>:devo/<dev-org-id>:account/<account-id>"]
       */
      parent?: string[];
      /** Fields to sort the engagements by and the direction to sort them. */
      sort_by?: string[];
      /** Filters for engagement of the provided types. */
      type?: EngagementType[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      EngagementsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/engagements.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists the engagement records.
   *
   * @tags engagements
   * @name EngagementsListPost
   * @request POST:/engagements.list
   * @secure
   */
  engagementsListPost = (
    data: EngagementsListRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      EngagementsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/engagements.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Updates the engagement record.
   *
   * @tags engagements
   * @name EngagementsUpdate
   * @request POST:/engagements.update
   * @secure
   */
  engagementsUpdate = (
    data: EngagementsUpdateRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      EngagementsUpdateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/engagements.update`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets an event source.
   *
   * @tags event-source
   * @name EventSourcesGet
   * @request GET:/event-sources.get
   * @secure
   */
  eventSourcesGet = (
    query: {
      /** The event source's ID. */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      EventSourceGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/event-sources.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets an event source.
   *
   * @tags event-source
   * @name EventSourcesGetPost
   * @request POST:/event-sources.get
   * @secure
   */
  eventSourcesGetPost = (
    data: EventSourceGetRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      EventSourceGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/event-sources.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Schedules an event to be published to the specified event source.
   *
   * @tags event-source
   * @name EventSourcesScheduleEvent
   * @request POST:/event-sources.schedule
   * @secure
   */
  eventSourcesScheduleEvent = (
    data: EventSourcesScheduleEventRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      EventSourcesScheduleEventResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/event-sources.schedule`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Deletes an event scheduled for the specified event source.
   *
   * @tags event-source
   * @name EventSourcesDeleteScheduledEvent
   * @request POST:/event-sources.unschedule
   * @secure
   */
  eventSourcesDeleteScheduledEvent = (
    data: EventSourcesDeleteScheduledEventRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      void,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/event-sources.unschedule`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Creates a new group. A group is a collection of users.
   *
   * @tags groups
   * @name GroupsCreate
   * @request POST:/groups.create
   * @secure
   */
  groupsCreate = (data: GroupsCreateRequest, params: RequestParams = {}) =>
    this.request<
      GroupsCreateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/groups.create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets the requested group.
   *
   * @tags groups
   * @name GroupsGet
   * @request GET:/groups.get
   * @secure
   */
  groupsGet = (
    query: {
      /** The ID of the group to get. */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      GroupsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/groups.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets the requested group.
   *
   * @tags groups
   * @name GroupsGetPost
   * @request POST:/groups.get
   * @secure
   */
  groupsGetPost = (data: GroupsGetRequest, params: RequestParams = {}) =>
    this.request<
      GroupsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/groups.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists the available groups.
   *
   * @tags groups
   * @name GroupsList
   * @request GET:/groups.list
   * @secure
   */
  groupsList = (
    query?: {
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /**
       * The maximum number of groups to return. The default is '50'.
       * @format int32
       */
      limit?: number;
      /** Filters the groups on basis of member type. */
      member_type?: GroupMemberType[];
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
      /** Comma-separated fields to sort the groups by. */
      sort_by?: string[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      GroupsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/groups.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists the available groups.
   *
   * @tags groups
   * @name GroupsListPost
   * @request POST:/groups.list
   * @secure
   */
  groupsListPost = (data: GroupsListRequest, params: RequestParams = {}) =>
    this.request<
      GroupsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/groups.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Updates the requested group.
   *
   * @tags groups
   * @name GroupsUpdate
   * @request POST:/groups.update
   * @secure
   */
  groupsUpdate = (data: GroupsUpdateRequest, params: RequestParams = {}) =>
    this.request<
      GroupsUpdateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/groups.update`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Creates a link between two objects to indicate a relationship.
   *
   * @tags links
   * @name LinksCreate
   * @request POST:/links.create
   * @secure
   */
  linksCreate = (data: LinksCreateRequest, params: RequestParams = {}) =>
    this.request<
      LinksCreateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/links.create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Deletes a link.
   *
   * @tags links
   * @name LinksDelete
   * @request POST:/links.delete
   * @secure
   */
  linksDelete = (data: LinksDeleteRequest, params: RequestParams = {}) =>
    this.request<
      LinksDeleteResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/links.delete`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets the requested link's information.
   *
   * @tags links
   * @name LinksGet
   * @request GET:/links.get
   * @secure
   */
  linksGet = (
    query: {
      /** The requested link's ID. */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      LinksGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/links.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets the requested link's information.
   *
   * @tags links
   * @name LinksGetPost
   * @request POST:/links.get
   * @secure
   */
  linksGetPost = (data: LinksGetRequest, params: RequestParams = {}) =>
    this.request<
      LinksGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/links.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists the available links.
   *
   * @tags links
   * @name LinksList
   * @request GET:/links.list
   * @secure
   */
  linksList = (
    query: {
      /** The ID of the object to list the links for. */
      object: string;
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /**
       * The direction of the links to list, otherwise if not present, then
       * links in both directions (source and target) are included.
       */
      direction?: LinksDirection;
      /**
       * The maximum number of links to return. If not set, then the default
       * is '50'.
       * @format int32
       */
      limit?: number;
      /**
       * The link type(s) to filter for, otherwise if not present, all link
       * types are included.
       */
      link_type?: LinkType[];
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
      /**
       * The link types to filter for, otherwise if not present, all link
       * types are included.
       * @deprecated
       */
      types?: LinkType[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      LinksListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/links.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists the available links.
   *
   * @tags links
   * @name LinksListPost
   * @request POST:/links.list
   * @secure
   */
  linksListPost = (data: LinksListRequest, params: RequestParams = {}) =>
    this.request<
      LinksListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/links.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists metric definitions matching a filter.
   *
   * @tags slas
   * @name MetricDefinitionsList
   * @request GET:/metric-definitions.list
   * @secure
   */
  metricDefinitionsList = (
    query?: {
      /** The type of objects the metric definition applies to. */
      applies_to_type?: MetricDefinitionAppliesTo[];
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /**
       * The maximum number of records to return. The default is '50'.
       * @format int32
       */
      limit?: number;
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
      /** The type of metric definitions sought. */
      type?: MetricDefinitionMetricType[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      MetricDefinitionsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/metric-definitions.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists metric definitions matching a filter.
   *
   * @tags slas
   * @name MetricDefinitionsListPost
   * @request POST:/metric-definitions.list
   * @secure
   */
  metricDefinitionsListPost = (
    data: MetricDefinitionsListRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      MetricDefinitionsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/metric-definitions.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Creates an organization schedule fragment.
   *
   * @tags schedules
   * @name OrgScheduleFragmentsCreate
   * @request POST:/org-schedule-fragments.create
   * @secure
   */
  orgScheduleFragmentsCreate = (
    data: OrgScheduleFragmentsCreateRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      OrgScheduleFragmentsCreateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/org-schedule-fragments.create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets an organization schedule fragment.
   *
   * @tags schedules
   * @name OrgScheduleFragmentsGet
   * @request GET:/org-schedule-fragments.get
   * @secure
   */
  orgScheduleFragmentsGet = (
    query: {
      /** Organization schedule Fragment ID. */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      OrgScheduleFragmentsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/org-schedule-fragments.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets an organization schedule fragment.
   *
   * @tags schedules
   * @name OrgScheduleFragmentsGetPost
   * @request POST:/org-schedule-fragments.get
   * @secure
   */
  orgScheduleFragmentsGetPost = (
    data: OrgScheduleFragmentsGetRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      OrgScheduleFragmentsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/org-schedule-fragments.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Changes stage of an organization schedule fragment.
   *
   * @tags schedules
   * @name OrgScheduleFragmentsTransition
   * @request POST:/org-schedule-fragments.transition
   * @secure
   */
  orgScheduleFragmentsTransition = (
    data: OrgScheduleFragmentsTransitionRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      OrgScheduleFragmentsTransitionResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/org-schedule-fragments.transition`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Creates an organization schedule with a default weekly organization schedule and a list of organization schedule fragments.
   *
   * @tags schedules
   * @name OrgSchedulesCreate
   * @request POST:/org-schedules.create
   * @secure
   */
  orgSchedulesCreate = (
    data: OrgSchedulesCreateRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      OrgSchedulesCreateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/org-schedules.create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets an organization schedule.
   *
   * @tags schedules
   * @name OrgSchedulesGet
   * @request GET:/org-schedules.get
   * @secure
   */
  orgSchedulesGet = (
    query: {
      /** Organization schedule ID. */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      OrgSchedulesGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/org-schedules.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets an organization schedule.
   *
   * @tags schedules
   * @name OrgSchedulesGetPost
   * @request POST:/org-schedules.get
   * @secure
   */
  orgSchedulesGetPost = (
    data: OrgSchedulesGetRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      OrgSchedulesGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/org-schedules.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets list of organization schedules.
   *
   * @tags schedules
   * @name OrgSchedulesList
   * @request GET:/org-schedules.list
   * @secure
   */
  orgSchedulesList = (
    query?: {
      /** Creator ID the filter matches. */
      created_by_id?: string[];
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /**
       * Max number of organization schedules returned in a page. Default is
       * 50.
       * @format int32
       */
      limit?: number;
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
      /** The organization schedule statuses the filter matches. */
      status?: OrgScheduleStatus[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      OrgSchedulesListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/org-schedules.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets list of organization schedules.
   *
   * @tags schedules
   * @name OrgSchedulesListPost
   * @request POST:/org-schedules.list
   * @secure
   */
  orgSchedulesListPost = (
    data: OrgSchedulesListRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      OrgSchedulesListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/org-schedules.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Sets next organization schedule fragment which must begin the day the last existing fragment ends.
   *
   * @tags schedules
   * @name OrgSchedulesSetFuture
   * @request POST:/org-schedules.set-future
   * @secure
   */
  orgSchedulesSetFuture = (
    data: OrgSchedulesSetFutureRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      OrgSchedulesSetFutureResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/org-schedules.set-future`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Publishes or archives an organization schedule.
   *
   * @tags schedules
   * @name OrgSchedulesTransition
   * @request POST:/org-schedules.transition
   * @secure
   */
  orgSchedulesTransition = (
    data: OrgSchedulesTransitionRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      OrgSchedulesTransitionResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/org-schedules.transition`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Updates an organization schedule.
   *
   * @tags schedules
   * @name OrgSchedulesUpdate
   * @request POST:/org-schedules.update
   * @secure
   */
  orgSchedulesUpdate = (
    data: OrgSchedulesUpdateRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      OrgSchedulesUpdateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/org-schedules.update`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Creates a Rev organization in the authenticated user's Dev organization.
   *
   * @tags rev-orgs
   * @name RevOrgsCreate
   * @request POST:/rev-orgs.create
   * @secure
   */
  revOrgsCreate = (data: RevOrgsCreateRequest, params: RequestParams = {}) =>
    this.request<
      RevOrgsCreateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/rev-orgs.create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Retrieves the Rev organization's information.
   *
   * @tags rev-orgs
   * @name RevOrgsGet
   * @request GET:/rev-orgs.get
   * @secure
   */
  revOrgsGet = (
    query: {
      /**
       * The ID of the required Rev organization.
       * @example "don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"
       */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      RevOrgsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/rev-orgs.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Retrieves the Rev organization's information.
   *
   * @tags rev-orgs
   * @name RevOrgsGetPost
   * @request POST:/rev-orgs.get
   * @secure
   */
  revOrgsGetPost = (data: RevOrgsGetRequest, params: RequestParams = {}) =>
    this.request<
      RevOrgsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/rev-orgs.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets the list of Rev organizations' information belonging to the authenticated user's Dev Organization which the user is also authorized to access.
   *
   * @tags rev-orgs
   * @name RevOrgsList
   * @request GET:/rev-orgs.list
   * @secure
   */
  revOrgsList = (
    query?: {
      /**
       * Filters by account.
       * @example ["don:core:<partition>:devo/<dev-org-id>:account/<account-id>"]
       */
      account?: string[];
      /** Filters by creator. */
      created_by?: string[];
      /**
       * Filters for objects created after the provided timestamp (inclusive).
       * @format date-time
       */
      'created_date.after'?: string;
      /**
       * Filters for objects created before the provided timestamp
       * (inclusive).
       * @format date-time
       */
      'created_date.before'?: string;
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /**
       * Filters on custom fields. Input will be of the format
       * (custom_field_filter=field_name1:val1,val2,val3&custom_field_filter=field_name2:val1,val2).
       */
      custom_field_filter?: string[];
      /** List of external refs to filter Rev organizations for. */
      external_ref?: string[];
      /**
       * The maximum number of Rev organizations to be retrieved per page.
       * @format int32
       */
      limit?: number;
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
      /**
       * Filters for objects created after the provided timestamp (inclusive).
       * @format date-time
       */
      'modified_date.after'?: string;
      /**
       * Filters for objects created before the provided timestamp
       * (inclusive).
       * @format date-time
       */
      'modified_date.before'?: string;
      /**
       * Fields to sort the Rev organizations by and the direction to sort
       * them.
       */
      sort_by?: string[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      RevOrgsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/rev-orgs.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets the list of Rev organizations' information belonging to the authenticated user's Dev Organization which the user is also authorized to access.
   *
   * @tags rev-orgs
   * @name RevOrgsListPost
   * @request POST:/rev-orgs.list
   * @secure
   */
  revOrgsListPost = (data: RevOrgsListRequest, params: RequestParams = {}) =>
    this.request<
      RevOrgsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/rev-orgs.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Updates the Rev organization's information.
   *
   * @tags rev-orgs
   * @name RevOrgsUpdate
   * @request POST:/rev-orgs.update
   * @secure
   */
  revOrgsUpdate = (data: RevOrgsUpdateRequest, params: RequestParams = {}) =>
    this.request<
      RevOrgsUpdateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/rev-orgs.update`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Creates a Rev user for a Rev organization. Rev user can be a customer or a lead of an organization.
   *
   * @tags rev-users
   * @name RevUsersCreate
   * @request POST:/rev-users.create
   * @secure
   */
  revUsersCreate = (data: RevUsersCreateRequest, params: RequestParams = {}) =>
    this.request<
      RevUsersCreateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/rev-users.create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Deletes a Rev user.
   *
   * @tags rev-users
   * @name RevUsersDelete
   * @request POST:/rev-users.delete
   * @secure
   */
  revUsersDelete = (data: RevUsersDeleteRequest, params: RequestParams = {}) =>
    this.request<
      RevUsersDeleteResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/rev-users.delete`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Returns the Rev user of a Rev organization by its ID.
   *
   * @tags rev-users
   * @name RevUsersGet
   * @request GET:/rev-users.get
   * @secure
   */
  revUsersGet = (
    query: {
      /** The ID of Rev user to be retrieved. */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      RevUsersGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/rev-users.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Returns the Rev user of a Rev organization by its ID.
   *
   * @tags rev-users
   * @name RevUsersGetPost
   * @request POST:/rev-users.get
   * @secure
   */
  revUsersGetPost = (data: RevUsersGetRequest, params: RequestParams = {}) =>
    this.request<
      RevUsersGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/rev-users.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Links a rev user to a rev org.
   *
   * @tags rev-users
   * @name LinkRevUserToRevOrg
   * @request POST:/rev-users.link
   * @secure
   */
  linkRevUserToRevOrg = (
    data: LinkRevUserToRevOrgRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      LinkRevUserToRevOrgResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/rev-users.link`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Returns a list of all Rev Users belonging to the authenticated user's Dev Organization.
   *
   * @tags rev-users
   * @name RevUsersList
   * @request GET:/rev-users.list
   * @secure
   */
  revUsersList = (
    query?: {
      /** Filters for Rev users that were created by the specified user(s). */
      created_by?: string[];
      /**
       * Filters for objects created after the provided timestamp (inclusive).
       * @format date-time
       */
      'created_date.after'?: string;
      /**
       * Filters for objects created before the provided timestamp
       * (inclusive).
       * @format date-time
       */
      'created_date.before'?: string;
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /** List of emails of Rev users to be filtered. */
      email?: string[];
      /** List of external refs to filter Rev users for. */
      external_ref?: string[];
      /**
       * The maximum number of Rev users to return. The default is '50'.
       * @format int32
       */
      limit?: number;
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
      /**
       * Filters for objects created after the provided timestamp (inclusive).
       * @format date-time
       */
      'modified_date.after'?: string;
      /**
       * Filters for objects created before the provided timestamp
       * (inclusive).
       * @format date-time
       */
      'modified_date.before'?: string;
      /** List of phone numbers to filter Rev users on. */
      phone_numbers?: string[];
      /**
       * List of IDs of Rev organizations to be filtered.
       * @example ["don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"]
       */
      rev_org?: string[];
      /** Fields to sort the Rev users by and the direction to sort them. */
      sort_by?: string[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      RevUsersListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/rev-users.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Returns a list of all Rev Users belonging to the authenticated user's Dev Organization.
   *
   * @tags rev-users
   * @name RevUsersListPost
   * @request POST:/rev-users.list
   * @secure
   */
  revUsersListPost = (data: RevUsersListRequest, params: RequestParams = {}) =>
    this.request<
      RevUsersListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/rev-users.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Unlinks a rev user from a rev org.
   *
   * @tags rev-users
   * @name UnlinkRevUserFromRevOrg
   * @request POST:/rev-users.unlink
   * @secure
   */
  unlinkRevUserFromRevOrg = (
    data: UnlinkRevUserFromRevOrgRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      UnlinkRevUserFromRevOrgResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/rev-users.unlink`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Updates a Rev user.
   *
   * @tags rev-users
   * @name RevUsersUpdate
   * @request POST:/rev-users.update
   * @secure
   */
  revUsersUpdate = (data: RevUsersUpdateRequest, params: RequestParams = {}) =>
    this.request<
      RevUsersUpdateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/rev-users.update`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets the aggregated schema.
   *
   * @tags customization
   * @name AggregatedSchemaGet
   * @request GET:/schemas.aggregated.get
   * @secure
   */
  aggregatedSchemaGet = (
    query: {
      /** The list of custom schema fragment DONs which are to be aggregated. */
      custom_schema_fragment_ids: string[];
      /** The stock schema fragment which is to be aggregated. */
      stock_schema_fragment_id?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      AggregatedSchemaGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/schemas.aggregated.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets the aggregated schema.
   *
   * @tags customization
   * @name AggregatedSchemaGetPost
   * @request POST:/schemas.aggregated.get
   * @secure
   */
  aggregatedSchemaGetPost = (
    data: AggregatedSchemaGetRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      AggregatedSchemaGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/schemas.aggregated.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets a custom schema fragment.
   *
   * @tags customization
   * @name CustomSchemaFragmentsGet
   * @request GET:/schemas.custom.get
   * @secure
   */
  customSchemaFragmentsGet = (
    query: {
      /** The ID of the custom schema fragment. */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      CustomSchemaFragmentsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/schemas.custom.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets a custom schema fragment.
   *
   * @tags customization
   * @name CustomSchemaFragmentsGetPost
   * @request POST:/schemas.custom.get
   * @secure
   */
  customSchemaFragmentsGetPost = (
    data: CustomSchemaFragmentsGetRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      CustomSchemaFragmentsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/schemas.custom.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists custom schema fragments.
   *
   * @tags customization
   * @name CustomSchemaFragmentsList
   * @request GET:/schemas.custom.list
   * @secure
   */
  customSchemaFragmentsList = (
    query?: {
      /** The list of app names. */
      app?: string[];
      /**
       * The cursor to resume iteration from, otherwise if not provided, then
       * iteration starts from the beginning.
       */
      cursor?: string;
      /** The list of leaf types. */
      leaf_type?: string[];
      /**
       * The maximum number of items.
       * @format int32
       */
      limit?: number;
      /** The list of fields to sort the items by and how to sort them. */
      sort_by?: string[];
      /** The list of subtypes. */
      subtype?: string[];
      /** Filters for custom schema fragment of the provided types. */
      types?: CustomSchemaFragmentType[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      CustomSchemaFragmentsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/schemas.custom.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists custom schema fragments.
   *
   * @tags customization
   * @name CustomSchemaFragmentsListPost
   * @request POST:/schemas.custom.list
   * @secure
   */
  customSchemaFragmentsListPost = (
    data: CustomSchemaFragmentsListRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      CustomSchemaFragmentsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/schemas.custom.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Creates or updates a custom schema fragment.
   *
   * @tags customization
   * @name CustomSchemaFragmentsSet
   * @request POST:/schemas.custom.set
   * @secure
   */
  customSchemaFragmentsSet = (
    data: CustomSchemaFragmentsSetRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      CustomSchemaFragmentsSetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/schemas.custom.set`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists subtypes.
   *
   * @tags customization
   * @name SubtypesList
   * @request GET:/schemas.subtypes.list
   * @secure
   */
  subtypesList = (
    query?: {
      /**
       * Leaf type for which subtypes are required.
       * @deprecated
       */
      leaf_type?: string;
      /** List of leaf types for which subtypes are required. */
      leaf_types?: string[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      SubtypesListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/schemas.subtypes.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists subtypes.
   *
   * @tags customization
   * @name SubtypesListPost
   * @request POST:/schemas.subtypes.list
   * @secure
   */
  subtypesListPost = (data: SubtypesListRequest, params: RequestParams = {}) =>
    this.request<
      SubtypesListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/schemas.subtypes.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets a service account.
   *
   * @tags service-accounts
   * @name ServiceAccountsGet
   * @request GET:/service-accounts.get
   * @secure
   */
  serviceAccountsGet = (
    query: {
      /** The ID of the requested service account. */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      ServiceAccountsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/service-accounts.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets a service account.
   *
   * @tags service-accounts
   * @name ServiceAccountsGetPost
   * @request POST:/service-accounts.get
   * @secure
   */
  serviceAccountsGetPost = (
    data: ServiceAccountsGetRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      ServiceAccountsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/service-accounts.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description  Assigns the SLA to a set of Rev organizations.
   *
   * @tags slas
   * @name SlasAssign
   * @request POST:/slas.assign
   * @secure
   */
  slasAssign = (data: SlasAssignRequest, params: RequestParams = {}) =>
    this.request<
      SlasAssignResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/slas.assign`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Creates an SLA in draft status.
   *
   * @tags slas
   * @name SlasCreate
   * @request POST:/slas.create
   * @secure
   */
  slasCreate = (data: SlasCreateRequest, params: RequestParams = {}) =>
    this.request<
      SlasCreateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/slas.create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets an SLA.
   *
   * @tags slas
   * @name SlasGet
   * @request GET:/slas.get
   * @secure
   */
  slasGet = (
    query: {
      /** The ID of the SLA to get. */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      SlasGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/slas.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets an SLA.
   *
   * @tags slas
   * @name SlasGetPost
   * @request POST:/slas.get
   * @secure
   */
  slasGetPost = (data: SlasGetRequest, params: RequestParams = {}) =>
    this.request<
      SlasGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/slas.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists SLAs matching a filter.
   *
   * @tags slas
   * @name SlasList
   * @request GET:/slas.list
   * @secure
   */
  slasList = (
    query?: {
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /**
       * The maximum number of SLAs to return. The default is '50'.
       * @format int32
       */
      limit?: number;
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
      /** The SLA statuses the filter matches. */
      status?: SlaStatus[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      SlasListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/slas.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists SLAs matching a filter.
   *
   * @tags slas
   * @name SlasListPost
   * @request POST:/slas.list
   * @secure
   */
  slasListPost = (data: SlasListRequest, params: RequestParams = {}) =>
    this.request<
      SlasListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/slas.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Changes the status of an SLA.
   *
   * @tags slas
   * @name SlasTransition
   * @request POST:/slas.transition
   * @secure
   */
  slasTransition = (data: SlasTransitionRequest, params: RequestParams = {}) =>
    this.request<
      SlasTransitionResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/slas.transition`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Updates a draft SLA.
   *
   * @tags slas
   * @name SlasUpdate
   * @request POST:/slas.update
   * @secure
   */
  slasUpdate = (data: SlasUpdateRequest, params: RequestParams = {}) =>
    this.request<
      SlasUpdateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/slas.update`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists system users within your organization.
   *
   * @tags sys-users
   * @name SysUsersList
   * @request GET:/sys-users.list
   * @secure
   */
  sysUsersList = (
    query?: {
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /**
       * The maximum number of system users to return. Value can range from
       * '1' to '100', with a default of '50'.
       * @format int32
       */
      limit?: number;
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
      /** Fields to sort the system users by and the direction to sort them. */
      sort_by?: string[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      SysUsersListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/sys-users.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists system users within your organization.
   *
   * @tags sys-users
   * @name SysUsersListPost
   * @request POST:/sys-users.list
   * @secure
   */
  sysUsersListPost = (data: SysUsersListRequest, params: RequestParams = {}) =>
    this.request<
      SysUsersListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/sys-users.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Updates the system user.
   *
   * @tags sys-users
   * @name SysUsersUpdate
   * @request POST:/sys-users.update
   * @secure
   */
  sysUsersUpdate = (data: SysUsersUpdateRequest, params: RequestParams = {}) =>
    this.request<
      SysUsersUpdateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/sys-users.update`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Creates a new entry on an object's timeline.
   *
   * @tags timeline-entries
   * @name TimelineEntriesCreate
   * @request POST:/timeline-entries.create
   * @secure
   */
  timelineEntriesCreate = (
    data: TimelineEntriesCreateRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      TimelineEntriesCreateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/timeline-entries.create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists the timeline entries for an object.
   *
   * @tags timeline-entries
   * @name TimelineEntriesList
   * @request GET:/timeline-entries.list
   * @secure
   */
  timelineEntriesList = (
    query: {
      /**
       * The ID of the object to list timeline entries for.
       * @example "don:core:<partition>:devo/<dev-org-id>:<part-type>/<part-id>"
       */
      object: string;
      /**
       * The collection(s) to list entries from, otherwise if not provided,
       * all entries are returned.
       */
      collections?: TimelineEntriesCollection[];
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /**
       * Filters for entries containing at least one of the provided labels,
       * otherwise if no labels are provided, then no label filtering is done.
       * @minLength 1
       * @maxLength 64
       */
      labels?: string[];
      /**
       * The maximum number of entries to return. If not set, then this
       * defaults to `50`.
       * @format int32
       */
      limit?: number;
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
      /**
       * The visibility of the timeline entries to filter for. Note this is a
       * strict filter, such that only entries with the exact visibilities
       * specified will be returned.
       */
      visibility?: TimelineEntryVisibility[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      TimelineEntriesListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/timeline-entries.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists the timeline entries for an object.
   *
   * @tags timeline-entries
   * @name TimelineEntriesListPost
   * @request POST:/timeline-entries.list
   * @secure
   */
  timelineEntriesListPost = (
    data: TimelineEntriesListRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      TimelineEntriesListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/timeline-entries.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Updates an entry on an object's timeline.
   *
   * @tags timeline-entries
   * @name TimelineEntriesUpdate
   * @request POST:/timeline-entries.update
   * @secure
   */
  timelineEntriesUpdate = (
    data: TimelineEntriesUpdateRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      TimelineEntriesUpdateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/timeline-entries.update`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Creates new work ([issue](https://devrev.ai/docs/product/build), [ticket](https://devrev.ai/docs/product/support)) item. [task](https://docs.devrev.ai/product/tasks) and opportunity work types are supported in the beta version.
   *
   * @tags works
   * @name WorksCreate
   * @request POST:/works.create
   * @secure
   */
  worksCreate = (data: WorksCreateRequest, params: RequestParams = {}) =>
    this.request<
      WorksCreateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/works.create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Deletes a work item.
   *
   * @tags works
   * @name WorksDelete
   * @request POST:/works.delete
   * @secure
   */
  worksDelete = (data: WorksDeleteRequest, params: RequestParams = {}) =>
    this.request<
      WorksDeleteResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/works.delete`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Exports a collection of work items.
   *
   * @tags works
   * @name WorksExport
   * @request GET:/works.export
   * @secure
   */
  worksExport = (
    query?: {
      /**
       * Filters for work belonging to any of the provided parts.
       * @example ["don:core:<partition>:devo/<dev-org-id>:<part-type>/<part-id>"]
       */
      applies_to_part?: string[];
      /**
       * Filters for work created by any of these users.
       * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
       */
      created_by?: string[];
      /** Filters for custom fields. */
      custom_fields?: object;
      /**
       * The number of work items to return. The default is '50', the maximum
       * is '5000'.
       * @format int32
       */
      first?: number;
      /** Filters for issues with any of the provided priorities. */
      'issue.priority'?: IssuePriority[];
      /**
       * Filters for issues with any of the provided Rev organizations.
       * @example ["don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"]
       */
      'issue.rev_orgs'?: string[];
      /**
       * Filters for opportunities belonging to any of the provided accounts.
       * @example ["don:core:<partition>:devo/<dev-org-id>:account/<account-id>"]
       */
      'opportunity.account'?: string[];
      /** Filters for opportunities with any of the provided contacts. */
      'opportunity.contacts'?: string[];
      /**
       * Filters for work owned by any of these users.
       * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
       */
      owned_by?: string[];
      /** Fields to sort the work items by and the direction to sort them. */
      sort_by?: string[];
      /** Filters for records in the provided stage(s) by name. */
      'stage.name'?: string[];
      /** Filters for records in the provided stage(s) by ordinal. */
      'stage.ordinal'?: number[];
      /** Filters for tickets belonging to specific groups. */
      'ticket.group'?: string[];
      /** Filters for tickets that are spam. */
      'ticket.is_spam'?: boolean;
      /** Filters for tickets that need response. */
      'ticket.needs_response'?: boolean;
      /**
       * Filters for tickets that are associated with any of the provided Rev
       * organizations.
       * @example ["don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"]
       */
      'ticket.rev_org'?: string[];
      /** Filters for tickets with any of the provided severities. */
      'ticket.severity'?: TicketSeverity[];
      /** Filters for tickets with any of the provided source channels. */
      'ticket.source_channel'?: string[];
      /** Filters for work of the provided types. */
      type?: WorkType[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      WorksExportResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/works.export`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Exports a collection of work items.
   *
   * @tags works
   * @name WorksExportPost
   * @request POST:/works.export
   * @secure
   */
  worksExportPost = (data: WorksExportRequest, params: RequestParams = {}) =>
    this.request<
      WorksExportResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/works.export`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets a work item's information.
   *
   * @tags works
   * @name WorksGet
   * @request GET:/works.get
   * @secure
   */
  worksGet = (
    query: {
      /**
       * The work's ID.
       * @example "don:core:<partition>:devo/<dev-org-id>:<work-type>/<work-id>"
       */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      WorksGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/works.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets a work item's information.
   *
   * @tags works
   * @name WorksGetPost
   * @request POST:/works.get
   * @secure
   */
  worksGetPost = (data: WorksGetRequest, params: RequestParams = {}) =>
    this.request<
      WorksGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/works.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists a collection of work items.
   *
   * @tags works
   * @name WorksList
   * @request GET:/works.list
   * @secure
   */
  worksList = (
    query?: {
      /**
       * Filters for work belonging to any of the provided parts.
       * @example ["don:core:<partition>:devo/<dev-org-id>:<part-type>/<part-id>"]
       */
      applies_to_part?: string[];
      /**
       * Filters for work created by any of these users.
       * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
       */
      created_by?: string[];
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /** Filters for custom fields. */
      custom_fields?: object;
      /** Filters for issues with any of the provided priorities. */
      'issue.priority'?: IssuePriority[];
      /**
       * Filters for issues with any of the provided Rev organizations.
       * @example ["don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"]
       */
      'issue.rev_orgs'?: string[];
      /**
       * The maximum number of works to return. The default is '50'.
       * @format int32
       */
      limit?: number;
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
      /**
       * Filters for opportunities belonging to any of the provided accounts.
       * @example ["don:core:<partition>:devo/<dev-org-id>:account/<account-id>"]
       */
      'opportunity.account'?: string[];
      /** Filters for opportunities with any of the provided contacts. */
      'opportunity.contacts'?: string[];
      /**
       * Filters for work owned by any of these users.
       * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
       */
      owned_by?: string[];
      /** Fields to sort the works by and the direction to sort them. */
      sort_by?: string[];
      /** Filters for records in the provided stage(s) by name. */
      'stage.name'?: string[];
      /** Filters for records in the provided stage(s) by ordinal. */
      'stage.ordinal'?: number[];
      /** Filters for tickets belonging to specific groups. */
      'ticket.group'?: string[];
      /** Filters for tickets that are spam. */
      'ticket.is_spam'?: boolean;
      /** Filters for tickets that need response. */
      'ticket.needs_response'?: boolean;
      /**
       * Filters for tickets that are associated with any of the provided Rev
       * organizations.
       * @example ["don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"]
       */
      'ticket.rev_org'?: string[];
      /** Filters for tickets with any of the provided severities. */
      'ticket.severity'?: TicketSeverity[];
      /** Filters for tickets with any of the provided source channels. */
      'ticket.source_channel'?: string[];
      /** Filters for work of the provided types. */
      type?: WorkType[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      WorksListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/works.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists a collection of work items.
   *
   * @tags works
   * @name WorksListPost
   * @request POST:/works.list
   * @secure
   */
  worksListPost = (data: WorksListRequest, params: RequestParams = {}) =>
    this.request<
      WorksListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/works.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Updates a work item's information.
   *
   * @tags works
   * @name WorksUpdate
   * @request POST:/works.update
   * @secure
   */
  worksUpdate = (data: WorksUpdateRequest, params: RequestParams = {}) =>
    this.request<
      WorksUpdateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/works.update`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
