"use client";

import React from "react";
import { RecoilRoot } from "recoil";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function RootProviders({ children }: React.PropsWithChildren) {
  return (
    <RecoilRoot>
      {children}
      {/* Toastify Container */}
      <ToastContainer autoClose={3000} bodyClassName="text-[14px]" />
    </RecoilRoot>
  );
}
