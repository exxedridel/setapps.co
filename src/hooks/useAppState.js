import { useRef } from "react";
import { useRouter } from "next/router";
import en from "../../public/locale/en";
import es from "../../public/locale/es";

const useAppState = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  const mainRef = useRef(null);

  function mainFocus() {
    mainRef.current.focus();
  }

  return {
    t,
    mainRef,
    mainFocus,
  };
};

export default useAppState;