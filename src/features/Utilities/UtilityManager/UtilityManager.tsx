import React from "react";
import styles from "./UtilityManager.module.scss";
import CustomIcon, { IconProps } from "shared-components/CustomIcon/CustomIcon";
import classNames from "classnames";

interface Props {
    icons: IconProps[];
    isManageActive: boolean;
}

const UtilityManager = React.forwardRef<HTMLDivElement, Props>(({ icons, isManageActive }, ref) => {
    const wrapper = classNames(styles.manageWrapper, {
        [styles.manageWrapper__selected]: isManageActive,
    });
    return (
        <div ref={ref} className={wrapper}>
            {icons.map(icon => (
                <CustomIcon key={icon.title} {...icon} size="medium" />
            ))}
        </div>
    );
});

export default UtilityManager;
