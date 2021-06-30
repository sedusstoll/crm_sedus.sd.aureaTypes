/// <reference path="../Crm.d.ts" />
/// <reference path="../../Base/Base.d.ts" />

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
}