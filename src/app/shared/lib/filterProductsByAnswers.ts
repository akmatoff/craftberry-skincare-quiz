import type { Product, QuestionAnswer } from "../types";

export function filterProductsByAnswers(
  products: Product[],
  answers: QuestionAnswer[]
) {
  return products.filter((product) => {
    const searchTerm = `${product.title} ${
      product.body_html
    } ${product.tags.join(" ")}`.toLowerCase();

    return answers.some((answer) =>
      searchTerm.includes(answer.answer.text.toLowerCase())
    );
  });
}
