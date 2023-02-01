"use client";
import { menu, search } from "../public/";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings}relative py-8 `}
  >
    <div className="absolute w-[50%] inset-0 gradient-03" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <Image
        src={search}
        width={24}
        height={24}
        alt="search"
        className="object-contain"
      />
      <h2 className="font-extrabold text-[24px] leading-[30px] text-[white]">
        Metaversus
      </h2>
      <Image
        src={menu}
        width={24}
        height={24}
        className="object-contain cursor-pointer"
      />
    </div>
  </motion.nav>
);

export default Navbar;
