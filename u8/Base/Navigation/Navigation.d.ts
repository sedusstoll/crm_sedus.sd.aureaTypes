/// <reference path="../Base.d.ts" />

declare namespace u8.Base.Navigation {
    interface _NavigationEventArgs {
        cancel: boolean
        navigationId: number
        options: _Options
        retry: number
        url: u8.Base.Uri
        wait: boolean
    }

    interface _Options {
        browserHistory: string
        createNewPopup: boolean
        createNewTab: boolean
        elWindow: HTMLElement
        history: string
        noParameters: boolean
        pageOptions: object
        target: string
    }

    interface _PageParameters{
        
    }
}