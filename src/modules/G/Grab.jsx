import styled from "@emotion/styled";
import { useState } from "react";
import switches from "../switches/data/vector.json";

const List = styled.div({
  maxHeight: "800px",
  marginTop: "12px",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  gap: "8px",
});

const Image = styled.img({
  height: "60px",
});

const Wrap = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: theme.colors.text[100],
}));

const Grab = () => {
  const [brand, setBrand] = useState(1);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(1);

  const handleSelect = (e) => {
    setBrand(Number(e.currentTarget.value));
  };

  const go = async (brand, callback) => {
    fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        searchval: null,
        categories: [0],
        brands: [brand],
        caharacteristics: [],
        filters: [],
        perPage: value,
        page: 1,
        sortBy: null,
        sortOrder: null,
        balance: true,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Помилка в запиті: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setData(data.data.data);
        if (callback) callback(data.data.data);
      })
      .catch((error) => {
        console.error("Сталася помилка:", error);
      });
  };
  const go2 = async (id) => {
    try {
      const response = await fetch(`/api/product/${id}`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`HTTP помилка: ${response.status}`);
      }
      const data = await response.json(); // Отримуємо дані у форматі JSON
      return data; // Повертаємо отримані дані
    } catch (error) {
      console.error("Помилка під час виконання запиту:", error);
      return null;
    }
  };

  const addId = async (data) => {
    const updatedData = Object.values(switches).map((item) => {
      const newItem = data?.find((i) => i.article === item.code);
      if (!newItem) return item;
      return { ...item, remote_id: newItem.remote_id };
    });
    console.log(updatedData);
  };

  const addInfo = async () => {
    const updatedData = await Promise.all(
      switches.map(async (item) => {
        if (!item?.remote_id) return item;
        const newItem = await go2(item?.remote_id);
        if (!newItem) return item;
        const { product, mediaFiles, files, ...rest } = newItem;
        return {
          ...item,
          category_id: product?.category_id,
          mediaFiles,
          files,
        };
      })
    );
    console.log(updatedData);
  };

  return (
    <div style={{ height: "100%", width: "100%", textAlign: "center" }}>
      <div>
        <select onChange={handleSelect}>
          <option value={1}>Iskra</option>
          <option value={5}>Frer</option>
          <option value={6}>Telergon</option>
          <option value={4}>Klemsan</option>
        </select>
        <button
          onClick={() => {
            go(brand);
          }}
        >
          Спиздить у Вектора
        </button>
        <button
          onClick={() => {
            go(11, addId);
          }}
        >
          Додати ID Телергону
        </button>
        <button onClick={addInfo}>Додати Media</button>
        <input
          type="number"
          value={value}
          onChange={(e) => {
            setValue(e.currentTarget.value);
          }}
          style={{ width: "80px", textAlign: "center" }}
        />
      </div>

      {data?.length ? (
        <List>
          {data.map((item) => (
            <Wrap key={item.id}>
              <Image src={item.image} alt="image" />
              <div>{item.name}</div>
              <div>{item.category_id}</div>
            </Wrap>
          ))}
        </List>
      ) : null}
    </div>
  );
};

export default Grab;
