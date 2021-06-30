declare namespace u8.Base.Templates {

    interface _ExecuteOptions {
        data: object,
        inserter: (DOMElement: any, html: string) => any,
        itemOptions: object,
        name: string,
        template: string
    }
}