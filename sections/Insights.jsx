"use client";
import styles from "../styles";
import Image from "next/image";
import { motion } from "framer-motion";
import { insights } from "../constants";
import { InsightCard, TypingText, TitleText } from "../components";
import { staggerContainer } from "../utils/motion";
const Insights = () => (
  <section>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col `}
    >
      <TypingText title="Insight" styleText="text-center" />
      <TitleText title="insight about metaverse" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard
            key={`insight-${index}`}
            {...insight}
            index={index + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
