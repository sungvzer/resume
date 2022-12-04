import {
  faBriefcase,
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import me from '@public/images/me.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import classes from './header.module.scss';

import variables from '../../app/variables.module.scss';

function Subtext(props: { children: ReactNode; first?: boolean }) {
  return (
    <span
      className={
        !props.first
          ? `${classes.withBorder} ${classes.subtext}`
          : classes.subtext
      }
    >
      {props.children}
    </span>
  );
}

function Subtexts(props: { children: ReactNode[] }) {
  return <section className={classes.subtexts}>{props.children}</section>;
}

export function Header() {
  return (
    <>
      <header className={classes.box}>
        <Link
          href={'https://blog.sungvzer.com'}
          title='Visit my blog'
          target={'_blank'}
          rel={'noreferrer'}
        >
          <Image
            className={classes.mePicture}
            src={me}
            alt='Picture of Salvatore looking left'
            placeholder='blur'
          />
        </Link>
        <h1 className={classes.title}>Salvatore Gargano</h1>

        {/* Subtexts */}
        <Subtexts>
          <Subtext first={true}>
            <FontAwesomeIcon
              icon={faBriefcase}
              color={variables.primaryColor}
            />
            Software engineer at{' '}
            <a href='https://kotuko.it' target={'_blank'} rel={'noreferrer'}>
              Kotuko
            </a>
          </Subtext>
          <Subtext>
            <FontAwesomeIcon
              icon={faLocationDot}
              color={variables.primaryColor}
            />
            Southern &#127470;&#127481;
          </Subtext>
          <Subtext>
            <FontAwesomeIcon icon={faPhone} color={variables.primaryColor} />
            <a href='tel:+39-334-257-5807'>+39 334 257 5807 </a>
          </Subtext>
          <Subtext>
            <FontAwesomeIcon icon={faEnvelope} color={variables.primaryColor} />
            <a href='mailto:jobs@sungvzer.com'>jobs@sungvzer.com</a>
          </Subtext>
        </Subtexts>
      </header>
    </>
  );
}
