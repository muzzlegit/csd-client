import { GiAbstract095, GiAncientColumns, GiBalloonDog } from "react-icons/gi";

import { DiAtom } from "react-icons/di";

export const links = [
  { icon: GiAbstract095, path: "/", title: "Загальні дані", protected: false },
  {
    icon: DiAtom,
    path: "/product-choice",
    title: "Вибір продуктів",
    protected: false,
  },
  {
    icon: GiBalloonDog,
    path: "/switch",
    title: "Перемикачі",
    protected: false,
  },
  {
    icon: GiAncientColumns,
    path: "/terminal",
    title: "Клеми",
    protected: false,
  },
  // {
  //   icon: GiDualityMask,
  //   path: "/admin-panel",
  //   title: "адмінка",
  //   protected: true,
  // },
];
