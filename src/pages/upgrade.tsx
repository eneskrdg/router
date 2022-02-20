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
import { useState } from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";

const Upgrade = () => {

  const location = useLocation() as any;
  const { toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const formBackground = useColorModeValue("White", "gray.700");
  const [selectsCondiments, setSelectsCondiments] = useState<string>("");
  const [selectsSnacks, setSelectsSnacks] = useState<string>("");
  const [selectsSpices, setSelectsSpices] = useState<string>("");
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        backgroundColor="White"
        p={12}
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
              <Center bg="#5045E6" color="white" w={10} h={10} borderRadius="50">
                4
              </Center>
              <Center w="40px" h="40px">
                <Box as="span" fontWeight="bold" color="black" ml={8}>
                  Payment
                </Box>
              </Center>
              <Center w="40px" h="40px"></Center>
            </HStack>
          </GridItem>
        </Grid>
        <Heading mb={6} fontSize="2xl">
          Upgrade Preferences
        </Heading>

        <Text>
          Your flight comes with breakfast, lunch, and dinner. Please make your
          selections below. <br />
          Changes to your order can be made up 48 hours before your flight.
        </Text>

        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={6}>
            <Text mt={6} mb={-2} color="#718096">
              CONDIMENTS AND SAUCES
            </Text>
            <Select placeholder="Select option" mt={5} mb={5} onChange={e => setSelectsCondiments(e.target.value)}>
              <option value="Ketchup">Ketchup</option>
              <option value="Mayonnaise">Mayonnaise</option>
              <option value="Mustard">Mustard</option>
            </Select>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={6}>
            <Text mb={-2} color="#718096">
              Snacks
            </Text>{" "}
            <Select placeholder="Select option" mt={5} mb={5} onChange={e => setSelectsSnacks(e.target.value)}>
              <option value="Biscuits">Biscuits</option>
              <option value="Cookie">Cookie</option>
              <option value="Candy">Candy</option>
            </Select>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(5, 1fr)" gap={4} >
          <GridItem colSpan={6}>
            <Text mb={-2} color="#718096">
              SPICES
            </Text>
            <Select placeholder="Select option" mt={5} mb={5}onChange={e => setSelectsSpices(e.target.value)}>
              <option value="Chilli powder">Chilli powder</option>
              <option value="Cumin">Cumin</option>
              <option value="Paprika">Paprika </option>
            </Select>
          </GridItem>
        </Grid>
        <Button onClick={toggleColorMode} mb={6}>
          Color Toggle
        </Button>
        <Flex>
          <Link to="/meals">
            <Button colorScheme="gray" variant="outline">
              Back
            </Button>
          </Link>
          <Spacer />
          <Button
            colorScheme="purple"
            onClick={() => {
              navigate("/payment", {
                state: {
                location:location.state.location,
                number:location.state.number,
                menu:location.state.menu,
                breakfast:location.state.breakfast,
                drink:location.state.drink, 
                lunch:location.state.lunch,
                drinkLunch:location.state.drinkLunch,
                dinner:location.state.dinner,
                drinkDinner:location.state.drinkDinner,
                condiments:selectsCondiments,
                snacks:selectsSnacks,
                spices:selectsSpices
                },
              });
            }}
          >
            Continue
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Upgrade;
