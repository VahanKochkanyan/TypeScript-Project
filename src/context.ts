import React from "react";
import type { IContext } from "./types";

export const UserContext = React.createContext<IContext | undefined>(undefined)