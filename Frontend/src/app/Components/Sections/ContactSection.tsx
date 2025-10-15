import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="w-full py-8 text-center">
      <h2 className="text-3xl font-bold mb-2 text-[var(--teal-darker)]">
        Contact Us
      </h2>
      <p className="text-gray-600 mb-1">Email: contact@talentnest.com</p>
      <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
    </section>
  );
};

export default ContactSection;
