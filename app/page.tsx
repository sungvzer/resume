import { InfoSidebar } from '@components/info_sidebar';
import { Resume } from '@components/resume';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import classes from './home.module.scss';
config.autoAddCss = false;

export default function HomePage() {
  return (
    <>
      <main className={`${classes.outerBox} ${classes.container}`}>
        <InfoSidebar />
        <Resume />
      </main>
    </>
  );
}
