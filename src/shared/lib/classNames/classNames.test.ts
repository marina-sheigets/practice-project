import { classNames } from "./classNames";

describe("classNames", () => {
    test("pass basic class name", () => {
        expect(classNames("test")).toBe("test");
    });

    test("pass additional class name", () => {
        expect(classNames("test", {}, ["test2"])).toBe("test test2");
    });

    test("pass additional class name as an array", () => {
        expect(classNames("test", {}, ["test2", "test3"])).toBe("test test2 test3");
    });

    test("pass additional class name as an object", () => {
        expect(classNames("test", { test2: true, test3: false })).toBe("test test2");
    });

    test("pass additional class name as an object with false", () => {
        expect(classNames("test", { test2: true, test3: false })).toBe("test test2");
    });

    test("pass all arguments", () => {
        expect(classNames("test", { class1: true, class2: false }, ["test2"])).toBe("test test2 class1");
    });
});