export const contact = {
  phone: "8826022705",
  phoneDisplay: "88260 22705",
  email: "polestarspices@gmail.com",
  address: "Bawana Industrial Area, Delhi-110039",
};

export const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about-us" },
  { label: "PRODUCTS", href: "/product" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT US", href: "/contact-us" },
];

export const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "Youtube", href: "#" },
];

const pouch = "In Pouch Packing 25g, 50g, 200g, 500g";
const box = "In Box Packing 50g, 100g";

// Full catalogue, in the order shown on /product.
export const products = [
  { name: "Turmeric Powder", image: "SPICES_page-0007.webp", available: pouch },
  { name: "Red Chilli Powder", image: "SPICES_page-0004-1.webp", available: pouch },
  { name: "Coriander Powder", image: "SPICES_page-0001.webp", available: pouch },
  {
    name: "Garam Masala",
    image: "SPICES_page-0008-1.webp",
    price: "₹5",
    available: "In Pouch Packing 25g, 50g, 100g, 200g, 500g",
  },
  { name: "Meat Masala", image: "SPICES_page-0009.webp", price: "₹5", available: pouch },
  { name: "Chicken Masala", image: "SPICES_page-0006-1.webp", price: "₹5", available: pouch },
  { name: "Cumin Powder", image: "SPICES_page-0002.webp", available: pouch },
  { name: "Mutter Paneer Masala", image: "SPICES_page-0003.webp", price: "₹5", available: pouch },
  { name: "Sabji Masala", image: "SPICES_page-0005.webp", available: "In Pouch Packing 50g, 100g" },
  { name: "Red Chilli Powder", image: "SPICES_page-0022-1.webp", available: box },
  { name: "Garam Masala", image: "SPICES_page-0019.webp", available: box },
  { name: "Meat Masala", image: "SPICES_page-0023-1.webp", available: box },
  { name: "Cumin Powder", image: "SPICES_page-0030.webp", available: box },
  { name: "Shahi Biryani Masala", image: "SPICES_page-0021.webp", available: box },
  { name: "Chhole Masala", image: "SPICES_page-0028.webp", available: box },
  { name: "Kitchen King Masala", image: "SPICES_page-0031.webp", available: box },
  { name: "Fish Masala", image: "SPICES_page-0034.webp", available: box },
  { name: "Dal Makhani Masala", image: "SPICES_page-0035.webp", available: box },
  { name: "Sabji Masala", image: "SPICES_page-0010.webp", available: box },
  { name: "Mustard Powder", image: "SPICES_page-0011.webp", available: box },
  { name: "Black Pepper Powder", image: "SPICES_page-0012.webp", available: box },
  { name: "Jaljeera Powder", image: "SPICES_page-0013.webp", available: box },
  { name: "Dry Mango Powder", image: "SPICES_page-0015.webp", available: box },
  { name: "Sambar Masala", image: "SPICES_page-0014.webp", available: box },
  { name: "Shahi Paneer Masala", image: "SPICES_page-0026.webp", available: box },
  { name: "Mutter Paneer Masala", image: "SPICES_page-0027.webp", available: box },
  { name: "Rajma Masala", image: "SPICES_page-0032.webp", available: box },
  { name: "Kasoori Methi", image: "SPICES_page-0033.webp", available: "In Box Packing 25g, 50g" },
  { name: "Pani Puri Masala", image: "SPICES_page-0016.webp", available: box },
  { name: "Kashmiri Mirch Powder", image: "SPICES_page-0020.webp", available: box },
  { name: "Pav Bhaji Masala", image: "SPICES_page-0017.webp", available: box },
  { name: "Chat Masala", image: "SPICES_page-0029.webp", available: box },
];

const homeProductImages = [
  "SPICES_page-0007.webp",
  "SPICES_page-0004-1.webp",
  "SPICES_page-0001.webp",
  "SPICES_page-0008-1.webp",
  "SPICES_page-0009.webp",
  "SPICES_page-0006-1.webp",
  "SPICES_page-0002.webp",
  "SPICES_page-0003.webp",
  "SPICES_page-0022-1.webp",
  "SPICES_page-0019.webp",
  "SPICES_page-0023-1.webp",
  "SPICES_page-0030.webp",
  "SPICES_page-0011.webp",
  "SPICES_page-0035.webp",
  "SPICES_page-0027.webp",
  "SPICES_page-0012.webp",
];

// The 16 products featured on the home page.
export const homeProducts = homeProductImages.map((image) =>
  products.find((p) => p.image === image),
);

export const footerProducts = [
  "Red Chilli Powder",
  "Sabji Masala",
  "Meat Masala",
  "Coriander Powder",
  "Chicken Masala",
];
