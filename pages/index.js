import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import web7 from "../public/web7.png";
import web8 from "../public/web8.png";
import web9 from "../public/web9.png";
import Link from 'next/link';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMoon, FiSun } from "react-icons/fi";
import { FiMousePointer } from "react-icons/fi";
import AboutSectiion from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5, 
    triggerOnce: true, 
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your email sending logic here
    console.log("Form data:", formData);
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  const [experienceRef, experienceInView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  const [portfolioRef, portfolioInView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  const [filter, setFilter] = useState("all");

  const portfolioItems = [
    { src: web9, alt: "Web 9", category: "web apps", githubUrl: "https://github.com/jaybee21/jhealthcare", viewUrl: "https://jhealthcare.vercel.app" , technologies: [ "Next.js", "Appwrite", "Typescript", "TailwindCSS", "ShadCN", "Twilio"]},
    { src: web8, alt: "Web 8", category: "web apps", githubUrl: "https://github.com/jaybee21/jrentals", viewUrl: "https://jrentals.netlify.app" , technologies: [ "Next.js", "Typescript", "Tailwind"]},
    { src: web7, alt: "Web 7", category: "web apps", githubUrl: "https://github.com/jaybee21/ping_pong_game", viewUrl: "https://pingpongjabu.netlify.app", technologies: ["HTML", "CSS", "JavaScript"] },
    // { src: web1, alt: "Web 1", category: "web apps", githubUrl: "#", viewUrl: "https://www.gruma.co.zw/index.html", technologies: ["HTML", "CSS", "JavaScript", "Boostrap"] },
    { src: web3, alt: "Web 3", category: "web apps", githubUrl: "#", viewUrl: "https://nikewebsitejabule.netlify.app" , technologies: ["HTML", "CSS", "JavaScript", ]},
    // { src: web4, alt: "Web 4", category: "mobile apps", githubUrl: "#", viewUrl: "#", technologies: ["Java", "CSS", "HTML"] },
    // { src: web5, alt: "Web 5", category: "big data apps", githubUrl: "#", viewUrl: "#", technologies: ["HTML", "CSS", "PHP"] },
    // { src: web6, alt: "Web 6", category: "mobile apps", githubUrl: "#", viewUrl: "#" , technologies: ["HTML", "CSS", "JavaScript", "SpringBoot"]},
  ];
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.5, 
    triggerOnce: true, 
  });

  

  const filteredPortfolioItems = filter === "all" ? portfolioItems : portfolioItems.filter(item => item.category === filter);
  console.log('Filtered Portfolio Items:', filteredPortfolioItems);
  console.log("Portfolio Items:", portfolioItems);
  portfolioItems.forEach((item, index) => {
    console.log(`Technologies for Item ${index + 1}:`, item.technologies);
  });
  
  const [typedName, setTypedName] = useState("");
  useEffect(() => {
    const fullName = "JJabule Simanga";
    let i = 0;
    const typingInterval = setInterval(() => {
      setTypedName((prev) => prev + fullName.charAt(i));
      i++;
      if (i > fullName.length) {
        clearInterval(typingInterval);
      }
    }, 150); 

    return () => clearInterval(typingInterval);
  }, []);
 
  const LightDarkToggle = ({ darkMode, setDarkMode }) => {
    return (
      <div className="flex items-center gap-2">
        <button
          onClick={() => setDarkMode(false)}
          className="flex items-center cursor-pointer text-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-md focus:outline-none focus:ring focus:ring-gray-400 dark:focus:ring-gray-600"
        >
          <FiSun className="mr-1" />
          <span className="text-xs">Light</span>
        </button>
        <button
          onClick={() => setDarkMode(true)}
          className="flex items-center cursor-pointer text-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-md focus:outline-none focus:ring focus:ring-gray-400 dark:focus:ring-gray-600"
        >
          <FiMoon className="mr-1" />
          <span className="text-xs">Dark</span>
        </button>
      </div>
    );
  };

  

 
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jabule Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
          <h1 className="font-burtons text-xl relative overflow-hidden">
  <span className="typed-text"></span>
</h1>
            <ul className="flex items-center">
            <li>
                <LightDarkToggle darkMode={darkMode} setDarkMode={setDarkMode} />
              </li>
              <li>
              <a
  className="resume-link"
  href="#"
>
  Resume
</a>
</li>
            </ul>
          </nav>
          
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center backdrop-blur-md bg-opacity-10 bg-blue-200 dark:bg-purple-900 rounded-md p-8 md:p-10 gap-8 md:gap-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.50 }}
          >
            {/* Left part */}
            <div className="text-center flex flex-col justify-center w-full md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-semibold">
  {typedName}
</h2>

<h3 className="text-2xl py-2 md:text-3xl text-blue-600 dark:text-blue-600">
  FullStack Developer & Professional Cloud Architect
</h3>
<p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
  I specialize in developing pixel-perfect, engaging, and accessible digital experiences, leveraging my expertise as a skilled frontend and backend developer.
</p>
<p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
  Check out my <a href="https://www.credly.com/badges/c1d332df-20e2-4438-b38b-f8988ce8975a/public_url" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">GCP Cloud Architect Certification</a>.
</p>


              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <Link href="https://github.com/jaybee21">
                  <a className="hover:text-blue-500 transition-colors">
                    <AiFillTwitterCircle />
                  </a>
                </Link>
                <Link href="https://www.linkedin.com/in/jabule-simanga-56425a155/">
                  <a className="hover:text-blue-500 transition-colors">
                    <AiFillLinkedin />
                  </a>
                </Link>
                <Link href="https://github.com/jaybee21">
                  <a className="hover:text-blue-500 transition-colors">
                    <AiFillGithub />
                  </a>
                </Link>
              </div>
            </div>
            
            {/* Right part */}
            <motion.div
              className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 relative overflow-hidden mt-10 md:h-96 md:w-96 mb-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Image
                src={deved}
                layout="fill"
                objectFit="cover"
                className="image-animation"
              />
            </motion.div>
          </motion.div>
          
        </section>
       <AboutSectiion />
       <ExperienceSection experienceInView={true} />
      
          
          <section className="py-10">
          <div className="text-center">
          <h3 className="text-4xl md:text-6xl font-semibold">
  <span style={{ fontSize: "2rem" }}>Portfolio</span>
</h3>


  <div className="flex justify-center mt-4 space-x-4">
    <button onClick={() => setFilter("all")} className="btn-filter">All</button>
    <button onClick={() => setFilter("web apps")} className="btn-filter">Web Apps</button>
    <button onClick={() => setFilter("mobile apps")} className="btn-filter">Mobile Apps</button>
    <button onClick={() => setFilter("big data apps")} className="btn-filter">Big Data Apps</button>
  </div>
</div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {filteredPortfolioItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative rounded-lg overflow-hidden cursor-pointer"
          >
            <Image
              src={item.src}
              alt={item.alt}
              layout="responsive"
              width={500}
              height={300}
              className="transition-transform duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-75 transition-opacity duration-300 hover:opacity-100">
              <div className="text-white text-center">
                <a href={item.githubUrl} className="block mb-2 hover:underline" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
                <a href={item.viewUrl} className="block hover:underline" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
                <div>
        <span className="font-bold">Technologies:</span> {item.technologies.join(", ")}
      </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    <motion.div
  className="relative"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.50 }}
>
  {/* ParticleRing as background */}
 {/*<ParticleRing className="absolute inset-0 z-0" /> */} 

 
  
</motion.div>




      </main>
    </div>
  );
}
