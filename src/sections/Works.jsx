import { motion } from 'framer-motion';
import SectionWrapper from '../hoc/SectionWrapper';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => (
  <motion.div variants={fadeIn('up', 'spring', index * 0.3, 0.75)} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full" whileHover={{ y: -6, rotateX: 3 }}>
    <div className="relative w-full h-[230px] rounded-2xl bg-black-200 flex items-center justify-center text-7xl">
      {image}
      <a
        href={source_code_link}
        className="absolute inset-0 flex justify-end m-3"
        aria-label={`${name} source`}
      >
        <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center text-white">↗</div>
      </a>
    </div>

    <div className="mt-5">
      <h3 className="text-white font-bold text-[24px]">{name}</h3>
      <p className="mt-2 text-secondary text-[14px]">{description}</p>
    </div>

    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <p key={`${name}-${tag}`} className="text-[14px] text-blue-400">#{tag}</p>
      ))}
    </div>
  </motion.div>
);

const Works = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className="text-secondary uppercase tracking-wider">My work</p>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects.</h2>
    </motion.div>

    <div className="w-full flex">
      <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
        These projects use static content and mirror the interaction pattern of the original portfolio.
      </motion.p>
    </div>

    <div className="mt-20 flex flex-wrap gap-7">
      {projects.map((project, index) => (
        <ProjectCard key={`project-${project.name}`} index={index} {...project} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Works, 'work');
