import { contact } from "../data";
import ContactForm from "../components/ContactForm";
import PageBanner from "../components/PageBanner";
import { MailIcon, MapIcon, PhoneIcon } from "../components/Icons";

export const metadata = {
  title: "Contact Us – psmspices.com",
};

const details = [
  { Icon: MapIcon, text: contact.address },
  { Icon: PhoneIcon, text: contact.phoneDisplay, href: `tel:${contact.phone}` },
  { Icon: MailIcon, text: contact.email, href: `mailto:${contact.email}` },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" image="/images/banner-contact.webp" />

      <section className="mx-auto grid min-h-[400px] max-w-[1140px] grid-cols-1 gap-12 px-[20px] py-[60px] md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-[30px] font-bold text-heading md:text-[35px]">Contact with us</h2>
          <p className="mb-8 leading-[1.65]">
            We will get back to you as soon as possible. Your satisfaction is our priority.
          </p>
          <ul className="space-y-4">
            {details.map(({ Icon, text, href }) => (
              <li key={text} className="flex items-center gap-3 text-[18px] font-medium text-heading md:text-[21px]">
                <Icon className="h-6 w-6 shrink-0 text-brand" />
                {href ? (
                  <a href={href} className="hover:text-brand">
                    {text}
                  </a>
                ) : (
                  <span>{text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </section>
    </>
  );
}
