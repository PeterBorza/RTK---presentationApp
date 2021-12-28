import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Building, BuildingMessages, Lift } from "..";
import { AsidePlatform } from "../../../shared-components";

import { liftOpenSelector, toggleBuilding } from "../../../app";

const LiftPlatform: FC = () => {
    const openSideBar = useSelector(liftOpenSelector);
    const dispatch = useDispatch();

    return (
        <AsidePlatform
            isOpen={openSideBar}
            onClose={() => dispatch(toggleBuilding(false))}
            label={BuildingMessages.HEADER_TITLE}
            renderSideBar={() => <Lift panel="buttons" liftData="data" />}
        >
            <Building />
        </AsidePlatform>
    );
};

export default LiftPlatform;
