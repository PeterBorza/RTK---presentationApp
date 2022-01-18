export enum UtilityFormValues {
    FORM_BUTTON_LABEL = "Add new index",
    FORM_WIDTH = "small",
    FORM_TITLE = "New index form",
}

export enum UtilityLabels {
    DATE = "date",
    INDEX = "index",
    CONSUMPTION = "consumption",
    ESTIMATE = "estimate",
    BILL = "bill",
    PAYED = "pay, delete, edit",
}

export enum UtilityTableLabels {
    GAS_TITLE = "Gas Stats",
    LIGHT_TITLE = "Light Stats",
    SUM_OF_BILLS = "Total payed up until: ",
    IS = " is ",
    RON = " RON",
    HEADER_TITLE = "Utilities",
    MENU_BUTTON = "Menu",
    PAYED = "payed",
    DELETE = "delete",
    EDIT = "edit",
    NOT_PAYED = "not-payed",
    CONFIRM = "confirm",
    CANCEL_EDIT = "cancel",
}

export enum ModeColors {
    DARKMODE_COLOR = "rgba(250, 253, 253, 0.8)", // overall color,also used in my_app.scss
    LIGHTMODE_COLOR = "rgb(40, 64, 73)", // overall color,also used in my_app.scss
}

export const titleStyle = (darkMode: boolean) => ({
    color: darkMode ? ModeColors.DARKMODE_COLOR : ModeColors.LIGHTMODE_COLOR,
});
