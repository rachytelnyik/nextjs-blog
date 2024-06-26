"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Button, ChakraProvider, Input, useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  if (session) {
    return (
      <ChakraProvider>
        <>
          <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
            Open
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Kronos Realm Admin</DrawerHeader>

              <DrawerBody>
                <Input placeholder="Search..." />
                <ul className="mt-4">
                  <li>Dashboard</li>
                  <li>Blog</li>
                </ul>
              </DrawerBody>

              <DrawerFooter>
                {/* <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Save</Button> */}
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
        {children}
      </ChakraProvider>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <button
        onClick={() =>
          signIn("login", { callbackUrl: "http://localhost:3000/admin" })
        }
      >
        Sign in
      </button>
    </div>
  );
}
