import { OperationOutput } from './schema.pb';
import { OperationContext } from './types';

/**
 * Interface for the operation base class. Contains the GetContext method.
 */
export interface OperationBaseIfc {
  GetContext: (...args: any[]) => OperationContext;
}

/**
 * Interface for the operation class. All operations should implement this interface.
 * Extends the OperationBaseIfc interface.
 */
export interface OperationIfc extends OperationBaseIfc {
  run(
    metadata: OperationContext,
    input: Record<string, any>,
    resources: Record<string, any>
  ): Promise<OperationOutput>;
}
