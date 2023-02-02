"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { headset } from "../public";

import styles from "../styles";
import { fadeIn } from "../utils/motion";
const ExploreCard = ({ id, imgUrl, title, index, active, handelClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
  >
    <Image
      src={imgUrl}
      alt=""
      className="absolute w-full h-full object-cover rounded-[20px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounderd-b-[24px]">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <Image src={headset} className="w-1/2 h-1/2 object-contain mx-auto" />
        </div>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
