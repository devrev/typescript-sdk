"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBadRequestType = exports.EntitlementScope = exports.DynamicVistaFilterType = exports.DurationType = exports.DomainVerificationStatusValue = exports.DnsRecordType = exports.DiscoveryRunStatus = exports.DiscoveryGithubReposSettingsReposStatus = exports.DevuInviteState = exports.DevrevProfileVisibility = exports.DevUserJobTitle = exports.DevOrgAuthConnectionsUpdateRequestType = exports.DevOrgAuthConnectionsCreateRequestType = exports.DateTimePresetType = exports.DateFilterType = exports.CustomSchemaFragmentsSetRequestType = exports.CustomSchemaFragmentType = exports.CustomSchemaFragmentFragmentType = exports.CreditStatus = exports.CreditCouponCreditExpiryMethod = exports.ConversationsCreateRequestTypeValue = exports.ConversationPriority = exports.ConversationAssistRequestedObject = exports.ConfigurationProrationBehavior = exports.ConfigurationCollectionMethod = exports.ConditionalRoleApplicableObjectType = exports.ConditionV1Operator = exports.ConditionOperator = exports.CommandSurfaceSurface = exports.CommandSurfaceObjectTypes = exports.CommandStatus = exports.CommandActionExecutorType = exports.BatchApplyResponseItemBatchType = exports.BatchApplyRequestItemBatchType = exports.AutoSuggestRequestedField = exports.AuthTokenTokenType = exports.AuthTokenSubjectTokenType = exports.AuthTokenStatus = exports.AuthTokenRequestedTokenType = exports.AuthTokenGrantType = exports.AuthConnectionType = exports.AuthConnectionToggle = exports.AtomType = exports.ArtifactConfigurationSet = exports.ArticleStatus = exports.AppRouteValue = exports.ApiOperationHttpOperation = exports.AddonRulesAssociativity = exports.ActionTypeValue = exports.AccessLevel = void 0;
exports.OrgState = exports.OrgEnvironment = exports.OperationType = exports.ObjectTypeProto = exports.ObjectMemberV1MemberType = exports.NotificationType = exports.NotificationState = exports.NotificationPriority = exports.NotificationPreferencesGroupEmailNotifications = exports.NotificationParentType = exports.NewsCreateRequestStatusValue = exports.MicroflowDefinitionPublishStatus = exports.MicroflowDefinitionDefinedOnObjectType = exports.MetricDefinitionType = exports.MarketplaceType = exports.MarketplaceItemType = exports.MarketplaceItemState = exports.MarketplaceItemItemType = exports.ListMode = exports.LinksDirection = exports.LinkableKind = exports.LinkType = exports.LinkEndpointType = exports.KeyringType = exports.KeyringStatus = exports.KeyringScope = exports.IssuePriority = exports.InvoicesCollectionMethod = exports.InvoiceStatus = exports.InstructionsFormat = exports.InsightValueType = exports.InsightType = exports.GroupedVistaFlavor = exports.GroupedVistaFilterType = exports.GroupAllowedMemberType = exports.GlobalInputInputType = exports.GithubFlowEventTransition = exports.FlowStatus = exports.FlowGlobalInputType = exports.FieldValueType = exports.FeatureApiOperationHttpOperation = exports.ExternalIdentityState = exports.EventSourceStatus = exports.ErrorUnauthorizedType = exports.ErrorTooManyRequestsType = exports.ErrorServiceUnavailableType = exports.ErrorNotFoundType = exports.ErrorInternalServerErrorType = exports.ErrorForbiddenType = exports.ErrorConflictType = void 0;
exports.TagType = exports.SnapType = exports.SnapKitActionRequestElementTypeValue = exports.SnapInVersionState = exports.SnapInStatus = exports.SnapInGlobalInputType = exports.SnapInFunctionDefinitionSourceType = exports.SlaStatus = exports.SlaSelectorTagOperation = exports.SlaSelectorSeverity = exports.SlaSelectorPriority = exports.SlaSelectorAppliesTo = exports.SlaMetricSummaryStage = exports.SlaEvaluationPeriod = exports.SkuType = exports.SkuStatus = exports.SkuState = exports.SetupResourceResourceType = exports.ServicePlanBillingCycle = exports.SendNotificationType = exports.SearchSortOrderParam = exports.SearchSortByParam = exports.SearchResultType = exports.SearchNamespace = exports.SchemaFieldDescriptorFieldType = exports.SchemaFieldDescriptorArrayTypeBaseType = exports.ScheduleStatus = exports.ScheduleFragmentStatus = exports.RunnableKind = exports.RoomsInformRequestStatusValue = exports.RevUserUserType = exports.RevOrgsBulkRequestEnum = exports.RevOrgType = exports.ResourceType = exports.PushDeviceType = exports.ProjectType = exports.ProjectPriority = exports.ProductDeliveredAs = exports.PricingBillingCycle = exports.PreferencesType = exports.PaymentMethodType = exports.PaymentMethodCardFundType = exports.PaymentMethodBankAccountAccountType = exports.PaymentMethodBankAccountAccountHolderType = exports.PartsMutateRequestType = exports.PartsDiscoverySourceName = exports.PartType = exports.PartDeliveredAs = exports.PartCategory = exports.OrgType = void 0;
exports.Api = exports.HttpClient = exports.ContentType = exports.WorksVistaGroupItemType = exports.WorksFilterTicketRevOrgIDsOperatorType = exports.WorksFilterTagIdsOperatorType = exports.WorksFilterOwnedByOperatorType = exports.WorksFilterCreatedByOperatorType = exports.WorkType = exports.WebhooksUpdateAction = exports.WebhookStatus = exports.WebhookEventType = exports.WatchEvent = exports.VistaType = exports.VertexV2ObjectType = exports.UserType = exports.UserState = exports.UserPreferencesThemeMode = exports.UserParticipationNotificationLatestActivityType = exports.UserAction = exports.UomMeterScope = exports.UomAggregationType = exports.UnitType = exports.TypeAheadRequestedField = exports.TimelineEventType = exports.TimelineEntryType = exports.TimelineEntriesUpdateRequestType = exports.TimelineEntriesCreateRequestType = exports.TimelineEntriesCollection = exports.TimelineCommentBodyType = exports.TicketSeverity = exports.TaskPriority = void 0;
var AccessLevel;
(function (AccessLevel) {
    AccessLevel["External"] = "external";
    AccessLevel["Internal"] = "internal";
    AccessLevel["Private"] = "private";
    AccessLevel["Public"] = "public";
    AccessLevel["Restricted"] = "restricted";
})(AccessLevel = exports.AccessLevel || (exports.AccessLevel = {}));
var ActionTypeValue;
(function (ActionTypeValue) {
    ActionTypeValue["Create"] = "create";
    ActionTypeValue["Delete"] = "delete";
    ActionTypeValue["Read"] = "read";
    ActionTypeValue["Unknown"] = "unknown";
    ActionTypeValue["Update"] = "update";
})(ActionTypeValue = exports.ActionTypeValue || (exports.ActionTypeValue = {}));
/** Type of association between SKU and addon, defaults to optional. */
var AddonRulesAssociativity;
(function (AddonRulesAssociativity) {
    AddonRulesAssociativity["Mandatory"] = "mandatory";
    AddonRulesAssociativity["Optional"] = "optional";
})(AddonRulesAssociativity = exports.AddonRulesAssociativity || (exports.AddonRulesAssociativity = {}));
/** The Http verb of the discovered API operation. */
var ApiOperationHttpOperation;
(function (ApiOperationHttpOperation) {
    ApiOperationHttpOperation["Connect"] = "connect";
    ApiOperationHttpOperation["Delete"] = "delete";
    ApiOperationHttpOperation["Get"] = "get";
    ApiOperationHttpOperation["Head"] = "head";
    ApiOperationHttpOperation["Options"] = "options";
    ApiOperationHttpOperation["Patch"] = "patch";
    ApiOperationHttpOperation["Post"] = "post";
    ApiOperationHttpOperation["Put"] = "put";
    ApiOperationHttpOperation["Trace"] = "trace";
})(ApiOperationHttpOperation = exports.ApiOperationHttpOperation || (exports.ApiOperationHttpOperation = {}));
var AppRouteValue;
(function (AppRouteValue) {
    AppRouteValue["Customers"] = "customers";
    AppRouteValue["Lobby"] = "lobby";
    AppRouteValue["MyTasks"] = "my_tasks";
    AppRouteValue["Parts"] = "parts";
    AppRouteValue["PlugInbox"] = "plug_inbox";
    AppRouteValue["Trails"] = "trails";
    AppRouteValue["Unknown"] = "unknown";
    AppRouteValue["Updates"] = "updates";
    AppRouteValue["Vista"] = "vista";
})(AppRouteValue = exports.AppRouteValue || (exports.AppRouteValue = {}));
/** Status of the article. */
var ArticleStatus;
(function (ArticleStatus) {
    ArticleStatus["Archived"] = "archived";
    ArticleStatus["Draft"] = "draft";
    ArticleStatus["Published"] = "published";
    ArticleStatus["ReviewNeeded"] = "review_needed";
})(ArticleStatus = exports.ArticleStatus || (exports.ArticleStatus = {}));
/** Represents a set of configuration to be used with the artifacts object. */
var ArtifactConfigurationSet;
(function (ArtifactConfigurationSet) {
    ArtifactConfigurationSet["Default"] = "default";
    ArtifactConfigurationSet["OrgLogo"] = "org_logo";
    ArtifactConfigurationSet["SnapInFunctionsCode"] = "snap_in_functions_code";
    ArtifactConfigurationSet["UserProfilePicture"] = "user_profile_picture";
    ArtifactConfigurationSet["Work"] = "work";
})(ArtifactConfigurationSet = exports.ArtifactConfigurationSet || (exports.ArtifactConfigurationSet = {}));
var AtomType;
(function (AtomType) {
    AtomType["Account"] = "account";
    AtomType["AddonRules"] = "addon_rules";
    AtomType["AppFragment"] = "app_fragment";
    AtomType["Article"] = "article";
    AtomType["Artifact"] = "artifact";
    AtomType["AuthToken"] = "auth_token";
    AtomType["Automation"] = "automation";
    AtomType["Capability"] = "capability";
    AtomType["Command"] = "command";
    AtomType["Component"] = "component";
    AtomType["ConditionalRole"] = "conditional_role";
    AtomType["Conversation"] = "conversation";
    AtomType["ConversationCreatedNotification"] = "conversation_created_notification";
    AtomType["ConversationInactivityReminder"] = "conversation_inactivity_reminder";
    AtomType["Credit"] = "credit";
    AtomType["CreditCoupon"] = "credit_coupon";
    AtomType["CustomObject"] = "custom_object";
    AtomType["CustomPart"] = "custom_part";
    AtomType["CustomStage"] = "custom_stage";
    AtomType["CustomState"] = "custom_state";
    AtomType["CustomTypeFragment"] = "custom_type_fragment";
    AtomType["CustomWork"] = "custom_work";
    AtomType["DevOrg"] = "dev_org";
    AtomType["DevUser"] = "dev_user";
    AtomType["DevrevProfile"] = "devrev_profile";
    AtomType["DevrevReminder"] = "devrev_reminder";
    AtomType["DevuInvite"] = "devu_invite";
    AtomType["DiscoveryGitCommit"] = "discovery_git_commit";
    AtomType["DiscoveryGitEvent"] = "discovery_git_event";
    AtomType["DiscoveryProfile"] = "discovery_profile";
    AtomType["DiscoveryRun"] = "discovery_run";
    AtomType["DiscoverySettings"] = "discovery_settings";
    AtomType["Enhancement"] = "enhancement";
    AtomType["EventSource"] = "event_source";
    AtomType["Feature"] = "feature";
    AtomType["FeaturePin"] = "feature_pin";
    AtomType["Flow"] = "flow";
    AtomType["FunctionDefinition"] = "function_definition";
    AtomType["Group"] = "group";
    AtomType["Invoice"] = "invoice";
    AtomType["Issue"] = "issue";
    AtomType["Keyring"] = "keyring";
    AtomType["Link"] = "link";
    AtomType["Linkable"] = "linkable";
    AtomType["LinkablePin"] = "linkable_pin";
    AtomType["Marketplace"] = "marketplace";
    AtomType["MarketplaceCategory"] = "marketplace_category";
    AtomType["MarketplaceItem"] = "marketplace_item";
    AtomType["Meeting"] = "meeting";
    AtomType["MetricDefinition"] = "metric_definition";
    AtomType["MicroflowDefinition"] = "microflow_definition";
    AtomType["Microservice"] = "microservice";
    AtomType["News"] = "news";
    AtomType["ObjectAssignmentNotification"] = "object_assignment_notification";
    AtomType["ObjectMember"] = "object_member";
    AtomType["OneTimeLineItem"] = "one_time_line_item";
    AtomType["Opportunity"] = "opportunity";
    AtomType["OrgPreferences"] = "org_preferences";
    AtomType["PaymentMethodBankAccount"] = "payment_method_bank_account";
    AtomType["PaymentMethodCard"] = "payment_method_card";
    AtomType["PrReviewReminder"] = "pr_review_reminder";
    AtomType["Pricing"] = "pricing";
    AtomType["Product"] = "product";
    AtomType["Project"] = "project";
    AtomType["PushDevice"] = "push_device";
    AtomType["RealTimeInsight"] = "real_time_insight";
    AtomType["RealTimeInsightValue"] = "real_time_insight_value";
    AtomType["RecurringLineItem"] = "recurring_line_item";
    AtomType["RevOrg"] = "rev_org";
    AtomType["RevUser"] = "rev_user";
    AtomType["Reward"] = "reward";
    AtomType["RewardTransaction"] = "reward_transaction";
    AtomType["Role"] = "role";
    AtomType["Room"] = "room";
    AtomType["Runnable"] = "runnable";
    AtomType["RunnablePin"] = "runnable_pin";
    AtomType["Schedule"] = "schedule";
    AtomType["ScheduleFragment"] = "schedule_fragment";
    AtomType["ServiceAccount"] = "service_account";
    AtomType["ServicePlan"] = "service_plan";
    AtomType["Settings"] = "settings";
    AtomType["Sku"] = "sku";
    AtomType["SkuRules"] = "sku_rules";
    AtomType["Sla"] = "sla";
    AtomType["SlaTracker"] = "sla_tracker";
    AtomType["SnapIn"] = "snap_in";
    AtomType["SnapInFunction"] = "snap_in_function";
    AtomType["SnapInPackage"] = "snap_in_package";
    AtomType["SnapInVersion"] = "snap_in_version";
    AtomType["SnapKitAction"] = "snap_kit_action";
    AtomType["StageDiagram"] = "stage_diagram";
    AtomType["StockSchemaFragment"] = "stock_schema_fragment";
    AtomType["Survey"] = "survey";
    AtomType["SysUser"] = "sys_user";
    AtomType["Tag"] = "tag";
    AtomType["Task"] = "task";
    AtomType["TenantFragment"] = "tenant_fragment";
    AtomType["Ticket"] = "ticket";
    AtomType["TimelineChangeEvent"] = "timeline_change_event";
    AtomType["TimelineComment"] = "timeline_comment";
    AtomType["Uom"] = "uom";
    AtomType["UserMentionedNotification"] = "user_mentioned_notification";
    AtomType["UserParticipationNotification"] = "user_participation_notification";
    AtomType["UserPreferences"] = "user_preferences";
    AtomType["VistaSharedNotification"] = "vista_shared_notification";
    AtomType["Webhook"] = "webhook";
    AtomType["WindowBasedInsight"] = "window_based_insight";
    AtomType["WindowBasedInsightValue"] = "window_based_insight_value";
})(AtomType = exports.AtomType || (exports.AtomType = {}));
var AuthConnectionToggle;
(function (AuthConnectionToggle) {
    AuthConnectionToggle["Disable"] = "disable";
    AuthConnectionToggle["Enable"] = "enable";
})(AuthConnectionToggle = exports.AuthConnectionToggle || (exports.AuthConnectionToggle = {}));
/**
 * Defines the type for the authentication connection. The configuration
 * for each authentication connection will depend on the type value.
 */
var AuthConnectionType;
(function (AuthConnectionType) {
    AuthConnectionType["GoogleApps"] = "google_apps";
    AuthConnectionType["Oidc"] = "oidc";
    AuthConnectionType["Samlp"] = "samlp";
    AuthConnectionType["Social"] = "social";
    AuthConnectionType["Waad"] = "waad";
})(AuthConnectionType = exports.AuthConnectionType || (exports.AuthConnectionType = {}));
/** Specifies the process of obtaining a token. */
var AuthTokenGrantType;
(function (AuthTokenGrantType) {
    AuthTokenGrantType["UrnDevrevParamsOauthGrantTypeTokenIssue"] = "urn:devrev:params:oauth:grant-type:token-issue";
    AuthTokenGrantType["UrnIetfParamsOauthGrantTypeTokenExchange"] = "urn:ietf:params:oauth:grant-type:token-exchange";
})(AuthTokenGrantType = exports.AuthTokenGrantType || (exports.AuthTokenGrantType = {}));
/** The type of the requested token. */
var AuthTokenRequestedTokenType;
(function (AuthTokenRequestedTokenType) {
    AuthTokenRequestedTokenType["UrnDevrevParamsOauthTokenTypeAat"] = "urn:devrev:params:oauth:token-type:aat";
    AuthTokenRequestedTokenType["UrnDevrevParamsOauthTokenTypeAatPublic"] = "urn:devrev:params:oauth:token-type:aat:public";
    AuthTokenRequestedTokenType["UrnDevrevParamsOauthTokenTypeDev"] = "urn:devrev:params:oauth:token-type:dev";
    AuthTokenRequestedTokenType["UrnDevrevParamsOauthTokenTypePat"] = "urn:devrev:params:oauth:token-type:pat";
    AuthTokenRequestedTokenType["UrnDevrevParamsOauthTokenTypeRev"] = "urn:devrev:params:oauth:token-type:rev";
    AuthTokenRequestedTokenType["UrnDevrevParamsOauthTokenTypeSession"] = "urn:devrev:params:oauth:token-type:session";
    AuthTokenRequestedTokenType["UrnDevrevParamsOauthTokenTypeSessionDev0"] = "urn:devrev:params:oauth:token-type:session:dev0";
    AuthTokenRequestedTokenType["UrnDevrevParamsOauthTokenTypeSys"] = "urn:devrev:params:oauth:token-type:sys";
    AuthTokenRequestedTokenType["UrnIetfParamsOauthTokenTypeJwt"] = "urn:ietf:params:oauth:token-type:jwt";
})(AuthTokenRequestedTokenType = exports.AuthTokenRequestedTokenType || (exports.AuthTokenRequestedTokenType = {}));
/** The status of the token. */
var AuthTokenStatus;
(function (AuthTokenStatus) {
    AuthTokenStatus["Active"] = "active";
    AuthTokenStatus["Expired"] = "expired";
    AuthTokenStatus["Revoked"] = "revoked";
})(AuthTokenStatus = exports.AuthTokenStatus || (exports.AuthTokenStatus = {}));
/** The type of the subject token. */
var AuthTokenSubjectTokenType;
(function (AuthTokenSubjectTokenType) {
    AuthTokenSubjectTokenType["UrnDevrevParamsOauthTokenTypeJwtAuth0"] = "urn:devrev:params:oauth:token-type:jwt:auth0";
    AuthTokenSubjectTokenType["UrnDevrevParamsOauthTokenTypeJwtDev"] = "urn:devrev:params:oauth:token-type:jwt:dev";
    AuthTokenSubjectTokenType["UrnDevrevParamsOauthTokenTypeRevinfo"] = "urn:devrev:params:oauth:token-type:revinfo";
    AuthTokenSubjectTokenType["UrnDevrevParamsOauthTokenTypeSysu"] = "urn:devrev:params:oauth:token-type:sysu";
    AuthTokenSubjectTokenType["UrnDevrevParamsOauthTokenTypeUserinfo"] = "urn:devrev:params:oauth:token-type:userinfo";
    AuthTokenSubjectTokenType["UrnDevrevParamsOauthTokenTypeUserinfoProfile"] = "urn:devrev:params:oauth:token-type:userinfo:profile";
    AuthTokenSubjectTokenType["UrnIetfParamsOauthTokenTypeJwt"] = "urn:ietf:params:oauth:token-type:jwt";
})(AuthTokenSubjectTokenType = exports.AuthTokenSubjectTokenType || (exports.AuthTokenSubjectTokenType = {}));
/** The type of the issued token. Bearer is the only supported token type. */
var AuthTokenTokenType;
(function (AuthTokenTokenType) {
    AuthTokenTokenType["Bearer"] = "bearer";
})(AuthTokenTokenType = exports.AuthTokenTokenType || (exports.AuthTokenTokenType = {}));
/** Field types for autosuggest recommendation. */
var AutoSuggestRequestedField;
(function (AutoSuggestRequestedField) {
    AutoSuggestRequestedField["AppliesToPart"] = "applies_to_part";
    AutoSuggestRequestedField["OwnedBy"] = "owned_by";
    AutoSuggestRequestedField["Tag"] = "tag";
})(AutoSuggestRequestedField = exports.AutoSuggestRequestedField || (exports.AutoSuggestRequestedField = {}));
var BatchApplyRequestItemBatchType;
(function (BatchApplyRequestItemBatchType) {
    BatchApplyRequestItemBatchType["AccountsCount"] = "accounts_count";
    BatchApplyRequestItemBatchType["ConversationsCount"] = "conversations_count";
    BatchApplyRequestItemBatchType["ConversationsCreate"] = "conversations_create";
    BatchApplyRequestItemBatchType["ConversationsDelete"] = "conversations_delete";
    BatchApplyRequestItemBatchType["ConversationsGet"] = "conversations_get";
    BatchApplyRequestItemBatchType["ConversationsUpdate"] = "conversations_update";
    BatchApplyRequestItemBatchType["CustomSchemaFragmentsGet"] = "custom_schema_fragments_get";
    BatchApplyRequestItemBatchType["LinksCreate"] = "links_create";
    BatchApplyRequestItemBatchType["LinksDelete"] = "links_delete";
    BatchApplyRequestItemBatchType["LinksGet"] = "links_get";
    BatchApplyRequestItemBatchType["LinksReplace"] = "links_replace";
    BatchApplyRequestItemBatchType["PartsCount"] = "parts_count";
    BatchApplyRequestItemBatchType["PartsCreate"] = "parts_create";
    BatchApplyRequestItemBatchType["PartsDelete"] = "parts_delete";
    BatchApplyRequestItemBatchType["PartsGet"] = "parts_get";
    BatchApplyRequestItemBatchType["PartsUpdate"] = "parts_update";
    BatchApplyRequestItemBatchType["RevOrgsCount"] = "rev_orgs_count";
    BatchApplyRequestItemBatchType["RevUsersCount"] = "rev_users_count";
    BatchApplyRequestItemBatchType["SubtypesList"] = "subtypes_list";
    BatchApplyRequestItemBatchType["TagsCreate"] = "tags_create";
    BatchApplyRequestItemBatchType["TagsDelete"] = "tags_delete";
    BatchApplyRequestItemBatchType["TagsGet"] = "tags_get";
    BatchApplyRequestItemBatchType["TagsUpdate"] = "tags_update";
    BatchApplyRequestItemBatchType["TimelineEntriesCreate"] = "timeline_entries_create";
    BatchApplyRequestItemBatchType["TimelineEntriesDelete"] = "timeline_entries_delete";
    BatchApplyRequestItemBatchType["TimelineEntriesGet"] = "timeline_entries_get";
    BatchApplyRequestItemBatchType["TimelineEntriesList"] = "timeline_entries_list";
    BatchApplyRequestItemBatchType["TimelineEntriesUpdate"] = "timeline_entries_update";
    BatchApplyRequestItemBatchType["WorksCount"] = "works_count";
    BatchApplyRequestItemBatchType["WorksCreate"] = "works_create";
    BatchApplyRequestItemBatchType["WorksDelete"] = "works_delete";
    BatchApplyRequestItemBatchType["WorksGet"] = "works_get";
    BatchApplyRequestItemBatchType["WorksUpdate"] = "works_update";
})(BatchApplyRequestItemBatchType = exports.BatchApplyRequestItemBatchType || (exports.BatchApplyRequestItemBatchType = {}));
var BatchApplyResponseItemBatchType;
(function (BatchApplyResponseItemBatchType) {
    BatchApplyResponseItemBatchType["AccountsCount"] = "accounts_count";
    BatchApplyResponseItemBatchType["ConversationsCount"] = "conversations_count";
    BatchApplyResponseItemBatchType["ConversationsCreate"] = "conversations_create";
    BatchApplyResponseItemBatchType["ConversationsDelete"] = "conversations_delete";
    BatchApplyResponseItemBatchType["ConversationsGet"] = "conversations_get";
    BatchApplyResponseItemBatchType["ConversationsUpdate"] = "conversations_update";
    BatchApplyResponseItemBatchType["CustomSchemaFragmentsGet"] = "custom_schema_fragments_get";
    BatchApplyResponseItemBatchType["Error"] = "error";
    BatchApplyResponseItemBatchType["LinksCreate"] = "links_create";
    BatchApplyResponseItemBatchType["LinksDelete"] = "links_delete";
    BatchApplyResponseItemBatchType["LinksGet"] = "links_get";
    BatchApplyResponseItemBatchType["LinksReplace"] = "links_replace";
    BatchApplyResponseItemBatchType["PartsCount"] = "parts_count";
    BatchApplyResponseItemBatchType["PartsCreate"] = "parts_create";
    BatchApplyResponseItemBatchType["PartsDelete"] = "parts_delete";
    BatchApplyResponseItemBatchType["PartsGet"] = "parts_get";
    BatchApplyResponseItemBatchType["PartsUpdate"] = "parts_update";
    BatchApplyResponseItemBatchType["RevOrgsCount"] = "rev_orgs_count";
    BatchApplyResponseItemBatchType["RevUsersCount"] = "rev_users_count";
    BatchApplyResponseItemBatchType["SubtypesList"] = "subtypes_list";
    BatchApplyResponseItemBatchType["TagsCreate"] = "tags_create";
    BatchApplyResponseItemBatchType["TagsDelete"] = "tags_delete";
    BatchApplyResponseItemBatchType["TagsGet"] = "tags_get";
    BatchApplyResponseItemBatchType["TagsUpdate"] = "tags_update";
    BatchApplyResponseItemBatchType["TimelineEntriesCreate"] = "timeline_entries_create";
    BatchApplyResponseItemBatchType["TimelineEntriesDelete"] = "timeline_entries_delete";
    BatchApplyResponseItemBatchType["TimelineEntriesGet"] = "timeline_entries_get";
    BatchApplyResponseItemBatchType["TimelineEntriesList"] = "timeline_entries_list";
    BatchApplyResponseItemBatchType["TimelineEntriesUpdate"] = "timeline_entries_update";
    BatchApplyResponseItemBatchType["WorksCount"] = "works_count";
    BatchApplyResponseItemBatchType["WorksCreate"] = "works_create";
    BatchApplyResponseItemBatchType["WorksDelete"] = "works_delete";
    BatchApplyResponseItemBatchType["WorksGet"] = "works_get";
    BatchApplyResponseItemBatchType["WorksUpdate"] = "works_update";
})(BatchApplyResponseItemBatchType = exports.BatchApplyResponseItemBatchType || (exports.BatchApplyResponseItemBatchType = {}));
/** Specifies how the action is defined. */
var CommandActionExecutorType;
(function (CommandActionExecutorType) {
    CommandActionExecutorType["Rego"] = "rego";
})(CommandActionExecutorType = exports.CommandActionExecutorType || (exports.CommandActionExecutorType = {}));
/** Status of the command. */
var CommandStatus;
(function (CommandStatus) {
    CommandStatus["Disabled"] = "disabled";
    CommandStatus["Enabled"] = "enabled";
})(CommandStatus = exports.CommandStatus || (exports.CommandStatus = {}));
/** Objects types on which a command can be invoked. */
var CommandSurfaceObjectTypes;
(function (CommandSurfaceObjectTypes) {
    CommandSurfaceObjectTypes["Conversation"] = "conversation";
    CommandSurfaceObjectTypes["Issue"] = "issue";
    CommandSurfaceObjectTypes["Part"] = "part";
    CommandSurfaceObjectTypes["RevOrg"] = "rev_org";
    CommandSurfaceObjectTypes["RevUser"] = "rev_user";
    CommandSurfaceObjectTypes["Ticket"] = "ticket";
})(CommandSurfaceObjectTypes = exports.CommandSurfaceObjectTypes || (exports.CommandSurfaceObjectTypes = {}));
/**
 * Surfaces from where this command can be invoked. In future this will be
 * extended to add more places like list views and events from where a
 * command can be invoked.
 */
var CommandSurfaceSurface;
(function (CommandSurfaceSurface) {
    CommandSurfaceSurface["Discussions"] = "discussions";
})(CommandSurfaceSurface = exports.CommandSurfaceSurface || (exports.CommandSurfaceSurface = {}));
/** The operator used to compare the object vals. */
var ConditionOperator;
(function (ConditionOperator) {
    ConditionOperator["Eq"] = "eq";
    ConditionOperator["In"] = "in";
    ConditionOperator["NotEq"] = "not_eq";
    ConditionOperator["NotIn"] = "not_in";
})(ConditionOperator = exports.ConditionOperator || (exports.ConditionOperator = {}));
/** The operator used to compare the object vals. */
var ConditionV1Operator;
(function (ConditionV1Operator) {
    ConditionV1Operator["Eq"] = "eq";
    ConditionV1Operator["In"] = "in";
    ConditionV1Operator["NotEq"] = "not_eq";
    ConditionV1Operator["NotIn"] = "not_in";
})(ConditionV1Operator = exports.ConditionV1Operator || (exports.ConditionV1Operator = {}));
/** Object type for which the conditional role is defined. */
var ConditionalRoleApplicableObjectType;
(function (ConditionalRoleApplicableObjectType) {
    ConditionalRoleApplicableObjectType["Conversation"] = "conversation";
    ConditionalRoleApplicableObjectType["Group"] = "group";
    ConditionalRoleApplicableObjectType["Issue"] = "issue";
    ConditionalRoleApplicableObjectType["Part"] = "part";
    ConditionalRoleApplicableObjectType["Ticket"] = "ticket";
    ConditionalRoleApplicableObjectType["Token"] = "token";
    ConditionalRoleApplicableObjectType["Vista"] = "vista";
})(ConditionalRoleApplicableObjectType = exports.ConditionalRoleApplicableObjectType || (exports.ConditionalRoleApplicableObjectType = {}));
/**
 * Charge collection strategy for the service plan. Defaults to
 * charge_automatically.
 */
var ConfigurationCollectionMethod;
(function (ConfigurationCollectionMethod) {
    ConfigurationCollectionMethod["ChargeAutomatically"] = "charge_automatically";
    ConfigurationCollectionMethod["SendInvoice"] = "send_invoice";
})(ConfigurationCollectionMethod = exports.ConfigurationCollectionMethod || (exports.ConfigurationCollectionMethod = {}));
/**
 * Determines how to handle prorations resulting from the billing_date. If
 * no value is passed, the default is create_prorations.
 */
var ConfigurationProrationBehavior;
(function (ConfigurationProrationBehavior) {
    ConfigurationProrationBehavior["AlwaysInvoice"] = "always_invoice";
    ConfigurationProrationBehavior["CreateProrations"] = "create_prorations";
    ConfigurationProrationBehavior["None"] = "none";
})(ConfigurationProrationBehavior = exports.ConfigurationProrationBehavior || (exports.ConfigurationProrationBehavior = {}));
/** Object for which suggestions are requested. */
var ConversationAssistRequestedObject;
(function (ConversationAssistRequestedObject) {
    ConversationAssistRequestedObject["Article"] = "article";
    ConversationAssistRequestedObject["Conversation"] = "conversation";
    ConversationAssistRequestedObject["Ticket"] = "ticket";
})(ConversationAssistRequestedObject = exports.ConversationAssistRequestedObject || (exports.ConversationAssistRequestedObject = {}));
/** Priority of the conversation. */
var ConversationPriority;
(function (ConversationPriority) {
    ConversationPriority["P0"] = "p0";
    ConversationPriority["P1"] = "p1";
    ConversationPriority["P2"] = "p2";
})(ConversationPriority = exports.ConversationPriority || (exports.ConversationPriority = {}));
var ConversationsCreateRequestTypeValue;
(function (ConversationsCreateRequestTypeValue) {
    ConversationsCreateRequestTypeValue["Support"] = "support";
})(ConversationsCreateRequestTypeValue = exports.ConversationsCreateRequestTypeValue || (exports.ConversationsCreateRequestTypeValue = {}));
/**
 * If both credit expiry time and credit expiry duration are set, then the
 * max of both will be taken at the time of applying this coupon, if
 * credit expiry method is set to 'latest'. While min of both would be
 * taken in case of 'earliest' credit expiry method.
 */
var CreditCouponCreditExpiryMethod;
(function (CreditCouponCreditExpiryMethod) {
    CreditCouponCreditExpiryMethod["Earliest"] = "earliest";
    CreditCouponCreditExpiryMethod["Latest"] = "latest";
})(CreditCouponCreditExpiryMethod = exports.CreditCouponCreditExpiryMethod || (exports.CreditCouponCreditExpiryMethod = {}));
/**
 * Status of the credit request. A Dev is allowed to update status for the
 * credit request made by their Rev. Once a credit request status is made
 * as 'approved', no updates are allowed to the credit object after that.
 * When a Dev disburses credits to any of it's Revs, then by default the
 * credit object's status is 'approved', hence no updates are allowed.
 * When a Rev requests credits from their Dev Org, the status of requested
 * credit object is 'awaiting approval' (revs cannot modify the status
 * field, it's a Dev's construct). A Dev can update the status of credit
 * request to approved or rejected.
 */
var CreditStatus;
(function (CreditStatus) {
    CreditStatus["Approved"] = "approved";
    CreditStatus["AwaitingApproval"] = "awaiting_approval";
    CreditStatus["Rejected"] = "rejected";
})(CreditStatus = exports.CreditStatus || (exports.CreditStatus = {}));
/** Type of the custom schema fragment. */
var CustomSchemaFragmentFragmentType;
(function (CustomSchemaFragmentFragmentType) {
    CustomSchemaFragmentFragmentType["App"] = "app";
    CustomSchemaFragmentFragmentType["CustomType"] = "custom_type";
    CustomSchemaFragmentFragmentType["Tenant"] = "tenant";
})(CustomSchemaFragmentFragmentType = exports.CustomSchemaFragmentFragmentType || (exports.CustomSchemaFragmentFragmentType = {}));
var CustomSchemaFragmentType;
(function (CustomSchemaFragmentType) {
    CustomSchemaFragmentType["AppFragment"] = "app_fragment";
    CustomSchemaFragmentType["CustomTypeFragment"] = "custom_type_fragment";
    CustomSchemaFragmentType["TenantFragment"] = "tenant_fragment";
})(CustomSchemaFragmentType = exports.CustomSchemaFragmentType || (exports.CustomSchemaFragmentType = {}));
var CustomSchemaFragmentsSetRequestType;
(function (CustomSchemaFragmentsSetRequestType) {
    CustomSchemaFragmentsSetRequestType["AppFragment"] = "app_fragment";
    CustomSchemaFragmentsSetRequestType["CustomTypeFragment"] = "custom_type_fragment";
    CustomSchemaFragmentsSetRequestType["TenantFragment"] = "tenant_fragment";
})(CustomSchemaFragmentsSetRequestType = exports.CustomSchemaFragmentsSetRequestType || (exports.CustomSchemaFragmentsSetRequestType = {}));
/** Type of date filter. */
var DateFilterType;
(function (DateFilterType) {
    DateFilterType["Preset"] = "preset";
    DateFilterType["Range"] = "range";
})(DateFilterType = exports.DateFilterType || (exports.DateFilterType = {}));
/** Type of date preset. */
var DateTimePresetType;
(function (DateTimePresetType) {
    DateTimePresetType["LastNDays"] = "last_n_days";
    DateTimePresetType["NextNDays"] = "next_n_days";
})(DateTimePresetType = exports.DateTimePresetType || (exports.DateTimePresetType = {}));
/**
 * Defines the type for the authentication connection. Different types of
 * authentication connections have different configuration parameters.
 */
var DevOrgAuthConnectionsCreateRequestType;
(function (DevOrgAuthConnectionsCreateRequestType) {
    DevOrgAuthConnectionsCreateRequestType["GoogleApps"] = "google_apps";
    DevOrgAuthConnectionsCreateRequestType["Oidc"] = "oidc";
    DevOrgAuthConnectionsCreateRequestType["Samlp"] = "samlp";
    DevOrgAuthConnectionsCreateRequestType["Waad"] = "waad";
})(DevOrgAuthConnectionsCreateRequestType = exports.DevOrgAuthConnectionsCreateRequestType || (exports.DevOrgAuthConnectionsCreateRequestType = {}));
/**
 * Specifies the type for the authentication connection. Different types
 * of authentication connections have different configuration parameters
 * that can be updated.
 */
var DevOrgAuthConnectionsUpdateRequestType;
(function (DevOrgAuthConnectionsUpdateRequestType) {
    DevOrgAuthConnectionsUpdateRequestType["GoogleApps"] = "google_apps";
    DevOrgAuthConnectionsUpdateRequestType["None"] = "none";
    DevOrgAuthConnectionsUpdateRequestType["Oidc"] = "oidc";
    DevOrgAuthConnectionsUpdateRequestType["Samlp"] = "samlp";
    DevOrgAuthConnectionsUpdateRequestType["Waad"] = "waad";
})(DevOrgAuthConnectionsUpdateRequestType = exports.DevOrgAuthConnectionsUpdateRequestType || (exports.DevOrgAuthConnectionsUpdateRequestType = {}));
/** Job title of the Dev User. */
var DevUserJobTitle;
(function (DevUserJobTitle) {
    DevUserJobTitle["Cxo"] = "cxo";
    DevUserJobTitle["Designer"] = "designer";
    DevUserJobTitle["Developer"] = "developer";
    DevUserJobTitle["Operations"] = "operations";
    DevUserJobTitle["Others"] = "others";
    DevUserJobTitle["ProductManager"] = "product_manager";
    DevUserJobTitle["Qa"] = "qa";
    DevUserJobTitle["Support"] = "support";
    DevUserJobTitle["TechLead"] = "tech_lead";
})(DevUserJobTitle = exports.DevUserJobTitle || (exports.DevUserJobTitle = {}));
/** Visibility of the profile to other users. */
var DevrevProfileVisibility;
(function (DevrevProfileVisibility) {
    DevrevProfileVisibility["Private"] = "private";
    DevrevProfileVisibility["Public"] = "public";
})(DevrevProfileVisibility = exports.DevrevProfileVisibility || (exports.DevrevProfileVisibility = {}));
/** State of the invite. */
var DevuInviteState;
(function (DevuInviteState) {
    DevuInviteState["Accepted"] = "accepted";
    DevuInviteState["Deleted"] = "deleted";
    DevuInviteState["Expired"] = "expired";
    DevuInviteState["Pending"] = "pending";
})(DevuInviteState = exports.DevuInviteState || (exports.DevuInviteState = {}));
/** Enum for repositories status for inclusion and exclusion. */
var DiscoveryGithubReposSettingsReposStatus;
(function (DiscoveryGithubReposSettingsReposStatus) {
    DiscoveryGithubReposSettingsReposStatus["All"] = "all";
    DiscoveryGithubReposSettingsReposStatus["Exclude"] = "exclude";
    DiscoveryGithubReposSettingsReposStatus["Include"] = "include";
})(DiscoveryGithubReposSettingsReposStatus = exports.DiscoveryGithubReposSettingsReposStatus || (exports.DiscoveryGithubReposSettingsReposStatus = {}));
/** Enum for discovery run status. */
var DiscoveryRunStatus;
(function (DiscoveryRunStatus) {
    DiscoveryRunStatus["Failed"] = "failed";
    DiscoveryRunStatus["Running"] = "running";
    DiscoveryRunStatus["Started"] = "started";
    DiscoveryRunStatus["Success"] = "success";
})(DiscoveryRunStatus = exports.DiscoveryRunStatus || (exports.DiscoveryRunStatus = {}));
/** Type of DNS record. */
var DnsRecordType;
(function (DnsRecordType) {
    DnsRecordType["Cname"] = "cname";
    DnsRecordType["Txt"] = "txt";
})(DnsRecordType = exports.DnsRecordType || (exports.DnsRecordType = {}));
/** Status of the identity. */
var DomainVerificationStatusValue;
(function (DomainVerificationStatusValue) {
    DomainVerificationStatusValue["Failed"] = "failed";
    DomainVerificationStatusValue["NotStarted"] = "not_started";
    DomainVerificationStatusValue["Pending"] = "pending";
    DomainVerificationStatusValue["Success"] = "success";
    DomainVerificationStatusValue["TemporaryFailure"] = "temporary_failure";
})(DomainVerificationStatusValue = exports.DomainVerificationStatusValue || (exports.DomainVerificationStatusValue = {}));
/** Type defines the type of the duration. */
var DurationType;
(function (DurationType) {
    DurationType["Day"] = "day";
    DurationType["Hour"] = "hour";
    DurationType["Minute"] = "minute";
    DurationType["Month"] = "month";
    DurationType["OneTime"] = "one_time";
    DurationType["Year"] = "year";
})(DurationType = exports.DurationType || (exports.DurationType = {}));
/** Type of DevRev object for which the vista is applicable. */
var DynamicVistaFilterType;
(function (DynamicVistaFilterType) {
    DynamicVistaFilterType["Conversations"] = "conversations";
    DynamicVistaFilterType["Parts"] = "parts";
    DynamicVistaFilterType["RevOrgs"] = "rev_orgs";
    DynamicVistaFilterType["Works"] = "works";
})(DynamicVistaFilterType = exports.DynamicVistaFilterType || (exports.DynamicVistaFilterType = {}));
/**
 * Scope defines whether the entitlement is at org level or at each user
 * level. Knowing this will help on enforcing them for the given SKU at
 * rev, or at rev user level.
 */
var EntitlementScope;
(function (EntitlementScope) {
    EntitlementScope["Org"] = "org";
    EntitlementScope["User"] = "user";
})(EntitlementScope = exports.EntitlementScope || (exports.EntitlementScope = {}));
var ErrorBadRequestType;
(function (ErrorBadRequestType) {
    ErrorBadRequestType["BadRequest"] = "bad_request";
    ErrorBadRequestType["MissingRequiredField"] = "missing_required_field";
    ErrorBadRequestType["ParseError"] = "parse_error";
})(ErrorBadRequestType = exports.ErrorBadRequestType || (exports.ErrorBadRequestType = {}));
var ErrorConflictType;
(function (ErrorConflictType) {
    ErrorConflictType["Conflict"] = "conflict";
})(ErrorConflictType = exports.ErrorConflictType || (exports.ErrorConflictType = {}));
var ErrorForbiddenType;
(function (ErrorForbiddenType) {
    ErrorForbiddenType["Forbidden"] = "forbidden";
})(ErrorForbiddenType = exports.ErrorForbiddenType || (exports.ErrorForbiddenType = {}));
var ErrorInternalServerErrorType;
(function (ErrorInternalServerErrorType) {
    ErrorInternalServerErrorType["InternalError"] = "internal_error";
})(ErrorInternalServerErrorType = exports.ErrorInternalServerErrorType || (exports.ErrorInternalServerErrorType = {}));
var ErrorNotFoundType;
(function (ErrorNotFoundType) {
    ErrorNotFoundType["NotFound"] = "not_found";
})(ErrorNotFoundType = exports.ErrorNotFoundType || (exports.ErrorNotFoundType = {}));
var ErrorServiceUnavailableType;
(function (ErrorServiceUnavailableType) {
    ErrorServiceUnavailableType["ServiceUnavailable"] = "service_unavailable";
})(ErrorServiceUnavailableType = exports.ErrorServiceUnavailableType || (exports.ErrorServiceUnavailableType = {}));
var ErrorTooManyRequestsType;
(function (ErrorTooManyRequestsType) {
    ErrorTooManyRequestsType["TooManyRequests"] = "too_many_requests";
})(ErrorTooManyRequestsType = exports.ErrorTooManyRequestsType || (exports.ErrorTooManyRequestsType = {}));
var ErrorUnauthorizedType;
(function (ErrorUnauthorizedType) {
    ErrorUnauthorizedType["Unauthenticated"] = "unauthenticated";
})(ErrorUnauthorizedType = exports.ErrorUnauthorizedType || (exports.ErrorUnauthorizedType = {}));
/**
 * Status of the event source. Disabled event sources return NotFound
 * error on triggering.
 */
var EventSourceStatus;
(function (EventSourceStatus) {
    EventSourceStatus["Active"] = "active";
    EventSourceStatus["Blocked"] = "blocked";
    EventSourceStatus["Paused"] = "paused";
})(EventSourceStatus = exports.EventSourceStatus || (exports.EventSourceStatus = {}));
/** State of the user in the external source. */
var ExternalIdentityState;
(function (ExternalIdentityState) {
    ExternalIdentityState["Active"] = "active";
    ExternalIdentityState["Deleted"] = "deleted";
    ExternalIdentityState["Inactive"] = "inactive";
})(ExternalIdentityState = exports.ExternalIdentityState || (exports.ExternalIdentityState = {}));
/** The HTTP Operations that can be assigned to a Feature's API Operation. */
var FeatureApiOperationHttpOperation;
(function (FeatureApiOperationHttpOperation) {
    FeatureApiOperationHttpOperation["Connect"] = "connect";
    FeatureApiOperationHttpOperation["Delete"] = "delete";
    FeatureApiOperationHttpOperation["Get"] = "get";
    FeatureApiOperationHttpOperation["Head"] = "head";
    FeatureApiOperationHttpOperation["Options"] = "options";
    FeatureApiOperationHttpOperation["Patch"] = "patch";
    FeatureApiOperationHttpOperation["Post"] = "post";
    FeatureApiOperationHttpOperation["Put"] = "put";
    FeatureApiOperationHttpOperation["Trace"] = "trace";
    FeatureApiOperationHttpOperation["Unknown"] = "unknown";
})(FeatureApiOperationHttpOperation = exports.FeatureApiOperationHttpOperation || (exports.FeatureApiOperationHttpOperation = {}));
var FieldValueType;
(function (FieldValueType) {
    FieldValueType["Bool"] = "bool";
    FieldValueType["BoolList"] = "bool_list";
    FieldValueType["Date"] = "date";
    FieldValueType["DateList"] = "date_list";
    FieldValueType["DateTime"] = "date_time";
    FieldValueType["DateTimeList"] = "date_time_list";
    FieldValueType["Double"] = "double";
    FieldValueType["DoubleList"] = "double_list";
    FieldValueType["Id"] = "id";
    FieldValueType["IdList"] = "id_list";
    FieldValueType["Int"] = "int";
    FieldValueType["IntList"] = "int_list";
    FieldValueType["String"] = "string";
    FieldValueType["StringList"] = "string_list";
})(FieldValueType = exports.FieldValueType || (exports.FieldValueType = {}));
/** Type of the input. */
var FlowGlobalInputType;
(function (FlowGlobalInputType) {
    FlowGlobalInputType["Bool"] = "bool";
    FlowGlobalInputType["EmailAddress"] = "email_address";
    FlowGlobalInputType["Enum"] = "enum";
    FlowGlobalInputType["EnumList"] = "enum_list";
    FlowGlobalInputType["Float"] = "float";
    FlowGlobalInputType["FloatList"] = "float_list";
    FlowGlobalInputType["Integer"] = "integer";
    FlowGlobalInputType["IntegerList"] = "integer_list";
    FlowGlobalInputType["Json"] = "json";
    FlowGlobalInputType["KeyValues"] = "key_values";
    FlowGlobalInputType["Part"] = "part";
    FlowGlobalInputType["String"] = "string";
    FlowGlobalInputType["StringList"] = "string_list";
    FlowGlobalInputType["User"] = "user";
})(FlowGlobalInputType = exports.FlowGlobalInputType || (exports.FlowGlobalInputType = {}));
/** Deployment status of the flow. */
var FlowStatus;
(function (FlowStatus) {
    FlowStatus["Active"] = "active";
    FlowStatus["Draft"] = "draft";
    FlowStatus["Error"] = "error";
    FlowStatus["Inactive"] = "inactive";
})(FlowStatus = exports.FlowStatus || (exports.FlowStatus = {}));
/** Github flow event transition. */
var GithubFlowEventTransition;
(function (GithubFlowEventTransition) {
    GithubFlowEventTransition["NewBranchTransition"] = "new_branch_transition";
    GithubFlowEventTransition["NewBranchWorkCreateTransition"] = "new_branch_work_create_transition";
    GithubFlowEventTransition["NewCommitTransition"] = "new_commit_transition";
    GithubFlowEventTransition["PrMergedInprogressToClosedTransition"] = "pr_merged_inprogress_to_closed_transition";
    GithubFlowEventTransition["PrMergedOpenToClosedTransition"] = "pr_merged_open_to_closed_transition";
    GithubFlowEventTransition["PrOpenedTransition"] = "pr_opened_transition";
})(GithubFlowEventTransition = exports.GithubFlowEventTransition || (exports.GithubFlowEventTransition = {}));
/** The type of input expected from the user. */
var GlobalInputInputType;
(function (GlobalInputInputType) {
    GlobalInputInputType["Bool"] = "bool";
    GlobalInputInputType["EmailAddress"] = "email_address";
    GlobalInputInputType["Enum"] = "enum";
    GlobalInputInputType["EnumList"] = "enum_list";
    GlobalInputInputType["Float"] = "float";
    GlobalInputInputType["FloatList"] = "float_list";
    GlobalInputInputType["Integer"] = "integer";
    GlobalInputInputType["IntegerList"] = "integer_list";
    GlobalInputInputType["Json"] = "json";
    GlobalInputInputType["KeyValues"] = "key_values";
    GlobalInputInputType["Part"] = "part";
    GlobalInputInputType["String"] = "string";
    GlobalInputInputType["StringList"] = "string_list";
    GlobalInputInputType["User"] = "user";
})(GlobalInputInputType = exports.GlobalInputInputType || (exports.GlobalInputInputType = {}));
/** Types of the members allowed in the group. */
var GroupAllowedMemberType;
(function (GroupAllowedMemberType) {
    GroupAllowedMemberType["DevUser"] = "dev_user";
    GroupAllowedMemberType["RevUser"] = "rev_user";
    GroupAllowedMemberType["SysUser"] = "sys_user";
})(GroupAllowedMemberType = exports.GroupAllowedMemberType || (exports.GroupAllowedMemberType = {}));
/** Type of DevRev object for which the grouped vista is applicable. */
var GroupedVistaFilterType;
(function (GroupedVistaFilterType) {
    GroupedVistaFilterType["Works"] = "works";
})(GroupedVistaFilterType = exports.GroupedVistaFilterType || (exports.GroupedVistaFilterType = {}));
/** Denotes the use case of the grouped vista. */
var GroupedVistaFlavor;
(function (GroupedVistaFlavor) {
    GroupedVistaFlavor["Nnl"] = "nnl";
    GroupedVistaFlavor["SprintBoard"] = "sprint_board";
})(GroupedVistaFlavor = exports.GroupedVistaFlavor || (exports.GroupedVistaFlavor = {}));
var InsightType;
(function (InsightType) {
    InsightType["RealTimeInsight"] = "real_time_insight";
    InsightType["WindowBasedInsight"] = "window_based_insight";
})(InsightType = exports.InsightType || (exports.InsightType = {}));
var InsightValueType;
(function (InsightValueType) {
    InsightValueType["RealTimeInsightValue"] = "real_time_insight_value";
    InsightValueType["WindowBasedInsightValue"] = "window_based_insight_value";
})(InsightValueType = exports.InsightValueType || (exports.InsightValueType = {}));
/** Format in which content is defined. */
var InstructionsFormat;
(function (InstructionsFormat) {
    InstructionsFormat["Markdown"] = "markdown";
})(InstructionsFormat = exports.InstructionsFormat || (exports.InstructionsFormat = {}));
/** Status of the invoice. */
var InvoiceStatus;
(function (InvoiceStatus) {
    InvoiceStatus["Open"] = "open";
    InvoiceStatus["Paid"] = "paid";
    InvoiceStatus["Uncollectible"] = "uncollectible";
    InvoiceStatus["Void"] = "void";
})(InvoiceStatus = exports.InvoiceStatus || (exports.InvoiceStatus = {}));
/** Collection method type of the invoice. */
var InvoicesCollectionMethod;
(function (InvoicesCollectionMethod) {
    InvoicesCollectionMethod["ChargeAutomatically"] = "charge_automatically";
    InvoicesCollectionMethod["SendInvoice"] = "send_invoice";
})(InvoicesCollectionMethod = exports.InvoicesCollectionMethod || (exports.InvoicesCollectionMethod = {}));
/** Priority of the work based upon impact and criticality. */
var IssuePriority;
(function (IssuePriority) {
    IssuePriority["P0"] = "p0";
    IssuePriority["P1"] = "p1";
    IssuePriority["P2"] = "p2";
    IssuePriority["P3"] = "p3";
})(IssuePriority = exports.IssuePriority || (exports.IssuePriority = {}));
/** Scope of keyring. */
var KeyringScope;
(function (KeyringScope) {
    KeyringScope["Org"] = "org";
    KeyringScope["User"] = "user";
})(KeyringScope = exports.KeyringScope || (exports.KeyringScope = {}));
/** keyring status. */
var KeyringStatus;
(function (KeyringStatus) {
    KeyringStatus["Active"] = "active";
    KeyringStatus["CollectionPending"] = "collection_pending";
    KeyringStatus["Error"] = "error";
    KeyringStatus["SelectOrg"] = "select_org";
    KeyringStatus["UserActionRequired"] = "user_action_required";
    KeyringStatus["Warning"] = "warning";
})(KeyringStatus = exports.KeyringStatus || (exports.KeyringStatus = {}));
/** Keyring type defines the external system authentication method. */
var KeyringType;
(function (KeyringType) {
    KeyringType["Aws"] = "aws";
    KeyringType["Bitbucket"] = "bitbucket";
    KeyringType["Cci"] = "cci";
    KeyringType["Clearbit"] = "clearbit";
    KeyringType["Datadog"] = "datadog";
    KeyringType["DevrevPat"] = "devrev_pat";
    KeyringType["Discord"] = "discord";
    KeyringType["DomainVerification"] = "domain_verification";
    KeyringType["FlowSecret"] = "flow_secret";
    KeyringType["Gcp"] = "gcp";
    KeyringType["GhApp"] = "gh_app";
    KeyringType["GhOauth"] = "gh_oauth";
    KeyringType["GhPat"] = "gh_pat";
    KeyringType["Google"] = "google";
    KeyringType["Intercom"] = "intercom";
    KeyringType["Jira"] = "jira";
    KeyringType["Kubernetes"] = "kubernetes";
    KeyringType["LinearOauth"] = "linear_oauth";
    KeyringType["LinearPat"] = "linear_pat";
    KeyringType["SalesforceSales"] = "salesforce_sales";
    KeyringType["SalesforceService"] = "salesforce_service";
    KeyringType["Sendgrid"] = "sendgrid";
    KeyringType["ServiceAccounts"] = "service_accounts";
    KeyringType["Servicenow"] = "servicenow";
    KeyringType["Slack"] = "slack";
    KeyringType["Stripe"] = "stripe";
    KeyringType["Zendesk"] = "zendesk";
})(KeyringType = exports.KeyringType || (exports.KeyringType = {}));
var LinkEndpointType;
(function (LinkEndpointType) {
    LinkEndpointType["Artifact"] = "artifact";
    LinkEndpointType["Capability"] = "capability";
    LinkEndpointType["Conversation"] = "conversation";
    LinkEndpointType["CustomPart"] = "custom_part";
    LinkEndpointType["CustomWork"] = "custom_work";
    LinkEndpointType["Enhancement"] = "enhancement";
    LinkEndpointType["Feature"] = "feature";
    LinkEndpointType["Issue"] = "issue";
    LinkEndpointType["Linkable"] = "linkable";
    LinkEndpointType["Product"] = "product";
    LinkEndpointType["Runnable"] = "runnable";
    LinkEndpointType["Task"] = "task";
    LinkEndpointType["Ticket"] = "ticket";
})(LinkEndpointType = exports.LinkEndpointType || (exports.LinkEndpointType = {}));
/** Type of link used to define the relationship. */
var LinkType;
(function (LinkType) {
    LinkType["DevelopedWith"] = "developed_with";
    LinkType["Imports"] = "imports";
    LinkType["IsDependentOn"] = "is_dependent_on";
    LinkType["IsDuplicateOf"] = "is_duplicate_of";
    LinkType["IsParentOf"] = "is_parent_of";
    LinkType["IsPartOf"] = "is_part_of";
    LinkType["IsRelatedTo"] = "is_related_to";
    LinkType["Serves"] = "serves";
})(LinkType = exports.LinkType || (exports.LinkType = {}));
/** The kind of linkable. */
var LinkableKind;
(function (LinkableKind) {
    LinkableKind["Component"] = "component";
    LinkableKind["Library"] = "library";
})(LinkableKind = exports.LinkableKind || (exports.LinkableKind = {}));
/**
 * The direction of link, which can either be outbound such that the
 * object is the source of the link, otherwise inbound where the object is
 * the target of the link.
 */
var LinksDirection;
(function (LinksDirection) {
    LinksDirection["IsSource"] = "is_source";
    LinksDirection["IsTarget"] = "is_target";
})(LinksDirection = exports.LinksDirection || (exports.LinksDirection = {}));
/**
 * The iteration mode to use. If "after", then entries after the provided
 * cursor will be returned, or if no cursor is provided, then from the
 * beginning. If "before", then entries before the provided cursor will be
 * returned, or if no cursor is provided, then from the end. Entries will
 * always be returned in the specified sort-by order.
 */
var ListMode;
(function (ListMode) {
    ListMode["After"] = "after";
    ListMode["Before"] = "before";
})(ListMode = exports.ListMode || (exports.ListMode = {}));
/** Marketplace item type. */
var MarketplaceItemItemType;
(function (MarketplaceItemItemType) {
    MarketplaceItemItemType["App"] = "app";
    MarketplaceItemItemType["Flow"] = "flow";
    MarketplaceItemItemType["Snapin"] = "snapin";
})(MarketplaceItemItemType = exports.MarketplaceItemItemType || (exports.MarketplaceItemItemType = {}));
/** State of the marketplace item. */
var MarketplaceItemState;
(function (MarketplaceItemState) {
    MarketplaceItemState["Draft"] = "draft";
    MarketplaceItemState["EndOfLife"] = "end_of_life";
    MarketplaceItemState["EndOfSale"] = "end_of_sale";
    MarketplaceItemState["InReview"] = "in_review";
    MarketplaceItemState["Published"] = "published";
})(MarketplaceItemState = exports.MarketplaceItemState || (exports.MarketplaceItemState = {}));
var MarketplaceItemType;
(function (MarketplaceItemType) {
    MarketplaceItemType["App"] = "app";
    MarketplaceItemType["Flow"] = "flow";
    MarketplaceItemType["Snapin"] = "snapin";
})(MarketplaceItemType = exports.MarketplaceItemType || (exports.MarketplaceItemType = {}));
/** Marketplace type. */
var MarketplaceType;
(function (MarketplaceType) {
    MarketplaceType["Organization"] = "organization";
    MarketplaceType["Universal"] = "universal";
})(MarketplaceType = exports.MarketplaceType || (exports.MarketplaceType = {}));
/**
 * The type of the metric, differentiating time-based metrics, which
 * actually track real time from other metrics tracking general values.
 */
var MetricDefinitionType;
(function (MetricDefinitionType) {
    MetricDefinitionType["Time"] = "time";
    MetricDefinitionType["Value"] = "value";
})(MetricDefinitionType = exports.MetricDefinitionType || (exports.MetricDefinitionType = {}));
/** Object type on which the microflow is defined on. */
var MicroflowDefinitionDefinedOnObjectType;
(function (MicroflowDefinitionDefinedOnObjectType) {
    MicroflowDefinitionDefinedOnObjectType["Part"] = "part";
    MicroflowDefinitionDefinedOnObjectType["Work"] = "work";
})(MicroflowDefinitionDefinedOnObjectType = exports.MicroflowDefinitionDefinedOnObjectType || (exports.MicroflowDefinitionDefinedOnObjectType = {}));
/** Publish status of the microflow. */
var MicroflowDefinitionPublishStatus;
(function (MicroflowDefinitionPublishStatus) {
    MicroflowDefinitionPublishStatus["Active"] = "active";
    MicroflowDefinitionPublishStatus["Deprecated"] = "deprecated";
    MicroflowDefinitionPublishStatus["Draft"] = "draft";
})(MicroflowDefinitionPublishStatus = exports.MicroflowDefinitionPublishStatus || (exports.MicroflowDefinitionPublishStatus = {}));
var NewsCreateRequestStatusValue;
(function (NewsCreateRequestStatusValue) {
    NewsCreateRequestStatusValue["Archived"] = "archived";
    NewsCreateRequestStatusValue["Draft"] = "draft";
    NewsCreateRequestStatusValue["Published"] = "published";
})(NewsCreateRequestStatusValue = exports.NewsCreateRequestStatusValue || (exports.NewsCreateRequestStatusValue = {}));
/** Notification parent types. */
var NotificationParentType;
(function (NotificationParentType) {
    NotificationParentType["Conversation"] = "conversation";
    NotificationParentType["Issue"] = "issue";
    NotificationParentType["Part"] = "part";
    NotificationParentType["RevOrg"] = "rev_org";
    NotificationParentType["RevUser"] = "rev_user";
    NotificationParentType["Ticket"] = "ticket";
})(NotificationParentType = exports.NotificationParentType || (exports.NotificationParentType = {}));
/** Email notifications. */
var NotificationPreferencesGroupEmailNotifications;
(function (NotificationPreferencesGroupEmailNotifications) {
    NotificationPreferencesGroupEmailNotifications["All"] = "all";
    NotificationPreferencesGroupEmailNotifications["Important"] = "important";
    NotificationPreferencesGroupEmailNotifications["Nothing"] = "nothing";
})(NotificationPreferencesGroupEmailNotifications = exports.NotificationPreferencesGroupEmailNotifications || (exports.NotificationPreferencesGroupEmailNotifications = {}));
/** Priority of the notification. */
var NotificationPriority;
(function (NotificationPriority) {
    NotificationPriority["High"] = "high";
    NotificationPriority["Low"] = "low";
    NotificationPriority["Medium"] = "medium";
})(NotificationPriority = exports.NotificationPriority || (exports.NotificationPriority = {}));
/** The state of the notification. */
var NotificationState;
(function (NotificationState) {
    NotificationState["Archived"] = "archived";
    NotificationState["Read"] = "read";
    NotificationState["Unread"] = "unread";
})(NotificationState = exports.NotificationState || (exports.NotificationState = {}));
var NotificationType;
(function (NotificationType) {
    NotificationType["ConversationCreatedNotification"] = "conversation_created_notification";
    NotificationType["ConversationInactivityReminder"] = "conversation_inactivity_reminder";
    NotificationType["DevrevReminder"] = "devrev_reminder";
    NotificationType["ObjectAssignmentNotification"] = "object_assignment_notification";
    NotificationType["PrReviewReminder"] = "pr_review_reminder";
    NotificationType["UserMentionedNotification"] = "user_mentioned_notification";
    NotificationType["UserParticipationNotification"] = "user_participation_notification";
    NotificationType["VistaSharedNotification"] = "vista_shared_notification";
})(NotificationType = exports.NotificationType || (exports.NotificationType = {}));
/** Type of this member. */
var ObjectMemberV1MemberType;
(function (ObjectMemberV1MemberType) {
    ObjectMemberV1MemberType["Group"] = "group";
    ObjectMemberV1MemberType["User"] = "user";
})(ObjectMemberV1MemberType = exports.ObjectMemberV1MemberType || (exports.ObjectMemberV1MemberType = {}));
var ObjectTypeProto;
(function (ObjectTypeProto) {
    ObjectTypeProto["Account"] = "account";
    ObjectTypeProto["AddonRule"] = "addon_rule";
    ObjectTypeProto["Alert"] = "alert";
    ObjectTypeProto["ApiOperation"] = "api_operation";
    ObjectTypeProto["ApiParameter"] = "api_parameter";
    ObjectTypeProto["AppFragment"] = "app_fragment";
    ObjectTypeProto["Article"] = "article";
    ObjectTypeProto["Artifact"] = "artifact";
    ObjectTypeProto["Auth0User"] = "auth0_user";
    ObjectTypeProto["Automation"] = "automation";
    ObjectTypeProto["Bug"] = "bug";
    ObjectTypeProto["Capability"] = "capability";
    ObjectTypeProto["ChangeEvent"] = "change_event";
    ObjectTypeProto["Code"] = "code";
    ObjectTypeProto["Collection"] = "collection";
    ObjectTypeProto["Command"] = "command";
    ObjectTypeProto["Comment"] = "comment";
    ObjectTypeProto["CommerceDevoConfig"] = "commerce_devo_config";
    ObjectTypeProto["CommerceRevoConfig"] = "commerce_revo_config";
    ObjectTypeProto["Communication"] = "communication";
    ObjectTypeProto["Component"] = "component";
    ObjectTypeProto["ConditionalRole"] = "conditional_role";
    ObjectTypeProto["Conversation"] = "conversation";
    ObjectTypeProto["ConversationCreated"] = "conversation_created";
    ObjectTypeProto["ConversationInactivityReminder"] = "conversation_inactivity_reminder";
    ObjectTypeProto["Credit"] = "credit";
    ObjectTypeProto["CreditCoupon"] = "credit_coupon";
    ObjectTypeProto["CustomObject"] = "custom_object";
    ObjectTypeProto["CustomPart"] = "custom_part";
    ObjectTypeProto["CustomSchemaFragment"] = "custom_schema_fragment";
    ObjectTypeProto["CustomStage"] = "custom_stage";
    ObjectTypeProto["CustomState"] = "custom_state";
    ObjectTypeProto["CustomType"] = "custom_type";
    ObjectTypeProto["CustomTypeFragment"] = "custom_type_fragment";
    ObjectTypeProto["CustomWork"] = "custom_work";
    ObjectTypeProto["DevOrg"] = "dev_org";
    ObjectTypeProto["DevUser"] = "dev_user";
    ObjectTypeProto["DevrevProfile"] = "devrev_profile";
    ObjectTypeProto["DevrevReminder"] = "devrev_reminder";
    ObjectTypeProto["DevuInvite"] = "devu_invite";
    ObjectTypeProto["DiscoveryGitCommit"] = "discovery_git_commit";
    ObjectTypeProto["DiscoveryGitEvent"] = "discovery_git_event";
    ObjectTypeProto["DiscoveryProfile"] = "discovery_profile";
    ObjectTypeProto["DiscoveryRun"] = "discovery_run";
    ObjectTypeProto["DiscoverySettings"] = "discovery_settings";
    ObjectTypeProto["Emoji"] = "emoji";
    ObjectTypeProto["Enhancement"] = "enhancement";
    ObjectTypeProto["EventSource"] = "event_source";
    ObjectTypeProto["ExternalSyncUnit"] = "external_sync_unit";
    ObjectTypeProto["ExternalSystem"] = "external_system";
    ObjectTypeProto["ExternalSystemType"] = "external_system_type";
    ObjectTypeProto["Feature"] = "feature";
    ObjectTypeProto["FeaturePin"] = "feature_pin";
    ObjectTypeProto["Flow"] = "flow";
    ObjectTypeProto["FunctionDefinition"] = "function_definition";
    ObjectTypeProto["Group"] = "group";
    ObjectTypeProto["GroupMember"] = "group_member";
    ObjectTypeProto["Incident"] = "incident";
    ObjectTypeProto["Invalid"] = "invalid";
    ObjectTypeProto["Invoice"] = "invoice";
    ObjectTypeProto["Issue"] = "issue";
    ObjectTypeProto["Job"] = "job";
    ObjectTypeProto["Keyring"] = "keyring";
    ObjectTypeProto["Link"] = "link";
    ObjectTypeProto["Linkable"] = "linkable";
    ObjectTypeProto["LinkablePin"] = "linkable_pin";
    ObjectTypeProto["Marketplace"] = "marketplace";
    ObjectTypeProto["MarketplaceCategory"] = "marketplace_category";
    ObjectTypeProto["MarketplaceItem"] = "marketplace_item";
    ObjectTypeProto["Meeting"] = "meeting";
    ObjectTypeProto["MetricDefinition"] = "metric_definition";
    ObjectTypeProto["MetricTracker"] = "metric_tracker";
    ObjectTypeProto["MicroflowDefinition"] = "microflow_definition";
    ObjectTypeProto["Microservice"] = "microservice";
    ObjectTypeProto["Namespace"] = "namespace";
    ObjectTypeProto["News"] = "news";
    ObjectTypeProto["ObjectAssignment"] = "object_assignment";
    ObjectTypeProto["ObjectMember"] = "object_member";
    ObjectTypeProto["OneTimeLineItem"] = "one_time_line_item";
    ObjectTypeProto["Opportunity"] = "opportunity";
    ObjectTypeProto["OrgPreferences"] = "org_preferences";
    ObjectTypeProto["PartPin"] = "part_pin";
    ObjectTypeProto["PaymentMethod"] = "payment_method";
    ObjectTypeProto["PrReviewReminder"] = "pr_review_reminder";
    ObjectTypeProto["Pricing"] = "pricing";
    ObjectTypeProto["Problem"] = "problem";
    ObjectTypeProto["Product"] = "product";
    ObjectTypeProto["Project"] = "project";
    ObjectTypeProto["PushDevice"] = "push_device";
    ObjectTypeProto["RealTimeInsight"] = "real_time_insight";
    ObjectTypeProto["RealTimeInsightValue"] = "real_time_insight_value";
    ObjectTypeProto["RecurringLineItem"] = "recurring_line_item";
    ObjectTypeProto["Request"] = "request";
    ObjectTypeProto["RevOrg"] = "rev_org";
    ObjectTypeProto["RevUser"] = "rev_user";
    ObjectTypeProto["Reward"] = "reward";
    ObjectTypeProto["RewardUsageHistory"] = "reward_usage_history";
    ObjectTypeProto["Role"] = "role";
    ObjectTypeProto["Room"] = "room";
    ObjectTypeProto["Runnable"] = "runnable";
    ObjectTypeProto["RunnablePin"] = "runnable_pin";
    ObjectTypeProto["Schedule"] = "schedule";
    ObjectTypeProto["ScheduleFragment"] = "schedule_fragment";
    ObjectTypeProto["Schema"] = "schema";
    ObjectTypeProto["ServicePlan"] = "service_plan";
    ObjectTypeProto["Settings"] = "settings";
    ObjectTypeProto["Sku"] = "sku";
    ObjectTypeProto["Sla"] = "sla";
    ObjectTypeProto["SlaPolicy"] = "sla_policy";
    ObjectTypeProto["SlaTracker"] = "sla_tracker";
    ObjectTypeProto["SnapComponent"] = "snap_component";
    ObjectTypeProto["SnapIn"] = "snap_in";
    ObjectTypeProto["SnapInFunction"] = "snap_in_function";
    ObjectTypeProto["SnapInPackage"] = "snap_in_package";
    ObjectTypeProto["SnapInVersion"] = "snap_in_version";
    ObjectTypeProto["SnapKitAction"] = "snap_kit_action";
    ObjectTypeProto["StageDiagram"] = "stage_diagram";
    ObjectTypeProto["StockSchemaFragment"] = "stock_schema_fragment";
    ObjectTypeProto["SubscriptionRule"] = "subscription_rule";
    ObjectTypeProto["Survey"] = "survey";
    ObjectTypeProto["SvcAcc"] = "svc_acc";
    ObjectTypeProto["SyncHistory"] = "sync_history";
    ObjectTypeProto["SyncUnit"] = "sync_unit";
    ObjectTypeProto["SysUser"] = "sys_user";
    ObjectTypeProto["Tag"] = "tag";
    ObjectTypeProto["Task"] = "task";
    ObjectTypeProto["TenantFragment"] = "tenant_fragment";
    ObjectTypeProto["Ticket"] = "ticket";
    ObjectTypeProto["TimelineEvent"] = "timeline_event";
    ObjectTypeProto["Token"] = "token";
    ObjectTypeProto["Uom"] = "uom";
    ObjectTypeProto["UserMention"] = "user_mention";
    ObjectTypeProto["UserParticipation"] = "user_participation";
    ObjectTypeProto["UserPreferences"] = "user_preferences";
    ObjectTypeProto["Vista"] = "vista";
    ObjectTypeProto["VistaShared"] = "vista_shared";
    ObjectTypeProto["Webhook"] = "webhook";
    ObjectTypeProto["WebhookEvent"] = "webhook_event";
    ObjectTypeProto["WindowBasedInsight"] = "window_based_insight";
    ObjectTypeProto["WindowBasedInsightValue"] = "window_based_insight_value";
})(ObjectTypeProto = exports.ObjectTypeProto || (exports.ObjectTypeProto = {}));
var OperationType;
(function (OperationType) {
    OperationType["Create"] = "create";
    OperationType["Delete"] = "delete";
    OperationType["Execute"] = "execute";
    OperationType["List"] = "list";
    OperationType["Read"] = "read";
    OperationType["Update"] = "update";
})(OperationType = exports.OperationType || (exports.OperationType = {}));
/** The environment of the Org. Defaults to 'production' if not specified. */
var OrgEnvironment;
(function (OrgEnvironment) {
    OrgEnvironment["Production"] = "production";
    OrgEnvironment["Staging"] = "staging";
    OrgEnvironment["Test"] = "test";
})(OrgEnvironment = exports.OrgEnvironment || (exports.OrgEnvironment = {}));
/** State of the Organization. */
var OrgState;
(function (OrgState) {
    OrgState["Active"] = "active";
    OrgState["Inactive"] = "inactive";
    OrgState["Locked"] = "locked";
})(OrgState = exports.OrgState || (exports.OrgState = {}));
var OrgType;
(function (OrgType) {
    OrgType["Account"] = "account";
    OrgType["DevOrg"] = "dev_org";
    OrgType["RevOrg"] = "rev_org";
})(OrgType = exports.OrgType || (exports.OrgType = {}));
/** Designated category of the part. */
var PartCategory;
(function (PartCategory) {
    PartCategory["DevPart"] = "dev_part";
    PartCategory["General"] = "general";
    PartCategory["RevPart"] = "rev_part";
})(PartCategory = exports.PartCategory || (exports.PartCategory = {}));
/** Methods the product can be delivered as. */
var PartDeliveredAs;
(function (PartDeliveredAs) {
    PartDeliveredAs["Goods"] = "goods";
    PartDeliveredAs["Service"] = "service";
    PartDeliveredAs["Software"] = "software";
})(PartDeliveredAs = exports.PartDeliveredAs || (exports.PartDeliveredAs = {}));
var PartType;
(function (PartType) {
    PartType["Capability"] = "capability";
    PartType["Component"] = "component";
    PartType["CustomPart"] = "custom_part";
    PartType["Enhancement"] = "enhancement";
    PartType["Feature"] = "feature";
    PartType["Linkable"] = "linkable";
    PartType["Microservice"] = "microservice";
    PartType["Product"] = "product";
    PartType["Runnable"] = "runnable";
})(PartType = exports.PartType || (exports.PartType = {}));
/** Name of the source used for parts discovery. */
var PartsDiscoverySourceName;
(function (PartsDiscoverySourceName) {
    PartsDiscoverySourceName["AwsApiGw"] = "aws_api_gw";
    PartsDiscoverySourceName["CustomRoutes"] = "custom_routes";
    PartsDiscoverySourceName["DataDog"] = "data_dog";
    PartsDiscoverySourceName["Git"] = "git";
    PartsDiscoverySourceName["Kubernetes"] = "kubernetes";
})(PartsDiscoverySourceName = exports.PartsDiscoverySourceName || (exports.PartsDiscoverySourceName = {}));
var PartsMutateRequestType;
(function (PartsMutateRequestType) {
    PartsMutateRequestType["Merge"] = "merge";
    PartsMutateRequestType["Promote"] = "promote";
})(PartsMutateRequestType = exports.PartsMutateRequestType || (exports.PartsMutateRequestType = {}));
/** Account holder type. */
var PaymentMethodBankAccountAccountHolderType;
(function (PaymentMethodBankAccountAccountHolderType) {
    PaymentMethodBankAccountAccountHolderType["Company"] = "company";
    PaymentMethodBankAccountAccountHolderType["Individual"] = "individual";
})(PaymentMethodBankAccountAccountHolderType = exports.PaymentMethodBankAccountAccountHolderType || (exports.PaymentMethodBankAccountAccountHolderType = {}));
/** Account type. */
var PaymentMethodBankAccountAccountType;
(function (PaymentMethodBankAccountAccountType) {
    PaymentMethodBankAccountAccountType["Checking"] = "checking";
    PaymentMethodBankAccountAccountType["Savings"] = "savings";
})(PaymentMethodBankAccountAccountType = exports.PaymentMethodBankAccountAccountType || (exports.PaymentMethodBankAccountAccountType = {}));
/** Fund type of the card. */
var PaymentMethodCardFundType;
(function (PaymentMethodCardFundType) {
    PaymentMethodCardFundType["Credit"] = "credit";
    PaymentMethodCardFundType["Debit"] = "debit";
    PaymentMethodCardFundType["Prepaid"] = "prepaid";
})(PaymentMethodCardFundType = exports.PaymentMethodCardFundType || (exports.PaymentMethodCardFundType = {}));
var PaymentMethodType;
(function (PaymentMethodType) {
    PaymentMethodType["PaymentMethodBankAccount"] = "payment_method_bank_account";
    PaymentMethodType["PaymentMethodCard"] = "payment_method_card";
})(PaymentMethodType = exports.PaymentMethodType || (exports.PaymentMethodType = {}));
var PreferencesType;
(function (PreferencesType) {
    PreferencesType["OrgPreferences"] = "org_preferences";
    PreferencesType["UserPreferences"] = "user_preferences";
})(PreferencesType = exports.PreferencesType || (exports.PreferencesType = {}));
/** Billing frequency of the SKU. */
var PricingBillingCycle;
(function (PricingBillingCycle) {
    PricingBillingCycle["Monthly"] = "monthly";
    PricingBillingCycle["OneTime"] = "one_time";
    PricingBillingCycle["Yearly"] = "yearly";
})(PricingBillingCycle = exports.PricingBillingCycle || (exports.PricingBillingCycle = {}));
/** Product Delivered as. */
var ProductDeliveredAs;
(function (ProductDeliveredAs) {
    ProductDeliveredAs["Goods"] = "goods";
    ProductDeliveredAs["Service"] = "service";
})(ProductDeliveredAs = exports.ProductDeliveredAs || (exports.ProductDeliveredAs = {}));
/** Priority of the work based upon impact and criticality. */
var ProjectPriority;
(function (ProjectPriority) {
    ProjectPriority["P0"] = "p0";
    ProjectPriority["P1"] = "p1";
    ProjectPriority["P2"] = "p2";
    ProjectPriority["P3"] = "p3";
})(ProjectPriority = exports.ProjectPriority || (exports.ProjectPriority = {}));
/** Type of project. */
var ProjectType;
(function (ProjectType) {
    ProjectType["DeliverableBased"] = "deliverable_based";
    ProjectType["TimeBased"] = "time_based";
})(ProjectType = exports.ProjectType || (exports.ProjectType = {}));
/** The type of the push device. */
var PushDeviceType;
(function (PushDeviceType) {
    PushDeviceType["Android"] = "android";
    PushDeviceType["Chrome"] = "chrome";
    PushDeviceType["Ios"] = "ios";
})(PushDeviceType = exports.PushDeviceType || (exports.PushDeviceType = {}));
/** Type of the article resource. */
var ResourceType;
(function (ResourceType) {
    ResourceType["Artifact"] = "artifact";
    ResourceType["Url"] = "url";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
/** The type of the Rev organization. */
var RevOrgType;
(function (RevOrgType) {
    RevOrgType["B2B"] = "b2b";
    RevOrgType["B2C"] = "b2c";
})(RevOrgType = exports.RevOrgType || (exports.RevOrgType = {}));
var RevOrgsBulkRequestEnum;
(function (RevOrgsBulkRequestEnum) {
    RevOrgsBulkRequestEnum["Create"] = "create";
    RevOrgsBulkRequestEnum["PreviewHeaders"] = "preview_headers";
    RevOrgsBulkRequestEnum["PreviewRecords"] = "preview_records";
})(RevOrgsBulkRequestEnum = exports.RevOrgsBulkRequestEnum || (exports.RevOrgsBulkRequestEnum = {}));
/** Type of the user. */
var RevUserUserType;
(function (RevUserUserType) {
    RevUserUserType["Anonymous"] = "anonymous";
    RevUserUserType["Identified"] = "identified";
})(RevUserUserType = exports.RevUserUserType || (exports.RevUserUserType = {}));
var RoomsInformRequestStatusValue;
(function (RoomsInformRequestStatusValue) {
    RoomsInformRequestStatusValue["Joined"] = "joined";
    RoomsInformRequestStatusValue["Left"] = "left";
})(RoomsInformRequestStatusValue = exports.RoomsInformRequestStatusValue || (exports.RoomsInformRequestStatusValue = {}));
/** The kind of runnable. */
var RunnableKind;
(function (RunnableKind) {
    RunnableKind["EcrImage"] = "ecr_image";
    RunnableKind["Lambda"] = "lambda";
    RunnableKind["Microservice"] = "microservice";
    RunnableKind["Service"] = "service";
})(RunnableKind = exports.RunnableKind || (exports.RunnableKind = {}));
/**
 * The status determining mutability. In 'draft' the item can be edited
 * but can't be used, in 'published' it can't be edited, but can be used,
 * and in archived neither is possible.
 */
var ScheduleFragmentStatus;
(function (ScheduleFragmentStatus) {
    ScheduleFragmentStatus["Archived"] = "archived";
    ScheduleFragmentStatus["Draft"] = "draft";
    ScheduleFragmentStatus["Published"] = "published";
})(ScheduleFragmentStatus = exports.ScheduleFragmentStatus || (exports.ScheduleFragmentStatus = {}));
/**
 * The status determining mutability. In 'draft' the item can be edited
 * but can't be used, in 'published' it can't be edited, but can be used,
 * and in archived neither is possible.
 */
var ScheduleStatus;
(function (ScheduleStatus) {
    ScheduleStatus["Archived"] = "archived";
    ScheduleStatus["Draft"] = "draft";
    ScheduleStatus["Published"] = "published";
})(ScheduleStatus = exports.ScheduleStatus || (exports.ScheduleStatus = {}));
var SchemaFieldDescriptorArrayTypeBaseType;
(function (SchemaFieldDescriptorArrayTypeBaseType) {
    SchemaFieldDescriptorArrayTypeBaseType["Bool"] = "bool";
    SchemaFieldDescriptorArrayTypeBaseType["Composite"] = "composite";
    SchemaFieldDescriptorArrayTypeBaseType["Enum"] = "enum";
    SchemaFieldDescriptorArrayTypeBaseType["Id"] = "id";
    SchemaFieldDescriptorArrayTypeBaseType["Int"] = "int";
    SchemaFieldDescriptorArrayTypeBaseType["RichText"] = "rich_text";
    SchemaFieldDescriptorArrayTypeBaseType["Text"] = "text";
    SchemaFieldDescriptorArrayTypeBaseType["Timestamp"] = "timestamp";
    SchemaFieldDescriptorArrayTypeBaseType["Tokens"] = "tokens";
})(SchemaFieldDescriptorArrayTypeBaseType = exports.SchemaFieldDescriptorArrayTypeBaseType || (exports.SchemaFieldDescriptorArrayTypeBaseType = {}));
var SchemaFieldDescriptorFieldType;
(function (SchemaFieldDescriptorFieldType) {
    SchemaFieldDescriptorFieldType["Array"] = "array";
    SchemaFieldDescriptorFieldType["Bool"] = "bool";
    SchemaFieldDescriptorFieldType["Composite"] = "composite";
    SchemaFieldDescriptorFieldType["Enum"] = "enum";
    SchemaFieldDescriptorFieldType["Id"] = "id";
    SchemaFieldDescriptorFieldType["Int"] = "int";
    SchemaFieldDescriptorFieldType["RichText"] = "rich_text";
    SchemaFieldDescriptorFieldType["Text"] = "text";
    SchemaFieldDescriptorFieldType["Timestamp"] = "timestamp";
    SchemaFieldDescriptorFieldType["Tokens"] = "tokens";
})(SchemaFieldDescriptorFieldType = exports.SchemaFieldDescriptorFieldType || (exports.SchemaFieldDescriptorFieldType = {}));
/** The namespaces to search in. */
var SearchNamespace;
(function (SearchNamespace) {
    SearchNamespace["Account"] = "account";
    SearchNamespace["DevUser"] = "dev_user";
    SearchNamespace["Issue"] = "issue";
    SearchNamespace["RevOrg"] = "rev_org";
    SearchNamespace["RevUser"] = "rev_user";
    SearchNamespace["Tag"] = "tag";
    SearchNamespace["Ticket"] = "ticket";
    SearchNamespace["Unknown"] = "unknown";
})(SearchNamespace = exports.SearchNamespace || (exports.SearchNamespace = {}));
var SearchResultType;
(function (SearchResultType) {
    SearchResultType["Account"] = "account";
    SearchResultType["Artifact"] = "artifact";
    SearchResultType["Conversation"] = "conversation";
    SearchResultType["Link"] = "link";
    SearchResultType["Org"] = "org";
    SearchResultType["Part"] = "part";
    SearchResultType["Tag"] = "tag";
    SearchResultType["User"] = "user";
    SearchResultType["Work"] = "work";
})(SearchResultType = exports.SearchResultType || (exports.SearchResultType = {}));
/** Search sort by parameters. */
var SearchSortByParam;
(function (SearchSortByParam) {
    SearchSortByParam["CreatedDate"] = "created_date";
    SearchSortByParam["ModifiedDate"] = "modified_date";
    SearchSortByParam["Relevance"] = "relevance";
})(SearchSortByParam = exports.SearchSortByParam || (exports.SearchSortByParam = {}));
/** Search sort order parameters. */
var SearchSortOrderParam;
(function (SearchSortOrderParam) {
    SearchSortOrderParam["Asc"] = "asc";
    SearchSortOrderParam["Desc"] = "desc";
})(SearchSortOrderParam = exports.SearchSortOrderParam || (exports.SearchSortOrderParam = {}));
var SendNotificationType;
(function (SendNotificationType) {
    SendNotificationType["DevrevReminder"] = "devrev_reminder";
})(SendNotificationType = exports.SendNotificationType || (exports.SendNotificationType = {}));
/** The billing frequency of the service plan. */
var ServicePlanBillingCycle;
(function (ServicePlanBillingCycle) {
    ServicePlanBillingCycle["Monthly"] = "monthly";
    ServicePlanBillingCycle["OneTime"] = "one_time";
    ServicePlanBillingCycle["Yearly"] = "yearly";
})(ServicePlanBillingCycle = exports.ServicePlanBillingCycle || (exports.ServicePlanBillingCycle = {}));
/** Type of the created resource. */
var SetupResourceResourceType;
(function (SetupResourceResourceType) {
    SetupResourceResourceType["Tag"] = "tag";
    SetupResourceResourceType["User"] = "user";
})(SetupResourceResourceType = exports.SetupResourceResourceType || (exports.SetupResourceResourceType = {}));
/**
 * Current state of the SKU. A SKU is visible to RevOs only when it is
 * released.
 */
var SkuState;
(function (SkuState) {
    SkuState["Approved"] = "approved";
    SkuState["Draft"] = "draft";
    SkuState["EndOfLife"] = "end_of_life";
    SkuState["EndOfSale"] = "end_of_sale";
    SkuState["Released"] = "released";
})(SkuState = exports.SkuState || (exports.SkuState = {}));
/** The update status of the SKU. */
var SkuStatus;
(function (SkuStatus) {
    SkuStatus["CreateInProgress"] = "create_in_progress";
    SkuStatus["DeleteInProgress"] = "delete_in_progress";
    SkuStatus["Normal"] = "normal";
    SkuStatus["UpdateInProgress"] = "update_in_progress";
})(SkuStatus = exports.SkuStatus || (exports.SkuStatus = {}));
/** It defines the type of SKU. */
var SkuType;
(function (SkuType) {
    SkuType["Consumption"] = "consumption";
    SkuType["ConsumptionAddon"] = "consumption_addon";
    SkuType["OneOffAddon"] = "one_off_addon";
    SkuType["OneOffCharge"] = "one_off_charge";
    SkuType["Subscription"] = "subscription";
    SkuType["SubscriptionAddon"] = "subscription_addon";
})(SkuType = exports.SkuType || (exports.SkuType = {}));
/**
 * Specifies the frequency of when the contractually-meaningful evaluation
 * of the SLA happens. The dev_org for their own information might
 * evaluate the various metrics contained in the policy as often as we can
 * make it feasible for them, but only the evaluation at the end of the
 * evaluation period triggers a compensation and needs to be shared with
 * the rev.
 */
var SlaEvaluationPeriod;
(function (SlaEvaluationPeriod) {
    SlaEvaluationPeriod["Monthly"] = "monthly";
    SlaEvaluationPeriod["Quarterly"] = "quarterly";
    SlaEvaluationPeriod["Weekly"] = "weekly";
    SlaEvaluationPeriod["Yearly"] = "yearly";
})(SlaEvaluationPeriod = exports.SlaEvaluationPeriod || (exports.SlaEvaluationPeriod = {}));
/** The stage of the metric. */
var SlaMetricSummaryStage;
(function (SlaMetricSummaryStage) {
    SlaMetricSummaryStage["Breached"] = "breached";
    SlaMetricSummaryStage["Completed"] = "completed";
    SlaMetricSummaryStage["OutOfSchedule"] = "out_of_schedule";
    SlaMetricSummaryStage["Paused"] = "paused";
    SlaMetricSummaryStage["Running"] = "running";
    SlaMetricSummaryStage["Warning"] = "warning";
})(SlaMetricSummaryStage = exports.SlaMetricSummaryStage || (exports.SlaMetricSummaryStage = {}));
/** The item type for which the SLA policy applies. */
var SlaSelectorAppliesTo;
(function (SlaSelectorAppliesTo) {
    SlaSelectorAppliesTo["Conversation"] = "conversation";
    SlaSelectorAppliesTo["Ticket"] = "ticket";
})(SlaSelectorAppliesTo = exports.SlaSelectorAppliesTo || (exports.SlaSelectorAppliesTo = {}));
/** Th SLA policy applies to conversations with these priorities. */
var SlaSelectorPriority;
(function (SlaSelectorPriority) {
    SlaSelectorPriority["P0"] = "p0";
    SlaSelectorPriority["P1"] = "p1";
    SlaSelectorPriority["P2"] = "p2";
})(SlaSelectorPriority = exports.SlaSelectorPriority || (exports.SlaSelectorPriority = {}));
/** The SLA policy applies to tickets with these severities. */
var SlaSelectorSeverity;
(function (SlaSelectorSeverity) {
    SlaSelectorSeverity["Blocker"] = "blocker";
    SlaSelectorSeverity["High"] = "high";
    SlaSelectorSeverity["Low"] = "low";
    SlaSelectorSeverity["Medium"] = "medium";
})(SlaSelectorSeverity = exports.SlaSelectorSeverity || (exports.SlaSelectorSeverity = {}));
/**
 * Specifies the logical operation to perform between the presence of the
 * specified tags, whether all or any are needed.
 */
var SlaSelectorTagOperation;
(function (SlaSelectorTagOperation) {
    SlaSelectorTagOperation["All"] = "all";
    SlaSelectorTagOperation["Any"] = "any";
    SlaSelectorTagOperation["NotAny"] = "not_any";
})(SlaSelectorTagOperation = exports.SlaSelectorTagOperation || (exports.SlaSelectorTagOperation = {}));
/**
 * The status determining mutability. In 'draft' the item can be edited
 * but can't be used, in 'published' it can't be edited, but can be used,
 * and in archived neither is possible.
 */
var SlaStatus;
(function (SlaStatus) {
    SlaStatus["Archived"] = "archived";
    SlaStatus["Draft"] = "draft";
    SlaStatus["Published"] = "published";
})(SlaStatus = exports.SlaStatus || (exports.SlaStatus = {}));
/** The source type containing the code. */
var SnapInFunctionDefinitionSourceType;
(function (SnapInFunctionDefinitionSourceType) {
    SnapInFunctionDefinitionSourceType["Artifact"] = "artifact";
})(SnapInFunctionDefinitionSourceType = exports.SnapInFunctionDefinitionSourceType || (exports.SnapInFunctionDefinitionSourceType = {}));
/** Type of the input. */
var SnapInGlobalInputType;
(function (SnapInGlobalInputType) {
    SnapInGlobalInputType["Bool"] = "bool";
    SnapInGlobalInputType["Enum"] = "enum";
    SnapInGlobalInputType["EnumList"] = "enum_list";
    SnapInGlobalInputType["Float"] = "float";
    SnapInGlobalInputType["FloatList"] = "float_list";
    SnapInGlobalInputType["Integer"] = "integer";
    SnapInGlobalInputType["IntegerList"] = "integer_list";
    SnapInGlobalInputType["String"] = "string";
    SnapInGlobalInputType["StringList"] = "string_list";
})(SnapInGlobalInputType = exports.SnapInGlobalInputType || (exports.SnapInGlobalInputType = {}));
/** Deployment status of the snap-in. */
var SnapInStatus;
(function (SnapInStatus) {
    SnapInStatus["Active"] = "active";
    SnapInStatus["Draft"] = "draft";
})(SnapInStatus = exports.SnapInStatus || (exports.SnapInStatus = {}));
/** Snap-in package state. */
var SnapInVersionState;
(function (SnapInVersionState) {
    SnapInVersionState["Deploying"] = "deploying";
    SnapInVersionState["Draft"] = "draft";
    SnapInVersionState["Ready"] = "ready";
})(SnapInVersionState = exports.SnapInVersionState || (exports.SnapInVersionState = {}));
var SnapKitActionRequestElementTypeValue;
(function (SnapKitActionRequestElementTypeValue) {
    SnapKitActionRequestElementTypeValue["Button"] = "button";
})(SnapKitActionRequestElementTypeValue = exports.SnapKitActionRequestElementTypeValue || (exports.SnapKitActionRequestElementTypeValue = {}));
var SnapType;
(function (SnapType) {
    SnapType["Flow"] = "flow";
    SnapType["SnapIn"] = "snap_in";
})(SnapType = exports.SnapType || (exports.SnapType = {}));
/** An enum to specify the behaviour of values for this tag. */
var TagType;
(function (TagType) {
    TagType["Annotation"] = "annotation";
    TagType["Tag"] = "tag";
})(TagType = exports.TagType || (exports.TagType = {}));
/** Priority of the work based upon impact and criticality. */
var TaskPriority;
(function (TaskPriority) {
    TaskPriority["P0"] = "p0";
    TaskPriority["P1"] = "p1";
    TaskPriority["P2"] = "p2";
    TaskPriority["P3"] = "p3";
})(TaskPriority = exports.TaskPriority || (exports.TaskPriority = {}));
/** Severity of the ticket. */
var TicketSeverity;
(function (TicketSeverity) {
    TicketSeverity["Blocker"] = "blocker";
    TicketSeverity["High"] = "high";
    TicketSeverity["Low"] = "low";
    TicketSeverity["Medium"] = "medium";
})(TicketSeverity = exports.TicketSeverity || (exports.TicketSeverity = {}));
/** The type of the body to use for the comment. */
var TimelineCommentBodyType;
(function (TimelineCommentBodyType) {
    TimelineCommentBodyType["SnapKit"] = "snap_kit";
    TimelineCommentBodyType["Text"] = "text";
})(TimelineCommentBodyType = exports.TimelineCommentBodyType || (exports.TimelineCommentBodyType = {}));
/** Describes collections of timeline entries. */
var TimelineEntriesCollection;
(function (TimelineEntriesCollection) {
    TimelineEntriesCollection["Comments"] = "comments";
    TimelineEntriesCollection["Events"] = "events";
})(TimelineEntriesCollection = exports.TimelineEntriesCollection || (exports.TimelineEntriesCollection = {}));
var TimelineEntriesCreateRequestType;
(function (TimelineEntriesCreateRequestType) {
    TimelineEntriesCreateRequestType["TimelineComment"] = "timeline_comment";
})(TimelineEntriesCreateRequestType = exports.TimelineEntriesCreateRequestType || (exports.TimelineEntriesCreateRequestType = {}));
var TimelineEntriesUpdateRequestType;
(function (TimelineEntriesUpdateRequestType) {
    TimelineEntriesUpdateRequestType["TimelineComment"] = "timeline_comment";
})(TimelineEntriesUpdateRequestType = exports.TimelineEntriesUpdateRequestType || (exports.TimelineEntriesUpdateRequestType = {}));
var TimelineEntryType;
(function (TimelineEntryType) {
    TimelineEntryType["TimelineChangeEvent"] = "timeline_change_event";
    TimelineEntryType["TimelineComment"] = "timeline_comment";
})(TimelineEntryType = exports.TimelineEntryType || (exports.TimelineEntryType = {}));
/** The type of the event. */
var TimelineEventType;
(function (TimelineEventType) {
    TimelineEventType["Annotated"] = "annotated";
    TimelineEventType["Created"] = "created";
    TimelineEventType["Deleted"] = "deleted";
    TimelineEventType["Linked"] = "linked";
    TimelineEventType["Updated"] = "updated";
})(TimelineEventType = exports.TimelineEventType || (exports.TimelineEventType = {}));
/** Field types for typeahead recommendation. */
var TypeAheadRequestedField;
(function (TypeAheadRequestedField) {
    TypeAheadRequestedField["Body"] = "body";
    TypeAheadRequestedField["Title"] = "title";
})(TypeAheadRequestedField = exports.TypeAheadRequestedField || (exports.TypeAheadRequestedField = {}));
/**
 * This defines the UOM unit type. For example, for 'number of video
 * calls', unit type will be a number.
 */
var UnitType;
(function (UnitType) {
    UnitType["Boolean"] = "boolean";
    UnitType["Number"] = "number";
})(UnitType = exports.UnitType || (exports.UnitType = {}));
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
var UomAggregationType;
(function (UomAggregationType) {
    UomAggregationType["Duration"] = "duration";
    UomAggregationType["Latest"] = "latest";
    UomAggregationType["Maximum"] = "maximum";
    UomAggregationType["Minimum"] = "minimum";
    UomAggregationType["Oldest"] = "oldest";
    UomAggregationType["RunningTotal"] = "running_total";
    UomAggregationType["Sum"] = "sum";
    UomAggregationType["UniqueCount"] = "unique_count";
})(UomAggregationType = exports.UomAggregationType || (exports.UomAggregationType = {}));
/**
 * The granularity at which the metering ingestion data is to be emitted
 * for the UOM.
 */
var UomMeterScope;
(function (UomMeterScope) {
    UomMeterScope["Org"] = "org";
    UomMeterScope["User"] = "user";
})(UomMeterScope = exports.UomMeterScope || (exports.UomMeterScope = {}));
/** User action types. */
var UserAction;
(function (UserAction) {
    UserAction["CreatePart"] = "create_part";
    UserAction["CreateWork"] = "create_work";
    UserAction["UpdatePart"] = "update_part";
    UserAction["UpdateWork"] = "update_work";
})(UserAction = exports.UserAction || (exports.UserAction = {}));
/** The latest type of the activity triggering the notification. */
var UserParticipationNotificationLatestActivityType;
(function (UserParticipationNotificationLatestActivityType) {
    UserParticipationNotificationLatestActivityType["Comment"] = "comment";
    UserParticipationNotificationLatestActivityType["Event"] = "event";
})(UserParticipationNotificationLatestActivityType = exports.UserParticipationNotificationLatestActivityType || (exports.UserParticipationNotificationLatestActivityType = {}));
/** App theme mode. */
var UserPreferencesThemeMode;
(function (UserPreferencesThemeMode) {
    UserPreferencesThemeMode["Auto"] = "auto";
    UserPreferencesThemeMode["Dark"] = "dark";
    UserPreferencesThemeMode["Light"] = "light";
})(UserPreferencesThemeMode = exports.UserPreferencesThemeMode || (exports.UserPreferencesThemeMode = {}));
/** State of the user. */
var UserState;
(function (UserState) {
    UserState["Active"] = "active";
    UserState["Deactivated"] = "deactivated";
    UserState["Locked"] = "locked";
    UserState["Shadow"] = "shadow";
    UserState["Unassigned"] = "unassigned";
})(UserState = exports.UserState || (exports.UserState = {}));
var UserType;
(function (UserType) {
    UserType["DevUser"] = "dev_user";
    UserType["DevrevProfile"] = "devrev_profile";
    UserType["RevUser"] = "rev_user";
    UserType["ServiceAccount"] = "service_account";
    UserType["SysUser"] = "sys_user";
})(UserType = exports.UserType || (exports.UserType = {}));
var VertexV2ObjectType;
(function (VertexV2ObjectType) {
    VertexV2ObjectType["Capability"] = "capability";
    VertexV2ObjectType["CustomPart"] = "custom_part";
    VertexV2ObjectType["Enhancement"] = "enhancement";
    VertexV2ObjectType["Feature"] = "feature";
    VertexV2ObjectType["Linkable"] = "linkable";
    VertexV2ObjectType["Product"] = "product";
    VertexV2ObjectType["Runnable"] = "runnable";
})(VertexV2ObjectType = exports.VertexV2ObjectType || (exports.VertexV2ObjectType = {}));
/** Type of vista object. */
var VistaType;
(function (VistaType) {
    VistaType["Curated"] = "curated";
    VistaType["Dynamic"] = "dynamic";
    VistaType["Grouped"] = "grouped";
})(VistaType = exports.VistaType || (exports.VistaType = {}));
/** Describes the types of watch events present on an object. */
var WatchEvent;
(function (WatchEvent) {
    WatchEvent["Comments"] = "comments";
    WatchEvent["Mentions"] = "mentions";
    WatchEvent["Updates"] = "updates";
})(WatchEvent = exports.WatchEvent || (exports.WatchEvent = {}));
/** The event types that the webhook will receive. */
var WebhookEventType;
(function (WebhookEventType) {
    WebhookEventType["ArticleCreated"] = "article_created";
    WebhookEventType["ArticleDeleted"] = "article_deleted";
    WebhookEventType["ArticleUpdated"] = "article_updated";
    WebhookEventType["ArtifactCreated"] = "artifact_created";
    WebhookEventType["ArtifactDeleted"] = "artifact_deleted";
    WebhookEventType["ArtifactUpdated"] = "artifact_updated";
    WebhookEventType["CommandCreated"] = "command_created";
    WebhookEventType["CommandDeleted"] = "command_deleted";
    WebhookEventType["CommandUpdated"] = "command_updated";
    WebhookEventType["ConversationCreated"] = "conversation_created";
    WebhookEventType["ConversationDeleted"] = "conversation_deleted";
    WebhookEventType["ConversationUpdated"] = "conversation_updated";
    WebhookEventType["CustomSchemaFragmentCreated"] = "custom_schema_fragment_created";
    WebhookEventType["CustomSchemaFragmentDeleted"] = "custom_schema_fragment_deleted";
    WebhookEventType["CustomSchemaFragmentUpdated"] = "custom_schema_fragment_updated";
    WebhookEventType["DevUserCreated"] = "dev_user_created";
    WebhookEventType["DevUserDeleted"] = "dev_user_deleted";
    WebhookEventType["DevUserUpdated"] = "dev_user_updated";
    WebhookEventType["FlowCreated"] = "flow_created";
    WebhookEventType["FlowDeleted"] = "flow_deleted";
    WebhookEventType["FlowUpdated"] = "flow_updated";
    WebhookEventType["LinkCreated"] = "link_created";
    WebhookEventType["LinkDeleted"] = "link_deleted";
    WebhookEventType["LinkUpdated"] = "link_updated";
    WebhookEventType["PartCreated"] = "part_created";
    WebhookEventType["PartDeleted"] = "part_deleted";
    WebhookEventType["PartUpdated"] = "part_updated";
    WebhookEventType["RevOrgCreated"] = "rev_org_created";
    WebhookEventType["RevOrgDeleted"] = "rev_org_deleted";
    WebhookEventType["RevOrgUpdated"] = "rev_org_updated";
    WebhookEventType["RevUserCreated"] = "rev_user_created";
    WebhookEventType["RevUserDeleted"] = "rev_user_deleted";
    WebhookEventType["RevUserUpdated"] = "rev_user_updated";
    WebhookEventType["TagCreated"] = "tag_created";
    WebhookEventType["TagDeleted"] = "tag_deleted";
    WebhookEventType["TagUpdated"] = "tag_updated";
    WebhookEventType["TimelineEntryCreated"] = "timeline_entry_created";
    WebhookEventType["TimelineEntryDeleted"] = "timeline_entry_deleted";
    WebhookEventType["TimelineEntryUpdated"] = "timeline_entry_updated";
    WebhookEventType["Verify"] = "verify";
    WebhookEventType["VistaCreated"] = "vista_created";
    WebhookEventType["VistaDeleted"] = "vista_deleted";
    WebhookEventType["VistaUpdated"] = "vista_updated";
    WebhookEventType["WebhookCreated"] = "webhook_created";
    WebhookEventType["WebhookDeleted"] = "webhook_deleted";
    WebhookEventType["WebhookUpdated"] = "webhook_updated";
    WebhookEventType["WorkCreated"] = "work_created";
    WebhookEventType["WorkDeleted"] = "work_deleted";
    WebhookEventType["WorkUpdated"] = "work_updated";
})(WebhookEventType = exports.WebhookEventType || (exports.WebhookEventType = {}));
/** The status of the webhook. */
var WebhookStatus;
(function (WebhookStatus) {
    WebhookStatus["Active"] = "active";
    WebhookStatus["Inactive"] = "inactive";
    WebhookStatus["Unverified"] = "unverified";
})(WebhookStatus = exports.WebhookStatus || (exports.WebhookStatus = {}));
/** The action to update the webhook's status. */
var WebhooksUpdateAction;
(function (WebhooksUpdateAction) {
    WebhooksUpdateAction["Activate"] = "activate";
    WebhooksUpdateAction["Deactivate"] = "deactivate";
})(WebhooksUpdateAction = exports.WebhooksUpdateAction || (exports.WebhooksUpdateAction = {}));
var WorkType;
(function (WorkType) {
    WorkType["CustomWork"] = "custom_work";
    WorkType["Issue"] = "issue";
    WorkType["Opportunity"] = "opportunity";
    WorkType["Project"] = "project";
    WorkType["Task"] = "task";
    WorkType["Ticket"] = "ticket";
})(WorkType = exports.WorkType || (exports.WorkType = {}));
var WorksFilterCreatedByOperatorType;
(function (WorksFilterCreatedByOperatorType) {
    WorksFilterCreatedByOperatorType["Any"] = "any";
    WorksFilterCreatedByOperatorType["NotAny"] = "not_any";
})(WorksFilterCreatedByOperatorType = exports.WorksFilterCreatedByOperatorType || (exports.WorksFilterCreatedByOperatorType = {}));
var WorksFilterOwnedByOperatorType;
(function (WorksFilterOwnedByOperatorType) {
    WorksFilterOwnedByOperatorType["Any"] = "any";
    WorksFilterOwnedByOperatorType["NotAny"] = "not_any";
})(WorksFilterOwnedByOperatorType = exports.WorksFilterOwnedByOperatorType || (exports.WorksFilterOwnedByOperatorType = {}));
var WorksFilterTagIdsOperatorType;
(function (WorksFilterTagIdsOperatorType) {
    WorksFilterTagIdsOperatorType["All"] = "all";
    WorksFilterTagIdsOperatorType["Any"] = "any";
    WorksFilterTagIdsOperatorType["Empty"] = "empty";
    WorksFilterTagIdsOperatorType["NotAny"] = "not_any";
    WorksFilterTagIdsOperatorType["NotEmpty"] = "not_empty";
})(WorksFilterTagIdsOperatorType = exports.WorksFilterTagIdsOperatorType || (exports.WorksFilterTagIdsOperatorType = {}));
var WorksFilterTicketRevOrgIDsOperatorType;
(function (WorksFilterTicketRevOrgIDsOperatorType) {
    WorksFilterTicketRevOrgIDsOperatorType["Any"] = "any";
    WorksFilterTicketRevOrgIDsOperatorType["Empty"] = "empty";
    WorksFilterTicketRevOrgIDsOperatorType["NotAny"] = "not_any";
    WorksFilterTicketRevOrgIDsOperatorType["NotEmpty"] = "not_empty";
})(WorksFilterTicketRevOrgIDsOperatorType = exports.WorksFilterTicketRevOrgIDsOperatorType || (exports.WorksFilterTicketRevOrgIDsOperatorType = {}));
/** Type of works vista group item. */
var WorksVistaGroupItemType;
(function (WorksVistaGroupItemType) {
    WorksVistaGroupItemType["Curated"] = "curated";
    WorksVistaGroupItemType["Dynamic"] = "dynamic";
})(WorksVistaGroupItemType = exports.WorksVistaGroupItemType || (exports.WorksVistaGroupItemType = {}));
const axios_1 = __importDefault(require("axios"));
var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
    ContentType["Text"] = "text/plain";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
class HttpClient {
    constructor(_a = {}) {
        var { securityWorker, secure, format } = _a, axiosConfig = __rest(_a, ["securityWorker", "secure", "format"]);
        this.securityData = null;
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.request = (_b) => __awaiter(this, void 0, void 0, function* () {
            var { secure, path, type, query, format, body } = _b, params = __rest(_b, ["secure", "path", "type", "query", "format", "body"]);
            const secureParams = ((typeof secure === 'boolean' ? secure : this.secure) &&
                this.securityWorker &&
                (yield this.securityWorker(this.securityData))) ||
                {};
            const requestParams = this.mergeRequestParams(params, secureParams);
            const responseFormat = format || this.format || undefined;
            if (type === ContentType.FormData &&
                body &&
                body !== null &&
                typeof body === 'object') {
                body = this.createFormData(body);
            }
            if (type === ContentType.Text &&
                body &&
                body !== null &&
                typeof body !== 'string') {
                body = JSON.stringify(body);
            }
            return this.instance.request(Object.assign(Object.assign({}, requestParams), { headers: Object.assign(Object.assign({}, (requestParams.headers || {})), (type && type !== ContentType.FormData
                    ? { 'Content-Type': type }
                    : {})), params: query, responseType: responseFormat, data: body, url: path }));
        });
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: axiosConfig.baseURL || '{protocol}://{hostname}' }));
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
    }
    mergeRequestParams(params1, params2) {
        const method = params1.method || (params2 && params2.method);
        return Object.assign(Object.assign(Object.assign(Object.assign({}, this.instance.defaults), params1), (params2 || {})), { headers: Object.assign(Object.assign(Object.assign({}, ((method &&
                this.instance.defaults.headers[method.toLowerCase()]) ||
                {})), (params1.headers || {})), ((params2 && params2.headers) || {})) });
    }
    stringifyFormItem(formItem) {
        if (typeof formItem === 'object' && formItem !== null) {
            return JSON.stringify(formItem);
        }
        else {
            return `${formItem}`;
        }
    }
    createFormData(input) {
        return Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key];
            const propertyContent = property instanceof Array ? property : [property];
            for (const formItem of propertyContent) {
                const isFileType = formItem instanceof Blob || formItem instanceof File;
                formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
            }
            return formData;
        }, new FormData());
    }
}
exports.HttpClient = HttpClient;
/**
 * @title DevRev REST API
 * @version 1.0.0
 * @baseUrl {protocol}://{hostname}
 *
 * DevRev's REST API.
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.internal = {
            /**
             * @description ### Owner: akanksha.deswal@devrev.ai ### Gets the count of Accounts matching given filter.
             *
             * @tags accounts
             * @name AccountsCount
             * @request GET:/internal/accounts.count
             * @secure
             */
            accountsCount: (query, params = {}) => this.request(Object.assign({ path: `/internal/accounts.count`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the count of Accounts matching given filter.
             *
             * @tags accounts
             * @name AccountsCountPost
             * @request POST:/internal/accounts.count
             * @secure
             */
            accountsCountPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/accounts.count`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a Account.
             *
             * @tags accounts
             * @name AccountsCreate
             * @request POST:/internal/accounts.create
             * @secure
             */
            accountsCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/accounts.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes the Account.
             *
             * @tags accounts
             * @name AccountsDelete
             * @request POST:/internal/accounts.delete
             * @secure
             */
            accountsDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/accounts.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: akanksha.deswal@devrev.ai ### Retrieves the Account's information.
             *
             * @tags accounts
             * @name AccountsGet
             * @request GET:/internal/accounts.get
             * @secure
             */
            accountsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/accounts.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Retrieves the Account's information.
             *
             * @tags accounts
             * @name AccountsGetPost
             * @request POST:/internal/accounts.get
             * @secure
             */
            accountsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/accounts.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: akanksha.deswal@devrev.ai ### Lists collections of accounts by groups.
             *
             * @tags accounts
             * @name AccountsGroup
             * @request GET:/internal/accounts.group
             * @secure
             */
            accountsGroup: (query, params = {}) => this.request(Object.assign({ path: `/internal/accounts.group`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists collections of accounts by groups.
             *
             * @tags accounts
             * @name AccountsGroupPost
             * @request POST:/internal/accounts.group
             * @secure
             */
            accountsGroupPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/accounts.group`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: akanksha.deswal@devrev.ai ### Gets the list of Accounts' information belonging to the authenticated user's Dev Organization.
             *
             * @tags accounts
             * @name AccountsList
             * @request GET:/internal/accounts.list
             * @secure
             */
            accountsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/accounts.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the list of Accounts' information belonging to the authenticated user's Dev Organization.
             *
             * @tags accounts
             * @name AccountsListPost
             * @request POST:/internal/accounts.list
             * @secure
             */
            accountsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/accounts.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Merges the Account.
             *
             * @tags accounts
             * @name AccountsMerge
             * @request POST:/internal/accounts.merge
             * @secure
             */
            accountsMerge: (data, params = {}) => this.request(Object.assign({ path: `/internal/accounts.merge`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates the Account's information.
             *
             * @tags accounts
             * @name AccountsUpdate
             * @request POST:/internal/accounts.update
             * @secure
             */
            accountsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/accounts.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates an addon rule
             *
             * @tags commerce
             * @name AddonRulesCreate
             * @request POST:/internal/addon-rules.create
             * @secure
             */
            addonRulesCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/addon-rules.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes an addon rule object.
             *
             * @tags commerce
             * @name AddonRulesDelete
             * @request POST:/internal/addon-rules.delete
             * @secure
             */
            addonRulesDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/addon-rules.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Gets an addon rule
             *
             * @tags commerce
             * @name AddonRulesGet
             * @request GET:/internal/addon-rules.get
             * @secure
             */
            addonRulesGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/addon-rules.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets an addon rule
             *
             * @tags commerce
             * @name AddonRulesGetPost
             * @request POST:/internal/addon-rules.get
             * @secure
             */
            addonRulesGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/addon-rules.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the addon rule objects based on the given filters.
             *
             * @tags commerce
             * @name AddonRulesList
             * @request GET:/internal/addon-rules.list
             * @secure
             */
            addonRulesList: (query, params = {}) => this.request(Object.assign({ path: `/internal/addon-rules.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the addon rule objects based on the given filters.
             *
             * @tags commerce
             * @name AddonRulesListPost
             * @request POST:/internal/addon-rules.list
             * @secure
             */
            addonRulesListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/addon-rules.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates an addon rule
             *
             * @tags commerce
             * @name AddonRulesUpdate
             * @request POST:/internal/addon-rules.update
             * @secure
             */
            addonRulesUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/addon-rules.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates multiple articles.
             *
             * @tags articles
             * @name CreateArticles
             * @request POST:/internal/articles.bulk.create
             * @secure
             */
            createArticles: (data, params = {}) => this.request(Object.assign({ path: `/internal/articles.bulk.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates an article.
             *
             * @tags articles
             * @name CreateArticle
             * @request POST:/internal/articles.create
             * @secure
             */
            createArticle: (data, params = {}) => this.request(Object.assign({ path: `/internal/articles.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes an article.
             *
             * @tags articles
             * @name DeleteArticle
             * @request POST:/internal/articles.delete
             * @secure
             */
            deleteArticle: (data, params = {}) => this.request(Object.assign({ path: `/internal/articles.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Gets an article.
             *
             * @tags articles
             * @name GetArticle
             * @request GET:/internal/articles.get
             * @secure
             */
            getArticle: (query, params = {}) => this.request(Object.assign({ path: `/internal/articles.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets an article.
             *
             * @tags articles
             * @name GetArticlePost
             * @request POST:/internal/articles.get
             * @secure
             */
            getArticlePost: (data, params = {}) => this.request(Object.assign({ path: `/internal/articles.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists a collection of articles.
             *
             * @tags articles
             * @name ListArticles
             * @request GET:/internal/articles.list
             * @secure
             */
            listArticles: (query, params = {}) => this.request(Object.assign({ path: `/internal/articles.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists a collection of articles.
             *
             * @tags articles
             * @name ListArticlesPost
             * @request POST:/internal/articles.list
             * @secure
             */
            listArticlesPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/articles.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates an article.
             *
             * @tags articles
             * @name UpdateArticle
             * @request POST:/internal/articles.update
             * @secure
             */
            updateArticle: (data, params = {}) => this.request(Object.assign({ path: `/internal/articles.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the requested artifact's information.
             *
             * @tags artifacts
             * @name ArtifactsGet
             * @request GET:/internal/artifacts.get
             * @secure
             */
            artifactsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/artifacts.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the requested artifact's information.
             *
             * @tags artifacts
             * @name ArtifactsGetPost
             * @request POST:/internal/artifacts.get
             * @secure
             */
            artifactsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/artifacts.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description List the artifacts attached to an object.
             *
             * @tags artifacts
             * @name ArtifactsList
             * @request GET:/internal/artifacts.list
             * @secure
             */
            artifactsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/artifacts.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description List the artifacts attached to an object.
             *
             * @tags artifacts
             * @name ArtifactsListPost
             * @request POST:/internal/artifacts.list
             * @secure
             */
            artifactsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/artifacts.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the download URL for the artifact.
             *
             * @tags artifacts
             * @name ArtifactsLocate
             * @request GET:/internal/artifacts.locate
             * @secure
             */
            artifactsLocate: (query, params = {}) => this.request(Object.assign({ path: `/internal/artifacts.locate`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the download URL for the artifact.
             *
             * @tags artifacts
             * @name ArtifactsLocatePost
             * @request POST:/internal/artifacts.locate
             * @secure
             */
            artifactsLocatePost: (data, params = {}) => this.request(Object.assign({ path: `/internal/artifacts.locate`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates an artifact and generates an upload URL for its data.
             *
             * @tags artifacts
             * @name ArtifactsPrepare
             * @request POST:/internal/artifacts.prepare
             * @secure
             */
            artifactsPrepare: (data, params = {}) => this.request(Object.assign({ path: `/internal/artifacts.prepare`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a JWT corresponding to the requested token type for the authenticated user.
             *
             * @tags auth-tokens
             * @name AuthTokensCreate
             * @request POST:/internal/auth-tokens.create
             * @secure
             */
            authTokensCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/auth-tokens.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Revokes the token that matches the given token ID issued under the given Dev organization.
             *
             * @tags auth-tokens
             * @name AuthTokensDelete
             * @request POST:/internal/auth-tokens.delete
             * @secure
             */
            authTokensDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/auth-tokens.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Gets the token metadata corresponding to the given token ID under the given Dev organization.
             *
             * @tags auth-tokens
             * @name AuthTokensGet
             * @request GET:/internal/auth-tokens.get
             * @secure
             */
            authTokensGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/auth-tokens.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the token metadata corresponding to the given token ID under the given Dev organization.
             *
             * @tags auth-tokens
             * @name AuthTokensGetPost
             * @request POST:/internal/auth-tokens.get
             * @secure
             */
            authTokensGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/auth-tokens.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the token metadata for all the tokens corresponding to the given token type issued for a given subject.
             *
             * @tags auth-tokens
             * @name AuthTokensList
             * @request GET:/internal/auth-tokens.list
             * @secure
             */
            authTokensList: (query, params = {}) => this.request(Object.assign({ path: `/internal/auth-tokens.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the token metadata for all the tokens corresponding to the given token type issued for a given subject.
             *
             * @tags auth-tokens
             * @name AuthTokensListPost
             * @request POST:/internal/auth-tokens.list
             * @secure
             */
            authTokensListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/auth-tokens.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Revokes all the tokens that matches the given token type created by the authenticated user.
             *
             * @tags auth-tokens
             * @name AuthTokensSelfDelete
             * @request POST:/internal/auth-tokens.self.delete
             * @secure
             */
            authTokensSelfDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/auth-tokens.self.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Updates token metadata of a token issued under a given Dev organization.
             *
             * @tags auth-tokens
             * @name AuthTokensUpdate
             * @request POST:/internal/auth-tokens.update
             * @secure
             */
            authTokensUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/auth-tokens.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Performs a batch of operations.
             *
             * @name BatchApply
             * @request POST:/internal/batch.apply
             * @secure
             */
            batchApply: (data, params = {}) => this.request(Object.assign({ path: `/internal/batch.apply`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a command.
             *
             * @tags command
             * @name CommandsCreate
             * @request POST:/internal/commands.create
             * @secure
             */
            commandsCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/commands.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes a command.
             *
             * @tags command
             * @name CommandsDelete
             * @request POST:/internal/commands.delete
             * @secure
             */
            commandsDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/commands.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Executes a command.
             *
             * @tags command
             * @name CommandsExecute
             * @request POST:/internal/commands.execute
             * @secure
             */
            commandsExecute: (data, params = {}) => this.request(Object.assign({ path: `/internal/commands.execute`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets a command.
             *
             * @tags command
             * @name CommandsGet
             * @request GET:/internal/commands.get
             * @secure
             */
            commandsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/commands.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a command.
             *
             * @tags command
             * @name CommandsGetPost
             * @request POST:/internal/commands.get
             * @secure
             */
            commandsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/commands.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists commands for a Dev organization.
             *
             * @tags command
             * @name CommandsList
             * @request GET:/internal/commands.list
             * @secure
             */
            commandsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/commands.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists commands for a Dev organization.
             *
             * @tags command
             * @name CommandsListPost
             * @request POST:/internal/commands.list
             * @secure
             */
            commandsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/commands.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates a command.
             *
             * @tags command
             * @name CommandsUpdate
             * @request POST:/internal/commands.update
             * @secure
             */
            commandsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/commands.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists recommended objects, which can assist the conversation.
             *
             * @tags recommendations
             * @name ConversationAssist
             * @request GET:/internal/conversations.assist
             * @secure
             */
            conversationAssist: (query, params = {}) => this.request(Object.assign({ path: `/internal/conversations.assist`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists recommended objects, which can assist the conversation.
             *
             * @tags recommendations
             * @name ConversationAssistPost
             * @request POST:/internal/conversations.assist
             * @secure
             */
            conversationAssistPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/conversations.assist`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Get count of conversations matching given filter.
             *
             * @tags conversations
             * @name ConversationsCount
             * @request GET:/internal/conversations.count
             * @secure
             */
            conversationsCount: (query, params = {}) => this.request(Object.assign({ path: `/internal/conversations.count`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Get count of conversations matching given filter.
             *
             * @tags conversations
             * @name ConversationsCountPost
             * @request POST:/internal/conversations.count
             * @secure
             */
            conversationsCountPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/conversations.count`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a conversation.
             *
             * @tags conversations
             * @name ConversationsCreate
             * @request POST:/internal/conversations.create
             * @secure
             */
            conversationsCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/conversations.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes the requested conversation.
             *
             * @tags conversations
             * @name ConversationsDelete
             * @request POST:/internal/conversations.delete
             * @secure
             */
            conversationsDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/conversations.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Exports a collection of conversation items.
             *
             * @tags conversations
             * @name ConversationsExport
             * @request GET:/internal/conversations.export
             * @secure
             */
            conversationsExport: (query, params = {}) => this.request(Object.assign({ path: `/internal/conversations.export`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Exports a collection of conversation items.
             *
             * @tags conversations
             * @name ConversationsExportPost
             * @request POST:/internal/conversations.export
             * @secure
             */
            conversationsExportPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/conversations.export`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the requested conversation's information.
             *
             * @tags conversations
             * @name ConversationsGet
             * @request GET:/internal/conversations.get
             * @secure
             */
            conversationsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/conversations.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the requested conversation's information.
             *
             * @tags conversations
             * @name ConversationsGetPost
             * @request POST:/internal/conversations.get
             * @secure
             */
            conversationsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/conversations.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists collections of conversations by groups.
             *
             * @tags conversations
             * @name ConversationsGroup
             * @request GET:/internal/conversations.group
             * @secure
             */
            conversationsGroup: (query, params = {}) => this.request(Object.assign({ path: `/internal/conversations.group`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists collections of conversations by groups.
             *
             * @tags conversations
             * @name ConversationsGroupPost
             * @request POST:/internal/conversations.group
             * @secure
             */
            conversationsGroupPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/conversations.group`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists the available conversations.
             *
             * @tags conversations
             * @name ConversationsList
             * @request GET:/internal/conversations.list
             * @secure
             */
            conversationsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/conversations.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists the available conversations.
             *
             * @tags conversations
             * @name ConversationsListPost
             * @request POST:/internal/conversations.list
             * @secure
             */
            conversationsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/conversations.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates the requested conversation.
             *
             * @tags conversations
             * @name ConversationsUpdate
             * @request POST:/internal/conversations.update
             * @secure
             */
            conversationsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/conversations.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Applies a credit coupon object.
             *
             * @tags commerce
             * @name CreditCouponsApply
             * @request POST:/internal/credit-coupons.apply
             * @secure
             */
            creditCouponsApply: (data, params = {}) => this.request(Object.assign({ path: `/internal/credit-coupons.apply`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a credit coupon object.
             *
             * @tags commerce
             * @name CreditCouponsCreate
             * @request POST:/internal/credit-coupons.create
             * @secure
             */
            creditCouponsCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/credit-coupons.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes a credit coupon object.
             *
             * @tags commerce
             * @name CreditCouponsDelete
             * @request POST:/internal/credit-coupons.delete
             * @secure
             */
            creditCouponsDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/credit-coupons.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Gets a credit coupon object.
             *
             * @tags commerce
             * @name CreditCouponsGet
             * @request GET:/internal/credit-coupons.get
             * @secure
             */
            creditCouponsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/credit-coupons.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a credit coupon object.
             *
             * @tags commerce
             * @name CreditCouponsGetPost
             * @request POST:/internal/credit-coupons.get
             * @secure
             */
            creditCouponsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/credit-coupons.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates a credit coupon object.
             *
             * @tags commerce
             * @name CreditCouponsUpdate
             * @request POST:/internal/credit-coupons.update
             * @secure
             */
            creditCouponsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/credit-coupons.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Validates a credit coupon object.
             *
             * @tags commerce
             * @name CreditCouponsValidate
             * @request POST:/internal/credit-coupons.validate
             * @secure
             */
            creditCouponsValidate: (data, params = {}) => this.request(Object.assign({ path: `/internal/credit-coupons.validate`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a credit object.
             *
             * @tags commerce
             * @name CreditsCreate
             * @request POST:/internal/credits.create
             * @secure
             */
            creditsCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/credits.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes a credit object.
             *
             * @tags commerce
             * @name CreditsDelete
             * @request POST:/internal/credits.delete
             * @secure
             */
            creditsDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/credits.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Gets a credit object.
             *
             * @tags commerce
             * @name CreditsGet
             * @request GET:/internal/credits.get
             * @secure
             */
            creditsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/credits.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a credit object.
             *
             * @tags commerce
             * @name CreditsGetPost
             * @request POST:/internal/credits.get
             * @secure
             */
            creditsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/credits.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the credit objects based on the given filters.
             *
             * @tags commerce
             * @name CreditsList
             * @request GET:/internal/credits.list
             * @secure
             */
            creditsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/credits.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the credit objects based on the given filters.
             *
             * @tags commerce
             * @name CreditsListPost
             * @request POST:/internal/credits.list
             * @secure
             */
            creditsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/credits.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates a credit object.
             *
             * @tags commerce
             * @name CreditsUpdate
             * @request POST:/internal/credits.update
             * @secure
             */
            creditsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/credits.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets dataset for a query.
             *
             * @tags analytics
             * @name DatasetGet
             * @request GET:/internal/dataset.get
             * @secure
             */
            datasetGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/dataset.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets dataset for a query.
             *
             * @tags analytics
             * @name DatasetGetPost
             * @request POST:/internal/dataset.get
             * @secure
             */
            datasetGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/dataset.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a new enterprise authentication connection for a Dev organization. This authentication connection will not be enabled by default for the organization and the user will need to explicitly enable this. Keep in mind that at a time, only one authentication connection can be enabled for a Dev organization. At present, only 5 enterprise connections can be created by an organization.
             *
             * @tags auth-connection, dev-orgs
             * @name DevOrgAuthConnectionsCreate
             * @request POST:/internal/dev-orgs.auth-connections.create
             * @secure
             */
            devOrgAuthConnectionsCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-orgs.auth-connections.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes an authentication connection. Only enterprise connections which are explicitly set up for a Dev organization can be deleted. Default connections can not be deleted using this method.
             *
             * @tags auth-connection, dev-orgs
             * @name DevOrgAuthConnectionsDelete
             * @request POST:/internal/dev-orgs.auth-connections.delete
             * @secure
             */
            devOrgAuthConnectionsDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-orgs.auth-connections.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description ### Owner: sambhav.jain@devrev.ai ### Retrieves the details for an authentication connection.
             *
             * @tags auth-connection, dev-orgs
             * @name DevOrgAuthConnectionsGet
             * @request GET:/internal/dev-orgs.auth-connections.get
             * @secure
             */
            devOrgAuthConnectionsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/dev-orgs.auth-connections.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Retrieves the details for an authentication connection.
             *
             * @tags auth-connection, dev-orgs
             * @name DevOrgAuthConnectionsGetPost
             * @request POST:/internal/dev-orgs.auth-connections.get
             * @secure
             */
            devOrgAuthConnectionsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-orgs.auth-connections.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: sambhav.jain@devrev.ai ### Lists all the authentication connections available for a Dev organization. This list will include both social and enterprise connections which are either available by default or are explicitly created by the user.
             *
             * @tags auth-connection, dev-orgs
             * @name DevOrgAuthConnectionsList
             * @request GET:/internal/dev-orgs.auth-connections.list
             * @secure
             */
            devOrgAuthConnectionsList: (params = {}) => this.request(Object.assign({ path: `/internal/dev-orgs.auth-connections.list`, method: 'GET', secure: true, format: 'json' }, params)),
            /**
             * @description Lists all the authentication connections available for a Dev organization. This list will include both social and enterprise connections which are either available by default or are explicitly created by the user.
             *
             * @tags auth-connection, dev-orgs
             * @name DevOrgAuthConnectionsListPost
             * @request POST:/internal/dev-orgs.auth-connections.list
             * @secure
             */
            devOrgAuthConnectionsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-orgs.auth-connections.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Enable or disable an authentication connection for a Dev organization. Currently, only 1 authentication connection can be enabled at a time. When a new authentication connection is enabled, the connection which is currently enabled for the Dev organization is automatically disabled.
             *
             * @tags auth-connection, dev-orgs
             * @name DevOrgAuthConnectionsToggle
             * @request POST:/internal/dev-orgs.auth-connections.toggle
             * @secure
             */
            devOrgAuthConnectionsToggle: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-orgs.auth-connections.toggle`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Updates an authentication connection.
             *
             * @tags auth-connection, dev-orgs
             * @name DevOrgAuthConnectionsUpdate
             * @request POST:/internal/dev-orgs.auth-connections.update
             * @secure
             */
            devOrgAuthConnectionsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-orgs.auth-connections.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a Dev organization for the authenticated user.
             *
             * @tags dev-orgs
             * @name DevOrgsCreate
             * @request POST:/internal/dev-orgs.create
             * @secure
             */
            devOrgsCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-orgs.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Delete the Dev organization of the authenticated user.
             *
             * @tags dev-orgs
             * @name DevOrgsDelete
             * @request POST:/internal/dev-orgs.delete
             * @secure
             */
            devOrgsDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-orgs.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: sambhav.jain@devrev.ai ### Gets the Dev organization's information of the authenticated user.
             *
             * @tags dev-orgs
             * @name DevOrgsGet
             * @request GET:/internal/dev-orgs.get
             * @secure
             */
            devOrgsGet: (params = {}) => this.request(Object.assign({ path: `/internal/dev-orgs.get`, method: 'GET', secure: true, format: 'json' }, params)),
            /**
             * @description Gets the Dev organization's information of the authenticated user.
             *
             * @tags dev-orgs
             * @name DevOrgsGetPost
             * @request POST:/internal/dev-orgs.get
             * @secure
             */
            devOrgsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-orgs.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Create an invitation to a user.
             *
             * @tags dev-orgs
             * @name DevOrgsInvitesCreate
             * @request POST:/internal/dev-orgs.invites.create
             * @secure
             */
            devOrgsInvitesCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-orgs.invites.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: sambhav.jain@devrev.ai ### Gets the list of Dev user invitations in the user's Dev organization.
             *
             * @tags dev-orgs
             * @name DevOrgsInvitesList
             * @request GET:/internal/dev-orgs.invites.list
             * @secure
             */
            devOrgsInvitesList: (query, params = {}) => this.request(Object.assign({ path: `/internal/dev-orgs.invites.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the list of Dev user invitations in the user's Dev organization.
             *
             * @tags dev-orgs
             * @name DevOrgsInvitesListPost
             * @request POST:/internal/dev-orgs.invites.list
             * @secure
             */
            devOrgsInvitesListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-orgs.invites.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: sambhav.jain@devrev.ai ### Gets a short-lived invitation url to join the organisation on the basis of email domain.
             *
             * @tags dev-orgs
             * @name DevOrgsJoin
             * @request GET:/internal/dev-orgs.join
             * @secure
             */
            devOrgsJoin: (query, params = {}) => this.request(Object.assign({ path: `/internal/dev-orgs.join`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a short-lived invitation url to join the organisation on the basis of email domain.
             *
             * @tags dev-orgs
             * @name DevOrgsJoinPost
             * @request POST:/internal/dev-orgs.join
             * @secure
             */
            devOrgsJoinPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-orgs.join`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: sambhav.jain@devrev.ai ### Gets the list of Dev organizations for the authenticated Dev user.
             *
             * @tags dev-orgs
             * @name DevOrgsList
             * @request GET:/internal/dev-orgs.list
             * @secure
             */
            devOrgsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/dev-orgs.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the list of Dev organizations for the authenticated Dev user.
             *
             * @tags dev-orgs
             * @name DevOrgsListPost
             * @request POST:/internal/dev-orgs.list
             * @secure
             */
            devOrgsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-orgs.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: sambhav.jain@devrev.ai ### Gets public information of a Dev organization from Slug.
             *
             * @tags dev-orgs
             * @name DevOrgPublicInfo
             * @request GET:/internal/dev-orgs.public-info.get
             */
            devOrgPublicInfo: (query, params = {}) => this.request(Object.assign({ path: `/internal/dev-orgs.public-info.get`, method: 'GET', query: query, format: 'json' }, params)),
            /**
             * @description Gets public information of a Dev organization from Slug.
             *
             * @tags dev-orgs
             * @name DevOrgPublicInfoPost
             * @request POST:/internal/dev-orgs.public-info.get
             * @secure
             */
            devOrgPublicInfoPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-orgs.public-info.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: sambhav.jain@devrev.ai ### Gets the authenticated user's Dev organization information.
             *
             * @tags dev-orgs
             * @name DevOrgsSelf
             * @request GET:/internal/dev-orgs.self
             * @secure
             */
            devOrgsSelf: (params = {}) => this.request(Object.assign({ path: `/internal/dev-orgs.self`, method: 'GET', secure: true, format: 'json' }, params)),
            /**
             * @description Gets the authenticated user's Dev organization information.
             *
             * @tags dev-orgs
             * @name DevOrgsSelfPost
             * @request POST:/internal/dev-orgs.self
             * @secure
             */
            devOrgsSelfPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-orgs.self`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: sambhav.jain@devrev.ai ### Gets the authenticated user's Dev organization information.
             *
             * @tags dev-orgs
             * @name DevOrgsSelfGet
             * @request GET:/internal/dev-orgs.self.get
             * @secure
             */
            devOrgsSelfGet: (params = {}) => this.request(Object.assign({ path: `/internal/dev-orgs.self.get`, method: 'GET', secure: true, format: 'json' }, params)),
            /**
             * @description Gets the authenticated user's Dev organization information.
             *
             * @tags dev-orgs
             * @name DevOrgsSelfGetPost
             * @request POST:/internal/dev-orgs.self.get
             * @secure
             */
            devOrgsSelfGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-orgs.self.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates the Dev organization's information of the authenticated user.
             *
             * @tags dev-orgs
             * @name DevOrgsUpdate
             * @request POST:/internal/dev-orgs.update
             * @secure
             */
            devOrgsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-orgs.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deactivates the requested user.
             *
             * @tags dev-users
             * @name DevUsersDeactivate
             * @request POST:/internal/dev-users.deactivate
             * @secure
             */
            devUsersDeactivate: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-users.deactivate`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes the requested user.
             *
             * @tags dev-users
             * @name DevUsersDelete
             * @request POST:/internal/dev-users.delete
             * @secure
             */
            devUsersDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-users.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Checks if a display handle is available for the authenticated user or not.
             *
             * @tags dev-users
             * @name DevUsersIsDisplayHandleAvailable
             * @request GET:/internal/dev-users.display-handles.is-available
             * @secure
             */
            devUsersIsDisplayHandleAvailable: (query, params = {}) => this.request(Object.assign({ path: `/internal/dev-users.display-handles.is-available`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Checks if a display handle is available for the authenticated user or not.
             *
             * @tags dev-users
             * @name DevUsersIsDisplayHandleAvailablePost
             * @request POST:/internal/dev-users.display-handles.is-available
             * @secure
             */
            devUsersIsDisplayHandleAvailablePost: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-users.display-handles.is-available`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates the display picture of a Dev User
             *
             * @tags dev-users
             * @name DevUserUpdateDisplayPicture
             * @request POST:/internal/dev-users.display-picture
             * @secure
             */
            devUserUpdateDisplayPicture: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-users.display-picture`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the requested user's information.
             *
             * @tags dev-users
             * @name DevUsersGet
             * @request GET:/internal/dev-users.get
             * @secure
             */
            devUsersGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/dev-users.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the requested user's information.
             *
             * @tags dev-users
             * @name DevUsersGetPost
             * @request POST:/internal/dev-users.get
             * @secure
             */
            devUsersGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-users.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Links an external/secondary identity to the Dev user.
             *
             * @tags dev-users
             * @name DevUsersIdentitiesLink
             * @request POST:/internal/dev-users.identities.link
             * @secure
             */
            devUsersIdentitiesLink: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-users.identities.link`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists users within your organization.
             *
             * @tags dev-users
             * @name DevUsersList
             * @request GET:/internal/dev-users.list
             * @secure
             */
            devUsersList: (query, params = {}) => this.request(Object.assign({ path: `/internal/dev-users.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists users within your organization.
             *
             * @tags dev-users
             * @name DevUsersListPost
             * @request POST:/internal/dev-users.list
             * @secure
             */
            devUsersListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-users.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Logout from a Dev organization.
             *
             * @tags dev-users
             * @name DevUsersLogout
             * @request POST:/internal/dev-users.logout
             * @secure
             */
            devUsersLogout: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-users.logout`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Merges the identity of a secondary Dev user with the primary Dev user.The account of the secondary Dev user will be deactivated and will no longer be able to log into DevRev. All objects - issues, tickets, parts etc. owned by the secondary Dev user will be transferred to the primary Dev user.
             *
             * @tags dev-users
             * @name DevUsersMerge
             * @request POST:/internal/dev-users.merge
             * @secure
             */
            devUsersMerge: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-users.merge`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates the user's phone number if the verification code entered by the user is valid.
             *
             * @tags dev-users
             * @name DevUsersCheckPhoneNumberCode
             * @request POST:/internal/dev-users.phonenumbers.check-code
             * @secure
             */
            devUsersCheckPhoneNumberCode: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-users.phonenumbers.check-code`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Sends a verification code to the user's phone number.
             *
             * @tags dev-users
             * @name DevUsersSendPhoneNumberCode
             * @request POST:/internal/dev-users.phonenumbers.send-code
             * @secure
             */
            devUsersSendPhoneNumberCode: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-users.phonenumbers.send-code`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Request made by UI to perform first set of operations when Dev user logs into a Dev organization.
             *
             * @tags dev-users
             * @name DevUsersPostLogin
             * @request POST:/internal/dev-users.post-login
             * @secure
             */
            devUsersPostLogin: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-users.post-login`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the authenticated user's information.
             *
             * @tags dev-users
             * @name DevUsersSelf
             * @request GET:/internal/dev-users.self
             * @secure
             */
            devUsersSelf: (params = {}) => this.request(Object.assign({ path: `/internal/dev-users.self`, method: 'GET', secure: true, format: 'json' }, params)),
            /**
             * @description Gets the authenticated user's information.
             *
             * @tags dev-users
             * @name DevUsersSelfPost
             * @request POST:/internal/dev-users.self
             * @secure
             */
            devUsersSelfPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-users.self`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes the authenticated user.
             *
             * @tags dev-users
             * @name DevUsersSelfDelete
             * @request POST:/internal/dev-users.self.delete
             * @secure
             */
            devUsersSelfDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-users.self.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates the authenticated user.
             *
             * @tags dev-users
             * @name DevUsersSelfUpdate
             * @request POST:/internal/dev-users.self.update
             * @secure
             */
            devUsersSelfUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-users.self.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates the user corresponding to the input Id.
             *
             * @tags dev-users
             * @name DevUsersUpdate
             * @request POST:/internal/dev-users.update
             * @secure
             */
            devUsersUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/dev-users.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Schedule data collection for discovery.
             *
             * @tags discovery
             * @name ScheduleDataCollection
             * @request POST:/internal/discovery.data-collection.schedule
             * @secure
             */
            scheduleDataCollection: (data, params = {}) => this.request(Object.assign({ path: `/internal/discovery.data-collection.schedule`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Start data collection for discovery.
             *
             * @tags discovery
             * @name StartDataCollection
             * @request POST:/internal/discovery.data-collection.start
             * @secure
             */
            startDataCollection: (data, params = {}) => this.request(Object.assign({ path: `/internal/discovery.data-collection.start`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Unschedule data collection for discovery.
             *
             * @tags discovery
             * @name UnscheduleDataCollection
             * @request POST:/internal/discovery.data-collection.unschedule
             * @secure
             */
            unscheduleDataCollection: (data, params = {}) => this.request(Object.assign({ path: `/internal/discovery.data-collection.unschedule`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Create discovery profile.
             *
             * @tags discovery
             * @name CreateDiscoveryProfile
             * @request POST:/internal/discovery.profiles.create
             * @secure
             */
            createDiscoveryProfile: (data, params = {}) => this.request(Object.assign({ path: `/internal/discovery.profiles.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Delete discovery profile.
             *
             * @tags discovery
             * @name DeleteDiscoveryProfile
             * @request POST:/internal/discovery.profiles.delete
             * @secure
             */
            deleteDiscoveryProfile: (data, params = {}) => this.request(Object.assign({ path: `/internal/discovery.profiles.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Get discovery profile.
             *
             * @tags discovery
             * @name GetDiscoveryProfile
             * @request POST:/internal/discovery.profiles.get
             * @secure
             */
            getDiscoveryProfile: (data, params = {}) => this.request(Object.assign({ path: `/internal/discovery.profiles.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description List discovery profiles.
             *
             * @tags discovery
             * @name ListDiscoveryProfiles
             * @request POST:/internal/discovery.profiles.list
             * @secure
             */
            listDiscoveryProfiles: (data, params = {}) => this.request(Object.assign({ path: `/internal/discovery.profiles.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Update discovery profile.
             *
             * @tags discovery
             * @name UpdateDiscoveryProfile
             * @request POST:/internal/discovery.profiles.update
             * @secure
             */
            updateDiscoveryProfile: (data, params = {}) => this.request(Object.assign({ path: `/internal/discovery.profiles.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Run discovery using profile.
             *
             * @tags discovery
             * @name RunDiscovery
             * @request POST:/internal/discovery.run
             * @secure
             */
            runDiscovery: (data, params = {}) => this.request(Object.assign({ path: `/internal/discovery.run`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Get discovery run status.
             *
             * @tags discovery
             * @name GetDiscoveryRun
             * @request GET:/internal/discovery.run.status
             * @secure
             */
            getDiscoveryRun: (query, params = {}) => this.request(Object.assign({ path: `/internal/discovery.run.status`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Get discovery run status.
             *
             * @tags discovery
             * @name GetDiscoveryRunPost
             * @request POST:/internal/discovery.run.status
             * @secure
             */
            getDiscoveryRunPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/discovery.run.status`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Schedule discovery run.
             *
             * @tags discovery
             * @name ScheduleDiscovery
             * @request POST:/internal/discovery.schedule
             * @secure
             */
            scheduleDiscovery: (data, params = {}) => this.request(Object.assign({ path: `/internal/discovery.schedule`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Create discovery Settings.
             *
             * @tags discovery
             * @name CreateDiscoverySettings
             * @request POST:/internal/discovery.settings.create
             * @secure
             */
            createDiscoverySettings: (data, params = {}) => this.request(Object.assign({ path: `/internal/discovery.settings.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Delete discovery Settings.
             *
             * @tags discovery
             * @name DeleteDiscoverySettings
             * @request POST:/internal/discovery.settings.delete
             * @secure
             */
            deleteDiscoverySettings: (data, params = {}) => this.request(Object.assign({ path: `/internal/discovery.settings.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Get discovery Settings.
             *
             * @tags discovery
             * @name GetDiscoverySettings
             * @request GET:/internal/discovery.settings.get
             * @secure
             */
            getDiscoverySettings: (query, params = {}) => this.request(Object.assign({ path: `/internal/discovery.settings.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Get discovery Settings.
             *
             * @tags discovery
             * @name GetDiscoverySettingsPost
             * @request POST:/internal/discovery.settings.get
             * @secure
             */
            getDiscoverySettingsPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/discovery.settings.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Update discovery Settings.
             *
             * @tags discovery
             * @name UpdateDiscoverySettings
             * @request POST:/internal/discovery.settings.update
             * @secure
             */
            updateDiscoverySettings: (data, params = {}) => this.request(Object.assign({ path: `/internal/discovery.settings.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description List discovery sources.
             *
             * @tags discovery
             * @name ListDiscoverySources
             * @request GET:/internal/discovery.sources.list
             * @secure
             */
            listDiscoverySources: (query, params = {}) => this.request(Object.assign({ path: `/internal/discovery.sources.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description List discovery sources.
             *
             * @tags discovery
             * @name ListDiscoverySourcesPost
             * @request POST:/internal/discovery.sources.list
             * @secure
             */
            listDiscoverySourcesPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/discovery.sources.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Unschedule discovery run.
             *
             * @tags discovery
             * @name UnscheduleDiscovery
             * @request POST:/internal/discovery.unschedule
             * @secure
             */
            unscheduleDiscovery: (data, params = {}) => this.request(Object.assign({ path: `/internal/discovery.unschedule`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates domain identity for the supplied domain
             *
             * @tags domain-identity
             * @name DomainIdentitiesCreate
             * @request POST:/internal/domain-identities.create
             * @secure
             */
            domainIdentitiesCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/domain-identities.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Syncs the domain identity verification status
             *
             * @tags domain-identity
             * @name DomainIdentitiesSync
             * @request POST:/internal/domain-identities.sync
             * @secure
             */
            domainIdentitiesSync: (data, params = {}) => this.request(Object.assign({ path: `/internal/domain-identities.sync`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates an event source.
             *
             * @tags event-source
             * @name EventSourcesCreate
             * @request POST:/internal/event-sources.create
             * @secure
             */
            eventSourcesCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/event-sources.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes an event source.
             *
             * @tags event-source
             * @name EventSourceDelete
             * @request POST:/internal/event-sources.delete
             * @secure
             */
            eventSourceDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/event-sources.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Schedules/publishes an event to the specified event source.
             *
             * @tags event-source
             * @name EventSourcesScheduleEvent
             * @request POST:/internal/event-sources.event.schedule
             * @secure
             */
            eventSourcesScheduleEvent: (data, params = {}) => this.request(Object.assign({ path: `/internal/event-sources.event.schedule`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes a scheduled event scheduled for the specified event source.
             *
             * @tags event-source
             * @name EventSourcesDeleteScheduledEvent
             * @request POST:/internal/event-sources.event.unschedule
             * @secure
             */
            eventSourcesDeleteScheduledEvent: (data, params = {}) => this.request(Object.assign({ path: `/internal/event-sources.event.unschedule`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Gets an event source.
             *
             * @tags event-source
             * @name EventSourcesGet
             * @request GET:/internal/event-sources.get
             * @secure
             */
            eventSourcesGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/event-sources.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets an event source.
             *
             * @tags event-source
             * @name EventSourcesGetPost
             * @request POST:/internal/event-sources.get
             * @secure
             */
            eventSourcesGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/event-sources.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists event sources for a Dev organization.
             *
             * @tags event-source
             * @name EventSourcesList
             * @request GET:/internal/event-sources.list
             * @secure
             */
            eventSourcesList: (query, params = {}) => this.request(Object.assign({ path: `/internal/event-sources.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists event sources for a Dev organization.
             *
             * @tags event-source
             * @name EventSourcesListPost
             * @request POST:/internal/event-sources.list
             * @secure
             */
            eventSourcesListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/event-sources.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates an event source.
             *
             * @tags event-source
             * @name EventSourceUpdate
             * @request POST:/internal/event-sources.update
             * @secure
             */
            eventSourceUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/event-sources.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the flags for a user.
             *
             * @tags experience
             * @name ExperienceFlagsGet
             * @request GET:/internal/experience.flags.get
             */
            experienceFlagsGet: (params = {}) => this.request(Object.assign({ path: `/internal/experience.flags.get`, method: 'GET', format: 'json' }, params)),
            /**
             * @description Gets the flags for a user.
             *
             * @tags experience
             * @name ExperienceFlagsGetPost
             * @request POST:/internal/experience.flags.get
             * @secure
             */
            experienceFlagsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/experience.flags.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes a flow.
             *
             * @tags flows
             * @name FlowDelete
             * @request POST:/internal/flows.delete
             * @secure
             */
            flowDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/flows.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Gets a Flow.
             *
             * @tags flows
             * @name FlowGet
             * @request GET:/internal/flows.get
             * @secure
             */
            flowGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/flows.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a Flow.
             *
             * @tags flows
             * @name FlowGetPost
             * @request POST:/internal/flows.get
             * @secure
             */
            flowGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/flows.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates GitHub flow with the given parameters.
             *
             * @tags flows
             * @name FlowsGithubCreate
             * @request POST:/internal/flows.github.create
             * @secure
             */
            flowsGithubCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/flows.github.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists flows for a Dev organization.
             *
             * @tags flows
             * @name FlowsList
             * @request GET:/internal/flows.list
             * @secure
             */
            flowsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/flows.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists flows for a Dev organization.
             *
             * @tags flows
             * @name FlowsListPost
             * @request POST:/internal/flows.list
             * @secure
             */
            flowsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/flows.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates a Flow.
             *
             * @tags flows
             * @name FlowUpdate
             * @request POST:/internal/flows.update
             * @secure
             */
            flowUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/flows.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Validates the flow template and version update
             *
             * @tags flows
             * @name ValidateFlowTemplate
             * @request POST:/internal/flows.validate.template
             * @secure
             */
            validateFlowTemplate: (data, params = {}) => this.request(Object.assign({ path: `/internal/flows.validate.template`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a function definition in a devOrg.
             *
             * @tags microflows
             * @name FunctionDefinitionsCreate
             * @request POST:/internal/functions.create
             * @secure
             */
            functionDefinitionsCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/functions.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes a function definition in a devOrg.
             *
             * @tags microflows
             * @name FunctionDefinitionsDelete
             * @request POST:/internal/functions.delete
             * @secure
             */
            functionDefinitionsDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/functions.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Gets a function definition in a devOrg.
             *
             * @tags microflows
             * @name FunctionDefinitionsGet
             * @request GET:/internal/functions.get
             * @secure
             */
            functionDefinitionsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/functions.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a function definition in a devOrg.
             *
             * @tags microflows
             * @name FunctionDefinitionsGetPost
             * @request POST:/internal/functions.get
             * @secure
             */
            functionDefinitionsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/functions.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists functions used in microflows for a Dev organization.
             *
             * @tags microflows
             * @name FunctionDefinitionsList
             * @request GET:/internal/functions.list
             * @secure
             */
            functionDefinitionsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/functions.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists functions used in microflows for a Dev organization.
             *
             * @tags microflows
             * @name FunctionDefinitionsListPost
             * @request POST:/internal/functions.list
             * @secure
             */
            functionDefinitionsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/functions.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates a function definition in a devOrg.
             *
             * @tags microflows
             * @name FunctionDefinitionsUpdate
             * @request POST:/internal/functions.update
             * @secure
             */
            functionDefinitionsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/functions.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Executes a GraphQL request.
             *
             * @name Graphql
             * @request POST:/internal/graphql.execute
             * @secure
             */
            graphql: (data, params = {}) => this.request(Object.assign({ path: `/internal/graphql.execute`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a new group.
             *
             * @tags groups
             * @name GroupsCreate
             * @request POST:/internal/groups.create
             * @secure
             */
            groupsCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/groups.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes the requested group.
             *
             * @tags groups
             * @name GroupsDelete
             * @request POST:/internal/groups.delete
             * @secure
             */
            groupsDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/groups.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists the available groups.
             *
             * @tags groups
             * @name GroupsList
             * @request GET:/internal/groups.list
             * @secure
             */
            groupsList: (params = {}) => this.request(Object.assign({ path: `/internal/groups.list`, method: 'GET', secure: true, format: 'json' }, params)),
            /**
             * @description Lists the available groups.
             *
             * @tags groups
             * @name GroupsListPost
             * @request POST:/internal/groups.list
             * @secure
             */
            groupsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/groups.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates the requested group.
             *
             * @tags groups
             * @name GroupsUpdate
             * @request POST:/internal/groups.update
             * @secure
             */
            groupsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/groups.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets an Insight.
             *
             * @tags insights
             * @name InsightsGet
             * @request GET:/internal/insights.get
             * @secure
             */
            insightsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/insights.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets an Insight.
             *
             * @tags insights
             * @name InsightsGetPost
             * @request POST:/internal/insights.get
             * @secure
             */
            insightsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/insights.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists insights.
             *
             * @tags insights
             * @name InsightsList
             * @request GET:/internal/insights.list
             * @secure
             */
            insightsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/insights.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists insights.
             *
             * @tags insights
             * @name InsightsListPost
             * @request POST:/internal/insights.list
             * @secure
             */
            insightsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/insights.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists insight values.
             *
             * @tags insights
             * @name InsightsValuesList
             * @request GET:/internal/insights.values.list
             * @secure
             */
            insightsValuesList: (query, params = {}) => this.request(Object.assign({ path: `/internal/insights.values.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists insight values.
             *
             * @tags insights
             * @name InsightsValuesListPost
             * @request POST:/internal/insights.values.list
             * @secure
             */
            insightsValuesListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/insights.values.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Returns the invoice.
             *
             * @tags commerce
             * @name InvoicesGet
             * @request GET:/internal/invoices.get
             * @secure
             */
            invoicesGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/invoices.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Returns the invoice.
             *
             * @tags commerce
             * @name InvoicesGetPost
             * @request POST:/internal/invoices.get
             * @secure
             */
            invoicesGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/invoices.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description List invoices for a customer.
             *
             * @tags commerce
             * @name InvoicesList
             * @request GET:/internal/invoices.list
             * @secure
             */
            invoicesList: (query, params = {}) => this.request(Object.assign({ path: `/internal/invoices.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description List invoices for a customer.
             *
             * @tags commerce
             * @name InvoicesListPost
             * @request POST:/internal/invoices.list
             * @secure
             */
            invoicesListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/invoices.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description OAuth2 authorization callback.
             *
             * @tags keyring
             * @name KeyringsCreateCallback
             * @request GET:/internal/keyrings.authorize
             */
            keyringsCreateCallback: (query, params = {}) => this.request(Object.assign({ path: `/internal/keyrings.authorize`, method: 'GET', query: query }, params)),
            /**
             * @description OAuth2 authorization callback.
             *
             * @tags keyring
             * @name KeyringsCreateCallbackPost
             * @request POST:/internal/keyrings.authorize
             * @secure
             */
            keyringsCreateCallbackPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/keyrings.authorize`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Lists capabilities.
             *
             * @tags keyring
             * @name CapabilitiesList
             * @request GET:/internal/keyrings.capability.list
             * @secure
             */
            capabilitiesList: (params = {}) => this.request(Object.assign({ path: `/internal/keyrings.capability.list`, method: 'GET', secure: true, format: 'json' }, params)),
            /**
             * @description Lists capabilities.
             *
             * @tags keyring
             * @name CapabilitiesListPost
             * @request POST:/internal/keyrings.capability.list
             * @secure
             */
            capabilitiesListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/keyrings.capability.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a keyring.
             *
             * @tags keyring
             * @name KeyringsCreate
             * @request POST:/internal/keyrings.create
             * @secure
             */
            keyringsCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/keyrings.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes a keyring.
             *
             * @tags keyring
             * @name KeyringsDelete
             * @request POST:/internal/keyrings.delete
             * @secure
             */
            keyringsDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/keyrings.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Lists external organiztaions linked to a keyring.
             *
             * @tags keyring
             * @name ExternalOrgsList
             * @request GET:/internal/keyrings.external_org.list
             * @secure
             */
            externalOrgsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/keyrings.external_org.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists external organiztaions linked to a keyring.
             *
             * @tags keyring
             * @name ExternalOrgsListPost
             * @request POST:/internal/keyrings.external_org.list
             * @secure
             */
            externalOrgsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/keyrings.external_org.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets a keyring.
             *
             * @tags keyring
             * @name KeyringsGet
             * @request GET:/internal/keyrings.get
             * @secure
             */
            keyringsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/keyrings.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a keyring.
             *
             * @tags keyring
             * @name KeyringsGetPost
             * @request POST:/internal/keyrings.get
             * @secure
             */
            keyringsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/keyrings.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists keyrings for a Dev organization.
             *
             * @tags keyring
             * @name KeyringsList
             * @request GET:/internal/keyrings.list
             * @secure
             */
            keyringsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/keyrings.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists keyrings for a Dev organization.
             *
             * @tags keyring
             * @name KeyringsListPost
             * @request POST:/internal/keyrings.list
             * @secure
             */
            keyringsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/keyrings.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates a keyring.
             *
             * @tags keyring
             * @name KeyringsUpdate
             * @request POST:/internal/keyrings.update
             * @secure
             */
            keyringsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/keyrings.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists all the vertices and edges in knowledge graph
             *
             * @tags parts
             * @name KnowledgeV2
             * @request GET:/internal/knowledge
             * @secure
             */
            knowledgeV2: (params = {}) => this.request(Object.assign({ path: `/internal/knowledge`, method: 'GET', secure: true, format: 'json' }, params)),
            /**
             * @description Lists all the vertices and edges in knowledge graph
             *
             * @tags parts
             * @name KnowledgeV2Post
             * @request POST:/internal/knowledge
             * @secure
             */
            knowledgeV2Post: (data, params = {}) => this.request(Object.assign({ path: `/internal/knowledge`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a link.
             *
             * @tags links
             * @name LinksCreate
             * @request POST:/internal/links.create
             * @secure
             */
            linksCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/links.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes the requested link.
             *
             * @tags links
             * @name LinksDelete
             * @request POST:/internal/links.delete
             * @secure
             */
            linksDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/links.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the requested link's information.
             *
             * @tags links
             * @name LinksGet
             * @request GET:/internal/links.get
             * @secure
             */
            linksGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/links.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the requested link's information.
             *
             * @tags links
             * @name LinksGetPost
             * @request POST:/internal/links.get
             * @secure
             */
            linksGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/links.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists collections of links by groups.
             *
             * @tags links
             * @name LinksGroup
             * @request GET:/internal/links.group
             * @secure
             */
            linksGroup: (query, params = {}) => this.request(Object.assign({ path: `/internal/links.group`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists collections of links by groups.
             *
             * @tags links
             * @name LinksGroupPost
             * @request POST:/internal/links.group
             * @secure
             */
            linksGroupPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/links.group`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists the available links.
             *
             * @tags links
             * @name LinksList
             * @request GET:/internal/links.list
             * @secure
             */
            linksList: (query, params = {}) => this.request(Object.assign({ path: `/internal/links.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists the available links.
             *
             * @tags links
             * @name LinksListPost
             * @request POST:/internal/links.list
             * @secure
             */
            linksListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/links.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Replaces a link.
             *
             * @tags links
             * @name LinksReplace
             * @request POST:/internal/links.replace
             * @secure
             */
            linksReplace: (data, params = {}) => this.request(Object.assign({ path: `/internal/links.replace`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists the available lobbies.
             *
             * @tags lobbies
             * @name LobbiesList
             * @request GET:/internal/lobbies.list
             * @secure
             */
            lobbiesList: (query, params = {}) => this.request(Object.assign({ path: `/internal/lobbies.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists the available lobbies.
             *
             * @tags lobbies
             * @name LobbiesListPost
             * @request POST:/internal/lobbies.list
             * @secure
             */
            lobbiesListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/lobbies.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets a marketplace category.
             *
             * @tags marketplace
             * @name MarketplaceCategoriesGet
             * @request GET:/internal/marketplace-categories.get
             * @secure
             */
            marketplaceCategoriesGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/marketplace-categories.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a marketplace category.
             *
             * @tags marketplace
             * @name MarketplaceCategoriesGetPost
             * @request POST:/internal/marketplace-categories.get
             * @secure
             */
            marketplaceCategoriesGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/marketplace-categories.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the categories for a marketplace.
             *
             * @tags marketplace
             * @name MarketplaceCategoriesList
             * @request GET:/internal/marketplace-categories.list
             * @secure
             */
            marketplaceCategoriesList: (query, params = {}) => this.request(Object.assign({ path: `/internal/marketplace-categories.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the categories for a marketplace.
             *
             * @tags marketplace
             * @name MarketplaceCategoriesListPost
             * @request POST:/internal/marketplace-categories.list
             * @secure
             */
            marketplaceCategoriesListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/marketplace-categories.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a marketplace item.
             *
             * @tags marketplace
             * @name MarketplaceItemsCreate
             * @request POST:/internal/marketplace-items.create
             * @secure
             */
            marketplaceItemsCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/marketplace-items.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes a marketplace item.
             *
             * @tags marketplace
             * @name MarketplaceItemsDelete
             * @request POST:/internal/marketplace-items.delete
             * @secure
             */
            marketplaceItemsDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/marketplace-items.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Gets a marketplace item.
             *
             * @tags marketplace
             * @name MarketplaceItemsGet
             * @request GET:/internal/marketplace-items.get
             * @secure
             */
            marketplaceItemsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/marketplace-items.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a marketplace item.
             *
             * @tags marketplace
             * @name MarketplaceItemsGetPost
             * @request POST:/internal/marketplace-items.get
             * @secure
             */
            marketplaceItemsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/marketplace-items.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Installs a flow or vista for the marketplace item.
             *
             * @tags marketplace
             * @name MarketplaceItemsInstall
             * @request POST:/internal/marketplace-items.install
             * @secure
             */
            marketplaceItemsInstall: (data, params = {}) => this.request(Object.assign({ path: `/internal/marketplace-items.install`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the marketplace items.
             *
             * @tags marketplace
             * @name MarketplaceItemsList
             * @request GET:/internal/marketplace-items.list
             * @secure
             */
            marketplaceItemsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/marketplace-items.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the marketplace items.
             *
             * @tags marketplace
             * @name MarketplaceItemsListPost
             * @request POST:/internal/marketplace-items.list
             * @secure
             */
            marketplaceItemsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/marketplace-items.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Puts a marketplace item in desired state.
             *
             * @tags marketplace
             * @name MarketplaceItemsTransition
             * @request POST:/internal/marketplace-items.transition
             * @secure
             */
            marketplaceItemsTransition: (data, params = {}) => this.request(Object.assign({ path: `/internal/marketplace-items.transition`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates a marketplace item.
             *
             * @tags marketplace
             * @name MarketplaceItemsUpdate
             * @request POST:/internal/marketplace-items.update
             * @secure
             */
            marketplaceItemsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/marketplace-items.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets a marketplace.
             *
             * @tags marketplace
             * @name MarketplacesGet
             * @request GET:/internal/marketplaces.get
             * @secure
             */
            marketplacesGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/marketplaces.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a marketplace.
             *
             * @tags marketplace
             * @name MarketplacesGetPost
             * @request POST:/internal/marketplaces.get
             * @secure
             */
            marketplacesGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/marketplaces.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the marketplaces.
             *
             * @tags marketplace
             * @name MarketplacesList
             * @request GET:/internal/marketplaces.list
             * @secure
             */
            marketplacesList: (params = {}) => this.request(Object.assign({ path: `/internal/marketplaces.list`, method: 'GET', secure: true, format: 'json' }, params)),
            /**
             * @description Gets the marketplaces.
             *
             * @tags marketplace
             * @name MarketplacesListPost
             * @request POST:/internal/marketplaces.list
             * @secure
             */
            marketplacesListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/marketplaces.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Ingest endpoint for DevRev metrics data from clients.
             *
             * @tags telemetry
             * @name MetricsDevrevIngest
             * @request POST:/internal/metrics.devrev.ingest
             * @secure
             */
            metricsDevrevIngest: (data, params = {}) => this.request(Object.assign({ path: `/internal/metrics.devrev.ingest`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Write endpoint for OTLP metrics data from clients.
             *
             * @tags telemetry
             * @name MetricsOtlpWrite
             * @request POST:/internal/metrics.otlp.write
             * @secure
             */
            metricsOtlpWrite: (data, params = {}) => this.request(Object.assign({ path: `/internal/metrics.otlp.write`, method: 'POST', body: data, secure: true }, params)),
            /**
             * @description Write endpoint for Prometheus metrics data from clients.
             *
             * @tags telemetry
             * @name MetricsPrometheusWrite
             * @request POST:/internal/metrics.prometheus.write
             * @secure
             */
            metricsPrometheusWrite: (data, params = {}) => this.request(Object.assign({ path: `/internal/metrics.prometheus.write`, method: 'POST', body: data, secure: true }, params)),
            /**
             * @description Seeds default configuration of groups, conditional roles and group members for the dev organization.
             *
             * @tags dev-orgs
             * @name MfzDefaultsSeed
             * @request POST:/internal/mfz-defaults.seed
             * @secure
             */
            mfzDefaultsSeed: (data, params = {}) => this.request(Object.assign({ path: `/internal/mfz-defaults.seed`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a microflow.
             *
             * @tags microflows
             * @name MicroflowDefinitionsCreate
             * @request POST:/internal/microflows.create
             * @secure
             */
            microflowDefinitionsCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/microflows.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes a microflow.
             *
             * @tags microflows
             * @name MicroflowDefinitionsDelete
             * @request POST:/internal/microflows.delete
             * @secure
             */
            microflowDefinitionsDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/microflows.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Creates a draft microflow corresponding to a published microflow.
             *
             * @tags microflows
             * @name MicroflowDefinitionsCreateDraft
             * @request POST:/internal/microflows.draft.create
             * @secure
             */
            microflowDefinitionsCreateDraft: (data, params = {}) => this.request(Object.assign({ path: `/internal/microflows.draft.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets a draft microflow associated with a published microflow.
             *
             * @tags microflows
             * @name MicroflowDefinitionsGetDraft
             * @request GET:/internal/microflows.draft.get
             * @secure
             */
            microflowDefinitionsGetDraft: (query, params = {}) => this.request(Object.assign({ path: `/internal/microflows.draft.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a draft microflow associated with a published microflow.
             *
             * @tags microflows
             * @name MicroflowDefinitionsGetDraftPost
             * @request POST:/internal/microflows.draft.get
             * @secure
             */
            microflowDefinitionsGetDraftPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/microflows.draft.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets a draft microflow associated with a published microflow or creates one if does not exist.
             *
             * @tags microflows
             * @name MicroflowDefinitionsGetOrCreateDraft
             * @request POST:/internal/microflows.draft.getorcreate
             * @secure
             */
            microflowDefinitionsGetOrCreateDraft: (data, params = {}) => this.request(Object.assign({ path: `/internal/microflows.draft.getorcreate`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets a microflow.
             *
             * @tags microflows
             * @name MicroflowDefinitionsGet
             * @request GET:/internal/microflows.get
             * @secure
             */
            microflowDefinitionsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/microflows.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a microflow.
             *
             * @tags microflows
             * @name MicroflowDefinitionsGetPost
             * @request POST:/internal/microflows.get
             * @secure
             */
            microflowDefinitionsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/microflows.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists microflows for a Dev organization.
             *
             * @tags microflows
             * @name MicroflowDefinitionsList
             * @request GET:/internal/microflows.list
             * @secure
             */
            microflowDefinitionsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/microflows.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists microflows for a Dev organization.
             *
             * @tags microflows
             * @name MicroflowDefinitionsListPost
             * @request POST:/internal/microflows.list
             * @secure
             */
            microflowDefinitionsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/microflows.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Publishes a microflow.
             *
             * @tags microflows
             * @name MicroflowDefinitionsPublish
             * @request POST:/internal/microflows.publish
             * @secure
             */
            microflowDefinitionsPublish: (data, params = {}) => this.request(Object.assign({ path: `/internal/microflows.publish`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Creates state within a microflow.
             *
             * @tags microflows
             * @name MicroflowsTargetObjectStatesCreate
             * @request POST:/internal/microflows.states.create
             * @secure
             */
            microflowsTargetObjectStatesCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/microflows.states.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes a state within a microflow.
             *
             * @tags microflows
             * @name MicroflowsTargetObjectStatesDelete
             * @request POST:/internal/microflows.states.delete
             * @secure
             */
            microflowsTargetObjectStatesDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/microflows.states.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Updates a state within a microflow.
             *
             * @tags microflows
             * @name MicroflowsTargetObjectStatesUpdate
             * @request POST:/internal/microflows.states.update
             * @secure
             */
            microflowsTargetObjectStatesUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/microflows.states.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a transition within a microflow.
             *
             * @tags microflows
             * @name MicroflowsTargetObjectTransitionsCreate
             * @request POST:/internal/microflows.transitions.create
             * @secure
             */
            microflowsTargetObjectTransitionsCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/microflows.transitions.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes a transition within a microflow.
             *
             * @tags microflows
             * @name MicroflowsTargetObjectTransitionsDelete
             * @request POST:/internal/microflows.transitions.delete
             * @secure
             */
            microflowsTargetObjectTransitionsDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/microflows.transitions.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Updates a transition within a microflow.
             *
             * @tags microflows
             * @name MicroflowsTargetObjectTransitionsUpdate
             * @request POST:/internal/microflows.transitions.update
             * @secure
             */
            microflowsTargetObjectTransitionsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/microflows.transitions.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates a microflow.
             *
             * @tags microflows
             * @name MicroflowDefinitionsUpdate
             * @request POST:/internal/microflows.update
             * @secure
             */
            microflowDefinitionsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/microflows.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a news item.
             *
             * @tags news
             * @name NewsCreate
             * @request POST:/internal/news.create
             * @secure
             */
            newsCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/news.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes a news item.
             *
             * @tags news
             * @name NewsDelete
             * @request POST:/internal/news.delete
             * @secure
             */
            newsDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/news.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Gets a news item.
             *
             * @tags news
             * @name NewsGet
             * @request GET:/internal/news.get
             * @secure
             */
            newsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/news.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a news item.
             *
             * @tags news
             * @name NewsGetPost
             * @request POST:/internal/news.get
             * @secure
             */
            newsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/news.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists news items.
             *
             * @tags news
             * @name NewsList
             * @request GET:/internal/news.list
             * @secure
             */
            newsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/news.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists news items.
             *
             * @tags news
             * @name NewsListPost
             * @request POST:/internal/news.list
             * @secure
             */
            newsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/news.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists the notifications channels for Android.
             *
             * @tags notifications
             * @name NotificationsChannels
             * @request GET:/internal/notifications.channels
             * @secure
             */
            notificationsChannels: (query, params = {}) => this.request(Object.assign({ path: `/internal/notifications.channels`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists the notifications channels for Android.
             *
             * @tags notifications
             * @name NotificationsChannelsPost
             * @request POST:/internal/notifications.channels
             * @secure
             */
            notificationsChannelsPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/notifications.channels`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists the notifications by groups.
             *
             * @tags notifications
             * @name NotificationsGroup
             * @request GET:/internal/notifications.group
             * @secure
             */
            notificationsGroup: (query, params = {}) => this.request(Object.assign({ path: `/internal/notifications.group`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists the notifications by groups.
             *
             * @tags notifications
             * @name NotificationsGroupPost
             * @request POST:/internal/notifications.group
             * @secure
             */
            notificationsGroupPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/notifications.group`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists the notifications.
             *
             * @tags notifications
             * @name NotificationsList
             * @request GET:/internal/notifications.list
             * @secure
             */
            notificationsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/notifications.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists the notifications.
             *
             * @tags notifications
             * @name NotificationsListPost
             * @request POST:/internal/notifications.list
             * @secure
             */
            notificationsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/notifications.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates the state of the notifications.
             *
             * @tags notifications
             * @name NotificationsMark
             * @request POST:/internal/notifications.mark
             * @secure
             */
            notificationsMark: (data, params = {}) => this.request(Object.assign({ path: `/internal/notifications.mark`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Generate a notification.
             *
             * @tags notifications
             * @name NotificationsSend
             * @request POST:/internal/notifications.send
             * @secure
             */
            notificationsSend: (data, params = {}) => this.request(Object.assign({ path: `/internal/notifications.send`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Returns the total count of the object members satisfying the request parameters.
             *
             * @tags object-members
             * @name CountObjectMember
             * @request GET:/internal/object-members.count
             * @secure
             */
            countObjectMember: (query, params = {}) => this.request(Object.assign({ path: `/internal/object-members.count`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Returns the total count of the object members satisfying the request parameters.
             *
             * @tags object-members
             * @name CountObjectMemberPost
             * @request POST:/internal/object-members.count
             * @secure
             */
            countObjectMemberPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/object-members.count`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates an object member.
             *
             * @tags object-members
             * @name CreateObjectMember
             * @request POST:/internal/object-members.create
             * @secure
             */
            createObjectMember: (data, params = {}) => this.request(Object.assign({ path: `/internal/object-members.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets an object member.
             *
             * @tags object-members
             * @name GetObjectMember
             * @request GET:/internal/object-members.get
             * @secure
             */
            getObjectMember: (query, params = {}) => this.request(Object.assign({ path: `/internal/object-members.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets an object member.
             *
             * @tags object-members
             * @name GetObjectMemberPost
             * @request POST:/internal/object-members.get
             * @secure
             */
            getObjectMemberPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/object-members.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists object members satisfying the request parameters.
             *
             * @tags object-members
             * @name ListObjectMember
             * @request GET:/internal/object-members.list
             * @secure
             */
            listObjectMember: (query, params = {}) => this.request(Object.assign({ path: `/internal/object-members.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists object members satisfying the request parameters.
             *
             * @tags object-members
             * @name ListObjectMemberPost
             * @request POST:/internal/object-members.list
             * @secure
             */
            listObjectMemberPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/object-members.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Removes an object member.
             *
             * @tags object-members
             * @name RemoveObjectMember
             * @request POST:/internal/object-members.remove
             * @secure
             */
            removeObjectMember: (data, params = {}) => this.request(Object.assign({ path: `/internal/object-members.remove`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the one time line item objects based on the given filters.
             *
             * @tags commerce
             * @name OneTimeItemsList
             * @request GET:/internal/one-time-line-items.list
             * @secure
             */
            oneTimeItemsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/one-time-line-items.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the one time line item objects based on the given filters.
             *
             * @tags commerce
             * @name OneTimeItemsListPost
             * @request POST:/internal/one-time-line-items.list
             * @secure
             */
            oneTimeItemsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/one-time-line-items.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists top contributors of a part.
             *
             * @tags parts
             * @name PartsContributorsList
             * @request GET:/internal/parts.contributors.list
             * @secure
             */
            partsContributorsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/parts.contributors.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists top contributors of a part.
             *
             * @tags parts
             * @name PartsContributorsListPost
             * @request POST:/internal/parts.contributors.list
             * @secure
             */
            partsContributorsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/parts.contributors.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Get count of parts matching given filter.
             *
             * @tags parts
             * @name PartsCount
             * @request GET:/internal/parts.count
             * @secure
             */
            partsCount: (query, params = {}) => this.request(Object.assign({ path: `/internal/parts.count`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Get count of parts matching given filter.
             *
             * @tags parts
             * @name PartsCountPost
             * @request POST:/internal/parts.count
             * @secure
             */
            partsCountPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/parts.count`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates new [part](https://devrev.ai/docs/product/parts).
             *
             * @tags parts
             * @name PartsCreate
             * @request POST:/internal/parts.create
             * @secure
             */
            partsCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/parts.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists top customers of a part.
             *
             * @tags parts
             * @name PartsCustomersList
             * @request GET:/internal/parts.customers.list
             * @secure
             */
            partsCustomersList: (query, params = {}) => this.request(Object.assign({ path: `/internal/parts.customers.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists top customers of a part.
             *
             * @tags parts
             * @name PartsCustomersListPost
             * @request POST:/internal/parts.customers.list
             * @secure
             */
            partsCustomersListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/parts.customers.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes a [part](https://devrev.ai/docs/product/parts).
             *
             * @tags parts
             * @name PartsDelete
             * @request POST:/internal/parts.delete
             * @secure
             */
            partsDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/parts.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Get links for part hierarchy
             *
             * @tags parts
             * @name PartsDescendantLinksTraverse
             * @request GET:/internal/parts.descendant-links.traverse
             * @secure
             */
            partsDescendantLinksTraverse: (query, params = {}) => this.request(Object.assign({ path: `/internal/parts.descendant-links.traverse`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Get links for part hierarchy
             *
             * @tags parts
             * @name PartsDescendantLinksTraversePost
             * @request POST:/internal/parts.descendant-links.traverse
             * @secure
             */
            partsDescendantLinksTraversePost: (data, params = {}) => this.request(Object.assign({ path: `/internal/parts.descendant-links.traverse`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes API endpoints from a feature.
             *
             * @tags parts
             * @name PartsFeaturesApiEndpointsDelete
             * @request POST:/internal/parts.features.api-endpoints.delete
             * @secure
             */
            partsFeaturesApiEndpointsDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/parts.features.api-endpoints.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Merges API endpoints across two features.
             *
             * @tags parts
             * @name PartsFeaturesApiEndpointsMerge
             * @request POST:/internal/parts.features.api-endpoints.merge
             * @secure
             */
            partsFeaturesApiEndpointsMerge: (data, params = {}) => this.request(Object.assign({ path: `/internal/parts.features.api-endpoints.merge`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes API operations from a feature.
             *
             * @tags parts
             * @name PartsFeaturesApiOperationsDelete
             * @request POST:/internal/parts.features.api-operations.delete
             * @secure
             */
            partsFeaturesApiOperationsDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/parts.features.api-operations.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Merges API operations across two features.
             *
             * @tags parts
             * @name PartsFeaturesApiOperationsMerge
             * @request POST:/internal/parts.features.api-operations.merge
             * @secure
             */
            partsFeaturesApiOperationsMerge: (data, params = {}) => this.request(Object.assign({ path: `/internal/parts.features.api-operations.merge`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets a [part's](https://devrev.ai/docs/product/parts) information.
             *
             * @tags parts
             * @name PartsGet
             * @request GET:/internal/parts.get
             * @secure
             */
            partsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/parts.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a [part's](https://devrev.ai/docs/product/parts) information.
             *
             * @tags parts
             * @name PartsGetPost
             * @request POST:/internal/parts.get
             * @secure
             */
            partsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/parts.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists collections of parts by groups.
             *
             * @tags parts
             * @name PartsGroup
             * @request GET:/internal/parts.group
             * @secure
             */
            partsGroup: (query, params = {}) => this.request(Object.assign({ path: `/internal/parts.group`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists collections of parts by groups.
             *
             * @tags parts
             * @name PartsGroupPost
             * @request POST:/internal/parts.group
             * @secure
             */
            partsGroupPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/parts.group`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists a collection of [parts](https://devrev.ai/docs/product/parts).
             *
             * @tags parts
             * @name PartsList
             * @request GET:/internal/parts.list
             * @secure
             */
            partsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/parts.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists a collection of [parts](https://devrev.ai/docs/product/parts).
             *
             * @tags parts
             * @name PartsListPost
             * @request POST:/internal/parts.list
             * @secure
             */
            partsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/parts.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Mutate a part to either promote or merge it.
             *
             * @tags parts
             * @name PartsMutate
             * @request GET:/internal/parts.mutate
             * @secure
             */
            partsMutate: (query, params = {}) => this.request(Object.assign({ path: `/internal/parts.mutate`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Mutate a part to either promote or merge it.
             *
             * @tags parts
             * @name PartsMutatePost
             * @request POST:/internal/parts.mutate
             * @secure
             */
            partsMutatePost: (data, params = {}) => this.request(Object.assign({ path: `/internal/parts.mutate`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists top supporters of a part.
             *
             * @tags parts
             * @name PartsSupportersList
             * @request GET:/internal/parts.supporters.list
             * @secure
             */
            partsSupportersList: (query, params = {}) => this.request(Object.assign({ path: `/internal/parts.supporters.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists top supporters of a part.
             *
             * @tags parts
             * @name PartsSupportersListPost
             * @request POST:/internal/parts.supporters.list
             * @secure
             */
            partsSupportersListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/parts.supporters.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates a [part's](https://devrev.ai/docs/product/parts) information.
             *
             * @tags parts
             * @name PartsUpdate
             * @request POST:/internal/parts.update
             * @secure
             */
            partsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/parts.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Update payment intent object.
             *
             * @tags commerce
             * @name PaymentIntentsUpdate
             * @request POST:/internal/payment-intents.update
             * @secure
             */
            paymentIntentsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/payment-intents.update`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Deletes the payment method from the customer configuration.
             *
             * @tags commerce
             * @name PaymentMethodsDelete
             * @request POST:/internal/payment-methods.delete
             * @secure
             */
            paymentMethodsDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/payment-methods.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Returns the payment method.
             *
             * @tags commerce
             * @name PaymentMethodsGet
             * @request GET:/internal/payment-methods.get
             * @secure
             */
            paymentMethodsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/payment-methods.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Returns the payment method.
             *
             * @tags commerce
             * @name PaymentMethodsGetPost
             * @request POST:/internal/payment-methods.get
             * @secure
             */
            paymentMethodsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/payment-methods.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description List payment methods for a customer.
             *
             * @tags commerce
             * @name PaymentMethodsList
             * @request GET:/internal/payment-methods.list
             * @secure
             */
            paymentMethodsList: (params = {}) => this.request(Object.assign({ path: `/internal/payment-methods.list`, method: 'GET', secure: true, format: 'json' }, params)),
            /**
             * @description List payment methods for a customer.
             *
             * @tags commerce
             * @name PaymentMethodsListPost
             * @request POST:/internal/payment-methods.list
             * @secure
             */
            paymentMethodsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/payment-methods.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Sets the payment method as default in the customer configuration.
             *
             * @tags commerce
             * @name PaymentMethodsSetDefault
             * @request POST:/internal/payment-methods.set-default
             * @secure
             */
            paymentMethodsSetDefault: (data, params = {}) => this.request(Object.assign({ path: `/internal/payment-methods.set-default`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Setup intent initiates the process of saving a payment method details in the customer's configuration. The API returns a client key which is to be used on the front end side to call Stripe to verify and save the user entered payment method details for the customer on Stripe.
             *
             * @tags commerce
             * @name PaymentMethodsSetupIntentCreate
             * @request POST:/internal/payment-methods.setup-intent.create
             * @secure
             */
            paymentMethodsSetupIntentCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/payment-methods.setup-intent.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists the preferences defined for a particular object.
             *
             * @tags preferences
             * @name PreferencesList
             * @request GET:/internal/preferences.list
             * @secure
             */
            preferencesList: (query, params = {}) => this.request(Object.assign({ path: `/internal/preferences.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists the preferences defined for a particular object.
             *
             * @tags preferences
             * @name PreferencesListPost
             * @request POST:/internal/preferences.list
             * @secure
             */
            preferencesListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/preferences.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists the preferences snap kit JSON for a particular object.
             *
             * @tags preferences
             * @name PreferencesSnapKitList
             * @request GET:/internal/preferences.snap-kit.list
             * @secure
             */
            preferencesSnapKitList: (query, params = {}) => this.request(Object.assign({ path: `/internal/preferences.snap-kit.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists the preferences snap kit JSON for a particular object.
             *
             * @tags preferences
             * @name PreferencesSnapKitListPost
             * @request POST:/internal/preferences.snap-kit.list
             * @secure
             */
            preferencesSnapKitListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/preferences.snap-kit.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates the preference for a particular object.
             *
             * @tags preferences
             * @name PreferencesUpdate
             * @request POST:/internal/preferences.update
             * @secure
             */
            preferencesUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/preferences.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a pricing object.
             *
             * @tags commerce
             * @name PricingsCreate
             * @request POST:/internal/pricings.create
             * @secure
             */
            pricingsCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/pricings.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes a pricing object.
             *
             * @tags commerce
             * @name PricingsDelete
             * @request POST:/internal/pricings.delete
             * @secure
             */
            pricingsDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/pricings.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Gets a pricing object.
             *
             * @tags commerce
             * @name PricingsGet
             * @request GET:/internal/pricings.get
             * @secure
             */
            pricingsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/pricings.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a pricing object.
             *
             * @tags commerce
             * @name PricingsGetPost
             * @request POST:/internal/pricings.get
             * @secure
             */
            pricingsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/pricings.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the pricing objects based on the given filters.
             *
             * @tags commerce
             * @name PricingsList
             * @request GET:/internal/pricings.list
             * @secure
             */
            pricingsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/pricings.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the pricing objects based on the given filters.
             *
             * @tags commerce
             * @name PricingsListPost
             * @request POST:/internal/pricings.list
             * @secure
             */
            pricingsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/pricings.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates a pricing object.
             *
             * @tags commerce
             * @name PricingsUpdate
             * @request POST:/internal/pricings.update
             * @secure
             */
            pricingsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/pricings.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description DevRev Profile is a user's personal profile to promote themselves and connect with other professionals. This method returns a successful response if a profile is created with a unique email and display handle. If another login option with same email is used, the existing profile is updated. Otherwise, the method returns conflict response due to already existing profile. Also, the method requires authorization token obtained from DevRev platform through the login workflow.
             *
             * @tags profiles
             * @name ProfilesCreate
             * @request POST:/internal/profiles.create
             * @secure
             */
            profilesCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/profiles.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the profile's public information of a user on the DevRev platform using display-handle. The method returns not-found response if the profile's visibility is private or if it does not exist. Also note that display-handle can also be changed by the user.
             *
             * @tags profiles
             * @name ProfilesGetByHandle
             * @request GET:/internal/profiles.get-by-handle
             */
            profilesGetByHandle: (query, params = {}) => this.request(Object.assign({ path: `/internal/profiles.get-by-handle`, method: 'GET', query: query, format: 'json' }, params)),
            /**
             * @description Gets the profile's public information of a user on the DevRev platform using display-handle. The method returns not-found response if the profile's visibility is private or if it does not exist. Also note that display-handle can also be changed by the user.
             *
             * @tags profiles
             * @name ProfilesGetByHandlePost
             * @request POST:/internal/profiles.get-by-handle
             * @secure
             */
            profilesGetByHandlePost: (data, params = {}) => this.request(Object.assign({ path: `/internal/profiles.get-by-handle`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Checks to ensure that the desired display handle is not already in use. This does not secure the handle, so it is possible that the check would be successful and a subsequent call to create a profile with the checked display handle might fail due to a race condition.
             *
             * @tags profiles
             * @name ProfilesIsDisplayHandleAvailable
             * @request GET:/internal/profiles.is-display-handle-available
             * @secure
             */
            profilesIsDisplayHandleAvailable: (query, params = {}) => this.request(Object.assign({ path: `/internal/profiles.is-display-handle-available`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Checks to ensure that the desired display handle is not already in use. This does not secure the handle, so it is possible that the check would be successful and a subsequent call to create a profile with the checked display handle might fail due to a race condition.
             *
             * @tags profiles
             * @name ProfilesIsDisplayHandleAvailablePost
             * @request POST:/internal/profiles.is-display-handle-available
             * @secure
             */
            profilesIsDisplayHandleAvailablePost: (data, params = {}) => this.request(Object.assign({ path: `/internal/profiles.is-display-handle-available`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the currently logged in user's profile information.
             *
             * @tags profiles
             * @name ProfilesSelf
             * @request GET:/internal/profiles.self
             * @secure
             */
            profilesSelf: (params = {}) => this.request(Object.assign({ path: `/internal/profiles.self`, method: 'GET', secure: true, format: 'json' }, params)),
            /**
             * @description Gets the currently logged in user's profile information.
             *
             * @tags profiles
             * @name ProfilesSelfPost
             * @request POST:/internal/profiles.self
             * @secure
             */
            profilesSelfPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/profiles.self`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes the currently logged in user profile from the DevRev platform.
             *
             * @tags profiles
             * @name ProfilesSelfDelete
             * @request POST:/internal/profiles.self.delete
             * @secure
             */
            profilesSelfDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/profiles.self.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates the currently logged-in user's profile information. Beware, the links to your profile page will return a not-found error on changing your display-handle. Also, your old display-handle becomes available for anyone else to claim.
             *
             * @tags profiles
             * @name ProfilesSelfUpdate
             * @request POST:/internal/profiles.self.update
             * @secure
             */
            profilesSelfUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/profiles.self.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Registers a push device.
             *
             * @tags notifications
             * @name PushDevicesRegister
             * @request POST:/internal/push-devices.register
             * @secure
             */
            pushDevicesRegister: (data, params = {}) => this.request(Object.assign({ path: `/internal/push-devices.register`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Unregisters a push device.
             *
             * @tags notifications
             * @name PushDevicesUnregister
             * @request POST:/internal/push-devices.unregister
             * @secure
             */
            pushDevicesUnregister: (data, params = {}) => this.request(Object.assign({ path: `/internal/push-devices.unregister`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Updates the timestamp on a device.
             *
             * @tags notifications
             * @name PushDevicesUpdate
             * @request POST:/internal/push-devices.update
             * @secure
             */
            pushDevicesUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/push-devices.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Adds a reaction to an object.
             *
             * @tags timeline-entries, works
             * @name ReactionsAdd
             * @request POST:/internal/reactions.add
             * @secure
             */
            reactionsAdd: (data, params = {}) => this.request(Object.assign({ path: `/internal/reactions.add`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description List the reactions for an object.
             *
             * @tags timeline-entries, works
             * @name ReactionsList
             * @request GET:/internal/reactions.list
             * @secure
             */
            reactionsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/reactions.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description List the reactions for an object.
             *
             * @tags timeline-entries, works
             * @name ReactionsListPost
             * @request POST:/internal/reactions.list
             * @secure
             */
            reactionsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/reactions.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Removes a reaction from an object.
             *
             * @tags timeline-entries, works
             * @name ReactionsRemove
             * @request POST:/internal/reactions.remove
             * @secure
             */
            reactionsRemove: (data, params = {}) => this.request(Object.assign({ path: `/internal/reactions.remove`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists suggestions for given input fields.
             *
             * @tags recommendations
             * @name AutoSuggest
             * @request POST:/internal/recommendations.autosuggest
             * @secure
             */
            autoSuggest: (data, params = {}) => this.request(Object.assign({ path: `/internal/recommendations.autosuggest`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists link target recommendations.
             *
             * @tags recommendations
             * @name LinkTarget
             * @request POST:/internal/recommendations.link.target
             * @secure
             */
            linkTarget: (data, params = {}) => this.request(Object.assign({ path: `/internal/recommendations.link.target`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists personalized work items for a user.
             *
             * @tags recommendations
             * @name PersonalizedList
             * @request POST:/internal/recommendations.personalized.list
             * @secure
             */
            personalizedList: (data, params = {}) => this.request(Object.assign({ path: `/internal/recommendations.personalized.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Typeahead recommendation.
             *
             * @tags recommendations
             * @name TypeAhead
             * @request POST:/internal/recommendations.typeahead
             * @secure
             */
            typeAhead: (data, params = {}) => this.request(Object.assign({ path: `/internal/recommendations.typeahead`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists similar work items.
             *
             * @tags recommendations
             * @name WorkDeflect
             * @request POST:/internal/recommendations.works.deflect
             * @secure
             */
            workDeflect: (data, params = {}) => this.request(Object.assign({ path: `/internal/recommendations.works.deflect`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets a Rev org's commerce details.
             *
             * @tags commerce
             * @name RevOrgsCommerceDetailsGet
             * @request GET:/internal/rev-orgs.commerce-details.get
             * @secure
             */
            revOrgsCommerceDetailsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/rev-orgs.commerce-details.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a Rev org's commerce details.
             *
             * @tags commerce
             * @name RevOrgsCommerceDetailsGetPost
             * @request POST:/internal/rev-orgs.commerce-details.get
             * @secure
             */
            revOrgsCommerceDetailsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/rev-orgs.commerce-details.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates a Rev org's commerce details.
             *
             * @tags commerce
             * @name RevOrgsCommerceDetailsUpdate
             * @request POST:/internal/rev-orgs.commerce-details.update
             * @secure
             */
            revOrgsCommerceDetailsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/rev-orgs.commerce-details.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: akanksha.deswal@devrev.ai ### Gets the count of Rev organizations matching given filter.
             *
             * @tags rev-orgs
             * @name RevOrgsCount
             * @request GET:/internal/rev-orgs.count
             * @secure
             */
            revOrgsCount: (query, params = {}) => this.request(Object.assign({ path: `/internal/rev-orgs.count`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the count of Rev organizations matching given filter.
             *
             * @tags rev-orgs
             * @name RevOrgsCountPost
             * @request POST:/internal/rev-orgs.count
             * @secure
             */
            revOrgsCountPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/rev-orgs.count`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a Rev organization in the authenticated user's Dev organization.
             *
             * @tags rev-orgs
             * @name RevOrgsCreate
             * @request POST:/internal/rev-orgs.create
             * @secure
             */
            revOrgsCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/rev-orgs.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates bulk Rev organizations for the authenticated user's Dev organization.
             *
             * @tags rev-orgs
             * @name RevOrgsBulkCreate
             * @request POST:/internal/rev-orgs.create.bulk.csv
             * @secure
             */
            revOrgsBulkCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/rev-orgs.create.bulk.csv`, method: 'POST', body: data, secure: true, type: ContentType.FormData, format: 'json' }, params)),
            /**
             * @description Deletes the Rev organization.
             *
             * @tags rev-orgs
             * @name RevOrgsDelete
             * @request POST:/internal/rev-orgs.delete
             * @secure
             */
            revOrgsDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/rev-orgs.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Exports a list of revorgs.
             *
             * @tags rev-orgs
             * @name RevOrgsExport
             * @request POST:/internal/rev-orgs.export
             * @secure
             */
            revOrgsExport: (data, params = {}) => this.request(Object.assign({ path: `/internal/rev-orgs.export`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: akanksha.deswal@devrev.ai ### Retrieves the Rev organization's information.
             *
             * @tags rev-orgs
             * @name RevOrgsGet
             * @request GET:/internal/rev-orgs.get
             * @secure
             */
            revOrgsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/rev-orgs.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Retrieves the Rev organization's information.
             *
             * @tags rev-orgs
             * @name RevOrgsGetPost
             * @request POST:/internal/rev-orgs.get
             * @secure
             */
            revOrgsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/rev-orgs.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: akanksha.deswal@devrev.ai ### Lists collections of Rev organizations by groups.
             *
             * @tags rev-orgs
             * @name RevOrgsGroup
             * @request GET:/internal/rev-orgs.group
             * @secure
             */
            revOrgsGroup: (query, params = {}) => this.request(Object.assign({ path: `/internal/rev-orgs.group`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists collections of Rev organizations by groups.
             *
             * @tags rev-orgs
             * @name RevOrgsGroupPost
             * @request POST:/internal/rev-orgs.group
             * @secure
             */
            revOrgsGroupPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/rev-orgs.group`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: akanksha.deswal@devrev.ai ### Gets the list of Rev organizations' information belonging to the authenticated user's Dev Organization which the user is also authorized to access.
             *
             * @tags rev-orgs
             * @name RevOrgsList
             * @request GET:/internal/rev-orgs.list
             * @secure
             */
            revOrgsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/rev-orgs.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the list of Rev organizations' information belonging to the authenticated user's Dev Organization which the user is also authorized to access.
             *
             * @tags rev-orgs
             * @name RevOrgsListPost
             * @request POST:/internal/rev-orgs.list
             * @secure
             */
            revOrgsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/rev-orgs.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates the Rev organization's information.
             *
             * @tags rev-orgs
             * @name RevOrgsUpdate
             * @request POST:/internal/rev-orgs.update
             * @secure
             */
            revOrgsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/rev-orgs.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the list of Rev users' information across all Rev organizations in user's Dev organization.
             *
             * @tags rev-users
             * @name RevUsersListAll
             * @request GET:/internal/rev-users.all.list
             * @secure
             */
            revUsersListAll: (query, params = {}) => this.request(Object.assign({ path: `/internal/rev-users.all.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the list of Rev users' information across all Rev organizations in user's Dev organization.
             *
             * @tags rev-users
             * @name RevUsersListAllPost
             * @request POST:/internal/rev-users.all.list
             * @secure
             */
            revUsersListAllPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/rev-users.all.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: akanksha.deswal@devrev.ai ### Gets the count of Rev users matching given filter.
             *
             * @tags rev-users
             * @name RevUsersCount
             * @request GET:/internal/rev-users.count
             * @secure
             */
            revUsersCount: (query, params = {}) => this.request(Object.assign({ path: `/internal/rev-users.count`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the count of Rev users matching given filter.
             *
             * @tags rev-users
             * @name RevUsersCountPost
             * @request POST:/internal/rev-users.count
             * @secure
             */
            revUsersCountPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/rev-users.count`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a Rev user for a Rev organization. Rev user can be a customer or a lead of an organization.
             *
             * @tags rev-users
             * @name RevUsersCreate
             * @request POST:/internal/rev-users.create
             * @secure
             */
            revUsersCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/rev-users.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes a Rev user.
             *
             * @tags rev-users
             * @name RevUsersDelete
             * @request POST:/internal/rev-users.delete
             * @secure
             */
            revUsersDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/rev-users.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Returns the Rev user of a Rev organization by its ID.
             *
             * @tags rev-users
             * @name RevUsersGet
             * @request GET:/internal/rev-users.get
             * @secure
             */
            revUsersGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/rev-users.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Returns the Rev user of a Rev organization by its ID.
             *
             * @tags rev-users
             * @name RevUsersGetPost
             * @request POST:/internal/rev-users.get
             * @secure
             */
            revUsersGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/rev-users.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists collections of Rev users by groups.
             *
             * @tags rev-users
             * @name RevUsersGroup
             * @request GET:/internal/rev-users.group
             * @secure
             */
            revUsersGroup: (query, params = {}) => this.request(Object.assign({ path: `/internal/rev-users.group`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists collections of Rev users by groups.
             *
             * @tags rev-users
             * @name RevUsersGroupPost
             * @request POST:/internal/rev-users.group
             * @secure
             */
            revUsersGroupPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/rev-users.group`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Returns a list of all Rev Users belonging to the authenticated user's Dev Organization.
             *
             * @tags rev-users
             * @name RevUsersList
             * @request GET:/internal/rev-users.list
             * @secure
             */
            revUsersList: (query, params = {}) => this.request(Object.assign({ path: `/internal/rev-users.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Returns a list of all Rev Users belonging to the authenticated user's Dev Organization.
             *
             * @tags rev-users
             * @name RevUsersListPost
             * @request POST:/internal/rev-users.list
             * @secure
             */
            revUsersListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/rev-users.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the authenticated Rev user's information.
             *
             * @tags rev-users
             * @name RevUsersSelfGet
             * @request GET:/internal/rev-users.self.get
             * @secure
             */
            revUsersSelfGet: (params = {}) => this.request(Object.assign({ path: `/internal/rev-users.self.get`, method: 'GET', secure: true, format: 'json' }, params)),
            /**
             * @description Gets the authenticated Rev user's information.
             *
             * @tags rev-users
             * @name RevUsersSelfGetPost
             * @request POST:/internal/rev-users.self.get
             * @secure
             */
            revUsersSelfGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/rev-users.self.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates the authenticated Rev user.
             *
             * @tags rev-users
             * @name RevUsersSelfUpdate
             * @request POST:/internal/rev-users.self.update
             * @secure
             */
            revUsersSelfUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/rev-users.self.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates a Rev user.
             *
             * @tags rev-users
             * @name RevUsersUpdate
             * @request POST:/internal/rev-users.update
             * @secure
             */
            revUsersUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/rev-users.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the reward transactions based on the given filters.
             *
             * @tags commerce
             * @name RewardTransactionsList
             * @request GET:/internal/reward.transactions.list
             * @secure
             */
            rewardTransactionsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/reward.transactions.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the reward transactions based on the given filters.
             *
             * @tags commerce
             * @name RewardTransactionsListPost
             * @request POST:/internal/reward.transactions.list
             * @secure
             */
            rewardTransactionsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/reward.transactions.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a reward.
             *
             * @tags commerce
             * @name RewardsCreate
             * @request POST:/internal/rewards.create
             * @secure
             */
            rewardsCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/rewards.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets a reward.
             *
             * @tags commerce
             * @name RewardsGet
             * @request GET:/internal/rewards.get
             * @secure
             */
            rewardsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/rewards.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a reward.
             *
             * @tags commerce
             * @name RewardsGetPost
             * @request POST:/internal/rewards.get
             * @secure
             */
            rewardsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/rewards.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the rewards based on the given filters.
             *
             * @tags commerce
             * @name RewardsList
             * @request GET:/internal/rewards.list
             * @secure
             */
            rewardsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/rewards.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the rewards based on the given filters.
             *
             * @tags commerce
             * @name RewardsListPost
             * @request POST:/internal/rewards.list
             * @secure
             */
            rewardsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/rewards.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Transfers rewards from a rev user to its own rev org or to a rev user of the same rev org.
             *
             * @tags commerce
             * @name RewardsTransfer
             * @request POST:/internal/rewards.transfer
             * @secure
             */
            rewardsTransfer: (data, params = {}) => this.request(Object.assign({ path: `/internal/rewards.transfer`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Converts rewards to credits for a rev org.
             *
             * @tags commerce
             * @name RewardsTransferToCredits
             * @request POST:/internal/rewards.transfer-to-credits
             * @secure
             */
            rewardsTransferToCredits: (data, params = {}) => this.request(Object.assign({ path: `/internal/rewards.transfer-to-credits`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a role.
             *
             * @tags roles
             * @name RolesCreate
             * @request POST:/internal/roles.create
             * @secure
             */
            rolesCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/roles.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes the requested role.
             *
             * @tags roles
             * @name RolesDelete
             * @request POST:/internal/roles.delete
             * @secure
             */
            rolesDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/roles.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the requested role's information.
             *
             * @tags roles
             * @name RolesGet
             * @request GET:/internal/roles.get
             * @secure
             */
            rolesGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/roles.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the requested role's information.
             *
             * @tags roles
             * @name RolesGetPost
             * @request POST:/internal/roles.get
             * @secure
             */
            rolesGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/roles.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists the available roles.
             *
             * @tags roles
             * @name RolesList
             * @request GET:/internal/roles.list
             * @secure
             */
            rolesList: (params = {}) => this.request(Object.assign({ path: `/internal/roles.list`, method: 'GET', secure: true, format: 'json' }, params)),
            /**
             * @description Lists the available roles.
             *
             * @tags roles
             * @name RolesListPost
             * @request POST:/internal/roles.list
             * @secure
             */
            rolesListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/roles.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a room and returns the room details.
             *
             * @tags rooms
             * @name RoomsCreate
             * @request POST:/internal/rooms.create
             * @secure
             */
            roomsCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/rooms.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Informs a room of a user update.
             *
             * @tags rooms
             * @name RoomsInform
             * @request POST:/internal/rooms.inform
             * @secure
             */
            roomsInform: (data, params = {}) => this.request(Object.assign({ path: `/internal/rooms.inform`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the aggregated schema.
             *
             * @tags schemas
             * @name AggregatedSchemaGet
             * @request GET:/internal/schemas.aggregated.get
             * @secure
             */
            aggregatedSchemaGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/schemas.aggregated.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the aggregated schema.
             *
             * @tags schemas
             * @name AggregatedSchemaGetPost
             * @request POST:/internal/schemas.aggregated.get
             * @secure
             */
            aggregatedSchemaGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/schemas.aggregated.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets a custom schema fragment.
             *
             * @tags schemas
             * @name CustomSchemaFragmentsGet
             * @request GET:/internal/schemas.custom.get
             * @secure
             */
            customSchemaFragmentsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/schemas.custom.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a custom schema fragment.
             *
             * @tags schemas
             * @name CustomSchemaFragmentsGetPost
             * @request POST:/internal/schemas.custom.get
             * @secure
             */
            customSchemaFragmentsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/schemas.custom.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists custom schema fragments.
             *
             * @tags schemas
             * @name CustomSchemaFragmentsList
             * @request GET:/internal/schemas.custom.list
             * @secure
             */
            customSchemaFragmentsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/schemas.custom.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists custom schema fragments.
             *
             * @tags schemas
             * @name CustomSchemaFragmentsListPost
             * @request POST:/internal/schemas.custom.list
             * @secure
             */
            customSchemaFragmentsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/schemas.custom.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates or updates a custom schema fragment.
             *
             * @tags schemas
             * @name CustomSchemaFragmentsSet
             * @request POST:/internal/schemas.custom.set
             * @secure
             */
            customSchemaFragmentsSet: (data, params = {}) => this.request(Object.assign({ path: `/internal/schemas.custom.set`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets a stock schema fragment.
             *
             * @tags schemas
             * @name StockSchemaFragmentsGet
             * @request GET:/internal/schemas.stock.get
             * @secure
             */
            stockSchemaFragmentsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/schemas.stock.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a stock schema fragment.
             *
             * @tags schemas
             * @name StockSchemaFragmentsGetPost
             * @request POST:/internal/schemas.stock.get
             * @secure
             */
            stockSchemaFragmentsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/schemas.stock.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists stock schema fragments.
             *
             * @tags schemas
             * @name StockSchemaFragmentsList
             * @request GET:/internal/schemas.stock.list
             * @secure
             */
            stockSchemaFragmentsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/schemas.stock.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists stock schema fragments.
             *
             * @tags schemas
             * @name StockSchemaFragmentsListPost
             * @request POST:/internal/schemas.stock.list
             * @secure
             */
            stockSchemaFragmentsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/schemas.stock.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists subtypes.
             *
             * @tags schemas
             * @name SubtypesList
             * @request GET:/internal/schemas.subtypes.list
             * @secure
             */
            subtypesList: (query, params = {}) => this.request(Object.assign({ path: `/internal/schemas.subtypes.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists subtypes.
             *
             * @tags schemas
             * @name SubtypesListPost
             * @request POST:/internal/schemas.subtypes.list
             * @secure
             */
            subtypesListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/schemas.subtypes.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Searches for records based on a given query.
             *
             * @tags search
             * @name SearchCore
             * @request GET:/internal/search.core
             * @secure
             */
            searchCore: (query, params = {}) => this.request(Object.assign({ path: `/internal/search.core`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Searches for records based on a given query.
             *
             * @tags search
             * @name SearchCorePost
             * @request POST:/internal/search.core
             * @secure
             */
            searchCorePost: (data, params = {}) => this.request(Object.assign({ path: `/internal/search.core`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Typeahead search.
             *
             * @tags search
             * @name SearchTypeahead
             * @request GET:/internal/search.typeahead
             * @secure
             */
            searchTypeahead: (query, params = {}) => this.request(Object.assign({ path: `/internal/search.typeahead`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Typeahead search.
             *
             * @tags search
             * @name SearchTypeaheadPost
             * @request POST:/internal/search.typeahead
             * @secure
             */
            searchTypeaheadPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/search.typeahead`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a service account.
             *
             * @tags service-accounts
             * @name ServiceAccountsCreate
             * @request POST:/internal/service-accounts.create
             * @secure
             */
            serviceAccountsCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/service-accounts.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes a service account.
             *
             * @tags service-accounts
             * @name ServiceAccountsDelete
             * @request POST:/internal/service-accounts.delete
             * @secure
             */
            serviceAccountsDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/service-accounts.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: prabath.siriwardena@devrev.ai ### Gets a service account.
             *
             * @tags service-accounts
             * @name ServiceAccountsGet
             * @request GET:/internal/service-accounts.get
             * @secure
             */
            serviceAccountsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/service-accounts.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a service account.
             *
             * @tags service-accounts
             * @name ServiceAccountsGetPost
             * @request POST:/internal/service-accounts.get
             * @secure
             */
            serviceAccountsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/service-accounts.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a keyring under the corresponding service account.
             *
             * @tags service-accounts
             * @name ServiceAccountsKeyringsCreate
             * @request POST:/internal/service-accounts.keyrings.create
             * @secure
             */
            serviceAccountsKeyringsCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/service-accounts.keyrings.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes a keyring under the corresponding service account.
             *
             * @tags service-accounts
             * @name ServiceAccountsKeyringsDelete
             * @request POST:/internal/service-accounts.keyrings.delete
             * @secure
             */
            serviceAccountsKeyringsDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/service-accounts.keyrings.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: prabath.siriwardena@devrev.ai ### Gets a keyring under the corresponding service account.
             *
             * @tags service-accounts
             * @name ServiceAccountsKeyringsGet
             * @request GET:/internal/service-accounts.keyrings.get
             * @secure
             */
            serviceAccountsKeyringsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/service-accounts.keyrings.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a keyring under the corresponding service account.
             *
             * @tags service-accounts
             * @name ServiceAccountsKeyringsGetPost
             * @request POST:/internal/service-accounts.keyrings.get
             * @secure
             */
            serviceAccountsKeyringsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/service-accounts.keyrings.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates a keyring under the corresponding service account.
             *
             * @tags service-accounts
             * @name ServiceAccountsKeyringsUpdate
             * @request POST:/internal/service-accounts.keyrings.update
             * @secure
             */
            serviceAccountsKeyringsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/service-accounts.keyrings.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: prabath.siriwardena@devrev.ai ### Lists the service accounts.
             *
             * @tags service-accounts
             * @name ServiceAccountsList
             * @request GET:/internal/service-accounts.list
             * @secure
             */
            serviceAccountsList: (params = {}) => this.request(Object.assign({ path: `/internal/service-accounts.list`, method: 'GET', secure: true, format: 'json' }, params)),
            /**
             * @description Lists the service accounts.
             *
             * @tags service-accounts
             * @name ServiceAccountsListPost
             * @request POST:/internal/service-accounts.list
             * @secure
             */
            serviceAccountsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/service-accounts.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates a service account.
             *
             * @tags service-accounts
             * @name ServiceAccountsUpdate
             * @request POST:/internal/service-accounts.update
             * @secure
             */
            serviceAccountsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/service-accounts.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Cancels a service plan.
             *
             * @tags commerce
             * @name ServicePlansCancel
             * @request POST:/internal/service-plans.cancel
             * @secure
             */
            servicePlansCancel: (data, params = {}) => this.request(Object.assign({ path: `/internal/service-plans.cancel`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Creates a service plan object.
             *
             * @tags commerce
             * @name ServicePlansCreate
             * @request POST:/internal/service-plans.create
             * @secure
             */
            servicePlansCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/service-plans.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets a service plan object.
             *
             * @tags commerce
             * @name ServicePlansGet
             * @request GET:/internal/service-plans.get
             * @secure
             */
            servicePlansGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/service-plans.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a service plan object.
             *
             * @tags commerce
             * @name ServicePlansGetPost
             * @request POST:/internal/service-plans.get
             * @secure
             */
            servicePlansGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/service-plans.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets compatible skus that can be purchased with the current configuration of the service plan.
             *
             * @tags commerce
             * @name ServicePlansGetCompatibleSkus
             * @request GET:/internal/service-plans.get-compatible-skus
             * @secure
             */
            servicePlansGetCompatibleSkus: (query, params = {}) => this.request(Object.assign({ path: `/internal/service-plans.get-compatible-skus`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets compatible skus that can be purchased with the current configuration of the service plan.
             *
             * @tags commerce
             * @name ServicePlansGetCompatibleSkusPost
             * @request POST:/internal/service-plans.get-compatible-skus
             * @secure
             */
            servicePlansGetCompatibleSkusPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/service-plans.get-compatible-skus`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the service plan objects based on the given filters.
             *
             * @tags commerce
             * @name ServicePlansList
             * @request GET:/internal/service-plans.list
             * @secure
             */
            servicePlansList: (query, params = {}) => this.request(Object.assign({ path: `/internal/service-plans.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the service plan objects based on the given filters.
             *
             * @tags commerce
             * @name ServicePlansListPost
             * @request POST:/internal/service-plans.list
             * @secure
             */
            servicePlansListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/service-plans.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes pending update for a service plan object.
             *
             * @tags commerce
             * @name ServicePlansPendingUpdateCancel
             * @request POST:/internal/service-plans.pending-update.cancel
             * @secure
             */
            servicePlansPendingUpdateCancel: (data, params = {}) => this.request(Object.assign({ path: `/internal/service-plans.pending-update.cancel`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates a service plan object.
             *
             * @tags commerce
             * @name ServicePlansUpdate
             * @request POST:/internal/service-plans.update
             * @secure
             */
            servicePlansUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/service-plans.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a sku rule.
             *
             * @tags commerce
             * @name SkuRulesCreate
             * @request POST:/internal/skurules.create
             * @secure
             */
            skuRulesCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/skurules.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes a sku rule.
             *
             * @tags commerce
             * @name SkuRulesDelete
             * @request POST:/internal/skurules.delete
             * @secure
             */
            skuRulesDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/skurules.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Gets a sku rule.
             *
             * @tags commerce
             * @name SkuRulesGet
             * @request GET:/internal/skurules.get
             * @secure
             */
            skuRulesGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/skurules.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a sku rule.
             *
             * @tags commerce
             * @name SkuRulesGetPost
             * @request POST:/internal/skurules.get
             * @secure
             */
            skuRulesGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/skurules.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the sku rules based on the given filters.
             *
             * @tags commerce
             * @name SkuRulesList
             * @request GET:/internal/skurules.list
             * @secure
             */
            skuRulesList: (query, params = {}) => this.request(Object.assign({ path: `/internal/skurules.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the sku rules based on the given filters.
             *
             * @tags commerce
             * @name SkuRulesListPost
             * @request POST:/internal/skurules.list
             * @secure
             */
            skuRulesListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/skurules.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates a sku rule.
             *
             * @tags commerce
             * @name SkuRulesUpdate
             * @request POST:/internal/skurules.update
             * @secure
             */
            skuRulesUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/skurules.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a SKU.
             *
             * @tags commerce
             * @name SkusCreate
             * @request POST:/internal/skus.create
             * @secure
             */
            skusCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/skus.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes a SKU.
             *
             * @tags commerce
             * @name SkusDelete
             * @request POST:/internal/skus.delete
             * @secure
             */
            skusDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/skus.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Gets a SKU.
             *
             * @tags commerce
             * @name SkusGet
             * @request GET:/internal/skus.get
             * @secure
             */
            skusGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/skus.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a SKU.
             *
             * @tags commerce
             * @name SkusGetPost
             * @request POST:/internal/skus.get
             * @secure
             */
            skusGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/skus.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the SKUs based on the given filters.
             *
             * @tags commerce
             * @name SkusList
             * @request GET:/internal/skus.list
             * @secure
             */
            skusList: (query, params = {}) => this.request(Object.assign({ path: `/internal/skus.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the SKUs based on the given filters.
             *
             * @tags commerce
             * @name SkusListPost
             * @request POST:/internal/skus.list
             * @secure
             */
            skusListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/skus.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates a SKU.
             *
             * @tags commerce
             * @name SkusUpdate
             * @request POST:/internal/skus.update
             * @secure
             */
            skusUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/skus.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Versions a SKU.
             *
             * @tags commerce
             * @name SkusVersion
             * @request POST:/internal/skus.version
             * @secure
             */
            skusVersion: (data, params = {}) => this.request(Object.assign({ path: `/internal/skus.version`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description  Assigns the SLA to a set of Rev organizations.
             *
             * @tags slas
             * @name SlasAssign
             * @request POST:/internal/slas.assign
             * @secure
             */
            slasAssign: (data, params = {}) => this.request(Object.assign({ path: `/internal/slas.assign`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates an SLA in draft status.
             *
             * @tags slas
             * @name SlasCreate
             * @request POST:/internal/slas.create
             * @secure
             */
            slasCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/slas.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: lorinc.body@devrev.ai ### Gets an SLA.
             *
             * @tags slas
             * @name SlasGet
             * @request GET:/internal/slas.get
             * @secure
             */
            slasGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/slas.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets an SLA.
             *
             * @tags slas
             * @name SlasGetPost
             * @request POST:/internal/slas.get
             * @secure
             */
            slasGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/slas.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Changes the status of an SLA.
             *
             * @tags slas
             * @name SlasTransition
             * @request POST:/internal/slas.transition
             * @secure
             */
            slasTransition: (data, params = {}) => this.request(Object.assign({ path: `/internal/slas.transition`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a snap-in package.
             *
             * @tags snap-in-packages
             * @name SnapInPackagesCreate
             * @request POST:/internal/snap-in-packages.create
             * @secure
             */
            snapInPackagesCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/snap-in-packages.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes a snap-in package.
             *
             * @tags snap-in-packages
             * @name SnapInPackagesDelete
             * @request POST:/internal/snap-in-packages.delete
             * @secure
             */
            snapInPackagesDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/snap-in-packages.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description ### Owner: peter.marinsek@devrev.ai ### Gets a snap-in package.
             *
             * @tags snap-in-packages
             * @name SnapInPackagesGet
             * @request GET:/internal/snap-in-packages.get
             * @secure
             */
            snapInPackagesGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/snap-in-packages.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a snap-in package.
             *
             * @tags snap-in-packages
             * @name SnapInPackagesGetPost
             * @request POST:/internal/snap-in-packages.get
             * @secure
             */
            snapInPackagesGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/snap-in-packages.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: peter.marinsek@devrev.ai ### Lists snap-in packages for a Dev organization.
             *
             * @tags snap-in-packages
             * @name SnapInPackagesList
             * @request GET:/internal/snap-in-packages.list
             * @secure
             */
            snapInPackagesList: (query, params = {}) => this.request(Object.assign({ path: `/internal/snap-in-packages.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists snap-in packages for a Dev organization.
             *
             * @tags snap-in-packages
             * @name SnapInPackagesListPost
             * @request POST:/internal/snap-in-packages.list
             * @secure
             */
            snapInPackagesListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/snap-in-packages.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a snap-in version.
             *
             * @tags snap-in-versions
             * @name SnapInVersionsCreate
             * @request POST:/internal/snap-in-versions.create
             * @secure
             */
            snapInVersionsCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/snap-in-versions.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes a snap-in version.
             *
             * @tags snap-in-versions
             * @name SnapInVersionsDelete
             * @request POST:/internal/snap-in-versions.delete
             * @secure
             */
            snapInVersionsDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/snap-in-versions.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description ### Owner: peter.marinsek@devrev.ai ### Gets a snap-in version.
             *
             * @tags snap-in-versions
             * @name SnapInVersionsGet
             * @request GET:/internal/snap-in-versions.get
             * @secure
             */
            snapInVersionsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/snap-in-versions.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a snap-in version.
             *
             * @tags snap-in-versions
             * @name SnapInVersionsGetPost
             * @request POST:/internal/snap-in-versions.get
             * @secure
             */
            snapInVersionsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/snap-in-versions.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes a SnapIn.
             *
             * @tags snap-ins
             * @name SnapInsDelete
             * @request POST:/internal/snap-ins.delete
             * @secure
             */
            snapInsDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/snap-ins.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Deploys a SnapIn.
             *
             * @tags snap-ins
             * @name SnapInsDeploy
             * @request POST:/internal/snap-ins.deploy
             * @secure
             */
            snapInsDeploy: (data, params = {}) => this.request(Object.assign({ path: `/internal/snap-ins.deploy`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a draft SnapIn from given SnapIn version.
             *
             * @tags snap-ins
             * @name SnapInsDraftCreate
             * @request POST:/internal/snap-ins.draft.create
             * @secure
             */
            snapInsDraftCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/snap-ins.draft.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: harpinder.singh@devrev.ai ### Gets a SnapIn.
             *
             * @tags snap-ins
             * @name SnapInsGet
             * @request GET:/internal/snap-ins.get
             * @secure
             */
            snapInsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/snap-ins.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a SnapIn.
             *
             * @tags snap-ins
             * @name SnapInsGetPost
             * @request POST:/internal/snap-ins.get
             * @secure
             */
            snapInsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/snap-ins.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: harpinder.singh@devrev.ai ### Lists snap-ins for a Dev organization.
             *
             * @tags snap-ins
             * @name SnapInsList
             * @request GET:/internal/snap-ins.list
             * @secure
             */
            snapInsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/snap-ins.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists snap-ins for a Dev organization.
             *
             * @tags snap-ins
             * @name SnapInsListPost
             * @request POST:/internal/snap-ins.list
             * @secure
             */
            snapInsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/snap-ins.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates a SnapIn.
             *
             * @tags snap-ins
             * @name SnapInsUpdate
             * @request POST:/internal/snap-ins.update
             * @secure
             */
            snapInsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/snap-ins.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Executes snap kit actions.
             *
             * @name ExecuteSnapKitAction
             * @request POST:/internal/snap-kit-action.execute
             * @secure
             */
            executeSnapKitAction: (data, params = {}) => this.request(Object.assign({ path: `/internal/snap-kit-action.execute`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: harpinder.singh@devrev.ai ### Lists snaps for a Dev organization.
             *
             * @tags flows, snap-ins
             * @name SnapsList
             * @request GET:/internal/snaps.list
             * @secure
             */
            snapsList: (params = {}) => this.request(Object.assign({ path: `/internal/snaps.list`, method: 'GET', secure: true, format: 'json' }, params)),
            /**
             * @description Lists snaps for a Dev organization.
             *
             * @tags flows, snap-ins
             * @name SnapsListPost
             * @request POST:/internal/snaps.list
             * @secure
             */
            snapsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/snaps.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Connects to an open socket.
             *
             * @tags sockets
             * @name SocketsConnect
             * @request POST:/internal/sockets.connect
             * @secure
             */
            socketsConnect: (data, params = {}) => this.request(Object.assign({ path: `/internal/sockets.connect`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Opens a new socket.
             *
             * @tags sockets
             * @name SocketsOpen
             * @request POST:/internal/sockets.open
             * @secure
             */
            socketsOpen: (data, params = {}) => this.request(Object.assign({ path: `/internal/sockets.open`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the requested user's information.
             *
             * @tags sys-users
             * @name SysUsersGet
             * @request GET:/internal/sys-users.get
             * @secure
             */
            sysUsersGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/sys-users.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the requested user's information.
             *
             * @tags sys-users
             * @name SysUsersGetPost
             * @request POST:/internal/sys-users.get
             * @secure
             */
            sysUsersGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/sys-users.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the list of system users in the user's Dev organization.
             *
             * @tags sys-users
             * @name SysUsersList
             * @request GET:/internal/sys-users.list
             * @secure
             */
            sysUsersList: (query, params = {}) => this.request(Object.assign({ path: `/internal/sys-users.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the list of system users in the user's Dev organization.
             *
             * @tags sys-users
             * @name SysUsersListPost
             * @request POST:/internal/sys-users.list
             * @secure
             */
            sysUsersListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/sys-users.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates the Sys user.
             *
             * @tags sys-users
             * @name SysUsersUpdate
             * @request POST:/internal/sys-users.update
             * @secure
             */
            sysUsersUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/sys-users.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a new tag, which is used to create associations between objects and a logical concept denoted by the tag's name.
             *
             * @tags tags
             * @name TagsCreate
             * @request POST:/internal/tags.create
             * @secure
             */
            tagsCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/tags.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes a tag.
             *
             * @tags tags
             * @name TagsDelete
             * @request POST:/internal/tags.delete
             * @secure
             */
            tagsDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/tags.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets a tag's information.
             *
             * @tags tags
             * @name TagsGet
             * @request GET:/internal/tags.get
             * @secure
             */
            tagsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/tags.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a tag's information.
             *
             * @tags tags
             * @name TagsGetPost
             * @request POST:/internal/tags.get
             * @secure
             */
            tagsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/tags.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists the available tags.
             *
             * @tags tags
             * @name TagsList
             * @request GET:/internal/tags.list
             * @secure
             */
            tagsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/tags.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists the available tags.
             *
             * @tags tags
             * @name TagsListPost
             * @request POST:/internal/tags.list
             * @secure
             */
            tagsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/tags.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates a tag's information.
             *
             * @tags tags
             * @name TagsUpdate
             * @request POST:/internal/tags.update
             * @secure
             */
            tagsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/tags.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a new entry on an object's timeline.
             *
             * @tags timeline-entries
             * @name TimelineEntriesCreate
             * @request POST:/internal/timeline-entries.create
             * @secure
             */
            timelineEntriesCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/timeline-entries.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes an entry from an object's timeline.
             *
             * @tags timeline-entries
             * @name TimelineEntriesDelete
             * @request POST:/internal/timeline-entries.delete
             * @secure
             */
            timelineEntriesDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/timeline-entries.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets an entry on an object's timeline.
             *
             * @tags timeline-entries
             * @name TimelineEntriesGet
             * @request GET:/internal/timeline-entries.get
             * @secure
             */
            timelineEntriesGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/timeline-entries.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets an entry on an object's timeline.
             *
             * @tags timeline-entries
             * @name TimelineEntriesGetPost
             * @request POST:/internal/timeline-entries.get
             * @secure
             */
            timelineEntriesGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/timeline-entries.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists the timeline entries for an object.
             *
             * @tags timeline-entries
             * @name TimelineEntriesList
             * @request GET:/internal/timeline-entries.list
             * @secure
             */
            timelineEntriesList: (query, params = {}) => this.request(Object.assign({ path: `/internal/timeline-entries.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists the timeline entries for an object.
             *
             * @tags timeline-entries
             * @name TimelineEntriesListPost
             * @request POST:/internal/timeline-entries.list
             * @secure
             */
            timelineEntriesListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/timeline-entries.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates an entry on an object's timeline.
             *
             * @tags timeline-entries
             * @name TimelineEntriesUpdate
             * @request POST:/internal/timeline-entries.update
             * @secure
             */
            timelineEntriesUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/timeline-entries.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a comment on an object.
             *
             * @tags timeline-entries
             * @name TimelineCommentsCreate
             * @request POST:/internal/timeline.comments.create
             * @secure
             */
            timelineCommentsCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/timeline.comments.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets an entry on an object's timeline.
             *
             * @tags timeline-entries
             * @name OldTimelineEntriesGet
             * @request GET:/internal/timeline.entries.get
             * @secure
             */
            oldTimelineEntriesGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/timeline.entries.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets an entry on an object's timeline.
             *
             * @tags timeline-entries
             * @name OldTimelineEntriesGetPost
             * @request POST:/internal/timeline.entries.get
             * @secure
             */
            oldTimelineEntriesGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/timeline.entries.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists the timeline entries for an object.
             *
             * @tags timeline-entries
             * @name OldTimelineEntriesList
             * @request GET:/internal/timeline.entries.list
             * @secure
             */
            oldTimelineEntriesList: (query, params = {}) => this.request(Object.assign({ path: `/internal/timeline.entries.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists the timeline entries for an object.
             *
             * @tags timeline-entries
             * @name OldTimelineEntriesListPost
             * @request POST:/internal/timeline.entries.list
             * @secure
             */
            oldTimelineEntriesListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/timeline.entries.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Translates input text to specified target language.
             *
             * @tags translation
             * @name Translate
             * @request POST:/internal/translate
             * @secure
             */
            translate: (data, params = {}) => this.request(Object.assign({ path: `/internal/translate`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Returns the supported languages for translation.
             *
             * @tags translation
             * @name TranslationLanguagesList
             * @request GET:/internal/translation.languages.list
             * @secure
             */
            translationLanguagesList: (query, params = {}) => this.request(Object.assign({ path: `/internal/translation.languages.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Returns the supported languages for translation.
             *
             * @tags translation
             * @name TranslationLanguagesListPost
             * @request POST:/internal/translation.languages.list
             * @secure
             */
            translationLanguagesListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/translation.languages.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Translates input text to specified target language.
             *
             * @tags translation
             * @name TranslationTranslate
             * @request POST:/internal/translation.translate
             * @secure
             */
            translationTranslate: (data, params = {}) => this.request(Object.assign({ path: `/internal/translation.translate`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a UOM on a part.
             *
             * @tags commerce
             * @name UomsCreate
             * @request POST:/internal/uoms.create
             * @secure
             */
            uomsCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/uoms.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes a UOM.
             *
             * @tags commerce
             * @name UomsDelete
             * @request POST:/internal/uoms.delete
             * @secure
             */
            uomsDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/uoms.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Gets a UOM.
             *
             * @tags commerce
             * @name UomsGet
             * @request GET:/internal/uoms.get
             * @secure
             */
            uomsGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/uoms.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a UOM.
             *
             * @tags commerce
             * @name UomsGetPost
             * @request POST:/internal/uoms.get
             * @secure
             */
            uomsGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/uoms.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the UOMs based on the given filters.
             *
             * @tags commerce
             * @name UomsList
             * @request GET:/internal/uoms.list
             * @secure
             */
            uomsList: (query, params = {}) => this.request(Object.assign({ path: `/internal/uoms.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the UOMs based on the given filters.
             *
             * @tags commerce
             * @name UomsListPost
             * @request POST:/internal/uoms.list
             * @secure
             */
            uomsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/uoms.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates a UOM.
             *
             * @tags commerce
             * @name UomsUpdate
             * @request POST:/internal/uoms.update
             * @secure
             */
            uomsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/uoms.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Returns the user's privileges for the target object.
             *
             * @tags users
             * @name UserPrivileges
             * @request GET:/internal/user.privileges
             * @secure
             */
            userPrivileges: (query, params = {}) => this.request(Object.assign({ path: `/internal/user.privileges`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Returns the user's privileges for the target object.
             *
             * @tags users
             * @name UserPrivilegesPost
             * @request POST:/internal/user.privileges
             * @secure
             */
            userPrivilegesPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/user.privileges`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Delete the invitation sent to the user.
             *
             * @tags dev-users
             * @name UserInvitationDelete
             * @request POST:/internal/users.invitations.delete
             * @secure
             */
            userInvitationDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/users.invitations.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the list of Dev organizations that the Dev user is invited to.
             *
             * @tags dev-orgs
             * @name DevUserInvitationsList
             * @request GET:/internal/users.invitations.list
             * @secure
             */
            devUserInvitationsList: (params = {}) => this.request(Object.assign({ path: `/internal/users.invitations.list`, method: 'GET', secure: true, format: 'json' }, params)),
            /**
             * @description Gets the list of Dev organizations that the Dev user is invited to.
             *
             * @tags dev-orgs
             * @name DevUserInvitationsListPost
             * @request POST:/internal/users.invitations.list
             * @secure
             */
            devUserInvitationsListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/users.invitations.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a vista.
             *
             * @tags vistas
             * @name VistasCreate
             * @request POST:/internal/vistas.create
             * @secure
             */
            vistasCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/vistas.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes the requested vista.
             *
             * @tags vistas
             * @name VistasDelete
             * @request POST:/internal/vistas.delete
             * @secure
             */
            vistasDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/vistas.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets the requested vistas's information.
             *
             * @tags vistas
             * @name VistasGet
             * @request GET:/internal/vistas.get
             * @secure
             */
            vistasGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/vistas.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the requested vistas's information.
             *
             * @tags vistas
             * @name VistasGetPost
             * @request POST:/internal/vistas.get
             * @secure
             */
            vistasGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/vistas.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists the available vistas.
             *
             * @tags vistas
             * @name VistasList
             * @request GET:/internal/vistas.list
             * @secure
             */
            vistasList: (query, params = {}) => this.request(Object.assign({ path: `/internal/vistas.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists the available vistas.
             *
             * @tags vistas
             * @name VistasListPost
             * @request POST:/internal/vistas.list
             * @secure
             */
            vistasListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/vistas.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates the requested vista.
             *
             * @tags vistas
             * @name VistasUpdate
             * @request POST:/internal/vistas.update
             * @secure
             */
            vistasUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/vistas.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Gets requesting user watcher events for an object.
             *
             * @tags watchers
             * @name WatchersGet
             * @request GET:/internal/watchers.get
             * @secure
             */
            watchersGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/watchers.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets requesting user watcher events for an object.
             *
             * @tags watchers
             * @name WatchersGetPost
             * @request POST:/internal/watchers.get
             * @secure
             */
            watchersGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/watchers.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Lists watchers of an object.
             *
             * @tags watchers
             * @name WatchersList
             * @request GET:/internal/watchers.list
             * @secure
             */
            watchersList: (query, params = {}) => this.request(Object.assign({ path: `/internal/watchers.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists watchers of an object.
             *
             * @tags watchers
             * @name WatchersListPost
             * @request POST:/internal/watchers.list
             * @secure
             */
            watchersListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/watchers.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates watchers on the object.
             *
             * @tags watchers
             * @name WatchersUpdate
             * @request POST:/internal/watchers.update
             * @secure
             */
            watchersUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/watchers.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates a new webhook target.
             *
             * @tags webhooks
             * @name WebhooksCreate
             * @request POST:/internal/webhooks.create
             * @secure
             */
            webhooksCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/webhooks.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes the requested webhook.
             *
             * @tags webhooks
             * @name WebhooksDelete
             * @request POST:/internal/webhooks.delete
             * @secure
             */
            webhooksDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/webhooks.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: brian.byrne@devrev.ai ### Gets the requested webhook's information.
             *
             * @tags webhooks
             * @name WebhooksGet
             * @request GET:/internal/webhooks.get
             * @secure
             */
            webhooksGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/webhooks.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets the requested webhook's information.
             *
             * @tags webhooks
             * @name WebhooksGetPost
             * @request POST:/internal/webhooks.get
             * @secure
             */
            webhooksGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/webhooks.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: brian.byrne@devrev.ai ### Lists the webhooks.
             *
             * @tags webhooks
             * @name WebhooksList
             * @request GET:/internal/webhooks.list
             * @secure
             */
            webhooksList: (params = {}) => this.request(Object.assign({ path: `/internal/webhooks.list`, method: 'GET', secure: true, format: 'json' }, params)),
            /**
             * @description Lists the webhooks.
             *
             * @tags webhooks
             * @name WebhooksListPost
             * @request POST:/internal/webhooks.list
             * @secure
             */
            webhooksListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/webhooks.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates the requested webhook.
             *
             * @tags webhooks
             * @name WebhooksUpdate
             * @request POST:/internal/webhooks.update
             * @secure
             */
            webhooksUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/webhooks.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: anshu.avinash@devrev.ai ### Get count of work matching given filter.
             *
             * @tags works
             * @name WorksCount
             * @request GET:/internal/works.count
             * @secure
             */
            worksCount: (query, params = {}) => this.request(Object.assign({ path: `/internal/works.count`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Get count of work matching given filter.
             *
             * @tags works
             * @name WorksCountPost
             * @request POST:/internal/works.count
             * @secure
             */
            worksCountPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/works.count`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Creates new work ([issue](https://devrev.ai/docs/product/build), [ticket](https://devrev.ai/docs/product/support)) item.
             *
             * @tags works
             * @name WorksCreate
             * @request POST:/internal/works.create
             * @secure
             */
            worksCreate: (data, params = {}) => this.request(Object.assign({ path: `/internal/works.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Deletes a work item.
             *
             * @tags works
             * @name WorksDelete
             * @request POST:/internal/works.delete
             * @secure
             */
            worksDelete: (data, params = {}) => this.request(Object.assign({ path: `/internal/works.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: anshu.avinash@devrev.ai ### Exports a collection of work items.
             *
             * @tags works
             * @name WorksExport
             * @request GET:/internal/works.export
             * @secure
             */
            worksExport: (query, params = {}) => this.request(Object.assign({ path: `/internal/works.export`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Exports a collection of work items.
             *
             * @tags works
             * @name WorksExportPost
             * @request POST:/internal/works.export
             * @secure
             */
            worksExportPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/works.export`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: anshu.avinash@devrev.ai ### Gets a work item's information.
             *
             * @tags works
             * @name WorksGet
             * @request GET:/internal/works.get
             * @secure
             */
            worksGet: (query, params = {}) => this.request(Object.assign({ path: `/internal/works.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Gets a work item's information.
             *
             * @tags works
             * @name WorksGetPost
             * @request POST:/internal/works.get
             * @secure
             */
            worksGetPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/works.get`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: anshu.avinash@devrev.ai ### Lists collections of works by groups.
             *
             * @tags works
             * @name WorksGroup
             * @request GET:/internal/works.group
             * @secure
             */
            worksGroup: (query, params = {}) => this.request(Object.assign({ path: `/internal/works.group`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists collections of works by groups.
             *
             * @tags works
             * @name WorksGroupPost
             * @request POST:/internal/works.group
             * @secure
             */
            worksGroupPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/works.group`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: anshu.avinash@devrev.ai ### Lists a collection of work items.
             *
             * @tags works
             * @name WorksList
             * @request GET:/internal/works.list
             * @secure
             */
            worksList: (query, params = {}) => this.request(Object.assign({ path: `/internal/works.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists a collection of work items.
             *
             * @tags works
             * @name WorksListPost
             * @request POST:/internal/works.list
             * @secure
             */
            worksListPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/works.list`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description ### Owner: anshu.avinash@devrev.ai ### Lists suggested works.
             *
             * @tags works
             * @name WorksSuggest
             * @request GET:/internal/works.suggest
             * @secure
             */
            worksSuggest: (query, params = {}) => this.request(Object.assign({ path: `/internal/works.suggest`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Lists suggested works.
             *
             * @tags works
             * @name WorksSuggestPost
             * @request POST:/internal/works.suggest
             * @secure
             */
            worksSuggestPost: (data, params = {}) => this.request(Object.assign({ path: `/internal/works.suggest`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Updates a work item's information.
             *
             * @tags works
             * @name WorksUpdate
             * @request POST:/internal/works.update
             * @secure
             */
            worksUpdate: (data, params = {}) => this.request(Object.assign({ path: `/internal/works.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
        };
    }
}
exports.Api = Api;
