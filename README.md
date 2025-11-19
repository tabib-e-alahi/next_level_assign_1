# 2. What is the use of the `keyof` keyword in TypeScript? Provide an example.

`keyof`, its can be interpretate as the keys of something as an analogy. An analogical example could be, **`"keyof mezabhai's car"`**,
this specifically referring the car-key of meza bhai's car. Same thing is in typescript keyof. It is a `type operator` in Typescript which `extract` keys of given object , and convert them into union literals. (Union literal is a collection of primitive data type for example: type user = "string" | "number" | "boolean", this refers that user type can be string or number or Boolean). And keyof converts the extracted keys in this type of leteral form.
Lets understand this with an example:

`Suppose we have this type User,`
```ts
type User = {
  id: number;
  name: string;
  email: string;
  isMarried: boolean;
}
```

and we need the keys of type User as a union literals. without keyof we have to write the keys manually like this:

```ts
type UserType = "id" | "name" | "email" | "isMarried";
```
But what if 
1. the number of keys are many, or 
2. we do not know or could not see the keys of type User

then how we will write down those manually. Heres keyof came to do a magic. with keyof we can do this easily.
```ts
type UserType_keyof = keyof User;
```
Behind the scenes the  **`UserType_keyof`** created like this:
```ts
type UserType_keyof = "id" | "name" | "email" | "isMarried";
```

# 3. Explain the difference between any, unknown, and never types in TypeScript.
**`any`**, **`unknow`** and **`never`** are the special primitive types that only exist is TypeScript but do not exist in JavaScript.

### 1. `any`
`any` type used in Typescript when you totally do not care about the data types of a variables. For example you want to create a array, which will take anything (string, number, boolear, undifined, null anything) then you can use `any`.
For example: 
```ts
const mixedArr: any[] = ["56", 56, undefined, "tabib", null];
```
using `any`, typescript bypass the type checking. `any` type convert typescript into javscript again.

### 2. `unknown`
`unknown` concept is almost same as `any`, but it do not disable type checking.`unknown` accept anything like `any` but do not use it without type checking. It will force you to check the type before using it ohterwise will give an error.

For example:
```ts
let unknown_obj: unknown = 56.98663;
unknown_obj.toFixed(2); // error: 'unknown_obj' is of type 'unknown'.
```
Here you can clearly see thet the unknown_obj has number type value, still typescript is not giving error. Because in large project there can be anything you do not know. thats why type checking is manadatory with `unknown`.

The correct way is:
```ts
let unknown_obj: unknown = 56.98663;

if(typeof unknown_obj === "number"){
    unknown_obj.toFixed(2);
}
```

### 3. `never`
`never` is almost similar as `void` but has a major difference. `void` is used in a function that has a value which can be returned but you do not want to return it for example, you have a function, which calculate the sum of an array of numbers and It can return the sum, But instead of returning it, you are printing the sum, this is `void` type function.
But `never` is used where the function will not reach the end. the function will not return antthing ever. For example: a `function running an infinite loop`, typescript will infer this as `never` type if do not explicitly defined as `never` type.
```ts
const function_never = ():never =>{
    while(true){
        console.log("Infinite loop...");
    }
}
```

