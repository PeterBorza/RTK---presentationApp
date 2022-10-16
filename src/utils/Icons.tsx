import {
    FaBars,
    FaExclamationTriangle,
    FaChevronLeft,
    FaChevronRight,
    FaCheck,
    FaEdit,
    FaChevronDown,
    FaChevronUp,
    FaRegWindowClose,
    FaRegTimesCircle,
    FaRegTrashAlt,
    FaWindowClose,
    FaBan,
    FaArrowDown,
    FaArrowUp,
    FaTimes,
} from "react-icons/fa";
import { CgDanger, CgEnter } from "react-icons/cg";
import { MdEdit } from "react-icons/md";
import { FcCheckmark } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";
import { HiOutlineArrowCircleRight, HiDotsHorizontal } from "react-icons/hi";
import { GiCancel } from "react-icons/gi";
import { ImStop } from "react-icons/im";

export type IconType = Record<string, JSX.Element>;

export const icons: IconType = {
    check: <FaCheck />,
    danger: <CgDanger />,
    left: <FaChevronLeft />,
    right: <FaChevronRight />,
    edit: <FaEdit />,
    bars: <FaBars />,
    exclamation: <FaExclamationTriangle />,
    down: <FaChevronDown />,
    up: <FaChevronUp />,
    close: <FaRegWindowClose />,
    trash: <FaRegTrashAlt />,
    edit2: <MdEdit />,
    windowClose: <FaWindowClose />,
    ban: <FaBan />,
    checkMark: <FcCheckmark />,
    priority: <FcHighPriority />,
    outlineArrowRight: <HiOutlineArrowCircleRight />,
    timesCircle: <FaRegTimesCircle />,
    enter: <CgEnter />,
    cancel: <GiCancel />,
    threeDots: <HiDotsHorizontal />,
    faDown: <FaArrowDown />,
    faUp: <FaArrowUp />,
    stop: <ImStop />,
    x: <FaTimes style={{ color: "crimson" }} />,
};
