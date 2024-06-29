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
import Link from "next/link";

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
        <Button ref={btnRef} onClick={onOpen} className=" fixed">
          <span className="material-symbols-outlined">menu</span>
        </Button>
        <div className=" m-auto max-w-screen-xl">
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <Link href="/" className=" font-bold text-green-700">
                  Kronos Realm Admin
                </Link>
              </DrawerHeader>

              <DrawerBody>
                <Input placeholder="Search..." />
                <ul className="mt-4">
                  <li>
                    <Link
                      href="/admin"
                      className=" hover:text-green-700 font-semibold"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/blog"
                      className=" hover:text-green-700 font-semibold"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </DrawerBody>

              <DrawerFooter>
                <Button onClick={() => signOut()}>Sign out</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          {children}
        </div>
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
