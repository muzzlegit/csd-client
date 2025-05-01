import { ProductUnit } from "features/Product-Choice/types/types";
import {
  createProductDTO,
  createProductDTOShort,
  ProductDTO,
} from "./createProductDTO";

export const fetchProductByArticle = async (
  article: string
): Promise<ProductDTO | null> => {
  try {
    const response = await fetch("api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        searchval: article,
        categories: [0],
        brands: [],
        characteristics: [],
        filters: [],
        perPage: 10,
        page: 1,
        sortBy: null,
        sortOrder: null,
        balance: true,
        custom_brand_view: false,
        brand_view: false,
      }),
    });

    if (!response.ok) {
      throw new Error(`Помилка в запиті: ${response.status}`);
    }

    const data = await response.json();
    const productShort = data?.data?.data?.[0];

    if (!productShort) return null;

    const productDataShort = createProductDTOShort(productShort);

    if (!productDataShort?.remote_id) {
      return null;
    }

    const productResponse = await fetch(
      `api/product/${productDataShort.remote_id}`,
      {
        method: "GET",
      }
    );

    if (!productResponse.ok) {
      throw new Error(`HTTP помилка: ${productResponse.status}`);
    }

    const productData = await productResponse.json();

    if (!productData) return null;

    const product = createProductDTO(productData);

    if (!product) {
      console.warn("Невдалось обробити відповідь");
      return null;
    } else {
      return product;
    }
  } catch (error) {
    console.error("Помилка під час виконання запиту:", error);
    return null;
  }
};

export const fetchProductByRemoteId = async (remote_id: number) => {
  try {
    if (!remote_id) {
      return null;
    }

    const productResponse = await fetch(`api/product/${remote_id}`, {
      method: "GET",
    });

    if (!productResponse.ok) {
      throw new Error(`HTTP помилка: ${productResponse.status}`);
    }

    const productData = await productResponse.json();

    if (!productData) return null;

    const product = createProductDTO(productData);

    if (!product) {
      console.warn("Невдалось обробити відповідь");
      return null;
    } else {
      return product;
    }
  } catch (error) {
    console.error("Помилка під час виконання запиту:", error);
    return null;
  }
};

export const fetchProductByArticleShort = async (
  article: string
): Promise<ProductUnit | null> => {
  try {
    const response = await fetch("api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        searchval: article,
        categories: [0],
        brands: [],
        characteristics: [],
        filters: [],
        perPage: 10,
        page: 1,
        sortBy: null,
        sortOrder: null,
        balance: true,
        custom_brand_view: false,
        brand_view: false,
      }),
    });

    if (!response.ok) {
      throw new Error(`Помилка в запиті: ${response.status}`);
    }

    const data = await response.json();
    const productShort = data?.data?.data?.[0];

    if (!productShort) return null;

    const productDataShort = createProductDTOShort(productShort);

    if (!productDataShort) {
      return null;
    }
    return productDataShort;
  } catch (error) {
    console.error("Помилка під час виконання запиту:", error);
    return null;
  }
};
