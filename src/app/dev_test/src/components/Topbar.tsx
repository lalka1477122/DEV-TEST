// components/Topbar.tsx

import { Box, Flex, Heading, Link, Spacer, useColorMode, Button } from "@chakra-ui/react";
import NextLink from "next/link";

export function Topbar() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box as="header" bg="teal.500" p={4} color="white">
            <Flex align="center" maxW="1200px" mx="auto">
                {/* Логотип или заголовок */}
                <Heading size="md">
                    <NextLink href="/" passHref>
                        <Link _hover={{ textDecoration: "none", color: "white" }}>Мое Приложение</Link>
                    </NextLink>
                </Heading>

                {/* Навигационные ссылки */}
                <Spacer />
                <Flex as="nav" gap={4}>
                    <NextLink href="/" passHref>
                        <Link _hover={{ textDecoration: "none", color: "white" }}>Главная</Link>
                    </NextLink>
                    <NextLink href="/authors" passHref>
                        <Link _hover={{ textDecoration: "none", color: "white" }}>Авторы</Link>
                    </NextLink>
                    <NextLink href="/about" passHref>
                        <Link _hover={{ textDecoration: "none", color: "white" }}>О нас</Link>
                    </NextLink>
                </Flex>

                {/* Переключатель темы */}
                <Spacer />
                <Button onClick={toggleColorMode} size="sm" colorScheme="teal" variant="outline">
                    {colorMode === "light" ? "Темная тема" : "Светлая тема"}
                </Button>
            </Flex>
        </Box>
    );
}
