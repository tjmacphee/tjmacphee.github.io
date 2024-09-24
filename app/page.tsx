"use client";

import { FaLinkedin, FaGithub, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [activeLink, setActiveLink] = useState('#about');

  const handleSetActive = (link) => {
    setActiveLink(link);
    const section = document.querySelector(link);
    if (section) {
      if (section.id === 'about') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    const handleInitialScroll = () => {
      sections.forEach((section) => {
        const { top } = section.getBoundingClientRect();
        if (top >= 0 && top < window.innerHeight / 2) {
          setActiveLink(`#${section.id}`);
        }
      });
    };

    handleInitialScroll();

    window.addEventListener('scroll', handleInitialScroll);
    return () => {
      window.removeEventListener('scroll', handleInitialScroll);
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main className="min-h-screen bg-background-color py-8 flex justify-center">
      <div className="max-w-7xl w-full flex px-4 lg:px-12">
        <aside className="hidden lg:flex flex-col w-2/5 items-start p-8 fixed h-full overflow-y-auto">
          <div className="mb-12">
            <h1 className="text-5xl pb-2 font-bold">Tyler MacPhee</h1>
            <h3 className="text-2xl mb-4">Software Engineer</h3>
            <p className="w-4/5">I build custom software and innovative apps that solve business problems.</p>
          </div>
          <ul className="space-y-6">
            {['about', 'experience', 'projects'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`nav-link ${activeLink === `#${section}` ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleSetActive(`#${section}`); }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <div className="absolute w-full bottom-24">
            <div className="flex justify-left space-x-6 mt-6">
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/tyler-macphee-5392491a7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition text-2xl"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/tjmacphee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition text-2xl"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </aside>
        <div className="flex-1 flex flex-col p-8 ml-auto lg:ml-[40%] overflow-y-auto">
          <header className="lg:hidden mb-12 flex flex-col items-center text-center">
            <div className="mt-6 text-wrap">
              <h1 className="text-5xl pb-2 font-bold">Tyler MacPhee</h1>
              <h3 className="text-2xl mb-4">Software Engineer</h3>
              <p>I build custom software and<br></br>innovative apps that solve business problems.</p>
            </div>
            <div className="flex justify-center space-x-6 mt-6">
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/tyler-macphee-5392491a7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition text-2xl"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/tjmacphee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition text-2xl"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </header>
          <div className="max-w-4xl mx-auto">

            <section id="about" className="mb-24">
              <h2 className="lg:hidden text-2xl font-semibold mb-6">About</h2>
              <div className="">
                <p className="text-lg mb-4">
                  With three years of experience as a software developer, I specialize in full-stack development a wide range of technologies. 
                  My work has primarily focused on digitizing the construction industry, particularly within the asphalt sector. 
                  Before stepping into my current role as a senior software engineer, I successfully planned and managed multiple large-scale releases. 
                  I pride myself on my problem-solving abilities, critical thinking, adaptability, leadership, and communication skills. 
                </p>
                <p className="text-lg mb-4">
                  Outside of my professional life, I enjoy staying active and exploring the great outdoors. I love bowling with friends, biking along scenic trails, and hiking in nature. 
                  Engaging in outdoor sports not only helps me stay fit but also fuels my creativity and enhances my problem-solving skills. 
                  Traveling is another passion of mine, as it allows me to experience new cultures and perspectives, enriching both my personal and professional life.
                </p>
                <p className="text-lg">
                  I believe that the balance between my work and hobbies helps me stay motivated and inspired. 
                  I’m eager to continue growing as a software engineer, bringing my passion for technology and my love for adventure into everything I do.
                </p>
              </div>
            </section>

            <section id="experience" className="experience mb-24">
              <h2 className="lg:hidden text-2xl font-semibold mb-6">Experience</h2>
              <div className="relative grid grid-cols-[20%_5%_75%] gap-y-16 pb-20">
                <div className="text-left text-sm whitespace-nowrap">2021 - Present</div>
                <div></div>
                <div className="pl-9">
                  <a className="experience-link" href="https://sopworks.com" target="_blank"><h3 className="font-semibold inline-flex items-center">Spot On Performance<FaExternalLinkAlt className="ml-4 text-sm" /></h3></a>
                  <p className="text-sm">Senior Software Engineer / Project Manager</p>
                  <p className="mt-2 font-light">
                    Led cross-functional teams to manage project risks, release software, and plan sprint cycles, driving the successful deployment of Infrastructure as Code (IaC) and enhancing customer relations.
                    Executed Agile releases, improved code quality, and implemented new processes for key performance metrics.
                  </p>
                  <div className="mt-2 font-light text-center">
                    <div className="flex items-center justify-center">
                      <hr className="flex-grow" />
                      <span className="m-2 font-normal">Key Accomplishments</span>
                      <hr className="flex-grow" />
                    </div>
                    <p className="text-left mt-2">
                      Built a 5-member development team in 4 months and restructured release cycles, launching 20+ features to production, including a Google API and MongoDB rebuild, cutting costs by 50%.
                    </p>
                    <p className="text-left mt-2">
                      Revamped the marketing site, boosting user engagement and lead generation by 30%.
                    </p>
                    <p className="text-left mt-2">
                      Added multi-user features to improve customer support efficiency and enhanced Azure Bicep templating.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="badge text-xs">PHP</span>
                    <span className="badge text-xs">Web Development</span>
                    <span className="badge text-xs">Python .exe(s)</span>
                    <span className="badge text-xs">ODBC</span>
                    <span className="badge text-xs">MVC</span>
                    <span className="badge text-xs">Wordpress</span>
                    <span className="badge text-xs">IaC</span>
                    <span className="badge text-xs">Google API</span>
                    <span className="badge text-xs">MongoDB</span>
                    <span className="badge text-xs">Team Management</span>
                    <span className="badge text-xs">Client Relations</span>
                    <span className="badge text-xs">Azure</span>
                  </div>
                </div>

                <div className="text-left text-sm whitespace-nowrap">2024 - 2024</div>
                <div></div>
                <div className="pl-9">
                  <a className="experience-link" href="https://www.stormsmart.com" target="_blank"><h3 className="font-semibold inline-flex items-center">Storm Smart<FaExternalLinkAlt className="ml-4 text-sm" /></h3></a>
                  <p className="text-sm">Software Engineer (Contract)</p>
                  <p className="mt-2 font-light">
                    Re-engineered business systems and developed an automated web scraper to record price changes for
                    financial software using Python and Selenium.
                  </p>
                  <div className="mt-2 font-light text-center">
                    <div className="flex items-center">
                      <hr className="flex-grow" />
                      <span className="m-2 font-normal">Key Accomplishments</span>
                      <hr className="flex-grow" />
                    </div>
                    <p className="text-left mt-2">
                      Defined new workflows and contributed over 50% of the codebase for the project.
                    </p>
                    <p className="text-left mt-2">
                      Increased departmental productivity with automation, and reorganized planning tools.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="badge text-xs">Python</span>
                    <span className="badge text-xs">Selenium</span>
                    <span className="badge text-xs">Web Scraping</span>
                    <span className="badge text-xs">Dynamic Programming</span>
                  </div>
                </div>

                <div className="text-left text-sm whitespace-nowrap">2023 - 2024</div>
                <div></div>
                <div className="pl-9">
                  <a className="experience-link" href="https://www.hertz.com/rentacar/reservation/" target="_blank"><h3 className="font-semibold inline-flex items-center">Hertz<FaExternalLinkAlt className="ml-4 text-sm" /></h3></a>
                  <p className="text-sm">Software Engineer (Contract)</p>
                  <p className="mt-2 font-light">
                    Led an FGCU student team to modernize a legacy system, reducing issues and abuse by 70% by
                    incorporating more admin control, automated reports, security lockouts and notifications
                  </p>
                  <div className="mt-2 font-light text-center">
                    <div className="flex items-center">
                      <hr className="flex-grow" />
                      <span className="m-2 font-normal">Key Accomplishments</span>
                      <hr className="flex-grow" />
                    </div>
                    <p className="text-left mt-2">
                      Delivered full-stack dev with React, nodemon, Python, and TypeScript.
                    </p>
                    <p className="text-left mt-2">
                      Implemented a secure AWS connection, and presented the final solution to the C-Suite, which remains in active use.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="badge text-xs">React</span>
                    <span className="badge text-xs">AWS</span>
                    <span className="badge text-xs">TypeScript</span>
                    <span className="badge text-xs">Batch Processing</span>
                    <span className="badge text-xs">Oracle DB</span>
                    <span className="badge text-xs">Lambda</span>
                  </div>
                </div>

                <div className="text-left text-sm whitespace-nowrap">2023 - 2023</div>
                <div></div>
                <div className="pl-9">
                  <a className="experience-link" href="https://imagsystems.org/login" target="_blank"><h3 className="font-semibold inline-flex items-center">The IMAG<FaExternalLinkAlt className="ml-4 text-sm" /></h3></a>
                  <p className="text-sm">Full Stack Developer (Contract)</p>
                  <p className="mt-2 font-light">
                    Consult with The IMAG team to help identify business needs/pain points for entering aquatics data
                  </p>
                  <div className="mt-2 font-light text-center">
                    <div className="flex items-center">
                      <hr className="flex-grow" />
                      <span className="m-2 font-normal">Key Accomplishments</span>
                      <hr className="flex-grow" />
                    </div>
                    <p className="text-left mt-2">
                      Engineered a comprehensive web solution using SiteGround, PHP, and Laravel.
                    </p>
                    <p className="text-left mt-2">
                      Increased departmental productivity with automation by an estimated 35%, and reorganized planning tools.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="badge text-xs">PHP</span>
                    <span className="badge text-xs">Laravel</span>
                    <span className="badge text-xs">SiteGround</span>
                    <span className="badge text-xs">Automation</span>
                    <span className="badge text-xs">Full Stack Development</span>
                  </div>
                </div>

                <a className="experience-link whitespace-nowrap" href="/resume.pdf" download target="_blank"><h3 className="font-semibold inline-flex items-center">View Full Resume<FaExternalLinkAlt className="ml-4 text-sm" /></h3></a>
              </div>
            </section>

            <section id="projects" className="experience mb-24">
              <h2 className="lg:hidden text-2xl font-semibold mb-6">Projects</h2>
              <div className="relative grid grid-cols-[20%_5%_75%] gap-y-16">
                <div className="text-left text-sm whitespace-nowrap">
                  <Image src="/C++_logo.png" alt="C++ Logo" width={100} height={100} />
                </div>
                <div></div>
                <div className="pl-9">
                  <h3 className="font-semibold inline-flex items-center">Minigames
                    <a className="experience-link" href="https://github.com/tjmacphee/Cen_3031_Minigames" target="_blank"><FaGithub className="ml-4 text-sm" /></a>
                    <a className="experience-link" href="https://youtu.be/IU8VsvCKI2k" target="_blank"><FaYoutube className="ml-4 text-sm" /></a>
                  </h3>
                  <p className="mt-2 font-light">
                    Developed 5 C++ minigames using SFML, focusing on real-time window management, physics, and rendering optimizations. This project strengthened my proficiency in linear algebra and 2D development.
                  </p>
                </div>

                <div className="text-left text-sm whitespace-nowrap">
                  <Image src="/Python_logo.png" alt="Python ML/AI Logo" width={100} height={100} />
                </div>
                <div></div>
                <div className="pl-9">
                  <h3 className="font-semibold inline-flex items-center">Image Processing & Segmentation
                    <a className="experience-link" href="https://github.com/tjmacphee/cop4931imageprocessing" target="_blank"><FaGithub className="ml-4 text-sm" /></a>
                    <a className="experience-link" href="https://youtu.be/XriZMbDovbM" target="_blank"><FaYoutube className="ml-4 text-sm" /></a>
                    <a className="experience-link" href="https://www.youtube.com/watch?v=uPMg_eoSrVQ" target="_blank"><FaYoutube className="ml-4 text-sm" /></a>
                  </h3>
                  <p className="mt-2 font-light">
                    Used Python's OpenCV and scikit-image for image and video segmentation. Applied YOLOv3 for face and object detection, achieving 90% accuracy in various environments, very useful for surveillance systems.
                  </p>
                </div>

                <div className="text-left text-sm whitespace-nowrap">
                  <Image src="/ASM_logo.png" alt="ASM Logo" width={100} height={100} />
                </div>
                <div></div>
                <div className="pl-9">
                  <h3 className="font-semibold inline-flex items-center">Ultrasonic ASM Sensor
                    <a className="experience-link" href="https://github.com/tjmacphee/CDA-3104-Assembly?tab=readme-ov-file" target="_blank"><FaGithub className="ml-4 text-sm" /></a>
                  </h3>
                  <p className="mt-2 font-light">
                    Programmed an Arduino with ASM to control LED indicators based on ultrasonic sensor distance. The system provides real-time distance feedback.
                  </p>
                </div>

                <div className="text-left text-sm whitespace-nowrap">
                  <Image src="/Windows_logo.png" alt="Windows Logo" width={100} height={100} />
                </div>
                <div></div>
                <div className="pl-9">
                  <h3 className="font-semibold inline-flex items-center">System Monitor Lite (WIP)
                    <a className="experience-link" href="https://github.com/tjmacphee/sysmonitor/tree/dev" target="_blank"><FaGithub className="ml-4 text-sm" /></a>
                  </h3>
                  <p className="mt-2 font-light">
                    Developing a Windows app in C++ with GTKMM and Blade for a minimalist system status view. This project aims to replicate Task Manager’s core functions with a streamlined interface.
                  </p>
                </div>
              </div>
            </section>

          </div>
          <footer className="text-center font-extralight mt-auto sticky pt-12">
            Built with <a className="font-bold" href="https://nextjs.org/">Next.js</a> and <a className="font-bold" href="https://tailwindcss.com/">Tailwind CSS</a>, deployed with <a className="font-bold" href="https://github.com/">GitHub</a>.
          </footer>
        </div>
      </div>
    </main>
  )
}