import test from "node:test";
import assert from "node:assert/strict";
import { validateContact } from "../src/lib/contact.js";
test("contact validation rejects blank and malformed inputs", () => {
  assert.deepEqual(
    Object.keys(
      validateContact({ name: " ", email: "wrong", message: "short" }),
    ),
    ["name", "email", "message"],
  );
});
test("contact validation accepts a usable draft", () => {
  assert.deepEqual(
    validateContact({
      name: "Alex",
      email: "alex@example.com",
      message: "I would like to discuss a new web application.",
    }),
    {},
  );
});
test("contact validation caps message size", () => {
  assert.ok(
    validateContact({
      name: "Alex",
      email: "alex@example.com",
      message: "a".repeat(5001),
    }).message,
  );
});
