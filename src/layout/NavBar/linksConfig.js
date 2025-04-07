import {
  GiAbstract095,
  GiAncientColumns,
  GiBalloonDog,
  GiDualityMask,
} from "react-icons/gi";

export const links = [
  { icon: GiAbstract095, path: "/", title: "Загальні дані", protected: false },
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
  {
    icon: GiDualityMask,
    path: "/admin-panel",
    title: "адмінка",
    protected: true,
  },
];
