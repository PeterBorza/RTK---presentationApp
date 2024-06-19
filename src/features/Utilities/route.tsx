import { RouteObject } from "react-router-dom";

import { LinkUrls, NavLinkUrls } from "app";

import { Gas } from "features/Gas";
import { Light } from "features/Light";

import UtilityContainer from "./UtilityContainer";
import UtilityPlatform from "./UtilityPlatform";

export const utilitiesRoute: RouteObject = {
    path: NavLinkUrls.UTILITIES,
    element: <UtilityContainer />,
    children: [
        {
            index: true,
            element: <UtilityPlatform />,
        },
        {
            path: LinkUrls.GAS,
            element: <Gas />,
        },
        {
            path: LinkUrls.LIGHT,
            element: <Light />,
        },
    ],
};
