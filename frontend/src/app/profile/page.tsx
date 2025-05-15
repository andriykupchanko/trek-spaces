'use client';

import React, { useRef,useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useDisclosure } from "@chakra-ui/react";
import   MenuDrawer  from '../components/common/MenuDrawer';
import FullPageLoader from "../components/blocks/FullPageLoader";



export default function Profile(){

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

    return(
        <>
            <nav>
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
            </nav>
        </>
    );
}