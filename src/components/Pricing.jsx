import PricingList from "./PricingList";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import Section from "./Section";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative"
            alt="Sphere"
            width={255}
            height={255}
          />
          <div
            className="absolute top-1.2 left-1/2 w-[60rem] -translate-x-1/2
          -translate-y-1/2 pointer-events-none"
          >
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="stars"
            />
          </div>
        </div>
        <Heading
          tag="Get started with BrainSynth"
          title="Pay Once, Use Whatever You Need"
        />
        <div className="relative">
          <LeftLine />
          <PricingList />
          <RightLine />

          <div className="flex justify-center mt-10">
            <a className="tracking-widest uppercase font-bold font-code text-xs border-b"href="/pricing">See the full details</a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
