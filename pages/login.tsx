import { Box, Flex, Grid, Input, InputProps, Button } from "@chakra-ui/react";
import React from "react";

const CustomInput = (props: InputProps) => {
  const style = {
    borderRadius: "0",
    borderTop: "0",
    borderLeft: "0",
    borderRight: "0",
  };
  return <Input {...style} {...props} w="75%" />;
};




const LogIn = () => {
  return (
    <Flex h="calc(100vh - 3.5rem)" align="center">
      <Grid
        templateAreas={`"left right"`}
        templateColumns="1fr 1fr"
        templateRows="1fr"
        h="75%"
        w="100%"
        overflow="hidden"
        borderRadius="2xl"
      >
        <Box gridArea="left" bg="pink"></Box>
        <Grid
          gridArea="right"
          templateAreas={`"." "mTop" "mBot" "Button"`}
          templateColumns="1fr"
          templateRows="repeat(4, 1fr)"
        >
          <Flex gridArea="mTop" direction="column" align="center">
            <CustomInput
              type="text"
              placeholder="Username"
              borderTopRadius="md"
            />
          </Flex>
          <Flex gridArea="mBot" direction="column" align="center">
            <CustomInput
              type="password"
              placeholder="Password"
              borderTopRadius="md"
            />
          </Flex>
          <Grid
            gridArea="Button"
            templateAreas={`" . boton . "`}
            templateColumns="12.5% 75% 12.5%"
            templateRows="1fr"
          >
            <Flex gridArea="boton" justify="end">
              <Button>Log in</Button>
            </Flex>
          </Grid>
        </Grid>
      </Grid>
    </Flex>
  );
};
export default LogIn;
