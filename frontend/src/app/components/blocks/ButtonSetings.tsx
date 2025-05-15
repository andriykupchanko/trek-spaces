import React from "react";
import { Button } from "@chakra-ui/react";

interface OpenMenuButtonProps {
    title:string;
    icon: React.ReactElement;
    callBack: () => void;
    btnRef: React.RefObject<HTMLButtonElement>;
}

const OpenMenuButton: React.FC<OpenMenuButtonProps> = ({title,icon, callBack, btnRef }) => {
    return (
        <Button ref={btnRef} colorScheme="teal" onClick={callBack} leftIcon={icon}>
            {title}
        </Button>
    );
};

export default OpenMenuButton;