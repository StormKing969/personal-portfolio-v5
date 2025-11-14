import { useState } from "react";
import { NavLinks } from "../../constants";
import { AnimatePresence, motion } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section
      className={"fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40"}
    >
      <div className={"mx-auto c-space max-w-7xl"}>
        <div className={"flex items-center justify-between py-2 sm:py-0"}>
          <a
            href={"/"}
            className={
              "italic text-xl font-bold transition-colors text-neutral-400 hover:text-white"
            }
          >
            Sajana W
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={
              "flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            }
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt={"toggle menu"}
              className={"w-6 h-6"}
            />
          </button>
          <nav className={"hidden sm:flex items-center justify-center"}>
            <ul className={"nav-ul"}>
              {NavLinks.map(
                (
                  { title, link }: { title: string; link: string },
                  index: number,
                ) => (
                  <li key={index} className={"nav-li"}>
                    <a className={"nav-link"} href={link}>
                      {title}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={"block overflow-hidden text-center sm:hidden"}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ maxHeight: "100vh" }}
            transition={{ duration: 1 }}
          >
            <nav className={"pb-5"}>
              {NavLinks.map(
                (
                  { title, link }: { title: string; link: string },
                  index: number,
                ) => (
                  <li key={index} className={"nav-li"}>
                    <a
                      className={"nav-link"}
                      href={link}
                      onClick={() => setIsOpen(false)}
                    >
                      {title}
                    </a>
                  </li>
                ),
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Navbar;