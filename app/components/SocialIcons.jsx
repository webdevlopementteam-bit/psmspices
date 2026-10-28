import { socialLinks } from "../data";
import { FacebookIcon, TwitterIcon, YoutubeIcon } from "./Icons";

const icons = { Facebook: FacebookIcon, Twitter: TwitterIcon, Youtube: YoutubeIcon };

export default function SocialIcons({ small = false, className = "" }) {
  const box = small ? "h-[30px] w-[30px]" : "h-[44px] w-[44px]";
  const icon = small ? "h-[15px] w-[15px]" : "h-[22px] w-[22px]";
  return (
    <div className={`flex gap-[5px] ${className}`}>
      {socialLinks.map(({ name, href }) => {
        const Icon = icons[name];
        return (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className={`flex ${box} items-center justify-center rounded-full bg-white text-brand transition-opacity hover:opacity-90`}
          >
            <Icon className={icon} />
          </a>
        );
      })}
    </div>
  );
}
