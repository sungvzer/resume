import { Oswald, Source_Sans_Pro } from '@next/font/google';
import '../styles/globals.scss';

const oswaldFont = Oswald({ variable: '--font-oswald', subsets: ['latin'] });
const sourceSansProFont = Source_Sans_Pro({
  variable: '--font-source-sans-pro',
  subsets: ['latin'],
  weight: ['400', '600'],
});

const fonts = {
  Oswald: oswaldFont,
  SourceSansPro: sourceSansProFont,
};

export default fonts;
