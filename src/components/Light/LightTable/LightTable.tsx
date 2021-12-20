import { FC, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Table, Error } from "../../../reusables";
import {
    UtilityLabels,
    UtilityTableLabels,
    UtilityStateUnit,
    TotalPayedInfo,
    TableHeader,
    UtilitiesForm,
} from "../../Utilities";
import { initialFormValues } from "../../Utilities/state";
import { utilityState, errorLightState, selectSubtotal } from "../selectors";
import { selectCard, resetSelected, editCard } from "../lightSlice";
import {
    deleteUtilityUnit,
    getAsyncUtility,
    togglePayedBill,
    postUtility,
} from "../thunks";

import LightCard from "../LightCard";

import classNames from "classnames";
import styles from "./LightTable.module.scss";

type Props = {
    dark?: boolean;
};

const LightTable: FC<Props> = ({ dark = false }) => {
    const { units, loading } = useSelector(utilityState);
    const error = useSelector(errorLightState);
    const sumOfBills = useSelector(selectSubtotal);
    const dispatch = useDispatch();

    const wrapper = classNames(styles.container, {
        [styles.container__dark]: dark,
    });

    const isUnits = units && units.length !== 0;

    useEffect(() => {
        dispatch(resetSelected());
    }, [dispatch]);

    const fetchLightUnits = useCallback(() => {
        dispatch(getAsyncUtility());
    }, [dispatch]);

    useEffect(() => {
        fetchLightUnits();
    }, [fetchLightUnits]);

    const onTogglePayedBill = (item: UtilityStateUnit) => {
        dispatch(togglePayedBill(item));
        dispatch(resetSelected());
    };

    const onLightClickHandler = (id: string) => {
        dispatch(selectCard(id));
    };

    const onDeleteLightHandler = (id: string) => {
        dispatch(deleteUtilityUnit(id));
    };

    const onEditLightHandler = (id: string) => {
        dispatch(editCard(id));
    };

    const renderListItems = (item: Array<UtilityStateUnit>) =>
        item.map(unit => (
            <li key={unit.id}>
                <LightCard
                    {...unit}
                    onClick={() => onLightClickHandler(unit.id)}
                    onPayedClick={() => onTogglePayedBill(unit)}
                    onDelete={() => onDeleteLightHandler(unit.id)}
                    onEdit={() => onEditLightHandler(unit.id)}
                />
            </li>
        ));

    const table = {
        header: () =>
            Object.keys(UtilityLabels).map(item => (
                <span key={item}>{item}</span>
            )),
        body: () => isUnits && renderListItems(units),
    };

    return error ? (
        <Error message={error} />
    ) : (
        <div className={wrapper}>
            <TableHeader
                tableTitle={UtilityTableLabels.LIGHT_TITLE}
                className={styles.tableHeader}
            >
                <UtilitiesForm
                    postData={(newUnit: UtilityStateUnit) =>
                        dispatch(postUtility(newUnit))
                    }
                    formValues={initialFormValues}
                    utilityUnits={units}
                />
            </TableHeader>
            <div className={styles.tableWrapper}>
                <Table
                    renderHeader={table.header}
                    renderBody={table.body}
                    loading={loading.isLoading}
                />
            </div>
            <TotalPayedInfo sumOfBills={sumOfBills} />
        </div>
    );
};

export default LightTable;
