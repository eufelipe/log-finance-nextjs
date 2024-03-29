"use client";

import { createUseAuth } from "./createUseAuth";

const SIGN_IN_PROVIDER = "google";

export const useNextAuth = createUseAuth(SIGN_IN_PROVIDER);
