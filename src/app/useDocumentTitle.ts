import { useEffect } from "react";

const useDocumentTitle = () => {
  useEffect(() => {
    window.document.title = process.env.NODE_ENV === "development" ? "RTK Dev" : "RTK Prod";
    console.log("You're in " + process.env.NODE_ENV + " mode.");
  }, []);
};

export default useDocumentTitle;
