import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

// self help -Oil Painting
// Fiction -Vector Art
//non finction-Wooden Art
export const products = [
  {
    _id: uuid(),
    img: "https://images.pexels.com/photos/1045299/pexels-photo-1045299.jpeg?cs=srgb&dl=pexels-steve-johnson-1045299.jpg&fm=jpg",
    
    author: "Winslow Homer",
    price: 219,
    originalPrice: 399,
    isBestSeller: true,
    category: "Oil Painting",
    rating: 4.6,
  },
  {
    _id: uuid(),
    img: "https://images.pexels.com/photos/1546251/pexels-photo-1546251.jpeg?cs=srgb&dl=pexels-zaksheuskaya-1546251.jpg&fm=jpg",

    author: "Thomas Moran",
    price: 250,
    originalPrice: 1200,
    isBestSeller: false,
    category: "Oil Painting",
    rating: 4,
  },

  {
    _id: uuid(),
    img: "https://wallpapercave.com/wp/wp4506038.jpg",
  
    author: "Jonathan Ball",
    price: 50,
    originalPrice: 500,
    isBestSeller: false,
    category: "Vector Art",
    rating: 2,
  },
  {
    _id: uuid(),
    img: "https://wallpapercave.com/wp/wp3604980.jpg",
    // name: "Atomic Habits",
    author: "Harry Roseland",
    price: 390,
    originalPrice: 790,
    isBestSeller: true,
    category: "Oil Painting",
    rating: 4.8,
  },

  {
    _id: uuid(),
    img: "https://cdn.shopify.com/s/files/1/0941/2500/products/The_Lover_s_Rose_Art_-_Wood_Art_-_Carved_Wooden_Poster_by_Woodgeek_Store_-_Wood_Wall_Art_Decor_2_1200x.jpg?v=1575931932",
  
    author: "Roshan Raj",
    price: 600,
    originalPrice: 1500,
    isBestSeller: false,
    category: "Wooden Art",
    rating: 4,
  },
  {
    _id: uuid(),
    img: "https://i.etsystatic.com/20248645/r/il/c0e28a/4613181106/il_300x300.4613181106_6fgr.jpg",
    
    author: "David Ruso",
    price: 350,
    originalPrice: 500,
    isBestSeller: false,
    category: "Wooden Art",
    rating: 2,
  },
  {
    _id: uuid(),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQI9UguDLFygrZh8TpABKucw1LtVY07ZelpA&usqp=CAU",
    
    author: "Rohit Sharma",
    price: 119,
    originalPrice: 249,
    isBestSeller: false,
    category: "Wooden Art",
    rating: 3,
  },
  {
    _id: uuid(),
    img: "https://w0.peakpx.com/wallpaper/178/137/HD-wallpaper-desert-vector-art.jpg",
    
    author: "Christopher Lee",
    price: 157,
    originalPrice: 195,
    isBestSeller: false,
    category: "Vector Art",
    rating: 3,
  },
  {
    _id: uuid(),
    img: "https://w0.peakpx.com/wallpaper/338/977/HD-wallpaper-mountains-sunset-art-vector-landscape.jpg",
    
    author: "Yukio Miyamoto",
    price: 163,
    originalPrice: 205,
    isBestSeller: false,
    category: "Vector Art",
    rating: 2.5,
  },
  {
    _id: uuid(),
    img: "https://rukminim1.flixcart.com/image/416/416/jj0bbm80/art-craft-kit/z/y/3/new-release-version-3-0-hd-diy-oil-painting-by-numbers-kits-original-imaf6zaeyzu2g7f8.jpeg?q=70",
  
    author: "Jan van Goyen",
    price: 699,
    originalPrice: 999,
    isBestSeller: false,
    category: "Oil Painting",
    rating: 4,
  },
  {
    _id: uuid(),
    img: "https://media.istockphoto.com/id/1356321090/photo/green-oil-abstract-background.jpg?b=1&s=170667a&w=0&k=20&c=CaaHMZRbTdpyfNz7BkM6pT02hLUSNh5t2tYMoNham60=",
    
    author: "Emile Claus",
    price: 399,
    originalPrice: 699,
    isBestSeller: false,
    category: "Oil Painting",
    rating: 3.5,
  },
  {
    _id: uuid(),
    img: "https://gumlet.assettype.com/newsgram/import/wp-content/uploads/2022/03/020320221646210954.jpeg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
   
    author: "Salim shah",
    price: 243,
    originalPrice: 349,
    isBestSeller: false,
    category: "Wooden Art",
    rating: 1,
  },
];
