'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const ComingSoon = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| Upcoming Updates" textStyles="text-center" />
      <TitleText
        title={(
          <>We soon going to start our SEED ROUND Allocations so load your wallets with BUSD.</>
        )}
        textStyles="text-center"
      />
    </motion.div>
  </section>
);

export default ComingSoon;
