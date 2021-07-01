/// <reference path="./Session/Session.d.ts" />

declare namespace u8.Base {
    interface _Error {
        errorUid?: string,
        message: string,
        stackTrace: string,
        type: string
    }

    interface _EventArgs {

    }
    interface _CancelableEventArgs extends _EventArgs {
        cancel: boolean
    }

    class Session {
        constructor(o: object)

        isLogin: boolean
        parent: Application
        webConfigValues: ConfigValues

        abort(o: object): void
        dispose(): void
        login(options: u8.Base.Session._LoginOptions, callback?: (sender: object, args: _EventArgs) => void): void
        logout(options: u8.Base.Session._LogoutOptions, callback?: (sender: object, args: _EventArgs) => void): void
        refresh(args?: { reason: string }, fn?: (sender: object) => boolean): void

        static bind(string: "onLogin" | "onLogout" | "onRefresh", callback: (sender: any, args: _EventArgs) => void): void
        static bind(string: "onPreLogout", callback: (sender: any, args: _CancelableEventArgs) => void): void
    }


    class ConfigValues {
        get(name: string, defaultValue: object): object
        getBoolean(name: string, defaultValue: boolean): boolean
        getInt(name: string, defaultValue: number): number
        getIntArray(name: string, defaultValue: number[]): number[]
        getOptions(name: string, defaultValue: Options): Options
        getStringArray(name: string, defaultValue): string[]
    }

    class Options {
        /**
         * 
         * @param options MyOption1;MyOption2(1,2,3)
         */
        constructor(options: string)

        parameters: object
        types: object

        toObject(): object
    }


    class Application {
        commandBindings: object
        element: any
        isInit: boolean
        isLoaded: boolean
        startPage: string
        url: string

        bind(event: "onInit" | "onLoad", callback: (sender: object, args: _EventArgs) => void): void
        dispose(): void

        /**
         * Gets the window for the specified name.
         * @param name "work", "main", "top", "process", "popup", "popupProcess", "current" or any of the previous chained together with "|" or an array of any of the previous
         */
        getWindow(name: string): object

        setTitle(title: string): void
    }



}