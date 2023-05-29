"use client";

import { SessionProvider } from "next-auth/react";

const Provider = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: string;
}) => {
  return <SessionProvider session={session}>Provider</SessionProvider>;
};

export default Provider;
