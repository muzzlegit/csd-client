import { DiAtom } from "react-icons/di";
import { GiAbstract095, GiBalloonDog, GiDaisy } from "react-icons/gi";

export const links = [
  { icon: DiAtom, path: "/", title: "Вибір продукту", protected: false },
  {
    icon: GiAbstract095,
    path: "/general-info",
    title: "Загальні дані",
  },
  {
    icon: GiDaisy,
    path: "/rpc",
    title: "Компенсація реактивної потужності",
  },
  {
    icon: GiBalloonDog,
    path: "/switch",
    title: "Перемикачі",
  },
  // {
  //   icon: GiAncientColumns,
  //   path: "/terminal",
  //   title: "Клеми",
  // },
  // {
  //   icon: GiDualityMask,
  //   path: "/admin-panel",
  //   title: "адмінка",
  //   protected: true,
  // },i
] as const;
