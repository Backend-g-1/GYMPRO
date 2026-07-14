const SectionTitle = ({ badge, title, description }) => {
  return (
    <div className="mb-12 text-center">
      {badge && (
        <span
          className="
            inline-flex
            rounded-full
            border
            border-[#00E676]/30
            bg-[#00E676]/10
            px-4
            py-1
            text-sm
            text-[#00E676]
          "
        >
          {badge}
        </span>
      )}

      <h2 className="mt-4 text-4xl font-bold text-[var(--text-primary)]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
