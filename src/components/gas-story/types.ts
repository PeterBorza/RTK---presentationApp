export interface GasFormProps {
	citire: string;
	factura: string;
	dataCitire: string;
}

export interface GasStateUnit extends GasFormProps {
	id: string;
	consum: string;
	selected: boolean;
	platit: boolean;
	edit: boolean;
}

export interface GasState {
	units: GasStateUnit[];
	loading: {
		isLoading: boolean;
		message: string;
	};
	error: string | null;
}
