/** artifact-summary */
export type ArtifactSummary = AtomBaseSummary;
/**
 * artifacts-locate-response
 * The response to getting an artifact's download URL.
 */
export interface ArtifactsLocateResponse {
    /**
     * The expiration timestamp of the URL.
     * @format date-time
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
     * @example "don:<partition>:core:devo/<dev-org-id>:artifact/<artifact-id>"
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
/**
 * auth-connection
 * Connection object that specifies the configuration for an
 * authentication connection that is set up for a Dev organization.
 */
export type AuthConnection = (AuthConnectionOptionsAzureAd | AuthConnectionOptionsGoogleApps | AuthConnectionOptionsOidc | AuthConnectionOptionsSaml | AuthConnectionOptionsSocial) & {
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
export declare enum AuthConnectionToggle {
    Disable = "disable",
    Enable = "enable"
}
/**
 * Defines the type for the authentication connection. The configuration
 * for each authentication connection will depend on the type value.
 */
export declare enum AuthConnectionType {
    GoogleApps = "google_apps",
    Oidc = "oidc",
    Samlp = "samlp",
    Social = "social",
    Waad = "waad"
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
     */
    expires_at?: string;
    /**
     * The time at which the token was issued.
     * @format date-time
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
export declare enum AuthTokenGrantType {
    UrnDevrevParamsOauthGrantTypeTokenIssue = "urn:devrev:params:oauth:grant-type:token-issue",
    UrnIetfParamsOauthGrantTypeTokenExchange = "urn:ietf:params:oauth:grant-type:token-exchange"
}
/** The type of the requested token. */
export declare enum AuthTokenRequestedTokenType {
    UrnDevrevParamsOauthTokenTypeAat = "urn:devrev:params:oauth:token-type:aat",
    UrnDevrevParamsOauthTokenTypeAatPublic = "urn:devrev:params:oauth:token-type:aat:public",
    UrnDevrevParamsOauthTokenTypeDev = "urn:devrev:params:oauth:token-type:dev",
    UrnDevrevParamsOauthTokenTypePat = "urn:devrev:params:oauth:token-type:pat",
    UrnDevrevParamsOauthTokenTypeRev = "urn:devrev:params:oauth:token-type:rev",
    UrnDevrevParamsOauthTokenTypeSession = "urn:devrev:params:oauth:token-type:session",
    UrnDevrevParamsOauthTokenTypeSessionDev0 = "urn:devrev:params:oauth:token-type:session:dev0",
    UrnDevrevParamsOauthTokenTypeSys = "urn:devrev:params:oauth:token-type:sys",
    UrnIetfParamsOauthTokenTypeJwt = "urn:ietf:params:oauth:token-type:jwt"
}
/** The status of the token. */
export declare enum AuthTokenStatus {
    Active = "active",
    Expired = "expired",
    Revoked = "revoked"
}
/** The type of the subject token. */
export declare enum AuthTokenSubjectTokenType {
    UrnDevrevParamsOauthTokenTypeJwtAuth0 = "urn:devrev:params:oauth:token-type:jwt:auth0",
    UrnDevrevParamsOauthTokenTypeJwtDev = "urn:devrev:params:oauth:token-type:jwt:dev",
    UrnDevrevParamsOauthTokenTypeRevinfo = "urn:devrev:params:oauth:token-type:revinfo",
    UrnDevrevParamsOauthTokenTypeSysu = "urn:devrev:params:oauth:token-type:sysu",
    UrnDevrevParamsOauthTokenTypeUserinfo = "urn:devrev:params:oauth:token-type:userinfo",
    UrnDevrevParamsOauthTokenTypeUserinfoProfile = "urn:devrev:params:oauth:token-type:userinfo:profile",
    UrnIetfParamsOauthTokenTypeJwt = "urn:ietf:params:oauth:token-type:jwt"
}
/** The type of the issued token. Bearer is the only supported token type. */
export declare enum AuthTokenTokenType {
    Bearer = "bearer"
}
/**
 * auth-tokens-create-request
 * A request to create a new token corresponding to the requested token
 * type.
 */
export interface AuthTokensCreateRequest {
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
     * The expected validity lifetime of the token in number of days.
     * @format int64
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
 * auth-tokens-get-response
 * The response to get the token metadata.
 */
export interface AuthTokensGetResponse {
    token: AuthToken;
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
    /** The display name of the Rev org. */
    display_name?: string;
    /** The domain of the Rev org. */
    domain?: string;
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
    /** An identifier which uniquely identifies a Rev user. */
    user_ref: string;
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
    /** The display name of the Rev user. */
    display_name?: string;
    /** The email address of the Rev user. */
    email?: string;
    /** The full name of the Rev user. */
    full_name?: string;
}
/**
 * dev-org-auth-connections-create-request
 * Request to create a new enterprise authentication connection.
 */
export type DevOrgAuthConnectionsCreateRequest = (AuthConnectionOptionsAzureAd | AuthConnectionOptionsGoogleApps | AuthConnectionOptionsOidc | AuthConnectionOptionsSaml) & {
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
export declare enum DevOrgAuthConnectionsCreateRequestType {
    GoogleApps = "google_apps",
    Oidc = "oidc",
    Samlp = "samlp",
    Waad = "waad"
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
export type DevOrgAuthConnectionsUpdateRequest = (AuthConnectionOptionsAzureAd | AuthConnectionOptionsGoogleApps | AuthConnectionOptionsOidc | AuthConnectionOptionsSaml) & {
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
    type: DevOrgAuthConnectionsUpdateRequestType;
};
/**
 * Specifies the type for the authentication connection. Different types
 * of authentication connections have different configuration parameters
 * that can be updated.
 */
export declare enum DevOrgAuthConnectionsUpdateRequestType {
    GoogleApps = "google_apps",
    None = "none",
    Oidc = "oidc",
    Samlp = "samlp",
    Waad = "waad"
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
    /** IDs of the Dev User outside the DevRev SOR. */
    external_identities?: ExternalIdentity[];
};
/** dev-user-summary */
export type DevUserSummary = UserBaseSummary;
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
 * dev-users-self-response
 * The response to getting the information for the authenticated user.
 */
export interface DevUsersSelfResponse {
    dev_user: DevUser;
}
/** empty */
export type Empty = object;
/** error-bad-request */
export type ErrorBadRequest = ErrorBase & (ErrorBadRequestBadRequest | ErrorBadRequestMissingRequiredField | ErrorBadRequestParseError) & {
    type: ErrorBadRequestType;
};
/** error-bad-request-bad-request */
export type ErrorBadRequestBadRequest = object;
/** error-bad-request-missing-required-field */
export interface ErrorBadRequestMissingRequiredField {
    /** The missing field's name. */
    field_name: string;
}
/** error-bad-request-parse-error */
export type ErrorBadRequestParseError = object;
export declare enum ErrorBadRequestType {
    BadRequest = "bad_request",
    MissingRequiredField = "missing_required_field",
    ParseError = "parse_error"
}
/** error-base */
export interface ErrorBase {
    /** The message associated with the error. */
    message?: string;
}
/** error-forbidden */
export type ErrorForbidden = ErrorBase & ErrorForbiddenForbidden & {
    type: ErrorForbiddenType;
};
/** error-forbidden-forbidden */
export type ErrorForbiddenForbidden = object;
export declare enum ErrorForbiddenType {
    Forbidden = "forbidden"
}
/** error-internal-server-error */
export type ErrorInternalServerError = ErrorBase & ErrorInternalServerErrorInternalError & {
    /**
     * A unique ID that's generated for the error that can be used for
     * inquiry.
     */
    reference_id?: string;
    type: ErrorInternalServerErrorType;
};
/** error-internal-server-error-internal-error */
export type ErrorInternalServerErrorInternalError = object;
export declare enum ErrorInternalServerErrorType {
    InternalError = "internal_error"
}
/** error-not-found */
export type ErrorNotFound = ErrorBase & ErrorNotFoundNotFound & {
    type: ErrorNotFoundType;
};
/** error-not-found-not-found */
export type ErrorNotFoundNotFound = object;
export declare enum ErrorNotFoundType {
    NotFound = "not_found"
}
/** error-service-unavailable */
export type ErrorServiceUnavailable = ErrorBase & ErrorServiceUnavailableServiceUnavailable & {
    type: ErrorServiceUnavailableType;
};
/** error-service-unavailable-service-unavailable */
export type ErrorServiceUnavailableServiceUnavailable = object;
export declare enum ErrorServiceUnavailableType {
    ServiceUnavailable = "service_unavailable"
}
/** error-too-many-requests */
export type ErrorTooManyRequests = ErrorBase & ErrorTooManyRequestsTooManyRequests & {
    /**
     * The number of seconds after which the client should retry.
     * @format int64
     */
    retry_after?: number;
    type: ErrorTooManyRequestsType;
};
/** error-too-many-requests-too-many-requests */
export type ErrorTooManyRequestsTooManyRequests = object;
export declare enum ErrorTooManyRequestsType {
    TooManyRequests = "too_many_requests"
}
/** error-unauthorized */
export type ErrorUnauthorized = ErrorBase & ErrorUnauthorizedUnauthenticated & {
    type: ErrorUnauthorizedType;
};
export declare enum ErrorUnauthorizedType {
    Unauthenticated = "unauthenticated"
}
/** error-unauthorized-unauthenticated */
export type ErrorUnauthorizedUnauthenticated = object;
/** event-part-created */
export interface EventPartCreated {
    part: Part;
}
/** event-part-deleted */
export interface EventPartDeleted {
    /**
     * The ID of the part that was deleted.
     * @example "don:<partition>:core:devo/<dev-org-id>:<part-type>/<part-id>"
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
     * @example "don:<partition>:identity:devo/<dev-org-id>:revo/<rev-org-id>"
     */
    id: string;
}
/** event-rev-org-updated */
export interface EventRevOrgUpdated {
    rev_org: RevOrg;
}
/** event-tag-created */
export interface EventTagCreated {
    tag: Tag;
}
/** event-tag-deleted */
export interface EventTagDeleted {
    /**
     * The ID of the tag that was deleted.
     * @example "don:<partition>:core:devo/<dev-org-id>:tag/<tag-id>"
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
    /** The ID of the timeline entry that was deleted. */
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
     * @example "don:<partition>:integration:devo/<dev-org-id>:webhook/<webhook-id>"
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
     * @example "don:<partition>:core:devo/<dev-org-id>:<work-type>/<work-id>"
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
/** issue */
export type Issue = WorkBase & {
    /** Priority of the work based upon impact and criticality. */
    priority?: IssuePriority;
};
/** Priority of the work based upon impact and criticality. */
export declare enum IssuePriority {
    P0 = "p0",
    P1 = "p1",
    P2 = "p2",
    P3 = "p3"
}
/**
 * The iteration mode to use. If "after", then entries after the provided
 * cursor will be returned, or if no cursor is provided, then from the
 * beginning. If "before", then entries before the provided cursor will be
 * returned, or if no cursor is provided, then from the end. Entries will
 * always be returned in the specified sort-by order.
 */
export declare enum ListMode {
    After = "after",
    Before = "before"
}
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
export declare enum OrgEnvironment {
    Production = "production",
    Staging = "staging",
    Test = "test"
}
/** org-summary */
export type OrgSummary = RevOrgSummary & {
    type: OrgType;
};
export declare enum OrgType {
    RevOrg = "rev_org"
}
/** part */
export type Part = Product & {
    type: PartType;
};
/** part-base */
export type PartBase = AtomBase & {
    /** The attached artifacts. */
    artifacts?: ArtifactSummary[];
    /** Description of the part. */
    description?: string;
    /** Name of the part. */
    name?: string;
    /** The users that own the part. */
    owned_by: UserSummary[];
    /** Describes the current stage of a work item. */
    stage?: Stage;
    /** Tags associated with the object. */
    tags?: TagWithValue[];
};
/** part-base-summary */
export type PartBaseSummary = AtomBaseSummary & {
    /** Name of the part. */
    name?: string;
};
/** part-summary */
export type PartSummary = ProductSummary & {
    type: PartType;
};
export declare enum PartType {
    Product = "product"
}
/** parts-create-request */
export type PartsCreateRequest = (PartsCreateRequestCapability | PartsCreateRequestFeature | PartsCreateRequestProduct) & {
    /** Description of the part. */
    description?: string;
    /** Name of the part. */
    name?: string;
    /**
     * The users that own the part.
     * @example ["don:<partition>:identity:devo/<dev-org-id>:devu/<dev-user-id>"]
     */
    owned_by: string[];
    type: PartType;
};
/** parts-create-request-capability */
export type PartsCreateRequestCapability = object;
/** parts-create-request-feature */
export type PartsCreateRequestFeature = object;
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
     * @example "don:<partition>:core:devo/<dev-org-id>:<part-type>/<part-id>"
     */
    id: string;
}
/** parts-delete-response */
export type PartsDeleteResponse = object;
/** parts-get-response */
export interface PartsGetResponse {
    part: Part;
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
export type PartsUpdateRequest = (PartsUpdateRequestCapability | PartsUpdateRequestFeature | PartsUpdateRequestProduct) & {
    /** The updated description of the part. */
    description?: string;
    /**
     * The ID of the part to update.
     * @example "don:<partition>:core:devo/<dev-org-id>:<part-type>/<part-id>"
     */
    id: string;
    /** The updated name of the part. */
    name?: string;
    type: PartType;
};
/** parts-update-request-capability */
export type PartsUpdateRequestCapability = object;
/** parts-update-request-feature */
export type PartsUpdateRequestFeature = object;
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
     * @example "don:<partition>:identity:devo/<dev-org-id>:revo/<rev-org-id>"
     */
    id: string;
}
/**
 * rev-orgs-delete-response
 * The response to deleting a Rev organization.
 */
export type RevOrgsDeleteResponse = object;
/**
 * rev-orgs-get-response
 * The response to getting a Rev organization's information.
 */
export interface RevOrgsGetResponse {
    rev_org: RevOrg;
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
     * @example "don:<partition>:identity:devo/<dev-org-id>:revo/<rev-org-id>"
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
/** rev-user-summary */
export type RevUserSummary = UserBaseSummary & {
    rev_org?: OrgSummary;
};
/** set-tag-with-value */
export interface SetTagWithValue {
    /**
     * The ID of the tag.
     * @example "don:<partition>:core:devo/<dev-org-id>:tag/<tag-id>"
     */
    id: string;
    /**
     * The value for the object's association with the tag. If specified,
     * the value must be one that's specified in the tag's allowed values.
     */
    value?: string;
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
 * stage-init
 * Sets an object's initial stage.
 */
export interface StageInit {
    /** The name of the stage. */
    name: string;
}
/**
 * stage-update
 * Updates an object's stage.
 */
export interface StageUpdate {
    /** The updated name of the stage, otherwise unchanged if not set. */
    name?: string;
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
     * @example "don:<partition>:core:devo/<dev-org-id>:tag/<tag-id>"
     */
    id: string;
}
/**
 * tags-delete-response
 * The response for deleting a tag.
 */
export type TagsDeleteResponse = object;
/**
 * tags-get-response
 * The response to getting a tag's information.
 */
export interface TagsGetResponse {
    tag: Tag;
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
     * @example "don:<partition>:core:devo/<dev-org-id>:tag/<tag-id>"
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
    rev_org?: OrgSummary;
    /** Severity of the ticket. */
    severity?: TicketSeverity;
};
/** Severity of the ticket. */
export declare enum TicketSeverity {
    Blocker = "blocker",
    High = "high",
    Low = "low",
    Medium = "medium"
}
/** timeline-comment */
export type TimelineComment = TimelineEntryBase & {
    /**
     * The comment's body. If the comment has been deleted, then no body
     * will appear in the response.
     */
    body?: string;
    /** The type of the body to use for the comment. */
    body_type?: TimelineCommentBodyType;
    /** The SnapKit Body of the comment. */
    snap_kit_body?: object;
};
/** The type of the body to use for the comment. */
export declare enum TimelineCommentBodyType {
    SnapKit = "snap_kit",
    Text = "text"
}
/**
 * timeline-entries-create-request
 * The request to create a timeline entry for an object.
 */
export type TimelineEntriesCreateRequest = TimelineEntriesCreateRequestTimelineComment & {
    /**
     * The ID of the object to create the timeline entry for.
     * @example "don:<partition>:core:devo/<dev-org-id>:<part-type>/<part-id>"
     */
    object: string;
    type: TimelineEntriesCreateRequestType;
};
/** timeline-entries-create-request-timeline-comment */
export interface TimelineEntriesCreateRequestTimelineComment {
    /** The comment's body. */
    body?: string;
    /** The type of the body to use for the comment. */
    body_type?: TimelineCommentBodyType;
    /** The SnapKit body of the comment. */
    snap_kit_body?: object;
}
export declare enum TimelineEntriesCreateRequestType {
    TimelineComment = "timeline_comment"
}
/**
 * timeline-entries-create-response
 * The response to creating a timeline entry for an object.
 */
export interface TimelineEntriesCreateResponse {
    timeline_entry: TimelineEntry;
}
/**
 * timeline-entries-get-response
 * The request to getting a timeline entry.
 */
export interface TimelineEntriesGetResponse {
    timeline_entry: TimelineEntry;
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
export type TimelineEntriesUpdateRequest = TimelineEntriesUpdateRequestTimelineComment & {
    /** The ID of the timeline entry to update. */
    id: string;
    type: TimelineEntriesUpdateRequestType;
};
/** timeline-entries-update-request-timeline-comment */
export interface TimelineEntriesUpdateRequestTimelineComment {
    /** The updated comment's body. */
    body?: string;
    /** The type of the body to use for the comment. */
    body_type?: TimelineCommentBodyType;
    /** The SnapKit body of the comment. */
    snap_kit_body?: object;
}
export declare enum TimelineEntriesUpdateRequestType {
    TimelineComment = "timeline_comment"
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
export type TimelineEntryBase = AtomBase;
export declare enum TimelineEntryType {
    TimelineComment = "timeline_comment"
}
/** user-base */
export type UserBase = AtomBase & {
    /** The user's display name. The name is non-unique and mutable. */
    display_name?: string;
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
    /** Email address of the user. */
    email?: string;
    /** Full name of the user. */
    full_name?: string;
    /** State of the user. */
    state?: UserState;
};
/** State of the user. */
export declare enum UserState {
    Active = "active",
    Deactivated = "deactivated",
    Locked = "locked",
    Shadow = "shadow",
    Unassigned = "unassigned"
}
/** user-summary */
export type UserSummary = (DevUserSummary | RevUserSummary | SysUserSummary) & {
    type: UserType;
};
export declare enum UserType {
    DevUser = "dev_user",
    RevUser = "rev_user",
    SysUser = "sys_user"
}
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
    /** The event's ID. */
    id: string;
    part_created?: EventPartCreated;
    part_deleted?: EventPartDeleted;
    part_updated?: EventPartUpdated;
    rev_org_created?: EventRevOrgCreated;
    rev_org_deleted?: EventRevOrgDeleted;
    rev_org_updated?: EventRevOrgUpdated;
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
     */
    timestamp?: string;
    /** The event types that the webhook will receive. */
    type?: WebhookEventType;
    verify?: WebhookEventVerify;
    webhook_created?: EventWebhookCreated;
    webhook_deleted?: EventWebhookDeleted;
    /**
     * ID of the webhook for the event.
     * @example "don:<partition>:integration:devo/<dev-org-id>:webhook/<webhook-id>"
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
export declare enum WebhookEventType {
    PartCreated = "part_created",
    PartDeleted = "part_deleted",
    PartUpdated = "part_updated",
    RevOrgCreated = "rev_org_created",
    RevOrgDeleted = "rev_org_deleted",
    RevOrgUpdated = "rev_org_updated",
    TagCreated = "tag_created",
    TagDeleted = "tag_deleted",
    TagUpdated = "tag_updated",
    TimelineEntryCreated = "timeline_entry_created",
    TimelineEntryDeleted = "timeline_entry_deleted",
    TimelineEntryUpdated = "timeline_entry_updated",
    Verify = "verify",
    WebhookCreated = "webhook_created",
    WebhookDeleted = "webhook_deleted",
    WebhookUpdated = "webhook_updated",
    WorkCreated = "work_created",
    WorkDeleted = "work_deleted",
    WorkUpdated = "work_updated"
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
export declare enum WebhookStatus {
    Active = "active",
    Inactive = "inactive",
    Unverified = "unverified"
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
     * @example "don:<partition>:integration:devo/<dev-org-id>:webhook/<webhook-id>"
     */
    id: string;
}
/**
 * webhooks-delete-response
 * The response to deleting the webhook.
 */
export type WebhooksDeleteResponse = object;
/**
 * webhooks-get-response
 * The response to getting the information for the webhook.
 */
export interface WebhooksGetResponse {
    webhook: Webhook;
}
/**
 * webhooks-list-response
 * The response to listing the webhooks.
 */
export interface WebhooksListResponse {
    /** The list of webhooks. */
    webhooks: Webhook[];
}
/** The action to update the webhook's status. */
export declare enum WebhooksUpdateAction {
    Activate = "activate",
    Deactivate = "deactivate"
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
     * @example "don:<partition>:integration:devo/<dev-org-id>:webhook/<webhook-id>"
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
    stage?: Stage;
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
export declare enum WorkType {
    Issue = "issue",
    Ticket = "ticket"
}
/** works-create-request */
export type WorksCreateRequest = (WorksCreateRequestIssue | WorksCreateRequestTicket) & {
    /**
     * The [part](https://devrev.ai/docs/product/parts) that the work
     * applies to. Specifying a part is required when creating tickets and
     * issues.
     * @example "don:<partition>:core:devo/<dev-org-id>:<part-type>/<part-id>"
     */
    applies_to_part: string;
    /**
     * The IDs of the artifacts to associate with the work item.
     * @example ["don:<partition>:core:devo/<dev-org-id>:artifact/<artifact-id>"]
     */
    artifacts?: string[];
    /** Body of the work object. */
    body?: string;
    /**
     * The users that own the work.
     * @example ["don:<partition>:identity:devo/<dev-org-id>:devu/<dev-user-id>"]
     */
    owned_by: string[];
    /**
     * The users that reported the work.
     * @example ["don:<partition>:identity:devo/<dev-org-id>:devu/<dev-user-id>"]
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
}
/** works-create-request-ticket */
export interface WorksCreateRequestTicket {
    /**
     * The Rev organization that the ticket is associated with.
     * @example "don:<partition>:identity:devo/<dev-org-id>:revo/<rev-org-id>"
     */
    rev_org?: string;
    /** Severity of the ticket. */
    severity?: TicketSeverity;
}
/** works-create-response */
export interface WorksCreateResponse {
    work: Work;
}
/** works-delete-request */
export interface WorksDeleteRequest {
    /**
     * The work's ID.
     * @example "don:<partition>:core:devo/<dev-org-id>:<work-type>/<work-id>"
     */
    id: string;
}
/** works-delete-response */
export type WorksDeleteResponse = object;
/** works-export-response */
export interface WorksExportResponse {
    /** The resulting collection of work items. */
    works: Work[];
}
/** works-get-response */
export interface WorksGetResponse {
    work: Work;
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
export type WorksUpdateRequest = (WorksUpdateRequestIssue | WorksUpdateRequestTicket) & {
    /**
     * Updates the part that the work applies to.
     * @example "don:<partition>:core:devo/<dev-org-id>:<part-type>/<part-id>"
     */
    applies_to_part?: string;
    artifacts?: WorksUpdateRequestArtifactIds;
    /** Updated body of the work object, or unchanged if not provided. */
    body?: string;
    /** The custom schema fragments to use. */
    custom_schema_fragments?: string[];
    /**
     * The work's ID.
     * @example "don:<partition>:core:devo/<dev-org-id>:<work-type>/<work-id>"
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
     * @example ["don:<partition>:core:devo/<dev-org-id>:artifact/<artifact-id>"]
     */
    set?: string[];
}
/** works-update-request-issue */
export interface WorksUpdateRequestIssue {
    /** Priority of the work based upon impact and criticality. */
    priority?: IssuePriority;
}
/** works-update-request-owned-by */
export interface WorksUpdateRequestOwnedBy {
    /**
     * Sets the owner IDs to the provided user IDs. This must not be
     * empty.
     * @example ["don:<partition>:identity:devo/<dev-org-id>:devu/<dev-user-id>"]
     */
    set?: string[];
}
/** works-update-request-reported-by */
export interface WorksUpdateRequestReportedBy {
    /**
     * Sets the users that reported the work to the provided user IDs.
     * @example ["don:<partition>:identity:devo/<dev-org-id>:devu/<dev-user-id>"]
     */
    set?: string[];
}
/** works-update-request-tags */
export interface WorksUpdateRequestTags {
    /** Sets the provided tags on the work item. */
    set?: SetTagWithValue[];
}
/** works-update-request-ticket */
export interface WorksUpdateRequestTicket {
    /**
     * Updates the Rev organization that the ticket is associated with.
     * @example "don:<partition>:identity:devo/<dev-org-id>:revo/<rev-org-id>"
     */
    rev_org?: string | null;
    /** Severity of the ticket. */
    severity?: TicketSeverity;
}
/** works-update-response */
export interface WorksUpdateResponse {
    work: Work;
}
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from 'axios';
export type QueryParamsType = Record<string | number, any>;
export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
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
export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;
export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
    securityWorker?: (securityData: SecurityDataType | null) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
    secure?: boolean;
    format?: ResponseType;
}
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain"
}
export declare class HttpClient<SecurityDataType = unknown> {
    instance: AxiosInstance;
    private securityData;
    private securityWorker?;
    private secure?;
    private format?;
    constructor({ securityWorker, secure, format, ...axiosConfig }?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig;
    protected stringifyFormItem(formItem: unknown): string;
    protected createFormData(input: Record<string, unknown>): FormData;
    request: <T = any, _E = any>({ secure, path, type, query, format, body, ...params }: FullRequestParams) => Promise<AxiosResponse<T, any>>;
}
/**
 * @title DevRev REST API
 * @version 1.0.0
 * @baseUrl {protocol}://{hostname}
 *
 * DevRev's REST API.
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    artifactsLocate: {
        /**
         * @description Gets the download URL for the artifact.
         *
         * @tags artifacts
         * @name ArtifactsLocate
         * @request GET:/artifacts.locate
         * @secure
         */
        artifactsLocate: (query: {
            /**
             * The ID of the artifact to get the URL for.
             * @example "don:<partition>:core:devo/<dev-org-id>:artifact/<artifact-id>"
             */
            id: string;
        }, params?: RequestParams) => Promise<AxiosResponse<ArtifactsLocateResponse, any>>;
    };
    artifactsPrepare: {
        /**
         * @description Creates an artifact and generates an upload URL for its data.
         *
         * @tags artifacts
         * @name ArtifactsPrepare
         * @request POST:/artifacts.prepare
         * @secure
         */
        artifactsPrepare: (data: ArtifactsPrepareRequest, params?: RequestParams) => Promise<AxiosResponse<ArtifactsPrepareResponse, any>>;
    };
    authTokensCreate: {
        /**
         * @description Creates a JWT corresponding to the requested token type for the authenticated user.
         *
         * @tags auth-tokens
         * @name AuthTokensCreate
         * @request POST:/auth-tokens.create
         * @secure
         */
        authTokensCreate: (data: AuthTokensCreateRequest, params?: RequestParams) => Promise<AxiosResponse<AuthTokensCreateResponse, any>>;
    };
    authTokensDelete: {
        /**
         * @description Revokes the token that matches the given token ID issued under the given Dev organization.
         *
         * @tags auth-tokens
         * @name AuthTokensDelete
         * @request POST:/auth-tokens.delete
         * @secure
         */
        authTokensDelete: (data: AuthTokensDeleteRequest, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
    };
    authTokensGet: {
        /**
         * @description Gets the token metadata corresponding to the given token ID under the given Dev organization.
         *
         * @tags auth-tokens
         * @name AuthTokensGet
         * @request GET:/auth-tokens.get
         * @secure
         */
        authTokensGet: (query: {
            /** The unique identifier of the token under a given Dev organization. */
            token_id: string;
        }, params?: RequestParams) => Promise<AxiosResponse<AuthTokensGetResponse, any>>;
    };
    authTokensList: {
        /**
         * @description Gets the token metadata for all the tokens corresponding to the given token type issued for a given subject.
         *
         * @tags auth-tokens
         * @name AuthTokensList
         * @request GET:/auth-tokens.list
         * @secure
         */
        authTokensList: (query?: {
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
        }, params?: RequestParams) => Promise<AxiosResponse<AuthTokensListResponse, any>>;
    };
    authTokensSelfDelete: {
        /**
         * @description Revokes all the tokens that matches the given token type created by the authenticated user.
         *
         * @tags auth-tokens
         * @name AuthTokensSelfDelete
         * @request POST:/auth-tokens.self.delete
         * @secure
         */
        authTokensSelfDelete: (data: AuthTokensSelfDeleteRequest, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
    };
    authTokensUpdate: {
        /**
         * @description Updates token metadata of a token issued under a given Dev organization.
         *
         * @tags auth-tokens
         * @name AuthTokensUpdate
         * @request POST:/auth-tokens.update
         * @secure
         */
        authTokensUpdate: (data: AuthTokensUpdateRequest, params?: RequestParams) => Promise<AxiosResponse<AuthTokensUpdateResponse, any>>;
    };
    devOrgsAuthConnectionsCreate: {
        /**
         * @description Creates a new enterprise authentication connection for a Dev organization. This authentication connection will not be enabled by default for the organization and the user will need to explicitly enable this. Keep in mind that at a time, only one authentication connection can be enabled for a Dev organization. At present, only 5 enterprise connections can be created by an organization.
         *
         * @tags auth-connection, dev-orgs
         * @name DevOrgAuthConnectionsCreate
         * @request POST:/dev-orgs.auth-connections.create
         * @secure
         */
        devOrgAuthConnectionsCreate: (data: DevOrgAuthConnectionsCreateRequest, params?: RequestParams) => Promise<AxiosResponse<DevOrgAuthConnectionsCreateResponse, any>>;
    };
    devOrgsAuthConnectionsDelete: {
        /**
         * @description Deletes an authentication connection. Only enterprise connections which are explicitly set up for a Dev organization can be deleted. Default connections can not be deleted using this method.
         *
         * @tags auth-connection, dev-orgs
         * @name DevOrgAuthConnectionsDelete
         * @request POST:/dev-orgs.auth-connections.delete
         * @secure
         */
        devOrgAuthConnectionsDelete: (data: DevOrgAuthConnectionsDeleteRequest, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
    };
    devOrgsAuthConnectionsGet: {
        /**
         * @description Retrieves the details for an authentication connection.
         *
         * @tags auth-connection, dev-orgs
         * @name DevOrgAuthConnectionsGet
         * @request GET:/dev-orgs.auth-connections.get
         * @secure
         */
        devOrgAuthConnectionsGet: (query: {
            /** ID of the authentication connection. */
            id: string;
        }, params?: RequestParams) => Promise<AxiosResponse<DevOrgAuthConnectionsGetResponse, any>>;
    };
    devOrgsAuthConnectionsList: {
        /**
         * @description Lists all the authentication connections available for a Dev organization. This list will include both social and enterprise connections which are either available by default or are explicitly created by the user.
         *
         * @tags auth-connection, dev-orgs
         * @name DevOrgAuthConnectionsList
         * @request GET:/dev-orgs.auth-connections.list
         * @secure
         */
        devOrgAuthConnectionsList: (params?: RequestParams) => Promise<AxiosResponse<DevOrgAuthConnectionsListResponse, any>>;
    };
    devOrgsAuthConnectionsToggle: {
        /**
         * @description Enable or disable an authentication connection for a Dev organization. Currently, only 1 authentication connection can be enabled at a time. When a new authentication connection is enabled, the connection which is currently enabled for the Dev organization is automatically disabled.
         *
         * @tags auth-connection, dev-orgs
         * @name DevOrgAuthConnectionsToggle
         * @request POST:/dev-orgs.auth-connections.toggle
         * @secure
         */
        devOrgAuthConnectionsToggle: (data: DevOrgAuthConnectionsToggleRequest, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
    };
    devOrgsAuthConnectionsUpdate: {
        /**
         * @description Updates an authentication connection.
         *
         * @tags auth-connection, dev-orgs
         * @name DevOrgAuthConnectionsUpdate
         * @request POST:/dev-orgs.auth-connections.update
         * @secure
         */
        devOrgAuthConnectionsUpdate: (data: DevOrgAuthConnectionsUpdateRequest, params?: RequestParams) => Promise<AxiosResponse<DevOrgAuthConnectionsUpdateResponse, any>>;
    };
    devUsersList: {
        /**
         * @description Lists users within your organization.
         *
         * @tags dev-users
         * @name DevUsersList
         * @request GET:/dev-users.list
         * @secure
         */
        devUsersList: (query?: {
            /**
             * The cursor to resume iteration from. If not provided, then iteration
             * starts from the beginning.
             */
            cursor?: string;
            /** Filters Dev users based on email addresses. */
            email?: string[];
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
        }, params?: RequestParams) => Promise<AxiosResponse<DevUsersListResponse, any>>;
    };
    devUsersSelf: {
        /**
         * @description Gets the authenticated user's information.
         *
         * @tags dev-users
         * @name DevUsersSelf
         * @request GET:/dev-users.self
         * @secure
         */
        devUsersSelf: (params?: RequestParams) => Promise<AxiosResponse<DevUsersSelfResponse, any>>;
    };
    partsCreate: {
        /**
         * @description Creates new [part](https://devrev.ai/docs/product/parts).
         *
         * @tags parts
         * @name PartsCreate
         * @request POST:/parts.create
         * @secure
         */
        partsCreate: (data: PartsCreateRequest, params?: RequestParams) => Promise<AxiosResponse<PartsCreateResponse, any>>;
    };
    partsDelete: {
        /**
         * @description Deletes a [part](https://devrev.ai/docs/product/parts).
         *
         * @tags parts
         * @name PartsDelete
         * @request POST:/parts.delete
         * @secure
         */
        partsDelete: (data: PartsDeleteRequest, params?: RequestParams) => Promise<AxiosResponse<object, any>>;
    };
    partsGet: {
        /**
         * @description Gets a [part's](https://devrev.ai/docs/product/parts) information.
         *
         * @tags parts
         * @name PartsGet
         * @request GET:/parts.get
         * @secure
         */
        partsGet: (query: {
            /**
             * The ID of the part to retrieve.
             * @example "don:<partition>:core:devo/<dev-org-id>:<part-type>/<part-id>"
             */
            id: string;
        }, params?: RequestParams) => Promise<AxiosResponse<PartsGetResponse, any>>;
    };
    partsList: {
        /**
         * @description Lists a collection of [parts](https://devrev.ai/docs/product/parts).
         *
         * @tags parts
         * @name PartsList
         * @request GET:/parts.list
         * @secure
         */
        partsList: (query?: {
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
            /** Filters for parts of the provided type(s). */
            type?: PartType[];
        }, params?: RequestParams) => Promise<AxiosResponse<PartsListResponse, any>>;
    };
    partsUpdate: {
        /**
         * @description Updates a [part's](https://devrev.ai/docs/product/parts) information.
         *
         * @tags parts
         * @name PartsUpdate
         * @request POST:/parts.update
         * @secure
         */
        partsUpdate: (data: PartsUpdateRequest, params?: RequestParams) => Promise<AxiosResponse<PartsUpdateResponse, any>>;
    };
    revOrgsCreate: {
        /**
         * @description Creates a Rev organization in the authenticated user's Dev organization.
         *
         * @tags rev-orgs
         * @name RevOrgsCreate
         * @request POST:/rev-orgs.create
         * @secure
         */
        revOrgsCreate: (data: RevOrgsCreateRequest, params?: RequestParams) => Promise<AxiosResponse<RevOrgsCreateResponse, any>>;
    };
    revOrgsDelete: {
        /**
         * @description Deletes the Rev organization.
         *
         * @tags rev-orgs
         * @name RevOrgsDelete
         * @request POST:/rev-orgs.delete
         * @secure
         */
        revOrgsDelete: (data: RevOrgsDeleteRequest, params?: RequestParams) => Promise<AxiosResponse<object, any>>;
    };
    revOrgsGet: {
        /**
         * @description Retrieves the Rev organization's information.
         *
         * @tags rev-orgs
         * @name RevOrgsGet
         * @request GET:/rev-orgs.get
         * @secure
         */
        revOrgsGet: (query: {
            /**
             * The ID of the required Rev organization.
             * @example "don:<partition>:identity:devo/<dev-org-id>:revo/<rev-org-id>"
             */
            id: string;
        }, params?: RequestParams) => Promise<AxiosResponse<RevOrgsGetResponse, any>>;
    };
    revOrgsList: {
        /**
         * @description Gets the list of Rev organizations' information belonging to the authenticated user's Dev Organization which the user is also authorized to access.
         *
         * @tags rev-orgs
         * @name RevOrgsList
         * @request GET:/rev-orgs.list
         * @secure
         */
        revOrgsList: (query?: {
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
        }, params?: RequestParams) => Promise<AxiosResponse<RevOrgsListResponse, any>>;
    };
    revOrgsUpdate: {
        /**
         * @description Updates the Rev organization's information.
         *
         * @tags rev-orgs
         * @name RevOrgsUpdate
         * @request POST:/rev-orgs.update
         * @secure
         */
        revOrgsUpdate: (data: RevOrgsUpdateRequest, params?: RequestParams) => Promise<AxiosResponse<RevOrgsUpdateResponse, any>>;
    };
    tagsCreate: {
        /**
         * @description Creates a new tag, which is used to create associations between objects and a logical concept denoted by the tag's name.
         *
         * @tags tags
         * @name TagsCreate
         * @request POST:/tags.create
         * @secure
         */
        tagsCreate: (data: TagsCreateRequest, params?: RequestParams) => Promise<AxiosResponse<TagsCreateResponse, any>>;
    };
    tagsDelete: {
        /**
         * @description Deletes a tag.
         *
         * @tags tags
         * @name TagsDelete
         * @request POST:/tags.delete
         * @secure
         */
        tagsDelete: (data: TagsDeleteRequest, params?: RequestParams) => Promise<AxiosResponse<object, any>>;
    };
    tagsGet: {
        /**
         * @description Gets a tag's information.
         *
         * @tags tags
         * @name TagsGet
         * @request GET:/tags.get
         * @secure
         */
        tagsGet: (query: {
            /**
             * The requested tag's ID.
             * @example "don:<partition>:core:devo/<dev-org-id>:tag/<tag-id>"
             */
            id: string;
        }, params?: RequestParams) => Promise<AxiosResponse<TagsGetResponse, any>>;
    };
    tagsList: {
        /**
         * @description Lists the available tags.
         *
         * @tags tags
         * @name TagsList
         * @request GET:/tags.list
         * @secure
         */
        tagsList: (query?: {
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
        }, params?: RequestParams) => Promise<AxiosResponse<TagsListResponse, any>>;
    };
    tagsUpdate: {
        /**
         * @description Updates a tag's information.
         *
         * @tags tags
         * @name TagsUpdate
         * @request POST:/tags.update
         * @secure
         */
        tagsUpdate: (data: TagsUpdateRequest, params?: RequestParams) => Promise<AxiosResponse<TagsUpdateResponse, any>>;
    };
    timelineEntriesCreate: {
        /**
         * @description Creates a new entry on an object's timeline.
         *
         * @tags timeline-entries
         * @name TimelineEntriesCreate
         * @request POST:/timeline-entries.create
         * @secure
         */
        timelineEntriesCreate: (data: TimelineEntriesCreateRequest, params?: RequestParams) => Promise<AxiosResponse<TimelineEntriesCreateResponse, any>>;
    };
    timelineEntriesGet: {
        /**
         * @description Gets an entry on an object's timeline.
         *
         * @tags timeline-entries
         * @name TimelineEntriesGet
         * @request GET:/timeline-entries.get
         * @secure
         */
        timelineEntriesGet: (query: {
            /** The ID of the timeline entry to get. */
            id: string;
        }, params?: RequestParams) => Promise<AxiosResponse<TimelineEntriesGetResponse, any>>;
    };
    timelineEntriesList: {
        /**
         * @description Lists the timeline entries for an object.
         *
         * @tags timeline-entries
         * @name TimelineEntriesList
         * @request GET:/timeline-entries.list
         * @secure
         */
        timelineEntriesList: (query: {
            /**
             * The ID of the object to list timeline entries for.
             * @example "don:<partition>:core:devo/<dev-org-id>:<part-type>/<part-id>"
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
        }, params?: RequestParams) => Promise<AxiosResponse<TimelineEntriesListResponse, any>>;
    };
    timelineEntriesUpdate: {
        /**
         * @description Updates an entry on an object's timeline.
         *
         * @tags timeline-entries
         * @name TimelineEntriesUpdate
         * @request POST:/timeline-entries.update
         * @secure
         */
        timelineEntriesUpdate: (data: TimelineEntriesUpdateRequest, params?: RequestParams) => Promise<AxiosResponse<TimelineEntriesUpdateResponse, any>>;
    };
    webhooksCreate: {
        /**
         * @description Creates a new webhook target.
         *
         * @tags webhooks
         * @name WebhooksCreate
         * @request POST:/webhooks.create
         * @secure
         */
        webhooksCreate: (data: WebhooksCreateRequest, params?: RequestParams) => Promise<AxiosResponse<WebhooksCreateResponse, any>>;
    };
    webhooksDelete: {
        /**
         * @description Deletes the requested webhook.
         *
         * @tags webhooks
         * @name WebhooksDelete
         * @request POST:/webhooks.delete
         * @secure
         */
        webhooksDelete: (data: WebhooksDeleteRequest, params?: RequestParams) => Promise<AxiosResponse<object, any>>;
    };
    webhooksGet: {
        /**
         * @description Gets the requested webhook's information.
         *
         * @tags webhooks
         * @name WebhooksGet
         * @request GET:/webhooks.get
         * @secure
         */
        webhooksGet: (query: {
            /**
             * ID for the webhook.
             * @example "don:<partition>:integration:devo/<dev-org-id>:webhook/<webhook-id>"
             */
            id: string;
        }, params?: RequestParams) => Promise<AxiosResponse<WebhooksGetResponse, any>>;
    };
    webhooksList: {
        /**
         * @description Lists the webhooks.
         *
         * @tags webhooks
         * @name WebhooksList
         * @request GET:/webhooks.list
         * @secure
         */
        webhooksList: (params?: RequestParams) => Promise<AxiosResponse<WebhooksListResponse, any>>;
    };
    webhooksUpdate: {
        /**
         * @description Updates the requested webhook.
         *
         * @tags webhooks
         * @name WebhooksUpdate
         * @request POST:/webhooks.update
         * @secure
         */
        webhooksUpdate: (data: WebhooksUpdateRequest, params?: RequestParams) => Promise<AxiosResponse<WebhooksUpdateResponse, any>>;
    };
    worksCreate: {
        /**
         * @description Creates new work ([issue](https://devrev.ai/docs/product/build), [ticket](https://devrev.ai/docs/product/support)) item.
         *
         * @tags works
         * @name WorksCreate
         * @request POST:/works.create
         * @secure
         */
        worksCreate: (data: WorksCreateRequest, params?: RequestParams) => Promise<AxiosResponse<WorksCreateResponse, any>>;
    };
    worksDelete: {
        /**
         * @description Deletes a work item.
         *
         * @tags works
         * @name WorksDelete
         * @request POST:/works.delete
         * @secure
         */
        worksDelete: (data: WorksDeleteRequest, params?: RequestParams) => Promise<AxiosResponse<object, any>>;
    };
    worksExport: {
        /**
         * @description Exports a collection of work items.
         *
         * @tags works
         * @name WorksExport
         * @request GET:/works.export
         * @secure
         */
        worksExport: (query?: {
            /**
             * Filters for work belonging to any of the provided parts.
             * @example ["don:<partition>:core:devo/<dev-org-id>:<part-type>/<part-id>"]
             */
            applies_to_part?: string[];
            /**
             * Filters for work created by any of these users.
             * @example ["don:<partition>:identity:devo/<dev-org-id>:devu/<dev-user-id>"]
             */
            created_by?: string[];
            /**
             * The number of work items to return. The default is '50', the maximum
             * is '5000'.
             * @format int32
             */
            first?: number;
            /** Filters for issues with any of the provided priorities. */
            'issue.priority'?: IssuePriority[];
            /**
             * Filters for work owned by any of these users.
             * @example ["don:<partition>:identity:devo/<dev-org-id>:devu/<dev-user-id>"]
             */
            owned_by?: string[];
            /** Filters for records in the provided stage(s). */
            'stage.name'?: string[];
            /**
             * Filters for objects created after the provided timestamp (inclusive).
             * @format date-time
             */
            'target_close_date.after'?: string;
            /**
             * Filters for objects created before the provided timestamp
             * (inclusive).
             * @format date-time
             */
            'target_close_date.before'?: string;
            /**
             * Filters for tickets that are associated with any of the provided Rev
             * organizations.
             * @example ["don:<partition>:identity:devo/<dev-org-id>:revo/<rev-org-id>"]
             */
            'ticket.rev_org'?: string[];
            /** Filters for tickets with any of the provided severities. */
            'ticket.severity'?: TicketSeverity[];
            /** Filters for work of the provided types. */
            type?: WorkType[];
        }, params?: RequestParams) => Promise<AxiosResponse<WorksExportResponse, any>>;
    };
    worksGet: {
        /**
         * @description Gets a work item's information.
         *
         * @tags works
         * @name WorksGet
         * @request GET:/works.get
         * @secure
         */
        worksGet: (query: {
            /**
             * The work's ID.
             * @example "don:<partition>:core:devo/<dev-org-id>:<work-type>/<work-id>"
             */
            id: string;
        }, params?: RequestParams) => Promise<AxiosResponse<WorksGetResponse, any>>;
    };
    worksList: {
        /**
         * @description Lists a collection of work items.
         *
         * @tags works
         * @name WorksList
         * @request GET:/works.list
         * @secure
         */
        worksList: (query?: {
            /**
             * Filters for work belonging to any of the provided parts.
             * @example ["don:<partition>:core:devo/<dev-org-id>:<part-type>/<part-id>"]
             */
            applies_to_part?: string[];
            /**
             * Filters for work created by any of these users.
             * @example ["don:<partition>:identity:devo/<dev-org-id>:devu/<dev-user-id>"]
             */
            created_by?: string[];
            /**
             * The cursor to resume iteration from. If not provided, then iteration
             * starts from the beginning.
             */
            cursor?: string;
            /** Filters for issues with any of the provided priorities. */
            'issue.priority'?: IssuePriority[];
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
             * @example ["don:<partition>:identity:devo/<dev-org-id>:devu/<dev-user-id>"]
             */
            owned_by?: string[];
            /** Filters for records in the provided stage(s). */
            'stage.name'?: string[];
            /**
             * Filters for objects created after the provided timestamp (inclusive).
             * @format date-time
             */
            'target_close_date.after'?: string;
            /**
             * Filters for objects created before the provided timestamp
             * (inclusive).
             * @format date-time
             */
            'target_close_date.before'?: string;
            /**
             * Filters for tickets that are associated with any of the provided Rev
             * organizations.
             * @example ["don:<partition>:identity:devo/<dev-org-id>:revo/<rev-org-id>"]
             */
            'ticket.rev_org'?: string[];
            /** Filters for tickets with any of the provided severities. */
            'ticket.severity'?: TicketSeverity[];
            /** Filters for work of the provided types. */
            type?: WorkType[];
        }, params?: RequestParams) => Promise<AxiosResponse<WorksListResponse, any>>;
    };
    worksUpdate: {
        /**
         * @description Updates a work item's information.
         *
         * @tags works
         * @name WorksUpdate
         * @request POST:/works.update
         * @secure
         */
        worksUpdate: (data: WorksUpdateRequest, params?: RequestParams) => Promise<AxiosResponse<WorksUpdateResponse, any>>;
    };
}
