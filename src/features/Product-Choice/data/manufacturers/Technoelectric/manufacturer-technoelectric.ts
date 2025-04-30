import { Manufacturer } from "features/Product-Choice/types/types";
import cspLogo from "./logo/CSP.webp";
import vcpLogo from "./logo/VCP.webp";
import logo from "./logo/logo-technoelectric.webp";
import CSP from "./products/CSP-technoelectric";
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
        logo: vcpLogo,
        description:
          "Серія VISUALCOMPACT P — це лінійка вимикачів-роз'єднувачів, призначених для комутації та відключення електричних кіл низької напруги під навантаженням. Ці пристрої широко застосовуються як:​ головні вимикачі, вимикачі для електродвигунів, Роз'єднувачі, аварійні вимикачі",
        list: VCP,
      },
    ],
    changeoverSwitches: [
      {
        series: "CSP",
        logo: cspLogo,
        description: "",
        list: CSP,
      },
    ],
  },
};
