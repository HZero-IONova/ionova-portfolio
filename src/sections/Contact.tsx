"use client";

import { motion } from "framer-motion"; // ✅ corregido
import grainImage from "@/assets/images/grain.jpg";
import { Form } from "@/components/Form"; // ✅ asegúrate de que el path sea correcto

import { fadeIn } from "@/components/variants";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="container"
      >
        {/* CTA superior */}
        <div
          className="bg-gradient-to-r from-magenta to-accent text-dark rounded-3xl relative overflow-hidden z-0 px-10 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-16"
          style={{ minHeight: "380px" }}
        >
          {/* Grain texture */}
          <div
            className="absolute inset-0 opacity-5 -z-10 rounded-3xl"
            style={{
              backgroundImage: `url(${grainImage.src})`,
              backgroundRepeat: "repeat",
              backgroundSize: "auto",
            }}
          ></div>

          {/* Texto + botón */}
          <div className="w-full md:w-1/2 max-w-md text-center md:text-left flex flex-col gap-4">
            <motion.h2
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="font-secondary text-2xl md:text-3xl"
            >
              Let's create something amazing together
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="text-sm md:text-base"
            >
              Ready to bring your next project to life? Let's connect and
              discuss how I can help you achieve your goals.
            </motion.p>
          </div>
          {/* Formulario */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Form />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
