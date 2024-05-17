import { Button, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react";
import React from "react";
import { PasswordInput } from "./PasswordInput";

interface RegisterModalProperties {
    isOpen: boolean;
    onClose: () => void;
}

export function RegisterModal({isOpen, onClose} : RegisterModalProperties) {
    
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Register User</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <Stack>
                            <Input placeholder="Enter Username"/>
                            <PasswordInput/>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <HStack>                       
                            <Button>Cancel</Button>
                            <Button colorScheme="blue">Register</Button>
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
