import Section from "./Section";
import Heading from "./design/Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div id="container">
        <Heading
          title="Generative AI made for creators"
          text="BrainSynth unlocks the potential  of AI-powered applications"
        />

        <div className="relative">
          <div
            className="relative z-1 flex items-center h-[39rem]
                mb-5 p-8 border border-n-1/10 overflow-hidden
                lg:p-20 xl:h-[46rem]"
          >
            <div
              className="absolute top-0 left-0 w-full h-full pointer-events-none
                    md:w-3/5 xl:w-auto"
            >
              <img
                src={service1}
                className="w-full h-full object-cover
                        md:object-right"
                width={800}
                height={730}
                alt="smartest AI"
              />
            </div>
            <div
              className="relative z-1 max-w-[17rem]
                    ml-auto"
            >
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                BrainSynth unlocks the potential of AI-powered creativity
              </p>
              <ul className="body-2 space-y-3">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img src={check} width={24} height={24} alt="Check" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating
              className="absolute left-4 right-4 bottom-4 border-n-1/10 border
                lg:left-[12rem] lg:right-auto lg:bottom-8 lg:transform-x-1/2"
            />
          </div>

          
        </div>
      </div>
    </Section>
  );
};

export default Services;
