import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
import { Stack, Flex, Box, Text } from '@chakra-ui/layout';


function Header () {
    const { colorMode } = useColorMode();
    const isDark = colorMode ==='dark';

    return(
        <Stack>
            <Flex alignSelf='center'>
                <Box align='center'>
                <Text fontSize='7xl' fontWeight='bold' bgGradient='linear(to-r, cyan.400, blue.500, purple.600)' bgClip='text'>Adam Castro</Text>
                <Text color={isDark ? 'gray.200' : 'gray.500'}></Text>
                </Box>
            </Flex>
        </Stack>
    )
}

export default Header;