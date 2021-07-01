/// <reference path="../Crm.d.ts" />
/// <reference path="../BusinessObjects/BusinessObjects.ts" />

declare namespace u8.Crm.ListReader {
    interface _Arguments {
        additionalFields: string[]
        conditionalRightsOptions: _ConditionalRightsOptions
        filterStatement: string
        filters: u8.Crm.FieldFilter[]
        hintMode: string
        includeConditionalRights: boolean
        maxRows: number
        parameters: object
        recordParameterName: string
        skipRows: number
        workflow: u8.Crm.BusinessObjects._ExecuteWorkflowRequest
    }

    interface _ConditionalRightsOptions {
        /**
         * A combination (separated by "|") of the following strings: "CheckViewRight", "CheckUpdateRight", "CheckDeleteRight", "CheckNewRight", "CheckAllRights"
         */
        flags: string
    }
}