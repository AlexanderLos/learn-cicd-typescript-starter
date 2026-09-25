import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
    test("returns the key from a valid header", () => {
      expect(getAPIKey({ authorization: "ApiKey abc123" })).toBe("abc123");
    });
    test("returns null if the header is missing", () => {
        expect(getAPIKey({})).toBeNull();
    })
    test("returns null if the scheme is wrong", () => {
        expect(getAPIKey({ authorization: "Bearer abc123" })).toBeNull();
    });
    test("header with apikey but no key after it", () => {
        expect(getAPIKey({ authorization: "ApiKey" })).toBeNull();
    })
});