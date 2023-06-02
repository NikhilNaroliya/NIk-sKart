import { v4 as uuid } from "uuid";


export const products = [
  {
    _id: uuid(),
    img: "https://images.pexels.com/photos/1045299/pexels-photo-1045299.jpeg?cs=srgb&dl=pexels-steve-johnson-1045299.jpg&fm=jpg",
    name:"Oil Painting",
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
    img: "https://i.pinimg.com/736x/40/3c/c7/403cc7e334e56a29fdc93fa6a2ea2546.jpg",
    
    author: "Keerti Naroliya",
    price: 399,
    originalPrice: 699,
    isBestSeller: false,
    category: "Water Color",
    rating: 3.5,
  },
  // Clay art
  {
    _id: uuid(),
    img: "https://paintology.in/wp-content/uploads/2021/07/E-couses-and-acrylic-workshops-psd-copy-760x967.jpg",
    
    author: "Keerti Naroliya",
    price: 399,
    originalPrice: 699,
    isBestSeller: false,
    category: "Water Color",
    rating: 3.5,
  },
  {
    _id: uuid(),
    img: "https://cdn.shopify.com/s/files/1/1744/3435/articles/shutterstock_410271079_1024x1024.jpg?v=1624398205",
    
    author: "Keerti Naroliya",
    price: 399,
    originalPrice: 699,
    isBestSeller: false,
    category: "Water Color",
    rating: 3.5,
  },
  {
    _id: uuid(),
    img: "https://s3.ap-southeast-1.amazonaws.com/we-xpats.com/uploads/article/en_b_2_header_1.jfif",
    
    author: "Nikhil Naroliya",
    price: 399,
    originalPrice: 699,
    isBestSeller: false,
    category: "Clay art",
    rating: 3.5,
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/510YkTAGB5L._SY550_.jpg",
    
    author: "Nikhil Naroliya",
    price: 399,
    originalPrice: 699,
    isBestSeller: false,
    category: "Clay art",
    rating: 3.5,
  },
  {
    _id: uuid(),
    img: "https://i.pinimg.com/originals/f0/8d/42/f08d4295c09cb278d6143eaf9fd751dc.jpg",
    
    author: "Nikhil Naroliya",
    price: 499,
    originalPrice: 699,
    isBestSeller: false,
    category: "Portrait",
    rating: 4.5,
  },
  
  {
    _id: uuid(),
    img: "https://i.ytimg.com/vi/jQumiNL0de4/maxresdefault.jpg",
    
    author: "Nikhil Naroliya",
    price: 399,
    originalPrice: 699,
    isBestSeller: false,
    category: "Portrait",
    rating: 3.5,
  },
  {
    _id: uuid(),
    img: "https://www.stonedsanta.in/wp-content/uploads/2019/07/Zayn-Malik-Pencil-Portrait-Hyper-Realistic-Portrait-Siddhant-Stoned-Santa.jpg",
    
    author: "Nikhil Naroliya",
    price: 299,
    originalPrice: 699,
    isBestSeller: false,
    category: "Portrait",
    rating: 4.5,
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/static-media/image/upload/q_auto:best,f_auto,e_improve:9/e_vibrance:10/fb-yellow_lab_pencil_portrait_mike_theuer.jpg",
    
    author: "Nikhil Naroliya",
    price: 199,
    originalPrice: 699,
    isBestSeller: false,
    category: "Portrait",
    rating: 4.5,
  },
  {
    _id: uuid(),
    img: "https://i.pinimg.com/550x/8c/15/69/8c15697d1a2ebe7bffa786cf0aa3a271.jpg",
    
    author: "Nikhil Naroliya",
    price: 699,
    originalPrice: 699,
    isBestSeller: false,
    category: "Portrait",
    rating: 4.5,
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
