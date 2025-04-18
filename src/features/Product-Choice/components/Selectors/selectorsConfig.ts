import { ChangeoverSwitchesSelector } from "./ChangeoverSwitchesSelector/ChangeoverSwitchesSelector";
import { SwitchDisconnectorsSelector } from "./SwitchesSelector/SwitchDisconnectorsSelector";

export const selectorsConfigs = [
  {
    key: "switchDisconnectors",
    title: "Вимикачі навантаження",
    component: SwitchDisconnectorsSelector,
  },
  {
    key: "changeoverSwitches",
    title: "Перемикачі навантаження",
    component: ChangeoverSwitchesSelector,
  },
] as const;

export type SelectorConfigType = (typeof selectorsConfigs)[number];
export type SelectorKeyType = (typeof selectorsConfigs)[number]["key"];
