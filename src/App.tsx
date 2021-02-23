import { Flex, NumberInput, NumberInputField, Spacer, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

function App() {
  const [topLeftRadius, setTopLeftRadius] = useState('');
  // const [topRightRadius, setTopRightRadius] = useState('');
  // const [bottomLeftRadius, setbottomLeftRadius] = useState('');
  // const [bottomRightRadius, setbottomRightRadius] = useState('');

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      bg="tomato"
      minHeight="100vh"
      justifyContent="center"
    >
      <NumberInput>
        <NumberInputField
          w={50}
          mr={300}
          bgColor="white"
          onChange={(e) => {
            setTopLeftRadius(e.target.value);
            console.log(e.target.value);
          }}
        />
        <NumberInputField w={50} ml={300} bgColor="white" />
      </NumberInput>
      <Flex
        bg="turquoise"
        h={600}
        w={600}
        alignItems="center"
        justifyContent="center"
        borderTopLeftRadius={topLeftRadius}
        borderTopRightRadius={10}
        borderBottomLeftRadius={15}
        borderBottomRightRadius={20}
      >
        <Text fontWeight="bold" fontSize="5xl" color="white">
          Border Radius Previewer
        </Text>
      </Flex>
      <NumberInput>
        <NumberInputField w={50} mr={300} bgColor="white" />
        <NumberInputField w={50} ml={300} bgColor="white" />
      </NumberInput>
    </Flex>
  );
}

export default App;
