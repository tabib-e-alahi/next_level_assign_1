## What is the use of the `keyof` keyword in TypeScript? Provide an example.

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
