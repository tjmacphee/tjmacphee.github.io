"use client";

import { FaLinkedin, FaGithub, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'

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
            {['about', 'experience', 'projects', 'recommendations'].map((section) => (
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
          <div className="mt-auto sticky w-full">
            <div className="flex justify-center space-x-6 mt-6">
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/tyler-macphee-5392491a7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition text-2xl"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/tjmacphee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:transition text-2xl"
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
                  className="hover:text-blue-600 transition text-2xl"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/tjmacphee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:transition text-2xl"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </header>
          <div className="max-w-4xl mx-auto">
            <section id="about" className="mb-12">
              <h2 className="lg:hidden text-2xl font-semibold mb-6">About</h2>
              <div className="">
                <p className="text-lg mb-4">
                  As a software engineer with 3 years of experience, I have a proven track record in leading projects and managing large-scale releases.
                  I’m skilled at problem-solving, critical thinking, and bringing teams together to deliver high-quality solutions. 
                  I’m passionate about using technology to drive innovation and help your team succeed in building efficient and scalable software.
                </p>
                <p className="text-lg">
                  WRITE MORE HERE ABOUT FREETIME, HOBBIES, ETC
                </p>
              </div>
            </section>
            <section id="experience" className="experience mb-12">
              <h2 className="lg:hidden text-2xl font-semibold mb-6">Experience</h2>
              <div className="relative grid grid-cols-[20%_5%_75%] gap-y-12">
                <div className="absolute border-l-2 border-gray-300 h-full left-[calc(20%+2.5%)] top-0"></div>
                <div className="text-left text-sm whitespace-nowrap">2021 - Present</div>
                <div></div>
                <div className="pl-9">
                  <a className="experience-link" href="https://sopworks.com" target="_blank"><h3 className="font-semibold inline-flex items-center">Spot On Performance<FaExternalLinkAlt className="ml-4 text-sm" /></h3></a>
                  <p className="text-sm">Senior Software Engineer / Project Manager</p>
                  <p className="mt-2 font-light">
                    Led teams, launched 20+ features including a Google API & MongoDB rebuild, cutting costs by 50%.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="badge text-xs">IaC</span>
                    <span className="badge text-xs">Google API</span>
                    <span className="badge text-xs">MongoDB</span>
                    <span className="badge text-xs">Team Management</span>
                  </div>
                </div>
                <div className="text-left text-sm whitespace-nowrap">2024 - 2024</div>
                <div></div>
                <div className="pl-9">
                  <a className="experience-link" href="https://www.stormsmart.com" target="_blank"><h3 className="font-semibold inline-flex items-center">Storm Smart<FaExternalLinkAlt className="ml-4 text-sm" /></h3></a>
                  <p className="text-sm">Software Engineer (Contract)</p>
                  <p className="mt-2 font-light">
                    Developed web scraper with Python/Selenium, increasing productivity with automation.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="badge text-xs">Python</span>
                    <span className="badge text-xs">Selenium</span>
                    <span className="badge text-xs">Automation</span>
                  </div>
                </div>
                <div className="text-left text-sm whitespace-nowrap">2023 - 2024</div>
                <div></div>
                <div className="pl-9">
                  <a className="experience-link" href="https://theimag.org" target="_blank"><h3 className="font-semibold inline-flex items-center">Hertz<FaExternalLinkAlt className="ml-4 text-sm" /></h3></a>
                  <p className="text-sm">Software Engineer (Contract)</p>
                  <p className="mt-2 font-light">
                    Led FGCU student team, reduced system abuse by 70% with full-stack modernization.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="badge text-xs">React</span>
                    <span className="badge text-xs">AWS</span>
                    <span className="badge text-xs">TypeScript</span>
                  </div>
                </div>
                <div className="text-left text-sm whitespace-nowrap">2023 - 2023</div>
                <div></div>
                <div className="pl-9">
                  <a className="experience-link" href="https://sopworks.com" target="_blank"><h3 className="font-semibold inline-flex items-center">The IMAG<FaExternalLinkAlt className="ml-4 text-sm" /></h3></a>
                  <p className="text-sm">Full Stack Developer (Contract)</p>
                  <p className="mt-2 font-light">
                    Created a comprehensive web solution, saving 35% time in daily tasks.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="badge text-xs">PHP</span>
                    <span className="badge text-xs">Laravel</span>
                    <span className="badge text-xs">SiteGround</span>
                  </div>
                </div>
              </div>
            </section>
            <section id="projects" className="mb-12">
              <h2 className="lg:hidden text-2xl font-semibold mb-6">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Minigames</h3>
                    <p className="mb-4font-extralight ">
                      Developed 5 C++ minigames using SFML, focusing on real-time window management, physics, and
                      rendering optimizations. This project strengthened my proficiency in linear algebra and 2D development.
                    </p>
                    <a
                      href="https://github.com/tjmacphee/Cen_3031_Minigames"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline flex items-center pb-2"
                    >
                      <FaGithub className="mr-2" /> View on GitHub
                    </a>
                    <a
                      href="https://youtu.be/IU8VsvCKI2k"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline flex items-center"
                    >
                      <FaYoutube className="mr-2" /> Project Demo
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Image Processing & Segmentation</h3>
                    <p className="mb-4 font-extralight">
                      Used Python's OpenCV and scikit-image for image and video segmentation. Applied YOLOv3 for face and
                      object detection, achieving 90% accuracy in various environments, very useful for surveillance systems.
                    </p>
                    <a
                      href="https://github.com/tjmacphee/cop4931imageprocessing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline flex items-center pb-2"
                    >
                      <FaGithub className="mr-2" /> View on GitHub
                    </a>
                    <a
                      href="https://youtu.be/XriZMbDovbM"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline flex items-center"
                    >
                      <FaYoutube className="mr-2" /> Project Demo
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=uPMg_eoSrVQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline flex items-center"
                    >
                      <FaYoutube className="mr-2" /> Project Demo 2
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Ultrasonic ASM Sensor</h3>
                    <p className="mb-4">
                      Programmed an Arduino with ASM to control LED indicators based on ultrasonic sensor distance. The
                      system provides real-time distance feedback.
                    </p>
                    <a
                      href="https://github.com/tjmacphee/CDA-3104-Assembly?tab=readme-ov-file"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline flex items-center pb-2"
                    >
                      <FaGithub className="mr-2" /> View on GitHub
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">System Monitor Lite (WIP)</h3>
                    <p className="mb-4">
                      Developing a Windows app in C++ with GTKMM and Blade for a minimalist system status view. This
                      project aims to replicate Task Manager’s core functions with a streamlined interface.
                    </p>
                    <a
                      href="https://github.com/tjmacphee/sysmonitor/tree/dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline flex items-center pb-2"
                    >
                      <FaGithub className="mr-2" /> View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section id="recommendations">
              <h2 className="lg:hidden text-2xl font-semibold mb-6">Letters of Recommendation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                  <p className="mb-4">CEO at ExampleCorp</p>
                  <a
                    href="/recommendation1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                    download
                  >
                    View Letter
                  </a>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-2">Josiah Greenwell</h3>
                  <p className="mb-4">Former Professor at Florida Gulf Coast University</p>
                  <a
                    href="/recommendation2.pdf"
                    className="text-blue-500 hover:underline"
                    download="recommendation2.pdf"
                  >
                    View Letter
                  </a>
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