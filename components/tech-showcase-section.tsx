"use client"

import { motion } from "framer-motion"
import { MarqueeGallery } from "./marquee-gallery"

export function TechShowcaseSection() {
  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-b from-black via-purple-900/10 to-black"> {/* Adjusted vertical padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Added responsive horizontal padding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12" // Adjusted bottom margin
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-4"> {/* Adjusted font size for smaller screens */}
            Explore Our Tech Stack
          </h2>
          <p className="text-white/60 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base px-2"> {/* Adjusted max-width and text size */}
            Discover the cutting-edge technologies and frameworks we use to build innovative solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* MarqueeGallery is assumed to be responsive internally */}
          <MarqueeGallery />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 md:mt-12 text-center text-sm sm:text-base" // Adjusted top margin and text size
        >
          <p className="text-white/60">
            Hover over the cards to learn more about each technology
          </p>
        </motion.div>
      </div>
    </section>
  )
}