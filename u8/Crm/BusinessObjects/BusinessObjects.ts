/// <reference path="../Crm.d.ts" />

declare namespace u8.Crm.BusinessObjects {
    interface _LoadResourcesOptions {
        catalogs: boolean;
        reps: boolean;
        schema: boolean;
    }

    interface _DuplicateOptions {
        ignoreFields: number[] | string[]
        uid: string
    }

    interface _ExecuteTriggerRequest {
        accessMode: "Scroll" | "New" | "Update" | "Delete" | "Search" | "Edit" | "Close"
        executionMode: "Default" | "Calculations" | "All"
        fields: object[]
        fieldsToCheck: string[]
        infoAreaId: string
        links: u8.Crm._LinkRecordUid
        name: string
        uid: u8.Crm._RecordUid
        uids: u8.Crm._RecordUid[]
    }

    interface _ExecuteWorkflowRequest {
        asynchronous: boolean
        flags: number
        name: string
        parameters: _ExecuteParameter[]
        uids: _RecordUid[]
    }

    interface _ExecuteParameter {
        name: string
        values: string[]
    }

    interface _ExecuteWorkflowResponse {
        changedRecords: _ExecuteWorkflowRecord[]
        messages: _WorkflowMessage[]
        parameters: _ExecuteParameter[]
    }

    interface _WorkflowMessage extends u8.Crm._Message { }

    interface _ExecuteWorkflowRecord {
        /**
         * 1 (New), 2 (Update), 3 (Delete)
         */
        accessMode: number
        uid: u8.Crm._RecordUid
    }
}