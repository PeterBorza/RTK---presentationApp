export type UnitId = string;

export interface FormProps {
    index: string;
    bill: string;
    readDate: string;
}

export interface UtilityStateUnit extends FormProps {
    id: UnitId;
    consumption: number;
    estimate: number | null;
    selected: boolean;
    payed: boolean;
    edit: boolean;
}

export interface UtilityState {
    units: UtilityStateUnit[];
    loading: {
        isLoading: boolean;
        message: string;
    };
    error: string | null;
}
