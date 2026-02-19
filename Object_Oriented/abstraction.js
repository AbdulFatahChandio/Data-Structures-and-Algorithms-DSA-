class CoffeeMachine {
  start() {
    this.#heatWater();
    this.#brewCoffee();
    console.log("Coffee Ready ☕");
  }

  #heatWater() {
    console.log("Heating water...");
  }

  #brewCoffee() {
    console.log("Brewing coffee...");
  }
}

const machine = new CoffeeMachine();
machine.start();
