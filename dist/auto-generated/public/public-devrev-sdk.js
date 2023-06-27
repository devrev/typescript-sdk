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
exports.Api = exports.HttpClient = exports.ContentType = exports.WorkType = exports.WebhooksUpdateAction = exports.WebhookStatus = exports.WebhookEventType = exports.UserType = exports.UserState = exports.TimelineEntryType = exports.TimelineEntriesUpdateRequestType = exports.TimelineEntriesCreateRequestType = exports.TimelineCommentBodyType = exports.TicketSeverity = exports.PartType = exports.OrgType = exports.OrgEnvironment = exports.ListMode = exports.IssuePriority = exports.ErrorUnauthorizedType = exports.ErrorTooManyRequestsType = exports.ErrorServiceUnavailableType = exports.ErrorNotFoundType = exports.ErrorInternalServerErrorType = exports.ErrorForbiddenType = exports.ErrorBadRequestType = exports.DevOrgAuthConnectionsUpdateRequestType = exports.DevOrgAuthConnectionsCreateRequestType = exports.AuthTokenTokenType = exports.AuthTokenSubjectTokenType = exports.AuthTokenStatus = exports.AuthTokenRequestedTokenType = exports.AuthTokenGrantType = exports.AuthConnectionType = exports.AuthConnectionToggle = void 0;
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
var ErrorBadRequestType;
(function (ErrorBadRequestType) {
    ErrorBadRequestType["BadRequest"] = "bad_request";
    ErrorBadRequestType["MissingRequiredField"] = "missing_required_field";
    ErrorBadRequestType["ParseError"] = "parse_error";
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
    PartType["Product"] = "product";
})(PartType = exports.PartType || (exports.PartType = {}));
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
    TimelineEntryType["TimelineComment"] = "timeline_comment";
})(TimelineEntryType = exports.TimelineEntryType || (exports.TimelineEntryType = {}));
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
/** The event types that the webhook will receive. */
var WebhookEventType;
(function (WebhookEventType) {
    WebhookEventType["PartCreated"] = "part_created";
    WebhookEventType["PartDeleted"] = "part_deleted";
    WebhookEventType["PartUpdated"] = "part_updated";
    WebhookEventType["RevOrgCreated"] = "rev_org_created";
    WebhookEventType["RevOrgDeleted"] = "rev_org_deleted";
    WebhookEventType["RevOrgUpdated"] = "rev_org_updated";
    WebhookEventType["TagCreated"] = "tag_created";
    WebhookEventType["TagDeleted"] = "tag_deleted";
    WebhookEventType["TagUpdated"] = "tag_updated";
    WebhookEventType["TimelineEntryCreated"] = "timeline_entry_created";
    WebhookEventType["TimelineEntryDeleted"] = "timeline_entry_deleted";
    WebhookEventType["TimelineEntryUpdated"] = "timeline_entry_updated";
    WebhookEventType["Verify"] = "verify";
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
    WorkType["Issue"] = "issue";
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
        this.artifactsLocate = {
            /**
             * @description Gets the download URL for the artifact.
             *
             * @tags artifacts
             * @name ArtifactsLocate
             * @request GET:/artifacts.locate
             * @secure
             */
            artifactsLocate: (query, params = {}) => this.request(Object.assign({ path: `/artifacts.locate`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
        };
        this.artifactsPrepare = {
            /**
             * @description Creates an artifact and generates an upload URL for its data.
             *
             * @tags artifacts
             * @name ArtifactsPrepare
             * @request POST:/artifacts.prepare
             * @secure
             */
            artifactsPrepare: (data, params = {}) => this.request(Object.assign({ path: `/artifacts.prepare`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
        };
        this.authTokensCreate = {
            /**
             * @description Creates a JWT corresponding to the requested token type for the authenticated user.
             *
             * @tags auth-tokens
             * @name AuthTokensCreate
             * @request POST:/auth-tokens.create
             * @secure
             */
            authTokensCreate: (data, params = {}) => this.request(Object.assign({ path: `/auth-tokens.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
        };
        this.authTokensDelete = {
            /**
             * @description Revokes the token that matches the given token ID issued under the given Dev organization.
             *
             * @tags auth-tokens
             * @name AuthTokensDelete
             * @request POST:/auth-tokens.delete
             * @secure
             */
            authTokensDelete: (data, params = {}) => this.request(Object.assign({ path: `/auth-tokens.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
        };
        this.authTokensGet = {
            /**
             * @description Gets the token metadata corresponding to the given token ID under the given Dev organization.
             *
             * @tags auth-tokens
             * @name AuthTokensGet
             * @request GET:/auth-tokens.get
             * @secure
             */
            authTokensGet: (query, params = {}) => this.request(Object.assign({ path: `/auth-tokens.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
        };
        this.authTokensList = {
            /**
             * @description Gets the token metadata for all the tokens corresponding to the given token type issued for a given subject.
             *
             * @tags auth-tokens
             * @name AuthTokensList
             * @request GET:/auth-tokens.list
             * @secure
             */
            authTokensList: (query, params = {}) => this.request(Object.assign({ path: `/auth-tokens.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
        };
        this.authTokensSelfDelete = {
            /**
             * @description Revokes all the tokens that matches the given token type created by the authenticated user.
             *
             * @tags auth-tokens
             * @name AuthTokensSelfDelete
             * @request POST:/auth-tokens.self.delete
             * @secure
             */
            authTokensSelfDelete: (data, params = {}) => this.request(Object.assign({ path: `/auth-tokens.self.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
        };
        this.authTokensUpdate = {
            /**
             * @description Updates token metadata of a token issued under a given Dev organization.
             *
             * @tags auth-tokens
             * @name AuthTokensUpdate
             * @request POST:/auth-tokens.update
             * @secure
             */
            authTokensUpdate: (data, params = {}) => this.request(Object.assign({ path: `/auth-tokens.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
        };
        this.devOrgsAuthConnectionsCreate = {
            /**
             * @description Creates a new enterprise authentication connection for a Dev organization. This authentication connection will not be enabled by default for the organization and the user will need to explicitly enable this. Keep in mind that at a time, only one authentication connection can be enabled for a Dev organization. At present, only 5 enterprise connections can be created by an organization.
             *
             * @tags auth-connection, dev-orgs
             * @name DevOrgAuthConnectionsCreate
             * @request POST:/dev-orgs.auth-connections.create
             * @secure
             */
            devOrgAuthConnectionsCreate: (data, params = {}) => this.request(Object.assign({ path: `/dev-orgs.auth-connections.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
        };
        this.devOrgsAuthConnectionsDelete = {
            /**
             * @description Deletes an authentication connection. Only enterprise connections which are explicitly set up for a Dev organization can be deleted. Default connections can not be deleted using this method.
             *
             * @tags auth-connection, dev-orgs
             * @name DevOrgAuthConnectionsDelete
             * @request POST:/dev-orgs.auth-connections.delete
             * @secure
             */
            devOrgAuthConnectionsDelete: (data, params = {}) => this.request(Object.assign({ path: `/dev-orgs.auth-connections.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
        };
        this.devOrgsAuthConnectionsGet = {
            /**
             * @description Retrieves the details for an authentication connection.
             *
             * @tags auth-connection, dev-orgs
             * @name DevOrgAuthConnectionsGet
             * @request GET:/dev-orgs.auth-connections.get
             * @secure
             */
            devOrgAuthConnectionsGet: (query, params = {}) => this.request(Object.assign({ path: `/dev-orgs.auth-connections.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
        };
        this.devOrgsAuthConnectionsList = {
            /**
             * @description Lists all the authentication connections available for a Dev organization. This list will include both social and enterprise connections which are either available by default or are explicitly created by the user.
             *
             * @tags auth-connection, dev-orgs
             * @name DevOrgAuthConnectionsList
             * @request GET:/dev-orgs.auth-connections.list
             * @secure
             */
            devOrgAuthConnectionsList: (params = {}) => this.request(Object.assign({ path: `/dev-orgs.auth-connections.list`, method: 'GET', secure: true, format: 'json' }, params)),
        };
        this.devOrgsAuthConnectionsToggle = {
            /**
             * @description Enable or disable an authentication connection for a Dev organization. Currently, only 1 authentication connection can be enabled at a time. When a new authentication connection is enabled, the connection which is currently enabled for the Dev organization is automatically disabled.
             *
             * @tags auth-connection, dev-orgs
             * @name DevOrgAuthConnectionsToggle
             * @request POST:/dev-orgs.auth-connections.toggle
             * @secure
             */
            devOrgAuthConnectionsToggle: (data, params = {}) => this.request(Object.assign({ path: `/dev-orgs.auth-connections.toggle`, method: 'POST', body: data, secure: true, type: ContentType.Json }, params)),
        };
        this.devOrgsAuthConnectionsUpdate = {
            /**
             * @description Updates an authentication connection.
             *
             * @tags auth-connection, dev-orgs
             * @name DevOrgAuthConnectionsUpdate
             * @request POST:/dev-orgs.auth-connections.update
             * @secure
             */
            devOrgAuthConnectionsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/dev-orgs.auth-connections.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
        };
        this.devUsersList = {
            /**
             * @description Lists users within your organization.
             *
             * @tags dev-users
             * @name DevUsersList
             * @request GET:/dev-users.list
             * @secure
             */
            devUsersList: (query, params = {}) => this.request(Object.assign({ path: `/dev-users.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
        };
        this.devUsersSelf = {
            /**
             * @description Gets the authenticated user's information.
             *
             * @tags dev-users
             * @name DevUsersSelf
             * @request GET:/dev-users.self
             * @secure
             */
            devUsersSelf: (params = {}) => this.request(Object.assign({ path: `/dev-users.self`, method: 'GET', secure: true, format: 'json' }, params)),
        };
        this.partsCreate = {
            /**
             * @description Creates new [part](https://devrev.ai/docs/product/parts).
             *
             * @tags parts
             * @name PartsCreate
             * @request POST:/parts.create
             * @secure
             */
            partsCreate: (data, params = {}) => this.request(Object.assign({ path: `/parts.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
        };
        this.partsDelete = {
            /**
             * @description Deletes a [part](https://devrev.ai/docs/product/parts).
             *
             * @tags parts
             * @name PartsDelete
             * @request POST:/parts.delete
             * @secure
             */
            partsDelete: (data, params = {}) => this.request(Object.assign({ path: `/parts.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
        };
        this.partsGet = {
            /**
             * @description Gets a [part's](https://devrev.ai/docs/product/parts) information.
             *
             * @tags parts
             * @name PartsGet
             * @request GET:/parts.get
             * @secure
             */
            partsGet: (query, params = {}) => this.request(Object.assign({ path: `/parts.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
        };
        this.partsList = {
            /**
             * @description Lists a collection of [parts](https://devrev.ai/docs/product/parts).
             *
             * @tags parts
             * @name PartsList
             * @request GET:/parts.list
             * @secure
             */
            partsList: (query, params = {}) => this.request(Object.assign({ path: `/parts.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
        };
        this.partsUpdate = {
            /**
             * @description Updates a [part's](https://devrev.ai/docs/product/parts) information.
             *
             * @tags parts
             * @name PartsUpdate
             * @request POST:/parts.update
             * @secure
             */
            partsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/parts.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
        };
        this.revOrgsCreate = {
            /**
             * @description Creates a Rev organization in the authenticated user's Dev organization.
             *
             * @tags rev-orgs
             * @name RevOrgsCreate
             * @request POST:/rev-orgs.create
             * @secure
             */
            revOrgsCreate: (data, params = {}) => this.request(Object.assign({ path: `/rev-orgs.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
        };
        this.revOrgsDelete = {
            /**
             * @description Deletes the Rev organization.
             *
             * @tags rev-orgs
             * @name RevOrgsDelete
             * @request POST:/rev-orgs.delete
             * @secure
             */
            revOrgsDelete: (data, params = {}) => this.request(Object.assign({ path: `/rev-orgs.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
        };
        this.revOrgsGet = {
            /**
             * @description Retrieves the Rev organization's information.
             *
             * @tags rev-orgs
             * @name RevOrgsGet
             * @request GET:/rev-orgs.get
             * @secure
             */
            revOrgsGet: (query, params = {}) => this.request(Object.assign({ path: `/rev-orgs.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
        };
        this.revOrgsList = {
            /**
             * @description Gets the list of Rev organizations' information belonging to the authenticated user's Dev Organization which the user is also authorized to access.
             *
             * @tags rev-orgs
             * @name RevOrgsList
             * @request GET:/rev-orgs.list
             * @secure
             */
            revOrgsList: (query, params = {}) => this.request(Object.assign({ path: `/rev-orgs.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
        };
        this.revOrgsUpdate = {
            /**
             * @description Updates the Rev organization's information.
             *
             * @tags rev-orgs
             * @name RevOrgsUpdate
             * @request POST:/rev-orgs.update
             * @secure
             */
            revOrgsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/rev-orgs.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
        };
        this.tagsCreate = {
            /**
             * @description Creates a new tag, which is used to create associations between objects and a logical concept denoted by the tag's name.
             *
             * @tags tags
             * @name TagsCreate
             * @request POST:/tags.create
             * @secure
             */
            tagsCreate: (data, params = {}) => this.request(Object.assign({ path: `/tags.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
        };
        this.tagsDelete = {
            /**
             * @description Deletes a tag.
             *
             * @tags tags
             * @name TagsDelete
             * @request POST:/tags.delete
             * @secure
             */
            tagsDelete: (data, params = {}) => this.request(Object.assign({ path: `/tags.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
        };
        this.tagsGet = {
            /**
             * @description Gets a tag's information.
             *
             * @tags tags
             * @name TagsGet
             * @request GET:/tags.get
             * @secure
             */
            tagsGet: (query, params = {}) => this.request(Object.assign({ path: `/tags.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
        };
        this.tagsList = {
            /**
             * @description Lists the available tags.
             *
             * @tags tags
             * @name TagsList
             * @request GET:/tags.list
             * @secure
             */
            tagsList: (query, params = {}) => this.request(Object.assign({ path: `/tags.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
        };
        this.tagsUpdate = {
            /**
             * @description Updates a tag's information.
             *
             * @tags tags
             * @name TagsUpdate
             * @request POST:/tags.update
             * @secure
             */
            tagsUpdate: (data, params = {}) => this.request(Object.assign({ path: `/tags.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
        };
        this.timelineEntriesCreate = {
            /**
             * @description Creates a new entry on an object's timeline.
             *
             * @tags timeline-entries
             * @name TimelineEntriesCreate
             * @request POST:/timeline-entries.create
             * @secure
             */
            timelineEntriesCreate: (data, params = {}) => this.request(Object.assign({ path: `/timeline-entries.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
        };
        this.timelineEntriesGet = {
            /**
             * @description Gets an entry on an object's timeline.
             *
             * @tags timeline-entries
             * @name TimelineEntriesGet
             * @request GET:/timeline-entries.get
             * @secure
             */
            timelineEntriesGet: (query, params = {}) => this.request(Object.assign({ path: `/timeline-entries.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
        };
        this.timelineEntriesList = {
            /**
             * @description Lists the timeline entries for an object.
             *
             * @tags timeline-entries
             * @name TimelineEntriesList
             * @request GET:/timeline-entries.list
             * @secure
             */
            timelineEntriesList: (query, params = {}) => this.request(Object.assign({ path: `/timeline-entries.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
        };
        this.timelineEntriesUpdate = {
            /**
             * @description Updates an entry on an object's timeline.
             *
             * @tags timeline-entries
             * @name TimelineEntriesUpdate
             * @request POST:/timeline-entries.update
             * @secure
             */
            timelineEntriesUpdate: (data, params = {}) => this.request(Object.assign({ path: `/timeline-entries.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
        };
        this.webhooksCreate = {
            /**
             * @description Creates a new webhook target.
             *
             * @tags webhooks
             * @name WebhooksCreate
             * @request POST:/webhooks.create
             * @secure
             */
            webhooksCreate: (data, params = {}) => this.request(Object.assign({ path: `/webhooks.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
        };
        this.webhooksDelete = {
            /**
             * @description Deletes the requested webhook.
             *
             * @tags webhooks
             * @name WebhooksDelete
             * @request POST:/webhooks.delete
             * @secure
             */
            webhooksDelete: (data, params = {}) => this.request(Object.assign({ path: `/webhooks.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
        };
        this.webhooksGet = {
            /**
             * @description Gets the requested webhook's information.
             *
             * @tags webhooks
             * @name WebhooksGet
             * @request GET:/webhooks.get
             * @secure
             */
            webhooksGet: (query, params = {}) => this.request(Object.assign({ path: `/webhooks.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
        };
        this.webhooksList = {
            /**
             * @description Lists the webhooks.
             *
             * @tags webhooks
             * @name WebhooksList
             * @request GET:/webhooks.list
             * @secure
             */
            webhooksList: (params = {}) => this.request(Object.assign({ path: `/webhooks.list`, method: 'GET', secure: true, format: 'json' }, params)),
        };
        this.webhooksUpdate = {
            /**
             * @description Updates the requested webhook.
             *
             * @tags webhooks
             * @name WebhooksUpdate
             * @request POST:/webhooks.update
             * @secure
             */
            webhooksUpdate: (data, params = {}) => this.request(Object.assign({ path: `/webhooks.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
        };
        this.worksCreate = {
            /**
             * @description Creates new work ([issue](https://devrev.ai/docs/product/build), [ticket](https://devrev.ai/docs/product/support)) item.
             *
             * @tags works
             * @name WorksCreate
             * @request POST:/works.create
             * @secure
             */
            worksCreate: (data, params = {}) => this.request(Object.assign({ path: `/works.create`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
        };
        this.worksDelete = {
            /**
             * @description Deletes a work item.
             *
             * @tags works
             * @name WorksDelete
             * @request POST:/works.delete
             * @secure
             */
            worksDelete: (data, params = {}) => this.request(Object.assign({ path: `/works.delete`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
        };
        this.worksExport = {
            /**
             * @description Exports a collection of work items.
             *
             * @tags works
             * @name WorksExport
             * @request GET:/works.export
             * @secure
             */
            worksExport: (query, params = {}) => this.request(Object.assign({ path: `/works.export`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
        };
        this.worksGet = {
            /**
             * @description Gets a work item's information.
             *
             * @tags works
             * @name WorksGet
             * @request GET:/works.get
             * @secure
             */
            worksGet: (query, params = {}) => this.request(Object.assign({ path: `/works.get`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
        };
        this.worksList = {
            /**
             * @description Lists a collection of work items.
             *
             * @tags works
             * @name WorksList
             * @request GET:/works.list
             * @secure
             */
            worksList: (query, params = {}) => this.request(Object.assign({ path: `/works.list`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
        };
        this.worksUpdate = {
            /**
             * @description Updates a work item's information.
             *
             * @tags works
             * @name WorksUpdate
             * @request POST:/works.update
             * @secure
             */
            worksUpdate: (data, params = {}) => this.request(Object.assign({ path: `/works.update`, method: 'POST', body: data, secure: true, type: ContentType.Json, format: 'json' }, params)),
        };
    }
}
exports.Api = Api;
