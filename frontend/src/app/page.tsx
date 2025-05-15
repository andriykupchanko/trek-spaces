"use client";

import React, { useRef, useState, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useAuthStore } from "@/store/useAuthStore"; // або правильний шлях
import InfoTabs from "./components/common/InfoTabs";
import MenuDrawer from "./components/common/MenuDrawer";
import FullPageLoader from "./components/blocks/FullPageLoader";

const Home = () => {
   const {
    loading,
    isAdmin,
    isAuthentication,
    setLoading,
    setIsAdmin,
    setIsAuthentication,
  } = useAuthStore();

  const btnRef = useRef<HTMLButtonElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const checkSession = async () => {
      const response = await fetch("/api/auth/session");
      if (response.ok) {
        const data = await response.json();
        if (data.user) {
          setIsAuthentication(true);
          if (data.user.role === "admin") {
            setIsAdmin(true);
          }
        }
      }
      setLoading(false); 
    };

    checkSession();
  }, []);

  if (loading) return <FullPageLoader/>;

  return (
    <div className="flex">
      <InfoTabs isAuth={isAuthentication} isAdmin={isAdmin} />
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        btnRef={btnRef}
        isAuth={isAuthentication}
        setIsAuth={(value) => {
          if (typeof value === "function") {
            const newState = value(isAuthentication); 
            setIsAuthentication(newState);
          } else {
            setIsAuthentication(value);
          }
        }}
        isAdmin={isAdmin}
      />
    </div>
  );
};

export default Home;
