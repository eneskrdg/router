import React from "react";
import {
  Flex,
  Heading,
  Button,
  useColorMode,
  useColorModeValue,
  Text,
  Select,
  Grid,
  GridItem,
  Box,
  Spacer,
  Center,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { Link,useLocation } from "react-router-dom";

const Payments = () => {
  const location = useLocation() as any;
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("White", "gray.700");

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        backgroundColor="White"
        p={20}
        rounded={6}
        background={formBackground}
        boxShadow="md"
      >
        <Grid
          templateColumns="repeat(8, 1fr)"
          gap={10}
          mb={5}
          backgroundColor="#F9FBFf"
          p={4}
          borderRadius="10"
        >
          <GridItem colSpan={2}>
            <HStack>
              <Center bg="#13B8A7" color="white" w={10} h={10} borderRadius="50">
                1
              </Center>
              <Center w="40px" h="40px">
                <Box as="span" fontWeight="bold" color="#13B8A7" ml={4}>
                  Cabin
                </Box>
              </Center>
              <Center w="40px" h="40px">
                <Box as="span" fontWeight="bold" color="#13B8A7" ml={4}>
                  <Icon viewBox="0 0 200 200" color="#13B8A7">
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </Icon>
                </Box>
              </Center>
            </HStack>
          </GridItem>
          <GridItem colSpan={2}>
            <HStack>
              <Center bg="#13B8A7" color="white" w={10} h={10} borderRadius="50">
                2
              </Center>
              <Center w="40px" h="40px">
                <Box as="span" fontWeight="bold" color="#13B8A7" ml={4}>
                  Meals
                </Box>
              </Center>
              <Center w="40px" h="40px">
                <Box as="span" fontWeight="bold" color="#13B8A7" ml={4}>
                  <Icon viewBox="0 0 200 200" color="#13B8A7">
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </Icon>
                </Box>
              </Center>
            </HStack>
          </GridItem>
          <GridItem colSpan={2}>
            <HStack>
              <Center bg="#13B8A7" color="white" w={10} h={10} borderRadius="50">
                3
              </Center>
              <Center w="40px" h="40px">
                <Box as="span" fontWeight="bold" color="#13B8A7" ml={8}>
                  Upgrades
                </Box>
              </Center>
              <Center w="40px" h="40px">
                <Box as="span" fontWeight="bold" color="#13B8A7">
                  <Icon viewBox="0 0 200 200" color="#13B8A7" ml={20}>
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </Icon>
                </Box>
              </Center>
            </HStack>
          </GridItem>
          <GridItem colSpan={2}>
            <HStack>
              <Center bg="#13B8A7" color="white" w={10} h={10} borderRadius="50">
                4
              </Center>
              <Center w="40px" h="40px">
                <Box as="span" fontWeight="bold" color="#13B8A7" ml={8}>
                  Payment
                </Box>
              </Center>
              <Center w="40px" h="40px"></Center>
            </HStack>
          </GridItem>
        </Grid>
        <Heading mb={6} fontSize="2xl">
          Payments Preferences
        </Heading>

        <Text>
          Your flight comes with breakfast, lunch, and dinner. Please make your
          selections below. <br />
          Changes to your order can be made up 48 hours before your flight.
        </Text>

        
         
            <Text mt={6} mb={-2} color="#718096">
             Home
            </Text><br />
            {location.state.location}<br />
            {location.state.number}<br />
            {location.state.menu}<br />
        
         
     
            
       
       
        
            <br />
            <Text mb={-2} color="#718096">
              Cabin
            </Text>{" "}<br />
           {location.state.breakfast}<br />
           {location.state.drink}<br />
           {location.state.lunch}<br />
           {location.state.drinkLunch}<br />
           {location.state.dinner}<br />
           {location.state.drinkDinner}<br />
       
           <br />
            <Text mb={-2} color="#718096">
              Upgrade
            </Text><br />
           {location.state.condiments}<br />
           {location.state.snacks}<br />
           {location.state.spices}<br /><br />
        
       
       
           
         
        
        <Button onClick={toggleColorMode} mb={6}>
          Color Toggle
        </Button>
        <Flex>
          <Link to="/upgrade">
            <Button colorScheme="gray" variant="outline">
              Back
            </Button>
          </Link>
          <Spacer />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Payments;
