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



type string_or_number = string | number;

const getUniqueValues = (
  arr1: string_or_number[],
  arr2: string_or_number[]
): string_or_number[] => {
  const unique_array: string_or_number[] = [];
  let idx = 0;

  const IsExists = (value: string_or_number): boolean => {
    for (let i = 0; i < idx; i++) {
      if (unique_array[i] === value) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < arr1.length; i++) {
    const current_val = arr1[i];
    if (current_val !== undefined && !IsExists(current_val)) {
      unique_array[idx] = current_val;
      idx++;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const current_val = arr2[i];
    if (current_val !== undefined && !IsExists(current_val)) {
      unique_array[idx] = current_val;
      idx++;
    }
  }

  return unique_array;
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
