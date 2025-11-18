type param = string | number | boolean;
const formatValue = (value: param): param => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};



const getLength = (value: string | any[]): number => {
  if (Array.isArray(value)) {
    return value.length;
  } else {
    return value.length;
  }
};



class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}



type Item = {
  title: string;
  rating: number;
};

const filterByRating = (arr: Item[]): Item[] => {
  return arr.filter((item) => item.rating >= 4);
};



type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (arr: User[]): User[] => {
  return arr.filter((item) => item.isActive === true);
};




interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (obj: Book) => {
  console.log(
    `Title: ${obj.title}, Author: ${obj.author}, Published: ${
      obj.publishedYear
    }, Available: ${obj.isAvailable ? "Yes" : "No"}`
  );
};




type Array = string | number;

const getUniqueValues = (arr1: Array[], arr2: Array[]): Array[] => {
  const res: Array[] = [];
  let idx = 0;

  const IsExists = (value: Array): boolean => {
    for (let i = 0; i < idx; i++) {
      if (res[i] === value){
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < arr1.length; i++) {
    const value = arr1[i];
    if (value !== undefined && !IsExists(value)) {
      res[idx] = value;
      idx++;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const value = arr2[i];
    if (value !== undefined && !IsExists(value)) {
      res[idx] = value;
      idx++;
    }
  }

  return res;
};



interface IProduct {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: IProduct[]): number => {
  if (products.length === 0) {
    return 0;
  } else {
    const totalPrices: number[] = products.map((product) =>
      product.discount !== undefined
        ? product.price * product.quantity -
          (product.price * product.quantity * product.discount) / 100
        : product.price * product.quantity
    );

    const finalTotal = totalPrices.reduce((ecc, current) => ecc + current, 0);

    return finalTotal;
  }
};


