export class MyApp {
  private name: string;
  constructor() {
    console.log('MyApp constructor');
    console.log(`Node version : ${process.version}`);
    this.name = 'MyApp';
  }

  exec() {
    console.log(`Hello World! My name is ${this.name}.`);
  }
}
