import { Route } from "react-router-dom";
import { UtilityContainer, UtilityPlatform } from ".";
import { Url } from "app";
import { LinkUrls } from "context/link-context";
import { Gas } from "../Gas";
import { Light } from "../Light";

export const utilityRoutes = () => {
    return (
        <Route path={LinkUrls.UTILITIES} element={<UtilityContainer />}>
            <Route index element={<UtilityPlatform />} />
            <Route path={Url.GAS} element={<Gas />} />
            <Route path={Url.LIGHT} element={<Light />} />
        </Route>
    );
};
