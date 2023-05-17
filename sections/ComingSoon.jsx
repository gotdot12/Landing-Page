'use client';


import styles from '../styles';
import { TitleText, TypingText } from '../components';

const ComingSoon = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div>
      <TypingText title="| Upcoming Updates" textStyles="text-center" />
      <TitleText
        title={(
          <>We soon going to start our SEED ROUND Allocations so load your wallets with BUSD.</>
        )}
        textStyles="text-center"
      />
    </div>
  </section>
);

export default ComingSoon;
