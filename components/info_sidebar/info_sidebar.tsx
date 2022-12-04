import {
  faGithub,
  faKeybase,
  faReddit,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faBlog, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { UrlObject } from 'url';
import variables from '../../app/variables.module.scss';
import classes from './info_sidebar.module.scss';

interface InfoLinkProps {
  icon: IconDefinition;
  href: string | UrlObject;
  label: string;
  color: string;
}

function InfoLink(props: InfoLinkProps) {
  return (
    <li>
      <FontAwesomeIcon
        className={classes.infoIcon}
        icon={props.icon}
        color={props.color}
        size={'xl'}
      />
      <Link href={props.href} target={'_blank'} rel={'no-referrer'}>
        {props.label}
      </Link>
    </li>
  );
}

export function InfoSidebar() {
  return (
    <section className={`${classes.information} `}>
      <h2>Links</h2>
      <ul>
        <InfoLink
          href={'https://reddit.com/u/UnknownSalvio'}
          icon={faReddit}
          label={'Reddit'}
          color={'#FF5700'}
        />
        <InfoLink
          href={'https://twitter.com/unknownsalviog'}
          icon={faTwitter}
          label={'Twitter'}
          color={'#1DA1F2'}
        />
        <InfoLink
          href={'https://github.com/sungvzer'}
          icon={faGithub}
          label={'Github'}
          color={variables.primaryColor}
        />
        <InfoLink
          href={'https://blog.sungvzer.com'}
          icon={faBlog}
          label={'Blog'}
          color={variables.primaryColor}
        />
        <InfoLink
          href={'https://keybase.io/salviog'}
          icon={faKeybase}
          label={'Keybase'}
          color={variables.primaryColor}
        />
      </ul>
    </section>
  );
}
