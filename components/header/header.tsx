import variables from '@/app/variables.module.scss';
import me from '@/public/images/me.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { IoBriefcase, IoCall, IoLocation, IoMail } from 'react-icons/io5';
import classes from './header.module.scss';

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
            <p>
              <IoBriefcase color={variables.primaryColor} />
              Software engineer at{' '}
              <a href='https://kotuko.it' target={'_blank'} rel={'noreferrer'}>
                Kotuko
              </a>
            </p>
          </Subtext>
          <Subtext>
            {' '}
            <p>
              <IoLocation
                color={variables.primaryColor}
                width={16}
                height={16}
              />
              Southern &#127470;&#127481;{' '}
            </p>
          </Subtext>
          <Subtext>
            {' '}
            <p>
              <IoCall color={variables.primaryColor} width={16} height={16} />
              <a href='tel:+39-334-257-5807'>+39 334 257 5807 </a>{' '}
            </p>
          </Subtext>
          <Subtext>
            {' '}
            <p>
              <IoMail color={variables.primaryColor} width={16} height={16} />
              <a href='mailto:jobs@sungvzer.com'>jobs@sungvzer.com</a>{' '}
            </p>
          </Subtext>
        </Subtexts>
      </header>
    </>
  );
}
