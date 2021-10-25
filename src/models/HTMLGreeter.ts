import { Greeter } from "./Greeter";

export class HTMLGreeter extends Greeter {
  // tagName: string = "h1";
  tagName: string;
  // constructor(greeting: string, tagName?: string) {
  constructor(greeting: string, tagName: string = "h1") {
    super(greeting);
    // if (typeof tagName !== "undefined") {
    this.tagName = tagName;
    // }
  }
  greet(name: string): string {
    return `<${this.tagName}>${this.greeting}, ${name}!</${this.tagName}>`;
  }
}
