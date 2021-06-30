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
}