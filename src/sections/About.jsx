import { motion } from 'framer-motion';
import SectionWrapper from '../hoc/SectionWrapper';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn('right', 'spring', 0.2 * index, 0.75)}
    className="xs:w-[250px] w-full"
    whileHover={{ rotateX: 8, rotateY: -8, scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
  >
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div className="bg-tertiary rounded-[20px] py-10 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <span className="text-6xl">{icon}</span>
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </div>
  </motion.div>
);

const About = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className="text-secondary uppercase tracking-wider">Introduction</p>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn('', '', 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      This portfolio mirrors the original React + Three.js layout while using static local data only.
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>
);

export default SectionWrapper(About, 'about');
