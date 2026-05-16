import { useState } from "react";

export default function HireMeSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:your.email@gmail.com?subject=Hire Me Request from ${formData.name}&body=
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="w-full py-16 px-6 bg-gray-900 text-white" id="contact">
      <h2 className="text-3xl font-bold text-center mb-10">
        Hire Me / Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-4 bg-gray-800 p-6 rounded-xl"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-700"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-700"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-700 h-32"
          required
        />

        <button
          type="submit"
          className="w-full bg-cyan-500 text-black font-bold py-3 rounded"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}