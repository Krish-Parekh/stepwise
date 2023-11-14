import { Search, ShoppingCart, User2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4">
      <h1 className="text-2xl font-bold">LOGO.</h1>
      <ul className="flex cursor-pointer gap-x-8">
        <li>New Arrival</li>
        <li>Men</li>
        <li>Women</li>
      </ul>
      <div className="flex cursor-pointer gap-x-8">
        <Search />
        <User2 />
        <ShoppingCart />
      </div>
    </nav>
  );
}
