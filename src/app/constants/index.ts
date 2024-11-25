export const navItems = [
  { to: "/user", label: "Home" },
  { to: "/user/products", label: "Products" },
  { to: "/user/feedback", label: "Feedback" },
  { to: "/user/myorders", label: "My Orders" },
];

export const categories = [
  {
    id: 1,
    name: "Meals",
    icon: "ri-restaurant-2-line",
    color: "bg-emerald-500",
    gradient: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    id: 2,
    name: "Snacks",
    icon: "ri-seedling-line",
    color: "bg-orange-400",
    gradient: "from-orange-400/20 to-orange-400/5",
  },
  {
    id: 3,
    name: "Protein",
    icon: "ri-heart-pulse-line",
    color: "bg-blue-500",
    gradient: "from-blue-500/20 to-blue-500/5",
  },
  {
    id: 4,
    name: "Organic",
    icon: "ri-leaf-line",
    color: "bg-green-500",
    gradient: "from-green-500/20 to-green-500/5",
  },
  {
    id: 5,
    name: "Diet",
    icon: "ri-scales-3-line",
    color: "bg-purple-500",
    gradient: "from-purple-500/20 to-purple-500/5",
  },
  {
    id: 6,
    name: "Drinks",
    icon: "ri-cup-line",
    color: "bg-red-400",
    gradient: "from-red-400/20 to-red-400/5",
  },
];

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Butter Chicken",
    category: "Meals",
    price: 399,
    image: "/butter-chicken.jpg",
    description: "Creamy, rich butter chicken with naan bread and rice",
  },
  {
    id: 2,
    name: "Paneer Tikka",
    category: "Protein",
    price: 299,
    image: "/paneer-tikka.jpg",
    description: "Grilled cottage cheese marinated in Indian spices",
  },
  {
    id: 3,
    name: "Masala Lassi",
    category: "Drinks",
    price: 129,
    image: "/lassi.jpg",
    description: "Traditional yogurt-based drink with Indian spices",
  },
  {
    id: 4,
    name: "Thali Special",
    category: "Diet",
    price: 449,
    image: "/thali.jpg",
    description: "Complete Indian meal with roti, dal, sabzi and rice",
  },
  {
    id: 5,
    name: "Puff",
    category: "Snacks",
    price: 20,
    image: "/puff.jpg",
    description: "Flaky pastry filled with spiced vegetables or eggs",
  },
  {
    id: 6,
    name: "Fresh Samosa",
    category: "Organic",
    price: 149,
    image: "/samosa.jpg",
    description: "Crispy pastry filled with spiced potatoes and peas",
  },
];

interface Testimonial {
  id: string;
  name: string;
  message: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    message:
      "The quality and taste of their products exceeded my expectations. Truly a game-changer for healthy eating!",
    rating: 5,
  },
  {
    id: "2",
    name: "Priya Patel",
    message:
      "I recommend these products to all my clients. Perfect balance of nutrition and convenience.",
    rating: 4,
  },
  {
    id: "3",
    name: "Amit Sharma",
    message:
      "These healthy packed foods have made maintaining a balanced diet so much easier in my hectic schedule.",
    rating: 5,
  },
  {
    id: "4",
    name: "Meera Reddy",
    message:
      "Great variety of healthy options. The convenience of these products has helped me stick to my fitness goals.",
    rating: 5,
  },
  {
    id: "5",
    name: "Arjun Malhotra",
    message:
      "The authentic Indian flavors remind me of home-cooked meals. Absolutely love the quality!",
    rating: 5,
  },
];

export const socialLinks = [
  {
    icon: "ri-instagram-line",
    url: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: "ri-facebook-circle-line",
    url: "https://facebook.com",
    label: "Facebook",
  },
  { icon: "ri-twitter-line", url: "https://twitter.com", label: "Twitter" },
  { icon: "ri-youtube-line", url: "https://youtube.com", label: "YouTube" },
];

export const quickLinks = [
  { name: "Home", url: "/user" },
  { name: "Products", url: "/user/products" },
  { name: "Feedback", url: "/user/feedback" },
  { name: "My Orders", url: "/user/myorders" },
];

interface Order {
  id: string;
  date: string;
  status: string;
  item: {
    name: string;
    quantity: number;
    price: number;
  };
  total: number;
}

export const orders: Order[] = [
  {
    id: "ORD001",
    date: "2024-01-15",
    status: "Delivered",
    item: {
      name: "Butter Chicken",
      quantity: 5,
      price: 349,
    },
    total: 1745,
  },
  {
    id: "ORD002",
    date: "2024-01-14",
    status: "Processing",
    item: {
      name: "Thali Special",
      quantity: 2,
      price: 449,
    },
    total: 898,
  },
];

export const sidebarItems = [
  {
    id: 1,
    icon: "ri-dashboard-line",
    label: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    id: 2,
    icon: "ri-shopping-bag-line",
    label: "Products",
    href: "/admin/products",
  },
  {
    id: 3,
    icon: "ri-shopping-bag-3-line",
    label: "Manage Products",
    href: "/admin/viewproduct",
  },
  {
    id: 4,
    icon: "ri-user-line",
    label: "Users",
    href: "/admin/users",
  },
  {
    id: 5,
    icon: "ri-shopping-cart-line",
    label: "Orders",
    href: "/admin/orders",
  },
  {
    id: 6,
    icon: "ri-message-3-line",
    label: "Feedback",
    href: "/admin/feedback",
  },
  {
    id: 7,
    icon: "ri-logout-box-line",
    label: "Logout",
    href: "/auth/login",
  },
];

export   const dashboardStats = [
  {
    title: "Registered Customers",
    icon: "ri-user-line",
    value: "5",
  },
  {
    title: "Products Added", 
    icon: "ri-shopping-bag-line",
    value: "0",
  },
  {
    title: "Orders Placed",
    icon: "ri-shopping-cart-line", 
    value: "20",
  },
  {
    title: "Feedback Received",
    icon: "ri-message-3-line",
    value: "10", 
   
  }
];

export const registeredUsers = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul.sharma@gmail.com",
    phone: "9876543210",
    joinedDate: "2023-10-15"
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya.patel@outlook.com", 
    phone: "8765432109",
    joinedDate: "2023-11-02"
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amit.kumar@yahoo.com",
    phone: "7654321098",
    joinedDate: "2023-11-25"
  },
  {
    id: 4,
    name: "Neha Singh",
    email: "neha.singh@gmail.com",
    phone: "6543210987",
    joinedDate: "2023-12-10"
  },
  {
    id: 5,
    name: "Arun Verma",
    email: "arun.verma@hotmail.com",
    phone: "5432109876",
    joinedDate: "2024-01-05"
  }
];
