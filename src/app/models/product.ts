// platzi fake store database
export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Product {
  id: string | number;
  title: string;
  price: number;
  description: string;
  category: Category; // Now an object!
  images: string[];   // Now an array!
}
