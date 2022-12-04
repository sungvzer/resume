import { capitalize } from '@utils/strings';
import { ReactNode } from 'react';
import classes from './resume.module.scss';

export interface ResumeSectionProps {
  title: string;
  children?: ReactNode | ReactNode[];
}

export function ResumeSection(props: ResumeSectionProps) {
  return (
    <>
      <section id={props.title.toLowerCase()}>
        <h2 className={classes.sectionHeader}>{capitalize(props.title)}</h2>
        {props.children}
      </section>
    </>
  );
}
