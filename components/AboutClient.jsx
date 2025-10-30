"use client";
import { SITE } from "@/lib/siteData";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaAward, FaUsers, FaGlobe, FaShip } from "react-icons/fa";

// Note: The metadata export has been REMOVED from this file.

const stats = [
  { icon: <FaShip />, value: "500+", label: "Projects Completed" },
  { icon: <FaUsers />, value: "50+", label: "Expert Team Members" },
  { icon: <FaGlobe />, value: "3", label: "Countries Served" },
  { icon: <FaAward />, value: "ISO", label: "Certified Quality" },
];

export default function AboutClient() { // Renamed to avoid confusion
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/placeholders/service-ship.jpg"
            alt="Ship repair"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/80" />
        </div>

        <div className="container mx-auto max-w-5xl relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            >
              <span className="text-accent font-semibold text-sm tracking-wide">WHO WE ARE</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              About DPV Offshore
            </h1>
            <p className="text-2xl text-gray-200 leading-relaxed">
              {SITE.about}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 lg:px-12 -mt-16 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white dark:bg-dark-muted rounded-2xl shadow-2xl text-center hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl mb-4 text-accent text-3xl">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-primary dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-light-text/70 dark:text-dark-text/70 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                OUR MISSION
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-6">
                &ldquo;{SITE.aboutTagline}&rdquo;
              </h2>
              <p className="text-xl text-light-text/70 dark:text-dark-text/70 leading-relaxed mb-6">
                We are committed to delivering exceptional offshore and marine services that exceed industry standards. Our team of experienced professionals brings decades of expertise to every project.
              </p>
              <div className="space-y-4">
                {["Safety First", "Quality Assured", "Client Focused"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-accent rounded-full" />
                    </div>
                    <span className="text-lg font-semibold text-primary dark:text-white">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/assets/placeholders/service-ship.jpg"
                alt="Offshore operations"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              OUR VALUES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Excellence", desc: "Striving for the highest standards in every project we undertake" },
              { title: "Integrity", desc: "Building trust through transparent and ethical business practices" },
              { title: "Innovation", desc: "Embracing new technologies and methodologies for better solutions" }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white dark:bg-dark-muted rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-light-text/70 dark:text-dark-text/70">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}