/** account */
export type Account = OrgBase & {
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
    /** The Tier of the corresponding Account. */
    tier?: string;
};
/**
 * accounts-create-request
 * Request object to create a new account in the Dev organization.
 */
export interface AccountsCreateRequest {
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
     * @maxItems 1
     */
    external_refs?: string[];
    /** List of Dev users owning this account. */
    owned_by?: string[];
    /**
     * Schema fragment IDs associated with this account SOR.
     * @example ["don:core:<partition>:devo/<dev-org-id>:custom_type_fragment/<custom-type-fragment-id>"]
     */
    schema_fragment_ids?: string[];
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
 * accounts-export-response
 * The response to exporting a collection of accounts.
 */
export interface AccountsExportResponse {
    /** The exported accounts. */
    accounts: Account[];
}
/**
 * accounts-get-response
 * The returned account.
 */
export interface AccountsGetResponse {
    account: Account;
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
     * @maxItems 1
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
    /** Updated tier of the account. */
    tier?: string;
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
/** aggregated-schema-get-response */
export interface AggregatedSchemaGetResponse {
    /** List of custom fields from multiple source fragments. */
    schema: AggregatedSchema;
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
export declare enum ConversationsCreateRequestTypeValue {
    Support = "support"
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
/** conversations-export-response */
export interface ConversationsExportResponse {
    /** The resulting collection of conversation items. */
    conversations: Conversation[];
}
/**
 * conversations-get-response
 * The response to getting a conversation's information.
 */
export interface ConversationsGetResponse {
    conversation: Conversation;
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
/** custom-schema-fragment */
export interface CustomSchemaFragment {
    type: CustomSchemaFragmentType;
}
/**
 * custom-schema-fragment-condition
 * The condition associated with a field.
 */
export type CustomSchemaFragmentCondition = object;
export type CustomSchemaFragmentType = string;
/** custom-schema-fragments-get-response */
export interface CustomSchemaFragmentsGetResponse {
    fragment: CustomSchemaFragment;
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
export type CustomSchemaFragmentsSetRequest = (CustomSchemaFragmentsSetRequestAppFragment | CustomSchemaFragmentsSetRequestCustomTypeFragment | CustomSchemaFragmentsSetRequestTenantFragment) & {
    /** List of conditions for this fragment. */
    conditions?: CustomSchemaFragmentCondition[];
    /** True if this fragment has been deprecated. */
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
    /** The name of the app fragment. */
    app_fragment_name: string;
}
/** custom-schema-fragments-set-request-custom-type-fragment */
export interface CustomSchemaFragmentsSetRequestCustomTypeFragment {
    /** List of stock field enum overrides. */
    stock_field_enum_overrides?: StockFieldEnumOverride[];
    /** The string used to populate the subtype in the leaf type. */
    subtype: string;
    /** The display name of the subtype. */
    subtype_display_name?: string;
}
/** custom-schema-fragments-set-request-tenant-fragment */
export type CustomSchemaFragmentsSetRequestTenantFragment = object;
export declare enum CustomSchemaFragmentsSetRequestType {
    AppFragment = "app_fragment",
    CustomTypeFragment = "custom_type_fragment",
    TenantFragment = "tenant_fragment"
}
/** custom-schema-fragments-set-response */
export interface CustomSchemaFragmentsSetResponse {
    /** The ID of the custom schema fragment. */
    id: string;
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
    /** The description of the engagement. */
    description?: string;
    /** The type of engagement. */
    engagement_type?: EngagementsCreateRequestEngagementType;
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
export declare enum EngagementsCreateRequestEngagementType {
    Call = "call",
    Email = "email",
    LinkedIn = "linked_in",
    Offline = "offline"
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
/** engagements-get-response */
export interface EngagementsGetResponse {
    engagement: Engagement;
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
    /** Updates the description of the engagement. */
    description?: string;
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
export type ErrorBadRequest = ErrorBase & (ErrorBadRequestBadRequest | ErrorBadRequestInvalidEnumValue | ErrorBadRequestInvalidField | ErrorBadRequestMissingRequiredField | ErrorBadRequestParseError | ErrorBadRequestValueNotPermitted) & {
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
export declare enum ErrorBadRequestType {
    BadRequest = "bad_request",
    InvalidEnumValue = "invalid_enum_value",
    InvalidField = "invalid_field",
    MissingRequiredField = "missing_required_field",
    ParseError = "parse_error",
    ValueNotPermitted = "value_not_permitted"
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
/** group-summary */
export type GroupSummary = AtomBaseSummary;
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
export type LinkEndpointSummary = (CapabilitySummary | ConversationSummary | EnhancementSummary | FeatureSummary | IssueSummary | OpportunitySummary | ProductSummary | TicketSummary) & {
    type: LinkEndpointType;
};
export declare enum LinkEndpointType {
    Capability = "capability",
    Conversation = "conversation",
    Enhancement = "enhancement",
    Feature = "feature",
    Issue = "issue",
    Opportunity = "opportunity",
    Product = "product",
    Ticket = "ticket"
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
export declare enum LinkType {
    DevelopedWith = "developed_with",
    Imports = "imports",
    IsDependentOn = "is_dependent_on",
    IsDuplicateOf = "is_duplicate_of",
    IsParentOf = "is_parent_of",
    IsPartOf = "is_part_of",
    IsRelatedTo = "is_related_to",
    Serves = "serves"
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
export declare enum LinksDirection {
    IsSource = "is_source",
    IsTarget = "is_target"
}
/**
 * links-get-response
 * The response to getting a link's information.
 */
export interface LinksGetResponse {
    link: Link;
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
export declare enum ListMode {
    After = "after",
    Before = "before"
}
/** metric-definition */
export type MetricDefinition = AtomBase;
/** The list of item types on which the metric might be applied. */
export declare enum MetricDefinitionAppliesTo {
    Conversation = "conversation",
    Issue = "issue",
    Task = "task",
    Ticket = "ticket"
}
/**
 * The type of the metric. 'time' metrics track the time spent in some
 * state, supporting operations like 'start', 'stop', 'pause', 'resume'.
 * 'value' metrics track a value, supporting operations like 'set',
 * 'increment', 'decrement'.
 */
export declare enum MetricDefinitionMetricType {
    Time = "time",
    Value = "value"
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
/** part-base-summary */
export type PartBaseSummary = AtomBaseSummary & {
    /** Name of the part. */
    name: string;
};
/** part-summary */
export type PartSummary = (CapabilitySummary | EnhancementSummary | FeatureSummary | ProductSummary) & {
    type: PartType;
};
export declare enum PartType {
    Capability = "capability",
    Enhancement = "enhancement",
    Feature = "feature",
    Product = "product"
}
/** product-summary */
export type ProductSummary = PartBaseSummary;
/** rev-org */
export type RevOrg = OrgBase & {
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
/**
 * rev-orgs-update-response
 * Response object to updating Rev organization's information.
 */
export interface RevOrgsUpdateResponse {
    rev_org: RevOrg;
}
/** rev-user */
export type RevUser = UserBase & {
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
 * rev-users-get-response
 * The returned Rev user.
 */
export interface RevUsersGetResponse {
    rev_user: RevUser;
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
export type SchemaFieldDescriptor = (SchemaBoolFieldDescriptor | SchemaCompositeFieldDescriptor | SchemaDoubleFieldDescriptor | SchemaEnumFieldDescriptor | SchemaFieldDescriptorArrayType | SchemaIdFieldDescriptor | SchemaIntFieldDescriptor | SchemaRichTextFieldDescriptor | SchemaTextFieldDescriptor | SchemaTimestampFieldDescriptor | SchemaTokensFieldDescriptor) & {
    field_type: SchemaFieldDescriptorFieldType;
};
/** schema-field-descriptor-array-type */
export type SchemaFieldDescriptorArrayType = (SchemaBoolListFieldDescriptor | SchemaCompositeListFieldDescriptor | SchemaDoubleListFieldDescriptor | SchemaEnumListFieldDescriptor | SchemaIdListFieldDescriptor | SchemaIntListFieldDescriptor | SchemaRichTextListFieldDescriptor | SchemaTextListFieldDescriptor | SchemaTimestampListFieldDescriptor | SchemaTokensListFieldDescriptor) & {
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
export declare enum SchemaFieldDescriptorArrayTypeBaseType {
    Bool = "bool",
    Composite = "composite",
    Double = "double",
    Enum = "enum",
    Id = "id",
    Int = "int",
    RichText = "rich_text",
    Text = "text",
    Timestamp = "timestamp",
    Tokens = "tokens"
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
    /** Name of the field. */
    name: string;
    /** Type this field is from. */
    origin?: string;
    /** The schema of ui specific fields. */
    ui?: SchemaFieldUiMetadata;
}
export declare enum SchemaFieldDescriptorFieldType {
    Array = "array",
    Bool = "bool",
    Composite = "composite",
    Double = "double",
    Enum = "enum",
    Id = "id",
    Int = "int",
    RichText = "rich_text",
    Text = "text",
    Timestamp = "timestamp",
    Tokens = "tokens"
}
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
    /**
     * Default value.
     * @format date-time
     */
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
    performance: number;
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
export declare enum SlaEvaluationPeriod {
    Monthly = "monthly",
    Quarterly = "quarterly",
    Weekly = "weekly",
    Yearly = "yearly"
}
/**
 * sla-policy
 * A policy that represents a promise to your revs.
 */
export type SlaPolicy = object;
/** The item type for which the SLA policy applies. */
export declare enum SlaSelectorAppliesTo {
    Conversation = "conversation",
    Ticket = "ticket"
}
/** Th SLA policy applies to conversations with these priorities. */
export declare enum SlaSelectorPriority {
    P0 = "p0",
    P1 = "p1",
    P2 = "p2"
}
/** The SLA policy applies to tickets with these severities. */
export declare enum SlaSelectorSeverity {
    Blocker = "blocker",
    High = "high",
    Low = "low",
    Medium = "medium"
}
/**
 * Status determines how an item can be used. In 'draft' status an item
 * can be edited but can't be used. When 'published' the item can longer
 * be edited but can be used. 'Archived' is read-only.
 */
export declare enum SlaStatus {
    Archived = "archived",
    Draft = "draft",
    Published = "published"
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
/** slas-get-response */
export interface SlasGetResponse {
    sla: Sla;
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
/** subtypes-list-response */
export interface SubtypesListResponse {
    /** List of subtypes. */
    subtypes: Subtype[];
}
/** sys-user */
export type SysUser = UserBase;
/** sys-user-summary */
export type SysUserSummary = UserBaseSummary;
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
/** Priority of the work based upon impact and criticality. */
export declare enum TaskPriority {
    P0 = "p0",
    P1 = "p1",
    P2 = "p2",
    P3 = "p3"
}
/** ticket */
export type Ticket = WorkBase & {
    group?: GroupSummary;
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
export declare enum TimelineCommentBodyType {
    SnapKit = "snap_kit",
    Text = "text"
}
/** Describes collections of timeline entries. */
export declare enum TimelineEntriesCollection {
    Discussions = "discussions",
    Events = "events"
}
/**
 * timeline-entries-create-request
 * The request to create a timeline entry for an object.
 */
export type TimelineEntriesCreateRequest = TimelineEntriesCreateRequestTimelineComment & {
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
    /** Snap Kit Body of the comment. */
    snap_kit_body?: TimelineSnapKitBody;
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
/** timeline-entry */
export type TimelineEntry = TimelineComment & {
    type: TimelineEntryType;
};
/** timeline-entry-base */
export type TimelineEntryBase = AtomBase;
export declare enum TimelineEntryType {
    TimelineComment = "timeline_comment"
}
/**
 * The visibility of the entry. If 'private', then the entry is only
 * visible to the creator, 'internal' is visible with the Dev
 * organization, 'external' is visible to the Dev organzation and Rev
 * users, and 'public' is visible to all. If not set, then the default
 * visibility is 'external'.
 */
export declare enum TimelineEntryVisibility {
    External = "external",
    Internal = "internal",
    Private = "private",
    Public = "public"
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
/** work */
export type Work = (Issue | Opportunity | Ticket) & {
    type: WorkType;
};
/** work-base */
export type WorkBase = AtomBase & {
    applies_to_part?: PartSummary;
    /** The artifacts attached to the work item. */
    artifacts?: ArtifactSummary[];
    /** Body of the work object. */
    body?: string;
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
export declare enum WorkType {
    Issue = "issue",
    Opportunity = "opportunity",
    Ticket = "ticket"
}
/** works-create-request */
export type WorksCreateRequest = (WorksCreateRequestIssue | WorksCreateRequestOpportunity | WorksCreateRequestTask | WorksCreateRequestTicket) & {
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
export type WorksUpdateRequest = (WorksUpdateRequestIssue | WorksUpdateRequestOpportunity | WorksUpdateRequestTask | WorksUpdateRequestTicket) & {
    /**
     * Updates the part that the work applies to.
     * @example "don:core:<partition>:devo/<dev-org-id>:<part-type>/<part-id>"
     */
    applies_to_part?: string;
    artifacts?: WorksUpdateRequestArtifactIds;
    /** Updated body of the work object, or unchanged if not provided. */
    body?: string;
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
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
export type QueryParamsType = Record<string | number, any>;
export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
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
export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
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
 * @title DevRev Beta REST API
 * @version BETA
 * @baseUrl {protocol}://{hostname}
 *
 * DevRev's BETA REST API Specification.
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * @description Creates an account, which is a record representing a customer or an organization.
     *
     * @tags accounts
     * @name AccountsCreate
     * @request POST:/accounts.create
     * @secure
     */
    accountsCreate: (data: AccountsCreateRequest, params?: RequestParams) => Promise<AxiosResponse<AccountsCreateResponse, any>>;
    /**
     * @description Deletes an account.
     *
     * @tags accounts
     * @name AccountsDelete
     * @request POST:/accounts.delete
     * @secure
     */
    accountsDelete: (data: AccountsDeleteRequest, params?: RequestParams) => Promise<AxiosResponse<object, any>>;
    /**
     * @description Exports a collection of accounts.
     *
     * @tags accounts
     * @name AccountsExport
     * @request GET:/accounts.export
     * @secure
     */
    accountsExport: (query?: {
        /** Filters for accounts created by the specified user(s). */
        created_by?: string[];
        /**
         * Filters for objects created after the provided timestamp (inclusive).
         * @format date-time
         */
        "created_date.after"?: string;
        /**
         * Filters for objects created before the provided timestamp
         * (inclusive).
         * @format date-time
         */
        "created_date.before"?: string;
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
        "modified_date.after"?: string;
        /**
         * Filters for objects created before the provided timestamp
         * (inclusive).
         * @format date-time
         */
        "modified_date.before"?: string;
        /** Fields to sort the accounts by and the direction to sort them in. */
        sort_by?: string[];
    }, params?: RequestParams) => Promise<AxiosResponse<AccountsExportResponse, any>>;
    /**
     * @description Retrieves an account's information.
     *
     * @tags accounts
     * @name AccountsGet
     * @request GET:/accounts.get
     * @secure
     */
    accountsGet: (query: {
        /**
         * The ID of the account to be retrieved.
         * @example "don:core:<partition>:devo/<dev-org-id>:account/<account-id>"
         */
        id: string;
    }, params?: RequestParams) => Promise<AxiosResponse<AccountsGetResponse, any>>;
    /**
     * @description Gets a list of accounts.
     *
     * @tags accounts
     * @name AccountsList
     * @request GET:/accounts.list
     * @secure
     */
    accountsList: (query?: {
        /** Filters for accounts created by the specified user(s). */
        created_by?: string[];
        /**
         * Filters for objects created after the provided timestamp (inclusive).
         * @format date-time
         */
        "created_date.after"?: string;
        /**
         * Filters for objects created before the provided timestamp
         * (inclusive).
         * @format date-time
         */
        "created_date.before"?: string;
        /**
         * The cursor to resume iteration from. If not provided, then iteration
         * starts from the beginning.
         */
        cursor?: string;
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
        "modified_date.after"?: string;
        /**
         * Filters for objects created before the provided timestamp
         * (inclusive).
         * @format date-time
         */
        "modified_date.before"?: string;
        /** Fields to sort the accounts by and the direction to sort them in. */
        sort_by?: string[];
    }, params?: RequestParams) => Promise<AxiosResponse<AccountsListResponse, any>>;
    /**
     * @description Updates an account's information.
     *
     * @tags accounts
     * @name AccountsUpdate
     * @request POST:/accounts.update
     * @secure
     */
    accountsUpdate: (data: AccountsUpdateRequest, params?: RequestParams) => Promise<AxiosResponse<AccountsUpdateResponse, any>>;
    /**
     * @description Creates a conversation.
     *
     * @tags conversations
     * @name ConversationsCreate
     * @request POST:/conversations.create
     * @secure
     */
    conversationsCreate: (data: ConversationsCreateRequest, params?: RequestParams) => Promise<AxiosResponse<ConversationsCreateResponse, any>>;
    /**
     * @description Deletes the requested conversation.
     *
     * @tags conversations
     * @name ConversationsDelete
     * @request POST:/conversations.delete
     * @secure
     */
    conversationsDelete: (data: ConversationsDeleteRequest, params?: RequestParams) => Promise<AxiosResponse<object, any>>;
    /**
     * @description Exports a collection of conversation items.
     *
     * @tags conversations
     * @name ConversationsExport
     * @request GET:/conversations.export
     * @secure
     */
    conversationsExport: (query?: {
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
        /** Filters for records in the provided stage(s). */
        "stage.name"?: string[];
        /**
         * Filters for conversations with any of the provided tags.
         * @example ["don:core:<partition>:devo/<dev-org-id>:tag/<tag-id>"]
         */
        tags?: string[];
    }, params?: RequestParams) => Promise<AxiosResponse<ConversationsExportResponse, any>>;
    /**
     * @description Gets the requested conversation's information.
     *
     * @tags conversations
     * @name ConversationsGet
     * @request GET:/conversations.get
     * @secure
     */
    conversationsGet: (query: {
        /** The requested conversation's ID. */
        id: string;
    }, params?: RequestParams) => Promise<AxiosResponse<ConversationsGetResponse, any>>;
    /**
     * @description Lists the available conversations.
     *
     * @tags conversations
     * @name ConversationsList
     * @request GET:/conversations.list
     * @secure
     */
    conversationsList: (query?: {
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
        /** Filters for records in the provided stage(s). */
        "stage.name"?: string[];
        /**
         * Filters for conversations with any of the provided tags.
         * @example ["don:core:<partition>:devo/<dev-org-id>:tag/<tag-id>"]
         */
        tags?: string[];
    }, params?: RequestParams) => Promise<AxiosResponse<ConversationsListResponse, any>>;
    /**
     * @description Updates the requested conversation.
     *
     * @tags conversations
     * @name ConversationsUpdate
     * @request POST:/conversations.update
     * @secure
     */
    conversationsUpdate: (data: ConversationsUpdateRequest, params?: RequestParams) => Promise<AxiosResponse<ConversationsUpdateResponse, any>>;
    /**
     * @description Counts the engagement records.
     *
     * @tags engagements
     * @name EngagementsCount
     * @request GET:/engagements.count
     * @secure
     */
    engagementsCount: (query?: {
        /**
         * Filters for engagements with the provided parent.
         * @example ["don:core:<partition>:devo/<dev-org-id>:account/<account-id>"]
         */
        parent?: string[];
    }, params?: RequestParams) => Promise<AxiosResponse<EngagementsCountResponse, any>>;
    /**
     * @description Creates a new engagement record.
     *
     * @tags engagements
     * @name EngagementsCreate
     * @request POST:/engagements.create
     * @secure
     */
    engagementsCreate: (data: EngagementsCreateRequest, params?: RequestParams) => Promise<AxiosResponse<EngagementsCreateResponse, any>>;
    /**
     * @description Deletes the engagement record.
     *
     * @tags engagements
     * @name EngagementsDelete
     * @request POST:/engagements.delete
     * @secure
     */
    engagementsDelete: (data: EngagementsDeleteRequest, params?: RequestParams) => Promise<AxiosResponse<object, any>>;
    /**
     * @description Gets the engagement record.
     *
     * @tags engagements
     * @name EngagementsGet
     * @request GET:/engagements.get
     * @secure
     */
    engagementsGet: (query: {
        /** The engagement ID. */
        id: string;
    }, params?: RequestParams) => Promise<AxiosResponse<EngagementsGetResponse, any>>;
    /**
     * @description Lists the engagement records.
     *
     * @tags engagements
     * @name EngagementsList
     * @request GET:/engagements.list
     * @secure
     */
    engagementsList: (query?: {
        /**
         * The cursor to resume iteration from. If not provided, then iteration
         * starts from the beginning.
         */
        cursor?: string;
        /**
         * The maximum number of engagements to return.
         * @format int32
         */
        limit?: number;
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
    }, params?: RequestParams) => Promise<AxiosResponse<EngagementsListResponse, any>>;
    /**
     * @description Updates the engagement record.
     *
     * @tags engagements
     * @name EngagementsUpdate
     * @request POST:/engagements.update
     * @secure
     */
    engagementsUpdate: (data: EngagementsUpdateRequest, params?: RequestParams) => Promise<AxiosResponse<EngagementsUpdateResponse, any>>;
    /**
     * @description Schedules an event to be published to the specified event source.
     *
     * @tags event-source
     * @name EventSourcesScheduleEvent
     * @request POST:/event-sources.schedule
     * @secure
     */
    eventSourcesScheduleEvent: (data: EventSourcesScheduleEventRequest, params?: RequestParams) => Promise<AxiosResponse<EventSourcesScheduleEventResponse, any>>;
    /**
     * @description Deletes an event scheduled for the specified event source.
     *
     * @tags event-source
     * @name EventSourcesDeleteScheduledEvent
     * @request POST:/event-sources.unschedule
     * @secure
     */
    eventSourcesDeleteScheduledEvent: (data: EventSourcesDeleteScheduledEventRequest, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
    /**
     * @description Creates a link between two objects to indicate a relationship.
     *
     * @tags links
     * @name LinksCreate
     * @request POST:/links.create
     * @secure
     */
    linksCreate: (data: LinksCreateRequest, params?: RequestParams) => Promise<AxiosResponse<LinksCreateResponse, any>>;
    /**
     * @description Deletes a link.
     *
     * @tags links
     * @name LinksDelete
     * @request POST:/links.delete
     * @secure
     */
    linksDelete: (data: LinksDeleteRequest, params?: RequestParams) => Promise<AxiosResponse<object, any>>;
    /**
     * @description Gets the requested link's information.
     *
     * @tags links
     * @name LinksGet
     * @request GET:/links.get
     * @secure
     */
    linksGet: (query: {
        /** The requested link's ID. */
        id: string;
    }, params?: RequestParams) => Promise<AxiosResponse<LinksGetResponse, any>>;
    /**
     * @description Lists the available links.
     *
     * @tags links
     * @name LinksList
     * @request GET:/links.list
     * @secure
     */
    linksList: (query: {
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
    }, params?: RequestParams) => Promise<AxiosResponse<LinksListResponse, any>>;
    /**
     * @description Lists metric definitions matching a filter.
     *
     * @tags slas
     * @name MetricDefinitionsList
     * @request GET:/metric-definitions.list
     * @secure
     */
    metricDefinitionsList: (query?: {
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
    }, params?: RequestParams) => Promise<AxiosResponse<MetricDefinitionsListResponse, any>>;
    /**
     * @description Creates a Rev organization in the authenticated user's Dev organization.
     *
     * @tags rev-orgs
     * @name RevOrgsCreate
     * @request POST:/rev-orgs.create
     * @secure
     */
    revOrgsCreate: (data: RevOrgsCreateRequest, params?: RequestParams) => Promise<AxiosResponse<RevOrgsCreateResponse, any>>;
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
         * @example "don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"
         */
        id: string;
    }, params?: RequestParams) => Promise<AxiosResponse<RevOrgsGetResponse, any>>;
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
        "created_date.after"?: string;
        /**
         * Filters for objects created before the provided timestamp
         * (inclusive).
         * @format date-time
         */
        "created_date.before"?: string;
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
        "modified_date.after"?: string;
        /**
         * Filters for objects created before the provided timestamp
         * (inclusive).
         * @format date-time
         */
        "modified_date.before"?: string;
        /**
         * Fields to sort the Rev organizations by and the direction to sort
         * them.
         */
        sort_by?: string[];
    }, params?: RequestParams) => Promise<AxiosResponse<RevOrgsListResponse, any>>;
    /**
     * @description Updates the Rev organization's information.
     *
     * @tags rev-orgs
     * @name RevOrgsUpdate
     * @request POST:/rev-orgs.update
     * @secure
     */
    revOrgsUpdate: (data: RevOrgsUpdateRequest, params?: RequestParams) => Promise<AxiosResponse<RevOrgsUpdateResponse, any>>;
    /**
     * @description Creates a Rev user for a Rev organization. Rev user can be a customer or a lead of an organization.
     *
     * @tags rev-users
     * @name RevUsersCreate
     * @request POST:/rev-users.create
     * @secure
     */
    revUsersCreate: (data: RevUsersCreateRequest, params?: RequestParams) => Promise<AxiosResponse<RevUsersCreateResponse, any>>;
    /**
     * @description Deletes a Rev user.
     *
     * @tags rev-users
     * @name RevUsersDelete
     * @request POST:/rev-users.delete
     * @secure
     */
    revUsersDelete: (data: RevUsersDeleteRequest, params?: RequestParams) => Promise<AxiosResponse<object, any>>;
    /**
     * @description Returns the Rev user of a Rev organization by its ID.
     *
     * @tags rev-users
     * @name RevUsersGet
     * @request GET:/rev-users.get
     * @secure
     */
    revUsersGet: (query: {
        /** The ID of Rev user to be retrieved. */
        id: string;
    }, params?: RequestParams) => Promise<AxiosResponse<RevUsersGetResponse, any>>;
    /**
     * @description Links a rev user to a rev org.
     *
     * @tags rev-users
     * @name LinkRevUserToRevOrg
     * @request POST:/rev-users.link
     * @secure
     */
    linkRevUserToRevOrg: (data: LinkRevUserToRevOrgRequest, params?: RequestParams) => Promise<AxiosResponse<LinkRevUserToRevOrgResponse, any>>;
    /**
     * @description Returns a list of all Rev Users belonging to the authenticated user's Dev Organization.
     *
     * @tags rev-users
     * @name RevUsersList
     * @request GET:/rev-users.list
     * @secure
     */
    revUsersList: (query?: {
        /** Filters for Rev users that were created by the specified user(s). */
        created_by?: string[];
        /**
         * Filters for objects created after the provided timestamp (inclusive).
         * @format date-time
         */
        "created_date.after"?: string;
        /**
         * Filters for objects created before the provided timestamp
         * (inclusive).
         * @format date-time
         */
        "created_date.before"?: string;
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
        "modified_date.after"?: string;
        /**
         * Filters for objects created before the provided timestamp
         * (inclusive).
         * @format date-time
         */
        "modified_date.before"?: string;
        /**
         * List of IDs of Rev organizations to be filtered.
         * @example ["don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"]
         */
        rev_org?: string[];
        /** Fields to sort the Rev users by and the direction to sort them. */
        sort_by?: string[];
    }, params?: RequestParams) => Promise<AxiosResponse<RevUsersListResponse, any>>;
    /**
     * @description Unlinks a rev user from a rev org.
     *
     * @tags rev-users
     * @name UnlinkRevUserFromRevOrg
     * @request POST:/rev-users.unlink
     * @secure
     */
    unlinkRevUserFromRevOrg: (data: UnlinkRevUserFromRevOrgRequest, params?: RequestParams) => Promise<AxiosResponse<UnlinkRevUserFromRevOrgResponse, any>>;
    /**
     * @description Updates a Rev user.
     *
     * @tags rev-users
     * @name RevUsersUpdate
     * @request POST:/rev-users.update
     * @secure
     */
    revUsersUpdate: (data: RevUsersUpdateRequest, params?: RequestParams) => Promise<AxiosResponse<RevUsersUpdateResponse, any>>;
    /**
     * @description Gets the aggregated schema.
     *
     * @tags customization
     * @name AggregatedSchemaGet
     * @request GET:/schemas.aggregated.get
     * @secure
     */
    aggregatedSchemaGet: (query: {
        /** The list of custom schema fragment DONs which are to be aggregated. */
        custom_schema_fragment_ids: string[];
        /** The stock schema fragment which is to be aggregated. */
        stock_schema_fragment_id?: string;
    }, params?: RequestParams) => Promise<AxiosResponse<AggregatedSchemaGetResponse, any>>;
    /**
     * @description Gets a custom schema fragment.
     *
     * @tags customization
     * @name CustomSchemaFragmentsGet
     * @request GET:/schemas.custom.get
     * @secure
     */
    customSchemaFragmentsGet: (query: {
        /** The ID of the custom schema fragment. */
        id: string;
    }, params?: RequestParams) => Promise<AxiosResponse<CustomSchemaFragmentsGetResponse, any>>;
    /**
     * @description Lists custom schema fragments.
     *
     * @tags customization
     * @name CustomSchemaFragmentsList
     * @request GET:/schemas.custom.list
     * @secure
     */
    customSchemaFragmentsList: (query?: {
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
    }, params?: RequestParams) => Promise<AxiosResponse<CustomSchemaFragmentsListResponse, any>>;
    /**
     * @description Creates or updates a custom schema fragment.
     *
     * @tags customization
     * @name CustomSchemaFragmentsSet
     * @request POST:/schemas.custom.set
     * @secure
     */
    customSchemaFragmentsSet: (data: CustomSchemaFragmentsSetRequest, params?: RequestParams) => Promise<AxiosResponse<CustomSchemaFragmentsSetResponse, any>>;
    /**
     * @description Lists subtypes.
     *
     * @tags customization
     * @name SubtypesList
     * @request GET:/schemas.subtypes.list
     * @secure
     */
    subtypesList: (query?: {
        /**
         * Leaf type for which subtypes are required.
         * @deprecated
         */
        leaf_type?: string;
        /** List of leaf types for which subtypes are required. */
        leaf_types?: string[];
    }, params?: RequestParams) => Promise<AxiosResponse<SubtypesListResponse, any>>;
    /**
     * @description  Assigns the SLA to a set of Rev organizations.
     *
     * @tags slas
     * @name SlasAssign
     * @request POST:/slas.assign
     * @secure
     */
    slasAssign: (data: SlasAssignRequest, params?: RequestParams) => Promise<AxiosResponse<SlasAssignResponse, any>>;
    /**
     * @description Creates an SLA in draft status.
     *
     * @tags slas
     * @name SlasCreate
     * @request POST:/slas.create
     * @secure
     */
    slasCreate: (data: SlasCreateRequest, params?: RequestParams) => Promise<AxiosResponse<SlasCreateResponse, any>>;
    /**
     * @description Gets an SLA.
     *
     * @tags slas
     * @name SlasGet
     * @request GET:/slas.get
     * @secure
     */
    slasGet: (query: {
        /** The ID of the SLA to get. */
        id: string;
    }, params?: RequestParams) => Promise<AxiosResponse<SlasGetResponse, any>>;
    /**
     * @description Lists SLAs matching a filter.
     *
     * @tags slas
     * @name SlasList
     * @request GET:/slas.list
     * @secure
     */
    slasList: (query?: {
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
    }, params?: RequestParams) => Promise<AxiosResponse<SlasListResponse, any>>;
    /**
     * @description Changes the status of an SLA.
     *
     * @tags slas
     * @name SlasTransition
     * @request POST:/slas.transition
     * @secure
     */
    slasTransition: (data: SlasTransitionRequest, params?: RequestParams) => Promise<AxiosResponse<SlasTransitionResponse, any>>;
    /**
     * @description Updates a draft SLA.
     *
     * @tags slas
     * @name SlasUpdate
     * @request POST:/slas.update
     * @secure
     */
    slasUpdate: (data: SlasUpdateRequest, params?: RequestParams) => Promise<AxiosResponse<SlasUpdateResponse, any>>;
    /**
     * @description Lists system users within your organization.
     *
     * @tags sys-users
     * @name SysUsersList
     * @request GET:/sys-users.list
     * @secure
     */
    sysUsersList: (query?: {
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
    }, params?: RequestParams) => Promise<AxiosResponse<SysUsersListResponse, any>>;
    /**
     * @description Updates the system user.
     *
     * @tags sys-users
     * @name SysUsersUpdate
     * @request POST:/sys-users.update
     * @secure
     */
    sysUsersUpdate: (data: SysUsersUpdateRequest, params?: RequestParams) => Promise<AxiosResponse<SysUsersUpdateResponse, any>>;
    /**
     * @description Creates a new entry on an object's timeline.
     *
     * @tags timeline-entries
     * @name TimelineEntriesCreate
     * @request POST:/timeline-entries.create
     * @secure
     */
    timelineEntriesCreate: (data: TimelineEntriesCreateRequest, params?: RequestParams) => Promise<AxiosResponse<TimelineEntriesCreateResponse, any>>;
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
    }, params?: RequestParams) => Promise<AxiosResponse<TimelineEntriesListResponse, any>>;
    /**
     * @description Creates new work ([issue](https://devrev.ai/docs/product/build), [ticket](https://devrev.ai/docs/product/support)) item. [task](https://docs.devrev.ai/product/tasks) and opportunity work types are supported in the beta version.
     *
     * @tags works
     * @name WorksCreate
     * @request POST:/works.create
     * @secure
     */
    worksCreate: (data: WorksCreateRequest, params?: RequestParams) => Promise<AxiosResponse<WorksCreateResponse, any>>;
    /**
     * @description Deletes a work item.
     *
     * @tags works
     * @name WorksDelete
     * @request POST:/works.delete
     * @secure
     */
    worksDelete: (data: WorksDeleteRequest, params?: RequestParams) => Promise<AxiosResponse<object, any>>;
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
         * @example ["don:core:<partition>:devo/<dev-org-id>:<part-type>/<part-id>"]
         */
        applies_to_part?: string[];
        /**
         * Filters for work created by any of these users.
         * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
         */
        created_by?: string[];
        /**
         * The number of work items to return. The default is '50', the maximum
         * is '5000'.
         * @format int32
         */
        first?: number;
        /** Filters for issues with any of the provided priorities. */
        "issue.priority"?: IssuePriority[];
        /**
         * Filters for issues with any of the provided Rev organizations.
         * @example ["don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"]
         */
        "issue.rev_orgs"?: string[];
        /**
         * Filters for opportunities belonging to any of the provided accounts.
         * @example ["don:core:<partition>:devo/<dev-org-id>:account/<account-id>"]
         */
        "opportunity.account"?: string[];
        /** Filters for opportunities with any of the provided contacts. */
        "opportunity.contacts"?: string[];
        /**
         * Filters for work owned by any of these users.
         * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
         */
        owned_by?: string[];
        /** Filters for records in the provided stage(s). */
        "stage.name"?: string[];
        /** Filters for tickets belonging to specific groups. */
        "ticket.group"?: string[];
        /** Filters for tickets that are spam. */
        "ticket.is_spam"?: boolean;
        /** Filters for tickets that need response. */
        "ticket.needs_response"?: boolean;
        /**
         * Filters for tickets that are associated with any of the provided Rev
         * organizations.
         * @example ["don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"]
         */
        "ticket.rev_org"?: string[];
        /** Filters for tickets with any of the provided severities. */
        "ticket.severity"?: TicketSeverity[];
        /** Filters for tickets with any of the provided source channels. */
        "ticket.source_channel"?: string[];
        /** Filters for work of the provided types. */
        type?: WorkType[];
    }, params?: RequestParams) => Promise<AxiosResponse<WorksExportResponse, any>>;
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
         * @example "don:core:<partition>:devo/<dev-org-id>:<work-type>/<work-id>"
         */
        id: string;
    }, params?: RequestParams) => Promise<AxiosResponse<WorksGetResponse, any>>;
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
        /** Filters for issues with any of the provided priorities. */
        "issue.priority"?: IssuePriority[];
        /**
         * Filters for issues with any of the provided Rev organizations.
         * @example ["don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"]
         */
        "issue.rev_orgs"?: string[];
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
        "opportunity.account"?: string[];
        /** Filters for opportunities with any of the provided contacts. */
        "opportunity.contacts"?: string[];
        /**
         * Filters for work owned by any of these users.
         * @example ["don:identity:<partition>:devo/<dev-org-id>:devu/<dev-user-id>"]
         */
        owned_by?: string[];
        /** Filters for records in the provided stage(s). */
        "stage.name"?: string[];
        /** Filters for tickets belonging to specific groups. */
        "ticket.group"?: string[];
        /** Filters for tickets that are spam. */
        "ticket.is_spam"?: boolean;
        /** Filters for tickets that need response. */
        "ticket.needs_response"?: boolean;
        /**
         * Filters for tickets that are associated with any of the provided Rev
         * organizations.
         * @example ["don:identity:<partition>:devo/<dev-org-id>:revo/<rev-org-id>"]
         */
        "ticket.rev_org"?: string[];
        /** Filters for tickets with any of the provided severities. */
        "ticket.severity"?: TicketSeverity[];
        /** Filters for tickets with any of the provided source channels. */
        "ticket.source_channel"?: string[];
        /** Filters for work of the provided types. */
        type?: WorkType[];
    }, params?: RequestParams) => Promise<AxiosResponse<WorksListResponse, any>>;
    /**
     * @description Updates a work item's information.
     *
     * @tags works
     * @name WorksUpdate
     * @request POST:/works.update
     * @secure
     */
    worksUpdate: (data: WorksUpdateRequest, params?: RequestParams) => Promise<AxiosResponse<WorksUpdateResponse, any>>;
}
