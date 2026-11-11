import { describe, it, expect } from "vitest";
import { generateSixDigitCode } from "../../../src/utils/generateCode.util.ts";

describe("generate six digit code", () => {
  it("should generate a numeric code with 6 digits", () => {
    const code = generateSixDigitCode();
    expect(typeof code).toBe("string");
    expect(code).toMatch(/^\d{6}$/);
  });

  it("should generate a non-null code", () => {
    const code = generateSixDigitCode();
    expect(code).toBeTruthy();
  });

  it("should generate different codes", () => {
    const code = generateSixDigitCode();
    const code_ = generateSixDigitCode();
    expect(code).not.toBe(code_);
  });

  it("should generate codes between 100000 and 999999", () => {
    const code = Number(generateSixDigitCode());
    expect(code).toBeGreaterThanOrEqual(100000);
    expect(code).toBeLessThanOrEqual(999999);
  });
});
