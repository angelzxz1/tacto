import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../lib/theme";
import { AppProps } from "next/app";
import Main from "../components/layouts/main";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const LinksUnlogged = ["/login", "/register"];

function MyApp({ Component, pageProps, router }: AppProps) {
  const route = useRouter();
  const [localStorage, setLocalStorage] = useState<Storage>();
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [evaluated, setEvaluated] = useState<boolean>(false);
  useEffect(() => {
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
    setEvaluated(true);
    console.log("This should console log last");
  }, []);
  console.log("This should console log first, evaluated? ", evaluated);
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {evaluated ? (
        <>
          <Main router={router} title={Component.name}>
            <Component {...pageProps} />
          </Main>
        </>
      ) : (
        <></>
      )}
    </ChakraProvider>
  );
}

export default MyApp;
