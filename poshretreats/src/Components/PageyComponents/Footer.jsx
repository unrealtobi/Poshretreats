import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import {
  FaTelegram,
  FaTiktok,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

const protectionLogos = [
  { src: "/atol-protected-12564.png", alt: "ATOL Protected 12564", frameClassName: "h-10 w-10 md:h-12 md:w-12", imageClassName: "h-20 w-20 md:h-24 md:w-24" },
  { src: "/pts-member-6090.png", alt: "PTS member 6090", frameClassName: "h-10 w-24 md:h-12 md:w-28", imageClassName: "h-[105px] w-[105px] md:h-[126px] md:w-[126px]" },
  { src: "/jlt-group.png", alt: "Powered by JLT Group", frameClassName: "h-10 w-40 md:h-12 md:w-48", imageClassName: "h-[187px] w-[187px] md:h-[224px] md:w-[224px]" },
];

const socialLinks = [
  { href: "https://www.tiktok.com/@posh.retreats?_t=8jfaklTKkdc&_r=1", label: "TikTok", icon: <FaTiktok /> },
  { href: "https://www.instagram.com/poshretreats?igsh=MWx4YW1tdHJhM2F2cA%3D%3D&utm_source=qr", label: "Instagram", icon: <FaInstagram /> },
  { href: "https://x.com/posh_retreats?s=21&t=X9eCifkrm07k0kzt6mXLUA", label: "X", icon: <FaXTwitter /> },
  { href: "https://www.facebook.com/poshretreats", label: "Facebook", icon: <RiFacebookFill /> },
  { href: "https://chat.whatsapp.com/L6CSZncHQeZ5qo6FTp3r3l", label: "WhatsApp", icon: <FaWhatsapp /> },
  { href: "https://t.me/+4oQ_bukN3r8wNjRk", label: "Telegram", icon: <FaTelegram /> },
];

const Footer = () => {
  return (
    <footer className="relative isolate w-full overflow-hidden bg-[url('/footerpic.jpeg')] bg-cover bg-center text-white">
      <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true" />

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-14 text-center sm:px-10 sm:py-16 md:px-12 md:py-20">
        <h2 className="font-raleway text-3xl font-semibold sm:text-4xl md:text-4xl">
          Start Your Journey with Us
        </h2>

        <p className="mt-10 font-raleway text-5xl font-bold tracking-[0.08em] sm:text-7xl md:mt-12 md:text-8xl lg:text-9xl">
          POSH RETREATS
        </p>

        <nav aria-label="Legal" className="mt-7 flex items-center text-sm text-gray-200">
          <a href="/termsandconditions" className="underline transition duration-300 hover:text-white">
            Terms &amp; Conditions
          </a>
          <span className="mx-2" aria-hidden="true">|</span>
          <a href="/privacy-policy" className="underline transition duration-300 hover:text-white">
            Privacy Policy
          </a>
        </nav>

        <section aria-labelledby="footer-protection-title" className="mt-5 max-w-3xl">
          <h3 id="footer-protection-title" className="font-raleway text-sm font-semibold">
            Travel with Confidence
          </h3>
          <p className="mt-2 font-raleway text-sm font-medium text-white">
            Exceptional journeys, protected every step of the way.
          </p>
          <p className="mt-3 font-roboto text-sm leading-6 text-gray-200">
            Your booking is protected through ATOL and Protected Trust Services
            (PTS), giving you greater peace of mind from the moment you book to
            the moment you return.
          </p>
          <p className="mt-1 font-roboto text-sm leading-6 text-gray-200">
            Protection varies by booking and will be confirmed before you travel.
          </p>
        </section>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 md:gap-x-8">
          {protectionLogos.map((logo) => (
            <div
              key={logo.src}
              className={`${logo.frameClassName} flex shrink-0 items-center justify-center overflow-hidden`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${logo.imageClassName} max-w-none shrink-0 object-contain`}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-5 text-xl">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-opacity hover:opacity-75"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
