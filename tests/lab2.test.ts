import { Greeter } from "../src/models/Greeter";
import { HTMLGreeter } from "../src/models/HTMLGreeter";
import { JavaScriptGreeter } from "../src/models/JavaScriptGreeter";
import { LoudGreeter } from "../src/models/LoudGreeter";

describe("Greeter class", () => {
  test("test that the constructor properly sets the greeting property", () => {
    const newGreeter = new Greeter("Whazzup");
    expect(newGreeter.greeting).toBe("Whazzup");
  });
  test("test that a greet method with greeting: Whazzup and name: Lisa returns Whazzup, Lisa!", () => {
    const newGreeter = new Greeter("Whazzup");
    expect(newGreeter.greet("Lisa")).toBe("Whazzup, Lisa!");
  });
  test("test that a greet method with greeting: Hi there and Zach: Lisa returns Hi there, Zach!", () => {
    const newGreeter = new Greeter("Hi there");
    expect(newGreeter.greet("Zach")).toBe("Hi there, Zach!");
  });
});

describe("JavaScriptGreeter class", () => {
  test("The greet method is overridden from the Greeter class and now displays as a console.log", () => {
    const newJavaScriptGreeter = new JavaScriptGreeter("Hey");
    expect(newJavaScriptGreeter.greet("Joe")).toBe("console.log('Hey, Joe!')");
  });
  test("Testing with a different greeting and name", () => {
    const newJavaScriptGreeter = new JavaScriptGreeter("Howdy");
    expect(newJavaScriptGreeter.greet("Mike")).toBe(
      "console.log('Howdy, Mike!')"
    );
  });
});

describe("LoudGreeter class", () => {
  test("LoudGreater class adds an exclamation point before calling addVolume", () => {
    const newLoudGreeter = new LoudGreeter("Aloha");
    expect(newLoudGreeter.greet("Sue")).toBe("Aloha, Sue!!");
  });
  test("AddVolume adds an extra exclamation point each time it is called", () => {
    const newLoudGreeter = new LoudGreeter("Aloha");
    newLoudGreeter.addVolume();
    newLoudGreeter.addVolume();
    expect(newLoudGreeter.greet("Sue")).toBe("Aloha, Sue!!!!");
  });
});

describe("HTMLGreeter class", () => {
  test("default tagName is h1", () => {
    const newHTMLGreeter = new HTMLGreeter("Hello");
    expect(newHTMLGreeter.greet("Reggie")).toBe("<h1>Hello, Reggie!</h1>");
  });
  test("tagName is p", () => {
    const newHTMLGreeter = new HTMLGreeter("Hello", "p");
    expect(newHTMLGreeter.greet("Reggie")).toBe("<p>Hello, Reggie!</p>");
  });
});
