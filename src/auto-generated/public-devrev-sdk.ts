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

/** account */
export type Account = OrgBase & {
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
  /** The Tier of the corresponding Account. */
  tier?: string;
};

/**
 * accounts-create-request
 * Request object to create a new account in the Dev organization.
 */
export interface AccountsCreateRequest {
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
  /** Array of display names of accounts to be filtered. */
  display_name?: string[];
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
  /** Fields to sort the accounts by and the direction to sort them in. */
  sort_by?: string[];
  /** Filters for accounts on specified stages. */
  stage?: string[];
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
  /** Array of display names of accounts to be filtered. */
  display_name?: string[];
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
  /** Fields to sort the accounts by and the direction to sort them in. */
  sort_by?: string[];
  /** Filters for accounts on specified stages. */
  stage?: string[];
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
  /** Updated tier of the account. */
  tier?: string | null;
}

/**
 * accounts-update-response
 * Updated account object.
 */
export interface AccountsUpdateResponse {
  account: Account;
}

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

/** artifact */
export type Artifact = AtomBase;

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
  /**
   * Defines the type for the authentication connection. The configuration
   * for each authentication connection will depend on the type value.
   */
  type: AuthConnectionType;
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
  UrnDevrevParamsOauthTokenTypeRevinfo = 'urn:devrev:params:oauth:token-type:revinfo',
  UrnDevrevParamsOauthTokenTypeSession = 'urn:devrev:params:oauth:token-type:session',
  UrnDevrevParamsOauthTokenTypeSysu = 'urn:devrev:params:oauth:token-type:sysu',
  UrnDevrevParamsOauthTokenTypeUserinfo = 'urn:devrev:params:oauth:token-type:userinfo',
  UrnDevrevParamsOauthTokenTypeUserinfoProfile = 'urn:devrev:params:oauth:token-type:userinfo:profile',
  UrnIetfParamsOauthTokenTypeJwt = 'urn:ietf:params:oauth:token-type:jwt',
}

/** The type of the issued token. Bearer is the only supported token type. */
export enum AuthTokenTokenType {
  Bearer = 'bearer',
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
  /** An identifier which uniquely identifies a Rev org. */
  org_ref?: string;
  /** Carries Rev org info. */
  org_traits?: AuthTokensOrgTraits;
  /** The unique ID of the Rev user. */
  user_id?: string;
  /** An identifier which uniquely identifies a Rev user. */
  user_ref?: string;
  /** Carries Rev user info. */
  user_traits?: AuthTokensUserTraits;
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

/** capability */
export type Capability = PartBase;

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
   * Display name of the authentication connection. This name will be
   * visible to all the users when they sign in to this Dev
   * organization. For example, if the display_name is 'abclogin', then
   * it would appear on the login button as 'Log in to abclogin'.
   */
  display_name?: string;
  /**
   * Defines the type for the authentication connection. Different types of
   * authentication connections have different configuration parameters.
   */
  type: DevOrgAuthConnectionsCreateRequestType;
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
   * New display name of the authentication connection. This name will
   * be visible to all the users when they sign in to this Dev
   * organization. For example, if the display_name is 'abclogin', then
   * it would appear on the login button as 'Log in to abclogin'.
   */
  display_name?: string;
  /** ID of the authentication connection which is to be updated. */
  id: string;
  /**
   * Specifies the type for the authentication connection. Different types
   * of authentication connections have different configuration parameters
   * that can be updated.
   */
  type?: DevOrgAuthConnectionsUpdateRequestType;
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
 * dev-users-list-request
 * A request to get the list of Dev user's information.
 */
export interface DevUsersListRequest {
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

/** empty */
export type Empty = object;

/** enhancement */
export type Enhancement = PartBase;

/** enhancement-summary */
export type EnhancementSummary = PartBaseSummary;

/**
 * enum-value
 * Enum Value defines the structure for an enum.
 */
export interface EnumValue {
  /**
   * Unique ID of the enum value. This is immutable.
   * @format int64
   */
  id: number;
  /** Display label of the enum value. This is mutable. */
  label: string;
  /**
   * Order number of the enum value. This is mutable.
   * @format int64
   */
  ordinal: number;
}

/** error-bad-request */
export type ErrorBadRequest = ErrorBase &
  (
    | ErrorBadRequestBadRequest
    | ErrorBadRequestInvalidApiVersion
    | ErrorBadRequestInvalidEnumValue
    | ErrorBadRequestInvalidField
    | ErrorBadRequestMissingDependency
    | ErrorBadRequestMissingRequiredField
    | ErrorBadRequestParseError
    | ErrorBadRequestStaleSchemaFragments
    | ErrorBadRequestUnexpectedJsonType
    | ErrorBadRequestValueNotPermitted
  ) & {
    type: ErrorBadRequestType;
  };

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
  BadRequest = 'bad_request',
  InvalidApiVersion = 'invalid_api_version',
  InvalidEnumValue = 'invalid_enum_value',
  InvalidField = 'invalid_field',
  MissingDependency = 'missing_dependency',
  MissingRequiredField = 'missing_required_field',
  ParseError = 'parse_error',
  StaleSchemaFragments = 'stale_schema_fragments',
  UnexpectedJsonType = 'unexpected_json_type',
  ValueNotPermitted = 'value_not_permitted',
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
}

/** event-account-updated */
export interface EventAccountUpdated {
  account: Account;
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
}

/** event-dev-user-updated */
export interface EventDevUserUpdated {
  dev_user: DevUser;
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
}

/** event-part-updated */
export interface EventPartUpdated {
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
}

/** event-rev-org-updated */
export interface EventRevOrgUpdated {
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
}

/** event-rev-user-updated */
export interface EventRevUserUpdated {
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
}

/** event-work-updated */
export interface EventWorkUpdated {
  work: Work;
}

/**
 * external-identity
 * External identity of a user.
 */
export type ExternalIdentity = object;

/** feature */
export type Feature = PartBase;

/** feature-summary */
export type FeatureSummary = PartBaseSummary;

/** group-summary */
export type GroupSummary = AtomBaseSummary;

/** issue */
export type Issue = WorkBase & {
  /** Parts associated based on git events. */
  developed_with?: PartSummary[];
  /** Priority of the work based upon impact and criticality. */
  priority?: IssuePriority;
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

/**
 * job-history-item
 * Defines a job history line item.
 */
export interface JobHistoryItem {
  /** Enum Value defines the structure for an enum. */
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

/**
 * legacy-stage
 * Describes the current stage of a work item.
 */
export interface LegacyStage {
  /** Current stage name of the work item. */
  name: string;
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

/** metric-definition-summary */
export type MetricDefinitionSummary = AtomBaseSummary & {
  /** Human readable name of the metric. */
  name?: string;
};

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

/** org-summary */
export type OrgSummary = RevOrgSummary & {
  type: OrgType;
};

export enum OrgType {
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
  /** Description of the part. */
  description?: string;
  /** Name of the part. */
  name: string;
  /** The users that own the part. */
  owned_by: UserSummary[];
  /** Tags associated with the object. */
  tags?: TagWithValue[];
};

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

/** parts-create-request */
export type PartsCreateRequest = (
  | PartsCreateRequestCapability
  | PartsCreateRequestEnhancement
  | PartsCreateRequestFeature
  | PartsCreateRequestProduct
) & {
  /**
   * The IDs of the artifacts.
   * @example ["ARTIFACT-12345"]
   */
  artifacts?: string[];
  /** Description of the part. */
  description?: string;
  /** Name of the part. */
  name: string;
  /**
   * The users that own the part.
   * @example ["DEVU-12345"]
   */
  owned_by: string[];
  type: PartType;
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
  /** Filters for parts of the provided type(s). */
  type?: PartType[];
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
  artifacts?: PartsUpdateRequestArtifacts;
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
  type?: PartType;
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
  target_close_date?: string;
  /**
   * Updates the target start date of the enhancement. Example Date
   * Format: 2000-11-01T01:01:01Z
   * @format date-time
   * @example "2023-01-01T12:00:00.000Z"
   */
  target_start_date?: string;
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

/** rev-org */
export type RevOrg = OrgBase & {
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
};

/** rev-org-summary */
export type RevOrgSummary = OrgBaseSummary;

/**
 * rev-orgs-create-request
 * Request object to create a new Rev organization in the Dev
 * organization.
 */
export interface RevOrgsCreateRequest {
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
  /** Filters by creator. */
  created_by?: string[];
  created_date?: DateTimeFilter;
  /**
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
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
  /** The tier of the RevOrg. */
  tier?: string;
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
  rev_org?: OrgSummary;
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

/** snap-widget */
export interface SnapWidget {
  type: SnapWidgetType;
}

export type SnapWidgetType = string;

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
 * survey-aggregation-filter
 * The filter for survey aggregation.
 */
export type SurveyAggregationFilter = object;

/** survey-response */
export type SurveyResponse = AtomBase & {
  /** The unique ID associated with the dispatched survey. */
  dispatch_id?: string;
  /** The ID of the object for which survey is taken. */
  object?: string;
  recipient?: UserSummary;
  /** Response for the survey. */
  response?: object;
  /** The ID of the survey for which response is taken. */
  survey?: string;
};

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

/** sys-user-summary */
export type SysUserSummary = UserBaseSummary;

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

/** ticket */
export type Ticket = WorkBase & {
  /** Channels of the ticket. */
  channels?: TicketChannels[];
  group?: GroupSummary;
  rev_org?: OrgSummary;
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
}

/** Severity of the ticket. */
export enum TicketSeverity {
  Blocker = 'blocker',
  High = 'high',
  Low = 'low',
  Medium = 'medium',
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

/**
 * timeline-entries-create-request
 * The request to create a timeline entry for an object.
 */
export type TimelineEntriesCreateRequest =
  TimelineEntriesCreateRequestTimelineComment & {
    /**
     * If set, then the entry is ephemeral and will be deleted after the
     * provided time. The minimum value should be at least a minute more
     * than the current timestamp.
     * @format date-time
     * @example "2023-01-01T12:00:00.000Z"
     */
    expires_at?: string;
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
   * @maxItems 50
   * @example ["ARTIFACT-12345"]
   */
  artifacts?: string[];
  /** The comment's body. */
  body?: string;
  /** The type of the body to use for the comment. */
  body_type?: TimelineCommentBodyType;
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
   * The cursor to resume iteration from. If not provided, then
   * iteration starts from the beginning.
   */
  cursor?: string;
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
  /** The object that the Timeline entry belongs to. */
  object: string;
  /** The display ID of the object that the Timeline entry belongs to. */
  object_display_id: string;
  /** The type of object that the Timeline entry belongs to. */
  object_type?: TimelineEntryObjectType;
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
  Capability = 'capability',
  Conversation = 'conversation',
  Enhancement = 'enhancement',
  Feature = 'feature',
  Issue = 'issue',
  Product = 'product',
  RevOrg = 'rev_org',
  RevUser = 'rev_user',
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
export type UserSummary = (DevUserSummary | RevUserSummary | SysUserSummary) & {
  type: UserType;
};

export enum UserType {
  DevUser = 'dev_user',
  RevUser = 'rev_user',
  SysUser = 'sys_user',
}

/**
 * vista-group-item-summary
 * Vista group item.
 */
export type VistaGroupItemSummary = object;

/** webhook */
export type Webhook = AtomBase & {
  /** The event types that the webhook will receive. */
  event_types?: WebhookEventType[];
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
  account_created?: EventAccountCreated;
  account_deleted?: EventAccountDeleted;
  account_updated?: EventAccountUpdated;
  conversation_created?: EventConversationCreated;
  conversation_deleted?: EventConversationDeleted;
  conversation_updated?: EventConversationUpdated;
  dev_user_created?: EventDevUserCreated;
  dev_user_deleted?: EventDevUserDeleted;
  dev_user_updated?: EventDevUserUpdated;
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
  /** The event types that the webhook will receive. */
  type?: WebhookEventType;
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

/** The status of the webhook. */
export enum WebhookStatus {
  Active = 'active',
  Inactive = 'inactive',
  Unverified = 'unverified',
}

/**
 * webhooks-create-request
 * The request to create a new webhook.
 */
export interface WebhooksCreateRequest {
  /** The event types that the webhook endpoint will receive. */
  event_types?: WebhookEventType[];
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

/**
 * webhooks-update-response
 * The response to updating the webhook.
 */
export interface WebhooksUpdateResponse {
  webhook: Webhook;
}

/** work */
export type Work = (Issue | Ticket) & {
  type: WorkType;
};

/** work-base */
export type WorkBase = AtomBase & {
  applies_to_part?: PartSummary;
  /** The artifacts attached to the work item. */
  artifacts?: ArtifactSummary[];
  /** Body of the work object. */
  body?: string;
  /** The users that own the work. */
  owned_by: UserSummary[];
  /** Users that reported the work. */
  reported_by?: UserSummary[];
  /** Describes the current stage of a work item. */
  stage?: LegacyStage;
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

export enum WorkType {
  Issue = 'issue',
  Ticket = 'ticket',
}

/** works-create-request */
export type WorksCreateRequest = (
  | WorksCreateRequestIssue
  | WorksCreateRequestTicket
) & {
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
  type: WorkType;
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
   * The number of work items to return. The default is '50', the
   * maximum is '5000'.
   * @format int32
   */
  first?: number;
  issue?: WorksFilterIssue;
  /** Provides ways to specify date ranges on objects. */
  modified_date?: DateFilter;
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
  /** Filters for issues with any of the sprint. */
  sprint?: string[];
  /** Provides ways to specify date ranges on objects. */
  target_start_date?: DateFilter;
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
  | Empty
  | WorksUpdateRequestIssue
  | WorksUpdateRequestTicket
) & {
  /**
   * Updates the part that the work item applies to.
   * @example "PROD-12345"
   */
  applies_to_part?: string;
  artifacts?: WorksUpdateRequestArtifacts;
  /** Updated body of the work object, or unchanged if not provided. */
  body?: string;
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
  type?: WorkType;
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
      /** Array of display names of accounts to be filtered. */
      display_name?: string[];
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
      /** Fields to sort the accounts by and the direction to sort them in. */
      sort_by?: string[];
      /** Filters for accounts on specified stages. */
      stage?: string[];
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
      /** Array of display names of accounts to be filtered. */
      display_name?: string[];
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
      /** Fields to sort the accounts by and the direction to sort them in. */
      sort_by?: string[];
      /** Filters for accounts on specified stages. */
      stage?: string[];
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
       * The cursor to resume iteration from. If not provided, then iteration
       * starts from the beginning.
       */
      cursor?: string;
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
      /** Filters for issues with any of the sprint. */
      'issue.sprint'?: string[];
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
      /** Filters for issues with any of the sprint. */
      'issue.sprint'?: string[];
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
       * Filters for work owned by any of these users.
       * @example ["DEVU-12345"]
       */
      owned_by?: string[];
      /**
       * Filters for work reported by any of these users.
       * @example ["DEVU-12345"]
       */
      reported_by?: string[];
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
