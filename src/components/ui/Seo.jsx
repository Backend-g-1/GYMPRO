import { Helmet } from "react-helmet-async";

const SITE_NAME = "GYMPRO";
const DEFAULT_DESC =
  "Transform your body and mind at GYMPRO. Expert trainers, modern equipment, and a supportive community to help you reach your fitness goals.";
const DEFAULT_KEYWORDS =
  "gym, fitness, training, yoga, workout, health, personal trainer, gympro";

const Seo = ({
  title,
  description = DEFAULT_DESC,
  keywords = DEFAULT_KEYWORDS,
  image = "/og-image.jpg",
  url,
}) => {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — Transform Your Body, Transform Your Life`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Seo;
