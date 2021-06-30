declare namespace u8.Crm.QueryStatement {
    interface _OutputField {
        alias: string,
        fieldId: number
    }

    interface _SortField {
        alias: string
        fieldId: number
        flags: number
        sortOrder: "Ascending" | "Descending"
    }

    interface _LoadExpressionValuesEventArgs extends u8.Base._EventArgs {
        values: object
    }
}