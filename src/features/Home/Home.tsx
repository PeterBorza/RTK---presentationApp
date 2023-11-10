// import { AnimatePresence, motion } from "framer-motion";

import { useAppRedux } from "app";

import styles from "./Home.module.scss";
// import { GlowText } from "shared-components";
// import { jsonUsersUrl, useQueryHook } from "providers/tanstack-react-query";

const { container, container__darkMode: dark } = styles;

// const strings = [
//     "alpha",
//     "ro",
//     "nu",
//     "omega",
//     "epsilon",
//     "beta",
//     "gamma",
//     "delta",
//     "teta",
//     "sdgfhng",
//     "sdgfb",
//     "xbd",
//     "gfdgnfsh",
//     "asfdgbfngfh",
//     "dfvbdf",
//     "xzv cvcnzbf",
// ];

// const objectToDrag = [
//     {
//         id: 1,
//         label: "one",
//     },
//     {
//         id: 2,
//         label: "two",
//     },
//     {
//         id: 3,
//         label: "three",
//     },
//     {
//         id: 4,
//         label: "four",
//     },
// ];

export interface Users {
    id: number;
    name: string;
    username: string;
}
const Home = () => {
    // const { isLoading, dataUpdatedAt } = useQueryHook<Users[]>({
    //     key: "json-placeholder",
    //     url: jsonUsersUrl,
    // });

    // const { resData: coins } = useQueryHook<CoinsInterface[]>({
    //     key: "coins",
    //     url: `${COINS_URL}/${LinkUrls.COINS}`,
    // });

    // const time = new Date(dataUpdatedAt).toLocaleTimeString();
    const { isDarkMode } = useAppRedux();
    // const [show, setShow] = useState(false);

    return (
        <div className={isDarkMode ? `${container} ${dark}` : container}>
            {/* <button onClick={() => setShow(prev => !prev)}>Click</button>
            <AnimatePresence>
                {show ? (
                    <motion.div
                        className={styles.motionDiv}
                        animate={{ opacity: 1, transform: "translateY(-100px)" }}
                        transition={{ ease: "easeIn", duration: 0.1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0, transform: "translateY(0px)" }}
                    >
                        Blana
                    </motion.div>
                ) : null}
            </AnimatePresence> */}
            {/* <Loader2 /> */}
            {/* {isLoading ? <Loader /> : <p>{time}</p>} */}
            {/* <div className={styles.iframeRTK}>
                <GlowText text="Informer" />
            </div> */}
            {/* <GuessGame /> */}
            {/* <div className={styles.dropContainer}>
                <AnimatedDropdown label="tester component" items={[...dropItems, "reset"]} />
            </div> */}
            {/* <TabMenu darkMode={isDarkMode} menuItems={strings} /> */}
        </div>
    );
};

export default Home;
