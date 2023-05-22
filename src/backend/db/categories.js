import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Oil Painting",
    description:
      " Paintings from one of the finest oil painters, get it now",
  },
  {
    _id: uuid(),
    categoryName: "Vector Art",
    description:
      "Get the finest vector to decore your home sweet home",
  },
  {
    _id: uuid(),
    categoryName: "Wooden Art",
    description: "Grabe the best wooden art from differnt parts of world",
  },
];
