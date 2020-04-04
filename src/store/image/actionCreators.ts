import * as TYPES from "./types";

export const setActiveCategory = (activeCategory: any) => ({
  payload: { activeCategory },
  type: TYPES.SET_ACTIVE_CATEGORY,
});

export const setAvailableCategories = (availableCategories: any[]) => ({
  payload: { availableCategories },
  type: TYPES.SET_AVAILABLE_CATEGORIES,
});

export const setTimer = (timeToEnd: number) => ({
  payload: { timeToEnd },
  type: TYPES.SET_TIMER,
});

export const setAuctionLoading = (loading: boolean) => ({
  payload: { loading },
  type: TYPES.SET_AUCTION_LOADING,
});
