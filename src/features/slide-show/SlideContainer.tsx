import { SlideShow } from "../../shared-components";
import { SlideShowType } from "../../shared-components/SlideShow/SlideShow";

import pic1 from "../../images/IMG_7710.JPG";
import pic2 from "../../images/IMG_7711.JPG";
import pic3 from "../../images/IMG_7712.JPG";
import pic4 from "../../images/IMG_7713.JPG";
import pic5 from "../../images/IMG_7714.JPG";
import pic6 from "../../images/IMG_7715.JPG";
import pic7 from "../../images/IMG_7716.JPG";
import pic8 from "../../images/IMG_7717.JPG";
import pic9 from "../../images/IMG_7718.JPG";
import pic10 from "../../images/IMG_7719.JPG";

const cheatSheetSlides: SlideShowType = {
    slides: [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10],
};

const SlideContainer = () => {
    return <SlideShow slides={cheatSheetSlides.slides} />;
};

export default SlideContainer;
