import { Validation } from "@/validation/contracts";
import { vi } from "vitest";

export class ValidationSpy implements Validation {
  validate = vi.fn();
}
