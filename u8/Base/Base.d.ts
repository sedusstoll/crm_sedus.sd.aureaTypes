/// <reference path="../global.d.ts" />
/// <reference path="./Session/Session.d.ts" />
/// <reference path="./DateRange/DateRange.d.ts" />
/// <reference path="./Navigation/Navigation.d.ts" />
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

    class Navigation {
        constructor(o: object)

        bind(event: "u8.services.navigation.onPreNavigate" | "u8.services.navigation.onNavigate", handler: (sender: object, args: u8.Base.Navigation._NavigationEventArgs) => void): void

        timeout: number

        canNavigate(): boolean
        getPageUrl(name: string, params: string | object, o: object): Uri
        guardedNavigate(url: Uri | string, options?: u8.Base.Navigation._Options, callback?: (sender: object, args: object) => void): void
        navigateToPage(name: string, params?: string | u8.Base.Navigation._PageParameters, options?: u8.Base.Navigation._Options, callback?: (sender: object, args: object) => void): void
        navigateToRoute(route: object, options?: u8.Base.Navigation._Options, callback?: (sender: object, args: object) => void): void
        navigateToStartPage(options?: u8.Base.Navigation._Options, callback?: (sender: object, args: object) => void): void
        navigateToUrl(url: Uri | string, options: u8.Base.Navigation._Options, callback?: (sender: object, args: object) => void): void
        redirect(options: u8.Base.Navigation._Options, callback?: (sender: object, args: object) => void): void
    }

    class Uri {
        constructor(uri: string)

        params: IDictionary<string, string>[]
        path: string

        clear(key: string): Uri
        get(key: string, defaultValue): string
        getArray(key: string, defaultValue: string[]): string[]
        getBoolean(key: string, defaultValue: boolean): boolean
        getDate(key: string, defaultValue?: _Date): _Date
        getEnumMap(key: string, enumeration: object, defaultValue: object): object
        getInt(key: string, defaultValue: number): number
        getOptions(key: string, defaultValue: string): Options
        has(key: string): boolean
        set(key: string, value: string): Uri

        /**
         * 
         * @param params "key=value&key1=value1" will be parsed into { key:value, key1:value1 }.
         */
        static parseParams(params: string): object
    }

    class _Date {
        addDays(days: number): Date
        addHours(hours: number): Date
        addMilliseconds(milliseconds: number): Date
        addMinutes(minutes: number): Date
        addMonths(months: number, days?: number): Date
        addSeconds(seconds: number): Date
        addTime(time: Time): Date
        addYears(years: number): Date
        getDayName(): string
        getDayNameShort(): string
        getDays(count: number): Date[]
        getFirstDayOfMonth(): Date
        getFirstDayOfQuarter(): Date
        getFirstDayOfWeek(firstDay?: number): Date
        getFirstDayOfYear(): Date
        getLastDayOfMonth(): Date
        getLastDayOfQuarter(): Date
        getLastDayOfYear(): Date
        getMonthName(): string
        getMonthNameShort(): string
        getPeriodRange(period: "Year" | "Quarter" | "Month"): _DateRange
        getQuarter(): number
        getTimeOfDay(): Time
        getWeekDayInMonth(weekday?: number, index?: number): number | Date
        getWeekOfYear(): number
        getYearOfWeek(): number
        setTimeOfDay(hours: number, minutes: number, seconds: number, millis: number): Date
        stripDate(): void
        stripTime(): void
        toDate(): void
        toNextDay(): Date
        toPreviousDay(): Date
        toTime(): void
        withTime(time: Time): Date

        static center(dt1: Date, dt2: Date): Date
        static compare(dt1: Date, dt2: Date): number
        static compare(dt1: Date, dt2: Date): number
        static diffDays(dt1: Date, dt2: Date): number
        static equals(dt1: Date, dt2: Date): boolean
        static getDayName(day: number): string
        static getDayNameShort(day: number): string
        static getDurationString(ms: number): string
        static getMonthName(month: number): string
        static getMonthNameShort(month: number): string
        static getPeriod(start: Date | number, end: Date | number): "Month" | "Quarter" | "Year" | undefined
        static getRangeString(start: Date, end: Date, o: u8.Base.DateRange._ToDateStringOptions): string
        static isLeapYear(year): boolean
        static monthEquals(dt1: Date, dt2: Date): boolean
        static timeEquals(dt1: Date, dt2: Date): boolean
    }

    class Time {
        constructor(hours: number, minutes: number, seconds: number, millis: number)

        hours: number
        millis: number
        minutes: number
        seconds: number
    }

    interface _DateRange {
        end: Date
        start: Date
    }

}