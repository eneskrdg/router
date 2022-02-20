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
import { Link,useNavigate,useLocation } from "react-router-dom";


const Meals = () => {
  const location = useLocation() as any;

  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("White", "gray.700");
  const navigate = useNavigate();

  const [selectsBreakfast, setSelectsBreakfast] = useState<string>("");
  const [selectsDrink, setSelectsDrink] = useState<string>("");
  const [selectsLunch, setSelectsLunch] = useState<string>("");
  const [selectsDrinkLunch, setSelectsDrinkLunch] = useState<string>("");
  const [selectsDinner, setSelectsDinner] = useState<string>("");
  const [selectsDrinkDinner, setSelectsDrinkDinner] = useState<string>("");
 
  
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
              <Center bg="#5045E6" color="white" w={10} h={10} borderRadius="50">
                3
              </Center>
              <Center w="40px" h="40px">
                <Box as="span" fontWeight="bold" color="black" ml={8}>
                  Upgrades
                </Box>
              </Center>
              <Center w="40px" h="40px">
                <Box as="span" fontWeight="bold" color="#5045E6">
                  <Icon viewBox="0 0 200 200" color="#5045E6" ml={20}>
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
              <Center bg="white" color="#5045E6" w={10} h={10} borderRadius="50">
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
          Meals Preferences
        </Heading>

        <Text>
          Your flight comes with breakfast, lunch, and dinner. Please make your
          selections below. <br />
          Changes to your order can be made up 48 hours before your flight.
        </Text>

        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={3}>
            <Text mt={6} mb={-2} color="#718096">
              Breakfast
            </Text>
            <Select placeholder="Select option" mt={5} mb={5}  onChange={e => setSelectsBreakfast(e.target.value)}>
              <option value="Sandwich">Sandwich</option>
              <option value="Chips">Chips</option>
              <option value="Jam"> Jam</option>
            </Select>
          </GridItem>
          <GridItem colSpan={2}>
            <Text mt={6} mb={-2} color="#718096">
              Drink
            </Text>
            <Select placeholder="Select option" mt={5} mb={5} onChange={e => setSelectsDrink(e.target.value)}>
              <option value="Tea">Tea</option>
              <option value="Coffee">Coffee</option>
            </Select>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={3}>
            <Text mb={-2} color="#718096">
              Lunch
            </Text>{" "}
            <Select placeholder="Select option" mt={5} mb={5} onChange={e => setSelectsLunch(e.target.value)}>
              <option value="Peppersteak">Peppersteak</option>
              <option value="Lamb steak">Lamb steak</option>
              <option value="Grilled mincemeat">Grilled mincemeat</option>
            </Select>
            
          </GridItem>
          
          <GridItem colSpan={2}>
            <Text mb={-2} color="#718096">
              Drink
            </Text>
            <Select placeholder="Select option" mt={5} mb={5} onChange={e => setSelectsDrinkLunch(e.target.value)}>
              <option value="Coke">Coke</option>
              <option value="Fruit juice">Fruit juice</option>
              <option value="Lemonade">Lemonade</option>
            </Select>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={3}>
            <Text mb={-2} color="#718096">
              Dinner
            </Text>
            <Select placeholder="Select option" mt={5} mb={5} onChange={e => setSelectsDinner(e.target.value)}>
              <option value="Stuffed pepper">Stuffed pepper</option>
              <option value="Stuffet tomato">Stuffet tomato</option>
              <option value="Wine leaves stuffed with rice">Wine leaves stuffed with rice</option>
            </Select>
          </GridItem>
          <GridItem colSpan={2}>
            <Text mb={-2} color="#718096">
              Drink
            </Text>
            <Select placeholder="Select option" mt={5} mb={5} onChange={e => setSelectsDrinkDinner(e.target.value)}>
              <option value="Red wine">Red wine</option>
              <option value="Champagne">Champagne</option>
              <option value="Vodka">Vodka</option>
            </Select>
          </GridItem>
        </Grid>
        <Button onClick={toggleColorMode} mb={6}>
          Color Toggle
        </Button>
        <Flex>
          <Link to="/">
            <Button colorScheme="gray" variant="outline">
              Back
            </Button>
          </Link>
          <Spacer />
          <Button
            colorScheme="purple"
            onClick={() => {
              navigate("/upgrade", {
                state: {
                location:location.state.location,
                number:location.state.number,
                menu:location.state.menu,
                breakfast:selectsBreakfast,
                drink:selectsDrink, 
                lunch:selectsLunch,
                drinkLunch:selectsDrinkLunch,
                dinner:selectsDinner,
                drinkDinner:selectsDrinkDinner
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

export default Meals;
