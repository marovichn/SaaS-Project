"use client";

import { FC, useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

interface CrispChatProps {}

export const CrispChat: FC<CrispChatProps> = ({}) => {
  useEffect(() => {
    Crisp.configure("75cc0567-736e-4649-9d43-f9d3abb0166e");
  }, []);

  return null;
};

