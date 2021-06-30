/// <reference path="./MessageBox/MessageBox.d.ts" />
/// <reference path="../Templates/Templates.d.ts" />

declare namespace u8.Base.Widgets {
    class Widget {

    }

    class MessageBox {
        execute(name: object): object
        getChecked(id: object)
        getCommandTarget()
        setChecked(id: object)
        show(callback?: (sender: MessageBox, args: u8.Base.Widgets.MessageBox._MessageBoxEventArgs) => any): MessageBox
        showError(callback?: (sender: MessageBox, args: u8.Base.Widgets.MessageBox._MessageBoxEventArgs) => any): MessageBox
        showInfo(callback?: (sender: MessageBox, args: u8.Base.Widgets.MessageBox._MessageBoxEventArgs) => any): MessageBox
        showPrompt(callback?: (sender: MessageBox, args: u8.Base.Widgets.MessageBox._MessageBoxEventArgs) => any): MessageBox
        showQuestion(callback?: (sender: MessageBox, args: u8.Base.Widgets.MessageBox._MessageBoxEventArgs) => any): MessageBox
        showWarning(callback?: (sender: MessageBox, args: u8.Base.Widgets.MessageBox._MessageBoxEventArgs) => any): MessageBox

        static confirm(message: object, confirmed: object, cancelled: object)
        static show(o: Message, callback?: (sender: MessageBox, args: u8.Base.Widgets.MessageBox._MessageBoxEventArgs) => any)
        static showError(o: Message, callback?: (sender: MessageBox, args: u8.Base.Widgets.MessageBox._MessageBoxEventArgs) => any)
        static showInfo(o: Message, callback?: (sender: MessageBox, args: u8.Base.Widgets.MessageBox._MessageBoxEventArgs) => any)
        static showPrompt(o: Message, callback?: (sender: MessageBox, args: u8.Base.Widgets.MessageBox._MessageBoxEventArgs) => any)
        static showQuestion(o: Message, callback?: (sender: MessageBox, args: u8.Base.Widgets.MessageBox._MessageBoxEventArgs) => any)
        static showWarning(o: Message, callback?: (sender: MessageBox, args: u8.Base.Widgets.MessageBox._MessageBoxEventArgs) => any)
    }

    class Message extends Widget {
        /**
         * The buttons to be displayed (e.g. "Ok,Cancel"). Known buttons are "Ok", "Yes", "No", "Continue", "Cancel", "Abort", "Retry", "Ignore", "Settings", "Delete", "Back", "Close"
         */
        buttons?: string
        buttonsAlignment?: string
        caption?: string
        captionTextId?: string
        comment?: string
        commentTextId?: object
        data?: object
        defaultCommand?: string
        eatClicks?: boolean
        eatCommands?: boolean
        height?: string
        html?: string
        image?: string
        input?: boolean | string
        message?: string
        messageTextId?: string
        radioButtons?: string
        utml?: string | u8.Base.Templates._ExecuteOptions

        execute?(command: object, dispose: boolean)
        getChecked?(): string
        setChecked?(id: string)
    }
}