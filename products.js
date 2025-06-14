// data/products.js
const products = [
  {
    id: 1,
    name: "Reusable Water Bottle",
    price: 15,
    stock: 10,
    image: "https://images.unsplash.com/photo-1623684194967-48075185a58c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Eco-friendly, BPA-free bottle.",
  },
  {
    id: 2,
    name: "Bamboo Toothbrush",
    price: 3,
    stock: 10,
    image: "https://images.unsplash.com/photo-1592372554345-22ced975691d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmFtYm9vJTIwVG9vdGhicnVzaHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Biodegradable bamboo toothbrush.",
  },
  {
    id: 3,
    name: "Organic Cotton Tote",
    price: 12,
    stock: 10,
    image: "https://media.istockphoto.com/id/1148884819/photo/woman-is-holding-bag-canvas-fabric-for-mockup-blank-template.webp?a=1&b=1&s=612x612&w=0&k=20&c=itYXJ2xKoXFW_5YEPRcCyeRntVxlu3e7I2JhMGUazbI=",
    description: "Reusable organic cotton shopping bag.",
  },
  {
    id: 4,
    name: "Beeswax Food Wraps",
    price: 10,
    stock: 10,
    image: "https://images.unsplash.com/photo-1669490883681-2378be12bb29?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMHdyYXAlMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Sustainable alternative to plastic wrap.",
  },
  {
    id: 5,
    name: "Stainless Steel Straw Set",
    price: 8,
    stock: 10,
    image: "https://images.unsplash.com/photo-1554327075-31266866daa7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RlZWwlMjBzdHJhd3xlbnwwfHwwfHx8MA%3D%3D",
    description: "Reusable straws with cleaning brush.",
  },
  {
    id: 6,
    name: "Compostable Phone Case",
    price: 20,
    stock: 10,
    image: "https://images.unsplash.com/photo-1623393945964-8f5d573f9358?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmUlMjBjYXNlfGVufDB8fDB8fHww",
    description: "Biodegradable phone protection.",
  },
  {
    id: 7,
    name: "Recycled Paper Notebook",
    price: 7,
    stock: 10,
    image: "https://images.unsplash.com/photo-1668894333452-d1c98b8c8913?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFwZXIlMjBub3RlYm9va3xlbnwwfHwwfHx8MA%3D%3D",
    description: "Notebook made from 100% recycled paper.",
  },
  {
    id: 8,
    name: "Solar Powered Charger",
    price: 45,
    stock: 10,
    image: "https://images.unsplash.com/photo-1585995603413-eb35b5f4a50b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG93ZXIlMjBiYW5rfGVufDB8fDB8fHww",
    description: "Charge your devices sustainably.",
  },
  {
    id: 9,
    name: "Plant-Based Soap Bars",
    price: 6,
    stock: 10,
    image: "https://media.istockphoto.com/id/1212680808/photo/natural-green-soap-and-eucalyptus-leaves-on-a-straw-plate-vertical-format-organic.webp?a=1&b=1&s=612x612&w=0&k=20&c=RWqCUGQYr-_B42ZjXzMZFFLspGxF9nmC9T25iJJ9i_o=",
    description: "Handmade, vegan soap bars.",
  },
  {
    id: 10,
    name: "Reusable Produce Bags",
    price: 9,
    stock: 10,
    image: "https://plus.unsplash.com/premium_photo-1672883551967-ab11316526b4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdWFibGUlMjBiYWdzfGVufDB8fDB8fHww",
    description: "Mesh bags for fruits and veggies.",
  },
  {
    id: 11,
    name: "Eco-Friendly Laundry Detergent",
    price: 14,
    stock: 10,
    image: "https://images.unsplash.com/photo-1624372635310-01d078c05dd9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGF1bmRyeSUyMERldGVyZ2VudHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Biodegradable and safe for the planet.",
  },
  {
    id: 12,
    name: "Bamboo Cutlery Set",
    price: 11,
    stock: 10,
    image: "https://images.unsplash.com/photo-1556037867-bc64ed32b2af?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmFtYm9vJTIwQ3V0bGVyeSUyMFNldHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Portable, reusable bamboo utensils.",
  },
  {
    id: 13,
    name: "Organic Cotton Face Mask",
    price: 5,
    stock: 10,
    image: "https://media.istockphoto.com/id/892646602/photo/young-beautiful-girl-applying-facial-scrub-mask-on-skin.webp?a=1&b=1&s=612x612&w=0&k=20&c=6rrLYQ0TZ6qcrtHApzVFjlNSAff2JxNEoHMSIrNKd0A=",
    description: "Washable, breathable face mask.",
  },
  {
    id: 14,
    name: "Recycled Glass Water Jug",
    price: 25,
    stock: 10,
    image: "https://images.unsplash.com/photo-1690983322317-c0437262f0cb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2xhc3MlMjB3YXRlciUyMGp1Z3xlbnwwfHwwfHx8MA%3D%3D",
    description: "Beautiful jug made from recycled glass.",
  },
  {
    id: 15,
    name: "Compost Bin for Kitchen",
    price: 30,
    stock: 10,
    image: "https://images.unsplash.com/photo-1685969317923-d1e0c8e6b5fd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpbiUyMGZvciUyMGtpdGNoZW58ZW58MHx8MHx8fDA%3D",
    description: "Odor-free compost bin for food scraps.",
  },
];

export default products;
