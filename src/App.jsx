import { About, Contact, Experience, Hero, Tech, Works } from './sections';
import { Navbar } from './components';

const App = () => (
  <div className="relative z-0 bg-primary">
    <div className="bg-hero-gradient bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
    <div className="relative z-0">
      <Contact />
    </div>
  </div>
);

export default App;
