import { Search, ShoppingCart, User2 } from "lucide-react";
import Link from "next/link";

const menuItems = [
  {
    id: 1,
    name: "New Arrival",
    link: "/category/new-arrival",
  },
  {
    id: 2,
    name: "Men",
    link: "/category/men",
  },
  {
    id: 3,
    name: "Women",
    link: "/category/women",
  },
];
export default function Navbar() {
  return (
    <nav className="flex justify-between p-4">
      <Link href="/">
        <h1 className="text-2xl font-bold">LOGO.</h1>
      </Link>
      <div className="flex cursor-pointer gap-x-8">
        {menuItems.map((item) => (
          <Link key={item.id} href={item.link}>
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex cursor-pointer gap-x-8">
        <Search />
        <User2 />
        <ShoppingCart />
      </div>
    </nav>
  );
}
