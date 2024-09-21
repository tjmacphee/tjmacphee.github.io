// Import necessary modules and components
import Image from 'next/image'
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'
import profileImage from '../public/fullbody.jpg'
import project1 from '../public/project1.jpg'
import project2 from '../public/project2.jpg'
import project3 from '../public/project3.jpg'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      
      {/* Header Section */}
      <header className="mb-12">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-lg overflow-hidden">
            <Image
              src={profileImage}
              alt="Profile"
              className="rounded-lg shadow-lg object-cover"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="mt-6">
            <h1 className="text-5xl font-bold text-gray-800">Tyler MacPhee</h1>
            <p className="text-2xl text-gray-600">Software Engineer</p>
          </div>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center"
          >
            Download Resume
          </a>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/tyler-macphee-5392491a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/tjmacphee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition text-2xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </header>
      
      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4">
        
        {/* About Me Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">About Me</h2>
          <div className="bg-white shadow-md rounded-lg p-8">
            <p className="text-lg text-gray-700">
              As a software engineer with 3 years of experience, I have a proven track record in leading projects and managing large-scale releases. I’m skilled at problem-solving, critical thinking, and bringing teams together to deliver high-quality solutions. I’m passionate about using technology to drive innovation and help your team succeed in building efficient and scalable software.
            </p>
          </div>
        </section>
        
        {/* Projects Section 1 */}
        <section id="projects" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={project1}
                alt="Project 1"
                className="w-full h-48 object-cover"
                width={400}
                height={300}
              />
              <div className="p-4">
                <h3 className="text-gray-600 text-xl font-semibold mb-2">Minigames</h3>
                <p className="text-gray-600 mb-4">
                Developed 5 C++ minigames using SFML, focusing on real-time window management, physics, and
                rendering optimizations. This project strengthened my proficiency in linear algebra and 2D development
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
            
            {/* Project Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={project2}
                alt="Project 2"
                className="w-full h-48 object-cover"
                width={400}
                height={300}
              />
              <div className="p-4">
                <h3 className="text-gray-600 text-xl font-semibold mb-2">Image Processing & Segmentation</h3>
                <p className="text-gray-600 mb-4">
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
          </div>
        </section>

        {/* Projects Section 2 */}
        <section id="projects" className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Project Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={project3}
                alt="Project 3"
                className="w-full h-48 object-cover"
                width={400}
                height={300}
              />
              <div className="p-4">
                <h3 className="text-gray-600 text-xl font-semibold mb-2">Ultrasonic ASM senor</h3>
                <p className="text-gray-600 mb-4">
                Programmed an Arduino with ASM to control LED indicators based on ultrasonic sensor distance. The
system provides real-time distance 
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

            {/* Project Card 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={project2}
                alt="Project 2"
                className="w-full h-48 object-cover"
                width={400}
                height={300}
              />
              <div className="p-4">
                <h3 className="text-gray-600 text-xl font-semibold mb-2">System Monitor Lite (WIP)</h3>
                <p className="text-gray-600 mb-4">
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
        
        {/* Recommendations Section */}
        <section id="recommendations" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Letters of Recommendation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Recommendation 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-gray-600 text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-600 mb-4">CEO at ExampleCorp</p>
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
            
            {/* Recommendation 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-gray-600 text-xl font-semibold mb-2">Josiah Greenwell</h3>
              <p className="text-gray-600 mb-4">Former Professor at Florida Gulf Coast University</p>
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
        
        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Contact Me</h2>
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-8">
            
            {/* Contact Information */}
            <div className="mb-8 md:mb-0">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> <a href="mailto:macpheetyler@example.com" className="text-blue-500 hover:underline">macpheetyler@gmail.com</a></p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> <a href="tel:+12398488760" className="text-blue-500 hover:underline">+1 (239) 848-8760</a></p>
              <p className="text-gray-700"><strong>Location:</strong> Cape Coral, FL, USA</p>
            </div>
            
          </div>
        </section>
        
      </div>
      
      {/* Footer Section */}
      <footer className="text-center text-gray-600 mt-12">
        &copy; {new Date().getFullYear()} Tyler MacPhee. All rights reserved.
      </footer>
    </main>
  )
}
