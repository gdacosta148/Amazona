import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "ASUS M515DA",
      slug: "ASUS-M515DA",
      category: "LAPTOPS",
      image: "/images/ASUSM515DA.jpg",
      price: 75,
      brand: "ASUS",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular LAPTOP",
    },

    {
      name: "ACER 508X",
      slug: "ACER-508X",
      category: "LAPTOPS",
      image: "/images/ACER508X.jpg",
      price: 75,
      brand: "ACER",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular LAPTOP",
    },

    {
      name: "asus tuf dash fx516",
      slug: "asus-tuf-dash-fx516",
      category: "LAPTOPS",
      image: "/images/asustufdashfx516.jpg",
      price: 75,
      brand: "ASUS",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular LAPTOP",
    },

    {
      name: "ASUS Vivo AiO V222",
      slug: "ASUS-Vivo-AiO-V222",
      category: "Computers",
      image: "/images/ASUSVivoAiOV222.jpg",
      price: 75,
      brand: "ASUS",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular LAPTOP",
    },

    {
      name: "HP PAVILION ec1037",
      slug: "HP-PAVILION-ec1037",
      category: "LAPTOPS",
      image: "/images/HPPAVILIONec1037.jpg",
      price: 75,
      brand: "HP",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular LAPTOP",
    },

    {
      name: "SAMSUNG Galaxy A03s",
      slug: "SAMSUNG-Galaxy-A03s",
      category: "SmartPhones",
      image: "/images/SAMSUNGGalaxyA03s.jpg",
      price: 75,
      brand: "SAMSUNG",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular SmartPhone",
    },

    {
      name: "SAMSUNG Galaxy A32",
      slug: "SAMSUNG-Galaxy-A32",
      category: "SAMSUNG",
      image: "/images/ASUSM515DA.jpg",
      price: 75,
      brand: "ASUS",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular SmartPhone",
    },
  ],
};
export default data;
