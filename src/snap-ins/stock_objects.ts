import { OperationBaseIfc } from './interfaces';
import { ExecuteOperationInput } from './schema.pb';
import { FunctionInput, OperationContext } from './types';

/**
 * Base class for all operations.
 * GetContext() can be overridden by the developer
 * to add custom metadata.
 */
export class OperationBase implements OperationBaseIfc {
  private e: FunctionInput;

  private p: ExecuteOperationInput;

  constructor(event: FunctionInput) {
    this.e = event;
    this.p = event.payload as ExecuteOperationInput;
  }

  /** 
   * Default implementation of GetContext to return the context object from the event.
   */
  GetContext(): OperationContext {
    return {
      devrev_endpoint: this.e.execution_metadata.devrev_endpoint,
      secrets: {
        access_token: this.e.context.secrets.access_token,
      },
      dev_oid: this.e.context.dev_oid,
      input_port: this.p.input_port_name,
    };
  }
}
