import { ReactNode } from "react";

import { FaBars } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FaRegTimesCircle } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { FaBan } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { CgEnter } from "react-icons/cg";
import { GiCancel } from "react-icons/gi";

type IconType = Record<IconTypes, ReactNode>;

enum IconTypes {
    CHECK = "check",
    DANGER = "danger",
    LEFT = "left",
    RIGHT = "right",
    EDIT = "edit",
    BARS = "bars",
    EXCLAMATION = "exclamation",
    DOWN = "down",
    UP = "up",
    CLOSE = "close",
    TRASH = "trash",
    EDIT2 = "edit2",
    WINDOW_CLOSE = "windowClose",
    BAN = "ban",
    CHECKMARK = "checkMark",
    PRIORITY = "priority",
    OUTLINE_ARROW_RIGHT = "outlineArrowRight",
    TIMES_CIRCLE = "timesCircle",
    ENTER = "enter",
    CANCEL = "cancel",
}

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
};
