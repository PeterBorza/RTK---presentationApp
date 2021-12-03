export type UnitId = string;

export interface FormProps {
	citire: string;
	factura: string;
	dataCitire: string;
}

export interface UtilityStateUnit extends FormProps {
	id: UnitId;
	consum: string;
	selected: boolean;
	platit: boolean;
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
