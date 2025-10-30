"use client";
import { SITE } from "@/lib/siteData";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

// NOTE: metadata export is REMOVED from this file.

const LocationCard = ({ location, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative p-8 bg-white dark:bg-dark-muted rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
    
    <div className="relative">
      <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl mb-6 text-accent text-2xl">
        <FaMapMarkerAlt />
      </div>
      <h3 className="text-2xl font-bold text-primary dark:text-white mb-6 group-hover:text-accent transition-colors">
        {location.name.includes("LLC") ? "🇦🇪 UAE (Dubai)" : location.name.includes("Colombo") ? "🇱🇰 Sri Lanka (Colombo)" : "🇮🇳 India (Mumbai)"}
      </h3>
      <div className="space-y-4">
        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-accent/5 transition-colors">
          <FaMapMarkerAlt className="text-accent mt-1 flex-shrink-0 text-xl" />
          <p className="text-light-text/80 dark:text-dark-text/80 leading-relaxed">
            {location.address}
          </p>
        </div>
        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-accent/5 transition-colors">
          <FaPhone className="text-accent mt-1 flex-shrink-0 text-xl" />
          <div className="flex flex-col gap-2">
            {location.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="text-light-text/80 hover:text-accent dark:text-dark-text/80 dark:hover:text-accent font-medium transition-colors"
              >
                {phone}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function ContactClient() { // Renamed component
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
              <span className="text-accent font-semibold text-sm tracking-wide">GET IN TOUCH</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Reach out to our team for inquiries, quotes, or support. We're here to help 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 px-6 lg:px-12 -mt-16 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.a
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              href={`mailto:${SITE.email}?subject=Website%20Enquiry`}
              className="group p-8 bg-white dark:bg-dark-muted rounded-2xl shadow-2xl hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-sm text-light-text/60 dark:text-dark-text/60 mb-1">Email Us</div>
                  <div className="text-xl font-bold text-primary dark:text-white group-hover:text-accent transition-colors">
                    {SITE.email}
                  </div>
                </div>
              </div>
            </motion.a>

            <motion.a
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              href={`tel:${SITE.phoneSupport.replace(/\s/g, "")}`}
              className="group p-8 bg-white dark:bg-dark-muted rounded-2xl shadow-2xl hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                  <FaPhone />
                </div>
                <div>
                  <div className="text-sm text-light-text/60 dark:text-dark-text/60 mb-1">Call Us</div>
                  <div className="text-xl font-bold text-primary dark:text-white group-hover:text-accent transition-colors">
                    {SITE.phoneSupport}
                  </div>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              OUR LOCATIONS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">
              Find Us Worldwide
            </h2>
            <p className="text-xl text-light-text/70 dark:text-dark-text/70">
              With offices across three countries, we're always nearby
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <LocationCard location={SITE.locations.uae} index={0} />
            <LocationCard location={SITE.locations.sriLanka} index={1} />
            <LocationCard location={SITE.locations.india} index={2} />
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-7xl">
          <div className="h-96 bg-white dark:bg-dark-muted rounded-3xl shadow-2xl overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
              <div className="text-center">
                <FaMapMarkerAlt className="text-6xl text-accent mx-auto mb-4" />
                <p className="text-xl font-semibold text-primary dark:text-white">
                  Interactive Map Coming Soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}