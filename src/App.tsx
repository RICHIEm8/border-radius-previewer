import { Button, Flex, NumberInput, NumberInputField, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';

interface Radius {
  topLeft: string;
  topRight: string;
  bottomLeft: string;
  bottomRight: string;
}

function App() {
  const [radius, setRadius] = useState<Radius>({
    topLeft: '',
    topRight: '',
    bottomLeft: '',
    bottomRight: '',
  });

  const toast = useToast();

  const onChange = (value: string, onValidated: (currRadius: Radius) => void) => {
    if (value.match(/^[0-9]*$/)) {
      onValidated(radius);
    } else {
      toast({
        title: 'Please enter only numbers from 0-9 up to a maximum of 3 digits',
        duration: 2000,
      });
    }
  };

  const onReset = () => {
    setRadius({ topLeft: '', topRight: '', bottomLeft: '', bottomRight: '' });
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      bg="tomato"
      minHeight="100vh"
      justifyContent="center"
    >
      <Flex>
        <NumberInput
          w={75}
          mr={300}
          value={radius.topLeft}
          onChange={(value) =>
            onChange(value, (currRadius) => {
              setRadius({ ...currRadius, topLeft: value });
            })
          }
        >
          <NumberInputField maxLength={3} bgColor="white" />
        </NumberInput>
        <NumberInput
          w={75}
          ml={300}
          value={radius.topRight}
          onChange={(value) =>
            onChange(value, (currRadius) => {
              setRadius({ ...currRadius, topRight: value });
            })
          }
        >
          <NumberInputField maxLength={3} bgColor="white" />
        </NumberInput>
      </Flex>
      <Flex
        bg="turquoise"
        h={600}
        w={600}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        borderTopLeftRadius={parseInt(radius.topLeft)}
        borderTopRightRadius={parseInt(radius.topRight)}
        borderBottomLeftRadius={parseInt(radius.bottomLeft)}
        borderBottomRightRadius={parseInt(radius.bottomRight)}
      >
        <Text fontWeight="bold" fontSize="5xl" color="white">
          Border Radius Previewer
        </Text>
        <Button onClick={onReset}>Reset</Button>
      </Flex>
      <Flex>
        <NumberInput
          w={75}
          mr={300}
          value={radius.bottomLeft}
          onChange={(value) =>
            onChange(value, (currRadius) => {
              setRadius({ ...currRadius, bottomLeft: value });
            })
          }
        >
          <NumberInputField maxLength={3} bgColor="white" />
        </NumberInput>
        <NumberInput
          w={75}
          ml={300}
          value={radius.bottomRight}
          onChange={(value) =>
            onChange(value, (currRadius) => {
              setRadius({ ...currRadius, bottomRight: value });
            })
          }
        >
          <NumberInputField maxLength={3} bgColor="white" />
        </NumberInput>
      </Flex>
    </Flex>
  );
}

export default App;
