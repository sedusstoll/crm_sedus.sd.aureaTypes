/// <reference path="../Crm.d.ts" />
/// <reference path="../../Base/Base.d.ts" />
/// <reference path="../../Base/Reporting/Reporting.d.ts" />

declare module u8.Crm.QueryCommand {

    interface _ExecuteOptions {
        associationMode?: u8.Crm.QueryAssociationMode
        catalogValueEncoding?: u8.Crm.CatalogValueEncoding
        companyRelated?: boolean
        countRows?: boolean
        link?: _LinkRecordUid
        links?: _LinkRecordUid
        maxRows?: number
        parameters?: object
        queryLookupScope?: string
        readDeletedRecords?: boolean
        skipRows?: number
        timeout?: number
        virtualInfoAreaReadMode?: string
    }

    interface _ExecuteEventArgs {
        error: u8.Base._Error
        resultSet: u8.Crm.ResultSet
        t: u8.Crm.QueryAssociationMode
    }

    class _ExecuteExportOptions {
        report: u8.Base.Reporting.Report
    }

    interface _ExecuteInBackgroundEventArgs extends u8.Base._EventArgs {
        error: u8.Base._Error
        resultsDueAt: Date
        todoRecordId: string
    }
    interface _LoadEventArgs extends u8.Base._EventArgs {
        error: u8.Base._Error
    }

    interface _SaveEventArgs extends u8.Base._EventArgs {
        uri: string
    }

    interface _LoadOptions {
        infoAreaId?: string
        isFilter?: boolean
        name?: string
    }

    interface _SaveOptions {
        associationMode: u8.Crm.QueryAssociationMode
        isFilter: boolean
        isPrivate: boolean
        name: string
        uri: string
    }
}