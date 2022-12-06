import { IoBook } from 'react-icons/io5';
import { SiGithub, SiKeybase, SiReddit, SiTwitter } from 'react-icons/si';
import classes from './mobile_footer.module.scss';

export function MobileFooter() {
  return (
    <footer className={classes.mobileFooter}>
      <ul className={classes.iconContainer}>
        <li>
          <a
            href={'https://reddit.com/u/UnknownSalvio'}
            target='_blank'
            rel='noreferrer'
          >
            <SiReddit />
          </a>
        </li>
        <li>
          <a
            href={'https://twitter.com/unknownsalviog'}
            target='_blank'
            rel='noreferrer'
          >
            <SiTwitter />
          </a>
        </li>
        <li>
          <a
            href={'https://github.com/sungvzer'}
            target='_blank'
            rel='noreferrer'
          >
            <SiGithub />
          </a>
        </li>
        <li>
          <a
            href={'https://blog.sungvzer.com'}
            target='_blank'
            rel='noreferrer'
          >
            <IoBook />
          </a>
        </li>
        <li>
          <a
            href={'https://keybase.io/salviog'}
            target='_blank'
            rel='noreferrer'
          >
            <SiKeybase />
          </a>
        </li>
      </ul>
    </footer>
  );
}
