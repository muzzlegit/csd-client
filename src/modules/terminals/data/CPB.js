import {
  CPB6_BASE_ACCESSORIES,
  CPB6_BASE_FEATURES,
  CPB6_SCHEME,
  CPB6_TAGS,
} from "./baseParameters/CPB/CPB6";
import {
  CPB6B_BASE_ACCESSORIES,
  CPB6B_BASE_FEATURES,
  CPB6B_SCHEME,
  CPB6B_TAGS,
} from "./baseParameters/CPB/CPB6B";
import {
  CPB6U_BASE_ACCESSORIES,
  CPB6U_BASE_FEATURES,
  CPB6U_SCHEME,
  CPB6U_TAGS,
} from "./baseParameters/CPB/CPB6U";
import { COLORS } from "./baseParameters/colors";

export const CPB = [
  // -- 6
  {
    article: "0.0.0.3.26809",
    catalog_article: "326 809",
    scheme: CPB6_SCHEME,
    tags: CPB6_TAGS,
    accessories: ["0.0.0.4.50289", ...CPB6_BASE_ACCESSORIES],
    description: "0.0.0.3.26809 Клема вилочна CPB 6 Сіра 6мм (пак. 50 шт)",
    mediaFiles: [
      {
        url: "https://www.klemsan.com.tr/SF/12678/cpb-series-cpb-6-grey.png",
        type: "photo",
      },
    ],
    features: {
      color: COLORS.grey,
      ...CPB6_BASE_FEATURES,
    },
  },
  {
    article: "0.0.0.3.26800",
    catalog_article: "326 800",
    scheme: CPB6_SCHEME,
    tags: CPB6_TAGS,
    accessories: ["0.0.0.4.50280", ...CPB6_BASE_ACCESSORIES],
    description: "0.0.0.3.26800 Клема вилочна CPB 6 Бежева 6мм (пак. 50 шт)",
    mediaFiles: [
      {
        url: "https://www.klemsan.com.tr/SF/12924/cpb-series-cpb-6-beige.jpg",
        type: "photo",
      },
    ],
    features: {
      color: COLORS.beige,
      ...CPB6_BASE_FEATURES,
    },
  },
  // -- 6 B
  {
    article: "0.0.0.3.26819",
    catalog_article: "326 819",
    scheme: CPB6B_SCHEME,
    tags: CPB6B_TAGS,
    accessories: ["0.0.0.4.50299", ...CPB6B_BASE_ACCESSORIES],
    description: "0.0.0.3.26819 Клема вилочна CPB 6 B Сіра 10мм (пак. 25 шт)",
    mediaFiles: [
      {
        url: "https://www.klemsan.com.tr/SF/12677/cpb-series-cpb-6b-grey.png",
        type: "photo",
      },
    ],
    features: {
      color: COLORS.grey,
      ...CPB6B_BASE_FEATURES,
    },
  },
  {
    article: "0.0.0.3.26810",
    catalog_article: "326 810",
    scheme: CPB6B_SCHEME,
    tags: CPB6B_TAGS,
    accessories: ["0.0.0.4.50290", ...CPB6B_BASE_ACCESSORIES],
    description: "0.0.0.3.26810 Клема вилочна CPB 6 B Бежева 10мм (пак. 25 шт)",
    mediaFiles: [
      {
        url: "https://www.klemsan.com.tr/SF/12922/cpb-series-cpb-6b-beige.jpg",
        type: "photo",
      },
    ],
    features: {
      color: COLORS.beige,
      ...CPB6B_BASE_FEATURES,
    },
  },
  // -- 6 U
  {
    article: "0.0.0.3.26829",
    catalog_article: "326 829",
    scheme: CPB6U_SCHEME,
    tags: CPB6U_TAGS,
    accessories: ["0.0.0.4.50299", ...CPB6U_BASE_ACCESSORIES],
    description: "0.0.0.3.26829 Клема вилочна CPB 6 U Сіра 10мм (пак. 25 шт)",
    mediaFiles: [
      {
        url: "",
        type: "photo",
      },
    ],
    features: {
      color: COLORS.grey,
      ...CPB6U_BASE_FEATURES,
    },
  },
];
