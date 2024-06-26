import { Context, ExecutionMetadata, FunctionInput, InputData } from './types';

const DEVORG_OID = 'don:identity:dvrv-us-1:devo/TEST-DEVORG';
const AUTOMATION_ID =
  'don:integration:dvrv-us-1:devo/TEST-DEVORG:automation/00000000-0000-0000-0000-000000000000';
const SOURCE_ID =
  'don:integration:dvrv-us-1:devo/TEST-DEVORG:automation/00000000-0000-0000-0000-000000000000';
const SNAP_IN_ID =
  'don:integration:dvrv-us-1:devo/TEST-DEVORG:snap_in/00000000-0000-0000-0000-000000000000';
const SNAP_IN_VERSION_ID =
  'don:integration:dvrv-us-1:devo/TEST-DEVORG:snap_in_package/00000000-0000-0000-0000-000000000000';
const SERVICE_ACCOUNT_ID =
  'don:identity:dvrv-us-1:devo/TEST-DEVORG:svcacc/00000000-0000-0000-0000-000000000000';
const USER_ID =
  'don:identity:dvrv-us-1:devo/TEST-DEVORG:devu/123';

describe('Snap-ins types', () => {
  describe('Context', () => {
    test('should have the required properties', () => {
      const context: Context = {
        dev_oid: DEVORG_OID,
        source_id: SOURCE_ID,
        snap_in_id: SNAP_IN_ID,
        snap_in_version_id: SNAP_IN_VERSION_ID,
        service_account_id: SERVICE_ACCOUNT_ID,
        secrets: { secret1: 'value1', secret2: 'value2' },
        user_id: USER_ID,
      };

      expect(context).toHaveProperty('dev_oid');
      expect(context).toHaveProperty('source_id');
      expect(context).toHaveProperty('snap_in_id');
      expect(context).toHaveProperty('snap_in_version_id');
      expect(context).toHaveProperty('service_account_id');
      expect(context).toHaveProperty('secrets');
      expect(context).toHaveProperty('user_id');
    });
  });

  describe('ExecutionMetadata', () => {
    test('should have the required properties', () => {
      const executionMetadata: ExecutionMetadata = {
        request_id: 'request-123',
        function_name: 'functionName',
        event_type: 'eventType',
        devrev_endpoint: 'https://api.devrev.ai',
      };

      expect(executionMetadata).toHaveProperty('request_id');
      expect(executionMetadata).toHaveProperty('function_name');
      expect(executionMetadata).toHaveProperty('event_type');
      expect(executionMetadata).toHaveProperty('devrev_endpoint');
    });
  });

  describe('InputData', () => {
    test('should have the required properties', () => {
      const inputData: InputData = {
        global_values: { key1: 'value1', key2: 'value2' },
        event_sources: { source1: 'source1', source2: 'source2' },
      };

      expect(inputData).toHaveProperty('global_values');
      expect(inputData).toHaveProperty('event_sources');
    });
  });

  describe('FunctionInput', () => {
    test('should have the required properties', () => {
      const functionInput: FunctionInput = {
        payload: { key1: 'value1', key2: 'value2' },
        context: {
          dev_oid: DEVORG_OID,
          source_id: SOURCE_ID,
          snap_in_id: SNAP_IN_ID,
          snap_in_version_id: SNAP_IN_VERSION_ID,
          service_account_id: SERVICE_ACCOUNT_ID,
          secrets: { secret1: 'value1', secret2: 'value2' },
          user_id: USER_ID,
        },
        execution_metadata: {
          request_id: 'request-123',
          function_name: 'functionName',
          event_type: 'eventType',
          devrev_endpoint: 'https://api.devrev.ai',
        },
        input_data: {
          global_values: { key1: 'value1', key2: 'value2' },
          event_sources: { source1: 'source1', source2: 'source2' },
        },
      };

      expect(functionInput).toHaveProperty('payload');
      expect(functionInput).toHaveProperty('context');
      expect(functionInput).toHaveProperty('execution_metadata');
      expect(functionInput).toHaveProperty('input_data');
    });
  });
});
