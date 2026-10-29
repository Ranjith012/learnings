// 1. Class
const classDetails = () => {

    class User {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        getDetails(): { name: string, age: number } {
            return {
                name: this.name,
                age: this.age
            }
        }
    }

    const user1 = new User("Alice", 30);
    console.log(user1.getDetails());

}

// 2. Tuples

const tuples = () => {
    let user: [string, number, boolean];

    user = ["Kamesh", 25, true]; // Valid

    console.log(user);
}

//3. Optional Properties

const optionalProperties = () => {
    interface User {
        name: string;
        age?: number; // Optional property
    }
    const user1: User = { name: "Alice" }; //
}

//4. Type Inference

const typeInference = () => {
    let userName = "Kamesh";
    const userAge = 25;

    console.log(`User Name: ${userName}, User Age: ${userAge}`);
}

const functionTypes = () => {
    const add = (a: number, b: number): number => {
        return a + b;
    }
    console.log(add(5, 10));

    type Operation = (a: number, b: number) => number;

    const multiply: Operation = (a, b) => {
        return a * b;
    }

    console.log(multiply(5, 10));
}

// 6. Dynamic Arrays
const dynamicArrays = () => {
    let numbers: number[] = [1, 2, 3];
    numbers.push(4);
    numbers.push(8);
    console.log(numbers);

    interface User {
        id: number;
        name: string;
    }

    const users: User[] = [];

    users.push({ id: 1, name: "Kamesh" });
    users.push({ id: 2, name: "Arun" });

    console.log(users);
}

const unionTypes = () => {

    const userId: number | string = "12345"; // Union type
    console.log(`User ID: ${userId}`);

    const printId = (id: number | string) => {
        if (typeof id === "string") { // It is called as type narrowing
            console.log(`string: ${id}`);
        }
        if (typeof id == "number") {
            console.log(`number: ${id}`);
        }
    }
    printId("123");
    printId(123);
}

const typeAliases = () => {
    type UserId = string | number;

    let id: UserId;

    id = 101;
    id = "USER101";
    console.log(`User ID: ${id}`);
}

const typeAssertion = () => {
    let someValue: unknown = "Hello, TypeScript!";
    let strLength: number = (someValue as string).length; // Type assertion 

    console.log(`String Length: ${strLength}`);
}

const typeinference_typeassertion = () => {
    // Type inference example
    let name = "Kamesh";
    console.log(`Name: ${name}`);

    // Type assertion example
    let someValue: unknown = "Hello, TypeScript!";
    let strLength: number = (someValue as string).length; // Type assertion
    console.log(`String Length: ${strLength}`);

}

const enums = () => {
    enum Color {
        Red = "#FF0000",
        Green = "#00FF00",
        Blue = "#0000FF"
    }
    console.log(Color.Red); // Output: #FF0000
}

const hertrogeneousEnum = () => {
    enum hertrogeneousEnum {
        No = 0,
        Yes = "YES"
    }
    console.log(hertrogeneousEnum);
}

const genericTypes = () => {
    const generics = <T>(value: T): T => {
        return value;
    }
    console.log(generics<string>("Hello, TypeScript!"));
    console.log(generics<number>(42));


    const genericsArray = <T>(arr: T[]): T | undefined => {
        return arr[0];
    }

    console.log(genericsArray<number>([1, 2, 3]));
    console.log(genericsArray<string>(["1", "2", "3"]));
}

const multipleGenericTypes = () => {
    const multipleGenerics = <T, U>(array: T[], value: U): U => {
        console.log(`Array: ${array}, Value: ${value}`);
        return value;
    }

    console.log(multipleGenerics<number, string>([1, 2, 3], "Hello"));
    console.log(multipleGenerics<string, string>(["1", "2", "3"], "Hello TS"));
}

const genericInterface = () => {
    interface generic_interface<T> {
        data: T,
        age: number;
    }

    const user: generic_interface<string> = {
        data: "Kamesh",
        age: 25
    }

    console.log(user);
}

const genericExtends = () => {
    console.log("Hello")

    const User = {
        name: "Ranjith", age: 25
    }

    type Users = typeof User;

    const getUserInfo = <T, U extends keyof T>(obj: T, key: U) => {
        return obj[key];
    }

    console.log("User info : ", getUserInfo<Users, "name">(User, "name"));

}

const oopsClass = () => {
    class car {
        brand: string;

        constructor(brand: string) {
            this.brand = brand;
        }

        getBranch(): string {
            return this.brand;
        }
    }

    const car1 = new car("Toyota");
    const car2 = new car("Honda");
    console.log(car1.getBranch());
    console.log(car2.getBranch());
}


const encapsulation = () => {
    class BankAccount {
        private balance: number = 0;

        constructor(initialBalance: number) {
            this.balance = initialBalance;
        }

        deposit(amount: number): void {
            this.balance += amount;
        }

        withdraw(): string {
            return this.balance.toString();
        }
    }

    const account = new BankAccount(1000);
    account.deposit(500);
    console.log(account.withdraw()); // Output: 1500
    account.deposit(500);
    console.log(account.withdraw()); // Output: 1500
}

const inheritance = () => {
    class Animal {
        eat() {
            console.log("Animal is eating");
        }
    }
    class Dog extends Animal {
        bark() {
            console.log("Dog is barking");
        }
    }
    const dog = new Dog();
    dog.eat(); // Inherited method
    dog.bark(); // Dog's own method
}

const polymorphism = () => {
    class Animal {
        sound(): void {
            console.log("Animal makes a sound");
        }
    }

    class Dog extends Animal {
        override sound(): void {
            console.log("Dog barks");
        }
    }

    class Cat extends Animal {
        override sound(): void {
            console.log("Cat meows");
        }
    }

    const animals: Animal[] = [new Dog(), new Cat()];

    animals.forEach((animal) => animal.sound());
}

const abstractClass = () => {
    abstract class account {
        abstract payment(amount: number): void
        end() {
            console.log("End of the account")
        }
    }

    class Bank extends account {
        override payment(amount: number): void {
            console.log(`Payment of ${amount} is done`);
        }
    }

    const credit = new Bank();
    credit.payment(1000);
    credit.end();
}

const intersectionTypes = () => {
    type Admin = {
        privileges: string[];
    }

    type common = {
        name: string;
        startDate: Date;
    }

    type AdminUser = Admin & common;

    const adminUser: AdminUser = {
        privileges: ["create-server"],
        name: "Ranjith",
        startDate: new Date()
    }
    console.log("adminUser", adminUser)
}

const literalTypes = () => {
    type Status = "success" | "error" | "loading";

    function showStatus(status: Status): void {
        console.log(status);
    }

    showStatus("success");

    // showStatus("pending"); // Error
}

const mappedTypes = () => {
    type User = {
        name: string,
        age: number
    }
    type OptionalUser = {
        [k in keyof User]: User[k]
    }

    const userDetails: OptionalUser = {
        name: "Ranjith",
        age: 25
    }
    console.log("userDetails", userDetails)
}

const conditionalTypes = () => {
    type CheckType<T> = T extends string ? string : number;

    type A = CheckType<string>;  // "Text"
    type B = CheckType<number>;  // "Other"

    const user: A = "98989";
    const user2: B = 349872;

    console.log("user", user);
    console.log("user2", user2);
}

type userType = {
    userName: string;
    age: number;
}
const partialTypes = () => {

    type partialUserType = Partial<userType>;

    const user: partialUserType = {
        userName: "Ranjith"
    }
    console.log("user", user);

    const user2 = (address: string, data: partialUserType) => {
        console.log("address", address);
        console.log("data", data);
    }

    user2("Chennai", { age: 25 });
}

const requiredTypes = () => {
    type requiredUserType = Required<userType>;
    const user: requiredUserType = {
        userName: "Ranjith",
        age: 25
    }
    console.log("user", user);
}

const readonlyTypes = () => {
    type readonlyUserType = Readonly<userType>;
    const user: readonlyUserType = {
        userName: "Ranjith",
        age: 25
    }
    // user.userName = "Kamesh"; // Error: Cannot assign to 'userName' because it is a read-only property.
    console.log("user", user);
}

const pickTypes = () => {
    type pickUserType = Pick<userType, "userName">;
    const user: pickUserType = {
        userName: "Ranjith"
    }
    // user.age = 25; // Error: Property 'age' does not exist on type 'pickUserType'.
    console.log("user", user);
}

const omitTypes = () => {
    type omitUserType = Omit<userType, "age">;
    const user: omitUserType = {
        userName: "Ranjith"
    }
    // user.age = 25; // Error: Property 'age' does not exist on type 'omitUserType'.
    console.log("user", user);
}

type record = "start" | "stop" | "pause";
const RecordTypes = () => {
    type recordUserTypes = Record<record, string[]>
    type recordUserType = Partial<Record<record, string[]>>

    const user: recordUserTypes = {
        "start": ["action1", "action2"],
        "stop": ["action3", "action4"],
        "pause": ["action5", "action6"]
    }

    const user1: recordUserType = {
        "start": ["action1", "action2"]
    }
    console.log("user", user, "\n\n", user1);
}

const excludeTypes = () => {
    type excludeUserTypes = Exclude<record, "pause">

    const excludeType: excludeUserTypes = "start";

    console.log("excludeType", excludeType);
}

const extractTypes = () => {
    type extractUserTypes = Extract<record, "start">

    const data: extractUserTypes = "start"

    console.log("Extrac", data)
}

const nonNullableTypes = () => {
    type value = string | number | null | 0 | undefined | { name: string }

    type nonullabales = NonNullable<value>

    const count: nonullabales = { name: "data" }
}

const returnTypes = () => {
    function getUser() {
        return {
            name: "Ranjith", age: 12
        }
    }

    type returnTypes = ReturnType<typeof getUser>;

    const user: returnTypes = {
        name: "Ranjith", age: 25
    }

    console.log("ReturnType", user)
}

// classDetails(); // 1
// tuples(); // 2
// optionalProperties(); //3
// typeInference(); //4
// functionTypes(); //5
// dynamicArrays(); //6
// unionTypes(); //7
// typeAliases(); //8
// typeAssertion(); //9
// typeinference_typeassertion(); //10
// enums(); //11
// hertrogeneousEnum(); //12
// genericTypes(); //13
// multipleGenericTypes(); //13
// genericInterface(); //13
// genericExtends() //13
// oopsClass() // 14
// encapsulation() // 14
// inheritance() // 14
// polymorphism() // 14
// abstractClass(); //14
// intersectionTypes(); //15
// literalTypes(); //16
// mappedTypes(); //17
// conditionalTypes(); //18
// partialTypes() // 19.1
// requiredTypes() // 19.2
// readonlyTypes() // 19.3
// pickTypes() // 19.4
// omitTypes() // 19.5
// RecordTypes() // 19.6
// excludeTypes() // 19.7
// extractTypes() // 19.8
// nonNullableTypes() // 19.9
returnTypes() // 19.10