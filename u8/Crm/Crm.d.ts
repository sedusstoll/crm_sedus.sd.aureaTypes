/// <reference path="./QueryCommand/QueryCommand.d.ts" />
/// <reference path="./ResultSet/ResultSet.d.ts" />
/// <reference path="./Crud/Crud.d.ts" />
/// <reference path="./Schema/Schema.d.ts" />
/// <reference path="../global.d.ts" />

declare namespace u8.Crm {
    enum CatalogValueEncoding {
        text = "text",
        numeric = "numeric",
        textInBaseLanguage = "textInBaseLanguage"
    }

    enum QueryAssociationMode {
        Default = "Default",
        Include = "Include",
        IncludeConfigured = "IncludeConfigured",
        Exclude = "Exclude"
    }

    interface _LinkRecordUid {
        infoAreaId: string
        linkId: string
        recordId: string
    }
    interface _RecordUid {
        infoAreaId: string
        recordId: string
    }

    interface QueryCommandConstructor {
        associationMode?: u8.Crm.QueryAssociationMode,
        link?: u8.Crm._LinkRecordUid
        links?: u8.Crm._LinkRecordUid[]
        maxRows: number
        name?: string
        parameters?: object
        queryLookupScope?: string
        skipRows?: number
        statement: string
        virtualInfoAreaReadMode?: string
    }

    class QueryCommand {
        constructor(para: QueryCommandConstructor)
        constructor()

        maxRows: number;
        statement: any;
        error?: {
            message: string;
        };


        canDelete(): boolean
        canExecute(): boolean
        clone(): QueryCommand
        dispose()
        execute(callback)
        execute(o: u8.Crm.QueryCommand._ExecuteOptions, callback)
        executeExport(o, [callback])
        executeInBackground(o, [callback])
        getStatementString(o): string
        isLoaded(): boolean
        load(o, callback)
        loadFilter(o, callback)
        save(o, callback)
        saveFilter(o, callback)
        setStatement(statement)
        update(o)
    }


    interface QueryResult {
        cancle?: boolean,
        options?: {
            maxRows: number
            queryLookupScope: any
            skipRows: number
            virtualInfoAreaReadMode: string
        },
        resultSet?: ResultSet
    }



    interface UID {
        infoAreaId: string
        recordId: string
    }



    interface ResultSet {
        autoload: u8.Crm.ResultSet._AutoLoadOptions
        autoRefresh: boolean
        catalogValueEncoding: string
        columns: u8.Crm.ResultSet._Column[]
        id: string
        numberOfRows: string
        query: any
        moreRowsExist: boolean
        recordsPerRow: u8.Crm.ResultSet._RowRecord[]
        rootAlias: string
        rows: u8.Crm.ResultSet._Row[]
        saveProvider: any
        sortFields: any
        _isLoaded: boolean
        _raiseEvents: boolean
    }

    class Crud {
        create(o: u8.Crm.Crud._CreateRequest, callback: (sender: object, args: u8.Crm.Crud._EventArgs) => any);
        delete_(o: u8.Crm.Crud._DeleteRequest, callback: (sender: object, args: u8.Crm.Crud._DeleteEventArgs) => any)
        executeBatch(o: u8.Crm.Crud._DeleteRequest, callback: (sender: object, args: u8.Crm.Crud._DeleteEventArgs) => any)
        getUidFromEventArgs(args: u8.Crm.Crud._EventArgs)
        notify(operation: "Create" | "Read" | "Update" | "Delete", args: u8.Crm.Crud._EventArgs)
        read(o: u8.Crm.Crud._ReadRequest, callback: (sender: object, args: u8.Crm.Crud._EventArgs) => any)
        readFields(o: u8.Crm.Crud._ReadFieldRequest, callback: (sender: object, args: u8.Crm.Crud._ReadFieldsEventArgs) => any)
        readLink(o: u8.Crm.Crud._ReadLinkOptions, callback: (sender: object, args: u8.Crm.Crud._EventArgs) => any)
        update(o: u8.Crm.Crud._UpdateRequest, callback: (sender: object, args: u8.Crm.Crud._EventArgs) => any)
        static buildMessages(crudArgs: u8.Crm.Crud._ExecuteBatchEventArgs): u8.Crm.Crud._CrudMessage[]
        static buildSaveMessage(crudSaveArgs: IDictionary<string, object>): string
    }

    class BusinessObject {
        linked?: IDictionary<string, BusinessObject>[]
        uid: _RecordUid
        values: object

        clear();
        clearModified(fieldId?: number)
        clone(): BusinessObject
        dispose()
        get(fieldId: number | string): string
        getFieldValue(fieldId: object);
        getLinkFieldUid(fieldId: number): _RecordUid;
        getLinkedBusinessObject(alias: string): BusinessObject;
        getModifiedFieldIds(): number[];
        getModifiedValues(): IDictionary<number, string>
        getVersion(): number;
        isFieldModified(fieldId: object): boolean
        isModified(): boolean
        loadResources(o: boolean | u8.Crm.BusinessObject._LoadResourcesOptions, callback: Function)
        set(fieldId: number | string, value: string, markAsModified?: boolean)
        setFieldModified(fieldId?: number)
        setFieldValue(fieldId: object, value: object)
        setFrom(businessObject: BusinessObject, forceFieldValueChangeEvent: boolean)
        coerceValue(schema: u8.Crm.Schema.FieldSchema, v: object, bo?: BusinessObject): object
        equalsValue(schema: u8.Crm.Schema.FieldSchema, v1: string, v2: string): boolean
    }

}