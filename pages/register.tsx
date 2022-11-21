import { Box, Flex, Grid, Input } from "@chakra-ui/react";
import React from "react";

const Register = () => {
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
                    templateAreas={`"." "mTop" "mBot" "."`}
                    templateColumns="1fr"
                    templateRows="repeat(4, 1fr)"
                >
                    <Flex gridArea="mTop" direction="column">
                        <Box ml={4}>Username</Box>
                        <Input type="text" />
                    </Flex>
                    <Flex gridArea="mBot" direction="column">
                        <Box ml={4}>Password</Box>
                        <Input type="password" />
                    </Flex>
                </Grid>
            </Grid>
        </Flex>
    );
};
export default Register;
