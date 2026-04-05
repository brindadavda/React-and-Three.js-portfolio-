import { motion } from 'framer-motion';
import SectionWrapper from '../hoc/SectionWrapper';
import { experiences } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const Experience = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className="text-secondary uppercase tracking-wider">What I have done so far</p>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Work Experience.</h2>
    </motion.div>

    <div className="mt-10 flex flex-col gap-8">
      {experiences.map((experience, index) => (
        <motion.div
          key={experience.title}
          variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
          className="bg-black-100 p-6 rounded-2xl border border-white/10"
        >
          <h3 className="text-white text-2xl font-bold">{experience.title}</h3>
          <p className="text-secondary text-sm mt-1">{experience.company_name} · {experience.date}</p>
          <ul className="mt-4 list-disc ml-5 space-y-2">
            {experience.points.map((point) => (
              <li key={point} className="text-white-100 text-[14px] pl-1">{point}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </>
);

export default SectionWrapper(Experience, 'experience');
