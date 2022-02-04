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


const Upgrade = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("White", "gray.700");
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
  <Circle w='40px' h='40px' bg='#13B8A7' color='white'>
    3
  </Circle>
  <Center w='40px' h='40px' >
    <Box as='span' fontWeight='bold' color='#13B8A7'  ml={8}>
      Upgrades
    </Box>
  </Center>
  <Center w='40px' h='40px' >
    <Box as='span' fontWeight='bold' color='#13B8A7'  >
    <Icon viewBox='0 0 200 200' color='#13B8A7'ml={20}>
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
            <Select placeholder="Select option" mt={5} mb={5}>
              <option value="option1">Ketchup</option>
              <option value="option2">Mayonnaise</option>
              <option value="option3">Mustard</option>
            </Select>
          </GridItem>
       
        </Grid>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={6}>
            <Text mb={-2} color="#718096">
            Snacks
            </Text>{" "}
            <Select placeholder="Select option" mt={5} mb={5}>
              <option value="option1">Biscuits</option>
              <option value="option2">Cookie</option>
              <option value="option3">Candy</option>
            </Select>
          </GridItem>
         
        </Grid>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={6}>
            <Text mb={-2} color="#718096">
            SPICES 
            </Text>
            <Select placeholder="Select option" mt={5} mb={5}>
              <option value="option1">Chilli powder</option>
              <option value="option2">Cumin</option>
              <option value="option3">Paprika </option>
            </Select>
          </GridItem>
         
          
        </Grid>
        <Button onClick={toggleColorMode} mb={6}>
          Color Toggle
        </Button>
        <Flex>
        <Link to="/meals">
          <Button colorScheme="gray" variant="outline">Back</Button>
          </Link>
          <Spacer />
          <Link to="/payment">
          <Button  colorScheme="purple">Continue</Button>
          </Link>

        </Flex>
      </Flex>
  
    
    </Flex>
    
    );
  };
  
  export default Upgrade;