import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiExpo,
  SiFirebase,
  SiNodedotjs,
  SiGithub,
  SiMapbox,
  SiPhp,
  SiMysql,
  SiFigma,
} from 'react-icons/si';
import {
  LuPalette,
  LuNetwork,
  LuDatabase,
  LuSmartphone,
  LuServer,
  LuGauge,
  LuCode,
  LuLayers,
} from 'react-icons/lu';

/**
 * Single lookup for every technology / service glyph used on the site.
 * `data/site.js` refers to these by their string key.
 */
const ICONS = {
  react: SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  expo: SiExpo,
  firebase: SiFirebase,
  node: SiNodedotjs,
  github: SiGithub,
  mapbox: SiMapbox,
  php: SiPhp,
  mysql: SiMysql,
  database: SiMysql,
  figma: SiFigma,
  palette: LuPalette,
  api: LuNetwork,
  db: LuDatabase,
  phone: LuSmartphone,
  server: LuServer,
  gauge: LuGauge,
  code: LuCode,
  layers: LuLayers,
};

export default function TechIcon({ name, className = '', ...props }) {
  const Icon = ICONS[name] ?? LuCode;
  return <Icon className={className} aria-hidden="true" {...props} />;
}

export { ICONS };
