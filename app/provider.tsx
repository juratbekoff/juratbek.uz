"use client";

import * as React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export function Provider({ children }: { children: any }) {
  return (
    <>
      {children}
      <ProgressBar
        height="5px"
        color="#c406be"
        options={{ showSpinner: true }}
        shallowRouting
      />
    </>
  );
}
