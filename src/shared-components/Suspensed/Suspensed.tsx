import { FC, PropsWithChildren, ReactNode, Suspense } from "react";
import Loader from "shared-components/Loader";

interface SuspensedProps {
  fallback?: ReactNode;
}

const Suspensed: FC<PropsWithChildren<SuspensedProps>> = ({ children, fallback = <Loader /> }) => (
  <Suspense fallback={fallback}>{children}</Suspense>
);

export default Suspensed;
