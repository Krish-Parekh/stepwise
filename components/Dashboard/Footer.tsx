import Link from "next/link";

const footerItems = [
  {
    id: 1,
    header: "Navigation",
    links: [
      {
        id: 11,
        name: "Home",
        link: "/",
      },
      {
        id: 12,
        name: "New Arrival",
        link: "/category/new-arrival",
      },
      {
        id: 13,
        name: "Men",
        link: "/category/men",
      },
      {
        id: 14,
        name: "Women",
        link: "/category/women",
      },
    ],
  },
  {
    id: 2,
    header: "Categories",
    links: [
      {
        id: 21,
        name: "Casual Shoes",
        link: "/casual-shoes",
      },
      {
        id: 22,
        name: "Sport Shoes",
        link: "/sport-shoes",
      },
      {
        id: 23,
        name: "Sneaker",
        link: "/sneaker",
      },
    ],
  },
  {
    id: 3,
    header: "Legal",
    links: [
      {
        id: 31,
        name: "Terms and Condition",
        link: "/terms-and-condition",
      },
      {
        id: 32,
        name: "Privacy Policy",
        link: "/privacy-policy",
      },
      {
        id: 33,
        name: "Shipping and Returns",
        link: "/shipping-and-returns",
      },
    ],
  },
];
export default function Footer() {
  return (
    <footer className="flex justify-between bg-black p-20 text-white">
      <div>
        <h1 className="text-2xl font-bold">LOGO.</h1>
        <span>
          Step into style, crafted for comfort. <br />
          Every step, a statement.
        </span>
      </div>
      <div className="flex gap-x-20">
        {footerItems.map((footerItem) => (
          <ul key={footerItem.id} className="cursor-pointer space-y-6">
            <li className="font-semibold text-white">{footerItem.header}</li>
            {footerItem.links.map((link) => (
              <li key={link.id}>
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </footer>
  );
}
