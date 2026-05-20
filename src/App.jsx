/**
 * FarazDevOpsPortfolio Component
 * * Professional Portfolio for a DevOps Engineer.
 * Integrated with jsPDF-based Resume Generation.
 */

import React from "react";
import { ReactTyped } from "react-typed";

// --- Custom Components ---
import Resume from "./Resume"; // <--- Ye aapka naya PDF logic handle karega
import HireMeSection from "./HireMeSection";
import GitHubStats from "./GitHubStats";
import Pipeline from "./Pipeline.jsx";

// --- Icons ---
import { FaDocker, FaLinux, FaAws } from "react-icons/fa";
import { SiKubernetes, SiJenkins, SiTerraform } from "react-icons/si";

const SKILLS_DATA = [
  { name: 'Linux Administration', link: 'https://roadmap.sh/linux' },
  { name: 'Docker & Containers', link: 'https://roadmap.sh/docker' },
  { name: 'CI/CD Pipelines', link: 'https://roadmap.sh/devops' },
  { name: 'GitHub Actions', link: 'https://docs.github.com/actions' },
  { name: 'AWS Cloud', link: 'https://aws.amazon.com/getting-started/' },
  { name: 'Terraform', link: 'https://developer.hashicorp.com/terraform/tutorials' },
  { name: 'Shell Scripting', link: 'https://linuxjourney.com/' },
  { name: 'Kubernetes Basics', link: 'https://kubernetes.io/docs/tutorials/' },
  { name: 'Monitoring & Logging', link: 'https://grafana.com/tutorials/' },
  { name: 'Networking Fundamentals', link: 'https://roadmap.sh/computer-science' }
];

const PROJECTS_DATA = [
  {
    title: 'Dockerized Web Server Deployment', // <--- Task 4 title
    desc: 'Containerized and deployed a high-performance web server inside Docker. Managed full container lifecycle, health monitoring, and resource troubleshooting.',
    tech: 'Docker • Nginx/Apache • Linux • Containerization', // <--- Task 4 skills
    link: 'https://github.com/farazii1159/CODEALPHA_Devops_TASK_4.git'
  },
  {
    title: 'Proton_Agency Deployment',
    desc: 'Automated CI/CD pipeline and containerized deployment for a modern Next.js web application, featuring custom workflow automation and performance optimization.',
    tech: 'Next.js • GitHub Actions • Vercel • Docker',
    link: 'https://github.com/farazii1159/ProtonAgency_Deploy.git'
  }
];

export default function FarazDevOpsPortfolio() {
  
  // NOTE: Humne purana 'handleDownloadResume' yahan se hata diya hai
  // kyunki ab Resume component khud apna download handle karega.

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500/30">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#0ff2,_transparent_60%)] opacity-20 animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4 font-semibold">
              DevOps Engineer Portfolio
            </p>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Hi, I'm <span className="text-cyan-400">Faraz Shabbir</span>
            </h1>

            <div className="text-cyan-400 text-2xl font-bold mb-6">
              <ReactTyped
                strings={["DevOps Engineer", "Linux Enthusiast", "Cloud Learner", "CI/CD Builder"]}
                typeSpeed={70}
                backSpeed={40}
                loop
              />
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Passionate DevOps learner focused on Infrastructure Automation and building scalable deployment pipelines.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <a href="https://github.com/farazii1159" target="_blank" rel="noopener noreferrer" 
                 className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-2xl text-black font-bold shadow-lg shadow-cyan-500/20">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/faraz-shabbir-5a9227344" target="_blank" rel="noopener noreferrer"
                 className="border border-gray-700 hover:border-cyan-400 transition px-6 py-3 rounded-2xl">
                LinkedIn
              </a>

              {/* INTEGRATED RESUME COMPONENT */}
              {/* Ye component ab button aur download logic dono sambhale ga */}
              <Resume /> 
            </div>
          </div>

          {/* Terminal Visual */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8 shadow-2xl transition group-hover:border-cyan-500/50">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-green-400 text-sm overflow-x-auto leading-relaxed">
{`┌──(faraz㉿devops)-[~/portfolio]
└─$ whoami
Faraz Shabbir

┌──(faraz㉿devops)-[~/about]
└─$ cat intro.txt
Computer Science Student & Aspiring DevOps Engineer
Passionate about Linux, Cloud, Automation & CI/CD

┌──(faraz㉿devops)-[~/skills]
└─$ ls
Linux
Docker
AWS
CI/CD, Terraform, Jenkins, Kubernetes, Git & GitHub, Shell Scripting

┌──(faraz㉿devops)-[~/projects]
└─$ find .
✔ Dockerized Applications
✔ CI/CD Pipelines
✔ AWS Cloud Deployments 
✔ Infrastructure Automation

┌──(faraz㉿devops)-[~/goals]
└─$ echo $CAREER
Building scalable cloud infrastructure
and becoming a professional DevOps Engineer 🚀

┌──(faraz㉿devops)-[~/status]
└─$ cat availability.txt
Open to Internship Opportunities,Learning & Collaboration

┌──(faraz㉿devops)-[~/contact]
└─$ ping github.com
Connection established...`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACCESS BADGES */}
      <div className="flex flex-wrap gap-3 justify-center -translate-y-1/2">
        {['Docker', 'CI/CD', 'AWS', 'Linux', 'Terraform'].map(tag => (
          <span key={tag} className="px-6 py-2 bg-gray-900 border border-gray-800 rounded-full text-cyan-400 text-sm font-medium">
            {tag}
          </span>
        ))}
      </div>

      {/* TECHNICAL STACK */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Stack</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-wrap gap-10 mb-16 justify-center text-gray-500 text-6xl">
          <FaLinux className="hover:text-white transition cursor-help" title="Linux" />
          <FaDocker className="hover:text-[#2496ed] transition" />
          <FaAws className="hover:text-[#ff9900] transition" />
          <SiKubernetes className="hover:text-[#326ce5] transition" />
          <SiJenkins className="hover:text-[#d24939] transition" />
          <SiTerraform className="hover:text-[#7b42bc] transition" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {SKILLS_DATA.map((skill, index) => (
            <a key={index} href={skill.link} target="_blank" rel="noopener noreferrer"
               className="bg-gray-900/50 border border-gray-800 hover:border-cyan-500 transition-all rounded-2xl p-5 text-center group">
              <p className="font-semibold group-hover:text-cyan-400">{skill.name}</p>
            </a>
          ))}
        </div>
      </section>

     {/* PROJECTS SECTION (UPDATED TO BE CLICKABLE) */}
      <section className="bg-gray-950/50 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {PROJECTS_DATA.map((project, index) => (
              <a 
                key={index} 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-cyan-500 transition-all group cursor-pointer"
              >
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition flex justify-between items-center">
                  {project.title}
                  <span className="text-sm font-normal text-gray-500 group-hover:text-cyan-400 transition">
                    View Code ↗
                  </span>
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">{project.desc}</p>
                <div className="border-t border-gray-800 pt-4 text-cyan-400/80 text-sm font-mono">{project.tech}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="pb-20">
        <Pipeline />
        <HireMeSection />
      </section>

      <footer className="border-t border-gray-800 py-12 text-center text-gray-500">
        <p>© 2026 Faraz DevOps Portfolio</p>
      </footer>
    </div>
  );
}