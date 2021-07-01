
declare module u8.Base.Reporting {
    class Report {
        constructor(o: object)

        dataSource: _ReportDataSource
        target: string
        transformations: _ReportTransformation

        hasTransformations(): boolean
        setRequestArguments(request: Request, requestArgs: object)
    }

    interface _ReportDataSource {
        contentType: "application/xml" | "text/csv"
        id: string
        type: "Core" | "Query" | "TextReader" | "Uri" | "Xml" | "XmlReader" | "Export"
    }

    interface _ReportTransformation {
        type: "Xsl" | "Pdf"
    }
}