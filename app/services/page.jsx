"use client";
import { SITE } from "@/lib/siteData";
import { motion } from "framer-motion";
import { FaShip, FaAnchor, FaHardHat, FaSwimmer, FaGasPump, FaCheckCircle, FaArrowRight } from "react-icons/fa";

const icons = {
  FaShip: <FaShip />,
  FaAnchor: <FaAnchor />,
  FaHardHat: <FaHardHat />,
  FaSwimmer: <FaSwimmer />,
  FaGasPump: <FaGasPump />,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 lg:px-12 bg-gradient-to-br from-primary via-primary/95 to-accent overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] opacity-10" />
        <div className="container mx-auto max-w-7xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            >
              <span className="text-accent font-semibold text-sm tracking-wide">COMPREHENSIVE SOLUTIONS</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              From vessel management to specialized offshore services, we deliver excellence across all maritime operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12">
            {SITE.services.map((group, index) => (
              <motion.div
                key={group.group}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 md:p-12 bg-white dark:bg-dark-muted rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/5 to-transparent rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary/5 to-transparent rounded-full -ml-24 -mb-24 group-hover:scale-150 transition-transform duration-700" />

                  <div className="relative flex flex-col lg:flex-row gap-8 items-start">
                    {/* Icon Section */}
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-accent to-accent/70 rounded-2xl shadow-lg shadow-accent/30 text-white text-5xl"
                      >
                        {icons[group.icon]}
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6 group-hover:text-accent transition-colors">
                        {group.group}
                      </h2>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        {group.items.map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors"
                          >
                            <FaCheckCircle className="text-accent mt-1 flex-shrink-0" />
                            <span className="text-light-text/80 dark:text-dark-text/80 font-medium">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      <motion.button
                        whileHover={{ x: 5 }}
                        className="mt-6 inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                      >
                        Request Quote <FaArrowRight />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-12 bg-gradient-to-br from-primary to-accent rounded-3xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] opacity-10" />
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-xl text-gray-200 mb-8">
                We specialize in tailored offshore services. Let's discuss your specific requirements.
              </p>
              <a
                href={`mailto:${SITE.email}?subject=Custom%20Service%20Enquiry`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-semibold shadow-2xl hover:scale-105 transition-transform"
              >
                Get in Touch <FaArrowRight />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}