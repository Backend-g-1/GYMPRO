import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { contactInfo } from "../../../data/contact";

const SOCIAL_COLORS = {
  Telegram: { bg: "#0088cc18", border: "#0088cc40", icon: "#0088cc" },
  Instagram: { bg: "#e4405f18", border: "#e4405f40", icon: "#e4405f" },
  YouTube: { bg: "#ff000018", border: "#ff000040", icon: "#ff0000" },
};

const SocialIcon = ({ name }) => {
  const color = SOCIAL_COLORS[name]?.icon || "#00E676";

  switch (name) {
    case "Telegram":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.127.087.669.087.669l-1.188 6.026s-.18.787-.698.787a1.12 1.12 0 0 1-.575-.16c-.007-.006-1.04-.684-1.955-1.23-.32-.19-.47-.278-.077-.542l2.576-2.122c.22-.182.448-.603-.243-.345l-3.95 2.49c-.204.125-.404.12-.404.12s-.614-.203-1.277-.38c-.312-.083-.314-.332.066-.515l5.423-3.16c.326-.19.65-.134.65-.134z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case "YouTube":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    default:
      return (
        <span className="text-sm font-bold text-[var(--text-secondary)]">
          {name.charAt(0)}
        </span>
      );
  }
};

const ContactInfo = () => {
  const items = [
    {
      icon: MapPin,
      label: contactInfo.address.label,
      lines: [contactInfo.address.line1, contactInfo.address.line2],
      color: "text-[#00E676]",
      bgColor: "bg-[#00E676]/10",
    },
    {
      icon: Phone,
      label: contactInfo.phone.label,
      lines: [contactInfo.phone.primary, contactInfo.phone.secondary],
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      icon: Mail,
      label: contactInfo.email.label,
      lines: [contactInfo.email.primary, contactInfo.email.secondary],
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
    {
      icon: Clock,
      label: contactInfo.hours.label,
      lines: [
        contactInfo.hours.weekdays,
        contactInfo.hours.saturday,
        contactInfo.hours.sunday,
      ],
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="space-y-5"
    >
      {items.map((item) => (
        <motion.div
          key={item.label}
          variants={itemAnim}
          className="rounded-3xl border border-[var(--border-glass)] bg-[var(--bg-glass)] p-6 backdrop-blur-xl glass-card"
        >
          <div className="flex items-start gap-4">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.bgColor}`}
            >
              <item.icon size={22} className={item.color} />
            </div>

            <div>
              <h4 className="font-semibold text-[var(--text-primary)]">
                {item.label}
              </h4>

              {item.lines.map((line, i) => (
                <p
                  key={i}
                  className={`${
                    i === 0 ? "mt-1" : ""
                  } text-sm text-[var(--text-secondary)]`}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Social Links */}
      <motion.div
        variants={itemAnim}
        className="rounded-3xl border border-[var(--border-glass)] bg-[var(--bg-glass)] p-6 backdrop-blur-xl glass-card"
      >
        <h4 className="font-semibold text-[var(--text-primary)]">
          Follow Us
        </h4>

        <div className="mt-4 flex gap-3">
          {contactInfo.social.map((s) => {
            const colors = SOCIAL_COLORS[s.name];
            return (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-200 hover:scale-110 hover:shadow-lg"
                style={{
                  backgroundColor: colors.bg,
                  borderColor: colors.border,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.icon;
                  e.currentTarget.style.boxShadow = `0 0 18px ${colors.icon}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.border;
                  e.currentTarget.style.boxShadow = "none";
                }}
                aria-label={s.name}
              >
                <SocialIcon name={s.name} />
              </a>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
