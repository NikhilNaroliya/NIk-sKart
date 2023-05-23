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
  {
    _id: uuid(),
    categoryName: "Water Color",
    image:"https://i.pinimg.com/736x/40/3c/c7/403cc7e334e56a29fdc93fa6a2ea2546.jpg",
    description:
      "Get the finest water color paintings to decore your home sweet home",
  },
  {
    _id: uuid(),
    categoryName: "Clay art",
    image:"https://s3.amazonaws.com/images.hamlethub.com/hh20mediafolder/2689/201703/9.--Jennifer-McCurdy-ButterflyTsunamiVessel-7x14x9-Photo-by-Gary-Mirando-1489972722.jpg",
    description:
      "Get the finest clay art to decore your home sweet home",
  },

  {
    _id: uuid(),
    categoryName:  "Portrait",
    image:"https://pbs.twimg.com/media/C8F85SQXUAE-Pkt.jpg",
    description:
      "Get the finest vector to decore your home sweet home",
  },
];
