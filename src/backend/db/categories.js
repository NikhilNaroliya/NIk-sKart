import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Oil Painting",
    image:"https://wallpaperaccess.com/full/140462.jpg",
    description:
      " Paintings from one of the finest oil painters, get it now",
  },
  {
    _id: uuid(),
    categoryName: "Vector Art",
    image:"https://wallpapercave.com/wp/wp4506038.jpg",
    description:
      "Get the finest vector to decore your home sweet home",
  },
  {
    _id: uuid(),

    categoryName: "Wooden Art",
    image:"https://d16kd6gzalkogb.cloudfront.net/magazine_images/Louise-Nevelson-Untitled.-Image-via-pintrest.com_.jpg",
    description: "Grabe the best wooden art from differnt parts of world",
  },
];
