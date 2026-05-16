import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Resume() {
  const resumeRef = useRef(null);

  const downloadPDF = async () => {
    const element = resumeRef.current;
    if (!element) return;

    try {
      // 0.5 second ka delay taake text/fonts load ho jayein
      await new Promise((resolve) => setTimeout(resolve, 500));

      const canvas = await html2canvas(element, {
        scale: 2, 
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: false,
      });

      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF("p", "mm", "a4");

      const imgWidth = 210; 
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
      pdf.save("Faraz_Shabbir_DevOps_Resume.pdf");

    } catch (error) {
      console.error("PDF Error:", error);
      alert("PDF download mein masla aya, console check karein.");
    }
  };

  return (
    <>
      {/* 1. Ye Button aapke App.jsx (Hero Section) mein nazar ayega */}
      <button 
        onClick={downloadPDF}
        className="bg-green-500 hover:bg-green-400 px-6 py-3 rounded-2xl text-black font-bold transition flex items-center gap-2"
      >
        <span>Download Resume</span>
        {/* Simple Download Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      </button>

      {/* 2. Hidden Resume Container (Ye screen par show nahi hoga, sirf PDF ke liye hai) */}
      <div style={{ 
        position: "absolute", 
        top: "-10000px", 
        left: "-10000px",
        pointerEvents: "none"
      }}>
        <div 
          ref={resumeRef} 
          style={{ 
            background: "white", 
            color: "black", 
            width: "210mm", 
            padding: "40px",
            minHeight: "297mm",
            fontFamily: "Arial, sans-serif"
          }}
        >
          {/* --- Resume Header --- */}
          <div style={{ borderBottom: "2px solid #00bcd4", paddingBottom: "10px", marginBottom: "20px" }}>
            <h1 style={{ margin: "0", fontSize: "32px", color: "#333" }}>FARAZ SHABBIR</h1>
            <p style={{ margin: "5px 0", color: "#00bcd4", fontWeight: "bold" }}>
              DevOps Engineer | Cloud & Automation Enthusiast
            </p>
            <p style={{ fontSize: "12px", color: "#666" }}>
              Email: your-email@gmail.com | GitHub: github.com/farazii1159
            </p>
          </div>

          {/* --- Summary --- */}
          <h3>Professional Summary</h3>
          <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
            Computer Science student with a focus on DevOps practices. Experienced in automating 
            infrastructure using Terraform, containerizing applications with Docker, and 
            managing Linux servers.
          </p>

          {/* --- Skills --- */}
          <h3>Technical Skills</h3>
          <ul style={{ fontSize: "14px", lineHeight: "1.8" }}>
            <li><strong>OS:</strong> Linux (RHEL, Ubuntu, CentOS)</li>
            <li><strong>Cloud:</strong> AWS (EC2, S3, IAM)</li>
            <li><strong>Containers:</strong> Docker, Docker Compose</li>
            <li><strong>IaC & CI/CD:</strong> Terraform, GitHub Actions</li>
            <li><strong>Development:</strong> JavaScript, React.js, Shell Scripting</li>
          </ul>

          {/* --- Projects --- */}
          <h3>Key Projects</h3>
          <div style={{ marginBottom: "15px" }}>
            <p style={{ margin: "0", fontWeight: "bold" }}>1. Enterprise CI/CD Pipeline</p>
            <p style={{ margin: "5px 0", fontSize: "13px" }}>Built a fully automated pipeline using GitHub Actions and AWS.</p>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <p style={{ margin: "0", fontWeight: "bold" }}>2. Dockerized Microservices</p>
            <p style={{ margin: "5px 0", fontSize: "13px" }}>Deployed multi-container apps with automated Nginx reverse proxy.</p>
          </div>

          {/* --- Education --- */}
          <h3>Education</h3>
          <p style={{ fontSize: "14px" }}>
            <strong>Bachelor of Computer Science</strong> - Virtual University of Pakistan (In Progress)
          </p>
        </div>
      </div>
    </>
  );
}