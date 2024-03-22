
// class Person {
//   readonly name: string;
//   readonly age: number;
 
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
 
//   run() {
//     return 'I am running';
//   }
 
//   talk() {
//     return `I'm ${this.age} years old`;
//   }
// }
// class Pen {
//     readonly colour: string;
//     readonly brand: string;
   
//     constructor(colour: string, brand: string) {
//       this.colour = colour;
//       this.brand = brand;
//     }
   
//     run() {
//       return 'I am blue in colour';
//     }
   
//     write() {
//       return `I'm ${this.brand} years old`;
//     }
    
   
    // class Person {
    //   readonly name: string;
    //   readonly age: number;
    //   private heartRate: number;
     
    //   constructor(name: string, age: number) {
    //     this.name = name;
    //     this.age = age;
    //     this.heartRate = 72;
    //   }
     
    //   private increaseHeartRate() {
    //     this.heartRate += 20;
    //   }
     
    //   run() {
    //     this.increaseHeartRate();
    //     return 'I am running';
    //   }
     
    //   talk() {
    //     return `I'm ${this.age} years old`;
    //   }
    // }
     
    // const priya = new Person('Priya', 40);
    // console.log(priya.talk());
    // console.log(priya.run());
    class Mammal {
        readonly age: number;
        constructor(age: number) {
          this.age = age;
        }
        run() {
          return "I'm running";
        }
      }
       
      class Person extends Mammal {
        readonly name: string;
        readonly age: number;
       
        constructor(name: string, age: number) {
          super(age);
          this.name = name;
          this.age = age;
        }
       
        talk() {
          return `I'm ${this.age} years old`;
        }
      }
       
      const priya = new Person('Priya', 40);
      console.log(priya.talk());
      console.log(priya.run());
       