import React from "react";

import { SlideShow } from "shared-components";
import * as pics from "utils";

const SlideContainer = () => {
    const withSameSize = pics.myImages.slice(1, -1);
    return <SlideShow slides={withSameSize} />;
};

export default SlideContainer;
