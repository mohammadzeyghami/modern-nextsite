"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Image from "next/image";
import { arrow } from "../public";
const InsightCard = ({ imgUrl, title, index, subtitle }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex flex-col md:flex-row  gap-4"
  >
    <Image
      src={imgUrl}
      alt="planet01"
      className="md:w-[270px] w-full h-[270px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-secondary-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>
      <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-[white]">
        <Image
          src={arrow}
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
