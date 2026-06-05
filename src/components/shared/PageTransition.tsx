import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

export default function PageTransition({ children }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
      }}
    >
      {children}
    </motion.div>
  );
}
