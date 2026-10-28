import Link from "next/link";
import { contact, footerProducts } from "../data";
import SocialIcons from "./SocialIcons";
import { ChevronIcon, MailIcon, MapIcon, PhoneIcon } from "./Icons";

const supportLinks = [
  { label: "Contact us", href: "/contact-us" },
  { label: "About us", href: "/about-us" },
  { label: "Refunds", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Deliveries", href: "#" },
];

function LinkList({ items }) {
  return (
    <ul className="space-y-[7px]">
      {items.map(({ label, href }) => (
        <li key={label}>
          <Link href={href} className="flex items-center gap-[6px] text-white hover:opacity-80">
            <ChevronIcon className="h-[14px] w-[14px] shrink-0" />
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const contactItems = [
    { Icon: MapIcon, text: contact.address },
    { Icon: PhoneIcon, text: contact.phoneDisplay, href: `tel:${contact.phone}` },
    { Icon: MailIcon, text: contact.email, href: `mailto:${contact.email}` },
  ];

  return (
    <footer>
      <section
        className="relative bg-cover bg-center px-0 md:px-[50px]"
        style={{ backgroundImage: "url(/images/footer-bg.webp)" }}
      >
        <div className="absolute inset-0 bg-brand opacity-[0.97]" />
        <div className="relative mx-auto grid min-h-[400px] max-w-[1290px] grid-cols-1 content-center gap-8 px-[10px] py-14 text-white sm:grid-cols-2 lg:grid-cols-4">
          <div className="px-[10px]">
            <h3 className="mb-5 text-[25px] font-bold">About Us</h3>
            <p className="mb-5 leading-[1.65]">
              In India, the concept of taste is deeply intertwined with the richness of spices. As
              one of the oldest civilizations, India was among the pioneers in unlocking the
              medicinal properties of spices.
            </p>
            <SocialIcons />
          </div>

          <div className="px-[10px]">
            <h3 className="mb-5 text-[25px] font-bold">Support</h3>
            <LinkList items={supportLinks} />
          </div>

          <div className="px-[10px]">
            <h3 className="mb-5 text-[25px] font-bold">Products</h3>
            <LinkList items={footerProducts.map((label) => ({ label, href: "/product" }))} />
          </div>

          <div className="px-[10px]">
            <h3 className="mb-5 text-[25px] font-bold">Contact Us</h3>
            <ul className="space-y-[11px]">
              {contactItems.map(({ Icon, text, href }) => (
                <li key={text} className="flex items-start gap-[5px]">
                  <Icon className="mt-[3px] h-[20px] w-[20px] shrink-0" />
                  {href ? (
                    <a href={href} className="hover:opacity-80">
                      {text}
                    </a>
                  ) : (
                    <span>{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#662900] px-[10px] py-[15px] text-center text-white">
        <p>
          Copyright © 2024 PSM Spices Pvt. Ltd. | Powered by{" "}
          <a href="https://www.cybertricksmedia.com/" className="hover:underline">
            Bharat Bizmart
          </a>
        </p>
      </section>
    </footer>
  );
}
