import React, { useState } from "react";
import MessageCard from "../blocks/MessageCard";
import {Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Stack } from "@chakra-ui/react";
import { statusMessages } from "@/types/enums/statusMessages";

interface MsgDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    btnRef: React.RefObject<HTMLButtonElement>;
}

const MsgDrawer: React.FC<MsgDrawerProps> = ({ isOpen, onClose, btnRef }) => {
    const [messages, setMessages] = useState([
        { id: 1, title: "Message 1", dateMsg: new Date(), timeMsg: "12:00", description: "This is mes cxvm,nvlsdnb;lnfsbmadPJ;adjbml;danb;dsnbl;sfnl;sdng;'mse[gsae[kgsedsgfhgjhklj;;lukytrewreqgrhtjykulikyturyewrqesage 1", statusMsg: statusMessages.INFO },
        { id: 2, title: "Message 2", dateMsg: new Date(), timeMsg: "13:00", description: "This is message 2", statusMsg: statusMessages.WARNING },
        { id: 3, title: "Message 1", dateMsg: new Date(), timeMsg: "12:00", description: "This is message 1", statusMsg: statusMessages.INFO },
        { id: 4, title: "Message 2", dateMsg: new Date(), timeMsg: "13:00", description: "This is message 2", statusMsg: statusMessages.WARNING },
        { id: 5, title: "Message 1", dateMsg: new Date(), timeMsg: "12:00", description: "This is message 1", statusMsg: statusMessages.INFO },
        { id: 6, title: "Message 2", dateMsg: new Date(), timeMsg: "13:00", description: "This is message 2", statusMsg: statusMessages.WARNING },
    ]);

    const handleDelete = (id: number) => {
        setMessages(messages.filter(message => message.id !== id));
    };
    return (
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            size="md"
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Message</DrawerHeader>
                <DrawerBody>
                     {messages.map(message => (
                            <MessageCard
                            key={message.id}
                            title={message.title}
                            dateMsg={message.dateMsg}
                            timeMsg={message.timeMsg}
                            description={message.description}
                            statusMsg={message.statusMsg}
                            onDelete={() => handleDelete(message.id)}
                            />
                        ))
                    }
                </DrawerBody>
                <DrawerFooter>
                    <Button className="w-full" variant="outline" mr={3} onClick={onClose}>
                        Close
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default MsgDrawer;
