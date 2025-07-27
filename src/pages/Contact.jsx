import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaUniversity } from "react-icons/fa";
import { useState } from "react";

// Composant Carte de Contact Principale
const ContactCard = ({ icon, title, value, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group block"
  >
    <div className="border-primary bg-background hover:bg-secondary rounded-lg border p-4 transition-all duration-300 sm:p-6">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="text-xl sm:text-2xl">{icon}</div>
        <div>
          <h3 className="text-base font-medium sm:text-lg">{title}</h3>
          <p className="text-accent text-sm group-hover:underline sm:text-base">
            {value}
          </p>
        </div>
      </div>
    </div>
  </a>
);

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    const mailtoLink = `mailto:enzo.bottura137@gmail.com?subject=Message%20depuis%20le%20site&body=${encodeURIComponent(
      message,
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="text-text w-full px-4 py-10 sm:px-8 md:px-10 lg:px-20 xl:px-50 xl:pt-15 xl:pb-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-primary mb-2 text-3xl font-bold sm:text-4xl md:text-5xl">
          Contactez-moi
        </h1>
        <p className="mb-8 text-base sm:mb-10 sm:text-lg">
          Disponible pour des projets, des opportunités professionnelles ou des
          collaborations.
        </p>

        {/* Section Principale */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {/* Contacts Essentiels */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-secondary text-xl font-semibold sm:text-2xl">
              Coordonnées principales
            </h2>

            <ContactCard
              icon={<FiMail className="text-primary" />}
              title="Email Professionnel"
              value="enzo.bottura137@gmail.com"
              link="mailto:enzo.bottura137@gmail.com"
            />

            <ContactCard
              icon={<FaUniversity className="text-primary" />}
              title="Email Étudiant"
              value="enzo.bottura@edu.devinci.fr"
              link="mailto:enzo.bottura@edu.devinci.fr"
            />
          </div>

          {/* Réseaux Professionnels */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-secondary text-xl font-semibold sm:text-2xl">
              Réseaux professionnels
            </h2>

            <ContactCard
              icon={<FiGithub className="text-primary" />}
              title="GitHub"
              value="@Zozooooo737"
              link="https://github.com/Zozooooo737"
            />

            <ContactCard
              icon={<FiLinkedin className="text-primary" />}
              title="LinkedIn"
              value="Enzo BOTTURA"
              link="https://linkedin.com/in/enzo-bottura"
            />
          </div>
        </div>

        {/* Conclusion */}
        <p className="mx-auto mt-12 max-w-xl text-center text-xl font-semibold text-gray-200">
          N'hésitez pas à me contacter pour discuter de vos projets ou
          simplement échanger. Je suis à votre écoute !
        </p>
      </div>
    </div>
  );
};

export default Contact;
