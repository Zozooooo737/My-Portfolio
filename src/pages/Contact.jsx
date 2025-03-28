import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaDiscord, FaUniversity, FaInstagram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

// Composant Carte de Contact Principale
const ContactCard = ({ icon, title, value, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group block"
  >
    <div className="border-primary bg-background hover:bg-secondary rounded-lg border p-4 transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className="text-2xl">{icon}</div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-accent group-hover:underline">{value}</p>
        </div>
      </div>
    </div>
  </a>
);

// Composant Carte Réseaux Secondaires
const SmallContactCard = ({ icon, title, value }) => (
  <div className="bg-background flex items-center gap-3 rounded-lg border border-gray-700 p-3">
    <div className="text-primary text-xl">{icon}</div>
    <div>
      <p className="text-sm font-medium">{title}</p>
      <p className="text-xs text-gray-400">{value}</p>
    </div>
  </div>
);

const Contact = () => {
  return (
    <div className="bg-background/50 b text-text w-full px-50 pt-15 pb-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-primary mb-2 text-5xl font-bold">Contactez-moi</h1>
        <p className="mb-10 text-lg">
          Disponible pour des projets, des opportunités professionnelles ou des
          collaborations.
        </p>

        {/* Section Principale */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contacts Essentiels */}
          <div className="space-y-6">
            <h2 className="text-secondary text-2xl font-semibold">
              Coordonnées principales
            </h2>

            <ContactCard
              icon={<FiPhone className="text-primary" />}
              title="Téléphone"
              value="+33 6 11 46 33 37"
              link="tel:+33611463337"
            />

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
          <div className="space-y-6">
            <h2 className="text-secondary text-2xl font-semibold">
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

        {/* Réseaux Secondaires */}
        <div className="mt-12">
          <h2 className="text-secondary mb-4 text-xl font-semibold">
            Autres réseaux
          </h2>
          <div className="flex flex-wrap gap-4">
            <SmallContactCard
              icon={<FaDiscord />}
              title="Discord"
              value="zozooo737"
            />
            <SmallContactCard
              icon={<FaInstagram />}
              title="Instagram"
              value="@zozooo.737"
            />
          </div>
          <p className="mt-2 text-sm text-gray-400">
            Ces réseaux sont à usage personnel
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
