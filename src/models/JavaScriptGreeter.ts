import { Greeter } from "./Greeter";

export class JavaScriptGreeter extends Greeter {
  greet(name: string): string {
    return `console.log('${this.greeting}, ${name}!')`;
  }
}
