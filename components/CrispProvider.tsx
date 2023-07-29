"use client";

import { FC } from "react";
import { CrispChat } from "@/components/CrispChat";

interface CrispProviderProps {}

export const CrispProvider: FC<CrispProviderProps> = ({}) => {
  return <CrispChat />;
};

