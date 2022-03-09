import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Building, BuildingMessages } from "..";
import { AsidePlatform } from "../../../shared-components";

import { liftOpenSelector, toggleBuilding } from "../../../app";

const LiftPlatform = () => {
    const openSideBar = useSelector(liftOpenSelector);
    const dispatch = useDispatch();

    return (
        <AsidePlatform
            isOpen={openSideBar}
            onClose={() => dispatch(toggleBuilding(false))}
            label={BuildingMessages.HEADER_TITLE}
            renderSideBar={() => <div>Hello</div>}
        >
            <Building />
        </AsidePlatform>
    );
};

export default LiftPlatform;
