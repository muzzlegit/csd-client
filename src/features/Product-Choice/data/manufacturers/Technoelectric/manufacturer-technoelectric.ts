import { Manufacturer } from "features/Product-Choice/types/types";
import vcp from "./logo/VCP.webp";
import logo from "./logo/logo-technoelectric.webp";
import VCP from "./products/VCP-technoelectric";

export const technoelectric: Manufacturer = {
  name: "technoelectric",
  logo: { color: "#0047ab", img: logo },
  description:
    "Італійський виробник електротехнічного обладнання, спеціалізується на розробці та виробництві високоякісних вимикачів навантаження, перемикачів та роз'єднувачів для систем низьковольтного електропостачання. Продукція компанії широко застосовується в промислових, комерційних та енергетичних об'єктах.",
  products: {
    switchDisconnectors: [
      {
        series: "VCP",
        logo: vcp,
        description:
          "Серія VISUALCOMPACT P — це лінійка вимикачів-роз'єднувачів, призначених для комутації та відключення електричних кіл низької напруги під навантаженням. Ці пристрої широко застосовуються як:​ головні вимикачі, вимикачі для електродвигунів, Роз'єднувачі, аварійні вимикачі",
        list: VCP,
      },
    ],
  },
};
