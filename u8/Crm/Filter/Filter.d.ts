declare namespace u8.Crm.Filter {
    interface _Value {
        fieldId: number,
        function?: "SUM" | "COUNT" | "DATEPART"
        value: string
    }
}