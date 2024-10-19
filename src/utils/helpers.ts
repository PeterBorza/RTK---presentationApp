import { NavLinkUrls } from "app";

export const toInternalLink = (link: NavLinkUrls) => `/${link}`;

export const isWheelClick = (e: MouseEvent) => e.button === 1;
export const isContextMenuClick = (e: MouseEvent) => e.button === 2;

export const debounce = <T>(callback: (...args: T[]) => void, wait: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: T[]) => {
    const next = () => callback(...args);
    clearTimeout(timeout);
    timeout = setTimeout(next, wait);
  };
};

const debounce2 = (fn: (e: React.UIEvent) => void, timeout: number) => {
  let timer: number;
  return (e: React.UIEvent) => {
    clearTimeout(timer);
    timer = window.setTimeout((e: React.UIEvent) => fn(e), timeout, { ...e });
  };
};

//jest.mock("comon/utils/debounce", () => ({
//debounce: (fn: () => void) => fn
//}))

export const whites = [
  {
    hex: "F9F6EE",
    name: "bone white",
  },
  {
    hex: "FFFAFA",
    name: "snow",
  },
  {
    hex: "FAFAFA",
    name: "antiflesh",
  },
  {
    hex: "FFFFF0",
    name: "ivory",
  },
];
