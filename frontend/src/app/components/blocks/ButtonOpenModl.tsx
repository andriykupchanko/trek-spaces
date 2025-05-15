import React from "react";
import { Button } from "@chakra-ui/react";

interface OpenMenuButtonProps {
    title:string;
    icon: React.ReactElement;
    variantVisible:string;
    onOpen: () => void;
    btnRef: React.RefObject<HTMLButtonElement>;
}

const OpenMenuButton: React.FC<OpenMenuButtonProps> = ({title,variantVisible,icon, onOpen, btnRef }) => {
    return (
        <Button ref={btnRef} variant={variantVisible} colorScheme="teal" onClick={onOpen} leftIcon={icon}>
            {title}
        </Button>
    );
};

export default OpenMenuButton;