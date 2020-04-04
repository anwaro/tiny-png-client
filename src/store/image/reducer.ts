import { Image } from "@/iterfaces/Image";
import { Category } from "@/iterfaces/Category";

import * as TYPES from "./types";

export type ImageStore = {
  Images: Image[];
  activeCategory: Category | undefined;
  availableCategories: Category[];
  timeToEnd: number;
  loading: boolean;
};

export type Action = {
  type: string;
  payload: Partial<ImageStore>;
};

const initialState: ImageStore = {
  Images: [],
  activeCategory: undefined,
  availableCategories: [],
  timeToEnd: -60,
  loading: true,
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case TYPES.SET_AVAILABLE_CATEGORIES: {
      return {
        ...state,
        availableCategories: action.payload.availableCategories,
      };
    }
    case TYPES.SET_ACTIVE_CATEGORY: {
      return { ...state, activeCategory: action.payload.activeCategory };
    }
    case TYPES.SET_TIMER: {
      return { ...state, timeToEnd: action.payload.timeToEnd };
    }
    case TYPES.SET_AUCTION_LOADING: {
      return { ...state, loading: action.payload.loading };
    }
    default:
      return state;
  }
};
