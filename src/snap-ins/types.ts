import { WebhookEventRequest } from '../auto-generated/public-devrev-sdk';
import { OperationIfc } from './interfaces';
import { ExecuteOperationInput } from './schema.pb';
/**
 * The context object contains information about the execution environment and the snap-in.
 */
export type Context = {
  /**
   * ID of the DevOrg for which the function is being invoked.
   */
  dev_oid: string;
  /**
   * ID of the Automation/Command/SnapKit Action/Event Source for which the function is being invoked.
   */
  source_id: string;
  /**
   * ID of the Snap-in as part of which the function is being invoked.
   */
  snap_in_id: string;
  /**
   * ID of the Snap-in version as part of which the function is being invoked.
   */
  snap_in_version_id: string;
  /**
   * The ID of the service account associated with the snap-in.
   */
  service_account_id: string;
  /**
   * This secrets map would contain some secrets which platform would provide to the snap-in.
   * `service_account_token`: This is the token of the service account which belongs to this snap-in. This can be used to make API calls to DevRev.
   * `actor_session_token`: For commands, and snap-kits, where the user is performing some action, this is the token of the user who is performing the action.
   */
  secrets: Record<string, string>;
  /**
   * The ID of the user on whose behalf the function is being invoked.
   */
  user_id?: string;
};

/**
 * Metadata about the execution of the function.
 */
export type ExecutionMetadata = {
  /**
   * A unique id for the function invocation. Can be used to filter logs for a particular invocation.
   */
  request_id: string;
  /**
   * Function name as defined in the manifest being invoked.
   */
  function_name: string;
  /**
   * Type of event that triggered the function invocation as defined in manifest.
   */
  event_type: string;
  /**
   * DevRev endpoint to which the function can make API calls.
   * @example
   * "https://api.devrev.ai/"
   */
  devrev_endpoint: string;
};

/**
 * Input data provided to the function.
 */
export type InputData = {
  /**
   * Map of globals and their corresponding values stored in Snap-in.
   * The values are passed as string and typing need to be handled by the function
   */
  global_values: Record<string, string>;
  /**
   * Map of event sources and their corresponding ids stored in Snap-in.
   * These could be used to schedule events on a schedule based event source.
   */
  event_sources: Record<string, string>;

  /**
   * Map of resources stored in the Snap-in. The resources include keyrings and tags.
   * The key is the resource name defined in manifest and value is the resource object.
   */
  resources?: Record<string, any>;
};

/**
 * The input object received by the function.
 */
export type FunctionInput = {
  /**
   * Actual payload of the event. WebhookEventRequest if event souce is `devrev-webhooks`; otherwise, a record of event data.
   */
  payload: WebhookEventRequest | Record<string, any> | ExecuteOperationInput;
  /**
   * Context of the function invocation.
   */
  context: Context;
  /**
   * Metadata of the function invocation.
   */
  execution_metadata: ExecutionMetadata;
  /**
   * Input data provided to the function.
   */
  input_data: InputData;
};

/**
 * Return type for hooks.
 */
export interface HookResult {
  /**
   * Updated input values returned from hooks function execution
   */
  inputs_values: Record<string, string>;
}

/**
 *  Metadata about the operation context. This is passed to the operation function as an argument.
 */
export type OperationContext = {
  /**
   * DevRev endpoint to which the function can make API calls.
   * @example
   * "https://api.devrev.ai/"
   */
  devrev_endpoint: string;

  /**
   * This secrets map would contain some secrets which platform would provide to the snap-in.
   * `access_token`: Access token of the user invoking this operation.
   */
  secrets: OperationContextSecrets;

  /**
   * ID of the DevOrg for which the function is being invoked.
   */
  dev_oid: string;

  /**
   * Name of the input port.
   */
  input_port: string;

  /**
   * Additional metadata that the developer can pass to the Operation.
   */
  metadata?: Record<string, any>;
};

export type OperationContextSecrets = {
  /**
   * Access token of the user invoking this operation.
   */
  access_token: string;
};

/**
 * Map of operation slug to operation class.
 */
export type OperationMap = {
  [slug: string]: new (e: any) => OperationIfc;
};

/**
 * Error instance type to be thrown when an error occurs in the snap-in. The
 * error type is used to determine if the event should be retried or not.
 */
export class FunctionExecutionError extends Error {
  /**
   * Toggle to determine if the event should be retried or not. If not set or set to false,
   * the event will not be retried.
   */
  retry: boolean;

  /**
   * Whether to retry the event payload with updated metadata
   * that platform provides. Useful when the event payload is
   * not in a state to be directly processed, and may need new 
   * keyrings/service account tokens or new inputs.
   */
  refresh?: boolean;

  constructor(message: string, retry: boolean, refresh?: boolean) {
    super(message);
    this.retry = retry;
    this.refresh = refresh;
  }
}
