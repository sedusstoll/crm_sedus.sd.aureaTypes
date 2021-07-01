/// <reference path="../Crm.d.ts" />

declare namespace u8.Crm.ResultSet {
    interface _AutoLoadOptions {
        catalogs: boolean
        schema: boolean
        reps: boolean
    }

    interface _Column {
        alias: string
        fieldId: number
        infoAreaId: string
        label: string
    }

    interface _Row {
        uids: u8.Crm._RecordUid[]
        values: string[]
    }

    interface _RowRecord {
        alias: string
        infoAreaId: string
    }

    interface _ValueChangeArgs extends u8.Base._EventArgs {
        columnIndex: number
        rowIndex: number
        value: object
    }

    interface _UpdateEventArgs extends u8.Base._EventArgs {
        clear: boolean
        reason: "removeRows" | "removeAllRows" | "removeRowAt" | "insertRowsAt" | "replaceRowsAt" | "merge" | "clear" | "apply"
        sizeChanged: boolean
    }

    interface _AutoRefreshEventArgs extends u8.Base._CancelableEventArgs {
        operation: "Create" | "Read" | "Update" | "Delete"
        uid: u8.Crm._RecordUid
    }

    interface _LoadOptions {
        clear?: boolean
        from: number
        reload?: boolean
        to: number
    }

    interface _ToRecordSetOptions {
        excludeInfoAreaId?: string
        from?: number
        includeInfoAreaId?: string
        limitIndex?: number
        startIndex?: number
        to?: number
    }

    interface _MergeOptions {
        clear?: boolean
    }

    interface _CloneOptions {
        cloneRows: boolean
        rowPredicate: (row: _Row, index: number) => boolean
        rows: _Row[]
    }

    interface _BuildTotalsRowOptions {
        autoAppend: boolean
        filter: (row: _Row) => boolean
    }
}