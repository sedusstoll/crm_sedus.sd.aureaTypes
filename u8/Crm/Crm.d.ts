/// <reference path="./QueryCommand/QueryCommand.d.ts" />
/// <reference path="./ResultSet/ResultSet.d.ts" />
/// <reference path="./Crud/Crud.d.ts" />
/// <reference path="./Schema/Schema.d.ts" />
/// <reference path="./Filter/Filter.d.ts" />
/// <reference path="./Session/Session.d.ts" />
/// <reference path="./QueryStatement/QueryStatement.d.ts" />
/// <reference path="../global.d.ts" />
/// <reference path="../Base/Base.d.ts" />

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

    enum QueryLinkType {
        With = "With",
        Without = "Without",
        Plus = "Plus",
        WithSummed = "WithSummed",
        PlusSummed = "PlusSummed",
        Root = "Root",
        WithOptional = "WithOptional",
        WithoutOptional = "WithoutOptional",
        WithSummedOptional = "WithSummedOptional",
        Having = "Having",
        HavingOptional = "HavingOptional"
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

        associationMode: u8.Crm.QueryAssociationMode
        link: u8.Crm._LinkRecordUid
        links: u8.Crm._LinkRecordUid[]
        maxRows: number
        name: string
        parameters: object
        queryLookupScope: string
        skipRows: number
        statement: QueryStatement
        error?: { message: string; }
        virtualInfoAreaReadMode: string


        canDelete(): boolean
        canExecute(): boolean
        clone(): QueryCommand
        dispose(): void
        execute(callback: (sender: object, args: u8.Crm.QueryCommand._ExecuteEventArgs) => void): void
        execute(o: u8.Crm.QueryCommand._ExecuteOptions, callback: (sender: object, args: u8.Crm.QueryCommand._ExecuteEventArgs) => void): void
        executeExport(o: u8.Crm.QueryCommand._ExecuteExportOptions, callback?: (sender: object, sender2: object) => void): void
        executeInBackground(o: u8.Crm.QueryCommand._ExecuteOptions, callback?: (sender: object, args: u8.Crm.QueryCommand._ExecuteInBackgroundEventArgs) => void): void
        getStatementString(o: object): string
        isLoaded(): boolean
        load(o: u8.Crm.QueryCommand._LoadOptions, callback: (sender: object, args: u8.Crm.QueryCommand._LoadEventArgs) => void): void
        loadFilter(o: u8.Crm.QueryCommand._LoadOptions, callback: (sender: object, args: u8.Crm.QueryCommand._LoadEventArgs) => void): void
        save(o: u8.Crm.QueryCommand._SaveOptions, callbac: (sender: object, args: u8.Crm.QueryCommand._SaveEventArgs) => void): void
        saveFilter(o: u8.Crm.QueryCommand._SaveOptions, callbac: (sender: object, args: u8.Crm.QueryCommand._SaveEventArgs) => void): void
        setStatement(statement: string | QueryStatement): void
        update(o: object): void
    }

    class QueryStatement {
        constructor(o: object)

        outputFields: u8.Crm.QueryStatement._OutputField[]
        root: QueryNode
        sortFields: u8.Crm.QueryStatement._SortField[]

        at(alias: string): QueryNode
        clear(): void
        clone(): QueryStatement
        each(callback: (item: QueryNode) => void): void
        findUniqueAlias(infoAreaId: string): string
        from(infoAreaId: string, alias: string): QueryNode
        getParameters(nodes: FilterNode[]): FilterNode[]
        hasParameters(): boolean
        isEmpty(): boolean
        select(outputFields: u8.Crm.QueryStatement._OutputField[] | u8.Crm.QueryStatement._OutputField | string | number): QueryStatement
        setRoot(r: QueryNode): QueryStatement
        toStatementString(o: object): string

        static createNode(o: IQueryNode): QueryNode
        static createSortField(alias: string, sortFieldUid: SortFieldUid): u8.Crm.QueryStatement._SortField
        static loadExpressionValues(callback: (sender: object, args: u8.Crm.QueryStatement._LoadExpressionValuesEventArgs) => void): void
    }

    class SortFieldUid {
        field: FieldUid
        sortOrder: "Ascending" | "Descending"
        static parse(infoAreaId: string, sortField: string): void
    }

    class FilterNode {
        constructor(f: IDictionary<string, object>)

        children: FilterNode[]
        filter: Filter
        lValue: u8.Crm.Filter._Value
        nodeType: "FilterLeafNode" | "FilterOperatorNode"
        operator: "=" | ">" | ">=" | "<" | "<=" | "AND" | "OR"
        parent: FilterNode
        rValue: u8.Crm.Filter._Value

        addChild(child: FilterNode): FilterNode
        and(): FilterNode
        clone(): FilterNode
        each(callback: (item: FilterNode) => void): FilterNode
        equals(lValue: object, rValue: object): FilterNode
        getFilter(): Filter
        getParents(parents: object[])
        greater(lValue: object, rValue: object): FilterNode
        greaterEqual(lValue: object, rValue: object): FilterNode
        hasChildren(): boolean
        insertChildAfter(existingChild: FilterNode, newChild: FilterNode): FilterNode
        isAdvanced(): boolean
        isAdvancedAndNormal(): boolean
        isLeaf(): boolean
        isRoot(): boolean
        less(lValue: object, rValue: object): FilterNode
        lessEqual(lValue: object, rValue: object): FilterNode
        or(): FilterNode
        remove(): FilterNode
        replace(replacementNode: FilterNode): FilterNode
    }

    interface FieldUid {
        fieldId: number;
        infoAreaId: string
    }
    interface IQueryNode {
        alias: string
        children: QueryNode[]
        filter: Filter
        infoAreaId: string
        linkId: number
        linkType: u8.Crm.QueryLinkType
        maxRows: number
        parent: QueryNode
    }
    class QueryNode implements IQueryNode {
        alias: string
        children: QueryNode[]
        filter: Filter
        infoAreaId: string
        linkId: number
        linkType: u8.Crm.QueryLinkType
        maxRows: number
        parent: QueryNode

        addChild(child: QueryNode): QueryNode
        addFilter(f: Filter): QueryNode
        at(filter: number | string | Function | boolean): QueryNode
        canHaveOutputFields(): boolean
        canHaveSortFields(): boolean
        clone(): QueryNode
        count(): number
        each(callback: (item: QueryNode) => void): void
        findUniqueAlias(infoAreaId: string): string
        getAllInfoAreaIds(): void
        getOutputFields(): u8.Crm.QueryStatement._OutputField[]
        getParents(parents: QueryNode[]): void
        getQuery(): QueryStatement
        getRoot(): QueryNode
        getSortFields(): u8.Crm.QueryStatement._SortField[]
        hasChildren(): boolean
        join(linkType: u8.Crm.QueryLinkType, qn: string | QueryNode, alias?: string, linkId?: string): QueryNode
        plus(qn: string | QueryNode, alias: string, linkId?: string): QueryNode
        remove(): QueryNode
        removeOutputFields(): QueryNode
        removeSortFields(): QueryNode
        select(outputFields: u8.Crm.QueryStatement._OutputField[]): QueryNode
        setFilter(f: Filter): QueryNode
        setOutputFields(outputFields: u8.Crm.QueryStatement._OutputField[]): QueryNode
        setSortFields(sortFields: u8.Crm.QueryStatement._SortField[]): QueryNode
        where(f: Filter): QueryNode
        with_(qn: string | QueryNode, alias: string, linkId?: string): QueryNode

        static canBeOptional(linkType: u8.Crm.QueryLinkType): boolean
        static canHaveAdvancedFilters(linkType: u8.Crm.QueryLinkType): boolean
        static canHaveMaxRows(linkType: u8.Crm.QueryLinkType): boolean
        static canHaveOutputFields(linkType: u8.Crm.QueryLinkType): boolean
    }

    class Filter {

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
        create(o: u8.Crm.Crud._CreateRequest, callback: (sender: object, args: u8.Crm.Crud._EventArgs) => any): void;
        delete_(o: u8.Crm.Crud._DeleteRequest, callback: (sender: object, args: u8.Crm.Crud._DeleteEventArgs) => any): void;
        executeBatch(o: u8.Crm.Crud._DeleteRequest, callback: (sender: object, args: u8.Crm.Crud._DeleteEventArgs) => any): void;
        getUidFromEventArgs(args: u8.Crm.Crud._EventArgs): void;
        notify(operation: "Create" | "Read" | "Update" | "Delete", args: u8.Crm.Crud._EventArgs): void;
        read(o: u8.Crm.Crud._ReadRequest, callback: (sender: object, args: u8.Crm.Crud._EventArgs) => any): void;
        readFields(o: u8.Crm.Crud._ReadFieldRequest, callback: (sender: object, args: u8.Crm.Crud._ReadFieldsEventArgs) => any): void;
        readLink(o: u8.Crm.Crud._ReadLinkOptions, callback: (sender: object, args: u8.Crm.Crud._EventArgs) => any): void;
        update(o: u8.Crm.Crud._UpdateRequest, callback: (sender: object, args: u8.Crm.Crud._EventArgs) => any): void;
        static buildMessages(crudArgs: u8.Crm.Crud._ExecuteBatchEventArgs): u8.Crm.Crud._CrudMessage[]
        static buildSaveMessage(crudSaveArgs: IDictionary<string, object>): string
    }

    class BusinessObject {
        linked?: IDictionary<string, BusinessObject>[]
        uid: _RecordUid
        values: object

        clear(): void;
        clearModified(fieldId?: number): void;
        clone(): BusinessObject
        dispose(): void;
        get(fieldId: number | string): string
        getFieldValue(fieldId: object);
        getLinkFieldUid(fieldId: number): _RecordUid;
        getLinkedBusinessObject(alias: string): BusinessObject;
        getModifiedFieldIds(): number[];
        getModifiedValues(): IDictionary<number, string>
        getVersion(): number;
        isFieldModified(fieldId: object): boolean
        isModified(): boolean
        loadResources(o: boolean | u8.Crm.BusinessObjects._LoadResourcesOptions, callback: Function): void;
        set(fieldId: number | string, value: string, markAsModified?: boolean): void;
        setFieldModified(fieldId?: number): void;
        setFieldValue(fieldId: object, value: object): void;
        setFrom(businessObject: BusinessObject, forceFieldValueChangeEvent: boolean): void;
        coerceValue(schema: u8.Crm.Schema.FieldSchema, v: object, bo?: BusinessObject): object
        equalsValue(schema: u8.Crm.Schema.FieldSchema, v1: string, v2: string): boolean
    }


    class Session extends u8.Base.Session {
        environment: u8.Crm.Session._Environment
        identity: u8.Crm.Session._Identity

        hasDisabledActiveX(): void
        onCreateBrowserPluginFailed(o: object): void
        refreshWorkWindow(): void
    }


    class BusinessObjects {
        copyUrlToClipboard(uid: _RecordUid): void
        duplicate(options: u8.Crm.BusinessObjects._DuplicateOptions, callback: (sender: object, args: { uid: _RecordUid }) => void): void
        executeTrigger(o: u8.Crm.BusinessObjects._ExecuteTriggerRequest, callback: (sender: object, args: object) => void): void
        executeWorkflow(o: u8.Crm.BusinessObjects._ExecuteWorkflowRequest, callback: (sender: object, args: u8.Crm.BusinessObjects._ExecuteWorkflowResponse) => void): void
        getUrls(uid: _RecordUid, callback: (sender: object) => void): void
        processLink(o: u8.Crm.Crud._ReadLinkOptions): void
        showMenu(o: { uid: _RecordUid, element: any, elEvent: any, parent?: any }): void
        showQuickView(o: { uid: _RecordUid, element: any, parent: any, elEvent: any, link?: any }): void
        showUrls(uid: _RecordUid): void
    }

    interface _Message {
        fieldId: number
        infoAreaId: string
        messageType: string
        source: string
        text: string
    }

}