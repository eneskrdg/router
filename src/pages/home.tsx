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

import {  Link,useParams} from "react-router-dom";

import { useState } from "react";


const Home = () => {

  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("White", "gray.700");
  const [selects,setSelects]=useState<string>("");
 
  
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
  <Circle w='40px' h='40px' bg='#5045E6' color='white'>
    2
  </Circle>
  <Center w='40px' h='40px' >
    <Box as='span' fontWeight='bold' color='#5045E6'  ml={4}>
      Meals
    </Box>
  </Center>
  <Center w='40px' h='40px' >
    <Box as='span' fontWeight='bold' color='#13B8A7'  ml={4}>
    <Icon viewBox='0 0 200 200' color='#A5A9AF'>
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
    3
  </Circle>
  <Center w='40px' h='40px' >
    <Box as='span' fontWeight='bold' color='black'  ml={8}>
      Upgrades
    </Box>
  </Center>
  <Center w='40px' h='40px' >
    <Box as='span' fontWeight='bold' color='#A5A9AF'  >
    <Icon viewBox='0 0 200 200' color='#A5A9AF'ml={20}>
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
          Cabin Preferences
        </Heading>

        <Text>
          Your flight comes with breakfast, lunch, and dinner. Please make your
          selections below. <br />
          Changes to your order can be made up 48 hours before your flight.
        </Text>

        <Grid templateColumns="repeat(5, 1fr)" gap={4} value={selects} onChange={(
                ev: React.ChangeEvent<HTMLInputElement>,
            ): void => setSelects(ev.target.value)}>
          <GridItem colSpan={6}>
            <Text mt={6} mb={-2} color="#718096">
            Location
            </Text>
            <Select placeholder="Select option" mt={5} mb={5} >
              <option value="BRIGHTON">BRIGHTON</option>
              <option value="DARTFORD">DARTFORD</option>
              <option value="GALASHIELS">GALASHIELS</option>
            </Select>
            {selects}
          </GridItem>
       
        </Grid>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={6}>
            <Text mb={-2} color="#718096">
            Number of people

            </Text>{" "}
            <Select placeholder="Select option" mt={5} mb={5}>
            <option value="1-2">1-2</option>
              <option value="4-5">4-5</option>
              <option value="8-10">8-10</option>
            </Select>
          </GridItem>
      
      
        </Grid>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={6}>
            <Text mb={-2} color="#718096">
            Menu option
            </Text>
            <Select placeholder="Select option" mt={5} mb={5}>
            <option value="Full Menu">Full Menu</option>
              <option value="Fix Menu">Fix Menu</option>
              <option value="Option Menu">Option Menu</option>
            </Select>
          </GridItem>
        
          
        </Grid>
        <Button onClick={toggleColorMode} mb={6}>
          Color Toggle
        </Button>
        <Flex>
        
          <Spacer />
          <Link to="/meals/">
          <Button  colorScheme="purple">Continue</Button>
          </Link>
         
        </Flex>
        
      </Flex>
  
    
    </Flex>
    
    );
  };
  
  export default Home;