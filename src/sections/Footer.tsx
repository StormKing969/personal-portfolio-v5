import { SocialLinks } from "../../constants";
import type { SocialType } from "../../types";

const Footer = () => {
  return (
    <section
      className={
        "flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space"
      }
    >
      <div
        className={
          "mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-px w-full"
        }
      />

      <div className={"flex gap-2"}>
        <p>Terms & Conditions</p>
        <p> | </p>
        <p>Privacy Policy</p>
      </div>

      <div className={"flex gap-3"}>
        {SocialLinks.map(
          ({ href, iconUrl, name }: SocialType, index: number) => (
            <a href={href} key={index}>
              <img src={iconUrl} alt={name} className={"w-5 h-5"} />
            </a>
          ),
        )}
      </div>
      <p>&copy; 2025 Sajana Wijesinghe. All rights reserved.</p>
    </section>
  );
};

export default Footer;