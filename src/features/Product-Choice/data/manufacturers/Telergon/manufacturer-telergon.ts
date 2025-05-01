import { Manufacturer } from "features/Product-Choice/types/types";
import ccfLogo from "./logo/CCF.webp";
import cecLogo from "./logo/CEC.webp";
import s5Logo from "./logo/S5.webp";
import s5fLogo from "./logo/S5F.webp";
import s5lLogo from "./logo/S5L.webp";
import s5nLogo from "./logo/S5N.webp";
import logo from "./logo/logo-telergon.png";
import CCF from "./products/CCF-telergon";
import CEC from "./products/CEC-telergon";
import S5 from "./products/S5-telergon";
import S5F from "./products/S5F-telergon";
import S5L from "./products/S5L-telergon";
import S5N from "./products/S5N-telergon";

export const telergon: Manufacturer = {
  name: "telergon",
  logo: { color: "#0069ab", img: logo },
  description:
    "Telergon є визнаним лідером на ринку у сфері проєктування та виробництва електромеханічної продукції, пропонуючи ефективні рішення для ізоляції та захисту електрообладнання низької напруги. Широкий асортимент вимикачів-роз’єднувачів та перемикачів знаходить застосування в різних галузях електротехніки, зокрема в рішеннях, спеціально розроблених для систем відновлюваної енергетики.",
  products: {
    switchDisconnectors: [
      {
        series: "S5",
        logo: s5Logo,
        description:
          "Серія вимикачів-роз’єднувачів TELERGON вирізняється широким діапазоном номінальних струмів і надійністю в умовах інтенсивної експлуатації. Пристрої монтуються на основі за допомогою гвинтів та забезпечують безпечну комутацію під навантаженням до 1000 В змінного струму (як при індуктивному, так і при ємнісному навантаженні). Розривний струм може досягати восьмикратного значення робочого струму, а також пристрої здатні витримувати короткочасні струми короткого замикання до 100 кА. Для зручності експлуатації передбачено два типи керування — зовнішні або прямі рукоятки.",
        list: S5,
      },
      {
        series: "S5N",
        logo: s5nLogo,
        description:
          "Виконання у форматі «спина до спини» з переднім розташуванням механізму керування дозволяє розширити кількість доступних контактів до 6 або 8, що забезпечує більшу гнучкість у застосуванні. Пристрої монтуються на основі за допомогою гвинтів. Для зручності користування передбачено варіанти з зовнішніми або прямими рукоятками керування.",
        list: S5N,
      },
    ],
    changeoverSwitches: [
      {
        series: "S5F",
        logo: s5fLogo,
        description: "",
        list: S5F,
      },
      {
        series: "CCF",
        logo: ccfLogo,
        description: "",
        list: CCF,
      },
      {
        series: "CEC",
        logo: cecLogo,
        description: "",
        list: CEC,
      },
      {
        series: "S5L",
        logo: s5lLogo,
        description: "",
        list: S5L,
      },
    ],
  },
};
