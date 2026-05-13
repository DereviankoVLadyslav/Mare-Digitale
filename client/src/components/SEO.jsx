import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Mare Digitale';
const SITE_URL = 'https://maredigitale.com';

export default function SEO({ title, description, path = '' }) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Marketing that moves the tide`;
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
