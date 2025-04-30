export const TABS = {
  features: "Характеристики",
  files: "Документи",
  accesories: "Аксесуари",
  analogs: "Аналоги",
} as const;

export type TabType = keyof typeof TABS;
export type TabsType = typeof TABS;
