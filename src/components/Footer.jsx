
import { socials } from '../constants';
import Section from './Section';

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className='text-n-4 lg:block'>
          &copy; {new Date().getFullYear()}.
          &nbsp; All rights reserved.
        </p>
        <ul className='flex gap-5 flex-wrap'>
            {socials.map((item) => (
                <a href={item.url} key={item.id} target='_blank' 
                className='flex items-center justify-center transition-colors w-10 h-10 rounded-full bg-n-7 hover:bg-n-6 duration-10'>
                    <img 
                        src={item.iconUrl} 
                        alt={item.title} 
                        width={16}
                        height={16}
                    />
                </a>
            ))}
        </ul>
      </div>
    </Section>
  );
}

export default Footer
