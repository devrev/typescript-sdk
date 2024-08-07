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
  /** Subtype corresponding to the custom type fragment. */
  subtype?: string;
  /** Tags associated with an object. */
  tags?: TagWithValue[];
  /** The Tier of the corresponding Account. */
  tier?: string;
};

/** account-search-summary */
export type AccountSearchSummary = SearchSummaryBase & {
  account: AccountSummary;
  /**
   * Comments on the work.
   * @maxItems 5
   */
  comments?: CommentSearchSummary[];
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
   * @example ["ARTIFACT-12345"]
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
   * records, stored as a list.
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
  /**
   * List of company websites. Example - ['www.devrev.ai',
   * 'www.marketplace.devrev.ai'].
   */
  websites?: string[];
}

/**
 * accounts-create-response
 * The response to creating a new account.
 */
export interface AccountsCreateResponse {
  account: Account;
  default_rev_org: RevOrg;
}

/**
 * accounts-delete-request
 * Request object to delete an account.
 */
export interface AccountsDeleteRequest {
  /**
   * The ID of account to delete.
   * @example "ACC-12345"
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
  /** Filters for custom fields. */
  custom_fields?: object;
  /** Array of display names of accounts to be filtered. */
  display_name?: string[];
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

/** accounts-filters */
export interface AccountsFilters {
  /** Filters for accounts created by the specified user(s). */
  created_by?: string[];
  created_date?: DateTimeFilter;
  /** Filters for custom fields. */
  custom_fields?: object;
  /** Array of display names of accounts to be filtered. */
  display_name?: string[];
  /** Domains for accounts to be filtered. */
  domains?: string[];
  /** Array of references of accounts to be filtered. */
  external_refs?: string[];
  modified_date?: DateTimeFilter;
  /** Filters for accounts owned by the specified user(s). */
  owned_by?: string[];
  /** Filters for accounts on specified stages. */
  stage?: string[];
  /** List of tags to be filtered. */
  tags?: string[];
}

/**
 * accounts-get-request
 * Request object to get an account's information.
 */
export interface AccountsGetRequest {
  /**
   * The ID of the account to be retrieved.
   * @example "ACC-12345"
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
  /** Filters for custom fields. */
  custom_fields?: object;
  /** Array of display names of accounts to be filtered. */
  display_name?: string[];
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
  /** Updated External Refs of account. */
  external_refs?: string[];
  /**
   * The ID of account to update.
   * @example "ACC-12345"
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
  tier?: string | null;
}

/** accounts-update-request-artifacts */
export interface AccountsUpdateRequestArtifacts {
  /**
   * Sets the IDs to the provided artifact IDs.
   * @example ["ARTIFACT-12345"]
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
  /**
   * The leaf type. Used for inferring the default stage diagram and
   * tenant fragment ID.
   */
  leaf_type?: string;
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

/**
 * aggregation-detail
 * Stores aggregation type and dimension information.
 */
export interface AggregationDetail {
  /**
   * Aggregation type to be used while aggregating the metering data for the
   * UOM. 1] Sum - sum of all the values for the meter in a given period Ex.
   * { M1:2, M1:4 } => {M1:6} 2] Minimum - min of all the values for the
   * meter in a given period Ex. { M1:2, M1:4 } => {M1:2} 3] Maximum - max
   * of all the values for the meter in a given period Ex. { M1:2, M1:4 } =>
   * {M1:4} 4] Unique Count - Sum of distinct unique dimension observed for
   * the meter in the given period (not considering the data from the
   * previous billing period) Ex. January {M1:{VM:VM0}}, February
   * {M1:{VM:VM1}, M1:{VM:VM2}, M1:{VM:VM1}} => {M1:2} 5] Running Total -
   * Sum of distinct active unique dimension observed for a meter in the
   * given period, taking into consideration the active data from the
   * previous billing cycle Ex. January {M1:{VM:VM0,on}, {M1:{VM:VM1,off}
   * February {M1:{VM:VM2, on}, M1:{VM:VM2, off}, M1:{VM:VM3, on}} => {M1:3}
   * 6] Duration - Sum of distinct active unique dimension duration for a
   * meter in the given period, taking into consideration the active data
   * from the previous month Ex. January15 {M1:{VM:VM0,on, 4}} February15
   * {M1:{VM:VM0,off}, February18 {M1:{VM:VM1,on,5} => M1->
   * 30*4*charge_per_day + 10*5*charge_per_day 7] Latest - consider the
   * latest/last meter in the given period 8] Oldest - consider the
   * oldest/first record in the given period.
   */
  aggregation_type: AggregationDetailAggregationType;
  /**
   * Unique dimension if provided to be considered for grouping metering
   * data for the UOM.
   */
  unique_dimension?: string;
}

/**
 * Aggregation type to be used while aggregating the metering data for the
 * UOM. 1] Sum - sum of all the values for the meter in a given period Ex.
 * { M1:2, M1:4 } => {M1:6} 2] Minimum - min of all the values for the
 * meter in a given period Ex. { M1:2, M1:4 } => {M1:2} 3] Maximum - max
 * of all the values for the meter in a given period Ex. { M1:2, M1:4 } =>
 * {M1:4} 4] Unique Count - Sum of distinct unique dimension observed for
 * the meter in the given period (not considering the data from the
 * previous billing period) Ex. January {M1:{VM:VM0}}, February
 * {M1:{VM:VM1}, M1:{VM:VM2}, M1:{VM:VM1}} => {M1:2} 5] Running Total -
 * Sum of distinct active unique dimension observed for a meter in the
 * given period, taking into consideration the active data from the
 * previous billing cycle Ex. January {M1:{VM:VM0,on}, {M1:{VM:VM1,off}
 * February {M1:{VM:VM2, on}, M1:{VM:VM2, off}, M1:{VM:VM3, on}} => {M1:3}
 * 6] Duration - Sum of distinct active unique dimension duration for a
 * meter in the given period, taking into consideration the active data
 * from the previous month Ex. January15 {M1:{VM:VM0,on, 4}} February15
 * {M1:{VM:VM0,off}, February18 {M1:{VM:VM1,on,5} => M1->
 * 30*4*charge_per_day + 10*5*charge_per_day 7] Latest - consider the
 * latest/last meter in the given period 8] Oldest - consider the
 * oldest/first record in the given period.
 */
export enum AggregationDetailAggregationType {
  Duration = 'duration',
  Latest = 'latest',
  Maximum = 'maximum',
  Minimum = 'minimum',
  Oldest = 'oldest',
  RunningTotal = 'running_total',
  Sum = 'sum',
  UniqueCount = 'unique_count',
}

/** app-fragment */
export type AppFragment = CustomSchemaFragmentBase & {
  /** App this fragment applies to. */
  app?: string;
};

/** app-fragment-summary */
export type AppFragmentSummary = CustomSchemaFragmentBaseSummary;

/**
 * archetype-metric-target
 * Metric with corresponding target values.
 */
export interface ArchetypeMetricTarget {
  /**
   * If true, the schedule attached to this metric is out of schedule at
   * the time of the query.
   */
  is_out_of_schedule?: boolean;
  metric_definition: MetricDefinitionSummary;
  org_schedule?: OrgScheduleSummary;
  /**
   * Time in minutes that remains on a paused metric.
   * @format int32
   */
  remaining_time?: number;
  /**
   * Time at which the metric would breach SLA if no action taken.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  target_time?: string;
  /**
   * Time at which the metric would reach the SLA warning limit if no
   * action taken.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  warning_target_time?: string;
}

/** article */
export type Article = AtomBase & {
  /** Details of the parts relevant to the article. */
  applies_to_parts: PartSummary[];
  /** Type of the article. */
  article_type?: ArticleType;
  /** Users that authored the article. */
  authored_by?: UserSummary[];
  /** Description of the article. */
  description?: string;
  /** Artifacts containing the extracted content. */
  extracted_content?: ArtifactSummary[];
  /**
   * Number of downvotes on the article.
   * @format int32
   */
  num_downvotes?: number;
  /**
   * Number of upvotes on the article.
   * @format int32
   */
  num_upvotes?: number;
  /** The users that own the article. */
  owned_by: UserSummary[];
  parent?: DirectorySummary;
  /** Rank of the article. */
  rank?: string;
  /** Resource details. */
  resource?: Resource;
  /** The properties of an enum value. */
  scope?: EnumValue;
  /** Title of the article. */
  title?: string;
};

/** article-search-summary */
export type ArticleSearchSummary = SearchSummaryBase & {
  article: ArticleSummary;
};

/** Status of the article. */
export enum ArticleStatus {
  Archived = 'archived',
  Draft = 'draft',
  Published = 'published',
  ReviewNeeded = 'review_needed',
}

/** article-summary */
export type ArticleSummary = AtomBaseSummary & {
  /** Resource details. */
  resource?: ResourceSummary;
  /** Title of the article. */
  title?: string;
};

/** Type of the article. */
export enum ArticleType {
  Article = 'article',
  ContentBlock = 'content_block',
}

/** articles-count-request */
export interface ArticlesCountRequest {
  /** The ancestor directory of the articles. */
  ancestor?: string;
  /**
   * Filters for articles belonging to any of the provided parts.
   * @example ["PROD-12345"]
   */
  applies_to_parts?: string[];
  /**
   * Filter for the type of articles. If this is not provided, then
   * articles that are not content blocks are returned.
   */
  article_type?: ArticleType[];
  /**
   * Filters for articles authored by any of the provided users.
   * @example ["DEVU-12345"]
   */
  authored_by?: string[];
  /**
   * Filters for articles created by any of the provided users.
   * @example ["DEVU-12345"]
   */
  created_by?: string[];
  /**
   * Filters for articles modified by any of the provided users.
   * @example ["DEVU-12345"]
   */
  modified_by?: string[];
  /**
   * Filters for articles owned by any of the provided users.
   * @example ["DEVU-12345"]
   */
  owned_by?: string[];
  /**
   * Filter for the scope of the articles. If this is not provided, then
   * only external articles are returned.
   */
  scope?: number[];
  /** Filter for articles based on intended audience. */
  shared_with?: SharedWithMembershipFilter[];
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
   * @example ["PROD-12345"]
   */
  applies_to_parts: string[];
  /** Type of the article. */
  article_type?: ArticleType;
  /**
   * The authors of the article.
   * @example ["DEVU-12345"]
   */
  authored_by?: string[];
  /** Description for the article. */
  description?: string;
  /**
   * ID of the extracted content artifact.
   * @example ["ARTIFACT-12345"]
   */
  extracted_content?: string[];
  /** Language of the article. */
  language?: string;
  /**
   * The users that own the article.
   * @example ["DEVU-12345"]
   */
  owned_by: string[];
  /** The parent directory of the article. */
  parent?: string;
  /**
   * The published date of the article.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  published_at?: string;
  resource: ArticlesCreateRequestResource;
  /**
   * The scope of the article.
   * @format int64
   */
  scope?: number;
  /** Information about the role the member receives due to the share. */
  shared_with?: SetSharedWithMembership[];
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
   * @example ["ARTIFACT-12345"]
   */
  artifacts?: string[];
  /** The latest published version. */
  published_version?: string;
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
   * @example "ARTICLE-12345"
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
   * @example "ARTICLE-12345"
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
   * @example ["PROD-12345"]
   */
  applies_to_parts?: string[];
  /**
   * Filter for the type of articles. If this is not provided, then
   * articles that are not content blocks are returned.
   */
  article_type?: ArticleType[];
  /**
   * Filters for articles authored by any of the provided users.
   * @example ["DEVU-12345"]
   */
  authored_by?: string[];
  /**
   * Filters for articles created by any of the provided users.
   * @example ["DEVU-12345"]
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
   * Filters for articles modified by any of the provided users.
   * @example ["DEVU-12345"]
   */
  modified_by?: string[];
  /**
   * Filters for articles owned by any of the provided users.
   * @example ["DEVU-12345"]
   */
  owned_by?: string[];
  /**
   * Filter for the scope of the articles. If this is not provided, then
   * only external articles are returned.
   */
  scope?: number[];
  /** Filter for articles based on intended audience. */
  shared_with?: SharedWithMembershipFilter[];
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
   * @example "ARTICLE-12345"
   */
  id: string;
  /** Updates the language of the article. */
  language?: string;
  owned_by?: ArticlesUpdateRequestOwnedBy;
  /** The updated parent directory for the article. */
  parent?: string | null;
  /** Updates the the latest published version. */
  published_version?: string;
  reorder?: ArticlesUpdateRequestReorder;
  shared_with?: ArticlesUpdateRequestSharedWith;
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
   * @example ["PROD-12345"]
   */
  set?: string[];
}

/** articles-update-request-artifacts */
export interface ArticlesUpdateRequestArtifacts {
  /**
   * Updates IDs of the artifacts.
   * @example ["ARTIFACT-12345"]
   */
  set?: string[];
}

/** articles-update-request-authored-by */
export interface ArticlesUpdateRequestAuthoredBy {
  /**
   * Sets the users that authored the article.
   * @example ["DEVU-12345"]
   */
  set?: string[];
}

/** articles-update-request-extracted-content */
export interface ArticlesUpdateRequestExtractedContent {
  /**
   * Update the ID of the extracted content.
   * @example ["ARTIFACT-12345"]
   */
  set?: string[];
}

/** articles-update-request-owned-by */
export interface ArticlesUpdateRequestOwnedBy {
  /**
   * Sets the owner IDs to the provided user IDs. This must not be
   * empty.
   * @example ["DEVU-12345"]
   */
  set?: string[];
}

/** articles-update-request-reorder */
export interface ArticlesUpdateRequestReorder {
  /**
   * The article after which the reordered article is placed.
   * @example "ARTICLE-12345"
   */
  after?: string;
  /**
   * The article before which the reordered article is placed.
   * @example "ARTICLE-12345"
   */
  before?: string;
}

/** articles-update-request-shared-with */
export interface ArticlesUpdateRequestSharedWith {
  /** Sets the field to the provided membership list. */
  set?: SetSharedWithMembership[];
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

/** artifact */
export type Artifact = AtomBase;

/** artifact-search-summary */
export type ArtifactSearchSummary = SearchSummaryBase & {
  artifact: ArtifactSummary;
};

/** artifact-summary */
export type ArtifactSummary = AtomBaseSummary;

/**
 * artifact-version
 * The version of the artifact.
 */
export interface ArtifactVersion {
  modified_by?: UserSummary;
  /**
   * The timestamp at which the version was created.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  timestamp: string;
  /** The version of the artifact. */
  version: string;
}

/**
 * artifacts-get-request
 * The request to get an artifact's information.
 */
export interface ArtifactsGetRequest {
  /**
   * The requested artifact's ID.
   * @example "ARTIFACT-12345"
   */
  id: string;
  /** The version of the artifact that needs to be fetched. */
  version?: string;
}

/**
 * artifacts-get-response
 * The response to getting an artifact's information.
 */
export interface ArtifactsGetResponse {
  artifact: Artifact;
  /** The version of the artifact. */
  version: ArtifactVersion;
}

/**
 * artifacts-list-request
 * The request to list artifacts attached to an object.
 */
export interface ArtifactsListRequest {
  /** The ID of the object to filter artifacts. */
  parent_id?: string;
}

/**
 * artifacts-list-response
 * The response to list artifacts attached to an object.
 */
export interface ArtifactsListResponse {
  /** The artifact's information. */
  artifacts: Artifact[];
}

/**
 * artifacts-locate-request
 * The request to get an artifact's download URL.
 */
export interface ArtifactsLocateRequest {
  /**
   * The ID of the artifact to get the URL for.
   * @example "ARTIFACT-12345"
   */
  id: string;
  /** The version of the artifact that needs to be fetched. */
  version?: string;
}

/**
 * artifacts-locate-response
 * The response to getting an artifact's download URL.
 */
export interface ArtifactsLocateResponse {
  /**
   * The expiration timestamp of the URL.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  expires_at?: string;
  /** The artifact's download URL. */
  url: string;
}

/**
 * artifacts-prepare-request
 * The request to prepare a URL to upload a file.
 */
export interface ArtifactsPrepareRequest {
  /** The name of the file that's being uploaded. */
  file_name: string;
  /** The type of file that's being uploaded. */
  file_type?: string;
}

/**
 * artifacts-prepare-response
 * The response to preparing a URL to upload a file.
 */
export interface ArtifactsPrepareResponse {
  /** The POST policy form data. */
  form_data: ArtifactsPrepareResponseFormData[];
  /**
   * The generated artifact's ID.
   * @example "ARTIFACT-12345"
   */
  id: string;
  /** The URL that the file's data should be uploaded to. */
  url: string;
}

/** artifacts-prepare-response-form-data */
export interface ArtifactsPrepareResponseFormData {
  /** Key of the form field. */
  key: string;
  /** Value corresponding to the key. */
  value: string;
}

/**
 * artifacts-versions-prepare-request
 * The request to prepare a new version of an artifact.
 */
export interface ArtifactsVersionsPrepareRequest {
  /**
   * The ID of the artifact to prepare a new version for.
   * @example "ARTIFACT-12345"
   */
  id: string;
}

/**
 * artifacts-versions-prepare-response
 * The response to preparing a new artifact version.
 */
export interface ArtifactsVersionsPrepareResponse {
  /** The POST policy form data. */
  form_data: ArtifactsVersionsPrepareResponseFormData[];
  /** The URL that the file's data should be uploaded to. */
  url: string;
}

/** artifacts-versions-prepare-response-form-data */
export interface ArtifactsVersionsPrepareResponseFormData {
  /** Key of the form field. */
  key: string;
  /** Value corresponding to the key. */
  value: string;
}

/** atom-base */
export interface AtomBase {
  created_by?: UserSummary;
  /**
   * Timestamp when the object was created.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
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
   * @example "2023-01-01T12:00:00.000Z"
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

/** atom-summary */
export type AtomSummary = (
  | AccountSummary
  | AppFragmentSummary
  | CapabilitySummary
  | ConversationSummary
  | CustomTypeFragmentSummary
  | DevUserSummary
  | EngagementSummary
  | EnhancementSummary
  | FeatureSummary
  | IssueSummary
  | MeetingSummary
  | OpportunitySummary
  | ProductSummary
  | RevOrgSummary
  | RevUserSummary
  | ServiceAccountSummary
  | SysUserSummary
  | TagSummary
  | TaskSummary
  | TenantFragmentSummary
  | TicketSummary
  | TimelineChangeEventSummary
  | TimelineCommentSummary
  | WebhookSummary
) & {
  type: AtomType;
};

export enum AtomType {
  Account = 'account',
  AppFragment = 'app_fragment',
  Capability = 'capability',
  Conversation = 'conversation',
  CustomTypeFragment = 'custom_type_fragment',
  DevUser = 'dev_user',
  Engagement = 'engagement',
  Enhancement = 'enhancement',
  Feature = 'feature',
  Issue = 'issue',
  Meeting = 'meeting',
  Opportunity = 'opportunity',
  Product = 'product',
  RevOrg = 'rev_org',
  RevUser = 'rev_user',
  ServiceAccount = 'service_account',
  SysUser = 'sys_user',
  Tag = 'tag',
  Task = 'task',
  TenantFragment = 'tenant_fragment',
  Ticket = 'ticket',
  TimelineChangeEvent = 'timeline_change_event',
  TimelineComment = 'timeline_comment',
  Webhook = 'webhook',
}

/**
 * auth-connection
 * Connection object that specifies the configuration for an
 * authentication connection that is set up for a Dev organization.
 */
export type AuthConnection = (
  | AuthConnectionOptionsAzureAd
  | AuthConnectionOptionsGoogleApps
  | AuthConnectionOptionsOidc
  | AuthConnectionOptionsSaml
  | AuthConnectionOptionsSocial
) & {
  /**
   * Defines the type for the authentication connection. The configuration
   * for each authentication connection will depend on the type value.
   */
  type: AuthConnectionType;
  /**
   * Display name of the authentication connection. This name will be
   * visible to all the users when they sign in to this Dev
   * organization. For example, if the display_name is 'abclogin', then
   * it would appear on the login button as 'Log in to abclogin'.
   */
  display_name?: string;
  /**
   * Whether the authentication connection is enabled or disabled. If
   * set to false, the authentication connection will not show up on the
   * login screen as a login option.
   */
  enabled?: boolean;
  /** ID of the authentication connection. */
  id: string;
};

/**
 * auth-connection-options-azure-ad
 * Object encapsulating the configuration parameters for an Azure AD
 * authentication connection.
 */
export interface AuthConnectionOptionsAzureAd {
  /** Client ID for the Azure authentication connection. */
  client_id?: string;
  /** Client secret for the Azure authentication connection. */
  client_secret?: string;
  /** Domain URL of the Azure authentication connection. */
  domain?: string;
}

/**
 * auth-connection-options-google-apps
 * Object encapsulating the configuration parameters for a Google Apps
 * authentication connection.
 */
export interface AuthConnectionOptionsGoogleApps {
  /** Client ID for the Google Apps authentication connection. */
  client_id?: string;
  /** Client secret for the Google Apps authentication connection. */
  client_secret?: string;
  /** Tenant domain URL of the Google Apps authentication connection. */
  tenant_domain?: string;
}

/**
 * auth-connection-options-oidc
 * Object encapsulating the configuration parameters for an OIDC
 * authentication connection.
 */
export interface AuthConnectionOptionsOidc {
  /** Client ID for the OIDC authentication connection. */
  client_id?: string;
  /** Client secret for the OIDC authentication connection. */
  client_secret?: string;
  /** Issuer URL of the OIDC authentication connection. */
  issuer?: string;
}

/**
 * auth-connection-options-saml
 * Object encapsulating the configuration parameters for a SAML
 * authentication connection.
 */
export interface AuthConnectionOptionsSaml {
  /** Sign In endpoint for the SAML authentication connection. */
  sign_in_endpoint?: string;
  /** Signing certificate for the SAML authentication connection. */
  signing_cert?: string;
}

/** auth-connection-options-social */
export type AuthConnectionOptionsSocial = object;

export enum AuthConnectionToggle {
  Disable = 'disable',
  Enable = 'enable',
}

/**
 * Defines the type for the authentication connection. The configuration
 * for each authentication connection will depend on the type value.
 */
export enum AuthConnectionType {
  GoogleApps = 'google_apps',
  Oidc = 'oidc',
  Samlp = 'samlp',
  Social = 'social',
  Waad = 'waad',
}

/** auth-token */
export type AuthToken = AtomBase & {
  /**
   * An identifier that represents the application that requested the
   * token. Only applicable for application access tokens.
   */
  client_id?: string;
  /**
   * The time at which the token expires.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  expires_at?: string;
  /**
   * The time at which the token was issued.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  issued_at?: string;
  /** The type of the requested token. */
  requested_token_type?: AuthTokenRequestedTokenType;
  /** The scopes associated with the issued token. */
  scopes?: string[];
  /** The status of the token. */
  status?: AuthTokenStatus;
  /** The subject of the token. */
  subject?: string;
  /** A hint that identifies the token. */
  token_hint?: string;
};

/** Specifies the process of obtaining a token. */
export enum AuthTokenGrantType {
  UrnDevrevParamsOauthGrantTypeTokenIssue = 'urn:devrev:params:oauth:grant-type:token-issue',
  UrnIetfParamsOauthGrantTypeTokenExchange = 'urn:ietf:params:oauth:grant-type:token-exchange',
}

/** The type of the requested token. */
export enum AuthTokenRequestedTokenType {
  UrnDevrevParamsOauthTokenTypeAat = 'urn:devrev:params:oauth:token-type:aat',
  UrnDevrevParamsOauthTokenTypeAatActAs = 'urn:devrev:params:oauth:token-type:aat:act-as',
  UrnDevrevParamsOauthTokenTypeAatPublic = 'urn:devrev:params:oauth:token-type:aat:public',
  UrnDevrevParamsOauthTokenTypeDev = 'urn:devrev:params:oauth:token-type:dev',
  UrnDevrevParamsOauthTokenTypeDevConnect = 'urn:devrev:params:oauth:token-type:dev:connect',
  UrnDevrevParamsOauthTokenTypeGat = 'urn:devrev:params:oauth:token-type:gat',
  UrnDevrevParamsOauthTokenTypePat = 'urn:devrev:params:oauth:token-type:pat',
  UrnDevrevParamsOauthTokenTypePatActAs = 'urn:devrev:params:oauth:token-type:pat:act-as',
  UrnDevrevParamsOauthTokenTypeRat = 'urn:devrev:params:oauth:token-type:rat',
  UrnDevrevParamsOauthTokenTypeRev = 'urn:devrev:params:oauth:token-type:rev',
  UrnDevrevParamsOauthTokenTypeSession = 'urn:devrev:params:oauth:token-type:session',
  UrnDevrevParamsOauthTokenTypeSessionDev0 = 'urn:devrev:params:oauth:token-type:session:dev0',
  UrnDevrevParamsOauthTokenTypeSessionOnetime = 'urn:devrev:params:oauth:token-type:session:onetime',
  UrnDevrevParamsOauthTokenTypeSessionRevActAs = 'urn:devrev:params:oauth:token-type:session:rev:act-as',
  UrnDevrevParamsOauthTokenTypeSuper = 'urn:devrev:params:oauth:token-type:super',
  UrnDevrevParamsOauthTokenTypeSys = 'urn:devrev:params:oauth:token-type:sys',
  UrnIetfParamsOauthTokenTypeJwt = 'urn:ietf:params:oauth:token-type:jwt',
}

/** The status of the token. */
export enum AuthTokenStatus {
  Active = 'active',
  Expired = 'expired',
  Revoked = 'revoked',
}

/** The type of the subject token. */
export enum AuthTokenSubjectTokenType {
  UrnDevrevParamsOauthTokenTypeJwtAuth0 = 'urn:devrev:params:oauth:token-type:jwt:auth0',
  UrnDevrevParamsOauthTokenTypeJwtDev = 'urn:devrev:params:oauth:token-type:jwt:dev',
  UrnDevrevParamsOauthTokenTypeRat = 'urn:devrev:params:oauth:token-type:rat',
  UrnDevrevParamsOauthTokenTypeRev = 'urn:devrev:params:oauth:token-type:rev',
  UrnDevrevParamsOauthTokenTypeRevinfo = 'urn:devrev:params:oauth:token-type:revinfo',
  UrnDevrevParamsOauthTokenTypeSession = 'urn:devrev:params:oauth:token-type:session',
  UrnDevrevParamsOauthTokenTypeSysu = 'urn:devrev:params:oauth:token-type:sysu',
  UrnDevrevParamsOauthTokenTypeUserinfo = 'urn:devrev:params:oauth:token-type:userinfo',
  UrnIetfParamsOauthTokenTypeJwt = 'urn:ietf:params:oauth:token-type:jwt',
}

/** The type of the issued token. Bearer is the only supported token type. */
export enum AuthTokenTokenType {
  Bearer = 'bearer',
}

/**
 * auth-tokens-account-traits
 * Carries account info.
 */
export interface AuthTokensAccountTraits {
  /** The display name of the account. */
  display_name?: string;
  /**
   * List of company's domain names on accounts. Example -
   * ['devrev.ai'].
   */
  domains?: string[];
}

/**
 * auth-tokens-create-request
 * A request to create a new token corresponding to the requested token
 * type.
 */
export interface AuthTokensCreateRequest {
  /**
   * The unique ID of the Dev user or the service account to
   * impersonate.
   */
  act_as?: string;
  /** The expected audience values with respect to the token. */
  aud?: string[];
  /**
   * An identifier that represents the application which is requesting
   * the token. If no client_id is present in the request to generate an
   * application access token (AAT), DevRev will generate a client_id.
   * This client_id is only associated with an AAT.
   */
  client_id?: string;
  /**
   * The expected validity lifetime of the token in number of days. In
   * practice, the value should be based on the usage of the token.
   * @min 0
   * @max 4294967295
   */
  expires_in?: number;
  /** Specifies the process of obtaining a token. */
  grant_type?: AuthTokenGrantType;
  /** The type of the requested token. */
  requested_token_type?: AuthTokenRequestedTokenType;
  /**
   * Carries info corresponding to the Rev user to be provisioned and/or
   * issue a Rev session token.
   */
  rev_info?: AuthTokensRevInfo;
  /**
   * The requested set of scopes associated with the issued token. A
   * space-delimited list of values in which the order of values does
   * not matter.
   */
  scope?: string;
  /**
   * Represents the entity that requests the token. Not required when
   * requesting an application access token (AAT).
   */
  subject_token?: string;
  /** The type of the subject token. */
  subject_token_type?: AuthTokenSubjectTokenType;
  /** A hint that identifies the token. */
  token_hint?: string;
}

/**
 * auth-tokens-create-response
 * Response for the request to create a new token corresponding to the
 * requested token type.
 */
export interface AuthTokensCreateResponse {
  /**
   * The issued JSON Web Token (JWT) corresponding to the requested
   * token type.
   */
  access_token: string;
  /**
   * An identifier that represents the application which is requesting
   * the token. Only present in a response corresponding to an
   * application access token (AAT).
   */
  client_id?: string;
  /**
   * The validity lifetime of the token specified in seconds since Unix
   * epoch.
   * @format int64
   */
  expires_in: number;
  /** A token to refresh the issued token. */
  refresh_token?: string;
  /**
   * The scopes associated with the issued token. A space-delimited list
   * of values in which the order of values does not matter.
   */
  scope?: string;
  /** The type of the issued token. Bearer is the only supported token type. */
  token_type: AuthTokenTokenType;
}

/**
 * auth-tokens-delete-request
 * The request to revoke the token.
 */
export interface AuthTokensDeleteRequest {
  /**
   * The unique identifier for the token under a given Dev organization.
   * If no token ID is provided, then the token ID will be set from the
   * JTI claim of the token in the authorization header.
   */
  token_id?: string;
}

/**
 * auth-tokens-get-request
 * The request to get the token metadata.
 */
export interface AuthTokensGetRequest {
  /** The unique identifier of the token under a given Dev organization. */
  token_id: string;
}

/**
 * auth-tokens-get-response
 * The response to get the token metadata.
 */
export interface AuthTokensGetResponse {
  token: AuthToken;
}

/**
 * auth-tokens-list-request
 * A request to list the token metadata.
 */
export interface AuthTokensListRequest {
  /**
   * An identifier that represents the application, which requested the
   * token. Only relevant for application access tokens.
   */
  client_id?: string;
  /** The type of the requested token. */
  requested_token_type?: AuthTokenRequestedTokenType;
  /**
   * The subject associated with the token. In the absence of this
   * parameter, the ID of the authenticated entity is treated as the
   * subject.
   */
  subject?: string;
}

/**
 * auth-tokens-list-response
 * The response to list the token metadata.
 */
export interface AuthTokensListResponse {
  /** The list of token metadata. */
  tokens: AuthToken[];
}

/**
 * auth-tokens-org-traits
 * Carries Rev org info.
 */
export interface AuthTokensOrgTraits {
  /** Application-defined custom fields of the Rev org. */
  custom_fields?: object;
  /** The description of the Rev org. */
  description?: string;
  /** The display name of the Rev org. */
  display_name?: string;
  /** The domain of the Rev org. */
  domain?: string;
  /** Phone numbers of the Rev org. */
  phone_numbers?: string[];
  /** The tier of the Rev org. */
  tier?: string;
}

/**
 * auth-tokens-rev-info
 * Carries info corresponding to the Rev user to be provisioned and/or
 * issue a Rev session token.
 */
export interface AuthTokensRevInfo {
  /** An identifier which uniquely identifies an account. */
  account_ref?: string;
  /** Carries account info. */
  account_traits?: AuthTokensAccountTraits;
  /**
   * An identifier which uniquely identifies a Rev org.
   * @deprecated
   */
  org_ref?: string;
  /** Carries Rev org info. */
  org_traits?: AuthTokensOrgTraits;
  /** The unique ID of the Rev user. */
  user_id?: string;
  /** An identifier which uniquely identifies a Rev user. */
  user_ref?: string;
  /** Carries Rev user info. */
  user_traits?: AuthTokensUserTraits;
  /** An identifier which uniquely identifies a workspace. */
  workspace_ref?: string;
  /** Carries Rev org info. */
  workspace_traits?: AuthTokensOrgTraits;
}

/**
 * auth-tokens-self-delete-request
 * The request to delete all the tokens created by the authenticated user,
 * that match with the provided token type.
 */
export interface AuthTokensSelfDeleteRequest {
  /** The type of the requested token. */
  requested_token_type?: AuthTokenRequestedTokenType;
}

/**
 * auth-tokens-update-request
 * A request to update the token metadata.
 */
export interface AuthTokensUpdateRequest {
  /** A hint that identifies the token. */
  token_hint: string;
  /** The unique identifier of the token under a given Dev organization. */
  token_id: string;
}

/**
 * auth-tokens-update-response
 * Response for the request to update the token metadata.
 */
export interface AuthTokensUpdateResponse {
  token: AuthToken;
}

/**
 * auth-tokens-user-traits
 * Carries Rev user info.
 */
export interface AuthTokensUserTraits {
  /** Application-defined custom fields of the Rev user. */
  custom_fields?: object;
  /** The description of the Rev user. */
  description?: string;
  /** The display name of the Rev user. */
  display_name?: string;
  /** The email address of the Rev user. */
  email?: string;
  /**
   * The full name of the Rev user.
   * @deprecated
   */
  full_name?: string;
  /** Phone numbers of the Rev user. */
  phone_numbers?: string[];
}

/**
 * boolean-expression
 * Boolean expression.
 */
export type BooleanExpression = (
  | BooleanExpressionAndExpression
  | BooleanExpressionNotExpression
  | BooleanExpressionOrExpression
  | BooleanExpressionPrimitiveExpression
) & {
  type: BooleanExpressionType;
};

/**
 * boolean-expression-and-expression
 * All the expressions would be 'and'ed together.
 */
export interface BooleanExpressionAndExpression {
  expressions: BooleanExpression[];
}

/**
 * boolean-expression-not-expression
 * The expression would be negated.
 */
export interface BooleanExpressionNotExpression {
  /** Boolean expression. */
  expression: BooleanExpression;
}

/**
 * boolean-expression-or-expression
 * All the expressions would be 'or'ed together.
 */
export interface BooleanExpressionOrExpression {
  expressions: BooleanExpression[];
}

/**
 * boolean-expression-primitive-expression
 * The primitive expression type.
 */
export type BooleanExpressionPrimitiveExpression = object;

export enum BooleanExpressionType {
  And = 'and',
  Not = 'not',
  Or = 'or',
  Primitive = 'primitive',
}

/** capability */
export type Capability = PartBase;

/** capability-summary */
export type CapabilitySummary = PartBaseSummary;

/**
 * client-context
 * Properties of client to be used in track API.
 */
export interface ClientContext {
  /** Properties of client's browser to be used in track API. */
  browser?: ClientContextBrowser;
  /** Properties of client's CPU to be used in track API. */
  cpu?: ClientContextCpu;
  /** Properties of client's device to be used in track API. */
  device?: ClientContextDevice;
  /** Properties of client's engine to be used in track API. */
  engine?: ClientContextEngine;
  /** IP address of the client. */
  ip?: string;
  /** The client's locale, example: en-US. */
  locale?: string;
  /** Properties of client's OS to be used in track API. */
  os?: ClientContextOs;
  /** Properties of client's page to be used in track API. */
  page?: ClientContextPage;
  /** The client's timezone, example: Asia/Kolkata. */
  timezone?: string;
  /**
   * User agent of the client, example: Mozilla/5.0 (Macintosh; Intel
   * Mac OS X.
   */
  user_agent?: string;
}

/**
 * client-context-browser
 * Properties of client's browser to be used in track API.
 */
export interface ClientContextBrowser {
  /** The browser's name, example: Chrome, Safari. */
  name?: string;
  /** The browser's version, example: 53.0.2785.143. */
  version?: string;
}

/**
 * client-context-cpu
 * Properties of client's CPU to be used in track API.
 */
export interface ClientContextCpu {
  /** CPU architecture, example: amd64. */
  architecture?: string;
}

/**
 * client-context-device
 * Properties of client's device to be used in track API.
 */
export interface ClientContextDevice {
  /** Device type, example: mobile, tablet, desktop. */
  type?: string;
  /** Device manufacturer, example: Apple. */
  manufacturer?: string;
  /** Device model, example: iphone 6s. */
  model?: string;
}

/**
 * client-context-engine
 * Properties of client's engine to be used in track API.
 */
export interface ClientContextEngine {
  /** The engine's name, example: Blink, WebKit. */
  name?: string;
  /** The engine's version, example: 537.36. */
  version?: string;
}

/**
 * client-context-os
 * Properties of client's OS to be used in track API.
 */
export interface ClientContextOs {
  /** The OS's name, example : Windows, Mac OS X. */
  name?: string;
  /** The OS's version, example : 10.11.1. */
  version?: string;
}

/**
 * client-context-page
 * Properties of client's page to be used in track API.
 */
export interface ClientContextPage {
  /** Page domain, example: devrev.ai */
  domain?: string;
  /** Page path, example: /pricing */
  path?: string;
  /** Page referrer, example: https://devrev.ai */
  referrer?: string;
  /** Page title, example: Pricing */
  title?: string;
  /** Page URL, example: https://devrev.ai/pricing */
  url?: string;
}

/** code-change */
export type CodeChange = AtomBase & {
  /** Name of the code branch in the repo. */
  branch?: string;
  /**
   * Time at which the code change corresponding to this object reached
   * a closed or merged stage. For example, the time at which a Pull
   * Request was either closed without merging or successfully merged.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  closed_date?: string;
  /** Commit ID of the merged commit in the target branch. */
  commit_id?: string;
  /** Detailed description of the contents of this change. */
  description?: string;
  /** Unique external identifier for this change.e.g Pull Request URL. */
  external_identifier?: string;
  /** Details of lines of code in this code change. */
  filtered_loc?: LinesOfCode;
  /** URL pointing to the repo this change was on. */
  repo_url?: string;
  /** Source of the code change object. */
  source?: CodeChangeSource;
  /** Name of the target branch in the repo. */
  target_branch?: string;
  /** Title describing in brief the contents of this change. */
  title?: string;
  /** Details of lines of code in this code change. */
  total_loc?: LinesOfCode;
};

/** Source of the code change object. */
export enum CodeChangeSource {
  Bitbucket = 'bitbucket',
  Github = 'github',
}

/** code-changes-create-request */
export type CodeChangesCreateRequest = object;

/** code-changes-create-response */
export interface CodeChangesCreateResponse {
  code_change: CodeChange;
}

/** code-changes-delete-request */
export interface CodeChangesDeleteRequest {
  /** ID of the code change object which is to be deleted. */
  id: string;
}

/** code-changes-delete-response */
export type CodeChangesDeleteResponse = object;

/** code-changes-get-request */
export interface CodeChangesGetRequest {
  /** The code change object ID. */
  id: string;
}

/** code-changes-get-response */
export interface CodeChangesGetResponse {
  code_change: CodeChange;
}

/** code-changes-list-request */
export interface CodeChangesListRequest {
  /** Provides ways to specify date ranges on objects. */
  created_date?: DateFilter;
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /**
   * The maximum number of code change objects to return. The default is
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
  /** Provides ways to specify date ranges on objects. */
  modified_date?: DateFilter;
}

/** code-changes-list-response */
export interface CodeChangesListResponse {
  /** The list of requested code change objects. */
  code_changes: CodeChange[];
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

/** code-changes-update-request */
export interface CodeChangesUpdateRequest {
  /** The ID of the code change object to be updated. */
  id: string;
}

/** code-changes-update-response */
export interface CodeChangesUpdateResponse {
  code_change: CodeChange;
}

/** comment-search-summary */
export interface CommentSearchSummary {
  comment?: TimelineCommentSummary;
  created_by?: UserSummary;
  /**
   * Timestamp when the comment was created.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  created_date?: string;
  /** The object that the Timeline entry belongs to. */
  object?: string;
  /** Display panels for the comment entry. */
  panels?: TimelineEntryPanel[];
  /** The objects referenced in the comment. */
  references?: AtomSummary[];
  /** Text snippet where the search hit occurred. */
  snippet?: string;
}

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
  sla_tracker?: SlaTrackerSummary;
  /** Describes the current stage of a work item. */
  stage?: LegacyStage;
  /** Tags associated with the object. */
  tags?: TagWithValue[];
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

/** conversation-search-summary */
export type ConversationSearchSummary = SearchSummaryBase & {
  /**
   * Comments on the work.
   * @maxItems 5
   */
  comments?: CommentSearchSummary[];
  conversation: ConversationSummary;
};

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
  type: ConversationsCreateRequestTypeValue;
  /** Description for the conversation. */
  description?: string;
  /** The group that the conversation is associated with. */
  group?: string;
  /** Whether the conversation is spam. */
  is_spam?: boolean;
  /**
   * The users in the conversation.
   * @example ["DEVU-12345"]
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
  /** The IDs of user sessions associated with the conversation. */
  user_sessions?: string[];
}

/** conversations-create-request-message */
export interface ConversationsCreateRequestMessage {
  /**
   * The IDs of the artifacts to the message.
   * @example ["ARTIFACT-12345"]
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
   * @example ["PROD-12345"]
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
   * @example ["DEVU-12345"]
   */
  members?: string[];
  /**
   * Filters for conversations owned by any of these users.
   * @example ["DEVU-12345"]
   */
  owned_by?: string[];
  /**
   * Filters for conversations that are associated with any of the
   * provided Rev organizations.
   * @example ["REV-AbCdEfGh"]
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
   * @deprecated
   * @example ["TAG-12345"]
   */
  tags?: string[];
  /** Filters for conversations with any of the provided tags with value. */
  tags_v2?: TagWithValueFilter[];
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
   * @example ["PROD-12345"]
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
   * @example ["DEVU-12345"]
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
   * @example ["DEVU-12345"]
   */
  owned_by?: string[];
  /**
   * Filters for conversations that are associated with any of the
   * provided Rev organizations.
   * @example ["REV-AbCdEfGh"]
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
   * @deprecated
   * @example ["TAG-12345"]
   */
  tags?: string[];
  /** Filters for conversations with any of the provided tags with value. */
  tags_v2?: TagWithValueFilter[];
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
   * @example ["PROD-12345"]
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

/**
 * create-email-info
 * Information related to an email.
 */
export interface CreateEmailInfo {
  /** The address of the email address. */
  address: string;
  /** The name of the email address. */
  name?: string;
  /** The ID of the user associated with the email address. */
  user?: string;
}

/**
 * create-email-inline-attachment
 * An inline attachment.
 */
export interface CreateEmailInlineAttachment {
  /**
   * The artifact of the attachment.
   * @example "ARTIFACT-12345"
   */
  artifact?: string;
  /** The content id of the attachment. */
  content_id?: string;
}

/**
 * create-email-preview-widget
 * An email preview widget.
 */
export interface CreateEmailPreviewWidget {
  /** The list of bcc addresses. */
  bcc?: CreateEmailInfo[];
  /** The list of cc addresses. */
  cc?: CreateEmailInfo[];
  /** The list of from addresses. */
  from?: CreateEmailInfo[];
  /** The html body of the email. */
  html_body?: string;
  /** The in reply to of the email. */
  in_reply_to?: string;
  /** The list of inline attachments. */
  inlines?: CreateEmailInlineAttachment[];
  /** Whether the email is spam. */
  is_spam?: boolean;
  /** The message id of the email. */
  message_id?: string;
  /**
   * The raw email artifact.
   * @example "ARTIFACT-12345"
   */
  raw_email_artifact?: string;
  /** The list of references in the email. */
  references?: string[];
  /** The list of reply to addresses. */
  reply_to?: CreateEmailInfo[];
  /**
   * The time the email was sent.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  sent_timestamp?: string;
  /** The subject of the email. */
  subject?: string;
  /** The text body of the email. */
  text_body?: string;
  /** The list of to addresses. */
  to?: CreateEmailInfo[];
}

/** create-org-schedule-interval */
export interface CreateOrgScheduleInterval {
  /**
   * Date (inclusive) on which the interval begins.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
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
   * @example "2023-01-01T12:00:00.000Z"
   */
  to?: string;
}

/**
 * create-stage
 * Create object for stage.
 */
export interface CreateStage {
  /** Notes relevant to the stage */
  notes?: string;
  /** DON of the stage. */
  stage: string;
}

/**
 * create-tag-with-value
 * Create object for tag_summary.
 */
export interface CreateTagWithValue {
  /**
   * ID of the referenced tag
   * @example "TAG-12345"
   */
  tag_id: string;
  /** Value associated with the tag for the object. */
  value?: string;
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

/**
 * curated-vista-summary
 * Static collection of Devrev objects.
 */
export type CuratedVistaSummary = VistaBaseSummary;

/** custom-object-search-summary */
export type CustomObjectSearchSummary = SearchSummaryBase & {
  custom_object: CustomObjectSummary;
};

/** custom-object-summary */
export type CustomObjectSummary = AtomBaseSummary;

/** custom-schema-fragment */
export type CustomSchemaFragment = (
  | AppFragment
  | CustomTypeFragment
  | TenantFragment
) & {
  type: CustomSchemaFragmentType;
};

/** custom-schema-fragment-base */
export type CustomSchemaFragmentBase = AtomBase & {
  /** The conditions associated with the fields. */
  conditions?: CustomSchemaFragmentCondition[];
  /**
   * Indicates if the fragment has been deprecated. Modifications to
   * this field are done in-place and don't result in creation of a new
   * fragment in chain.
   */
  deprecated?: boolean;
  /** Description of the custom schema fragment. */
  description?: string;
  /** List of all fields in this custom schema fragment. */
  fields?: SchemaFieldDescriptor[];
  /** Type of the custom schema fragment. */
  fragment_type?: CustomSchemaFragmentFragmentType;
  /** Leaf type this fragment applies to. */
  leaf_type?: string;
  new_fragment_ref?: CustomSchemaFragmentSummary;
  old_fragment_ref?: CustomSchemaFragmentSummary;
};

/** custom-schema-fragment-base-summary */
export type CustomSchemaFragmentBaseSummary = AtomBaseSummary;

/**
 * custom-schema-fragment-condition
 * The condition associated with a field.
 */
export type CustomSchemaFragmentCondition = object;

/** Type of the custom schema fragment. */
export enum CustomSchemaFragmentFragmentType {
  App = 'app',
  CustomType = 'custom_type',
  Tenant = 'tenant',
}

/** custom-schema-fragment-summary */
export type CustomSchemaFragmentSummary = (
  | AppFragmentSummary
  | CustomTypeFragmentSummary
  | TenantFragmentSummary
) & {
  type: CustomSchemaFragmentType;
};

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
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /** Whether only deprecated fragments should be filtered. */
  deprecated?: boolean;
  /** The list of leaf types. */
  leaf_type?: string[];
  /**
   * The maximum number of items.
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
   * List of fields which are not required in the payload and can be
   * pruned away.
   */
  prune?: CustomSchemaFragmentsListRequestPrune[];
  /** The list of fields to sort the items by and how to sort them. */
  sort_by?: string[];
  /** The list of subtypes. */
  subtype?: string[];
  /** Filters for custom schema fragment of the provided types. */
  types?: CustomSchemaFragmentType[];
}

export enum CustomSchemaFragmentsListRequestPrune {
  Fields = 'fields',
}

/** custom-schema-fragments-list-response */
export interface CustomSchemaFragmentsListResponse {
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
  /** The custom schema fragments. */
  result: CustomSchemaFragment[];
}

/** custom-schema-fragments-set-request */
export type CustomSchemaFragmentsSetRequest = (
  | CustomSchemaFragmentsSetRequestAppFragment
  | CustomSchemaFragmentsSetRequestCustomTypeFragment
  | CustomSchemaFragmentsSetRequestTenantFragment
) & {
  type: CustomSchemaFragmentsSetRequestType;
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
  /** Whether the leaf type corresponds to a custom object */
  is_custom_leaf_type?: boolean;
  /** The leaf type this fragment applies to. */
  leaf_type: string;
};

/** custom-schema-fragments-set-request-app-fragment */
export interface CustomSchemaFragmentsSetRequestAppFragment {
  /** The app this fragment applies to. */
  app: string;
}

/** custom-schema-fragments-set-request-custom-type-fragment */
export interface CustomSchemaFragmentsSetRequestCustomTypeFragment {
  /**
   * Path components used to display available custom types in tree
   * form.
   */
  path?: CustomTypePathComponent[];
  /** The ID of the associated custom stage diagram. */
  stage_diagram?: string;
  /** List of Per-DevOrg stock field overrides. */
  stock_field_overrides?: StockFieldOverride[];
  /** The string used to populate the subtype in the leaf type. */
  subtype: string;
  /** The display name of the subtype. */
  subtype_display_name?: string;
}

/** custom-schema-fragments-set-request-tenant-fragment */
export interface CustomSchemaFragmentsSetRequestTenantFragment {
  /** The display ID prefix for the custom object. */
  id_prefix?: string;
  /** List of Per-DevOrg stock field overrides. */
  stock_field_overrides?: StockFieldOverride[];
}

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

/**
 * custom-schema-spec
 * Requested custom schemas described abstractly. Every provided schema's
 * custom field must be specified, otherwise a bad request error is
 * returned. If a new custom schema specifier is provided, then it will be
 * added to the work, otherwise if a custom schema is omitted from the
 * specifier, it remains unmodified.
 */
export interface CustomSchemaSpec {
  /** List of apps that are requested. */
  apps?: string[];
  /** Name of the subtype requested. */
  subtype?: string;
  /** Whether the tenant schema is requested. */
  tenant_fragment?: boolean;
  /** Whether to enforce required fields validation. */
  validate_required_fields?: boolean;
}

/** custom-stage */
export type CustomStage = AtomBase & {
  /** The human readable name of the state. */
  name?: string;
  /**
   * Ordinal used to sort/group stages.
   * @format int32
   */
  ordinal?: number;
  state?: CustomStateSummary;
};

/** custom-stage-summary */
export type CustomStageSummary = AtomBaseSummary;

/** custom-stages-create-request */
export interface CustomStagesCreateRequest {
  /**
   * A reference to the marketplace item from which this stage was
   * imported.
   */
  marketplace_ref?: string;
  /** The name of the custom stage. */
  name: string;
  /**
   * The ordinal of the custom stage used for ordering.
   * @format int32
   */
  ordinal: number;
  /** The state ID. */
  state: string;
}

/** custom-stages-create-response */
export interface CustomStagesCreateResponse {
  custom_stage: CustomStage;
}

/** custom-stages-get-request */
export interface CustomStagesGetRequest {
  /** The ID of the custom stage to get. */
  id: string;
}

/** custom-stages-get-response */
export interface CustomStagesGetResponse {
  custom_stage: CustomStage;
}

/** custom-stages-list-request */
export interface CustomStagesListRequest {
  /**
   * The cursor to resume iteration from, otherwise if not provided,
   * then iteration starts from the beginning.
   */
  cursor?: string;
  /**
   * The maximum number of items.
   * @format int32
   */
  limit?: number;
  /** The list of stage names. */
  name?: string[];
  /** The list of stage ordinals. */
  ordinal?: number[];
  /** The list of fields to sort the items by and how to sort them. */
  sort_by?: string[];
}

/** custom-stages-list-response */
export interface CustomStagesListResponse {
  /**
   * The cursor to resume iteration from, otherwise if not provided,
   * then iteration starts from the beginning.
   */
  cursor?: string;
  /** The custom stages. */
  result: CustomStage[];
}

/** custom-stages-update-request */
export interface CustomStagesUpdateRequest {
  /** The ID of the custom stage to update. */
  id: string;
  /** The updated name of the custom stage. */
  name?: string;
  /**
   * The ordinal of the custom stage.
   * @format int32
   */
  ordinal?: number;
  /** The state ID. */
  state_id?: string;
}

/** custom-stages-update-response */
export interface CustomStagesUpdateResponse {
  custom_stage: CustomStage;
}

/** custom-state */
export type CustomState = AtomBase & {
  /** True if this is a final state. */
  is_final?: boolean;
  /** The human readable name of the state. */
  name?: string;
  /**
   * Ordinal used to identify system states.
   * @format int32
   */
  ordinal?: number;
};

/** custom-state-summary */
export type CustomStateSummary = AtomBaseSummary;

/** custom-states-create-request */
export interface CustomStatesCreateRequest {
  /** Whether this is a final state. */
  is_final?: boolean;
  /** The name of the custom state. */
  name: string;
  /**
   * Ordinal of the custom state used to identify system states.
   * @format int32
   */
  ordinal: number;
}

/** custom-states-create-response */
export interface CustomStatesCreateResponse {
  custom_state: CustomState;
}

/** custom-states-get-request */
export interface CustomStatesGetRequest {
  /** The ID of the custom state to get. */
  id: string;
}

/** custom-states-get-response */
export interface CustomStatesGetResponse {
  custom_state: CustomState;
}

/** custom-states-list-request */
export interface CustomStatesListRequest {
  /**
   * The cursor to resume iteration from, otherwise if not provided,
   * then iteration starts from the beginning.
   */
  cursor?: string;
  /** Whether only final states should be filtered. */
  is_final?: boolean;
  /**
   * The maximum number of items.
   * @format int32
   */
  limit?: number;
  /** The list of state names. */
  name?: string[];
  /** The list of state ordinals. */
  ordinal?: number[];
  /** The list of fields to sort the items by and how to sort them. */
  sort_by?: string[];
}

/** custom-states-list-response */
export interface CustomStatesListResponse {
  /**
   * The cursor to resume iteration from, otherwise if not provided,
   * then iteration starts from the beginning.
   */
  cursor?: string;
  /** The custom states. */
  result: CustomState[];
}

/** custom-states-update-request */
export interface CustomStatesUpdateRequest {
  /** The ID of the custom state to update. */
  id: string;
  /** Whether this is a final state. */
  is_final?: boolean;
  /** The name of the custom state. */
  name?: string;
  /**
   * Ordinal of the custom state used to identify system states.
   * @format int32
   */
  ordinal?: number;
}

/** custom-states-update-response */
export interface CustomStatesUpdateResponse {
  custom_state: CustomState;
}

/** custom-type-fragment */
export type CustomTypeFragment = CustomSchemaFragmentBase & {
  stage_diagram?: StageDiagramSummary;
  /** The string used to populate the subtype in the leaf type. */
  subtype?: string;
  /**
   * Display name of the subtype. Modifications to this field are done
   * in-place and don't result in creation of a new fragment in chain.
   */
  subtype_display_name?: string;
};

/** custom-type-fragment-summary */
export type CustomTypeFragmentSummary = CustomSchemaFragmentBaseSummary;

/**
 * custom-type-path-component
 * Path component for rendering custom type lists in tree form.
 */
export type CustomTypePathComponent = object;

/** dashboard-search-summary */
export type DashboardSearchSummary = SearchSummaryBase & {
  dashboard: DashboardSummary;
};

/** dashboard-summary */
export type DashboardSummary = AtomBaseSummary;

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
   * @example "2023-01-01T12:00:00.000Z"
   */
  after?: string;
  /**
   * Filters for objects created before the provided timestamp
   * (inclusive).
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
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

/**
 * dev-org-auth-connections-create-request
 * Request to create a new enterprise authentication connection.
 */
export type DevOrgAuthConnectionsCreateRequest = (
  | AuthConnectionOptionsAzureAd
  | AuthConnectionOptionsGoogleApps
  | AuthConnectionOptionsOidc
  | AuthConnectionOptionsSaml
) & {
  /**
   * Defines the type for the authentication connection. Different types of
   * authentication connections have different configuration parameters.
   */
  type: DevOrgAuthConnectionsCreateRequestType;
  /**
   * Display name of the authentication connection. This name will be
   * visible to all the users when they sign in to this Dev
   * organization. For example, if the display_name is 'abclogin', then
   * it would appear on the login button as 'Log in to abclogin'.
   */
  display_name?: string;
};

/**
 * Defines the type for the authentication connection. Different types of
 * authentication connections have different configuration parameters.
 */
export enum DevOrgAuthConnectionsCreateRequestType {
  GoogleApps = 'google_apps',
  Oidc = 'oidc',
  Samlp = 'samlp',
  Waad = 'waad',
}

/**
 * dev-org-auth-connections-create-response
 * Response for the request to create a new enterprise authentication
 * connection.
 */
export interface DevOrgAuthConnectionsCreateResponse {
  /**
   * Connection object that specifies the configuration for an
   * authentication connection that is set up for a Dev organization.
   */
  auth_connection: AuthConnection;
}

/**
 * dev-org-auth-connections-delete-request
 * Request to delete an enterprise authentication connection for a Dev
 * organization. A default connection and a connection which is currently
 * enabled cannot be deleted.
 */
export interface DevOrgAuthConnectionsDeleteRequest {
  /** ID of the authentication connection to be deleted. */
  id: string;
}

/**
 * dev-org-auth-connections-get-request
 * Request to get configuration details of organization's authentication
 * Connection.
 */
export interface DevOrgAuthConnectionsGetRequest {
  /** ID of the authentication connection. */
  id: string;
}

/**
 * dev-org-auth-connections-get-response
 * Response object encapsulating the configuration details of an
 * authentication connection.
 */
export interface DevOrgAuthConnectionsGetResponse {
  /**
   * Connection object that specifies the configuration for an
   * authentication connection that is set up for a Dev organization.
   */
  auth_connection: AuthConnection;
}

/**
 * dev-org-auth-connections-list-response
 * Response object for the request to list all the social and enterprise
 * authentication connections configured for a Dev organization.
 */
export interface DevOrgAuthConnectionsListResponse {
  /**
   * List of all the authentication connections currently configured for
   * a Dev organization.
   */
  auth_connections: AuthConnection[];
}

/**
 * dev-org-auth-connections-toggle-request
 * Request to enable or disable an authentication connection for a Dev
 * organization.
 */
export interface DevOrgAuthConnectionsToggleRequest {
  /** ID of the authentication connection to be toggled. */
  id: string;
  toggle?: AuthConnectionToggle;
}

/**
 * dev-org-auth-connections-update-request
 * Request to update an enterprise authentication connection for a Dev
 * organization.
 */
export type DevOrgAuthConnectionsUpdateRequest = (
  | AuthConnectionOptionsAzureAd
  | AuthConnectionOptionsGoogleApps
  | AuthConnectionOptionsOidc
  | AuthConnectionOptionsSaml
  | Empty
) & {
  /**
   * Specifies the type for the authentication connection. Different types
   * of authentication connections have different configuration parameters
   * that can be updated.
   */
  type?: DevOrgAuthConnectionsUpdateRequestType;
  /**
   * New display name of the authentication connection. This name will
   * be visible to all the users when they sign in to this Dev
   * organization. For example, if the display_name is 'abclogin', then
   * it would appear on the login button as 'Log in to abclogin'.
   */
  display_name?: string;
  /** ID of the authentication connection which is to be updated. */
  id: string;
};

/**
 * Specifies the type for the authentication connection. Different types
 * of authentication connections have different configuration parameters
 * that can be updated.
 */
export enum DevOrgAuthConnectionsUpdateRequestType {
  GoogleApps = 'google_apps',
  None = 'none',
  Oidc = 'oidc',
  Samlp = 'samlp',
  Waad = 'waad',
}

/**
 * dev-org-auth-connections-update-response
 * Response for the request to update an enterprise authentication
 * connection.
 */
export interface DevOrgAuthConnectionsUpdateResponse {
  /**
   * Connection object that specifies the configuration for an
   * authentication connection that is set up for a Dev organization.
   */
  auth_connection: AuthConnection;
}

/** dev-user */
export type DevUser = UserBase & {
  /**
   * Start date of the user's employment.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  experience_start_date?: string;
  /** IDs of the Dev User outside the DevRev SOR. */
  external_identities?: ExternalIdentity[];
  /** Job history of the user. */
  job_history?: JobHistoryItem[];
  /** Array of skills of the user. */
  skills?: UserSkill[];
};

/** dev-user-external-identity-filter */
export interface DevUserExternalIdentityFilter {
  /** Unique ID of the user in the external source. */
  id?: string;
  /** Issuer of the external identity of the user. */
  issuer?: string;
}

/** Job title of the Dev User. */
export enum DevUserJobTitle {
  CustomerSuccessManager = 'customer_success_manager',
  Cxo = 'cxo',
  Designer = 'designer',
  Developer = 'developer',
  HeadOfSupport = 'head_of_support',
  Operations = 'operations',
  Others = 'others',
  ProductManager = 'product_manager',
  Qa = 'qa',
  RevenueLeader = 'revenue_leader',
  Support = 'support',
  TechLead = 'tech_lead',
}

/** dev-user-summary */
export type DevUserSummary = UserBaseSummary;

/**
 * dev-users-get-request
 * A request to get a Dev user's information.
 */
export interface DevUsersGetRequest {
  /** User ID of the requested Dev user. */
  id: string;
}

/**
 * dev-users-get-response
 * The response to getting the information for the Dev user.
 */
export interface DevUsersGetResponse {
  dev_user: DevUser;
}

/**
 * dev-users-identities-link-request
 * Request to link external identity to a Dev user.
 */
export interface DevUsersIdentitiesLinkRequest {
  /** The ID of the Dev user to link the external identity to. */
  dev_user: string;
  /** Display name of the Dev user in the external source. */
  display_name?: string;
  /** Unique ID of the Dev user in the external source. */
  id: string;
  /** Issuer of the external identity of the Dev user. */
  issuer: string;
}

/**
 * dev-users-identities-link-response
 * Response for the request to link an external identity to a Dev user.
 */
export interface DevUsersIdentitiesLinkResponse {
  dev_user: DevUser;
}

/**
 * dev-users-identities-unlink-request
 * Request to unlink an external identity from a Dev user.
 */
export interface DevUsersIdentitiesUnlinkRequest {
  /** The ID of the Dev user to unlink the external identity from. */
  dev_user: string;
  /** Issuer that needs to be unlinked from a Dev user. */
  issuer: string;
}

/**
 * dev-users-identities-unlink-response
 * Response for the request to unlink an external identity from a Dev
 * user.
 */
export interface DevUsersIdentitiesUnlinkResponse {
  dev_user: DevUser;
}

/**
 * dev-users-list-request
 * A request to get the list of Dev user's information.
 */
export interface DevUsersListRequest {
  /** Provides ways to specify date ranges on objects. */
  created_date?: DateFilter;
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /** Filters Dev users based on email addresses. */
  email?: string[];
  /** Filters Dev users based on external identity. */
  external_identity?: DevUserExternalIdentityFilter[];
  /**
   * The maximum number of Dev users to return. The default is '50'.
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
  /** Fields to sort the Dev users by and the direction to sort them. */
  sort_by?: string[];
  /** Filters Dev users based on state. */
  state?: UserState[];
}

/**
 * dev-users-list-response
 * The response to listing the Dev users.
 */
export interface DevUsersListResponse {
  /** The list of Dev users. */
  dev_users: DevUser[];
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
 * dev-users-self-request
 * A request to get the authenticated user's information.
 */
export type DevUsersSelfRequest = object;

/**
 * dev-users-self-response
 * The response to getting the information for the authenticated user.
 */
export interface DevUsersSelfResponse {
  dev_user: DevUser;
}

/**
 * dev-users-self-update-request
 * A request to update the user's information for the authenticated Dev
 * user.
 */
export interface DevUsersSelfUpdateRequest {
  /** The updated display name of the Dev user. */
  display_name?: string;
  /** The updated full name of the Dev user. */
  full_name?: string;
  /** Job title of the Dev User. */
  job_title?: DevUserJobTitle;
}

/**
 * dev-users-update-request
 * A request to update the user's information corresponding to the
 * provided Dev user.
 */
export interface DevUsersUpdateRequest {
  /** The updated display name of the Dev user. */
  display_name?: string;
  /** The updated full name of the Dev user. */
  full_name?: string;
  /** The ID for the Dev user to be updated. */
  id: string;
  /** Job title of the Dev User. */
  job_title?: DevUserJobTitle;
}

/**
 * dev-users-update-response
 * The response to update a Dev user.
 */
export interface DevUsersUpdateResponse {
  dev_user: DevUser;
}

/** directory-summary */
export type DirectorySummary = AtomBaseSummary;

/**
 * dynamic-group-info
 * Information to define dynamic groups.
 */
export type DynamicGroupInfo = object;

/**
 * dynamic-vista-summary
 * Dynamic collection of Devrev objects, all adhering to a specific
 * filter.
 */
export type DynamicVistaSummary = VistaBaseSummary;

/** email-info */
export interface EmailInfo {
  /** The email address. */
  address: string;
  /** The email recipient's name. */
  name?: string;
  user?: UserSummary;
}

/** email-inline-attachment */
export interface EmailInlineAttachment {
  artifact?: ArtifactSummary;
  /** The content id of the attachment. */
  content_id?: string;
}

/** email-preview-widget */
export type EmailPreviewWidget = SnapWidgetBase & {
  /** The list of bcc addresses. */
  bcc: EmailInfo[];
  /** The list of cc addresses. */
  cc: EmailInfo[];
  /** The list of from addresses. */
  from: EmailInfo[];
  /** The html body of the email. */
  html_body?: string;
  /** The in-reply-to header of the email. */
  in_reply_to?: string;
  /** The list of inline attachments. */
  inlines: EmailInlineAttachment[];
  /** Whether the email is spam. */
  is_spam?: boolean;
  /** The message id of the email. */
  message_id?: string;
  raw_email_artifact?: ArtifactSummary;
  /** The references header in the email. */
  references: string[];
  /** The list of reply to addresses. */
  reply_to: EmailInfo[];
  /**
   * The time the email was sent.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  sent_timestamp?: string;
  /** The subject of the email. */
  subject?: string;
  /** The text body of the email. */
  text_body?: string;
  /** The list of to addresses. */
  to: EmailInfo[];
};

/** empty */
export type Empty = object;

/** engagement */
export type Engagement = AtomBase & {
  /** Description of the engagement object. */
  description?: string;
};

/** engagement-summary */
export type EngagementSummary = AtomBaseSummary;

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
  /** Filters for engagement of the provided types. */
  type?: EngagementType[];
  /** Filters for meetings with the provided external_refs. */
  external_ref?: string[];
  /**
   * Filters for engagement of the provided members.
   * @example ["DEVU-12345"]
   */
  members?: string[];
  /**
   * Filters for engagements with the provided parent.
   * @example ["ACC-12345"]
   */
  parent?: string[];
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
   * @example ["ARTIFACT-12345"]
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
   * @minItems 1
   * @example ["DEVU-12345"]
   */
  members: string[];
  /**
   * The parent object ID in which the engagement was created.
   * Currently, only accounts and opportunities are supported.
   * @example "ACC-12345"
   */
  parent: string;
  /**
   * The date and time when the engagement was scheduled.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  scheduled_date: string;
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
  /** Filters for engagement of the provided types. */
  type?: EngagementType[];
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
   * @example ["DEVU-12345"]
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
   * @example ["ACC-12345"]
   */
  parent?: string[];
  /** Fields to sort the engagements by and the direction to sort them. */
  sort_by?: string[];
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
   * @example "2023-01-01T12:00:00.000Z"
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
   * @example ["ARTIFACT-12345"]
   */
  set?: string[];
}

/** engagements-update-request-members */
export interface EngagementsUpdateRequestMembers {
  /**
   * Sets the members to the provided user IDs. If specified, this must
   * not be empty.
   * @maxItems 50
   * @example ["DEVU-12345"]
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

/** enhancement */
export type Enhancement = PartBase;

/** enhancement-summary */
export type EnhancementSummary = PartBaseSummary;

/**
 * enum-value
 * The properties of an enum value.
 */
export interface EnumValue {
  /**
   * The uiique ID of the enum value.
   * @format int64
   */
  id: number;
  /** The display label of the enum value. */
  label: string;
  /**
   * Used for determining the relative order of the enum value.
   * @format int64
   */
  ordinal: number;
}

/** error */
export interface Error {
  /** The error type. */
  type?: string;
  /** Information about the error. */
  message: string;
  /**
   * The corresponding HTTP status code.
   * @format int32
   */
  status: number;
}

/** error-bad-request */
export type ErrorBadRequest = ErrorBase &
  (
    | ErrorBadRequestArtifactAlreadyAttachedToAParent
    | ErrorBadRequestBadRequest
    | ErrorBadRequestInvalidApiVersion
    | ErrorBadRequestInvalidEnumValue
    | ErrorBadRequestInvalidField
    | ErrorBadRequestInvalidId
    | ErrorBadRequestMergeWorksError
    | ErrorBadRequestMissingDependency
    | ErrorBadRequestMissingRequiredField
    | ErrorBadRequestParseError
    | ErrorBadRequestStaleSchemaFragments
    | ErrorBadRequestUnexpectedIdType
    | ErrorBadRequestUnexpectedJsonType
    | ErrorBadRequestValueNotPermitted
  ) & {
    type: ErrorBadRequestType;
  };

/** error-bad-request-artifact-already-attached-to-a-parent */
export interface ErrorBadRequestArtifactAlreadyAttachedToAParent {
  /** The existing parent attached to the artifact. */
  existing_parent: string;
  /** Whether the existing parent is the same as the new parent. */
  is_same: boolean;
}

/** error-bad-request-bad-request */
export type ErrorBadRequestBadRequest = object;

/** error-bad-request-invalid-api-version */
export interface ErrorBadRequestInvalidApiVersion {
  /** The provided API version. */
  value: string;
}

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

/** error-bad-request-invalid-id */
export interface ErrorBadRequestInvalidId {
  /** The field whose ID is invalid. */
  field_name: string;
}

/** error-bad-request-merge-works-error */
export interface ErrorBadRequestMergeWorksError {
  /** The errors encountered during the validation of the merge. */
  errors?: ErrorBadRequestMergeWorksErrorError[];
}

/** error-bad-request-merge-works-error-error */
export interface ErrorBadRequestMergeWorksErrorError {
  already_merged?: ErrorBadRequestMergeWorksErrorErrorAlreadyMerged;
  closed?: ErrorBadRequestMergeWorksErrorErrorClosed;
  /** The details of the error. */
  details: string;
  different_workspace?: ErrorBadRequestMergeWorksErrorErrorDifferentWorkspace;
  invalid_stage_transition?: ErrorBadRequestMergeWorksErrorErrorInvalidStageTransition;
  subtype?:
    | 'already_merged'
    | 'closed'
    | 'different_workspace'
    | 'invalid_stage_transition';
  /** The ID of the work which failed the validation. */
  work: string;
}

/** error-bad-request-merge-works-error-error-already-merged */
export interface ErrorBadRequestMergeWorksErrorErrorAlreadyMerged {
  /** ID of the work into which the work was merged. */
  merged_into: string;
}

/** error-bad-request-merge-works-error-error-closed */
export type ErrorBadRequestMergeWorksErrorErrorClosed = object;

/** error-bad-request-merge-works-error-error-different-workspace */
export interface ErrorBadRequestMergeWorksErrorErrorDifferentWorkspace {
  /** The workspace of the primary work. */
  primary_workspace: string;
  /** The workspace of the secondary work. */
  secondary_workspace: string;
}

/** error-bad-request-merge-works-error-error-invalid-stage-transition */
export interface ErrorBadRequestMergeWorksErrorErrorInvalidStageTransition {
  /** The current stage of the work. */
  current_stage: string;
  /** The stage to which the transition isn't allowed. */
  requested_stage: string;
}

/** error-bad-request-missing-dependency */
export interface ErrorBadRequestMissingDependency {
  /** The dependent fields. */
  dependencies?: ErrorBadRequestMissingDependencyDependency[];
  /** The field on which the value depends. */
  dependent_field_name?: string;
  /** The value which needs to be set of the dependent field. */
  dependent_field_value?: string;
  /** The field whose value was received. */
  provided_field_name?: string;
  /** The value that was received. */
  provided_field_value?: string;
}

/** error-bad-request-missing-dependency-dependency */
export interface ErrorBadRequestMissingDependencyDependency {
  /** The dependent field name. */
  field_name: string;
  /** The dependent field value. */
  field_value: string;
}

/** error-bad-request-missing-required-field */
export interface ErrorBadRequestMissingRequiredField {
  /** The missing field's name. */
  field_name: string;
}

/** error-bad-request-parse-error */
export type ErrorBadRequestParseError = object;

/**
 * error-bad-request-stale-schema-fragments
 * Error indicating that the request contained one or more stale schema
 * fragments, which are schema fragments that have been replaced by a
 * newer version and are therefore considered deprecated schema fragments.
 * The caller should refresh and use the latest schema fragments in their
 * request.
 */
export type ErrorBadRequestStaleSchemaFragments = object;

export enum ErrorBadRequestType {
  ArtifactAlreadyAttachedToAParent = 'artifact_already_attached_to_a_parent',
  BadRequest = 'bad_request',
  InvalidApiVersion = 'invalid_api_version',
  InvalidEnumValue = 'invalid_enum_value',
  InvalidField = 'invalid_field',
  InvalidId = 'invalid_id',
  MergeWorksError = 'merge_works_error',
  MissingDependency = 'missing_dependency',
  MissingRequiredField = 'missing_required_field',
  ParseError = 'parse_error',
  StaleSchemaFragments = 'stale_schema_fragments',
  UnexpectedIdType = 'unexpected_id_type',
  UnexpectedJsonType = 'unexpected_json_type',
  ValueNotPermitted = 'value_not_permitted',
}

/** error-bad-request-unexpected-id-type */
export interface ErrorBadRequestUnexpectedIdType {
  /** The field whose ID type is unexpected. */
  field_name: string;
}

/** error-bad-request-unexpected-json-type */
export interface ErrorBadRequestUnexpectedJsonType {
  actual: ErrorBadRequestUnexpectedJsonTypeType;
  expected: ErrorBadRequestUnexpectedJsonTypeType;
  /** The field name that's invalid. */
  field_name: string;
}

export enum ErrorBadRequestUnexpectedJsonTypeType {
  Array = 'array',
  Bool = 'bool',
  Null = 'null',
  Number = 'number',
  Object = 'object',
  String = 'string',
}

/** error-bad-request-value-not-permitted */
export interface ErrorBadRequestValueNotPermitted {
  /** The allowed values for the field. */
  allowed_values?: string[];
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

/** error-conflict */
export type ErrorConflict = ErrorBase &
  ErrorConflictConflict & {
    type: ErrorConflictType;
  };

/** error-conflict-conflict */
export type ErrorConflictConflict = object;

export enum ErrorConflictType {
  Conflict = 'conflict',
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
    type: ErrorInternalServerErrorType;
    /**
     * A unique ID that's generated for the error that can be used for
     * inquiry.
     */
    reference_id?: string;
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
    type: ErrorTooManyRequestsType;
    /**
     * The number of seconds after which the client should retry.
     * @format int64
     */
    retry_after?: number;
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

/** event-account-created */
export interface EventAccountCreated {
  account: Account;
}

/** event-account-deleted */
export interface EventAccountDeleted {
  /**
   * The ID of the account that was deleted.
   * @example "ACC-12345"
   */
  id: string;
  old_account?: Account;
}

/** event-account-updated */
export interface EventAccountUpdated {
  account: Account;
  old_account?: Account;
}

/** event-conversation-created */
export interface EventConversationCreated {
  conversation: Conversation;
}

/** event-conversation-deleted */
export interface EventConversationDeleted {
  /** The ID of the conversation that was deleted. */
  id: string;
}

/** event-conversation-updated */
export interface EventConversationUpdated {
  conversation: Conversation;
}

/** event-dev-user-created */
export interface EventDevUserCreated {
  dev_user: DevUser;
}

/** event-dev-user-deleted */
export interface EventDevUserDeleted {
  /** The ID of the Dev user that was deleted. */
  id: string;
  old_dev_user?: DevUser;
}

/** event-dev-user-updated */
export interface EventDevUserUpdated {
  dev_user: DevUser;
  old_dev_user?: DevUser;
}

/** event-group-created */
export interface EventGroupCreated {
  group: Group;
}

/** event-group-deleted */
export interface EventGroupDeleted {
  /** The ID of the group that was deleted. */
  id: string;
  old_group?: Group;
}

/** event-group-member-added */
export interface EventGroupMemberAdded {
  group: GroupSummary;
  member: UserSummary;
}

/** event-group-member-removed */
export interface EventGroupMemberRemoved {
  group: GroupSummary;
  member: UserSummary;
}

/** event-group-updated */
export interface EventGroupUpdated {
  group: Group;
  old_group?: Group;
}

/** event-part-created */
export interface EventPartCreated {
  part: Part;
}

/** event-part-deleted */
export interface EventPartDeleted {
  /**
   * The ID of the part that was deleted.
   * @example "PROD-12345"
   */
  id: string;
  old_part?: Part;
}

/** event-part-updated */
export interface EventPartUpdated {
  old_part?: Part;
  part: Part;
}

/** event-rev-org-created */
export interface EventRevOrgCreated {
  rev_org: RevOrg;
}

/** event-rev-org-deleted */
export interface EventRevOrgDeleted {
  /**
   * The ID of the Rev organization that was deleted.
   * @example "REV-AbCdEfGh"
   */
  id: string;
  old_rev_org?: RevOrg;
}

/** event-rev-org-updated */
export interface EventRevOrgUpdated {
  old_rev_org?: RevOrg;
  rev_org: RevOrg;
}

/** event-rev-user-created */
export interface EventRevUserCreated {
  rev_user: RevUser;
}

/** event-rev-user-deleted */
export interface EventRevUserDeleted {
  /** The ID of the Rev user that was deleted. */
  id: string;
  old_rev_user?: RevUser;
}

/** event-rev-user-updated */
export interface EventRevUserUpdated {
  old_rev_user?: RevUser;
  rev_user: RevUser;
}

/** event-sla-tracker-created */
export interface EventSlaTrackerCreated {
  sla_tracker: SlaTracker;
}

/** event-sla-tracker-deleted */
export interface EventSlaTrackerDeleted {
  /** The ID of the SLA tracker that was deleted. */
  id: string;
}

/** event-sla-tracker-updated */
export interface EventSlaTrackerUpdated {
  sla_tracker: SlaTracker;
}

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
   * @example "2023-01-01T12:00:00.000Z"
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

/** event-survey-response-created */
export interface EventSurveyResponseCreated {
  survey_response: SurveyResponse;
}

/** event-survey-response-deleted */
export interface EventSurveyResponseDeleted {
  /** The ID of the survey response that was deleted. */
  id: string;
}

/** event-survey-response-updated */
export interface EventSurveyResponseUpdated {
  survey_response: SurveyResponse;
}

/** event-tag-created */
export interface EventTagCreated {
  tag: Tag;
}

/** event-tag-deleted */
export interface EventTagDeleted {
  /**
   * The ID of the tag that was deleted.
   * @example "TAG-12345"
   */
  id: string;
}

/** event-tag-updated */
export interface EventTagUpdated {
  tag: Tag;
}

/** event-timeline-entry-created */
export interface EventTimelineEntryCreated {
  entry: TimelineEntry;
}

/** event-timeline-entry-deleted */
export interface EventTimelineEntryDeleted {
  /**
   * The ID of the timeline entry that was deleted.
   * @example "don:core:<partition>:devo/<dev-org-id>:ticket/123:timeline_event/<timeline-event-id>"
   */
  id: string;
}

/** event-timeline-entry-updated */
export interface EventTimelineEntryUpdated {
  entry: TimelineEntry;
}

/** event-webhook-created */
export interface EventWebhookCreated {
  webhook: Webhook;
}

/** event-webhook-deleted */
export interface EventWebhookDeleted {
  /**
   * The ID of the webhook that was deleted.
   * @example "don:integration:<partition>:devo/<dev-org-id>:webhook/<webhook-id>"
   */
  id: string;
}

/** event-webhook-updated */
export interface EventWebhookUpdated {
  webhook: Webhook;
}

/** event-work-created */
export interface EventWorkCreated {
  work: Work;
}

/** event-work-deleted */
export interface EventWorkDeleted {
  /**
   * The ID of the work that was deleted.
   * @example "ISS-12345"
   */
  id: string;
  old_work?: Work;
}

/** event-work-updated */
export interface EventWorkUpdated {
  old_work?: Work;
  work: Work;
}

/**
 * external-identity
 * External identity of a user.
 */
export interface ExternalIdentity {
  /** Display name of the user in the external source. */
  display_name?: string;
  /** Unique ID of the user in the external source. */
  id?: string;
  /** Whether the external identity is verified or not. */
  is_verified?: boolean;
  /** Issuer of the external identity of the user. */
  issuer?: string;
}

/** feature */
export type Feature = PartBase;

/** feature-summary */
export type FeatureSummary = PartBaseSummary;

/**
 * field-delta
 * A field change.
 */
export interface FieldDelta {
  /** Set of field attributes. */
  field_descriptor?: SchemaFieldDescriptor;
  /** The name of the field. */
  name?: string;
  new_value?: FieldValue;
  old_value?: FieldValue;
}

/**
 * field-descriptor
 * Set of field attributes.
 */
export type FieldDescriptor = object;

/** field-value */
export type FieldValue = (
  | FieldValueBool
  | FieldValueBoolList
  | FieldValueComposite
  | FieldValueCompositeList
  | FieldValueDateList
  | FieldValueDateTimeList
  | FieldValueDateTimeValue
  | FieldValueDateValue
  | FieldValueDouble
  | FieldValueDoubleList
  | FieldValueId
  | FieldValueIdList
  | FieldValueInt64
  | FieldValueInt64List
  | FieldValueStage
  | FieldValueString
  | FieldValueStringList
  | FieldValueTagSummary
  | FieldValueTagSummaryList
) & {
  type: FieldValueType;
};

/** field-value-bool */
export interface FieldValueBool {
  value: boolean;
}

/** field-value-bool-list */
export interface FieldValueBoolList {
  values: boolean[];
}

/** field-value-composite */
export interface FieldValueComposite {
  fields: Record<string, FieldValue>;
}

/** field-value-composite-list */
export interface FieldValueCompositeList {
  values: FieldValueComposite[];
}

/** field-value-date-list */
export interface FieldValueDateList {
  /** @example ["2023-01-01"] */
  values: string[];
}

/** field-value-date-time-list */
export interface FieldValueDateTimeList {
  /** @example ["2023-01-01T12:00:00.000Z"] */
  values: string[];
}

/** field-value-date-time-value */
export interface FieldValueDateTimeValue {
  /**
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  value: string;
}

/** field-value-date-value */
export interface FieldValueDateValue {
  /**
   * @format date
   * @example "2023-01-01"
   */
  value: string;
}

/** field-value-double */
export interface FieldValueDouble {
  /** @format double */
  value: number;
}

/** field-value-double-list */
export interface FieldValueDoubleList {
  values: number[];
}

/** field-value-id */
export interface FieldValueId {
  value: string;
}

/** field-value-id-list */
export interface FieldValueIdList {
  values: string[];
}

/** field-value-int64 */
export interface FieldValueInt64 {
  /** @format int64 */
  value: number;
}

/** field-value-int64-list */
export interface FieldValueInt64List {
  values: number[];
}

/** field-value-stage */
export interface FieldValueStage {
  name?: string;
  notes?: string;
}

/** field-value-string */
export interface FieldValueString {
  value: string;
}

/** field-value-string-list */
export interface FieldValueStringList {
  values: string[];
}

/** field-value-tag-summary */
export interface FieldValueTagSummary {
  name?: string;
  style?: string;
  tag_id: string;
}

/** field-value-tag-summary-list */
export interface FieldValueTagSummaryList {
  values: FieldValueTagSummary[];
}

export enum FieldValueType {
  Bool = 'bool',
  BoolList = 'bool_list',
  Composite = 'composite',
  CompositeList = 'composite_list',
  Date = 'date',
  DateList = 'date_list',
  DateTime = 'date_time',
  DateTimeList = 'date_time_list',
  Double = 'double',
  DoubleList = 'double_list',
  Id = 'id',
  IdList = 'id_list',
  Int = 'int',
  IntList = 'int_list',
  Stage = 'stage',
  String = 'string',
  StringList = 'string_list',
  TagSummary = 'tag_summary',
  TagSummaryList = 'tag_summary_list',
}

/** Event type of the notification. */
export enum GenericNotificationEventType {
  Alert = 'alert',
  Assignment = 'assignment',
  Mention = 'mention',
  Reminder = 'reminder',
  Update = 'update',
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

/**
 * group-members-add-request
 * A request to add a new member to a group.
 */
export interface GroupMembersAddRequest {
  /** ID of the group where the member is being added. */
  group: string;
  /**
   * ID of the member to be added.
   * @example "DEVU-12345"
   */
  member: string;
}

/** group-members-add-response */
export type GroupMembersAddResponse = object;

/**
 * group-members-list-request
 * A request to list group members.
 */
export interface GroupMembersListRequest {
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /** ID of the group for which to list members. */
  group: string;
  /**
   * The maximum number of members to return. If not set, then the
   * default is '50'.
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
}

/**
 * group-members-list-response
 * List of group members.
 */
export interface GroupMembersListResponse {
  /** List of members. */
  members: GroupMembersListResponseMember[];
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
 * group-members-list-response-member
 * A group member.
 */
export interface GroupMembersListResponseMember {
  member: MemberSummary;
}

/**
 * group-members-remove-request
 * A request to remove a group member.
 */
export interface GroupMembersRemoveRequest {
  /** ID of the group where the member is being removed. */
  group: string;
  /**
   * ID of the member to be removed.
   * @example "DEVU-12345"
   */
  member: string;
}

/** group-members-remove-response */
export type GroupMembersRemoveResponse = object;

/** group-search-summary */
export type GroupSearchSummary = SearchSummaryBase & {
  group: GroupSummary;
};

/** group-summary */
export type GroupSummary = AtomBaseSummary & {
  /** Type of the members in the group. */
  member_type?: GroupMemberType;
  /** Name of the group. */
  name?: string;
};

/** Type of the group. */
export enum GroupType {
  Dynamic = 'dynamic',
  Static = 'static',
}

/** Denotes the use case of the grouped vista. */
export enum GroupedVistaFlavor {
  Nnl = 'nnl',
  SprintBoard = 'sprint_board',
  SupportInbox = 'support_inbox',
}

/**
 * grouped-vista-summary
 * Represents a group of multiple vistas as a single unit.
 */
export type GroupedVistaSummary = VistaBaseSummary & {
  /** Denotes the use case of the grouped vista. */
  flavor?: GroupedVistaFlavor;
};

/**
 * groups-create-request
 * A request to create a new group.
 */
export interface GroupsCreateRequest {
  /** Type of the group. */
  type?: GroupType;
  /** Description of the group. */
  description: string;
  /** Information to define dynamic groups. */
  dynamic_group_info?: DynamicGroupInfo;
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
  /** Filters the groups based on the group type. */
  group_type?: GroupType[];
  /** Whether to fetch default or custom groups. */
  is_default?: boolean;
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
  dynamic_group_info?: GroupsUpdateRequestDynamicGroupInfo;
  /** The ID of the group to update. */
  id: string;
  /** The updated group's name. */
  name?: string;
  /** The updated group's owner. */
  owner?: string;
}

/** groups-update-request-dynamic-group-info */
export interface GroupsUpdateRequestDynamicGroupInfo {
  /** Boolean expression. */
  membership_expression: BooleanExpression;
}

/**
 * groups-update-response
 * The response to group update.
 */
export interface GroupsUpdateResponse {
  group: Group;
}

/** incident */
export type Incident = AtomBase & {
  /** Parts to which the incident is applicable to. */
  applies_to_parts?: PartSummary[];
  /** Artifacts attached to the incident. */
  artifacts?: ArtifactSummary[];
  /** Body of the incident. */
  body?: string;
  /** Custom fields. */
  custom_fields?: object;
  /**
   * Custom schema fragments.
   * @example ["don:core:<partition>:devo/<dev-org-id>:custom_type_fragment/<custom-type-fragment-id>"]
   */
  custom_schema_fragments?: string[];
  /**
   * Time when the incident was identified/reported.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  identified_at?: string;
  /** List of customers impacted due to the incident. */
  impacted_customers?: AccountSummary[];
  /** The users that own the incident. */
  owned_by?: UserSummary[];
  /**
   * Timestamp when the incident was resolved.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  resolved_at?: string;
  /** The properties of an enum value. */
  severity?: EnumValue;
  /** Describes the current stage of a object. */
  stage?: Stage;
  /**
   * Users, along with the incident commander, involved in resolving
   * incidents and handling communication.
   */
  stakeholders?: UserSummary[];
  /**
   * Stock schema fragment.
   * @example "don:core:<partition>:devo/<dev-org-id>:custom_type_fragment/<custom-type-fragment-id>"
   */
  stock_schema_fragment?: string;
  /** Subtype corresponding to the custom type fragment. */
  subtype?: string;
  /** Tags associated with the object. */
  tags?: TagWithValue[];
  /**
   * Timestamp when the incident is expected to be resolved.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  target_close_date?: string;
  /** Title of the incident. */
  title: string;
};

/** incidents-create-request */
export interface IncidentsCreateRequest {
  /** Parts to which the incident is applicable to. */
  applies_to_parts?: string[];
  /**
   * Artifacts attached to the incident.
   * @example ["ARTIFACT-12345"]
   */
  artifacts?: string[];
  /** Body of the incident. */
  body?: string;
  /** Application-defined custom fields. */
  custom_fields?: object;
  /**
   * Requested custom schemas described abstractly. Every provided schema's
   * custom field must be specified, otherwise a bad request error is
   * returned. If a new custom schema specifier is provided, then it will be
   * added to the work, otherwise if a custom schema is omitted from the
   * specifier, it remains unmodified.
   */
  custom_schema_spec?: CustomSchemaSpec;
  /**
   * Time when the incident was identified/reported.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  identified_at?: string;
  /** List of customers impacted due to the incident. */
  impacted_customers?: string[];
  /** User IDs of the users that own the incident. */
  owned_by?: string[];
  /**
   * Timestamp when the incident was resolved.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  resolved_at?: string;
  /**
   * Severity of the incident.
   * @format int64
   */
  severity?: number;
  /** Create object for stage. */
  stage?: CreateStage;
  /**
   * Users, along with the incident commander, involved in resolving
   * incidents and handling communication.
   */
  stakeholders?: string[];
  /** Tags associated with the object. */
  tags?: CreateTagWithValue[];
  /**
   * Timestamp when the incident is expected to be resolved.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  target_close_date?: string;
  /** Title of the incident. */
  title: string;
}

/** incidents-create-response */
export interface IncidentsCreateResponse {
  incident: Incident;
}

/**
 * incidents-delete-request
 * A request to delete an incident.
 */
export interface IncidentsDeleteRequest {
  /** ID for the incident. */
  id: string;
}

/**
 * incidents-delete-response
 * The response to deleting the incident.
 */
export type IncidentsDeleteResponse = object;

/** incidents-get-request */
export interface IncidentsGetRequest {
  /** The ID of the incident to get. */
  id: string;
}

/** incidents-get-response */
export interface IncidentsGetResponse {
  incident: Incident;
}

/** incidents-group */
export interface IncidentsGroup {
  /** The group of incidents. */
  incidents: Incident[];
  /** Unique key according to which the items are grouped. */
  key: string;
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

/** incidents-group-request */
export interface IncidentsGroupRequest {
  /** Filters for incidents that apply to any of the provided parts. */
  applies_to_parts?: string[];
  /**
   * Filters for incidents created by any of the provided users.
   * @example ["DEVU-12345"]
   */
  created_by?: string[];
  /** Provides ways to specify date ranges on objects. */
  created_date?: DateFilter;
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /** The field to group the incidents by. */
  group_by: string;
  /**
   * The maximum number of groups to return. If not set, then the
   * default is '10'.
   * @format int32
   */
  limit?: number;
  /**
   * The maximum number of incidents to return for an individual group.
   * The default is '50'.
   * @format int32
   */
  limit_per_group?: number;
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
  /** Filters for incidents owned by any of the provided users. */
  owned_by?: string[];
  /** Filters for incidents containing any of the provided severities. */
  severity?: number[];
  /** Comma-separated fields to sort the incidents by. */
  sort_by?: string[];
  /** Filters for incidents in any of the provided stages. */
  stage?: string[];
  /** Filters for incidents by the provided titles. */
  title?: string[];
}

/** incidents-group-response */
export interface IncidentsGroupResponse {
  /** The list of groups. */
  groups: IncidentsGroup[];
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

/** incidents-list-request */
export interface IncidentsListRequest {
  /** Filters for incidents that apply to any of the provided parts. */
  applies_to_parts?: string[];
  /**
   * Filters for incidents created by any of the provided users.
   * @example ["DEVU-12345"]
   */
  created_by?: string[];
  /** Provides ways to specify date ranges on objects. */
  created_date?: DateFilter;
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /**
   * The maximum number of items.
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
  /** Filters for incidents owned by any of the provided users. */
  owned_by?: string[];
  /** Filters for incidents containing any of the provided severities. */
  severity?: number[];
  /** The list of fields to sort the items by and how to sort them. */
  sort_by?: string[];
  /** Filters for incidents in any of the provided stages. */
  stage?: string[];
  /** Filters for incidents by the provided titles. */
  title?: string[];
}

/** incidents-list-response */
export interface IncidentsListResponse {
  /** The matching incidents. */
  incidents: Incident[];
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

/** incidents-update-request */
export interface IncidentsUpdateRequest {
  applies_to_parts?: UpdateIncidentAppliesToParts;
  artifacts?: UpdateIncidentArtifacts;
  /** Body of the incident. */
  body?: string;
  /** Application-defined custom fields. */
  custom_fields?: object;
  /**
   * Requested custom schemas described abstractly. Every provided schema's
   * custom field must be specified, otherwise a bad request error is
   * returned. If a new custom schema specifier is provided, then it will be
   * added to the work, otherwise if a custom schema is omitted from the
   * specifier, it remains unmodified.
   */
  custom_schema_spec?: CustomSchemaSpec;
  /** The ID of the incident to be updated. */
  id: string;
  /**
   * Time when the incident was identified/reported.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  identified_at?: string;
  impacted_customers?: UpdateIncidentImpactedCustomers;
  owned_by?: UpdateIncidentOwnedBy;
  /**
   * Timestamp when the incident was resolved.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  resolved_at?: string;
  /**
   * Severity of the incident.
   * @format int64
   */
  severity?: number;
  /** Update object for Stage. */
  stage?: UpdateStage;
  stakeholders?: UpdateIncidentStakeholders;
  tags?: UpdateIncidentTags;
  /**
   * Timestamp when the incident is expected to be resolved.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  target_close_date?: string;
  /** Title of the incident. */
  title?: string;
}

/** incidents-update-response */
export interface IncidentsUpdateResponse {
  incident: Incident;
}

/** issue */
export type Issue = WorkBase & {
  /** Parts associated based on git events. */
  developed_with?: PartSummary[];
  /** Priority of the work based upon impact and criticality. */
  priority?: IssuePriority;
  sla_tracker?: SlaTrackerSummary;
  /** Vista group item. */
  sprint?: VistaGroupItemSummary;
  /**
   * Target start date for the object.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  target_start_date?: string;
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

/**
 * job-history-item
 * Defines a job history line item.
 */
export interface JobHistoryItem {
  /** The properties of an enum value. */
  employment_status?: EnumValue;
  /**
   * The end date of the job, or not specified if current.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  end_date?: string;
  /** Is this the current active job for the user. */
  is_current?: boolean;
  /** The job location for the user. */
  location?: string;
  /**
   * The start date of the job.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  start_date?: string;
  /** The job title for the user. */
  title?: string;
}

/** keyrings-create-callback-request */
export interface KeyringsCreateCallbackRequest {
  /** Code to exchange for an access token. */
  code: string;
  /** State value given to the authorization request. */
  state: string;
}

/**
 * legacy-stage
 * Describes the current stage of a work item.
 */
export interface LegacyStage {
  /** Current stage name of the work item. */
  name: string;
  stage?: CustomStageSummary;
}

/**
 * legacy-stage-summary
 * Describes the current stage of a work item.
 */
export interface LegacyStageSummary {
  /** Current stage name of the work item. */
  name: string;
}

/**
 * lines-of-code
 * Details of lines of code in this code change.
 */
export interface LinesOfCode {
  /**
   * Count of files involved in this code change.
   * @format int64
   */
  file_count?: number;
  /**
   * Number of new lines added in this code change.
   * @format int64
   */
  lines_added?: number;
  /**
   * Number of lines deleted in this code change.
   * @format int64
   */
  lines_deleted?: number;
  /**
   * Number of lines modified in this code change.
   * @format int64
   */
  lines_modified?: number;
}

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
 * Request to link a Rev user to an existing Rev organization.
 */
export interface LinkRevUserToRevOrgRequest {
  /** The ID of the Rev user. */
  id?: string;
  /**
   * The ID of the Rev organization to link the Rev user to.
   * @example "REV-AbCdEfGh"
   */
  rev_org?: string;
  /**
   * The don of the rev org to link the rev user to. This is deprecated,
   * use rev_org instead.
   * @deprecated
   * @example "REV-AbCdEfGh"
   */
  rev_org_don?: string;
  /**
   * The don of the rev user to link. This is deprecated, use id
   * instead.
   * @deprecated
   */
  user_don?: string;
}

/**
 * link-rev-user-to-rev-org-response
 * Response for linking a Rev user to an existing Rev organization.
 */
export interface LinkRevUserToRevOrgResponse {
  rev_user: RevUser;
}

/** link-search-summary */
export type LinkSearchSummary = SearchSummaryBase & {
  link: LinkSummary;
};

/** link-summary */
export type LinkSummary = AtomBaseSummary & {
  /** Type of link used to define the relationship. */
  link_type: LinkType;
  source: LinkEndpointSummary;
  target: LinkEndpointSummary;
};

/** Type of link used to define the relationship. */
export enum LinkType {
  CustomLink = 'custom_link',
  DevelopedWith = 'developed_with',
  Imports = 'imports',
  IsAnalyzedBy = 'is_analyzed_by',
  IsDependentOn = 'is_dependent_on',
  IsDuplicateOf = 'is_duplicate_of',
  IsMergedInto = 'is_merged_into',
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
   * The object types to filter for, otherwise if not present, all
   * object types are included.
   */
  object_types?: LinkEndpointType[];
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

/** meeting-summary */
export type MeetingSummary = AtomBaseSummary;

/** member-summary */
export type MemberSummary = (
  | DevUserSummary
  | RevUserSummary
  | SysUserSummary
) & {
  type: MemberType;
};

export enum MemberType {
  DevUser = 'dev_user',
  RevUser = 'rev_user',
  SysUser = 'sys_user',
}

/** metric-data-point */
export interface MetricDataPoint {
  /**
   * Key-value pairs for specifying additional attributes.
   * @maxItems 12
   */
  dimensions?: MetricDataPointDimension[];
  /**
   * An ID that uniquely identifies the metric data point. This ID will
   * be used for deduplication. Clients can generate its own ID and send
   * it in the request. If not provided, DevRev will perform
   * content-based deduplication.
   */
  id?: string;
  /**
   * Timestamp when metric value is captured.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  timestamp: string;
  /**
   * The value corresponding to the metric. For simply recording
   * occurrence of an event, this value should be 1.0.
   * @format double
   */
  value: number;
}

/** metric-data-point-dimension */
export interface MetricDataPointDimension {
  /**
   * The key for the dimension. The keys must be unique and it is not
   * allowed to have more than one value with the same key. Key must be
   * at least one character long and cannot be longer than 64
   * characters.Key can only contain alphanumeric characters (A-Z, a-z,
   * and 0-9) and underscores (_). Key cannot start with a number and is
   * case-insensitive.
   */
  key: string;
  /**
   * The value for the dimension. Value could be any string and cannot
   * be longer than 256 characters.
   */
  value: string;
}

/** metric-definition */
export type MetricDefinition = AtomBase & {
  /** Human readable name of the metric. */
  name?: string;
};

/** The list of item types on which the metric might be applied. */
export enum MetricDefinitionAppliesTo {
  Conversation = 'conversation',
  Issue = 'issue',
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

/**
 * The status of the metric. 'active' metrics can be used to create new
 * SLAs, while 'inactive' metrics can not be used in new SLAs. Metrics can
 * be updated between 'active' and 'inactive' states.
 */
export enum MetricDefinitionStatus {
  Active = 'active',
  Inactive = 'inactive',
}

/** metric-definition-summary */
export type MetricDefinitionSummary = AtomBaseSummary & {
  /** Human readable name of the metric. */
  name?: string;
};

/** metric-definitions-list-request */
export interface MetricDefinitionsListRequest {
  /** The type of metric definitions sought. */
  type?: MetricDefinitionMetricType[];
  /** The type of objects the metric definition applies to. */
  applies_to_type?: MetricDefinitionAppliesTo[];
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /**
   * Whether to include custom metrics in the response. If not set, then
   * custom metrics are excluded.
   */
  include_custom_metrics?: boolean;
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
  /** The status of the metric definition. */
  status?: MetricDefinitionStatus[];
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

/** metrics-data */
export interface MetricsData {
  /**
   * Account ID or external_ref of the account for which metric is being
   * published. Account ID is DevRev DON ID. For example,
   * don:identity:dvrv-us-1:devo/0:account/156. External_ref is the
   * identification of DevRev customer's customers. Devrev will
   * internally resolve external_ref to Account ID and use it for
   * further processing. For example, external_ref=customer_1 may
   * resolve to don:identity:dvrv-us-1:devo/0:account/155.
   */
  account_ref: string;
  /**
   * One or more data points collected for a given metric such as object
   * usage, object state etc.
   * @minItems 1
   */
  data_points: MetricDataPoint[];
  /**
   * Name of the metric which is being measured. For example,
   * num_api_calls, num_active_users, etc.
   */
  name: string;
  /**
   * Rev Org ID or external_ref for which metric is being published.Rev
   * Org ID is DevRev DON ID. For example,
   * don:identity:dvrv-us-1:devo/0:revo/156. External_ref is the
   * identification of DevRev customer's customers and maintained by
   * DevRev's customers. Devrev will internally resolve external_ref to
   * Rev Org ID and use it for further processing. For example,
   * external_ref=org_customer_1 may resolve to
   * don:identity:dvrv-us-1:devo/0:revo/155.
   */
  org_ref?: string;
  /** Rev User ID or user ref for which metric is being published. */
  user_ref?: string;
}

/** metrics-data-ingest-request */
export interface MetricsDataIngestRequest {
  /**
   * Metrics data received from Dev orgs.
   * @minItems 1
   */
  metrics: MetricsData[];
}

/** notifications-send-request */
export interface NotificationsSendRequest {
  /**
   * The list of notifications to send.
   * @maxItems 10
   * @minItems 1
   */
  notifications: SendNotification[];
}

/** notifications-send-response */
export type NotificationsSendResponse = object;

/** object-member-search-summary */
export type ObjectMemberSearchSummary = SearchSummaryBase & {
  object_member: ObjectMemberSummary;
};

/** object-member-summary */
export type ObjectMemberSummary = AtomBaseSummary;

/** opportunity */
export type Opportunity = WorkBase;

/** Forecast category of the opportunity. */
export enum OpportunityForecastCategory {
  Commit = 'commit',
  Omitted = 'omitted',
  Pipeline = 'pipeline',
  StrongUpside = 'strong_upside',
  Upside = 'upside',
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
   * @example "2023-01-01T12:00:00.000Z"
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
   * @example "2023-01-01T12:00:00.000Z"
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
   * @example "2023-01-01T12:00:00.000Z"
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
   * @example "2023-01-01T12:00:00.000Z"
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
   * @example "2023-01-01T12:00:00.000Z"
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

/** org-schedule-summary */
export type OrgScheduleSummary = AtomBaseSummary & {
  /** Human-readable name. */
  name?: string;
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
   * @example "2023-01-01T12:00:00.000Z"
   */
  valid_until?: string;
};

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

/** org-search-summary */
export type OrgSearchSummary = SearchSummaryBase & {
  org: OrgSummary;
};

/** org-summary */
export type OrgSummary = (AccountSummary | RevOrgSummary) & {
  type: OrgType;
};

export enum OrgType {
  Account = 'account',
  RevOrg = 'rev_org',
}

/**
 * parent-part-filter
 * The filter for specifying parent part.
 */
export interface ParentPartFilter {
  /**
   * Number of levels to fetch the part hierarchy up to.
   * @format int32
   * @min 1
   */
  level?: number;
  /**
   * Part IDs to fetch the hierarchy for.
   * @minItems 1
   * @example ["PROD-12345"]
   */
  parts: string[];
}

/** part */
export type Part = (Capability | Enhancement | Feature | Product) & {
  type: PartType;
};

/** part-base */
export type PartBase = AtomBase & {
  /** The attached artifacts. */
  artifacts?: ArtifactSummary[];
  /** Custom fields. */
  custom_fields?: object;
  /**
   * Custom schema fragments.
   * @example ["don:core:<partition>:devo/<dev-org-id>:custom_type_fragment/<custom-type-fragment-id>"]
   */
  custom_schema_fragments?: string[];
  /** Description of the part. */
  description?: string;
  /** Name of the part. */
  name: string;
  /** The users that own the part. */
  owned_by: UserSummary[];
  /**
   * Stock schema fragment.
   * @example "don:core:<partition>:devo/<dev-org-id>:custom_type_fragment/<custom-type-fragment-id>"
   */
  stock_schema_fragment?: string;
  /** Subtype corresponding to the custom type fragment. */
  subtype?: string;
  /** Tags associated with the object. */
  tags?: TagWithValue[];
};

/** part-base-summary */
export type PartBaseSummary = AtomBaseSummary & {
  /** Name of the part. */
  name: string;
  /** The users that own the part. */
  owned_by: UserSummary[];
};

/** part-search-summary */
export type PartSearchSummary = SearchSummaryBase & {
  /**
   * Comments on the work.
   * @maxItems 5
   */
  comments?: CommentSearchSummary[];
  part: PartSummary;
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

/** parts-create-request */
export type PartsCreateRequest = (
  | PartsCreateRequestCapability
  | PartsCreateRequestEnhancement
  | PartsCreateRequestFeature
  | PartsCreateRequestProduct
) & {
  type: PartType;
  /**
   * The IDs of the artifacts.
   * @example ["ARTIFACT-12345"]
   */
  artifacts?: string[];
  /** Custom fields. */
  custom_fields?: object;
  /**
   * The custom schema fragments to use.
   * @example ["don:core:<partition>:devo/<dev-org-id>:custom_type_fragment/<custom-type-fragment-id>"]
   */
  custom_schema_fragments?: string[];
  /** Description of the part. */
  description?: string;
  /** Name of the part. */
  name: string;
  /**
   * The users that own the part.
   * @example ["DEVU-12345"]
   */
  owned_by: string[];
};

/** parts-create-request-capability */
export interface PartsCreateRequestCapability {
  /**
   * ID of the parent product for the capability.
   * @maxItems 1
   * @example ["PROD-12345"]
   */
  parent_part: string[];
}

/** parts-create-request-enhancement */
export interface PartsCreateRequestEnhancement {
  /**
   * ID of the parent part on which the enhancement is to be created.
   * @maxItems 1
   * @example ["PROD-12345"]
   */
  parent_part: string[];
  /**
   * Target close date by which enhancement is expected to be closed.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  target_close_date?: string;
  /**
   * Target start date by which enhancement is expected to be started.
   * Example Date Format: 2000-11-01T01:01:01Z
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  target_start_date?: string;
}

/** parts-create-request-feature */
export interface PartsCreateRequestFeature {
  /**
   * ID of the parent capability/feature for the feature.
   * @maxItems 1
   * @example ["PROD-12345"]
   */
  parent_part: string[];
}

/** parts-create-request-product */
export type PartsCreateRequestProduct = object;

/** parts-create-response */
export interface PartsCreateResponse {
  part: Part;
}

/** parts-delete-request */
export interface PartsDeleteRequest {
  /**
   * The ID of the part to delete.
   * @example "PROD-12345"
   */
  id: string;
}

/** parts-delete-response */
export type PartsDeleteResponse = object;

/** parts-get-request */
export interface PartsGetRequest {
  /**
   * The ID of the part to retrieve.
   * @example "PROD-12345"
   */
  id: string;
}

/** parts-get-response */
export interface PartsGetResponse {
  part: Part;
}

/** parts-list-request */
export interface PartsListRequest {
  /** Filters for parts of the provided type(s). */
  type?: PartType[];
  /**
   * Filters for parts created by any of these users.
   * @example ["DEVU-12345"]
   */
  created_by?: string[];
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /**
   * The maximum number of parts to return. The default is '50'.
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
  /** Filters for parts of the provided name(s). */
  name?: string[];
  /**
   * Filters for parts owned by any of these users.
   * @example ["DEVU-12345"]
   */
  owned_by?: string[];
  /** The filter for specifying parent part. */
  parent_part?: ParentPartFilter;
}

/** parts-list-response */
export interface PartsListResponse {
  /**
   * The cursor used to iterate subsequent results in accordance to the
   * sort order. If not set, then no later elements exist.
   */
  next_cursor?: string;
  /** The list of parts. */
  parts: Part[];
  /**
   * The cursor used to iterate preceding results in accordance to the
   * sort order. If not set, then no prior elements exist.
   */
  prev_cursor?: string;
}

/** parts-update-request */
export type PartsUpdateRequest = (
  | Empty
  | PartsUpdateRequestCapability
  | PartsUpdateRequestEnhancement
  | PartsUpdateRequestFeature
  | PartsUpdateRequestProduct
) & {
  type?: PartType;
  artifacts?: PartsUpdateRequestArtifacts;
  /** Custom fields. */
  custom_fields?: object;
  /**
   * The custom schema fragments to use.
   * @example ["don:core:<partition>:devo/<dev-org-id>:custom_type_fragment/<custom-type-fragment-id>"]
   */
  custom_schema_fragments?: string[];
  /** The updated description of the part. */
  description?: string;
  /**
   * The ID of the part to update.
   * @example "PROD-12345"
   */
  id: string;
  /** The updated name of the part. */
  name?: string;
  owned_by?: PartsUpdateRequestOwnedBy;
};

/** parts-update-request-artifacts */
export interface PartsUpdateRequestArtifacts {
  /**
   * Sets the artifacts to the provided IDs.
   * @example ["ARTIFACT-12345"]
   */
  set?: string[];
}

/** parts-update-request-capability */
export type PartsUpdateRequestCapability = object;

/** parts-update-request-enhancement */
export interface PartsUpdateRequestEnhancement {
  /**
   * Updates the target close date of the enhancement.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  target_close_date?: string | null;
  /**
   * Updates the target start date of the enhancement. Example Date
   * Format: 2000-11-01T01:01:01Z
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  target_start_date?: string | null;
}

/** parts-update-request-feature */
export type PartsUpdateRequestFeature = object;

/** parts-update-request-owned-by */
export interface PartsUpdateRequestOwnedBy {
  /**
   * Sets the owner IDs to the provided user IDs. This must not be
   * empty.
   * @example ["DEVU-12345"]
   */
  set?: string[];
}

/** parts-update-request-product */
export type PartsUpdateRequestProduct = object;

/** parts-update-response */
export interface PartsUpdateResponse {
  part: Part;
}

/** product */
export type Product = PartBase;

/** product-summary */
export type ProductSummary = PartBaseSummary;

/** question-answer */
export type QuestionAnswer = AtomBase & {
  /** The Answer. */
  answer?: string;
  /** The Question. */
  question?: string;
  /** An alternative answer suggested by the Q/A generation algorithm. */
  suggested_answer?: string;
  /**
   * Whether the Q/A was marked for deletion by the Q/A generation
   * algorithm.
   */
  suggested_for_deletion?: boolean;
  /** The topic to which the QA belongs. */
  topic?: string;
  /** Whether the Q/A was verified. */
  verified?: boolean;
};

/** question-answer-search-summary */
export type QuestionAnswerSearchSummary = SearchSummaryBase & {
  question_answer: QuestionAnswerSummary;
};

/** Status of the question answer. */
export enum QuestionAnswerStatus {
  Archived = 'archived',
  Discarded = 'discarded',
  Draft = 'draft',
  Published = 'published',
  ReviewNeeded = 'review_needed',
}

/** question-answer-summary */
export type QuestionAnswerSummary = AtomBaseSummary & {
  /** The Question. */
  question?: string;
};

/**
 * question-answers-create-request
 * The request to create a question-answer.
 */
export interface QuestionAnswersCreateRequest {
  access_level?: AccessLevel;
  /** Answer of the question-answer. */
  answer: string;
  /**
   * The articles that the question-answer applies to.
   * @example ["ARTICLE-12345"]
   */
  applies_to_articles?: string[];
  /**
   * The parts that the question-answer applies to.
   * @minItems 1
   * @example ["PROD-12345"]
   */
  applies_to_parts: string[];
  /**
   * The users that own the question-answer.
   * @example ["DEVU-12345"]
   */
  owned_by: string[];
  /** Question of the question-answer. */
  question: string;
  /** Information about the role the member receives due to the share. */
  shared_with?: SetSharedWithMembership[];
  /**
   * The source of the question-answer.
   * @example ["ARTICLE-12345"]
   */
  sources?: string[];
  /** Status of the question answer. */
  status: QuestionAnswerStatus;
  /**
   * Alternative answer for the question-answer sugested by Q/A
   * Discovery.
   */
  suggested_answer?: string;
  /**
   * Whether the question-answer was suggeste to be deleted by Q/A
   * Discovery.
   */
  suggested_for_deletion?: boolean;
  /** Tags associated with the question-answer. */
  tags?: SetTagWithValue[];
  /** Topic of the question-answer. */
  topic?: string;
  /** Whether the question-answer was verified by a user or not. */
  verified?: boolean;
}

/**
 * question-answers-create-response
 * Create question-answer response.
 */
export interface QuestionAnswersCreateResponse {
  question_answer: QuestionAnswer;
}

/**
 * question-answers-delete-request
 * The request to delete a question-answer.
 */
export interface QuestionAnswersDeleteRequest {
  /** The ID of the question-answer. */
  id: string;
  /**
   * The ID of the question-answer.
   * @deprecated
   */
  question_answer_id?: string;
}

/**
 * question-answers-get-request
 * The request to get a question-answer.
 */
export interface QuestionAnswersGetRequest {
  /** The ID of the required question-answer. */
  id: string;
}

/**
 * question-answers-get-response
 * Get question-answer response.
 */
export interface QuestionAnswersGetResponse {
  question_answer: QuestionAnswer;
}

/**
 * question-answers-list-request
 * The request to list question-answers.
 */
export interface QuestionAnswersListRequest {
  /**
   * Filters for question-answer belonging to any of the provided
   * articles.
   * @example ["ARTICLE-12345"]
   */
  applies_to_articles?: string[];
  /**
   * Filters for question-answer belonging to any of the provided parts.
   * @example ["PROD-12345"]
   */
  applies_to_parts?: string[];
  /**
   * Filters for question-answers created by any of the provided users.
   * @example ["DEVU-12345"]
   */
  created_by?: string[];
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /**
   * The maximum number of question-answers to return. The default is
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
  /**
   * Filters for question-answers owned by any of the provided users.
   * @example ["DEVU-12345"]
   */
  owned_by?: string[];
}

/**
 * question-answers-list-response
 * List question-answers response.
 */
export interface QuestionAnswersListResponse {
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
  /** The question-answers entries matching the request. */
  question_answers: QuestionAnswer[];
  /**
   * Total number of question-answer items for the request.
   * @format int32
   */
  total: number;
}

/**
 * question-answers-update-request
 * The request to update a question-answer.
 */
export interface QuestionAnswersUpdateRequest {
  access_level?: AccessLevel;
  /**
   * Updated answer of the question-answer object, or unchanged if not
   * provided.
   */
  answer?: string;
  applies_to_articles?: QuestionAnswersUpdateRequestAppliesToArticles;
  applies_to_parts?: QuestionAnswersUpdateRequestAppliesToParts;
  /** The question-answer's ID. */
  id: string;
  owned_by?: QuestionAnswersUpdateRequestOwnedBy;
  /**
   * Updated question of the question-answer object, or unchanged if not
   * provided.
   */
  question?: string;
  shared_with?: QuestionAnswersUpdateRequestSharedWith;
  sources?: QuestionAnswersUpdateRequestSources;
  /** Status of the question answer. */
  status?: QuestionAnswerStatus;
  /**
   * Updated suggested_answer of the question-answer object, or
   * unchanged if not provided.
   */
  suggested_answer?: string;
  /**
   * Updated suggested_for_deletion of the question-answer object, or
   * unchanged if not provided.
   */
  suggested_for_deletion?: boolean;
  tags?: QuestionAnswersUpdateRequestTags;
  /**
   * Updated topic of the question-answer object, or unchanged if not
   * provided.
   */
  topic?: string;
  /** Updates whether the question-answer was verified by a user or not. */
  verified?: boolean;
}

/** question-answers-update-request-applies-to-articles */
export interface QuestionAnswersUpdateRequestAppliesToArticles {
  /**
   * Updates the article that the question-answer applies to.
   * @example ["ARTICLE-12345"]
   */
  set?: string[];
}

/** question-answers-update-request-applies-to-parts */
export interface QuestionAnswersUpdateRequestAppliesToParts {
  /**
   * Updates the parts that the question-answer applies to.
   * @example ["PROD-12345"]
   */
  set?: string[];
}

/** question-answers-update-request-owned-by */
export interface QuestionAnswersUpdateRequestOwnedBy {
  /**
   * Sets the owner IDs to the provided user IDs. This must not be
   * empty.
   * @example ["DEVU-12345"]
   */
  set?: string[];
}

/** question-answers-update-request-shared-with */
export interface QuestionAnswersUpdateRequestSharedWith {
  /** Sets the field to the provided membership list. */
  set?: SetSharedWithMembership[];
}

/** question-answers-update-request-sources */
export interface QuestionAnswersUpdateRequestSources {
  /**
   * Sets the sources that generated the question-answer.
   * @example ["ARTICLE-12345"]
   */
  set?: string[];
}

/** question-answers-update-request-tags */
export interface QuestionAnswersUpdateRequestTags {
  /** Sets the provided tags on the question-answer. */
  set?: SetTagWithValue[];
}

/** question-answers-update-response */
export interface QuestionAnswersUpdateResponse {
  question_answer: QuestionAnswer;
}

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

/**
 * resource-summary
 * Resource details.
 */
export interface ResourceSummary {
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
  /** Subtype corresponding to the custom type fragment. */
  subtype?: string;
  /** Tags associated with an object. */
  tags?: TagWithValue[];
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
   * @example "ACC-12345"
   */
  account?: string;
  /**
   * The IDs of the artifacts to associate with the Rev organization.
   * @example ["ARTIFACT-12345"]
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
  /** Tags associated with the Rev organization. */
  tags?: SetTagWithValue[];
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
 * rev-orgs-delete-request
 * Request object to delete a Rev organization.
 */
export interface RevOrgsDeleteRequest {
  /**
   * The ID of Rev organization to delete.
   * @example "REV-AbCdEfGh"
   */
  id: string;
}

/**
 * rev-orgs-delete-response
 * The response to deleting a Rev organization.
 */
export type RevOrgsDeleteResponse = object;

/**
 * rev-orgs-get-request
 * Request object to get Rev organization's information.
 */
export interface RevOrgsGetRequest {
  /**
   * The ID of account for which default Rev organization is to be
   * fetched.
   * @example "ACC-12345"
   */
  account?: string;
  /**
   * The ID of the required Rev organization.
   * @example "REV-AbCdEfGh"
   */
  id?: string;
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
   * @example ["ACC-12345"]
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
  /** Filters for custom fields. */
  custom_fields?: object;
  /** Array of display names of Rev orgs to be filtered. */
  display_name?: string[];
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
  /** List of tags to be filtered. */
  tags?: string[];
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
   * @example "ACC-12345"
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
   * @example "REV-AbCdEfGh"
   */
  id: string;
  /** Tags associated with the Rev organization. */
  tags?: SetTagWithValue[];
  /** The tier of the RevOrg. */
  tier?: string;
}

/** rev-orgs-update-request-artifacts */
export interface RevOrgsUpdateRequestArtifacts {
  /**
   * Sets the IDs to the provided artifact IDs.
   * @example ["ARTIFACT-12345"]
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
  /** Subtype corresponding to the custom type fragment. */
  subtype?: string;
  /** Tags associated with the object. */
  tags?: TagWithValue[];
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
   * The ID of the account to which the created Rev user is associated.
   * @example "ACC-12345"
   */
  account?: string;
  /**
   * The IDs of the artifacts to associate with the Rev user.
   * @example ["ARTIFACT-12345"]
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
  /** Phone numbers, in E.164 format, of the Rev user. */
  phone_numbers?: string[];
  /**
   * The ID of the Rev organization to which the created Rev user is
   * associated.
   * @example "REV-AbCdEfGh"
   */
  rev_org?: string;
  /** Tags associated with the Rev user. */
  tags?: SetTagWithValue[];
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
  /** Filters for custom fields. */
  custom_fields?: object;
  /** List of emails of Rev users to be filtered. */
  email?: string[];
  /** List of external refs to filter Rev users for. */
  external_ref?: string[];
  /** Value of is_verified field to filter the Rev users. */
  is_verified?: boolean;
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
  /** List of phone numbers, in E.164 format, to filter Rev users on. */
  phone_numbers?: string[];
  /**
   * List of IDs of Rev organizations to be filtered.
   * @example ["REV-AbCdEfGh"]
   */
  rev_org?: string[];
  /** Fields to sort the Rev users by and the direction to sort them. */
  sort_by?: string[];
  /** List of tags to be filtered. */
  tags?: string[];
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
  /** The phone numbers, in E.164 format, of the Rev user. */
  phone_numbers?: string[];
  /** Tags associated with the Rev user. */
  tags?: SetTagWithValue[];
}

/** rev-users-update-request-artifacts */
export interface RevUsersUpdateRequestArtifacts {
  /**
   * Sets the IDs to the provided artifact IDs.
   * @example ["ARTIFACT-12345"]
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
 * schema-field-create-view-ui-metadata
 * Create view UI hint overrides.
 */
export interface SchemaFieldCreateViewUiMetadata {
  /** Whether field is hidden in the UI create view. */
  is_hidden?: boolean;
}

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
  | SchemaStructFieldDescriptor
  | SchemaTextFieldDescriptor
  | SchemaTimestampFieldDescriptor
  | SchemaTokensFieldDescriptor
  | SchemaUenumFieldDescriptor
  | SchemaUnknownFieldDescriptor
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
  | SchemaStructListFieldDescriptor
  | SchemaTextListFieldDescriptor
  | SchemaTimestampListFieldDescriptor
  | SchemaTokensListFieldDescriptor
  | SchemaUenumListFieldDescriptor
) & {
  base_type: SchemaFieldDescriptorArrayTypeBaseType;
  /**
   * The exact array length.
   * @format int64
   */
  eq_items?: number;
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
  Struct = 'struct',
  Text = 'text',
  Timestamp = 'timestamp',
  Tokens = 'tokens',
  Uenum = 'uenum',
}

/** schema-field-descriptor-base */
export interface SchemaFieldDescriptorBase {
  /** Description of the field. */
  description?: string;
  /** Whether this field is filterable, groupable and sortable. */
  is_filterable?: boolean;
  /** Whether this field is immutable or not. */
  is_immutable?: boolean;
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
  /** The schema of oasis specific fields. */
  oasis?: SchemaFieldOasisMetadata;
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
  Struct = 'struct',
  Text = 'text',
  Timestamp = 'timestamp',
  Tokens = 'tokens',
  Uenum = 'uenum',
  Unknown = 'unknown',
}

/**
 * schema-field-detail-view-ui-metadata
 * Detail view UI hint overrides.
 */
export interface SchemaFieldDetailViewUiMetadata {
  /** Whether the field is hidden in the UI detail view. */
  is_hidden?: boolean;
}

/**
 * schema-field-filter-view-ui-metadata
 * Filter view UI hint overrides.
 */
export interface SchemaFieldFilterViewUiMetadata {
  /** Whether field is hidden in the UI filter view. */
  is_hidden?: boolean;
}

/**
 * schema-field-list-view-ui-metadata
 * List view UI hint overrides.
 */
export interface SchemaFieldListViewUiMetadata {
  /** Whether the field is hidden in the UI list view. */
  is_hidden?: boolean;
}

/**
 * schema-field-mfz-metadata
 * The schema of MFZ specific fields.
 */
export type SchemaFieldMfzMetadata = object;

/**
 * schema-field-oasis-metadata
 * The schema of oasis specific fields.
 */
export type SchemaFieldOasisMetadata = object;

/**
 * schema-field-summary-view-ui-metadata
 * Summary view UI hint overrides.
 */
export interface SchemaFieldSummaryViewUiMetadata {
  /** Whether field is hidden in the UI summary view. */
  is_hidden?: boolean;
}

/**
 * schema-field-uenum-value
 * A unified enum value.
 */
export type SchemaFieldUenumValue = object;

/**
 * schema-field-ui-metadata
 * The schema of ui specific fields.
 */
export interface SchemaFieldUiMetadata {
  /** Create view UI hint overrides. */
  create_view?: SchemaFieldCreateViewUiMetadata;
  /** Detail view UI hint overrides. */
  detail_view?: SchemaFieldDetailViewUiMetadata;
  /** The display name of the field. */
  display_name?: string;
  /** Filter view UI hint overrides. */
  filter_view?: SchemaFieldFilterViewUiMetadata;
  /** An optional group name for the field. */
  group_name?: string;
  /** Whether the field is active in the UI detail view. */
  is_active_in_detail_view?: boolean;
  /** Whether the field supports bulk action. */
  is_bulk_action_enabled?: boolean;
  /** Whether the field is groupable in the UI. */
  is_groupable?: boolean;
  /** Whether the field is hidden in the UI. */
  is_hidden?: boolean;
  /** Whether the field is hidden in the UI during creation. */
  is_hidden_during_create?: boolean;
  /** Whether the field is read-only in the UI. */
  is_read_only?: boolean;
  /** Whether the field is mandatory in the UI. */
  is_required?: boolean;
  /** Whether the field is shown in the UI summary view. */
  is_shown_in_summary?: boolean;
  /** Whether the field is sortable in the UI. */
  is_sortable?: boolean;
  /** List view UI hint overrides. */
  list_view?: SchemaFieldListViewUiMetadata;
  /** A placeholder for the field. */
  placeholder?: string;
  /** Summary view UI hint overrides. */
  summary_view?: SchemaFieldSummaryViewUiMetadata;
  /** Tooltip for the field. */
  tooltip?: string;
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

/** schema-struct-field-descriptor */
export type SchemaStructFieldDescriptor = SchemaFieldDescriptorBase & {
  /** Default value. */
  default_value?: object;
};

/** schema-struct-list-field-descriptor */
export type SchemaStructListFieldDescriptor = SchemaFieldDescriptorBase & {
  /** Default value. */
  default_value?: object[];
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

/** schema-uenum-field-descriptor */
export type SchemaUenumFieldDescriptor = SchemaFieldDescriptorBase & {
  /** Allowed values for the field. */
  allowed_values: SchemaFieldUenumValue[];
  /**
   * Default value.
   * @format int64
   */
  default_value?: number;
};

/** schema-uenum-list-field-descriptor */
export type SchemaUenumListFieldDescriptor = SchemaFieldDescriptorBase & {
  /** Allowed values for the field. */
  allowed_values: SchemaFieldUenumValue[];
  /** Default value. */
  default_value?: number[];
};

/** schema-unknown-field-descriptor */
export type SchemaUnknownFieldDescriptor = SchemaFieldDescriptorBase;

/**
 * search-core-request
 * Search request.
 */
export interface SearchCoreRequest {
  /**
   * The cursor from where to begin iteration. Start from beginning if
   * not provided.
   */
  cursor?: string;
  /**
   * The maximum number of items to return in a page. The default is
   * '10'.
   * @format int32
   */
  limit?: number;
  /** The namespaces to search in. */
  namespaces?: SearchNamespace[];
  /**
   * The query string. Search query language:
   * https://docs.devrev.ai/product/search#fields
   */
  query: string;
  /** Search sort by parameters. */
  sort_by?: SearchSortByParam;
  /** Search sort order parameters. */
  sort_order?: SearchSortOrderParam;
}

/**
 * search-core-response
 * Search response.
 */
export interface SearchCoreResponse {
  /**
   * The cursor from where to begin iteration. Start from beginning if
   * not provided.
   */
  cursor?: string;
  /** The search results. */
  results: SearchResult[];
}

/** The namespaces for hybrid search. */
export enum SearchHybridNamespace {
  Article = 'article',
  Conversation = 'conversation',
  Dataset = 'dataset',
  Incident = 'incident',
  Issue = 'issue',
  Part = 'part',
  QuestionAnswer = 'question_answer',
  Ticket = 'ticket',
  Widget = 'widget',
  Work = 'work',
}

/**
 * search-hybrid-request
 * Request for search with exact, prefix and infix matches.
 */
export interface SearchHybridRequest {
  /**
   * The maximum number of items to return in a page. The default is
   * '10'.
   * @format int32
   * @min 0
   * @max 50
   */
  limit?: number;
  /** The namespaces for hybrid search. */
  namespace: SearchHybridNamespace;
  /**
   * The query string.
   * @minLength 1
   * @maxLength 400
   */
  query: string;
  /**
   * The weightage for semantic search. Values between 0 and 1 are
   * accepted.
   * @format float
   * @min 0
   * @max 1
   */
  semantic_weight?: number;
}

/**
 * search-hybrid-response
 * Hybrid search response.
 */
export interface SearchHybridResponse {
  /** The search results. */
  results: SearchResult[];
}

/** The namespaces to search in. */
export enum SearchNamespace {
  Account = 'account',
  Article = 'article',
  Capability = 'capability',
  Component = 'component',
  Conversation = 'conversation',
  CustomObject = 'custom_object',
  CustomPart = 'custom_part',
  CustomWork = 'custom_work',
  Dashboard = 'dashboard',
  DevUser = 'dev_user',
  Enhancement = 'enhancement',
  Feature = 'feature',
  Group = 'group',
  Issue = 'issue',
  Linkable = 'linkable',
  Microservice = 'microservice',
  ObjectMember = 'object_member',
  Opportunity = 'opportunity',
  Product = 'product',
  Project = 'project',
  QuestionAnswer = 'question_answer',
  RevOrg = 'rev_org',
  RevUser = 'rev_user',
  Runnable = 'runnable',
  ServiceAccount = 'service_account',
  SysUser = 'sys_user',
  Tag = 'tag',
  Task = 'task',
  Ticket = 'ticket',
  Vista = 'vista',
}

/** search-result */
export type SearchResult = (
  | AccountSearchSummary
  | ArticleSearchSummary
  | ArtifactSearchSummary
  | ConversationSearchSummary
  | CustomObjectSearchSummary
  | DashboardSearchSummary
  | GroupSearchSummary
  | LinkSearchSummary
  | ObjectMemberSearchSummary
  | OrgSearchSummary
  | PartSearchSummary
  | QuestionAnswerSearchSummary
  | TagSearchSummary
  | UserSearchSummary
  | VistaSearchSummary
  | WorkSearchSummary
) & {
  type: SearchResultType;
};

export enum SearchResultType {
  Account = 'account',
  Article = 'article',
  Artifact = 'artifact',
  Conversation = 'conversation',
  CustomObject = 'custom_object',
  Dashboard = 'dashboard',
  Group = 'group',
  Link = 'link',
  ObjectMember = 'object_member',
  Org = 'org',
  Part = 'part',
  QuestionAnswer = 'question_answer',
  Tag = 'tag',
  User = 'user',
  Vista = 'vista',
  Work = 'work',
}

/** Search sort by parameters. */
export enum SearchSortByParam {
  CreatedDate = 'created_date',
  ModifiedDate = 'modified_date',
  Relevance = 'relevance',
}

/** Search sort order parameters. */
export enum SearchSortOrderParam {
  Asc = 'asc',
  Desc = 'desc',
}

/** search-summary-base */
export interface SearchSummaryBase {
  /**
   * Timestamp when the object was last modified.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  modified_date?: string;
  /** Text snippet where the search hit occurred. */
  snippet?: string;
}

/** send-notification */
export type SendNotification = SendNotificationGenericNotificationEntry & {
  type: SendNotificationType;
  /** The ID of the parent object associated with the notification. */
  parent?: string;
  /** The ID of the user for whom the notification was generated. */
  receiver: string;
  /**
   * Timestamp of the event that triggered the notification.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  timestamp?: string;
};

/** send-notification-generic-notification-entry */
export interface SendNotificationGenericNotificationEntry {
  /** ID used to group notifications in the inbox for the same parent. */
  event_id?: string;
  /** Event type of the notification. */
  event_type: GenericNotificationEventType;
  /** Metadata for the objects that triggered the notification. */
  metadata: SendNotificationGenericNotificationEntryMetadata[];
}

/** send-notification-generic-notification-entry-metadata */
export interface SendNotificationGenericNotificationEntryMetadata {
  action?: SendNotificationGenericNotificationEntryNotificationAction;
  /** The ID of the content template for the content of the notification. */
  content_template: string;
  /** Inputs required for the template. */
  inputs?: object;
}

/** send-notification-generic-notification-entry-notification-action */
export interface SendNotificationGenericNotificationEntryNotificationAction {
  type?: 'clickable_action';
  clickable_action?: SendNotificationGenericNotificationEntryNotificationActionClickableAction;
}

/** send-notification-generic-notification-entry-notification-action-clickable-action */
export interface SendNotificationGenericNotificationEntryNotificationActionClickableAction {
  type?: 'object' | 'url';
  /**
   * The ID of the object that the notification should redirect the user
   * to when selected.
   */
  object?: string;
  /** The URL to redirect the user to. */
  url?: string;
}

export enum SendNotificationType {
  GenericNotification = 'generic_notification',
}

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

/** set-issue-selector */
export interface SetIssueSelector {
  /**
   * Custom fields on the issue with their fully qualified names and the
   * associated with their exact allowed values. The SLA policy applies
   * to issues where all named custom fields have exactly the specified
   * values.
   */
  custom_fields?: object;
  /**
   * The SLA policy applies to the issues of these parts.
   * @example ["PROD-12345"]
   */
  parts?: string[];
  /**
   * The SLA policy applies to the issues of these revorgs.
   * @example ["REV-AbCdEfGh"]
   */
  rev_orgs?: string[];
  /** The SLA policy applies to issues with these stages. */
  stage_name?: string[];
  /** The issue subtype for which the SLA policy applies. */
  subtype?: string[];
  /**
   * The SLA policy applies to issues with these tags. If empty, the tag
   * filter isn't applied.
   * @example ["TAG-12345"]
   */
  tags?: string[];
}

/** set-org-schedule-fragment-summary */
export interface SetOrgScheduleFragmentSummary {
  /** Organization schedule fragment ID. */
  id: string;
}

/**
 * set-shared-with-membership
 * Information about the role the member receives due to the share.
 */
export type SetSharedWithMembership = object;

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
  issue_selector?: SetIssueSelector;
  /**
   * The SLA policy applies to the tickets of these parts.
   * @example ["PROD-12345"]
   */
  parts?: string[];
  /** The SLA policy applies to conversations with these priorities. */
  priority?: SlaSelectorPriority[];
  /** The SLA policy applies to tickets with these severities. */
  severity?: SlaSelectorSeverity[];
  /** The SLA policy applies to conversations with these sources. */
  source_channel?: string[];
  /** The SLA policy applies to tickets with these subtypes. */
  subtype?: string[];
  /**
   * The SLA policy applies to items with these tags.
   * @example ["TAG-12345"]
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
   * @example "TAG-12345"
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

/**
 * shared-with-membership-filter
 * Filter on target item based on intended audience.
 */
export type SharedWithMembershipFilter = object;

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
  /** Type of the SLA. */
  sla_type?: SlaType;
  /**
   * Status determines how an item can be used. In 'draft' status an item
   * can be edited but can't be used. When 'published' the item can longer
   * be edited but can be used. 'Archived' is read-only.
   */
  status: SlaStatus;
};

/**
 * The object types on which the SLA applies. An external SLA can apply to
 * multiple object types, but an internal SLA can apply to only one object
 * type.
 */
export enum SlaAppliesTo {
  Conversation = 'conversation',
  Issue = 'issue',
  Ticket = 'ticket',
}

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
  Issue = 'issue',
  Ticket = 'ticket',
}

/** The SLA policy applies to conversations with these priorities. */
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

/** sla-summary */
export type SlaSummary = AtomBaseSummary & {
  /** Human-readable name. */
  name: string;
  /** Type of the SLA. */
  sla_type?: SlaType;
  /**
   * Status determines how an item can be used. In 'draft' status an item
   * can be edited but can't be used. When 'published' the item can longer
   * be edited but can be used. 'Archived' is read-only.
   */
  status: SlaStatus;
};

/**
 * sla-summary-filter
 * The filter for SLA summary.
 */
export interface SlaSummaryFilter {
  /** Filters for records with any of the provided SLA stages. */
  stage?: SlaSummaryStage[];
  /** Provides ways to specify date ranges on objects. */
  target_time?: DateFilter;
}

/**
 * The stage of the SLA. This is the metric stage which is closest to
 * breach.
 */
export enum SlaSummaryStage {
  Breached = 'breached',
  Completed = 'completed',
  Paused = 'paused',
  Running = 'running',
  Warning = 'warning',
}

/** sla-tracker */
export type SlaTracker = AtomBase & {
  /** Details of the object on which the SLA is being tracked. */
  applies_to_id?: string;
  /** Summary of the metrics target being tracked in the SLA tracker. */
  metric_target_summaries: ArchetypeMetricTarget[];
  sla?: SlaSummary;
  /**
   * Details of the applicable SLA policy. Can be omitted if no sla
   * applies, or if no policy of the sla applies at the moment.
   */
  sla_policy_id?: string;
  /** SLA stage of the object being tracked. */
  stage?: string;
  /**
   * It is an indicator of whether the SLA has ever been breached
   * (missed). If not, it shows whether the SLA is completed, in
   * progress, or nil - if no policy is applied.
   */
  status?: string;
};

/** sla-tracker-summary */
export type SlaTrackerSummary = AtomBaseSummary;

/** sla-trackers-get-request */
export interface SlaTrackersGetRequest {
  /** The ID of the SLA tracker to get. */
  id: string;
}

/** sla-trackers-get-response */
export interface SlaTrackersGetResponse {
  sla_tracker: SlaTracker;
}

/** Type of the SLA. */
export enum SlaType {
  External = 'external',
  Internal = 'internal',
}

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
   * @example ["REV-AbCdEfGh"]
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
  account_selector?: AccountsFilters;
  /** The object types this SLA can apply to. */
  applies_to?: SlaAppliesTo[];
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
  /** Type of the SLA. */
  sla_type?: SlaType;
}

/** slas-create-response */
export interface SlasCreateResponse {
  sla: Sla;
}

export enum SlasFilterAppliesToOperatorType {
  All = 'all',
  Any = 'any',
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
  /** The object types the SLA applies to. */
  applies_to?: SlaAppliesTo[];
  applies_to_op?: SlasFilterAppliesToOperatorType;
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
  /** The SLA types the filter matches. */
  sla_type?: SlaType[];
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
  account_selector?: AccountsFilters;
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

/** snap-in-version-summary */
export type SnapInVersionSummary = AtomBaseSummary;

/** snap-ins-resources-request */
export interface SnapInsResourcesRequest {
  /** The ID of the snap-in to get resources for. */
  id: string;
  /** The ID of the user to get resources for. */
  user: string;
}

/** snap-ins-resources-response */
export interface SnapInsResourcesResponse {
  /** The event sources for the snap-in. */
  event_sources?: Record<string, string>;
  /** The inputs for the snap-in. */
  inputs?: object;
  /** Map of keyring names and its data. */
  keyrings?: Record<string, SnapInsResourcesResponseKeyringData>;
  snap_in_version: SnapInVersionSummary;
}

/** snap-ins-resources-response-keyring-data */
export interface SnapInsResourcesResponseKeyringData {
  /** The ID of the keyring. */
  id: string;
  /** The secret value of the keyring. This must be handled with caution. */
  secret: string;
}

/** snap-widget */
export type SnapWidget = EmailPreviewWidget & {
  type: SnapWidgetType;
};

/** snap-widget-base */
export type SnapWidgetBase = AtomBase & {
  /** A human readable name for the snap widget. */
  name: string;
  /** Logical grouping of snap widgets. Useful for filtering. */
  namespace?: SnapWidgetNamespace;
  /** The status of the snap widget. */
  status: SnapWidgetStatus;
};

/** Logical grouping of snap widgets. Useful for filtering. */
export enum SnapWidgetNamespace {
  CommentSuggestionReplies = 'comment_suggestion_replies',
  EmailPreview = 'email_preview',
  LinkPreview = 'link_preview',
  PlugNudge = 'plug_nudge',
}

/** The status of the snap widget. */
export enum SnapWidgetStatus {
  Draft = 'draft',
  Published = 'published',
}

export enum SnapWidgetType {
  EmailPreview = 'email_preview',
}

/** snap-widgets-create-request */
export type SnapWidgetsCreateRequest = CreateEmailPreviewWidget & {
  type: SnapWidgetsCreateRequestType;
  /** A human readable name for the snap widget. */
  name: string;
  /** Logical grouping of snap widgets. Useful for filtering. */
  namespace?: SnapWidgetNamespace;
  /** The status of the snap widget. */
  status?: SnapWidgetStatus;
};

export enum SnapWidgetsCreateRequestType {
  EmailPreview = 'email_preview',
}

/** snap-widgets-create-response */
export interface SnapWidgetsCreateResponse {
  snap_widget: SnapWidget;
}

/**
 * stage
 * Describes the current stage of a object.
 */
export type Stage = object;

/** stage-diagram-summary */
export type StageDiagramSummary = AtomBaseSummary;

/**
 * stage-filter
 * The filter for stages.
 */
export interface StageFilter {
  /** Filters for records in the provided stage(s) by name. */
  name?: string[];
}

/**
 * stage-init
 * Sets an object's initial stage.
 */
export interface StageInit {
  /**
   * The ID of the custom stage. If this is set, the name field is
   * ignored.
   */
  id?: string;
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
  /**
   * The ID of the updated custom stage, otherwise unchanged if not set.
   * If this is set, the name field is ignored.
   */
  stage?: string;
}

/** Type of stage validation options when creating an object. */
export enum StageValidationOptionForCreate {
  AllowNonStart = 'allow_non_start',
}

/** Type of state validation options when updating the stage of an object. */
export enum StageValidationOptionForUpdate {
  AllowInvalidTransition = 'allow_invalid_transition',
}

/** staged-info-filter */
export interface StagedInfoFilter {
  /** Filters for issues that are staged. */
  is_staged?: boolean;
}

/**
 * stock-field-override
 * A stock field override.
 */
export type StockFieldOverride = object;

/** stock-schema-fragment */
export type StockSchemaFragment = AtomBase & {
  /** Description of the schema. */
  description?: string;
  /** List of all fields in this schema. */
  fields: SchemaFieldDescriptor[];
  /** Leaf type this fragment applies to. */
  leaf_type?: string;
  new_fragment_ref?: AtomSummary;
  old_fragment_ref?: AtomSummary;
  /** Title of the schema. */
  title?: string;
};

/** stock-schema-fragments-get-request */
export interface StockSchemaFragmentsGetRequest {
  /** The ID of the stock schema fragment. */
  id?: string;
  /** The leaf type this fragment applies to. */
  leaf_type?: string;
}

/** stock-schema-fragments-get-response */
export interface StockSchemaFragmentsGetResponse {
  fragment: StockSchemaFragment;
}

/** stock-schema-fragments-list-request */
export interface StockSchemaFragmentsListRequest {
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  filter_preset?: StockSchemaFragmentsListRequestFilterPreset;
  /** The list of leaf types. */
  leaf_type?: string[];
  /**
   * The maximum number of items.
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
   * List of fields which are not required in the payload and can be
   * pruned away.
   */
  prune?: StockSchemaFragmentsListRequestPrune[];
  /** The list of fields to sort the items by and how to sort them. */
  sort_by?: string[];
}

export enum StockSchemaFragmentsListRequestFilterPreset {
  CustomizableTypesPreset = 'customizable_types_preset',
  NoPreset = 'no_preset',
}

export enum StockSchemaFragmentsListRequestPrune {
  CompositeSchemas = 'composite_schemas',
  Fields = 'fields',
}

/** stock-schema-fragments-list-response */
export interface StockSchemaFragmentsListResponse {
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
  /** The stock schema fragments. */
  result: StockSchemaFragment[];
}

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

/** survey */
export type Survey = AtomBase & {
  /** Description of the survey. */
  description?: string;
  /** Text posted when introducing the survey to the responder. */
  introductory_text?: string;
  /**
   * Survey name associated with schema. This name would be unique per
   * dev org.
   */
  name?: string;
  /** Text posted after the response is collected. */
  response_text?: string;
  /** List of all fields in the schema. */
  schema?: SchemaFieldDescriptor[];
  /** List of all the fields and their respective metadata in the schema. */
  schema_with_metadata?: SurveyFieldWithMetadata[];
};

/**
 * survey-aggregation-filter
 * The filter for survey aggregation.
 */
export type SurveyAggregationFilter = object;

/**
 * survey-field-with-metadata
 * Field descriptors with additional metadata for surveys.
 */
export interface SurveyFieldWithMetadata {
  /** Set of field attributes. */
  field?: SchemaFieldDescriptor;
  /** Additional metadata for the input field. */
  metadata?: object;
  /** The question linked to the input field. */
  question?: string;
}

/** survey-response */
export type SurveyResponse = AtomBase & {
  /** The unique ID associated with the dispatched survey. */
  dispatch_id?: string;
  /** Source channels on which the survey is sent. */
  dispatched_channels?: EnumValue[];
  /** The ID of the object for which survey is taken. */
  object?: string;
  recipient?: UserSummary;
  /** Response for the survey. */
  response?: object;
  /** The properties of an enum value. */
  response_channel?: EnumValue;
  /** The properties of an enum value. */
  stage?: EnumValue;
  /** The ID of the survey for which response is taken. */
  survey?: string;
};

/** surveys-create-request */
export interface SurveysCreateRequest {
  /** Description about the survey. */
  description?: string;
  /** Text posted when introducing the survey to the responder. */
  introductory_text?: string;
  /** The survey's name. */
  name: string;
  /** Text posted after the response is collected. */
  response_text?: string;
  /** Schema for the survey. */
  schema?: FieldDescriptor[];
  /** The schema with metadata for the survey. */
  schema_with_metadata?: SurveyFieldWithMetadata[];
}

/** surveys-create-response */
export interface SurveysCreateResponse {
  survey: Survey;
}

/** surveys-delete-request */
export interface SurveysDeleteRequest {
  /** ID of the survey being deleted. */
  id: string;
}

/** surveys-delete-response */
export type SurveysDeleteResponse = object;

/** surveys-list-request */
export interface SurveysListRequest {
  /**
   * Filters for surveys created by any of these users.
   * @example ["DEVU-12345"]
   */
  created_by?: string[];
  /** Provides ways to specify date ranges on objects. */
  created_date?: DateFilter;
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /**
   * The maximum number of surveys to return. If not set, then the
   * default is '50'.
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
  /** Filters for surveys by name(s). */
  name?: string[];
  /** Fields to sort the surveys by and the direction to sort them. */
  sort_by?: string[];
}

/** surveys-list-response */
export interface SurveysListResponse {
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
  /** The list of the surveys. */
  surveys: Survey[];
}

/** surveys-responses-list-request */
export interface SurveysResponsesListRequest {
  /**
   * Filters for survey responses created by any of these users.
   * @example ["DEVU-12345"]
   */
  created_by?: string[];
  /** Provides ways to specify date ranges on objects. */
  created_date?: DateFilter;
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /**
   * The maximum number of survey responses to return. If not set, then
   * the default is '50'.
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
  /**
   * Filters for survey responses created for the objects.
   * @example ["ACC-12345"]
   */
  objects?: string[];
  /**
   * Filters for survey responses dispatched to any of these users.
   * @example ["DEVU-12345"]
   */
  recipient?: string[];
  /**
   * Fields to sort the survey responses by and the direction to sort
   * them.
   */
  sort_by?: string[];
  /** Filters for survey response stages. */
  stages?: number[];
  /** Filters for survey responses for the provided survey IDs. */
  surveys?: string[];
}

/** surveys-responses-list-response */
export interface SurveysResponsesListResponse {
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
  /** The list of the survey responses. */
  survey_responses: SurveyResponse[];
}

/** surveys-send-request */
export interface SurveysSendRequest {
  email: SurveysSendRequestEmail;
}

/** surveys-send-request-email */
export interface SurveysSendRequestEmail {
  /** Message body for a survey email. */
  body: string;
  /** Recipients list for a survey email. */
  recipients: string[];
  /** Sender email address from which an email is sent. */
  sender: string;
  /** Subject for an email where survey is sent. */
  subject: string;
}

/** surveys-send-response */
export type SurveysSendResponse = object;

/** surveys-submit-request */
export interface SurveysSubmitRequest {
  /** The unique ID associated with the dispatched survey. */
  dispatch_id?: string;
  /** The ordinals of the source channels on which the survey is sent. */
  dispatched_channels?: number[];
  /**
   * The ID of the object this survey is on (e.g. ticket, conversation,
   * etc).
   * @example "ACC-12345"
   */
  object: string;
  /**
   * The unique ID associated with the recipient of the survey.
   * @example "DEVU-12345"
   */
  recipient?: string;
  /** Survey response submitted for the object. */
  response?: object;
  /**
   * The response score for the survey. Only applicable for CSAT and
   * NPS.
   * @format int32
   */
  response_score?: number;
  /** The source channel from which survey response is submitted. */
  source_channel?: string;
  /**
   * The stage ordinal of the survey response object.
   * @format int64
   */
  stage?: number;
  /** The ID of the survey to submit the response to. */
  survey: string;
}

/** surveys-submit-response */
export type SurveysSubmitResponse = object;

/** sync-metadata-filter */
export interface SyncMetadataFilter {
  last_sync_in?: SyncMetadataFilterSyncInFilter;
  last_sync_out?: SyncMetadataFilterSyncOutFilter;
  /** Filters for issues synced from this specific origin system. */
  origin_system?: string[];
}

/** sync-metadata-filter-sync-in-filter */
export interface SyncMetadataFilterSyncInFilter {
  /** Filters for works with selected sync statuses. */
  status?: SyncMetadataFilterSyncInFilterStatus[];
  /** Provides ways to specify date ranges on objects. */
  sync_date?: DateFilter;
  /** Filters for works modified with selected sync units. */
  sync_unit?: string[];
}

export enum SyncMetadataFilterSyncInFilterStatus {
  Failed = 'failed',
  Modified = 'modified',
  Staged = 'staged',
  Succeeded = 'succeeded',
}

/** sync-metadata-filter-sync-out-filter */
export interface SyncMetadataFilterSyncOutFilter {
  /** Filters for works with selected sync statuses. */
  status?: SyncMetadataFilterSyncOutFilterStatus[];
  /** Provides ways to specify date ranges on objects. */
  sync_date?: DateFilter;
  /** Filters for works modified with selected sync units. */
  sync_unit?: string[];
}

export enum SyncMetadataFilterSyncOutFilterStatus {
  Failed = 'failed',
  Succeeded = 'succeeded',
}

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
   * @example "ARTIFACT-12345"
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

/** tag */
export type Tag = AtomBase & {
  /**
   * The allowed values for the tag, where a value is provided when a
   * tag is associated with an object. If empty, then no value should be
   * provided when the association is made.
   */
  allowed_values?: string[];
  /**
   * An informative description for the tag that should provide context
   * on the tag's purpose and usage.
   */
  description?: string;
  /**
   * The name of the tag, which denotes the logical concept by which all
   * tagged objects will be associated. The name is guaranteed to be
   * unique.
   */
  name: string;
};

/** tag-search-summary */
export type TagSearchSummary = SearchSummaryBase & {
  tag: TagSummary;
};

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

/** tag-with-value-filter */
export interface TagWithValueFilter {
  /**
   * The ID of the tag.
   * @example "TAG-12345"
   */
  id?: string;
  /**
   * The value for the object's association with the tag. If specified,
   * the value must be one that's specified in the tag's allowed values.
   */
  value?: string;
}

/**
 * tags-create-request
 * The request to create a new tag.
 */
export interface TagsCreateRequest {
  /**
   * The allowed values for the tag, or empty if no values are
   * permitted.
   */
  allowed_values?: string[];
  /** The description for the tag. */
  description?: string;
  /** The name for the tag, which must be unique across all tags. */
  name: string;
}

/**
 * tags-create-response
 * The response to creating a new tag.
 */
export interface TagsCreateResponse {
  tag: Tag;
}

/**
 * tags-delete-request
 * The request to delete a tag.
 */
export interface TagsDeleteRequest {
  /**
   * The ID of the tag to delete.
   * @example "TAG-12345"
   */
  id: string;
}

/**
 * tags-delete-response
 * The response for deleting a tag.
 */
export type TagsDeleteResponse = object;

/**
 * tags-get-request
 * The request to get a tag's information.
 */
export interface TagsGetRequest {
  /**
   * The requested tag's ID.
   * @example "TAG-12345"
   */
  id: string;
}

/**
 * tags-get-response
 * The response to getting a tag's information.
 */
export interface TagsGetResponse {
  tag: Tag;
}

/**
 * tags-list-request
 * The request to get information about a list of tags.
 */
export interface TagsListRequest {
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /**
   * The maximum number of tags to return. The default is '50'.
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
  /** Filters for tags with the provided names. */
  name?: string[];
  /** Fields to sort tags by and the direction to sort them. */
  sort_by?: string[];
}

/**
 * tags-list-response
 * The response to listing the tags.
 */
export interface TagsListResponse {
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
  /** The list of tags. */
  tags: Tag[];
}

/**
 * tags-update-allowed-values
 * Specifies an update to a tag's allowed values.
 */
export interface TagsUpdateAllowedValues {
  /** Sets the allowed values for the tag. */
  set?: string[];
}

/**
 * tags-update-request
 * The request to update a tag.
 */
export interface TagsUpdateRequest {
  /** Specifies an update to a tag's allowed values. */
  allowed_values?: TagsUpdateAllowedValues;
  /** The updated description of the tag. */
  description?: string;
  /**
   * The ID of the tag to update.
   * @example "TAG-12345"
   */
  id: string;
  /**
   * The updated name of the tag. The name must be unique across all
   * tags.
   */
  name?: string;
}

/**
 * tags-update-response
 * The response for updating a tag.
 */
export interface TagsUpdateResponse {
  tag: Tag;
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

/** tenant-fragment-summary */
export type TenantFragmentSummary = CustomSchemaFragmentBaseSummary;

/** ticket */
export type Ticket = WorkBase & {
  /** Channels of the ticket. */
  channels?: TicketChannels[];
  group?: GroupSummary;
  /** Whether the ticket needs a response. */
  needs_response?: boolean;
  rev_org?: OrgSummary;
  /** The properties of an enum value. */
  sentiment?: EnumValue;
  /** Severity of the ticket. */
  severity?: TicketSeverity;
  sla_tracker?: SlaTrackerSummary;
  /** Source channel of the ticket. */
  source_channel?: string;
};

/** Channels of the ticket. */
export enum TicketChannels {
  Email = 'email',
  Plug = 'plug',
  Slack = 'slack',
  Twilio = 'twilio',
  TwilioSms = 'twilio_sms',
}

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

/** timeline-change-event */
export type TimelineChangeEvent = TimelineEntryBase & {
  /** A timeline change event. */
  event?: TimelineChangeEventEvent;
};

/**
 * timeline-change-event-created
 * A creation event.
 */
export interface TimelineChangeEventCreated {
  object?: AtomSummary;
}

/**
 * timeline-change-event-deleted
 * A deletion event.
 */
export interface TimelineChangeEventDeleted {
  /** The ID correspending to the deleted object. */
  object_id?: string;
}

/**
 * timeline-change-event-event
 * A timeline change event.
 */
export interface TimelineChangeEventEvent {
  /** The type of the event. */
  type?: TimelineChangeEventEventType;
  /** A creation event. */
  created?: TimelineChangeEventCreated;
  /** A deletion event. */
  deleted?: TimelineChangeEventDeleted;
  /** A linking event. */
  linked?: TimelineChangeEventLinked;
  /** An update event. */
  updated?: TimelineChangeEventUpdated;
}

/** The type of the event. */
export enum TimelineChangeEventEventType {
  Annotated = 'annotated',
  Created = 'created',
  Deleted = 'deleted',
  Linked = 'linked',
  Updated = 'updated',
}

/**
 * timeline-change-event-linked
 * A linking event.
 */
export interface TimelineChangeEventLinked {
  link?: LinkSummary;
}

/** timeline-change-event-summary */
export type TimelineChangeEventSummary = TimelineEntryBaseSummary;

/**
 * timeline-change-event-updated
 * An update event.
 */
export interface TimelineChangeEventUpdated {
  /** List of field changes. */
  field_deltas?: FieldDelta[];
  /** Type of DevRev object. */
  object_type?: string;
}

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
  /** The snap widget body of the comment. */
  snap_widget_body?: SnapWidget[];
};

/** The type of the body to use for the comment. */
export enum TimelineCommentBodyType {
  SnapKit = 'snap_kit',
  SnapWidget = 'snap_widget',
  Text = 'text',
}

/** timeline-comment-summary */
export type TimelineCommentSummary = TimelineEntryBaseSummary;

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
    type: TimelineEntriesCreateRequestType;
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
     * @example "2023-01-01T12:00:00.000Z"
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
     * @example "PROD-12345"
     */
    object: string;
    /**
     * If the visibility of the entry is private, this specifies the users
     * that the entry is private to. Note the creator is always implicitly
     * included in this list.
     * @example ["DEVU-12345"]
     */
    private_to?: string[];
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
   * @maxItems 50
   * @example ["ARTIFACT-12345"]
   */
  artifacts?: string[];
  /** The comment's body. */
  body?: string;
  /** The type of the body to use for the comment. */
  body_type?: TimelineCommentBodyType;
  /**
   * The external reference for the comment. This must be unique within
   * the object's timeline.
   */
  external_ref?: string;
  /**
   * The IDs of the previews of the links posted in the comment.
   * @example ["don:core:<partition>:devo/<dev-org-id>:snap_widget/<snap-widget-id>"]
   */
  link_previews?: string[];
  /** Snap Kit Body of the comment. */
  snap_kit_body?: TimelineSnapKitBody;
  /**
   * The snap widget body of the comment.
   * @example ["don:core:<partition>:devo/<dev-org-id>:snap_widget/<snap-widget-id>"]
   */
  snap_widget_body?: string[];
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
 * timeline-entries-delete-request
 * The request to delete a timeline entry from an object.
 */
export interface TimelineEntriesDeleteRequest {
  /**
   * The ID of the timeline entry to delete.
   * @example "don:core:<partition>:devo/<dev-org-id>:ticket/123:timeline_event/<timeline-event-id>"
   */
  id: string;
}

/**
 * timeline-entries-delete-response
 * The response to deleting a timeline entry from an object.
 */
export type TimelineEntriesDeleteResponse = object;

/**
 * timeline-entries-get-request
 * The request to get a timeline entry.
 */
export interface TimelineEntriesGetRequest {
  /**
   * If set, then gets the entry with the given external reference for
   * the provided entry ID's timeline.
   */
  external_ref?: string;
  /**
   * The ID of the timeline entry to get.
   * @example "don:core:<partition>:devo/<dev-org-id>:ticket/123:timeline_event/<timeline-event-id>"
   */
  id: string;
}

/**
 * timeline-entries-get-response
 * The request to getting a timeline entry.
 */
export interface TimelineEntriesGetResponse {
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
   * @example "PROD-12345"
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
    type: TimelineEntriesUpdateRequestType;
    /**
     * The ID of the timeline entry to update.
     * @example "don:core:<partition>:devo/<dev-org-id>:ticket/123:timeline_event/<timeline-event-id>"
     */
    id: string;
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
   * @maxItems 10
   * @example ["ARTIFACT-12345"]
   */
  add?: string[];
  /**
   * Removes the provided artifacts from the comment. If an artifact is
   * not present, then it's ignored. Mututally exclusive with `set`.
   * @maxItems 10
   * @example ["ARTIFACT-12345"]
   */
  remove?: string[];
  /**
   * Sets the field to the provided artifacts.
   * @maxItems 50
   * @example ["ARTIFACT-12345"]
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
export type TimelineEntry = (TimelineChangeEvent | TimelineComment) & {
  type: TimelineEntryType;
};

/** timeline-entry-base */
export type TimelineEntryBase = AtomBase & {
  /**
   * An external reference that's associated with the Timeline entry
   * that's guaranteed to be unique among its siblings.
   */
  external_ref?: string;
  /** Labels that are associated with the Timeline entry. */
  labels?: string[];
  /** The object that the Timeline entry belongs to. */
  object: string;
  /** The display ID of the object that the Timeline entry belongs to. */
  object_display_id: string;
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

/** timeline-entry-base-summary */
export type TimelineEntryBaseSummary = AtomBaseSummary;

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
  TimelineChangeEvent = 'timeline_change_event',
  TimelineComment = 'timeline_comment',
}

/** Display panels for the Timeline entry. */
export enum TimelineEntryPanel {
  CustomerChat = 'customer_chat',
  Discussions = 'discussions',
  Events = 'events',
}

export enum TimelineEntryType {
  TimelineChangeEvent = 'timeline_change_event',
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

/** track-event */
export interface TrackEvent {
  /** Properties of client to be used in track API. */
  client_context?: ClientContext;
  /** Unique ID for the event. */
  event_id?: string;
  /**
   * The timestamp at which the event occurred.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  event_time?: string;
  /** Name of the event. */
  name: string;
  /** Payload of the event */
  payload: object;
}

/** track-events-publish-request */
export interface TrackEventsPublishRequest {
  events_list: TrackEvent[];
}

/** track-events-publish-response */
export type TrackEventsPublishResponse = object;

/**
 * unit
 * Unit encapsulates the name of the unit and the type of the unit. For
 * example, '#Number of API calls' where name is 'number_of_api_calls' and
 * type is 'number'.
 */
export interface Unit {
  /**
   * This defines the UOM unit type. For example, for 'number of video
   * calls', unit type will be a number.
   */
  type: UnitType;
  /**
   * This represents human readable unit name of the UOM For example,
   * number of API calls.
   */
  name: string;
}

/**
 * This defines the UOM unit type. For example, for 'number of video
 * calls', unit type will be a number.
 */
export enum UnitType {
  Boolean = 'boolean',
  Number = 'number',
}

/**
 * unlink-rev-user-from-rev-org-request
 * Request to unlink/remove a Rev user from a Rev organization.
 */
export interface UnlinkRevUserFromRevOrgRequest {
  /** The ID of the Rev user. */
  id?: string;
  /**
   * The ID of the Rev organization to unlink the Rev user from.
   * @example "REV-AbCdEfGh"
   */
  rev_org?: string;
  /**
   * The don of the rev org to unlink the rev user from. This is
   * deprecated, use rev_org instead.
   * @deprecated
   * @example "REV-AbCdEfGh"
   */
  rev_org_don?: string;
  /**
   * The don of the rev user to unlink. This is deprecated, use id
   * instead.
   * @deprecated
   */
  user_don?: string;
}

/**
 * unlink-rev-user-from-rev-org-response
 * Response for unlinking/removing a Rev user from a Rev organization.
 */
export interface UnlinkRevUserFromRevOrgResponse {
  rev_user: RevUser;
}

/** uom */
export type Uom = AtomBase & {
  /** Stores aggregation type and dimension information. */
  aggregation_details: AggregationDetail;
  /** Description of the UOM. */
  description?: string;
  /**
   * The list of dimensions that can be emitted along with the metering
   * data.
   */
  dimensions?: string[];
  /**
   * If set to true, then the UOM can be configured as part of
   * entitlements in skus and metering data only for the enabled uoms
   * will be passed through the metering pipeline.
   */
  is_enabled: boolean;
  /** Human readable metric name of the UOM. */
  metric_name: string;
  /**
   * The granularity at which the metrics ingestion data is to be emitted
   * for the UOM.
   */
  metric_scope: UomMetricScope;
  /** Human readable name of the UOM. */
  name: string;
  part?: PartSummary;
  product: PartSummary;
  /**
   * Unit encapsulates the name of the unit and the type of the unit. For
   * example, '#Number of API calls' where name is 'number_of_api_calls' and
   * type is 'number'.
   */
  unit: Unit;
};

/**
 * The granularity at which the metrics ingestion data is to be emitted
 * for the UOM.
 */
export enum UomMetricScope {
  Org = 'org',
  User = 'user',
}

/** uoms-count-request */
export interface UomsCountRequest {
  /** List of aggregation types for filtering list of UOMs. */
  aggregation_types?: AggregationDetailAggregationType[];
  /**
   * List of Unit of Measurement (UOM) DONs to be used in filtering
   * complete list of UOMs defined in a Dev Org.
   */
  ids?: string[];
  /** List of metric names for filtering list of UOMs. */
  metric_names?: string[];
  /**
   * List of part IDs for filtering list of UOMs.
   * @example ["PROD-12345"]
   */
  part_ids?: string[];
  /**
   * List of product IDs for filtering list of UOMs.
   * @example ["PROD-12345"]
   */
  product_ids?: string[];
  /** List of unit types for filtering list of UOMs. */
  unit_types?: UnitType[];
}

/** uoms-count-response */
export interface UomsCountResponse {
  /**
   * Count of Unit of Measurements matching the filter.
   * @format int32
   */
  count: number;
}

/** uoms-create-request */
export interface UomsCreateRequest {
  /** Stores aggregation type and dimension information. */
  aggregation_detail: AggregationDetail;
  /** Description of the Unit of Measurement (UOM). */
  description?: string;
  /**
   * The list of dimensions that can be emitted as part of metrics data.
   * Dimensions consist of list of key-value pairs. For example, if the
   * UOM is 'number_of_api_calls', then dimensions can be ['api_name',
   * 'api_version'].Dimension keys can only contain alphanumeric
   * characters (A-Z, a-z, and 0-9) and underscores (_). Dimension keys
   * cannot start with a number and is case-insensitive.Dimension keys
   * must be unique and it is not allowed to have more than one value
   * with the same key.Metrics data ingested in DevRev metrics format
   * will be grouped and aggregated based on the dimensions specified in
   * UOM.
   * @minLength 1
   * @maxLength 64
   * @maxItems 12
   */
  dimensions?: string[];
  /**
   * Name of the Unit of Measurement (UOM). Unit of Measurement is a
   * unit of measure defined over a part offered by a Dev Org. A single
   * part can have multiple unit of measurements defined over it. For
   * example, a part can be 'video call', one UOM defined on this can be
   * 'number_of_calls', other UOM can be 'call_duration' etc.Metric name
   * should be unique across all UOMs in a Dev Org.Metric name can only
   * contain alphanumeric characters (A-Z, a-z, and 0-9) and underscores
   * (_). Metric name cannot start with a number and is
   * case-insensitive.
   * @minLength 1
   * @maxLength 64
   */
  metric_name: string;
  /** Human readable name of the Unit of Measurement (UOM). */
  name: string;
  /**
   * The part ID for which the Unit of Measurement (UOM) is defined.
   * When defined, ingested metrics data will be associated with part
   * and product specified in UOM.
   * @example "PROD-12345"
   */
  part_id?: string;
  /**
   * The product ID for which the Unit of Measurement (UOM) is defined.
   * @example "PROD-12345"
   */
  product_id: string;
  /**
   * Unit encapsulates the name of the unit and the type of the unit. For
   * example, '#Number of API calls' where name is 'number_of_api_calls' and
   * type is 'number'.
   */
  unit: Unit;
}

/** uoms-create-response */
export interface UomsCreateResponse {
  uom: Uom;
}

/** uoms-delete-request */
export interface UomsDeleteRequest {
  /** The Unit of Measurement (UOM)'s DON. */
  id: string;
}

/** uoms-get-request */
export interface UomsGetRequest {
  /** The Unit of Measurement (UOM)'s DON. */
  id: string;
}

/** uoms-get-response */
export interface UomsGetResponse {
  uom: Uom;
}

/** uoms-list-request */
export interface UomsListRequest {
  /** List of aggregation types for filtering list of UOMs. */
  aggregation_types?: AggregationDetailAggregationType[];
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
  /**
   * List of Unit of Measurement (UOM) DONs to be used in filtering
   * complete list of UOMs defined in a Dev Org.
   */
  ids?: string[];
  /**
   * The maximum number of UOMs to be returned in a response. The
   * default is '50'.
   * @format int32
   */
  limit?: number;
  /** List of metric names for filtering list of UOMs. */
  metric_names?: string[];
  /**
   * The iteration mode to use. If "after", then entries after the provided
   * cursor will be returned, or if no cursor is provided, then from the
   * beginning. If "before", then entries before the provided cursor will be
   * returned, or if no cursor is provided, then from the end. Entries will
   * always be returned in the specified sort-by order.
   */
  mode?: ListMode;
  /**
   * List of part IDs for filtering list of UOMs.
   * @example ["PROD-12345"]
   */
  part_ids?: string[];
  /**
   * List of product IDs for filtering list of UOMs.
   * @example ["PROD-12345"]
   */
  product_ids?: string[];
  /**
   * Fields to sort the Unit Of Measuments (UOMs) by and the direction
   * to sort them.
   */
  sort_by?: string[];
  /** List of unit types for filtering list of UOMs. */
  unit_types?: UnitType[];
}

/** uoms-list-response */
export interface UomsListResponse {
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
  /** The list of Unit of Measurement (UOM) objects. */
  uoms: Uom[];
}

/** uoms-update-request */
export interface UomsUpdateRequest {
  /**
   * Aggregation type to be used while aggregating the metering data for the
   * UOM. 1] Sum - sum of all the values for the meter in a given period Ex.
   * { M1:2, M1:4 } => {M1:6} 2] Minimum - min of all the values for the
   * meter in a given period Ex. { M1:2, M1:4 } => {M1:2} 3] Maximum - max
   * of all the values for the meter in a given period Ex. { M1:2, M1:4 } =>
   * {M1:4} 4] Unique Count - Sum of distinct unique dimension observed for
   * the meter in the given period (not considering the data from the
   * previous billing period) Ex. January {M1:{VM:VM0}}, February
   * {M1:{VM:VM1}, M1:{VM:VM2}, M1:{VM:VM1}} => {M1:2} 5] Running Total -
   * Sum of distinct active unique dimension observed for a meter in the
   * given period, taking into consideration the active data from the
   * previous billing cycle Ex. January {M1:{VM:VM0,on}, {M1:{VM:VM1,off}
   * February {M1:{VM:VM2, on}, M1:{VM:VM2, off}, M1:{VM:VM3, on}} => {M1:3}
   * 6] Duration - Sum of distinct active unique dimension duration for a
   * meter in the given period, taking into consideration the active data
   * from the previous month Ex. January15 {M1:{VM:VM0,on, 4}} February15
   * {M1:{VM:VM0,off}, February18 {M1:{VM:VM1,on,5} => M1->
   * 30*4*charge_per_day + 10*5*charge_per_day 7] Latest - consider the
   * latest/last meter in the given period 8] Oldest - consider the
   * oldest/first record in the given period.
   */
  aggregation_type?: AggregationDetailAggregationType;
  /** Description of the Unit of Measurement (UOM). */
  description?: string;
  dimensions?: UomsUpdateRequestDimensions;
  /** The Unit of Measurement (UOM)'s DON. */
  id: string;
  /**
   * Flag used to enable/disable the Unit of Measurement (UOM). When
   * disabled, any metricsrecords ingested against this UOM will be
   * dropped.
   */
  is_enabled?: boolean;
  /** Human readable name of the Unit of Measurement (UOM). */
  name?: string;
  /**
   * The part ID such as feature or capability for which the Unit of
   * Measurement (UOM) is defined.
   * @example "PROD-12345"
   */
  part_id?: string;
  /**
   * The product ID for which the Unit of Measurement (UOM) is defined.
   * @example "PROD-12345"
   */
  product_id?: string;
  /** Unit name of the Unit of Measurement (UOM). */
  unit?: string;
}

/** uoms-update-request-dimensions */
export interface UomsUpdateRequestDimensions {
  /** Adds the provided dimensions to the UOM. */
  add?: string[];
  /** Removes the provided dimensions from the UOM. */
  remove?: string[];
}

/** uoms-update-response */
export interface UomsUpdateResponse {
  uom: Uom;
}

/** update-incident-applies-to-parts */
export interface UpdateIncidentAppliesToParts {
  /** Sets the parts to which the incident is applicable to. */
  set?: string[];
}

/** update-incident-artifacts */
export interface UpdateIncidentArtifacts {
  /**
   * Sets the artifacts attached to the incident.
   * @example ["ARTIFACT-12345"]
   */
  set?: string[];
}

/** update-incident-impacted-customers */
export interface UpdateIncidentImpactedCustomers {
  /** Sets the list of customers impacted due to the incident. */
  set?: string[];
}

/** update-incident-owned-by */
export interface UpdateIncidentOwnedBy {
  /** Sets the user IDs of the users that own the incident. */
  set?: string[];
}

/** update-incident-stakeholders */
export interface UpdateIncidentStakeholders {
  /**
   * Sets the users, along with the incident commander, involved in
   * resolving incidents and handling communication.
   */
  set?: string[];
}

/** update-incident-tags */
export interface UpdateIncidentTags {
  /** Sets the tags associated with the object. */
  set?: UpdateTagWithValue[];
}

/**
 * update-stage
 * Update object for Stage.
 */
export interface UpdateStage {
  /** Notes relevant to the stage */
  notes?: string;
  /** DON of the stage. */
  stage?: string;
}

/**
 * update-tag-with-value
 * Update object for TagWithValue.
 */
export interface UpdateTagWithValue {
  /**
   * ID of the referenced tag
   * @example "TAG-12345"
   */
  tag_id?: string;
  /** Value associated with the tag for the object. */
  value?: string;
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

/** user-search-summary */
export type UserSearchSummary = SearchSummaryBase & {
  /**
   * Comments on the work.
   * @maxItems 5
   */
  comments?: CommentSearchSummary[];
  user: UserSummary;
};

/**
 * user-skill
 * Skill associated with the user.
 */
export interface UserSkill {
  /** Name of the skill. */
  name?: string;
}

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

/** vista-base-summary */
export type VistaBaseSummary = AtomBaseSummary & {
  /** Name of the vista. */
  name: string;
};

/** Defines the state of the group item. */
export enum VistaGroupItemState {
  Active = 'active',
  Completed = 'completed',
  Planned = 'planned',
}

/**
 * vista-group-item-summary
 * Vista group item.
 */
export interface VistaGroupItemSummary {
  /** Type of the group object. */
  type: VistaGroupItemType;
  /**
   * Timestamp when the vista ends.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  end_date?: string;
  /** ID of the group item in don v2 format. */
  id: string;
  /** Name of the group. */
  name: string;
  /**
   * Timestamp when the vista starts.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  start_date?: string;
  /** Defines the state of the group item. */
  state?: VistaGroupItemState;
}

/** Type of the group object. */
export enum VistaGroupItemType {
  Curated = 'curated',
  Dynamic = 'dynamic',
}

/** vista-search-summary */
export type VistaSearchSummary = SearchSummaryBase & {
  /** Represents a collection of DevRev objects. */
  vista: VistaSummary;
};

/**
 * vista-summary
 * Represents a collection of DevRev objects.
 */
export type VistaSummary = (
  | CuratedVistaSummary
  | DynamicVistaSummary
  | GroupedVistaSummary
) & {
  /** Type of vista object. */
  type: VistaType;
};

/** Type of vista object. */
export enum VistaType {
  Curated = 'curated',
  Dynamic = 'dynamic',
  Grouped = 'grouped',
}

/** webhook */
export type Webhook = AtomBase & {
  /** The event types that the webhook will receive. */
  event_types?: WebhookEventType[];
  /** Headers that are provided with every webhook invocation. */
  headers?: WebhookHeader[];
  /**
   * The secret to use for verifying webhook events.
   * @format byte
   */
  secret: string;
  /** The status of the webhook. */
  status: WebhookStatus;
  /** The URL of the webhook endpoint. */
  url: string;
};

/** webhook-event-request */
export interface WebhookEventRequest {
  /** The event types that the webhook will receive. */
  type?: WebhookEventType;
  account_created?: EventAccountCreated;
  account_deleted?: EventAccountDeleted;
  account_updated?: EventAccountUpdated;
  conversation_created?: EventConversationCreated;
  conversation_deleted?: EventConversationDeleted;
  conversation_updated?: EventConversationUpdated;
  dev_user_created?: EventDevUserCreated;
  dev_user_deleted?: EventDevUserDeleted;
  dev_user_updated?: EventDevUserUpdated;
  group_created?: EventGroupCreated;
  group_deleted?: EventGroupDeleted;
  group_member_added?: EventGroupMemberAdded;
  group_member_removed?: EventGroupMemberRemoved;
  group_updated?: EventGroupUpdated;
  /** The event's ID. */
  id: string;
  part_created?: EventPartCreated;
  part_deleted?: EventPartDeleted;
  part_updated?: EventPartUpdated;
  rev_org_created?: EventRevOrgCreated;
  rev_org_deleted?: EventRevOrgDeleted;
  rev_org_updated?: EventRevOrgUpdated;
  rev_user_created?: EventRevUserCreated;
  rev_user_deleted?: EventRevUserDeleted;
  rev_user_updated?: EventRevUserUpdated;
  sla_tracker_created?: EventSlaTrackerCreated;
  sla_tracker_deleted?: EventSlaTrackerDeleted;
  sla_tracker_updated?: EventSlaTrackerUpdated;
  survey_response_created?: EventSurveyResponseCreated;
  survey_response_deleted?: EventSurveyResponseDeleted;
  survey_response_updated?: EventSurveyResponseUpdated;
  tag_created?: EventTagCreated;
  tag_deleted?: EventTagDeleted;
  tag_updated?: EventTagUpdated;
  timeline_entry_created?: EventTimelineEntryCreated;
  timeline_entry_deleted?: EventTimelineEntryDeleted;
  timeline_entry_updated?: EventTimelineEntryUpdated;
  /**
   * Timestamp of the webhook's invocation for the event. Note this
   * should be used to protect against replay attacks, where the event
   * should only be processed if the timestamp isn't stale by several
   * seconds.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  timestamp?: string;
  verify?: WebhookEventVerify;
  webhook_created?: EventWebhookCreated;
  webhook_deleted?: EventWebhookDeleted;
  /**
   * ID of the webhook for the event.
   * @example "don:integration:<partition>:devo/<dev-org-id>:webhook/<webhook-id>"
   */
  webhook_id: string;
  webhook_updated?: EventWebhookUpdated;
  work_created?: EventWorkCreated;
  work_deleted?: EventWorkDeleted;
  work_updated?: EventWorkUpdated;
}

/** webhook-event-response */
export interface WebhookEventResponse {
  /**
   * The challenge from the "verify" request, otherwise this should not
   * be set for other request types.
   * @format byte
   */
  challenge?: string;
}

/** The event types that the webhook will receive. */
export enum WebhookEventType {
  AccountCreated = 'account_created',
  AccountDeleted = 'account_deleted',
  AccountUpdated = 'account_updated',
  ConversationCreated = 'conversation_created',
  ConversationDeleted = 'conversation_deleted',
  ConversationUpdated = 'conversation_updated',
  DevUserCreated = 'dev_user_created',
  DevUserDeleted = 'dev_user_deleted',
  DevUserUpdated = 'dev_user_updated',
  GroupCreated = 'group_created',
  GroupDeleted = 'group_deleted',
  GroupMemberAdded = 'group_member_added',
  GroupMemberRemoved = 'group_member_removed',
  GroupUpdated = 'group_updated',
  PartCreated = 'part_created',
  PartDeleted = 'part_deleted',
  PartUpdated = 'part_updated',
  RevOrgCreated = 'rev_org_created',
  RevOrgDeleted = 'rev_org_deleted',
  RevOrgUpdated = 'rev_org_updated',
  RevUserCreated = 'rev_user_created',
  RevUserDeleted = 'rev_user_deleted',
  RevUserUpdated = 'rev_user_updated',
  SlaTrackerCreated = 'sla_tracker_created',
  SlaTrackerDeleted = 'sla_tracker_deleted',
  SlaTrackerUpdated = 'sla_tracker_updated',
  TagCreated = 'tag_created',
  TagDeleted = 'tag_deleted',
  TagUpdated = 'tag_updated',
  TimelineEntryCreated = 'timeline_entry_created',
  TimelineEntryDeleted = 'timeline_entry_deleted',
  TimelineEntryUpdated = 'timeline_entry_updated',
  Verify = 'verify',
  WebhookCreated = 'webhook_created',
  WebhookDeleted = 'webhook_deleted',
  WebhookUpdated = 'webhook_updated',
  WorkCreated = 'work_created',
  WorkDeleted = 'work_deleted',
  WorkUpdated = 'work_updated',
}

/** webhook-event-verify */
export interface WebhookEventVerify {
  /**
   * The challenge that must be echoed in the response.
   * @format byte
   */
  challenge: string;
}

/**
 * webhook-header
 * Defines a header that's provided with every webhook invocation.
 */
export interface WebhookHeader {
  /**
   * The name of the header. Only alphanumeric ASCII characters,
   * hyphens, and underscores are permitted.
   */
  name: string;
  /** The header's value. */
  value: string;
}

/** The status of the webhook. */
export enum WebhookStatus {
  Active = 'active',
  Inactive = 'inactive',
  Unverified = 'unverified',
}

/** webhook-summary */
export type WebhookSummary = AtomBaseSummary;

/**
 * webhooks-create-request
 * The request to create a new webhook.
 */
export interface WebhooksCreateRequest {
  /** The event types that the webhook endpoint will receive. */
  event_types?: WebhookEventType[];
  /** @maxItems 8 */
  headers?: WebhookHeader[];
  /**
   * The secret to use when verifying webhook events. If provided, the
   * secret must be between 8 and 32 bytes (inclusive). If not set, a
   * secret will be automatically generated and provided in the
   * response.
   * @format byte
   */
  secret?: string;
  /** The URL of the webhook endpoint. */
  url: string;
}

/**
 * webhooks-create-response
 * The response to creating a new webhook.
 */
export interface WebhooksCreateResponse {
  webhook: Webhook;
}

/**
 * webhooks-delete-request
 * The request to delete a webhook.
 */
export interface WebhooksDeleteRequest {
  /**
   * ID for the webhook.
   * @example "don:integration:<partition>:devo/<dev-org-id>:webhook/<webhook-id>"
   */
  id: string;
}

/**
 * webhooks-delete-response
 * The response to deleting the webhook.
 */
export type WebhooksDeleteResponse = object;

/**
 * webhooks-get-request
 * The request to get a webhook's information.
 */
export interface WebhooksGetRequest {
  /**
   * ID for the webhook.
   * @example "don:integration:<partition>:devo/<dev-org-id>:webhook/<webhook-id>"
   */
  id: string;
}

/**
 * webhooks-get-response
 * The response to getting the information for the webhook.
 */
export interface WebhooksGetResponse {
  webhook: Webhook;
}

/**
 * webhooks-list-request
 * The request to list the webhooks.
 */
export type WebhooksListRequest = object;

/**
 * webhooks-list-response
 * The response to listing the webhooks.
 */
export interface WebhooksListResponse {
  /** The list of webhooks. */
  webhooks: Webhook[];
}

/** The action to update the webhook's status. */
export enum WebhooksUpdateAction {
  Activate = 'activate',
  Deactivate = 'deactivate',
}

/**
 * webhooks-update-request
 * The request to update a webhook.
 */
export interface WebhooksUpdateRequest {
  /** The action to update the webhook's status. */
  action?: WebhooksUpdateAction;
  event_types?: WebhooksUpdateRequestEventTypes;
  headers?: WebhooksUpdateRequestHeaders;
  /**
   * ID for the webhook.
   * @example "don:integration:<partition>:devo/<dev-org-id>:webhook/<webhook-id>"
   */
  id: string;
  /**
   * If provided, updates the secret that's used when verifying webhook
   * events, which must be between 8 and 32 bytes (inclusive). Otherwise
   * if empty, then a new secret is generated. If the webhook is active,
   * then its status will transition to the 'unverified' state and it
   * won't receive any object events until successfully verified.
   * @format byte
   */
  secret?: string;
  /**
   * The webhook's updated URL. If the webhook is active, then the
   * webhook's status will transition to the 'unverified' state and it
   * won't receive any object events until successfully verified.
   */
  url?: string;
}

/** webhooks-update-request-event-types */
export interface WebhooksUpdateRequestEventTypes {
  /**
   * The event types to add. If a provided event type is already set for
   * the webhook, then nothing is done. Note this is mutually exclusive
   * with 'set'.
   */
  add?: WebhookEventType[];
  /**
   * The event types to remove. If a provided event type isn't set for
   * the webhook, then nothing is done. Note this is mutually exclusive
   * with 'set'.
   */
  remove?: WebhookEventType[];
  /**
   * The updated event types, which will replace the webhook's current
   * event types. Note this is mutually exclusive with 'add' and
   * 'remove'.
   */
  set?: WebhookEventType[];
}

/** webhooks-update-request-headers */
export interface WebhooksUpdateRequestHeaders {
  /** @maxItems 8 */
  add?: WebhookHeader[];
  /** @maxItems 8 */
  remove?: string[];
  /** @maxItems 8 */
  set?: WebhookHeader[];
}

/**
 * webhooks-update-response
 * The response to updating the webhook.
 */
export interface WebhooksUpdateResponse {
  webhook: Webhook;
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
  stage?: LegacyStage;
  /**
   * Stock schema fragment.
   * @example "don:core:<partition>:devo/<dev-org-id>:custom_type_fragment/<custom-type-fragment-id>"
   */
  stock_schema_fragment?: string;
  /** Subtype corresponding to the custom type fragment. */
  subtype?: string;
  /** Tags associated with the object. */
  tags?: TagWithValue[];
  /**
   * Timestamp when the work is expected to be complete.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  target_close_date?: string;
  /** Title of the work object. */
  title: string;
};

/** work-base-summary */
export type WorkBaseSummary = AtomBaseSummary & {
  /** The users that own the work. */
  owned_by: UserSummary[];
  /** Describes the current stage of a work item. */
  stage?: LegacyStageSummary;
  /** Title of the work object. */
  title: string;
};

/** work-search-summary */
export type WorkSearchSummary = SearchSummaryBase & {
  /**
   * Comments on the work.
   * @maxItems 5
   */
  comments?: CommentSearchSummary[];
  work: WorkSummary;
};

/** work-summary */
export type WorkSummary = (
  | IssueSummary
  | OpportunitySummary
  | TaskSummary
  | TicketSummary
) & {
  type: WorkType;
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
  type: WorkType;
  /**
   * The [part](https://devrev.ai/docs/product/parts) that the work
   * applies to. Specifying a part is required when creating tickets and
   * issues.
   * @example "PROD-12345"
   */
  applies_to_part: string;
  /**
   * The IDs of the artifacts to associate with the work item.
   * @example ["ARTIFACT-12345"]
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
   * Requested custom schemas described abstractly. Every provided schema's
   * custom field must be specified, otherwise a bad request error is
   * returned. If a new custom schema specifier is provided, then it will be
   * added to the work, otherwise if a custom schema is omitted from the
   * specifier, it remains unmodified.
   */
  custom_schema_spec?: CustomSchemaSpec;
  /**
   * The users that own the work.
   * @example ["DEVU-12345"]
   */
  owned_by: string[];
  /**
   * The users that reported the work.
   * @example ["DEVU-12345"]
   */
  reported_by?: string[];
  /** Sets an object's initial stage. */
  stage?: StageInit;
  /** The type of stage validations options when creating a work item. */
  stage_validation_options?: StageValidationOptionForCreate[];
  /** Tags associated with the work item. */
  tags?: SetTagWithValue[];
  /**
   * Timestamp for when the work is expected to be complete.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  target_close_date?: string;
  /** Title of the work object. */
  title: string;
};

/** works-create-request-issue */
export interface WorksCreateRequestIssue {
  /**
   * The IDs of the parts associated with issue.
   * @maxItems 8
   * @example ["PROD-12345"]
   */
  developed_with?: string[];
  /** Priority of the work based upon impact and criticality. */
  priority?: IssuePriority;
  /**
   * Priority enum id of the work based upon impact and criticality.
   * @format int64
   */
  priority_v2?: number;
  /** The sprint that the issue belongs to. */
  sprint?: string;
  /**
   * Timestamp for when the work is expected to start.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  target_start_date?: string;
}

/** works-create-request-opportunity */
export interface WorksCreateRequestOpportunity {
  /**
   * The ID of the account that the opportunity is associated with.
   * @example "ACC-12345"
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
   * @example "2023-01-01T12:00:00.000Z"
   */
  start_date?: string;
}

/** works-create-request-ticket */
export interface WorksCreateRequestTicket {
  /** Channels of the ticket. */
  channels?: TicketChannels[];
  /** The group that the ticket is associated with. */
  group?: string;
  /** Whether the ticket is spam. */
  is_spam?: boolean;
  /** Whether the ticket needs a response. */
  needs_response?: boolean;
  /**
   * The Rev organization that the ticket is associated with.
   * @example "REV-AbCdEfGh"
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
   * @example "ISS-12345"
   */
  id: string;
}

/** works-delete-response */
export type WorksDeleteResponse = object;

/** works-export-request */
export interface WorksExportRequest {
  /** Filters for work of the provided types. */
  type?: WorkType[];
  /** Provides ways to specify date ranges on objects. */
  actual_close_date?: DateFilter;
  /**
   * Filters for work belonging to any of the provided parts.
   * @example ["PROD-12345"]
   */
  applies_to_part?: string[];
  /**
   * Filters for work created by any of these users.
   * @example ["DEVU-12345"]
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
   * @example ["DEVU-12345"]
   */
  owned_by?: string[];
  /**
   * Filters for work reported by any of these users.
   * @example ["DEVU-12345"]
   */
  reported_by?: string[];
  /** Fields to sort the work items by and the direction to sort them. */
  sort_by?: string[];
  /** The filter for stages. */
  stage?: StageFilter;
  staged_info?: StagedInfoFilter;
  sync_metadata?: SyncMetadataFilter;
  /**
   * Filters for work with any of the provided tags.
   * @example ["TAG-12345"]
   */
  tags?: string[];
  /** Provides ways to specify date ranges on objects. */
  target_close_date?: DateFilter;
  ticket?: WorksFilterTicket;
}

/** works-export-response */
export interface WorksExportResponse {
  /** The resulting collection of work items. */
  works: Work[];
}

/** works-filter-issue */
export interface WorksFilterIssue {
  /**
   * Filters for issues with any of the provided Accounts.
   * @example ["ACC-12345"]
   */
  accounts?: string[];
  /** Provides ways to specify date ranges on objects. */
  actual_start_date?: DateFilter;
  /** Filters for issues with any of the provided priorities. */
  priority?: IssuePriority[];
  /** Filters for issues with any of the provided priority enum ids. */
  priority_v2?: number[];
  /**
   * Filters for issues with any of the provided Rev organizations.
   * @example ["REV-AbCdEfGh"]
   */
  rev_orgs?: string[];
  /** The filter for SLA summary. */
  sla_summary?: SlaSummaryFilter;
  /** Filters for issues with any of the sprint. */
  sprint?: string[];
  /** Filters for issues with any of the provided subtypes. */
  subtype?: string[];
  /** Provides ways to specify date ranges on objects. */
  target_start_date?: DateFilter;
}

/** works-filter-opportunity */
export interface WorksFilterOpportunity {
  /**
   * Filters for opportunities belonging to any of the provided
   * accounts.
   * @example ["ACC-12345"]
   */
  account?: string[];
  /** Filters for opportunities with any of the provided contacts. */
  contacts?: string[];
  /** Filters for opportunity with any of the provided subtypes. */
  subtype?: string[];
}

/** works-filter-ticket */
export interface WorksFilterTicket {
  /** Filters for tickets with any of the provided channels. */
  channels?: TicketChannels[];
  /** Filters for tickets belonging to specific groups. */
  group?: string[];
  /** Filters for tickets that are spam. */
  is_spam?: boolean;
  /** Filters for tickets that need response. */
  needs_response?: boolean;
  /**
   * Filters for tickets that are associated with any of the provided
   * Rev organizations.
   * @example ["REV-AbCdEfGh"]
   */
  rev_org?: string[];
  /** Filters for tickets with any of the provided severities. */
  severity?: TicketSeverity[];
  /** The filter for SLA summary. */
  sla_summary?: SlaSummaryFilter;
  /** Filters for tickets with any of the provided source channels. */
  source_channel?: string[];
  /** Filters for tickets with any of the provided subtypes. */
  subtype?: string[];
  /** The filter for survey aggregation. */
  surveys?: SurveyAggregationFilter;
}

/** works-get-request */
export interface WorksGetRequest {
  /**
   * The work's ID.
   * @example "ISS-12345"
   */
  id: string;
}

/** works-get-response */
export interface WorksGetResponse {
  work: Work;
}

/** works-list-request */
export interface WorksListRequest {
  /** Filters for work of the provided types. */
  type?: WorkType[];
  /** Provides ways to specify date ranges on objects. */
  actual_close_date?: DateFilter;
  /**
   * Filters for work belonging to any of the provided parts.
   * @example ["PROD-12345"]
   */
  applies_to_part?: string[];
  /**
   * Filters for work created by any of these users.
   * @example ["DEVU-12345"]
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
   * @example ["DEVU-12345"]
   */
  owned_by?: string[];
  /**
   * Filters for work reported by any of these users.
   * @example ["DEVU-12345"]
   */
  reported_by?: string[];
  /** Fields to sort the works by and the direction to sort them. */
  sort_by?: string[];
  /** The filter for stages. */
  stage?: StageFilter;
  staged_info?: StagedInfoFilter;
  sync_metadata?: SyncMetadataFilter;
  /**
   * Filters for work with any of the provided tags.
   * @example ["TAG-12345"]
   */
  tags?: string[];
  /** Provides ways to specify date ranges on objects. */
  target_close_date?: DateFilter;
  ticket?: WorksFilterTicket;
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
  | Empty
  | WorksUpdateRequestIssue
  | WorksUpdateRequestOpportunity
  | WorksUpdateRequestTask
  | WorksUpdateRequestTicket
) & {
  type?: WorkType;
  /**
   * Updates the part that the work item applies to.
   * @example "PROD-12345"
   */
  applies_to_part?: string;
  artifacts?: WorksUpdateRequestArtifacts;
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
   * Requested custom schemas described abstractly. Every provided schema's
   * custom field must be specified, otherwise a bad request error is
   * returned. If a new custom schema specifier is provided, then it will be
   * added to the work, otherwise if a custom schema is omitted from the
   * specifier, it remains unmodified.
   */
  custom_schema_spec?: CustomSchemaSpec;
  /**
   * The work's ID.
   * @example "ISS-12345"
   */
  id: string;
  owned_by?: WorksUpdateRequestOwnedBy;
  reported_by?: WorksUpdateRequestReportedBy;
  /** Updates an object's stage. */
  stage?: StageUpdate;
  /**
   * The type of stage validations options when updating the stage of an
   * object.
   */
  stage_validation_options?: StageValidationOptionForUpdate[];
  staged_info?: WorksUpdateRequestStagedInfoStagedInfoUpdate;
  tags?: WorksUpdateRequestTags;
  /**
   * Updates the timestamp for when the work is expected to be complete.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  target_close_date?: string | null;
  /** Updated title of the work object, or unchanged if not provided. */
  title?: string;
};

/** works-update-request-artifacts */
export interface WorksUpdateRequestArtifacts {
  /**
   * Adds the provided artifacts (if not already present) to the field.
   * @maxItems 50
   * @example ["ARTIFACT-12345"]
   */
  add?: string[];
  /**
   * Removes the provided artifacts (if they exist) from the field.
   * @maxItems 50
   * @example ["ARTIFACT-12345"]
   */
  remove?: string[];
  /**
   * Sets the field to the provided artifacts.
   * @maxItems 50
   * @example ["ARTIFACT-12345"]
   */
  set?: string[];
}

/** works-update-request-issue */
export interface WorksUpdateRequestIssue {
  developed_with?: WorksUpdateRequestIssueDevelopedWith;
  /** Priority of the work based upon impact and criticality. */
  priority?: IssuePriority;
  /**
   * Priority enum id of the work based upon impact and criticality.
   * @format int64
   */
  priority_v2?: number;
  /** Updates the sprint that the issue belongs to. */
  sprint?: string | null;
  /**
   * Updates the timestamp for when the work is expected to start.
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  target_start_date?: string | null;
}

/** works-update-request-issue-developed-with */
export interface WorksUpdateRequestIssueDevelopedWith {
  /**
   * Sets the IDs of the parts associated with issue.
   * @maxItems 8
   * @example ["PROD-12345"]
   */
  set?: string[];
}

/** works-update-request-opportunity */
export interface WorksUpdateRequestOpportunity {
  /**
   * Updates the account that the opportunity is associated with.
   * @example "ACC-12345"
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
   * @example ["DEVU-12345"]
   */
  set?: string[];
}

/** works-update-request-reported-by */
export interface WorksUpdateRequestReportedBy {
  /**
   * Sets the users that reported the work to the provided user IDs.
   * @example ["DEVU-12345"]
   */
  set?: string[];
}

/** works-update-request-staged-info-staged-info-update */
export interface WorksUpdateRequestStagedInfoStagedInfoUpdate {
  /** Updates the unresolved fields of the staged work. */
  unresolved_fields: string[];
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
   * @example "2023-01-01T12:00:00.000Z"
   */
  start_date?: string;
}

/** works-update-request-ticket */
export interface WorksUpdateRequestTicket {
  channels?: WorksUpdateRequestTicketChannels;
  /** Updates the group that the ticket is associated with. */
  group?: string | null;
  /** Updates whether the ticket is spam. */
  is_spam?: boolean;
  /** Updates whether the ticket needs a response. */
  needs_response?: boolean;
  /**
   * Updates the Rev organization that the ticket is associated with.
   * @example "REV-AbCdEfGh"
   */
  rev_org?: string | null;
  /** Severity of the ticket. */
  severity?: TicketSeverity;
}

/** works-update-request-ticket-channels */
export interface WorksUpdateRequestTicketChannels {
  /** Sets the channels to the provided channels. */
  set?: TicketChannels[];
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
 * @title DevRev REST API
 * @version 2022-10-20
 * @baseUrl {protocol}://{hostname}
 *
 * DevRev's REST API.
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
      | ErrorConflict
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
       * @example "2023-01-01T12:00:00.000Z"
       */
      'created_date.after'?: string;
      /**
       * Filters for objects created before the provided timestamp
       * (inclusive).
       * @format date-time
       * @example "2023-01-01T12:00:00.000Z"
       */
      'created_date.before'?: string;
      /** Filters for custom fields. */
      custom_fields?: object;
      /** Array of display names of accounts to be filtered. */
      display_name?: string[];
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
       * @example "2023-01-01T12:00:00.000Z"
       */
      'modified_date.after'?: string;
      /**
       * Filters for objects created before the provided timestamp
       * (inclusive).
       * @format date-time
       * @example "2023-01-01T12:00:00.000Z"
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
       * @example "ACC-12345"
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
       * @example "2023-01-01T12:00:00.000Z"
       */
      'created_date.after'?: string;
      /**
       * Filters for objects created before the provided timestamp
       * (inclusive).
       * @format date-time
       * @example "2023-01-01T12:00:00.000Z"
       */
      'created_date.before'?: string;
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /** Filters for custom fields. */
      custom_fields?: object;
      /** Array of display names of accounts to be filtered. */
      display_name?: string[];
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
       * @example "2023-01-01T12:00:00.000Z"
       */
      'modified_date.after'?: string;
      /**
       * Filters for objects created before the provided timestamp
       * (inclusive).
       * @format date-time
       * @example "2023-01-01T12:00:00.000Z"
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
      | ErrorConflict
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
      /** The ancestor directory of the articles. */
      ancestor?: string;
      /**
       * Filters for articles belonging to any of the provided parts.
       * @example ["PROD-12345"]
       */
      applies_to_parts?: string[];
      /**
       * Filter for the type of articles. If this is not provided, then
       * articles that are not content blocks are returned.
       */
      article_type?: ArticleType[];
      /**
       * Filters for articles authored by any of the provided users.
       * @example ["DEVU-12345"]
       */
      authored_by?: string[];
      /**
       * Filters for articles created by any of the provided users.
       * @example ["DEVU-12345"]
       */
      created_by?: string[];
      /**
       * Filters for articles modified by any of the provided users.
       * @example ["DEVU-12345"]
       */
      modified_by?: string[];
      /**
       * Filters for articles owned by any of the provided users.
       * @example ["DEVU-12345"]
       */
      owned_by?: string[];
      /**
       * Filter for the scope of the articles. If this is not provided, then
       * only external articles are returned.
       */
      scope?: number[];
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
       * @example "ARTICLE-12345"
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
       * @example ["PROD-12345"]
       */
      applies_to_parts?: string[];
      /**
       * Filter for the type of articles. If this is not provided, then
       * articles that are not content blocks are returned.
       */
      article_type?: ArticleType[];
      /**
       * Filters for articles authored by any of the provided users.
       * @example ["DEVU-12345"]
       */
      authored_by?: string[];
      /**
       * Filters for articles created by any of the provided users.
       * @example ["DEVU-12345"]
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
       * Filters for articles modified by any of the provided users.
       * @example ["DEVU-12345"]
       */
      modified_by?: string[];
      /**
       * Filters for articles owned by any of the provided users.
       * @example ["DEVU-12345"]
       */
      owned_by?: string[];
      /**
       * Filter for the scope of the articles. If this is not provided, then
       * only external articles are returned.
       */
      scope?: number[];
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
   * @description Gets the requested artifact's information.
   *
   * @tags artifacts
   * @name ArtifactsGet
   * @request GET:/artifacts.get
   * @secure
   */
  artifactsGet = (
    query: {
      /**
       * The requested artifact's ID.
       * @example "ARTIFACT-12345"
       */
      id: string;
      /** The version of the artifact that needs to be fetched. */
      version?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      ArtifactsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/artifacts.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets the requested artifact's information.
   *
   * @tags artifacts
   * @name ArtifactsGetPost
   * @request POST:/artifacts.get
   * @secure
   */
  artifactsGetPost = (data: ArtifactsGetRequest, params: RequestParams = {}) =>
    this.request<
      ArtifactsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/artifacts.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description List the artifacts attached to an object.
   *
   * @tags artifacts
   * @name ArtifactsList
   * @request GET:/artifacts.list
   * @secure
   */
  artifactsList = (
    query?: {
      /** The ID of the object to filter artifacts. */
      parent_id?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      ArtifactsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/artifacts.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description List the artifacts attached to an object.
   *
   * @tags artifacts
   * @name ArtifactsListPost
   * @request POST:/artifacts.list
   * @secure
   */
  artifactsListPost = (
    data: ArtifactsListRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      ArtifactsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/artifacts.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets the download URL for the artifact.
   *
   * @tags artifacts
   * @name ArtifactsLocate
   * @request GET:/artifacts.locate
   * @secure
   */
  artifactsLocate = (
    query: {
      /**
       * The ID of the artifact to get the URL for.
       * @example "ARTIFACT-12345"
       */
      id: string;
      /** The version of the artifact that needs to be fetched. */
      version?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      ArtifactsLocateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/artifacts.locate`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets the download URL for the artifact.
   *
   * @tags artifacts
   * @name ArtifactsLocatePost
   * @request POST:/artifacts.locate
   * @secure
   */
  artifactsLocatePost = (
    data: ArtifactsLocateRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      ArtifactsLocateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/artifacts.locate`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Creates an artifact and generates an upload URL for its data.
   *
   * @tags artifacts
   * @name ArtifactsPrepare
   * @request POST:/artifacts.prepare
   * @secure
   */
  artifactsPrepare = (
    data: ArtifactsPrepareRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      ArtifactsPrepareResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/artifacts.prepare`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Prepares a new version for an artifact, returning the URL and form data to upload the updated file.
   *
   * @tags artifacts
   * @name ArtifactsVersionsPrepare
   * @request POST:/artifacts.versions.prepare
   * @secure
   */
  artifactsVersionsPrepare = (
    data: ArtifactsVersionsPrepareRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      ArtifactsVersionsPrepareResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/artifacts.versions.prepare`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Creates a JWT corresponding to the requested token type for the authenticated user.
   *
   * @tags auth-tokens
   * @name AuthTokensCreate
   * @request POST:/auth-tokens.create
   * @secure
   */
  authTokensCreate = (
    data: AuthTokensCreateRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      AuthTokensCreateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorConflict
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/auth-tokens.create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Revokes the token that matches the given token ID issued under the given Dev organization.
   *
   * @tags auth-tokens
   * @name AuthTokensDelete
   * @request POST:/auth-tokens.delete
   * @secure
   */
  authTokensDelete = (
    data: AuthTokensDeleteRequest,
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
      path: `/auth-tokens.delete`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Gets the token metadata corresponding to the given token ID under the given Dev organization.
   *
   * @tags auth-tokens
   * @name AuthTokensGet
   * @request GET:/auth-tokens.get
   * @secure
   */
  authTokensGet = (
    query: {
      /** The unique identifier of the token under a given Dev organization. */
      token_id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      AuthTokensGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/auth-tokens.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets the token metadata corresponding to the given token ID under the given Dev organization.
   *
   * @tags auth-tokens
   * @name AuthTokensGetPost
   * @request POST:/auth-tokens.get
   * @secure
   */
  authTokensGetPost = (
    data: AuthTokensGetRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      AuthTokensGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/auth-tokens.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets the token metadata for all the tokens corresponding to the given token type issued for a given subject.
   *
   * @tags auth-tokens
   * @name AuthTokensList
   * @request GET:/auth-tokens.list
   * @secure
   */
  authTokensList = (
    query?: {
      /**
       * An identifier that represents the application, which requested the
       * token. Only relevant for application access tokens.
       */
      client_id?: string;
      /**
       * The type of the requested token. If no value is specified, the
       * response will include tokens of all the types.
       */
      requested_token_type?: AuthTokenRequestedTokenType;
      /**
       * The subject associated with the token. In the absence of this
       * parameter, the ID of the authenticated entity is treated as the
       * subject.
       */
      subject?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      AuthTokensListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/auth-tokens.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets the token metadata for all the tokens corresponding to the given token type issued for a given subject.
   *
   * @tags auth-tokens
   * @name AuthTokensListPost
   * @request POST:/auth-tokens.list
   * @secure
   */
  authTokensListPost = (
    data: AuthTokensListRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      AuthTokensListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/auth-tokens.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Revokes all the tokens that matches the given token type created by the authenticated user.
   *
   * @tags auth-tokens
   * @name AuthTokensSelfDelete
   * @request POST:/auth-tokens.self.delete
   * @secure
   */
  authTokensSelfDelete = (
    data: AuthTokensSelfDeleteRequest,
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
      path: `/auth-tokens.self.delete`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Updates token metadata of a token issued under a given Dev organization.
   *
   * @tags auth-tokens
   * @name AuthTokensUpdate
   * @request POST:/auth-tokens.update
   * @secure
   */
  authTokensUpdate = (
    data: AuthTokensUpdateRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      AuthTokensUpdateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/auth-tokens.update`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Creates a code change object.
   *
   * @tags code-changes
   * @name CodeChangesCreate
   * @request POST:/code-changes.create
   * @secure
   */
  codeChangesCreate = (
    data: CodeChangesCreateRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      CodeChangesCreateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/code-changes.create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Deletes a code change object.
   *
   * @tags code-changes
   * @name CodeChangesDelete
   * @request POST:/code-changes.delete
   * @secure
   */
  codeChangesDelete = (
    data: CodeChangesDeleteRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      CodeChangesDeleteResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/code-changes.delete`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets a code change object.
   *
   * @tags code-changes
   * @name CodeChangesGet
   * @request GET:/code-changes.get
   * @secure
   */
  codeChangesGet = (
    query: {
      /** The code change object ID. */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      CodeChangesGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/code-changes.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets a code change object.
   *
   * @tags code-changes
   * @name CodeChangesGetPost
   * @request POST:/code-changes.get
   * @secure
   */
  codeChangesGetPost = (
    data: CodeChangesGetRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      CodeChangesGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/code-changes.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists code change objects.
   *
   * @tags code-changes
   * @name CodeChangesList
   * @request GET:/code-changes.list
   * @secure
   */
  codeChangesList = (
    query?: {
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /**
       * The maximum number of code change objects to return. The default is
       * '50'.
       * @format int32
       */
      limit?: number;
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      CodeChangesListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/code-changes.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists code change objects.
   *
   * @tags code-changes
   * @name CodeChangesListPost
   * @request POST:/code-changes.list
   * @secure
   */
  codeChangesListPost = (
    data: CodeChangesListRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      CodeChangesListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/code-changes.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Updates a code change object.
   *
   * @tags code-changes
   * @name CodeChangesUpdate
   * @request POST:/code-changes.update
   * @secure
   */
  codeChangesUpdate = (
    data: CodeChangesUpdateRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      CodeChangesUpdateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/code-changes.update`,
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
       * @example ["PROD-12345"]
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
       * @example ["DEVU-12345"]
       */
      members?: string[];
      /**
       * Filters for conversations owned by any of these users.
       * @example ["DEVU-12345"]
       */
      owned_by?: string[];
      /**
       * Filters for conversations that are associated with any of the
       * provided Rev organizations.
       * @example ["REV-AbCdEfGh"]
       */
      rev_org?: string[];
      /** Filters for records with any of the provided SLA stages. */
      'sla_summary.stage'?: SlaSummaryStage[];
      /** Filters for conversations with any of the provided source channels. */
      source_channels?: string[];
      /** Filters for records in the provided stage(s) by name. */
      'stage.name'?: string[];
      /**
       * Filters for conversations with any of the provided tags.
       * @deprecated
       * @example ["TAG-12345"]
       */
      tags?: string[];
      /**
       * The ID of the tag.
       * @example "TAG-12345"
       */
      'tags_v2.id'?: string;
      /**
       * The value for the object's association with the tag. If specified,
       * the value must be one that's specified in the tag's allowed values.
       */
      'tags_v2.value'?: string;
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
       * @example ["PROD-12345"]
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
       * @example ["DEVU-12345"]
       */
      members?: string[];
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
      /**
       * Filters for conversations owned by any of these users.
       * @example ["DEVU-12345"]
       */
      owned_by?: string[];
      /**
       * Filters for conversations that are associated with any of the
       * provided Rev organizations.
       * @example ["REV-AbCdEfGh"]
       */
      rev_org?: string[];
      /** Filters for records with any of the provided SLA stages. */
      'sla_summary.stage'?: SlaSummaryStage[];
      /** Filters for conversations with any of the provided source channels. */
      source_channels?: string[];
      /** Filters for records in the provided stage(s) by name. */
      'stage.name'?: string[];
      /**
       * Filters for conversations with any of the provided tags.
       * @deprecated
       * @example ["TAG-12345"]
       */
      tags?: string[];
      /**
       * The ID of the tag.
       * @example "TAG-12345"
       */
      'tags_v2.id'?: string;
      /**
       * The value for the object's association with the tag. If specified,
       * the value must be one that's specified in the tag's allowed values.
       */
      'tags_v2.value'?: string;
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
   * @description Creates a new enterprise authentication connection for a Dev organization. This authentication connection will not be enabled by default for the organization and the user will need to explicitly enable this. Keep in mind that at a time, only one authentication connection can be enabled for a Dev organization. At present, only 5 enterprise connections can be created by an organization.
   *
   * @tags auth-connection, dev-orgs
   * @name DevOrgAuthConnectionsCreate
   * @request POST:/dev-orgs.auth-connections.create
   * @secure
   */
  devOrgAuthConnectionsCreate = (
    data: DevOrgAuthConnectionsCreateRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      DevOrgAuthConnectionsCreateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/dev-orgs.auth-connections.create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Deletes an authentication connection. Only enterprise connections which are explicitly set up for a Dev organization can be deleted. Default connections can not be deleted using this method.
   *
   * @tags auth-connection, dev-orgs
   * @name DevOrgAuthConnectionsDelete
   * @request POST:/dev-orgs.auth-connections.delete
   * @secure
   */
  devOrgAuthConnectionsDelete = (
    data: DevOrgAuthConnectionsDeleteRequest,
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
      path: `/dev-orgs.auth-connections.delete`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves the details for an authentication connection.
   *
   * @tags auth-connection, dev-orgs
   * @name DevOrgAuthConnectionsGet
   * @request GET:/dev-orgs.auth-connections.get
   * @secure
   */
  devOrgAuthConnectionsGet = (
    query: {
      /** ID of the authentication connection. */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      DevOrgAuthConnectionsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/dev-orgs.auth-connections.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Retrieves the details for an authentication connection.
   *
   * @tags auth-connection, dev-orgs
   * @name DevOrgAuthConnectionsGetPost
   * @request POST:/dev-orgs.auth-connections.get
   * @secure
   */
  devOrgAuthConnectionsGetPost = (
    data: DevOrgAuthConnectionsGetRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      DevOrgAuthConnectionsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/dev-orgs.auth-connections.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists all the authentication connections available for a Dev organization. This list will include both social and enterprise connections which are either available by default or are explicitly created by the user.
   *
   * @tags auth-connection, dev-orgs
   * @name DevOrgAuthConnectionsList
   * @request GET:/dev-orgs.auth-connections.list
   * @secure
   */
  devOrgAuthConnectionsList = (params: RequestParams = {}) =>
    this.request<
      DevOrgAuthConnectionsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/dev-orgs.auth-connections.list`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists all the authentication connections available for a Dev organization. This list will include both social and enterprise connections which are either available by default or are explicitly created by the user.
   *
   * @tags auth-connection, dev-orgs
   * @name DevOrgAuthConnectionsListPost
   * @request POST:/dev-orgs.auth-connections.list
   * @secure
   */
  devOrgAuthConnectionsListPost = (data: Empty, params: RequestParams = {}) =>
    this.request<
      DevOrgAuthConnectionsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/dev-orgs.auth-connections.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Enable or disable an authentication connection for a Dev organization. Currently, only 1 authentication connection can be enabled at a time. When a new authentication connection is enabled, the connection which is currently enabled for the Dev organization is automatically disabled.
   *
   * @tags auth-connection, dev-orgs
   * @name DevOrgAuthConnectionsToggle
   * @request POST:/dev-orgs.auth-connections.toggle
   * @secure
   */
  devOrgAuthConnectionsToggle = (
    data: DevOrgAuthConnectionsToggleRequest,
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
      path: `/dev-orgs.auth-connections.toggle`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Updates an authentication connection.
   *
   * @tags auth-connection, dev-orgs
   * @name DevOrgAuthConnectionsUpdate
   * @request POST:/dev-orgs.auth-connections.update
   * @secure
   */
  devOrgAuthConnectionsUpdate = (
    data: DevOrgAuthConnectionsUpdateRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      DevOrgAuthConnectionsUpdateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/dev-orgs.auth-connections.update`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets the requested user's information.
   *
   * @tags dev-users
   * @name DevUsersGet
   * @request GET:/dev-users.get
   * @secure
   */
  devUsersGet = (
    query: {
      /** User ID of the requested Dev user. */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      DevUsersGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/dev-users.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets the requested user's information.
   *
   * @tags dev-users
   * @name DevUsersGetPost
   * @request POST:/dev-users.get
   * @secure
   */
  devUsersGetPost = (data: DevUsersGetRequest, params: RequestParams = {}) =>
    this.request<
      DevUsersGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/dev-users.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Links an external/secondary identity to the Dev user.
   *
   * @tags dev-users
   * @name DevUsersIdentitiesLink
   * @request POST:/dev-users.identities.link
   * @secure
   */
  devUsersIdentitiesLink = (
    data: DevUsersIdentitiesLinkRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      DevUsersIdentitiesLinkResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/dev-users.identities.link`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Unlinks an external/secondary identity from the Dev user.
   *
   * @tags dev-users
   * @name DevUsersIdentitiesUnlink
   * @request POST:/dev-users.identities.unlink
   * @secure
   */
  devUsersIdentitiesUnlink = (
    data: DevUsersIdentitiesUnlinkRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      DevUsersIdentitiesUnlinkResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/dev-users.identities.unlink`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists users within your organization.
   *
   * @tags dev-users
   * @name DevUsersList
   * @request GET:/dev-users.list
   * @secure
   */
  devUsersList = (
    query?: {
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /** Filters Dev users based on email addresses. */
      email?: string[];
      /** Unique ID of the user in the external source. */
      'external_identity.id'?: string;
      /** Issuer of the external identity of the user. */
      'external_identity.issuer'?: string;
      /**
       * The maximum number of Dev users to return. The default is '50'.
       * @format int32
       */
      limit?: number;
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
      /** Fields to sort the Dev users by and the direction to sort them. */
      sort_by?: string[];
      /** Filters Dev users based on state. */
      state?: UserState[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      DevUsersListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/dev-users.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists users within your organization.
   *
   * @tags dev-users
   * @name DevUsersListPost
   * @request POST:/dev-users.list
   * @secure
   */
  devUsersListPost = (data: DevUsersListRequest, params: RequestParams = {}) =>
    this.request<
      DevUsersListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/dev-users.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets the authenticated user's information.
   *
   * @tags dev-users
   * @name DevUsersSelf
   * @request GET:/dev-users.self
   * @secure
   */
  devUsersSelf = (params: RequestParams = {}) =>
    this.request<
      DevUsersSelfResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/dev-users.self`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets the authenticated user's information.
   *
   * @tags dev-users
   * @name DevUsersSelfPost
   * @request POST:/dev-users.self
   * @secure
   */
  devUsersSelfPost = (data: DevUsersSelfRequest, params: RequestParams = {}) =>
    this.request<
      DevUsersSelfResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/dev-users.self`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Updates the authenticated user.
   *
   * @tags dev-users
   * @name DevUsersSelfUpdate
   * @request POST:/dev-users.self.update
   * @secure
   */
  devUsersSelfUpdate = (
    data: DevUsersSelfUpdateRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      DevUsersUpdateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/dev-users.self.update`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Updates the user corresponding to the input Id.
   *
   * @tags dev-users
   * @name DevUsersUpdate
   * @request POST:/dev-users.update
   * @secure
   */
  devUsersUpdate = (data: DevUsersUpdateRequest, params: RequestParams = {}) =>
    this.request<
      DevUsersUpdateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/dev-users.update`,
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
       * @example ["DEVU-12345"]
       */
      members?: string[];
      /**
       * Filters for engagements with the provided parent.
       * @example ["ACC-12345"]
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
       * @example ["DEVU-12345"]
       */
      members?: string[];
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
      /**
       * Filters for engagements with the provided parent.
       * @example ["ACC-12345"]
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
      /** Filters the groups based on the group type. */
      group_type?: GroupType[];
      /** Whether to fetch default or custom groups. */
      is_default?: boolean;
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
   * @description Adds a member to a group.
   *
   * @tags groups
   * @name GroupMembersAdd
   * @request POST:/groups.members.add
   * @secure
   */
  groupMembersAdd = (
    data: GroupMembersAddRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      GroupMembersAddResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/groups.members.add`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists the members in a group.
   *
   * @tags groups
   * @name GroupMembersList
   * @request GET:/groups.members.list
   * @secure
   */
  groupMembersList = (
    query: {
      /** ID of the group for which to list members. */
      group: string;
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /**
       * The maximum number of members to return. If not set, then the default
       * is '50'.
       * @format int32
       */
      limit?: number;
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      GroupMembersListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/groups.members.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists the members in a group.
   *
   * @tags groups
   * @name GroupMembersListPost
   * @request POST:/groups.members.list
   * @secure
   */
  groupMembersListPost = (
    data: GroupMembersListRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      GroupMembersListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/groups.members.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Removes a member from a group.
   *
   * @tags groups
   * @name GroupMembersRemove
   * @request POST:/groups.members.remove
   * @secure
   */
  groupMembersRemove = (
    data: GroupMembersRemoveRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      GroupMembersRemoveResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/groups.members.remove`,
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
   * @description Creates an incident.
   *
   * @tags operate
   * @name IncidentsCreate
   * @request POST:/incidents.create
   * @secure
   */
  incidentsCreate = (
    data: IncidentsCreateRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      IncidentsCreateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/incidents.create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Deletes an incident.
   *
   * @tags operate
   * @name IncidentsDelete
   * @request POST:/incidents.delete
   * @secure
   */
  incidentsDelete = (
    data: IncidentsDeleteRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      IncidentsDeleteResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/incidents.delete`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets an incident.
   *
   * @tags operate
   * @name IncidentsGet
   * @request GET:/incidents.get
   * @secure
   */
  incidentsGet = (
    query: {
      /** The ID of the incident to get. */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      IncidentsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/incidents.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets an incident.
   *
   * @tags operate
   * @name IncidentsGetPost
   * @request POST:/incidents.get
   * @secure
   */
  incidentsGetPost = (data: IncidentsGetRequest, params: RequestParams = {}) =>
    this.request<
      IncidentsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/incidents.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists collections of incidents by groups.
   *
   * @tags operate
   * @name IncidentsGroup
   * @request GET:/incidents.group
   * @secure
   */
  incidentsGroup = (
    query: {
      /** The field to group the incidents by. */
      group_by: string;
      /** Filters for incidents that apply to any of the provided parts. */
      applies_to_parts?: string[];
      /**
       * Filters for incidents created by any of the provided users.
       * @example ["DEVU-12345"]
       */
      created_by?: string[];
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /**
       * The maximum number of groups to return. If not set, then the default
       * is '10'.
       * @format int32
       */
      limit?: number;
      /**
       * The maximum number of incidents to return for an individual group.
       * The default is '50'.
       * @format int32
       */
      limit_per_group?: number;
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
      /** Filters for incidents owned by any of the provided users. */
      owned_by?: string[];
      /** Filters for incidents containing any of the provided severities. */
      severity?: number[];
      /** Comma-separated fields to sort the incidents by. */
      sort_by?: string[];
      /** Filters for incidents in any of the provided stages. */
      stage?: string[];
      /** Filters for incidents by the provided titles. */
      title?: string[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      IncidentsGroupResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/incidents.group`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists collections of incidents by groups.
   *
   * @tags operate
   * @name IncidentsGroupPost
   * @request POST:/incidents.group
   * @secure
   */
  incidentsGroupPost = (
    data: IncidentsGroupRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      IncidentsGroupResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/incidents.group`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists incidents.
   *
   * @tags operate
   * @name IncidentsList
   * @request GET:/incidents.list
   * @secure
   */
  incidentsList = (
    query?: {
      /** Filters for incidents that apply to any of the provided parts. */
      applies_to_parts?: string[];
      /**
       * Filters for incidents created by any of the provided users.
       * @example ["DEVU-12345"]
       */
      created_by?: string[];
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /**
       * The maximum number of items.
       * @format int32
       */
      limit?: number;
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
      /** Filters for incidents owned by any of the provided users. */
      owned_by?: string[];
      /** Filters for incidents containing any of the provided severities. */
      severity?: number[];
      /** The list of fields to sort the items by and how to sort them. */
      sort_by?: string[];
      /** Filters for incidents in any of the provided stages. */
      stage?: string[];
      /** Filters for incidents by the provided titles. */
      title?: string[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      IncidentsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/incidents.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists incidents.
   *
   * @tags operate
   * @name IncidentsListPost
   * @request POST:/incidents.list
   * @secure
   */
  incidentsListPost = (
    data: IncidentsListRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      IncidentsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/incidents.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Updates an incident.
   *
   * @tags operate
   * @name IncidentsUpdate
   * @request POST:/incidents.update
   * @secure
   */
  incidentsUpdate = (
    data: IncidentsUpdateRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      IncidentsUpdateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/incidents.update`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description OAuth2 authorization callback.
   *
   * @tags keyring
   * @name KeyringsCreateCallback
   * @request GET:/keyrings.authorize
   */
  keyringsCreateCallback = (
    query: {
      /** Code to exchange for an access token. */
      code: string;
      /** State value given to the authorization request. */
      state: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      void,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/keyrings.authorize`,
      method: 'GET',
      query: query,
      ...params,
    });

  /**
   * @description OAuth2 authorization callback.
   *
   * @tags keyring
   * @name KeyringsCreateCallbackPost
   * @request POST:/keyrings.authorize
   * @secure
   */
  keyringsCreateCallbackPost = (
    data: KeyringsCreateCallbackRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      void,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/keyrings.authorize`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
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
       * The object types to filter for, otherwise if not present, all object
       * types are included.
       */
      object_types?: LinkEndpointType[];
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
       * Whether to include custom metrics in the response. If not set, then
       * custom metrics are excluded.
       */
      include_custom_metrics?: boolean;
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
      /** The status of the metric definition. */
      status?: MetricDefinitionStatus[];
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
   * @description Ingest endpoint for DevRev metrics data from clients.
   *
   * @tags product-usage
   * @name MetricsDevrevIngest
   * @request POST:/metrics.devrev.ingest
   * @secure
   */
  metricsDevrevIngest = (
    data: MetricsDataIngestRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      void,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/metrics.devrev.ingest`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Generate a notification.
   *
   * @tags notifications
   * @name NotificationsSend
   * @request POST:/notifications.send
   * @secure
   */
  notificationsSend = (
    data: NotificationsSendRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      NotificationsSendResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/notifications.send`,
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
   * @description Creates new [part](https://devrev.ai/docs/product/parts).
   *
   * @tags parts
   * @name PartsCreate
   * @request POST:/parts.create
   * @secure
   */
  partsCreate = (data: PartsCreateRequest, params: RequestParams = {}) =>
    this.request<
      PartsCreateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/parts.create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Deletes a [part](https://devrev.ai/docs/product/parts).
   *
   * @tags parts
   * @name PartsDelete
   * @request POST:/parts.delete
   * @secure
   */
  partsDelete = (data: PartsDeleteRequest, params: RequestParams = {}) =>
    this.request<
      PartsDeleteResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/parts.delete`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets a [part's](https://devrev.ai/docs/product/parts) information.
   *
   * @tags parts
   * @name PartsGet
   * @request GET:/parts.get
   * @secure
   */
  partsGet = (
    query: {
      /**
       * The ID of the part to retrieve.
       * @example "PROD-12345"
       */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      PartsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/parts.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets a [part's](https://devrev.ai/docs/product/parts) information.
   *
   * @tags parts
   * @name PartsGetPost
   * @request POST:/parts.get
   * @secure
   */
  partsGetPost = (data: PartsGetRequest, params: RequestParams = {}) =>
    this.request<
      PartsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/parts.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists a collection of [parts](https://devrev.ai/docs/product/parts).
   *
   * @tags parts
   * @name PartsList
   * @request GET:/parts.list
   * @secure
   */
  partsList = (
    query?: {
      /**
       * Filters for parts created by any of these users.
       * @example ["DEVU-12345"]
       */
      created_by?: string[];
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /**
       * The maximum number of parts to return. The default is '50'.
       * @format int32
       */
      limit?: number;
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
      /** Filters for parts of the provided name(s). */
      name?: string[];
      /**
       * Filters for parts owned by any of these users.
       * @example ["DEVU-12345"]
       */
      owned_by?: string[];
      /**
       * Number of levels to fetch the part hierarchy up to.
       * @format int32
       * @min 1
       */
      'parent_part.level'?: number;
      /**
       * Part IDs to fetch the hierarchy for. Required if any parent_part.*
       * fields are provided.
       * @minItems 1
       * @example ["PROD-12345"]
       */
      'parent_part.parts'?: string[];
      /** Filters for parts of the provided type(s). */
      type?: PartType[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      PartsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/parts.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists a collection of [parts](https://devrev.ai/docs/product/parts).
   *
   * @tags parts
   * @name PartsListPost
   * @request POST:/parts.list
   * @secure
   */
  partsListPost = (data: PartsListRequest, params: RequestParams = {}) =>
    this.request<
      PartsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/parts.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Updates a [part's](https://devrev.ai/docs/product/parts) information.
   *
   * @tags parts
   * @name PartsUpdate
   * @request POST:/parts.update
   * @secure
   */
  partsUpdate = (data: PartsUpdateRequest, params: RequestParams = {}) =>
    this.request<
      PartsUpdateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/parts.update`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Creates a question-answer.
   *
   * @tags question-answers
   * @name CreateQuestionAnswer
   * @request POST:/question-answers.create
   * @secure
   */
  createQuestionAnswer = (
    data: QuestionAnswersCreateRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      QuestionAnswersCreateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/question-answers.create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Deletes a question-answer.
   *
   * @tags question-answers
   * @name DeleteQuestionAnswer
   * @request POST:/question-answers.delete
   * @secure
   */
  deleteQuestionAnswer = (
    data: QuestionAnswersDeleteRequest,
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
      path: `/question-answers.delete`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Gets a question-answer.
   *
   * @tags question-answers
   * @name GetQuestionAnswer
   * @request GET:/question-answers.get
   * @secure
   */
  getQuestionAnswer = (
    query: {
      /** The ID of the required question-answer. */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      QuestionAnswersGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/question-answers.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets a question-answer.
   *
   * @tags question-answers
   * @name GetQuestionAnswerPost
   * @request POST:/question-answers.get
   * @secure
   */
  getQuestionAnswerPost = (
    data: QuestionAnswersGetRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      QuestionAnswersGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/question-answers.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists a collection of question-answers.
   *
   * @tags question-answers
   * @name ListQuestionAnswers
   * @request GET:/question-answers.list
   * @secure
   */
  listQuestionAnswers = (
    query?: {
      /**
       * Filters for question-answer belonging to any of the provided
       * articles.
       * @example ["ARTICLE-12345"]
       */
      applies_to_articles?: string[];
      /**
       * Filters for question-answer belonging to any of the provided parts.
       * @example ["PROD-12345"]
       */
      applies_to_parts?: string[];
      /**
       * Filters for question-answers created by any of the provided users.
       * @example ["DEVU-12345"]
       */
      created_by?: string[];
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /**
       * The maximum number of question-answers to return. The default is
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
       * Filters for question-answers owned by any of the provided users.
       * @example ["DEVU-12345"]
       */
      owned_by?: string[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      QuestionAnswersListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/question-answers.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists a collection of question-answers.
   *
   * @tags question-answers
   * @name ListQuestionAnswersPost
   * @request POST:/question-answers.list
   * @secure
   */
  listQuestionAnswersPost = (
    data: QuestionAnswersListRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      QuestionAnswersListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/question-answers.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Updates a question-answer.
   *
   * @tags question-answers
   * @name UpdateQuestionAnswer
   * @request POST:/question-answers.update
   * @secure
   */
  updateQuestionAnswer = (
    data: QuestionAnswersUpdateRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      QuestionAnswersUpdateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/question-answers.update`,
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
      | ErrorConflict
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
   * @description Deletes the Rev organization.
   *
   * @tags rev-orgs
   * @name RevOrgsDelete
   * @request POST:/rev-orgs.delete
   * @secure
   */
  revOrgsDelete = (data: RevOrgsDeleteRequest, params: RequestParams = {}) =>
    this.request<
      RevOrgsDeleteResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/rev-orgs.delete`,
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
    query?: {
      /**
       * The ID of account for which default Rev organization is to be
       * fetched.
       * @example "ACC-12345"
       */
      account?: string;
      /**
       * The ID of the required Rev organization.
       * @example "REV-AbCdEfGh"
       */
      id?: string;
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
       * @example ["ACC-12345"]
       */
      account?: string[];
      /** Filters by creator. */
      created_by?: string[];
      /**
       * Filters for objects created after the provided timestamp (inclusive).
       * @format date-time
       * @example "2023-01-01T12:00:00.000Z"
       */
      'created_date.after'?: string;
      /**
       * Filters for objects created before the provided timestamp
       * (inclusive).
       * @format date-time
       * @example "2023-01-01T12:00:00.000Z"
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
      /** Filters for custom fields. */
      custom_fields?: object;
      /** Array of display names of Rev orgs to be filtered. */
      display_name?: string[];
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
       * @example "2023-01-01T12:00:00.000Z"
       */
      'modified_date.after'?: string;
      /**
       * Filters for objects created before the provided timestamp
       * (inclusive).
       * @format date-time
       * @example "2023-01-01T12:00:00.000Z"
       */
      'modified_date.before'?: string;
      /**
       * Fields to sort the Rev organizations by and the direction to sort
       * them.
       */
      sort_by?: string[];
      /** List of tags to be filtered. */
      tags?: string[];
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
      | ErrorConflict
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
      | ErrorConflict
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
       * @example "2023-01-01T12:00:00.000Z"
       */
      'created_date.after'?: string;
      /**
       * Filters for objects created before the provided timestamp
       * (inclusive).
       * @format date-time
       * @example "2023-01-01T12:00:00.000Z"
       */
      'created_date.before'?: string;
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /** Filters for custom fields. */
      custom_fields?: object;
      /** List of emails of Rev users to be filtered. */
      email?: string[];
      /** List of external refs to filter Rev users for. */
      external_ref?: string[];
      /** Value of is_verified field to filter the Rev users. */
      is_verified?: boolean;
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
       * @example "2023-01-01T12:00:00.000Z"
       */
      'modified_date.after'?: string;
      /**
       * Filters for objects created before the provided timestamp
       * (inclusive).
       * @format date-time
       * @example "2023-01-01T12:00:00.000Z"
       */
      'modified_date.before'?: string;
      /** List of phone numbers, in E.164 format, to filter Rev users on. */
      phone_numbers?: string[];
      /**
       * List of IDs of Rev organizations to be filtered.
       * @example ["REV-AbCdEfGh"]
       */
      rev_org?: string[];
      /** Fields to sort the Rev users by and the direction to sort them. */
      sort_by?: string[];
      /** List of tags to be filtered. */
      tags?: string[];
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
      | ErrorConflict
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
      /**
       * The leaf type. Used for inferring the default stage diagram and
       * tenant fragment ID.
       */
      leaf_type?: string;
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
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /** Whether only deprecated fragments should be filtered. */
      deprecated?: boolean;
      /** The list of leaf types. */
      leaf_type?: string[];
      /**
       * The maximum number of items.
       * @format int32
       */
      limit?: number;
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
      /**
       * List of fields which are not required in the payload and can be
       * pruned away.
       */
      prune?: CustomSchemaFragmentsListRequestPrune[];
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
   * @description Gets a stock schema fragment.
   *
   * @tags customization
   * @name StockSchemaFragmentsGet
   * @request GET:/schemas.stock.get
   * @secure
   */
  stockSchemaFragmentsGet = (
    query?: {
      /** The ID of the stock schema fragment. */
      id?: string;
      /** The leaf type this fragment applies to. */
      leaf_type?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      StockSchemaFragmentsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/schemas.stock.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets a stock schema fragment.
   *
   * @tags customization
   * @name StockSchemaFragmentsGetPost
   * @request POST:/schemas.stock.get
   * @secure
   */
  stockSchemaFragmentsGetPost = (
    data: StockSchemaFragmentsGetRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      StockSchemaFragmentsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/schemas.stock.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists stock schema fragments.
   *
   * @tags customization
   * @name StockSchemaFragmentsList
   * @request GET:/schemas.stock.list
   * @secure
   */
  stockSchemaFragmentsList = (
    query?: {
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /**
       * Filter preset to specify whether to filter only customization enabled
       * leaf types.
       */
      filter_preset?: StockSchemaFragmentsListRequestFilterPreset;
      /** The list of leaf types. */
      leaf_type?: string[];
      /**
       * The maximum number of items.
       * @format int32
       */
      limit?: number;
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
      /**
       * List of fields which are not required in the payload and can be
       * pruned away.
       */
      prune?: StockSchemaFragmentsListRequestPrune[];
      /** The list of fields to sort the items by and how to sort them. */
      sort_by?: string[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      StockSchemaFragmentsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/schemas.stock.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists stock schema fragments.
   *
   * @tags customization
   * @name StockSchemaFragmentsListPost
   * @request POST:/schemas.stock.list
   * @secure
   */
  stockSchemaFragmentsListPost = (
    data: StockSchemaFragmentsListRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      StockSchemaFragmentsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/schemas.stock.list`,
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
   * @description Searches for records based on a given query.
   *
   * @tags search
   * @name SearchCore
   * @request GET:/search.core
   * @secure
   */
  searchCore = (
    query: {
      /**
       * The query string. Search query language:
       * https://docs.devrev.ai/product/search#fields
       */
      query: string;
      /**
       * The cursor from where to begin iteration. Start from beginning if not
       * provided.
       */
      cursor?: string;
      /**
       * The maximum number of items to return in a page. The default is '10'.
       * @format int32
       */
      limit?: number;
      /** The namespaces to search in. */
      namespaces?: SearchNamespace[];
      /**
       * The property on which to sort the search results. The default is
       * RELEVANCE.
       */
      sort_by?: SearchSortByParam;
      /** Sorting order. The default is DESCENDING. */
      sort_order?: SearchSortOrderParam;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      SearchCoreResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/search.core`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Searches for records based on a given query.
   *
   * @tags search
   * @name SearchCorePost
   * @request POST:/search.core
   * @secure
   */
  searchCorePost = (data: SearchCoreRequest, params: RequestParams = {}) =>
    this.request<
      SearchCoreResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/search.core`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Performs search, using a combination of syntactic and semantic search.
   *
   * @tags search
   * @name SearchHybrid
   * @request GET:/search.hybrid
   * @secure
   */
  searchHybrid = (
    query: {
      /** The hybrid namespace to search in. */
      namespace: SearchHybridNamespace;
      /**
       * The query string.
       * @minLength 1
       * @maxLength 400
       */
      query: string;
      /**
       * The maximum number of items to return in a page. The default is '10'.
       * @format int32
       * @min 0
       * @max 50
       */
      limit?: number;
      /**
       * The weightage for semantic search. Values between 0 and 1 are
       * accepted.
       * @format float
       * @min 0
       * @max 1
       */
      semantic_weight?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      SearchHybridResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/search.hybrid`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Performs search, using a combination of syntactic and semantic search.
   *
   * @tags search
   * @name SearchHybridPost
   * @request POST:/search.hybrid
   * @secure
   */
  searchHybridPost = (data: SearchHybridRequest, params: RequestParams = {}) =>
    this.request<
      SearchHybridResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/search.hybrid`,
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
   * @description Gets an SLA tracker.
   *
   * @tags slas
   * @name SlaTrackersGet
   * @request GET:/sla-trackers.get
   * @secure
   */
  slaTrackersGet = (
    query: {
      /** The ID of the SLA tracker to get. */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      SlaTrackersGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/sla-trackers.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets an SLA tracker.
   *
   * @tags slas
   * @name SlaTrackersGetPost
   * @request POST:/sla-trackers.get
   * @secure
   */
  slaTrackersGetPost = (
    data: SlaTrackersGetRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      SlaTrackersGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/sla-trackers.get`,
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
      /** The object types the SLA applies to. */
      applies_to?: SlaAppliesTo[];
      /**
       * The Filter operator to be applied on the applies to object types
       * filter.
       */
      applies_to_op?: SlasFilterAppliesToOperatorType;
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
      /** The SLA types the filter matches. */
      sla_type?: SlaType[];
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
   * @description Gets snap-in resources for a user in a snap-in.
   *
   * @tags snap-ins
   * @name SnapInsResources
   * @request GET:/snap-ins.resources
   * @secure
   */
  snapInsResources = (
    query: {
      /** The ID of the snap-in to get resources for. */
      id: string;
      /** The ID of the user to get resources for. */
      user: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      SnapInsResourcesResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/snap-ins.resources`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets snap-in resources for a user in a snap-in.
   *
   * @tags snap-ins
   * @name SnapInsResourcesPost
   * @request POST:/snap-ins.resources
   * @secure
   */
  snapInsResourcesPost = (
    data: SnapInsResourcesRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      SnapInsResourcesResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/snap-ins.resources`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Create a snap widget object.
   *
   * @tags snap-widgets
   * @name SnapWidgetsCreate
   * @request POST:/snap-widgets.create
   * @secure
   */
  snapWidgetsCreate = (
    data: SnapWidgetsCreateRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      SnapWidgetsCreateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/snap-widgets.create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Creates a custom stage.
   *
   * @tags customization
   * @name CustomStagesCreate
   * @request POST:/stages.custom.create
   * @secure
   */
  customStagesCreate = (
    data: CustomStagesCreateRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      CustomStagesCreateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/stages.custom.create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets a custom stage.
   *
   * @tags customization
   * @name CustomStagesGet
   * @request GET:/stages.custom.get
   * @secure
   */
  customStagesGet = (
    query: {
      /** The ID of the custom stage to get. */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      CustomStagesGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/stages.custom.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets a custom stage.
   *
   * @tags customization
   * @name CustomStagesGetPost
   * @request POST:/stages.custom.get
   * @secure
   */
  customStagesGetPost = (
    data: CustomStagesGetRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      CustomStagesGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/stages.custom.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists custom stages.
   *
   * @tags customization
   * @name CustomStagesList
   * @request GET:/stages.custom.list
   * @secure
   */
  customStagesList = (
    query?: {
      /**
       * The cursor to resume iteration from, otherwise if not provided, then
       * iteration starts from the beginning.
       */
      cursor?: string;
      /**
       * The maximum number of items.
       * @format int32
       */
      limit?: number;
      /** The list of stage names. */
      name?: string[];
      /** The list of stage ordinals. */
      ordinal?: number[];
      /** The list of fields to sort the items by and how to sort them. */
      sort_by?: string[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      CustomStagesListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/stages.custom.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists custom stages.
   *
   * @tags customization
   * @name CustomStagesListPost
   * @request POST:/stages.custom.list
   * @secure
   */
  customStagesListPost = (
    data: CustomStagesListRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      CustomStagesListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/stages.custom.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Updates a custom stage.
   *
   * @tags customization
   * @name CustomStagesUpdate
   * @request POST:/stages.custom.update
   * @secure
   */
  customStagesUpdate = (
    data: CustomStagesUpdateRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      CustomStagesUpdateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/stages.custom.update`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Creates a custom state.
   *
   * @tags customization
   * @name CustomStatesCreate
   * @request POST:/states.custom.create
   * @secure
   */
  customStatesCreate = (
    data: CustomStatesCreateRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      CustomStatesCreateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/states.custom.create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets a custom state.
   *
   * @tags customization
   * @name CustomStatesGet
   * @request GET:/states.custom.get
   * @secure
   */
  customStatesGet = (
    query: {
      /** The ID of the custom state to get. */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      CustomStatesGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/states.custom.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets a custom state.
   *
   * @tags customization
   * @name CustomStatesGetPost
   * @request POST:/states.custom.get
   * @secure
   */
  customStatesGetPost = (
    data: CustomStatesGetRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      CustomStatesGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/states.custom.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists custom states.
   *
   * @tags customization
   * @name CustomStatesList
   * @request GET:/states.custom.list
   * @secure
   */
  customStatesList = (
    query?: {
      /**
       * The cursor to resume iteration from, otherwise if not provided, then
       * iteration starts from the beginning.
       */
      cursor?: string;
      /** Whether only final states should be filtered. */
      is_final?: boolean;
      /**
       * The maximum number of items.
       * @format int32
       */
      limit?: number;
      /** The list of state names. */
      name?: string[];
      /** The list of state ordinals. */
      ordinal?: number[];
      /** The list of fields to sort the items by and how to sort them. */
      sort_by?: string[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      CustomStatesListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/states.custom.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists custom states.
   *
   * @tags customization
   * @name CustomStatesListPost
   * @request POST:/states.custom.list
   * @secure
   */
  customStatesListPost = (
    data: CustomStatesListRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      CustomStatesListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/states.custom.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Updates a custom state.
   *
   * @tags customization
   * @name CustomStatesUpdate
   * @request POST:/states.custom.update
   * @secure
   */
  customStatesUpdate = (
    data: CustomStatesUpdateRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      CustomStatesUpdateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/states.custom.update`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Creates a schema for survey, which includes name and description of schema.
   *
   * @tags surveys
   * @name SurveysCreate
   * @request POST:/surveys.create
   * @secure
   */
  surveysCreate = (data: SurveysCreateRequest, params: RequestParams = {}) =>
    this.request<
      SurveysCreateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/surveys.create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Deletes the specified survey.
   *
   * @tags surveys
   * @name SurveysDelete
   * @request POST:/surveys.delete
   * @secure
   */
  surveysDelete = (data: SurveysDeleteRequest, params: RequestParams = {}) =>
    this.request<
      SurveysDeleteResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/surveys.delete`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description List surveys requested by the user.
   *
   * @tags surveys
   * @name SurveysList
   * @request GET:/surveys.list
   * @secure
   */
  surveysList = (
    query?: {
      /**
       * Filters for surveys created by any of these users.
       * @example ["DEVU-12345"]
       */
      created_by?: string[];
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /**
       * The maximum number of surveys to return. If not set, then the default
       * is '50'.
       * @format int32
       */
      limit?: number;
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
      /** Filters for surveys by name(s). */
      name?: string[];
      /** Fields to sort the surveys by and the direction to sort them. */
      sort_by?: string[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      SurveysListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/surveys.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description List surveys requested by the user.
   *
   * @tags surveys
   * @name SurveysListPost
   * @request POST:/surveys.list
   * @secure
   */
  surveysListPost = (data: SurveysListRequest, params: RequestParams = {}) =>
    this.request<
      SurveysListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/surveys.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description List survey responses requested by the user.
   *
   * @tags surveys
   * @name SurveysResponsesList
   * @request GET:/surveys.responses.list
   * @secure
   */
  surveysResponsesList = (
    query?: {
      /**
       * Filters for survey responses created by any of these users.
       * @example ["DEVU-12345"]
       */
      created_by?: string[];
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /**
       * The maximum number of survey responses to return. If not set, then
       * the default is '50'.
       * @format int32
       */
      limit?: number;
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
      /**
       * Filters for survey responses created for the objects.
       * @example ["ACC-12345"]
       */
      objects?: string[];
      /**
       * Filters for survey responses dispatched to any of these users.
       * @example ["DEVU-12345"]
       */
      recipient?: string[];
      /**
       * Fields to sort the survey responses by and the direction to sort
       * them.
       */
      sort_by?: string[];
      /** Filters for survey response stages. */
      stages?: number[];
      /** Filters for survey responses for the provided survey IDs. */
      surveys?: string[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      SurveysResponsesListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/surveys.responses.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description List survey responses requested by the user.
   *
   * @tags surveys
   * @name SurveysResponsesListPost
   * @request POST:/surveys.responses.list
   * @secure
   */
  surveysResponsesListPost = (
    data: SurveysResponsesListRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      SurveysResponsesListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/surveys.responses.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Sends a survey on the specified channels.
   *
   * @tags surveys
   * @name SurveysSend
   * @request POST:/surveys.send
   * @secure
   */
  surveysSend = (data: SurveysSendRequest, params: RequestParams = {}) =>
    this.request<
      SurveysSendResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/surveys.send`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Submits a user response to a survey, which is defined by the survey ID.
   *
   * @tags surveys
   * @name SurveysSubmit
   * @request POST:/surveys.submit
   * @secure
   */
  surveysSubmit = (data: SurveysSubmitRequest, params: RequestParams = {}) =>
    this.request<
      SurveysSubmitResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/surveys.submit`,
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
   * @description Creates a new tag, which is used to create associations between objects and a logical concept denoted by the tag's name.
   *
   * @tags tags
   * @name TagsCreate
   * @request POST:/tags.create
   * @secure
   */
  tagsCreate = (data: TagsCreateRequest, params: RequestParams = {}) =>
    this.request<
      TagsCreateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/tags.create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Deletes a tag.
   *
   * @tags tags
   * @name TagsDelete
   * @request POST:/tags.delete
   * @secure
   */
  tagsDelete = (data: TagsDeleteRequest, params: RequestParams = {}) =>
    this.request<
      TagsDeleteResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/tags.delete`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets a tag's information.
   *
   * @tags tags
   * @name TagsGet
   * @request GET:/tags.get
   * @secure
   */
  tagsGet = (
    query: {
      /**
       * The requested tag's ID.
       * @example "TAG-12345"
       */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      TagsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/tags.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets a tag's information.
   *
   * @tags tags
   * @name TagsGetPost
   * @request POST:/tags.get
   * @secure
   */
  tagsGetPost = (data: TagsGetRequest, params: RequestParams = {}) =>
    this.request<
      TagsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/tags.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists the available tags.
   *
   * @tags tags
   * @name TagsList
   * @request GET:/tags.list
   * @secure
   */
  tagsList = (
    query?: {
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /**
       * The maximum number of tags to return. The default is '50'.
       * @format int32
       */
      limit?: number;
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
      /** Filters for tags with the provided names. */
      name?: string[];
      /** Fields to sort tags by and the direction to sort them. */
      sort_by?: string[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      TagsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/tags.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists the available tags.
   *
   * @tags tags
   * @name TagsListPost
   * @request POST:/tags.list
   * @secure
   */
  tagsListPost = (data: TagsListRequest, params: RequestParams = {}) =>
    this.request<
      TagsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/tags.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Updates a tag's information.
   *
   * @tags tags
   * @name TagsUpdate
   * @request POST:/tags.update
   * @secure
   */
  tagsUpdate = (data: TagsUpdateRequest, params: RequestParams = {}) =>
    this.request<
      TagsUpdateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/tags.update`,
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
   * @description Deletes an entry from an object's timeline.
   *
   * @tags timeline-entries
   * @name TimelineEntriesDelete
   * @request POST:/timeline-entries.delete
   * @secure
   */
  timelineEntriesDelete = (
    data: TimelineEntriesDeleteRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      TimelineEntriesDeleteResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/timeline-entries.delete`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets an entry on an object's timeline.
   *
   * @tags timeline-entries
   * @name TimelineEntriesGet
   * @request GET:/timeline-entries.get
   * @secure
   */
  timelineEntriesGet = (
    query: {
      /**
       * The ID of the timeline entry to get.
       * @example "don:core:<partition>:devo/<dev-org-id>:ticket/123:timeline_event/<timeline-event-id>"
       */
      id: string;
      /**
       * If set, then gets the entry with the given external reference for the
       * provided entry ID's timeline.
       */
      external_ref?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      TimelineEntriesGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/timeline-entries.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets an entry on an object's timeline.
   *
   * @tags timeline-entries
   * @name TimelineEntriesGetPost
   * @request POST:/timeline-entries.get
   * @secure
   */
  timelineEntriesGetPost = (
    data: TimelineEntriesGetRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      TimelineEntriesGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/timeline-entries.get`,
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
       * @example "PROD-12345"
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
   * @description Allows publishing of events (example from plug widget).
   *
   * @tags event-source
   * @name TrackEventsPublish
   * @request POST:/track-events.publish
   * @secure
   */
  trackEventsPublish = (
    data: TrackEventsPublishRequest,
    params: RequestParams = {}
  ) =>
    this.request<
      TrackEventsPublishResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/track-events.publish`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Counts the number of Unit of Measurements based on the given filters.
   *
   * @tags product-usage
   * @name UomsCount
   * @request GET:/uoms.count
   * @secure
   */
  uomsCount = (
    query?: {
      /** List of aggregation types for filtering list of UOMs. */
      aggregation_types?: AggregationDetailAggregationType[];
      /**
       * List of Unit of Measurement (UOM) DONs to be used in filtering
       * complete list of UOMs defined in a Dev Org.
       */
      ids?: string[];
      /** List of metric names for filtering list of UOMs. */
      metric_names?: string[];
      /**
       * List of part IDs for filtering list of UOMs.
       * @example ["PROD-12345"]
       */
      part_ids?: string[];
      /**
       * List of product IDs for filtering list of UOMs.
       * @example ["PROD-12345"]
       */
      product_ids?: string[];
      /** List of unit types for filtering list of UOMs. */
      unit_types?: UnitType[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      UomsCountResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/uoms.count`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Counts the number of Unit of Measurements based on the given filters.
   *
   * @tags product-usage
   * @name UomsCountPost
   * @request POST:/uoms.count
   * @secure
   */
  uomsCountPost = (data: UomsCountRequest, params: RequestParams = {}) =>
    this.request<
      UomsCountResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/uoms.count`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Creates a Unit of Measurement on a part.
   *
   * @tags product-usage
   * @name UomsCreate
   * @request POST:/uoms.create
   * @secure
   */
  uomsCreate = (data: UomsCreateRequest, params: RequestParams = {}) =>
    this.request<
      UomsCreateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/uoms.create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Deletes a Unit of Measurement.
   *
   * @tags product-usage
   * @name UomsDelete
   * @request POST:/uoms.delete
   * @secure
   */
  uomsDelete = (data: UomsDeleteRequest, params: RequestParams = {}) =>
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
      path: `/uoms.delete`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Gets a Unit of Measurement.
   *
   * @tags product-usage
   * @name UomsGet
   * @request GET:/uoms.get
   * @secure
   */
  uomsGet = (
    query: {
      /** The Unit of Measurement (UOM)'s DON. */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      UomsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/uoms.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets a Unit of Measurement.
   *
   * @tags product-usage
   * @name UomsGetPost
   * @request POST:/uoms.get
   * @secure
   */
  uomsGetPost = (data: UomsGetRequest, params: RequestParams = {}) =>
    this.request<
      UomsGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/uoms.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets the Unit of Measurements based on the given filters.
   *
   * @tags product-usage
   * @name UomsList
   * @request GET:/uoms.list
   * @secure
   */
  uomsList = (
    query?: {
      /** List of aggregation types for filtering list of UOMs. */
      aggregation_types?: AggregationDetailAggregationType[];
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /**
       * List of Unit of Measurement (UOM) DONs to be used in filtering
       * complete list of UOMs defined in a Dev Org.
       */
      ids?: string[];
      /**
       * The maximum number of UOMs to be returned in a response. The default
       * is '50'.
       * @format int32
       */
      limit?: number;
      /** List of metric names for filtering list of UOMs. */
      metric_names?: string[];
      /**
       * The iteration mode to use, otherwise if not set, then "after" is
       * used.
       */
      mode?: ListMode;
      /**
       * List of part IDs for filtering list of UOMs.
       * @example ["PROD-12345"]
       */
      part_ids?: string[];
      /**
       * List of product IDs for filtering list of UOMs.
       * @example ["PROD-12345"]
       */
      product_ids?: string[];
      /**
       * Fields to sort the Unit Of Measuments (UOMs) by and the direction to
       * sort them.
       */
      sort_by?: string[];
      /** List of unit types for filtering list of UOMs. */
      unit_types?: UnitType[];
    },
    params: RequestParams = {}
  ) =>
    this.request<
      UomsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/uoms.list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets the Unit of Measurements based on the given filters.
   *
   * @tags product-usage
   * @name UomsListPost
   * @request POST:/uoms.list
   * @secure
   */
  uomsListPost = (data: UomsListRequest, params: RequestParams = {}) =>
    this.request<
      UomsListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/uoms.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Updates a Unit of Measurement.
   *
   * @tags product-usage
   * @name UomsUpdate
   * @request POST:/uoms.update
   * @secure
   */
  uomsUpdate = (data: UomsUpdateRequest, params: RequestParams = {}) =>
    this.request<
      UomsUpdateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/uoms.update`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Creates a new webhook target.
   *
   * @tags webhooks
   * @name WebhooksCreate
   * @request POST:/webhooks.create
   * @secure
   */
  webhooksCreate = (data: WebhooksCreateRequest, params: RequestParams = {}) =>
    this.request<
      WebhooksCreateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/webhooks.create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Deletes the requested webhook.
   *
   * @tags webhooks
   * @name WebhooksDelete
   * @request POST:/webhooks.delete
   * @secure
   */
  webhooksDelete = (data: WebhooksDeleteRequest, params: RequestParams = {}) =>
    this.request<
      WebhooksDeleteResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/webhooks.delete`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets the requested webhook's information.
   *
   * @tags webhooks
   * @name WebhooksGet
   * @request GET:/webhooks.get
   * @secure
   */
  webhooksGet = (
    query: {
      /**
       * ID for the webhook.
       * @example "don:integration:<partition>:devo/<dev-org-id>:webhook/<webhook-id>"
       */
      id: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      WebhooksGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/webhooks.get`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Gets the requested webhook's information.
   *
   * @tags webhooks
   * @name WebhooksGetPost
   * @request POST:/webhooks.get
   * @secure
   */
  webhooksGetPost = (data: WebhooksGetRequest, params: RequestParams = {}) =>
    this.request<
      WebhooksGetResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/webhooks.get`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists the webhooks.
   *
   * @tags webhooks
   * @name WebhooksList
   * @request GET:/webhooks.list
   * @secure
   */
  webhooksList = (params: RequestParams = {}) =>
    this.request<
      WebhooksListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/webhooks.list`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });

  /**
   * @description Lists the webhooks.
   *
   * @tags webhooks
   * @name WebhooksListPost
   * @request POST:/webhooks.list
   * @secure
   */
  webhooksListPost = (data: WebhooksListRequest, params: RequestParams = {}) =>
    this.request<
      WebhooksListResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/webhooks.list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Updates the requested webhook.
   *
   * @tags webhooks
   * @name WebhooksUpdate
   * @request POST:/webhooks.update
   * @secure
   */
  webhooksUpdate = (data: WebhooksUpdateRequest, params: RequestParams = {}) =>
    this.request<
      WebhooksUpdateResponse,
      | ErrorBadRequest
      | ErrorUnauthorized
      | ErrorForbidden
      | ErrorNotFound
      | ErrorTooManyRequests
      | ErrorInternalServerError
      | ErrorServiceUnavailable
    >({
      path: `/webhooks.update`,
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
       * @example ["PROD-12345"]
       */
      applies_to_part?: string[];
      /**
       * Filters for work created by any of these users.
       * @example ["DEVU-12345"]
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
      /**
       * Filters for issues with any of the provided Accounts.
       * @example ["ACC-12345"]
       */
      'issue.accounts'?: string[];
      /** Filters for issues with any of the provided priorities. */
      'issue.priority'?: IssuePriority[];
      /** Filters for issues with any of the provided priority enum ids. */
      'issue.priority_v2'?: number[];
      /**
       * Filters for issues with any of the provided Rev organizations.
       * @example ["REV-AbCdEfGh"]
       */
      'issue.rev_orgs'?: string[];
      /** Filters for records with any of the provided SLA stages. */
      'issue.sla_summary.stage'?: SlaSummaryStage[];
      /** Filters for issues with any of the sprint. */
      'issue.sprint'?: string[];
      /** Filters for issues with any of the provided subtypes. */
      'issue.subtype'?: string[];
      /**
       * Filters for opportunities belonging to any of the provided accounts.
       * @example ["ACC-12345"]
       */
      'opportunity.account'?: string[];
      /** Filters for opportunities with any of the provided contacts. */
      'opportunity.contacts'?: string[];
      /** Filters for opportunity with any of the provided subtypes. */
      'opportunity.subtype'?: string[];
      /**
       * Filters for work owned by any of these users.
       * @example ["DEVU-12345"]
       */
      owned_by?: string[];
      /**
       * Filters for work reported by any of these users.
       * @example ["DEVU-12345"]
       */
      reported_by?: string[];
      /** Fields to sort the work items by and the direction to sort them. */
      sort_by?: string[];
      /** Filters for records in the provided stage(s) by name. */
      'stage.name'?: string[];
      /** Filters for issues that are staged. */
      'staged_info.is_staged'?: boolean;
      /** Filters for works with selected sync statuses. */
      'sync_metadata.last_sync_in.status'?: SyncMetadataFilterSyncInFilterStatus[];
      /** Filters for works modified with selected sync units. */
      'sync_metadata.last_sync_in.sync_unit'?: string[];
      /** Filters for works with selected sync statuses. */
      'sync_metadata.last_sync_out.status'?: SyncMetadataFilterSyncOutFilterStatus[];
      /** Filters for works modified with selected sync units. */
      'sync_metadata.last_sync_out.sync_unit'?: string[];
      /** Filters for issues synced from this specific origin system. */
      'sync_metadata.origin_system'?: string[];
      /**
       * Filters for work with any of the provided tags.
       * @example ["TAG-12345"]
       */
      tags?: string[];
      /** Filters for tickets with any of the provided channels. */
      'ticket.channels'?: TicketChannels[];
      /** Filters for tickets belonging to specific groups. */
      'ticket.group'?: string[];
      /** Filters for tickets that are spam. */
      'ticket.is_spam'?: boolean;
      /** Filters for tickets that need response. */
      'ticket.needs_response'?: boolean;
      /**
       * Filters for tickets that are associated with any of the provided Rev
       * organizations.
       * @example ["REV-AbCdEfGh"]
       */
      'ticket.rev_org'?: string[];
      /** Filters for tickets with any of the provided severities. */
      'ticket.severity'?: TicketSeverity[];
      /** Filters for records with any of the provided SLA stages. */
      'ticket.sla_summary.stage'?: SlaSummaryStage[];
      /** Filters for tickets with any of the provided source channels. */
      'ticket.source_channel'?: string[];
      /** Filters for tickets with any of the provided subtypes. */
      'ticket.subtype'?: string[];
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
       * @example "ISS-12345"
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
       * @example ["PROD-12345"]
       */
      applies_to_part?: string[];
      /**
       * Filters for work created by any of these users.
       * @example ["DEVU-12345"]
       */
      created_by?: string[];
      /**
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
      /** Filters for custom fields. */
      custom_fields?: object;
      /**
       * Filters for issues with any of the provided Accounts.
       * @example ["ACC-12345"]
       */
      'issue.accounts'?: string[];
      /** Filters for issues with any of the provided priorities. */
      'issue.priority'?: IssuePriority[];
      /** Filters for issues with any of the provided priority enum ids. */
      'issue.priority_v2'?: number[];
      /**
       * Filters for issues with any of the provided Rev organizations.
       * @example ["REV-AbCdEfGh"]
       */
      'issue.rev_orgs'?: string[];
      /** Filters for records with any of the provided SLA stages. */
      'issue.sla_summary.stage'?: SlaSummaryStage[];
      /** Filters for issues with any of the sprint. */
      'issue.sprint'?: string[];
      /** Filters for issues with any of the provided subtypes. */
      'issue.subtype'?: string[];
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
       * @example ["ACC-12345"]
       */
      'opportunity.account'?: string[];
      /** Filters for opportunities with any of the provided contacts. */
      'opportunity.contacts'?: string[];
      /** Filters for opportunity with any of the provided subtypes. */
      'opportunity.subtype'?: string[];
      /**
       * Filters for work owned by any of these users.
       * @example ["DEVU-12345"]
       */
      owned_by?: string[];
      /**
       * Filters for work reported by any of these users.
       * @example ["DEVU-12345"]
       */
      reported_by?: string[];
      /** Fields to sort the works by and the direction to sort them. */
      sort_by?: string[];
      /** Filters for records in the provided stage(s) by name. */
      'stage.name'?: string[];
      /** Filters for issues that are staged. */
      'staged_info.is_staged'?: boolean;
      /** Filters for works with selected sync statuses. */
      'sync_metadata.last_sync_in.status'?: SyncMetadataFilterSyncInFilterStatus[];
      /** Filters for works modified with selected sync units. */
      'sync_metadata.last_sync_in.sync_unit'?: string[];
      /** Filters for works with selected sync statuses. */
      'sync_metadata.last_sync_out.status'?: SyncMetadataFilterSyncOutFilterStatus[];
      /** Filters for works modified with selected sync units. */
      'sync_metadata.last_sync_out.sync_unit'?: string[];
      /** Filters for issues synced from this specific origin system. */
      'sync_metadata.origin_system'?: string[];
      /**
       * Filters for work with any of the provided tags.
       * @example ["TAG-12345"]
       */
      tags?: string[];
      /** Filters for tickets with any of the provided channels. */
      'ticket.channels'?: TicketChannels[];
      /** Filters for tickets belonging to specific groups. */
      'ticket.group'?: string[];
      /** Filters for tickets that are spam. */
      'ticket.is_spam'?: boolean;
      /** Filters for tickets that need response. */
      'ticket.needs_response'?: boolean;
      /**
       * Filters for tickets that are associated with any of the provided Rev
       * organizations.
       * @example ["REV-AbCdEfGh"]
       */
      'ticket.rev_org'?: string[];
      /** Filters for tickets with any of the provided severities. */
      'ticket.severity'?: TicketSeverity[];
      /** Filters for records with any of the provided SLA stages. */
      'ticket.sla_summary.stage'?: SlaSummaryStage[];
      /** Filters for tickets with any of the provided source channels. */
      'ticket.source_channel'?: string[];
      /** Filters for tickets with any of the provided subtypes. */
      'ticket.subtype'?: string[];
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
