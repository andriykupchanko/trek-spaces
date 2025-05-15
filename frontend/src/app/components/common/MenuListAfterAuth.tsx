"use client";

import React from "react";
import Link from 'next/link';
import MsgDrawer from "./MsgDrawer";
import ButtonOpenModal from "../blocks/ButtonOpenModl";
import {usePathStore} from "@/store/usePathStore";
import { Button, Stack, useDisclosure } from "@chakra-ui/react";
import { CiUser, CiBellOn, CiSettings, CiLogout, CiHome } from "react-icons/ci";

const MenuListAfterAuth: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const pathName = usePathStore((state) => state.pathName);

  return (
    <Stack spacing={6}>
      {pathName !== '/profile' ? (
        <>
          <Link href="/profile">
            <Button
              variant="outline"
              colorScheme="teal"
              leftIcon={<CiUser />}
              w={"100%"}
            >
              Your Profile
            </Button>
          </Link>
          <hr />
        </>
      ):(
        <>
          <Link href="/">
            <Button
              variant="outline"
              colorScheme="teal"
              leftIcon={<CiHome />}
              w={"100%"}
            >
              Home
            </Button>
          </Link>
          <hr />
        </>
      )}
      
      <ButtonOpenModal title={"Messages"} variantVisible={"outline"} icon={<CiBellOn />} onOpen={onOpen} btnRef={btnRef}/>
      <MsgDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
      <Link href="/settings">
        <Button
          variant="outline"
          colorScheme="teal"
          leftIcon={<CiSettings />}
          w={"100%"}
        >
          Settings
        </Button>
      </Link>
      <hr />

      <a href="/api/auth/logout">
        <Button
          variant="outline"
          colorScheme="teal"
          leftIcon={<CiLogout />}
          w={"100%"}
        >
          Log Out
        </Button>
      </a>
    </Stack>
  );
};

export default MenuListAfterAuth;
