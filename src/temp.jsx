import { motion } from "framer-motion";

export default function Pipeline() {
  const steps = [
    "Code Push to GitHub",
    "GitHub Actions Trigger",
    "Build Docker Image",
    "Run Tests",
    "Deploy to AWS EC2",
    "Live Production 🚀"
  ];

  return (
    <div className="max-w-4xl mx-auto py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">
        CI/CD Pipeline Flow
      </h2>

      <div className="flex flex-col gap-4">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-gray-900 border border-gray-800 p-4 rounded-xl"
          >
            {step}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
