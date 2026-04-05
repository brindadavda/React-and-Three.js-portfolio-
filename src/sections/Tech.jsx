import { motion } from 'framer-motion';
import SectionWrapper from '../hoc/SectionWrapper';
import { technologies } from '../constants';

const Tech = () => (
  <div className="flex flex-row flex-wrap justify-center gap-10">
    {technologies.map((technology, index) => (
      <motion.div
        key={technology.name}
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1, duration: 0.4 }}
        whileHover={{ y: -8, rotate: 4 }}
        className="w-28 h-28 rounded-full bg-black-200 border border-white/10 flex items-center justify-center text-4xl"
      >
        <span title={technology.name}>{technology.icon}</span>
      </motion.div>
    ))}
  </div>
);

export default SectionWrapper(Tech, 'tech');
