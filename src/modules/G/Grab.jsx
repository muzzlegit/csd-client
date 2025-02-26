import styled from "@emotion/styled";
import { useState } from "react";
import terminals from "../terminals/data/Terminals copy 2.json";

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

const getAssessority = () => {
  const getCatalogArticle = (article) => {
    const str1 = article.replace(/\./g, "").slice(3);
    return str1.slice(0, 3) + " " + str1.slice(3);
  };

  const list = {};
  switches.forEach((terminal) => {
    terminal.accesories.forEach((acc) => {
      if (!list[acc]) {
        list[acc] = [terminal.article];
      } else {
        list[acc].push(terminal.article);
      }
    });
  });
  const newList = [];
  Object.entries(list).map(([article, data]) => {
    newList.push({
      article,
      catalog_article: getCatalogArticle(article),
      entity: "accessory",
      related_items: data,
    });
  });
  return newList;
};
// console.log(getAssessority());

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

  const getColors = (index) => {
    switch (index) {
      case "0":
        return "grey";
      case "1":
        return "blue";
      case "2":
        return "green";
      case "3":
        return "yellow";
      case "4":
        return "red";
      case "5":
        return "black";
      case "6":
        return "white";
      case "7":
        return "orange";
      case "8":
        return "brown";
      case "9":
        return "grey";
    }
  };

  const fillColor = () => {
    console.log(
      terminals.map((item) => {
        const index = item.article.slice(12, 13);
        const color = getColors(index);
        const { name, features, ...rest } = item;

        features.color.value = color;
        return { ...rest, features };
      })
    );
  };
  fillColor();
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
      const newItem = data?.find((i) => i.article === item.article);
      if (!newItem) return { ...item, remote_id: null };
      return { ...item, remote_id: newItem.remote_id };
    });
    console.log(updatedData);
  };

  const klemsanInfo = (data) => {
    console.log(data);
    console.log(
      data.map(({ article, name, remote_id }) => ({
        article,
        name,
        remote_id,
      }))
    );
  };

  const addInfo = async () => {
    const updatedData = await Promise.all(
      terminals.map(async (item) => {
        if (!item?.remote_id) return item;
        const newItem = await go2(item?.remote_id);
        if (!newItem) return item;
        const { features, product, mediaFiles, files, ...rest } = newItem;
        return {
          ...item,
          description: product.description,
          features: {
            color: {
              label: "Колір",
              value: "blue",
              unit: null,
            },
            series: {
              label: "Серія",
              value: features?.[2]?.value,
              unit: null,
            },
            type: {
              label: "Тип",
              value: features?.[3]?.value,
              unit: null,
            },
            size: {
              label: "Розмір (ШхВхД)",
              value: `${features?.[5]?.value}x${features?.[7]?.value}x${features?.[6]?.value}`,
              unit: "мм",
            },
            voltage: {
              label: "Напруга",
              value: features?.[8]?.value,
              unit: "B",
            },
            current: {
              label: "Струм",
              value: features?.[9]?.value,
              unit: "А",
            },
            cross_section: {
              label: "Номінальний переріз провідника",
              value: features?.[10]?.value,
              unit: "мм²",
            },
          },
          mediaFiles,
          // files,
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
            go(brand, klemsanInfo);
          }}
        >
          Спиздить у Вектора
        </button>
        <button
          onClick={() => {
            go(4, addId);
          }}
        >
          Додати ID Телергону
        </button>
        <button onClick={addInfo}>Додати Media</button>
        <input
          type="number"
          value={value}
          onChange={addInfo}
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
