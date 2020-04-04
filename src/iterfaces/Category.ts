import { CategoryGroup } from "./CategoryGroup";

export type Category = {
  id: number;
  name: string;
  shortName: string;
  categoryGroup: CategoryGroup;
};
