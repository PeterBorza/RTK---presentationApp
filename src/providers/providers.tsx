import { Provider } from "react-redux";

import { store } from "app";
import { PagesContextProvider } from "providers";
import { QueryProvider } from "providers";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <PagesContextProvider>
                <QueryProvider>
                    {children}
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryProvider>
            </PagesContextProvider>
        </Provider>
    );
};

export default Providers;
