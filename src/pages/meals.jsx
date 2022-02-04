import React from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  useColorMode,
  useColorModeValue,
  Text,
  Select,
  Grid,
  GridItem,
  Box,
  Spacer,
  Circle,
  Center,
  HStack,
  Icon
  
} from "@chakra-ui/react";

import {  Link } from "react-router-dom";
import { useState } from "react";



const Meals = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("White", "gray.700");
  const [selects,setSelects]=useState();
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
         <Grid templateColumns="repeat(8, 1fr)" gap={10} mb={5} backgroundColor='#F9FBFf' p={4} borderRadius="10">
          <GridItem colSpan={2}>
          <HStack>
  <Circle w='40px' h='40px' bg='#13B8A7' color='white'>
    1
  </Circle>
  <Center w='40px' h='40px' >
    <Box as='span' fontWeight='bold' color='#13B8A7'  ml={4}>
      Cabin
    </Box>
  </Center>
  <Center w='40px' h='40px' >
    <Box as='span' fontWeight='bold' color='#13B8A7'  ml={4}>
    <Icon viewBox='0 0 200 200' color='#13B8A7'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon>
    

    </Box>
  </Center>
</HStack>


          </GridItem>
          <GridItem colSpan={2}>
          <HStack>
  <Circle w='40px' h='40px' bg='#13B8A7' color='white'>
    2
  </Circle>
  <Center w='40px' h='40px' >
    <Box as='span' fontWeight='bold' color='#13B8A7'  ml={4}>
      Meals
    </Box>
  </Center>
  <Center w='40px' h='40px' >
    <Box as='span' fontWeight='bold' color='#13B8A7'  ml={4}>
    <Icon viewBox='0 0 200 200' color='#13B8A7'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon>
    

    </Box>
  </Center>
</HStack>


          </GridItem>
          <GridItem colSpan={2}>
          <HStack>
  <Circle w='40px' h='40px' bg='#5045E6' color='white'>
    3
  </Circle>
  <Center w='40px' h='40px' >
    <Box as='span' fontWeight='bold' color='black'  ml={8}>
      Upgrades
    </Box>
  </Center>
  <Center w='40px' h='40px' >
    <Box as='span' fontWeight='bold' color='#5045E6'  >
    <Icon viewBox='0 0 200 200' color='#5045E6'ml={20}>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon>
    

    </Box>
  </Center>
</HStack>


          </GridItem>
          <GridItem colSpan={2}>
          <HStack>
          <Circle w='40px' h='40px' bg='white' color='#5045E6'>
    4
  </Circle>
  <Center w='40px' h='40px' >
    <Box as='span' fontWeight='bold' color='black'  ml={8}>
      Payment
    </Box>
  </Center>
  <Center w='40px' h='40px' >
   
  </Center>
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
            <Select placeholder="Select option" mt={5} mb={5} onChange={e=>setSelects(e.target.value)}>
              <option value="option1">Sandwich</option>
              <option value="option2">Chips</option>
              <option value="option3"> Jam</option>
            </Select>
            
          </GridItem>
          <GridItem colSpan={2}>
            <Text mt={6} mb={-2} color="#718096">
              Drink
            </Text>
            <Select placeholder="Select option" mt={5} mb={5}>
              <option value="option1">Tea</option>
              <option value="option2">Coffee</option>
              
            </Select>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={3}>
            <Text mb={-2} color="#718096">
              Lunch
            </Text>{" "}
            <Select placeholder="Select option" mt={5} mb={5}>
              <option value="option1">Peppersteak</option>
              <option value="option2">Lamb steak</option>
              <option value="option3">Grilled mincemeat</option>
            </Select>
          </GridItem>
          <GridItem colSpan={2}>
            <Text mb={-2} color="#718096">
            Drink
            </Text>
            <Select placeholder="Select option" mt={5} mb={5}>
              <option value="option1">Coke</option>
              <option value="option2">Fruit juice</option>
              <option value="option3">Lemonade</option>
            </Select>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={3}>
            <Text mb={-2} color="#718096">
              Dinner
            </Text>
            <Select placeholder="Select option" mt={5} mb={5}>
            <option value="option1">Stuffed pepper</option>
              <option value="option2">Stuffet tomato</option>
              <option value="option3">Wine leaves stuffed with rice</option>
            </Select>
          </GridItem>
          <GridItem colSpan={2}>
            <Text mb={-2} color="#718096">
              Breakfast
            </Text>
            <Select placeholder="Select option" mt={5} mb={5}>
              <option value="option1">Red wine</option>
              <option value="option2">Champagne</option>
              <option value="option3">Vodka</option>
            </Select>
          </GridItem>
          </Grid>
        <Button onClick={toggleColorMode} mb={6}>
          Color Toggle
        </Button>
        <Flex>
        <Link to="/">
          <Button colorScheme="gray" variant="outline">Back</Button>
          </Link>
          <Spacer />
          <Link to="/upgrade">
          <Button  colorScheme="purple">Continue</Button>
          </Link>

        </Flex>
      </Flex>
  
    
    </Flex>
    
    );
  };
  
  export default Meals;