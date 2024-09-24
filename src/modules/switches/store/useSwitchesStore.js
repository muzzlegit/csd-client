import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
//CONSTS

//HELPERS

//----------- STORE -----------
const useSwitchesStore = create(
  devtools(
    immer((set, get) => ({
      queryItem: {
        manufacturer: "telergon",
        section: "Перемикачі навантаження",
        series: "S5F",
        code: "S5F02503PD0",
        current: 250,
        pole: 3,
        size: "0",
        connection: "шина",
        voltageType: "AC",
        description: "Перемикач навантаження 250 А, 3 полюси",
        accessories: [
          { code: "UM-C0A230ZVPJ9", description: "Мотор-привід 125-400A" },
          { code: "D5LSI01", description: "Пряма ручка" },
          {
            code: "D5LLA01",
            description:
              "Виносна ручка з штоком, довжина штоку 177 мм, для шаф глибиною 163...250,5 мм",
          },
          {
            code: "DS-EP04",
            description:
              "Шток довжиною 250 мм, для шаф глибиною 163...323,5 мм",
          },
          {
            code: "DS-EP05",
            description:
              "Шток довжиною 387 мм, для шаф глибиною 163...460,5 мм",
          },
          { code: "DS-AU11", description: "Додатковий контакт 1NO + 1NC" },
          { code: "DS-AU12", description: "Додатковий контакт 2NO + 2NC" },
        ],
        relatedItems: [
          { code: "S5F02503PR0" },
          { code: "S5F04003PC0" },
          { code: "CCF04003PS0" },
        ],
      },
      itemsList: [],
      setQueryItem: (item) =>
        set((state) => {
          state.queryItem = item;
        }),
      setItemsList: (itemsArray) =>
        set((state) => {
          state.itemsList = itemsArray;
        }),
    })),
    { name: "switchesStore" }
  )
);

export default useSwitchesStore;
