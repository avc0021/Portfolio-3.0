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

                </Box>
            </Flex>
        </Stack>
    )
}

export default Header;