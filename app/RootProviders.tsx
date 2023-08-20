"use client";

import React from "react";
import { RecoilRoot } from "recoil";

export default function RootProviders({ children }: React.PropsWithChildren) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
