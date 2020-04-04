import { useDispatch, useSelector } from "react-redux";

import { Category } from "@/iterfaces/Category";
import { Store } from "@/store";

import { setActiveCategory, setAvailableCategories } from "./actionCreators";

export const useAvailableCategories = (): [
  Category[],
  (availableCategories: Category[]) => void
] => {
  const dispatch = useDispatch();

  return [
    useSelector<Store, Category[]>((state) => state.image.availableCategories),
    (availableCategories: Category[]) =>
      dispatch(setAvailableCategories(availableCategories)),
  ];
};

export const useActiveCategory = (): [
  Category | undefined,
  (availableCategories: Category) => void
] => {
  const dispatch = useDispatch();
  return [
    useSelector<Store, Category | undefined>(
      (state) => state.image.activeCategory
    ),
    (activeCategory: Category) => dispatch(setActiveCategory(activeCategory)),
  ];
};
