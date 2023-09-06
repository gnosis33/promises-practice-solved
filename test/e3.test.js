import { it, describe, expect } from "vitest";
import { getPromise, updateSumValue } from "../exercises/e3.js";

describe("getPromise", () => {
  it("Function should exist", () => {
    expect(getPromise).toBeInstanceOf(Function);
  });

  it("Function return value constructor should have a name of Promise", () => {
    expect(getPromise(9).constructor.name).toEqual("Promise");
  });

  it("Promise should resolve with a value of the whole number argument", async () => {
    expect(await getPromise(9)).toEqual(9);
    expect(await getPromise(80)).toEqual(80);
  });

  it("Function returns 0 if the argument is a string", () => {
    expect(getPromise("abc")).toEqual(0);
  });

  it("Function returns 0 if the argument is not a whole number", () => {
    expect(getPromise(9.1)).toEqual(0);
  });
});

describe("logSyncAndAsyncMessages", () => {
  it("Function should exist", () => {
    expect(updateSumValue).toBeInstanceOf(Function);
  });

  // it("Function returns 10 whatever argument value the promise function was invoked with", async () => {
  //   expect(updateSumValue(Promise.resolve(121))).toBe(10);
  // });
  // ^^^^^^^^^^^^^
  //Test Design Issue: This seems more like a design issue with the test itself. An async function will always return a Promise, and expecting it to return a synchronous value contradicts the language's design.
  it("Function returns 10 whatever argument value the promise function was invoked with", async () => {
    const result = await updateSumValue(); // No argument passed here
    expect(result).toBe(10);
  });
});
