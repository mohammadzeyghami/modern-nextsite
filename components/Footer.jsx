"use client";
import { motion } from "framer-motion";
import { socials } from "../constants";
import Image from "next/image";
import { headset } from "../public";

import styles from "../styles";
import { footerVariants } from "../utils/motion";
const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings}py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-[white]">
          Enter The Meraverse
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
        >
          <Image
            src={headset}
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px]">Enter The Metaverse</span>
          <div className="flex flex-col">
            <div className="mb-[50px] h-[2px] bg-white opacity-10"></div>
          </div>
        </button>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
