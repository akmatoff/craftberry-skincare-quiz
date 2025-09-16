export type Question = {
  id: string;
  question: string;
  options: QuestionOption[];
};

export type QuestionOption = {
  id: string;
  text: string;
};

export type QuestionAnswer = {
  question: string;
  answer: QuestionOption;
};

export type QuizProgress = {
  current: number;
  total: number;
  percent: number;
};

export type Product = {
  id: number;
  title: string;
  handle: string;
  body_html: string;
  tags: string[];
  images: ProductImage[];
  variants: ProductVariant[];
};

export type ProductImage = {
  id: number;
  width: number;
  height: number;
  src: string;
};

export type ProductVariant = {
  id: number;
  title: string;
  price: string;
};

export type ProductsResponse = {
  products: Product[];
};
