import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const form = useRef();          

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_edbljty",
      "template_kms8m39",
      form.current,
      "5LcZrZwsQAJbFWFta"
    )
    .then(() => {
        alert("Message Sent Successfully ✅");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send ❌");
        console.log(error);
      }
    );
  };

  return (
    <section className="w-full min-h-screen bg-slate-900 flex items-center justify-center px-6 md:px-20 py-20">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          w-full max-w-3xl
          bg-white/10
          backdrop-blur-lg
          border border-white/20
          rounded-2xl
          shadow-2xl
          p-8 md:p-12
          text-white
        "
      >

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          <span className="text-cyan-400">Contact</span> Me
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">

          <div>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:ring-2 focus:ring-cyan-400 outline-none"
            />
          </div>

          <div>
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:ring-2 focus:ring-cyan-400 outline-none"
            />
          </div>

          <div>
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:ring-2 focus:ring-cyan-400 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition"
          >
            Send Message
          </button>

        </form>

      </motion.div>

    </section>
  );
};

export default Contact;