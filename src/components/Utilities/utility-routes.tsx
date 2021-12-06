import { Routes, Route } from "react-router-dom";
import { UtilityContainer, UtilityPlatform } from ".";
import { Gas } from "../Gas";
import { Light } from "../Light";
import EditCard from "../Gas/EditCard";

export const utilityRoutes = () => {
	return (
		<Routes>
			<Route path='utilities' element={<UtilityContainer />}>
				<Route index element={<UtilityPlatform />} />
				<Route path='gas' element={<Gas />}>
					<Route path=':id' element={<EditCard />} />
				</Route>
				<Route path='light' element={<Light />} />
			</Route>
		</Routes>
	);
};
