import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `Jakore | ${title}`;
  }, [title]);
};

export default useDocumentTitle;
