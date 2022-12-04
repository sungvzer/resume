import {
  faGithub,
  faKeybase,
  faReddit,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            <FontAwesomeIcon icon={faReddit} />
          </a>
        </li>
        <li>
          <a
            href={'https://twitter.com/unknownsalviog'}
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a
            href={'https://github.com/sungvzer'}
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href={'https://blog.sungvzer.com'}
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faBlog} />
          </a>
        </li>
        <li>
          <a
            href={'https://keybase.io/salviog'}
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faKeybase} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
