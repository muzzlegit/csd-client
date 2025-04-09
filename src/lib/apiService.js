export const fetchItemByArticle = async (article) => {
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
    const remote_id = data?.data?.data?.[0]?.remote_id;

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
    return productData;
  } catch (error) {
    console.error("Помилка під час виконання запиту:", error);
    return null;
  }
};
