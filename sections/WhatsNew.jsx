"use client";
import styles from "../styles";
import { whatsNew } from "../public";
import Image from "next/image";
import { motion } from "framer-motion";
import { newFeatures } from "../constants/index";
import { TypingText, TitleText, StartSteps, NewFeatures } from "../components";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";

const WhatsNew = () => (
  <section>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row gap-8`}
    >
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="Whats New?" />
        <TitleText title={<>ٌWhats's new about Metaversus</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature, index) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <Image
          src={whatsNew}
          alt="getStarted"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
