/// <reference path="../Crm.d.ts" />
/// <reference path="../BusinessObjects/BusinessObjects.ts" />
/// <reference path="../../Base/Request/Request.d.ts" />
/// <reference path="../../Base/Base.d.ts" />

declare namespace u8.Crm.Crud {
    interface _RequestBase {
        alias?: string,
        requestQueue?: u8.Base.Request.Queue,
        type: "create" | "read" | "update" | "delete" | "createOrUpdate"
    }

    interface _CreateRequest extends _RequestBase {
        businessObject?: u8.Crm.BusinessObject,
        fields: _Field[],
        infoAreaId: string,
        options?: _CreateOptions
    }

    interface _ReadRequest extends _RequestBase {
        autoLoad?: boolean | u8.Crm.BusinessObjects._LoadResourcesOptions,
        fields: (number | string)[],
        options?: _ReadOptions,
        uid: u8.Crm._RecordUid
    }

    interface _DeleteRequest extends _RequestBase {
        uid: u8.Crm._RecordUid
    }

    interface _UpdateRequest extends _RequestBase {
        businessObject: u8.Crm.BusinessObjects,
        fields: _Field[],
        options: _UpdateOptions,
        uid: u8.Crm._RecordUid
    }

    interface _ReadFieldRequest extends _RequestBase {
        fields: (number | string)[],
        options?: _ReadOptionsBase,
        uid: u8.Crm._RecordUid
    }

    interface _Field {
        field: number | string,
        value: string
    }

    interface _CreateOptions {
        catalogValueEncoding?: u8.Crm.CatalogValueEncoding,
        defaultValuesName?: string,
        links?: _LinkRecordUid[],
        useDefaultValues?: boolean
    }

    interface _UpdateOptions {
        catalogValueEncoding?: u8.Crm.CatalogValueEncoding,
        links?: _LinkRecordUid[]
    }

    interface _ReadOptions {
        linked: _ReadLinkedOptions[]
    }

    interface _ReadOptionsBase {
        catalogValueEncoding?: u8.Crm.CatalogValueEncoding,
        link?: _LinkRecordUid,
        linkName?: string
    }

    interface _ReadLinkedOptions {
        autoLoad: boolean | u8.Crm.BusinessObjects._LoadResourcesOptions,
        fields: number | string,
        infoAreaId: string,
        linkName: string,
        linked: _ReadLinkedOptions[]
    }

    interface _ReadLinkOptions {
        link: _LinkRecordUid,
        linkName: string,
        uid: _RecordUid
    }

    interface _EventArgs {
        businessObject: u8.Crm.BusinessObjects,
        error: u8.Base._Error
    }

    interface _DeleteEventArgs extends _EventArgs {
        found: boolean,
        uid: u8.Crm._RecordUid
    }

    interface _ExecuteBatchEventArgs extends _EventArgs {
        results: _BatchResult[]
    }

    interface _ReadFieldsEventArgs extends _EventArgs {
        uid: u8.Crm._RecordUid,
        values: string[]
    }

    interface _BatchResult {
        alias: string,
        businessObject: BusinessObjects,
        found: boolean,
        type: "create" | "read" | "update" | "delete"
    }





    interface _ExecuteBatchRequest {
        requests: (_CreateRequest | _ReadRequest | _UpdateRequest | _DeleteRequest)[]
    }

    class _CrudMessage {
        alias: string
    }
}