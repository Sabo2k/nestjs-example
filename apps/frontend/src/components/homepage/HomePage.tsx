import { Box, Button, Stack, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { RegisterModal } from "./RegisterModal";

/**
 * Simple HomePage with Register-Modal
 * @returns JSX element
 */
export default function HomePage() {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box p={20}>
                <Stack>
                    <Button onClick={onOpen}>Register User</Button>
                    <Button>Create Medium</Button>
                    <RegisterModal isOpen={isOpen} onClose={onClose}/>
                </Stack>
            </Box>
        </>
    );
}