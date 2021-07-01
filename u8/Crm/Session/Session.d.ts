/// <reference path="../../global.d.ts" />
/// <reference path="../Crm.d.ts" />
/// <reference path="../Languages/Languages.d.ts" />

declare namespace u8.Crm.Session {


    interface _Environment {
        applicationName: string
        applicationPath: string
        associationMode: u8.Crm.QueryAssociationMode
        catalogBaseLanguage: u8.Crm.Languages._LanguageUid
        copyrightInfo: string
        imagesUri: string
        isCatalogMaintenanceStation: boolean
        isConfigurationReadOnly: boolean
        isLanguageLicensed: boolean
        isOfflineClient: boolean
        language: u8.Crm.Languages._LanguageUid
        startTime: Date
        stationNumber: number
        stylesUri: string
        theme: string
        version: string
        vertical: string
    }

    interface _Identity {
        companyUid: u8.Crm._RecordUid
        deputyRepId: number
        groupLeaderRepId: number
        isSuperUser: boolean
        orgGroupId: number
        personUid: u8.Crm._RecordUid
        repId: number
        repName: string
        roleIds: IDictionary<number, string>
        superiorRepId: number
        tenantName: string
        tenantNo: number
        userName: string
    }

}