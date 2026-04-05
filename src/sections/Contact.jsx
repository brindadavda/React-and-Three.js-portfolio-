import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc/SectionWrapper';
import { slideIn } from '../utils/sectionMotion';
import { EarthCanvas } from '../canvas';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className="text-secondary uppercase tracking-wider">Get in touch</p>
        <h3 className="text-white font-black text-[40px]">Contact.</h3>

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          {['name', 'email', 'message'].map((field) => (
            <label key={field} className="flex flex-col">
              <span className="text-white font-medium mb-4 capitalize">{field}</span>
              {field === 'message' ? (
                <textarea
                  rows={7}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  placeholder={`What's your ${field}?`}
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              ) : (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  placeholder={`What's your ${field}?`}
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              )}
            </label>
          ))}
          <button type="submit" className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
            Send
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
