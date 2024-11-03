// app/authors/page.tsx

"use client";
import { SimpleGrid, Box, Heading, Text } from "@chakra-ui/react";
import {Githubuser} from "@/components/githubuser"

export default function AuthorsPage() {
    const users = [
        "https://api.github.com/users/lalka1477122",
        // "https://api.github.com/users/octocat",
        // "https://api.github.com/users/defunkt"
    ];

    return (
        <Box p={8}>
            <Heading mb={6} textAlign="center">
                Авторы
            </Heading>
            <Text mb={6} textAlign="center" fontSize="lg">
                Ознакомьтесь с профилями разработчиков на GitHub.
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} >
                {users.map((userg, index) => (
                    <Githubuser key={index} userg={userg} />
                ))}
            </SimpleGrid>
        </Box>
    );
}
