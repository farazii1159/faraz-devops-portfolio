/**
 * FarazDevOpsPortfolio - Optimized Version
 */

import React, { lazy, Suspense } from "react";
import { ReactTyped } from "react-typed";

// --- Lazy Loaded Components (IMPORTANT OPTIMIZATION) ---
const Resume = lazy(() => import("./Resume"));
const Pipeline = lazy(() => import("./Pipeline.jsx"));
const HireMeSection = lazy(() => import("./HireMeSection"));
const GitHubStats = lazy(() => import("./GitHubStats"));

// --- Icons ---
import { FaDocker, FaLinux, FaAws } from "react-icons/fa";
import { SiKubernetes, SiJenkins, SiTerraform } from "react-icons/si";

// --- DATA ---
const SKILLS_DATA = [
  { name: "Linux Administration", link: "https://roadmap.sh/linux" },
  { name: "Docker & Containers", link: "https://roadmap.sh/docker" },
  { name: "CI/CD Pipelines", link: "https://roadmap.sh/devops" },
  { name: "GitHub Actions", link: "https://docs.github.com/actions" },
  { name: "AWS Cloud", link: "https://aws.amazon.com/getting-started/" },
  { name: "Terraform", link: "https://developer.hashicorp.com/terraform/tutorials" },
  { name: "Shell Scripting", link: "https://linuxjourney.com/" },
  { name: "Kubernetes Basics", link: "https://kubernetes.io/docs/tutorials/" },
  { name: "Monitoring & Logging", link: "https://grafana.com/tutorials/" },
  { name: "Networking Fundamentals", link: "https://roadmap.sh/computer-science" }
];

const PROJECTS_DATA = [
  {
    title: "Enterprise CI/CD Pipeline",
    desc: "Built CI/CD workflow using GitHub Actions, Docker, AWS with rollback strategy.",
    tech: "GitHub Actions • Docker • AWS • Linux"
  },
  {
    title: "Dockerized Infrastructure",
    desc: "Multi-service containerized apps with Nginx reverse proxy automation.",
    tech: "Docker • Nginx • Bash"
  }
];

// --- LOADER COMPONENT ---
const Loader = () => (
  <div className="text-cyan-400 text-center py-10">
    Loading...
  </div>
);

export default function FarazDevOpsPortfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* HERO */}
      <section className="border-b border-gray-800 py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <p className="text-cyan-400 tracking-[0.3em] mb-4">
              DevOps Engineer Portfolio
            </p>

            <h1 className="text-5xl font-bold mb-6">
              Hi, I'm <span className="text-cyan-400">Faraz Shabbir</span>
            </h1>

            <div className="text-cyan-400 text-xl mb-6">
              <ReactTyped
                strings={[
                  "DevOps Engineer",
                  "Linux Enthusiast",
                  "Cloud Learner",
                  "CI/CD Builder"
                ]}
                typeSpeed={70}
                backSpeed={40}
                loop
              />
            </div>

            <p className="text-gray-400 mb-8">
              Passionate DevOps learner focused on automation and cloud infrastructure.
            </p>

            {/* CTA + Resume */}
            <div className="flex gap-4 flex-wrap items-center">

              <a
                href="https://github.com/farazii1159"
                target="_blank"
                className="bg-cyan-500 text-black px-5 py-3 rounded-xl font-bold"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="border border-gray-700 px-5 py-3 rounded-xl"
              >
                LinkedIn
              </a>

              <Suspense fallback={<Loader />}>
                <Resume />
              </Suspense>

            </div>
          </div>

        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl mb-10">Technical Stack</h2>

        <div className="flex justify-center gap-8 text-5xl text-gray-500">
          <FaLinux />
          <FaDocker />
          <FaAws />
          <SiKubernetes />
          <SiJenkins />
          <SiTerraform />
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 py-10 grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {SKILLS_DATA.map((skill, i) => (
          <a
            key={i}
            href={skill.link}
            target="_blank"
            className="bg-gray-900 p-4 rounded-xl text-center hover:border-cyan-500 border border-gray-800"
          >
            {skill.name}
          </a>
        ))}
      </section>

      {/* PROJECTS */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS_DATA.map((p, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl text-cyan-400 mb-2">{p.title}</h3>
              <p className="text-gray-400 mb-4">{p.desc}</p>
              <span className="text-sm text-gray-500">{p.tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER COMPONENTS (LAZY LOADED) */}
      <section className="border-t border-gray-800 py-20">
        <Suspense fallback={<Loader />}>
          <Pipeline />
        </Suspense>

        <Suspense fallback={<Loader />}>
          <HireMeSection />
        </Suspense>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500 border-t border-gray-800">
        © 2026 Faraz DevOps Portfolio
      </footer>

    </div>
  );
}