import { useState, useEffect } from "react";
import { useRouter } from "next/router";
interface props {
  children: JSX.Element;
}
const LinksUnlogged = ["/login", "/register"];
const LoggedVerifier = ({ children }: props) => {
  const router = useRouter();
  const [localStorage, setLocalStorage] = useState<Storage>();
  const [isLogged, setIsLogged] = useState<boolean>(true);
  useEffect(() => {
    console.log(router);
    setLocalStorage(window.localStorage);
    if (isLogged) {
      if (LinksUnlogged.find((item) => item === router.asPath)) {
        router.push("/");
      }
    } else {
      if (!LinksUnlogged.find((item) => item === router.asPath)) {
        router.push("/login");
      }
    }
  }, []);
  //
  return children;
};

export default LoggedVerifier;
