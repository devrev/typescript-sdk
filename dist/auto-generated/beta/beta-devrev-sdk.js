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
exports.Api = exports.HttpClient = exports.ContentType = exports.WorkType = exports.UserType = exports.UserState = exports.TimelineEntryVisibility = exports.TimelineEntryType = exports.TimelineEntriesCreateRequestType = exports.TimelineEntriesCollection = exports.TimelineCommentBodyType = exports.TicketSeverity = exports.TaskPriority = exports.SlaStatus = exports.SlaSelectorSeverity = exports.SlaSelectorPriority = exports.SlaSelectorAppliesTo = exports.SlaEvaluationPeriod = exports.SchemaFieldDescriptorFieldType = exports.SchemaFieldDescriptorArrayTypeBaseType = exports.PartType = exports.OrgType = exports.OrgEnvironment = exports.MetricDefinitionMetricType = exports.MetricDefinitionAppliesTo = exports.ListMode = exports.LinksDirection = exports.LinkType = exports.LinkEndpointType = exports.IssuePriority = exports.ErrorUnauthorizedType = exports.ErrorTooManyRequestsType = exports.ErrorServiceUnavailableType = exports.ErrorNotFoundType = exports.ErrorInternalServerErrorType = exports.ErrorForbiddenType = exports.ErrorBadRequestType = exports.EngagementsCreateRequestEngagementType = exports.CustomSchemaFragmentsSetRequestType = exports.ConversationsCreateRequestTypeValue = void 0;
var ConversationsCreateRequestTypeValue;
(function (ConversationsCreateRequestTypeValue) {
    ConversationsCreateRequestTypeValue["Support"] = "support";
})(ConversationsCreateRequestTypeValue = exports.ConversationsCreateRequestTypeValue || (exports.ConversationsCreateRequestTypeValue = {}));
var CustomSchemaFragmentsSetRequestType;
(function (CustomSchemaFragmentsSetRequestType) {
    CustomSchemaFragmentsSetRequestType["AppFragment"] = "app_fragment";
    CustomSchemaFragmentsSetRequestType["CustomTypeFragment"] = "custom_type_fragment";
    CustomSchemaFragmentsSetRequestType["TenantFragment"] = "tenant_fragment";
})(CustomSchemaFragmentsSetRequestType = exports.CustomSchemaFragmentsSetRequestType || (exports.CustomSchemaFragmentsSetRequestType = {}));
/** The type of engagement. */
var EngagementsCreateRequestEngagementType;
(function (EngagementsCreateRequestEngagementType) {
    EngagementsCreateRequestEngagementType["Call"] = "call";
    EngagementsCreateRequestEngagementType["Email"] = "email";
    EngagementsCreateRequestEngagementType["LinkedIn"] = "linked_in";
    EngagementsCreateRequestEngagementType["Offline"] = "offline";
})(EngagementsCreateRequestEngagementType = exports.EngagementsCreateRequestEngagementType || (exports.EngagementsCreateRequestEngagementType = {}));
var ErrorBadRequestType;
(function (ErrorBadRequestType) {
    ErrorBadRequestType["BadRequest"] = "bad_request";
    ErrorBadRequestType["InvalidEnumValue"] = "invalid_enum_value";
    ErrorBadRequestType["InvalidField"] = "invalid_field";
    ErrorBadRequestType["MissingRequiredField"] = "missing_required_field";
    ErrorBadRequestType["ParseError"] = "parse_error";
    ErrorBadRequestType["ValueNotPermitted"] = "value_not_permitted";
})(ErrorBadRequestType = exports.ErrorBadRequestType || (exports.ErrorBadRequestType = {}));
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
/** Priority of the work based upon impact and criticality. */
var IssuePriority;
(function (IssuePriority) {
    IssuePriority["P0"] = "p0";
    IssuePriority["P1"] = "p1";
    IssuePriority["P2"] = "p2";
    IssuePriority["P3"] = "p3";
})(IssuePriority = exports.IssuePriority || (exports.IssuePriority = {}));
var LinkEndpointType;
(function (LinkEndpointType) {
    LinkEndpointType["Capability"] = "capability";
    LinkEndpointType["Conversation"] = "conversation";
    LinkEndpointType["Enhancement"] = "enhancement";
    LinkEndpointType["Feature"] = "feature";
    LinkEndpointType["Issue"] = "issue";
    LinkEndpointType["Opportunity"] = "opportunity";
    LinkEndpointType["Product"] = "product";
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
/** The list of item types on which the metric might be applied. */
var MetricDefinitionAppliesTo;
(function (MetricDefinitionAppliesTo) {
    MetricDefinitionAppliesTo["Conversation"] = "conversation";
    MetricDefinitionAppliesTo["Issue"] = "issue";
    MetricDefinitionAppliesTo["Task"] = "task";
    MetricDefinitionAppliesTo["Ticket"] = "ticket";
})(MetricDefinitionAppliesTo = exports.MetricDefinitionAppliesTo || (exports.MetricDefinitionAppliesTo = {}));
/**
 * The type of the metric. 'time' metrics track the time spent in some
 * state, supporting operations like 'start', 'stop', 'pause', 'resume'.
 * 'value' metrics track a value, supporting operations like 'set',
 * 'increment', 'decrement'.
 */
var MetricDefinitionMetricType;
(function (MetricDefinitionMetricType) {
    MetricDefinitionMetricType["Time"] = "time";
    MetricDefinitionMetricType["Value"] = "value";
})(MetricDefinitionMetricType = exports.MetricDefinitionMetricType || (exports.MetricDefinitionMetricType = {}));
/** The environment of the Org. Defaults to 'production' if not specified. */
var OrgEnvironment;
(function (OrgEnvironment) {
    OrgEnvironment["Production"] = "production";
    OrgEnvironment["Staging"] = "staging";
    OrgEnvironment["Test"] = "test";
})(OrgEnvironment = exports.OrgEnvironment || (exports.OrgEnvironment = {}));
var OrgType;
(function (OrgType) {
    OrgType["RevOrg"] = "rev_org";
})(OrgType = exports.OrgType || (exports.OrgType = {}));
var PartType;
(function (PartType) {
    PartType["Capability"] = "capability";
    PartType["Enhancement"] = "enhancement";
    PartType["Feature"] = "feature";
    PartType["Product"] = "product";
})(PartType = exports.PartType || (exports.PartType = {}));
var SchemaFieldDescriptorArrayTypeBaseType;
(function (SchemaFieldDescriptorArrayTypeBaseType) {
    SchemaFieldDescriptorArrayTypeBaseType["Bool"] = "bool";
    SchemaFieldDescriptorArrayTypeBaseType["Composite"] = "composite";
    SchemaFieldDescriptorArrayTypeBaseType["Double"] = "double";
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
    SchemaFieldDescriptorFieldType["Double"] = "double";
    SchemaFieldDescriptorFieldType["Enum"] = "enum";
    SchemaFieldDescriptorFieldType["Id"] = "id";
    SchemaFieldDescriptorFieldType["Int"] = "int";
    SchemaFieldDescriptorFieldType["RichText"] = "rich_text";
    SchemaFieldDescriptorFieldType["Text"] = "text";
    SchemaFieldDescriptorFieldType["Timestamp"] = "timestamp";
    SchemaFieldDescriptorFieldType["Tokens"] = "tokens";
})(SchemaFieldDescriptorFieldType = exports.SchemaFieldDescriptorFieldType || (exports.SchemaFieldDescriptorFieldType = {}));
/**
 * Specifies the frequency of when the contractually-meaningful evaluation
 * of the SLA happens. The organization for their own information might
 * evaluate the various metrics contained in the policy as often as we can
 * make it feasible for them, but only the evaluation at the end of the
 * evaluation period triggers a compensation and needs to be shared with
 * the customer.
 */
var SlaEvaluationPeriod;
(function (SlaEvaluationPeriod) {
    SlaEvaluationPeriod["Monthly"] = "monthly";
    SlaEvaluationPeriod["Quarterly"] = "quarterly";
    SlaEvaluationPeriod["Weekly"] = "weekly";
    SlaEvaluationPeriod["Yearly"] = "yearly";
})(SlaEvaluationPeriod = exports.SlaEvaluationPeriod || (exports.SlaEvaluationPeriod = {}));
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
 * Status determines how an item can be used. In 'draft' status an item
 * can be edited but can't be used. When 'published' the item can longer
 * be edited but can be used. 'Archived' is read-only.
 */
var SlaStatus;
(function (SlaStatus) {
    SlaStatus["Archived"] = "archived";
    SlaStatus["Draft"] = "draft";
    SlaStatus["Published"] = "published";
})(SlaStatus = exports.SlaStatus || (exports.SlaStatus = {}));
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
    TimelineEntriesCollection["Discussions"] = "discussions";
    TimelineEntriesCollection["Events"] = "events";
})(TimelineEntriesCollection = exports.TimelineEntriesCollection || (exports.TimelineEntriesCollection = {}));
var TimelineEntriesCreateRequestType;
(function (TimelineEntriesCreateRequestType) {
    TimelineEntriesCreateRequestType["TimelineComment"] = "timeline_comment";
})(TimelineEntriesCreateRequestType = exports.TimelineEntriesCreateRequestType || (exports.TimelineEntriesCreateRequestType = {}));
var TimelineEntryType;
(function (TimelineEntryType) {
    TimelineEntryType["TimelineComment"] = "timeline_comment";
})(TimelineEntryType = exports.TimelineEntryType || (exports.TimelineEntryType = {}));
/**
 * The visibility of the entry. If 'private', then the entry is only
 * visible to the creator, 'internal' is visible with the Dev
 * organization, 'external' is visible to the Dev organzation and Rev
 * users, and 'public' is visible to all. If not set, then the default
 * visibility is 'external'.
 */
var TimelineEntryVisibility;
(function (TimelineEntryVisibility) {
    TimelineEntryVisibility["External"] = "external";
    TimelineEntryVisibility["Internal"] = "internal";
    TimelineEntryVisibility["Private"] = "private";
    TimelineEntryVisibility["Public"] = "public";
})(TimelineEntryVisibility = exports.TimelineEntryVisibility || (exports.TimelineEntryVisibility = {}));
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
    UserType["RevUser"] = "rev_user";
    UserType["SysUser"] = "sys_user";
})(UserType = exports.UserType || (exports.UserType = {}));
var WorkType;
(function (WorkType) {
    WorkType["Issue"] = "issue";
    WorkType["Opportunity"] = "opportunity";
    WorkType["Ticket"] = "ticket";
})(WorkType = exports.WorkType || (exports.WorkType = {}));
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
            const secureParams = ((typeof secure === "boolean" ? secure : this.secure) &&
                this.securityWorker &&
                (yield this.securityWorker(this.securityData))) ||
                {};
            const requestParams = this.mergeRequestParams(params, secureParams);
            const responseFormat = format || this.format || undefined;
            if (type === ContentType.FormData &&
                body &&
                body !== null &&
                typeof body === "object") {
                body = this.createFormData(body);
            }
            if (type === ContentType.Text &&
                body &&
                body !== null &&
                typeof body !== "string") {
                body = JSON.stringify(body);
            }
            return this.instance.request(Object.assign(Object.assign({}, requestParams), { headers: Object.assign(Object.assign({}, (requestParams.headers || {})), (type && type !== ContentType.FormData
                    ? { "Content-Type": type }
                    : {})), params: query, responseType: responseFormat, data: body, url: path }));
        });
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: axiosConfig.baseURL || "{protocol}://{hostname}" }));
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
        if (typeof formItem === "object" && formItem !== null) {
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
 * @title DevRev Beta REST API
 * @version BETA
 * @baseUrl {protocol}://{hostname}
 *
 * DevRev's BETA REST API Specification.
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Creates an account, which is a record representing a customer or an organization.
         *
         * @tags accounts
         * @name AccountsCreate
         * @request POST:/accounts.create
         * @secure
         */
        this.accountsCreate = (data, params = {}) => this.request(Object.assign({ path: `/accounts.create`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Deletes an account.
         *
         * @tags accounts
         * @name AccountsDelete
         * @request POST:/accounts.delete
         * @secure
         */
        this.accountsDelete = (data, params = {}) => this.request(Object.assign({ path: `/accounts.delete`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Exports a collection of accounts.
         *
         * @tags accounts
         * @name AccountsExport
         * @request GET:/accounts.export
         * @secure
         */
        this.accountsExport = (query, params = {}) => this.request(Object.assign({ path: `/accounts.export`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Retrieves an account's information.
         *
         * @tags accounts
         * @name AccountsGet
         * @request GET:/accounts.get
         * @secure
         */
        this.accountsGet = (query, params = {}) => this.request(Object.assign({ path: `/accounts.get`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Gets a list of accounts.
         *
         * @tags accounts
         * @name AccountsList
         * @request GET:/accounts.list
         * @secure
         */
        this.accountsList = (query, params = {}) => this.request(Object.assign({ path: `/accounts.list`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Updates an account's information.
         *
         * @tags accounts
         * @name AccountsUpdate
         * @request POST:/accounts.update
         * @secure
         */
        this.accountsUpdate = (data, params = {}) => this.request(Object.assign({ path: `/accounts.update`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Creates a conversation.
         *
         * @tags conversations
         * @name ConversationsCreate
         * @request POST:/conversations.create
         * @secure
         */
        this.conversationsCreate = (data, params = {}) => this.request(Object.assign({ path: `/conversations.create`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Deletes the requested conversation.
         *
         * @tags conversations
         * @name ConversationsDelete
         * @request POST:/conversations.delete
         * @secure
         */
        this.conversationsDelete = (data, params = {}) => this.request(Object.assign({ path: `/conversations.delete`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Exports a collection of conversation items.
         *
         * @tags conversations
         * @name ConversationsExport
         * @request GET:/conversations.export
         * @secure
         */
        this.conversationsExport = (query, params = {}) => this.request(Object.assign({ path: `/conversations.export`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Gets the requested conversation's information.
         *
         * @tags conversations
         * @name ConversationsGet
         * @request GET:/conversations.get
         * @secure
         */
        this.conversationsGet = (query, params = {}) => this.request(Object.assign({ path: `/conversations.get`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Lists the available conversations.
         *
         * @tags conversations
         * @name ConversationsList
         * @request GET:/conversations.list
         * @secure
         */
        this.conversationsList = (query, params = {}) => this.request(Object.assign({ path: `/conversations.list`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Updates the requested conversation.
         *
         * @tags conversations
         * @name ConversationsUpdate
         * @request POST:/conversations.update
         * @secure
         */
        this.conversationsUpdate = (data, params = {}) => this.request(Object.assign({ path: `/conversations.update`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Counts the engagement records.
         *
         * @tags engagements
         * @name EngagementsCount
         * @request GET:/engagements.count
         * @secure
         */
        this.engagementsCount = (query, params = {}) => this.request(Object.assign({ path: `/engagements.count`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Creates a new engagement record.
         *
         * @tags engagements
         * @name EngagementsCreate
         * @request POST:/engagements.create
         * @secure
         */
        this.engagementsCreate = (data, params = {}) => this.request(Object.assign({ path: `/engagements.create`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Deletes the engagement record.
         *
         * @tags engagements
         * @name EngagementsDelete
         * @request POST:/engagements.delete
         * @secure
         */
        this.engagementsDelete = (data, params = {}) => this.request(Object.assign({ path: `/engagements.delete`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Gets the engagement record.
         *
         * @tags engagements
         * @name EngagementsGet
         * @request GET:/engagements.get
         * @secure
         */
        this.engagementsGet = (query, params = {}) => this.request(Object.assign({ path: `/engagements.get`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Lists the engagement records.
         *
         * @tags engagements
         * @name EngagementsList
         * @request GET:/engagements.list
         * @secure
         */
        this.engagementsList = (query, params = {}) => this.request(Object.assign({ path: `/engagements.list`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Updates the engagement record.
         *
         * @tags engagements
         * @name EngagementsUpdate
         * @request POST:/engagements.update
         * @secure
         */
        this.engagementsUpdate = (data, params = {}) => this.request(Object.assign({ path: `/engagements.update`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Schedules an event to be published to the specified event source.
         *
         * @tags event-source
         * @name EventSourcesScheduleEvent
         * @request POST:/event-sources.schedule
         * @secure
         */
        this.eventSourcesScheduleEvent = (data, params = {}) => this.request(Object.assign({ path: `/event-sources.schedule`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Deletes an event scheduled for the specified event source.
         *
         * @tags event-source
         * @name EventSourcesDeleteScheduledEvent
         * @request POST:/event-sources.unschedule
         * @secure
         */
        this.eventSourcesDeleteScheduledEvent = (data, params = {}) => this.request(Object.assign({ path: `/event-sources.unschedule`, method: "POST", body: data, secure: true, type: ContentType.Json }, params));
        /**
         * @description Creates a link between two objects to indicate a relationship.
         *
         * @tags links
         * @name LinksCreate
         * @request POST:/links.create
         * @secure
         */
        this.linksCreate = (data, params = {}) => this.request(Object.assign({ path: `/links.create`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Deletes a link.
         *
         * @tags links
         * @name LinksDelete
         * @request POST:/links.delete
         * @secure
         */
        this.linksDelete = (data, params = {}) => this.request(Object.assign({ path: `/links.delete`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Gets the requested link's information.
         *
         * @tags links
         * @name LinksGet
         * @request GET:/links.get
         * @secure
         */
        this.linksGet = (query, params = {}) => this.request(Object.assign({ path: `/links.get`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Lists the available links.
         *
         * @tags links
         * @name LinksList
         * @request GET:/links.list
         * @secure
         */
        this.linksList = (query, params = {}) => this.request(Object.assign({ path: `/links.list`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Lists metric definitions matching a filter.
         *
         * @tags slas
         * @name MetricDefinitionsList
         * @request GET:/metric-definitions.list
         * @secure
         */
        this.metricDefinitionsList = (query, params = {}) => this.request(Object.assign({ path: `/metric-definitions.list`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Creates a Rev organization in the authenticated user's Dev organization.
         *
         * @tags rev-orgs
         * @name RevOrgsCreate
         * @request POST:/rev-orgs.create
         * @secure
         */
        this.revOrgsCreate = (data, params = {}) => this.request(Object.assign({ path: `/rev-orgs.create`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Retrieves the Rev organization's information.
         *
         * @tags rev-orgs
         * @name RevOrgsGet
         * @request GET:/rev-orgs.get
         * @secure
         */
        this.revOrgsGet = (query, params = {}) => this.request(Object.assign({ path: `/rev-orgs.get`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Gets the list of Rev organizations' information belonging to the authenticated user's Dev Organization which the user is also authorized to access.
         *
         * @tags rev-orgs
         * @name RevOrgsList
         * @request GET:/rev-orgs.list
         * @secure
         */
        this.revOrgsList = (query, params = {}) => this.request(Object.assign({ path: `/rev-orgs.list`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Updates the Rev organization's information.
         *
         * @tags rev-orgs
         * @name RevOrgsUpdate
         * @request POST:/rev-orgs.update
         * @secure
         */
        this.revOrgsUpdate = (data, params = {}) => this.request(Object.assign({ path: `/rev-orgs.update`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Creates a Rev user for a Rev organization. Rev user can be a customer or a lead of an organization.
         *
         * @tags rev-users
         * @name RevUsersCreate
         * @request POST:/rev-users.create
         * @secure
         */
        this.revUsersCreate = (data, params = {}) => this.request(Object.assign({ path: `/rev-users.create`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Deletes a Rev user.
         *
         * @tags rev-users
         * @name RevUsersDelete
         * @request POST:/rev-users.delete
         * @secure
         */
        this.revUsersDelete = (data, params = {}) => this.request(Object.assign({ path: `/rev-users.delete`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Returns the Rev user of a Rev organization by its ID.
         *
         * @tags rev-users
         * @name RevUsersGet
         * @request GET:/rev-users.get
         * @secure
         */
        this.revUsersGet = (query, params = {}) => this.request(Object.assign({ path: `/rev-users.get`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Links a rev user to a rev org.
         *
         * @tags rev-users
         * @name LinkRevUserToRevOrg
         * @request POST:/rev-users.link
         * @secure
         */
        this.linkRevUserToRevOrg = (data, params = {}) => this.request(Object.assign({ path: `/rev-users.link`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Returns a list of all Rev Users belonging to the authenticated user's Dev Organization.
         *
         * @tags rev-users
         * @name RevUsersList
         * @request GET:/rev-users.list
         * @secure
         */
        this.revUsersList = (query, params = {}) => this.request(Object.assign({ path: `/rev-users.list`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Unlinks a rev user from a rev org.
         *
         * @tags rev-users
         * @name UnlinkRevUserFromRevOrg
         * @request POST:/rev-users.unlink
         * @secure
         */
        this.unlinkRevUserFromRevOrg = (data, params = {}) => this.request(Object.assign({ path: `/rev-users.unlink`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Updates a Rev user.
         *
         * @tags rev-users
         * @name RevUsersUpdate
         * @request POST:/rev-users.update
         * @secure
         */
        this.revUsersUpdate = (data, params = {}) => this.request(Object.assign({ path: `/rev-users.update`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Gets the aggregated schema.
         *
         * @tags customization
         * @name AggregatedSchemaGet
         * @request GET:/schemas.aggregated.get
         * @secure
         */
        this.aggregatedSchemaGet = (query, params = {}) => this.request(Object.assign({ path: `/schemas.aggregated.get`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Gets a custom schema fragment.
         *
         * @tags customization
         * @name CustomSchemaFragmentsGet
         * @request GET:/schemas.custom.get
         * @secure
         */
        this.customSchemaFragmentsGet = (query, params = {}) => this.request(Object.assign({ path: `/schemas.custom.get`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Lists custom schema fragments.
         *
         * @tags customization
         * @name CustomSchemaFragmentsList
         * @request GET:/schemas.custom.list
         * @secure
         */
        this.customSchemaFragmentsList = (query, params = {}) => this.request(Object.assign({ path: `/schemas.custom.list`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Creates or updates a custom schema fragment.
         *
         * @tags customization
         * @name CustomSchemaFragmentsSet
         * @request POST:/schemas.custom.set
         * @secure
         */
        this.customSchemaFragmentsSet = (data, params = {}) => this.request(Object.assign({ path: `/schemas.custom.set`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Lists subtypes.
         *
         * @tags customization
         * @name SubtypesList
         * @request GET:/schemas.subtypes.list
         * @secure
         */
        this.subtypesList = (query, params = {}) => this.request(Object.assign({ path: `/schemas.subtypes.list`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description  Assigns the SLA to a set of Rev organizations.
         *
         * @tags slas
         * @name SlasAssign
         * @request POST:/slas.assign
         * @secure
         */
        this.slasAssign = (data, params = {}) => this.request(Object.assign({ path: `/slas.assign`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Creates an SLA in draft status.
         *
         * @tags slas
         * @name SlasCreate
         * @request POST:/slas.create
         * @secure
         */
        this.slasCreate = (data, params = {}) => this.request(Object.assign({ path: `/slas.create`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Gets an SLA.
         *
         * @tags slas
         * @name SlasGet
         * @request GET:/slas.get
         * @secure
         */
        this.slasGet = (query, params = {}) => this.request(Object.assign({ path: `/slas.get`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Lists SLAs matching a filter.
         *
         * @tags slas
         * @name SlasList
         * @request GET:/slas.list
         * @secure
         */
        this.slasList = (query, params = {}) => this.request(Object.assign({ path: `/slas.list`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Changes the status of an SLA.
         *
         * @tags slas
         * @name SlasTransition
         * @request POST:/slas.transition
         * @secure
         */
        this.slasTransition = (data, params = {}) => this.request(Object.assign({ path: `/slas.transition`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Updates a draft SLA.
         *
         * @tags slas
         * @name SlasUpdate
         * @request POST:/slas.update
         * @secure
         */
        this.slasUpdate = (data, params = {}) => this.request(Object.assign({ path: `/slas.update`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Lists system users within your organization.
         *
         * @tags sys-users
         * @name SysUsersList
         * @request GET:/sys-users.list
         * @secure
         */
        this.sysUsersList = (query, params = {}) => this.request(Object.assign({ path: `/sys-users.list`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Updates the system user.
         *
         * @tags sys-users
         * @name SysUsersUpdate
         * @request POST:/sys-users.update
         * @secure
         */
        this.sysUsersUpdate = (data, params = {}) => this.request(Object.assign({ path: `/sys-users.update`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Creates a new entry on an object's timeline.
         *
         * @tags timeline-entries
         * @name TimelineEntriesCreate
         * @request POST:/timeline-entries.create
         * @secure
         */
        this.timelineEntriesCreate = (data, params = {}) => this.request(Object.assign({ path: `/timeline-entries.create`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Lists the timeline entries for an object.
         *
         * @tags timeline-entries
         * @name TimelineEntriesList
         * @request GET:/timeline-entries.list
         * @secure
         */
        this.timelineEntriesList = (query, params = {}) => this.request(Object.assign({ path: `/timeline-entries.list`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Creates new work ([issue](https://devrev.ai/docs/product/build), [ticket](https://devrev.ai/docs/product/support)) item. [task](https://docs.devrev.ai/product/tasks) and opportunity work types are supported in the beta version.
         *
         * @tags works
         * @name WorksCreate
         * @request POST:/works.create
         * @secure
         */
        this.worksCreate = (data, params = {}) => this.request(Object.assign({ path: `/works.create`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Deletes a work item.
         *
         * @tags works
         * @name WorksDelete
         * @request POST:/works.delete
         * @secure
         */
        this.worksDelete = (data, params = {}) => this.request(Object.assign({ path: `/works.delete`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
        /**
         * @description Exports a collection of work items.
         *
         * @tags works
         * @name WorksExport
         * @request GET:/works.export
         * @secure
         */
        this.worksExport = (query, params = {}) => this.request(Object.assign({ path: `/works.export`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Gets a work item's information.
         *
         * @tags works
         * @name WorksGet
         * @request GET:/works.get
         * @secure
         */
        this.worksGet = (query, params = {}) => this.request(Object.assign({ path: `/works.get`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Lists a collection of work items.
         *
         * @tags works
         * @name WorksList
         * @request GET:/works.list
         * @secure
         */
        this.worksList = (query, params = {}) => this.request(Object.assign({ path: `/works.list`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Updates a work item's information.
         *
         * @tags works
         * @name WorksUpdate
         * @request POST:/works.update
         * @secure
         */
        this.worksUpdate = (data, params = {}) => this.request(Object.assign({ path: `/works.update`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
    }
}
exports.Api = Api;
