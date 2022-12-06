import { Resume } from '@/components/resume';
import classes from './home.module.scss';

export default function HomePage() {
  return (
    <>
      <main className={`${classes.outerBox} ${classes.container}`}>
        <Resume />
      </main>
    </>
  );
}
