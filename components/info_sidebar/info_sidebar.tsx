import Link from 'next/link';
import { IconType } from 'react-icons';
import {
  SiGithub,
  SiKeybase,
  SiLinkedin,
  SiReddit,
  SiTwitter,
} from 'react-icons/si';
import { UrlObject } from 'url';
import variables from '../../app/variables.module.scss';
import classes from './info_sidebar.module.scss';

interface InfoLinkProps {
  icon: IconType;
  href: string | UrlObject;
  label: string;
  color: string;
}

function InfoLink(props: InfoLinkProps) {
  return (
    <li>
      <props.icon
        className={classes.infoIcon}
        color={props.color}
        title={props.label}
      />
      <Link href={props.href} target={'_blank'} rel={'no-referrer'}>
        {props.label}
      </Link>
    </li>
  );
}

export function InfoSidebar() {
  return (
    <aside className={`${classes.information} `}>
      <h2>Links</h2>
      <ul>
        <InfoLink
          href={'https://reddit.com/u/UnknownSalvio'}
          icon={SiReddit}
          label={'Reddit'}
          color={'#FF5700'}
        />
        <InfoLink
          href={'https://twitter.com/unknownsalviog'}
          icon={SiTwitter}
          label={'Twitter'}
          color={'#1DA1F2'}
        />
        <InfoLink
          href={'https://keybase.io/salviog'}
          icon={SiKeybase}
          label={'Keybase'}
          color={'#33A0FF'}
        />
        <InfoLink
          href={'https://github.com/sungvzer'}
          icon={SiGithub}
          label={'Github'}
          color={variables.primaryColor}
        />
        <InfoLink
          href={'https://linkedin.com/in/sungvzer'}
          icon={SiLinkedin}
          label={'LinkedIn'}
          color={'#0A66C2'}
        />
      </ul>
    </aside>
  );
}
