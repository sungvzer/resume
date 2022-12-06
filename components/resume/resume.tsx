import { IoCalendarNumber, IoSchool } from 'react-icons/io5';
import classes from './resume.module.scss';
import { ResumeSection } from './resume_section';
export function Resume() {
  return (
    <section className={classes.resume}>
      <h1 className={classes.resumeTitle}>Resume</h1>
      <ResumeSection title='profile'>
        <p className={classes.sectionBody}>
          Resourceful and dedicated undergraduate student with great analytical
          skills and a commitment to providing great user experiences through
          software.
        </p>
        <p className={classes.sectionBody}>
          Previous experiences as a full-stack Software Engineer, as well as
          writing and contributing to open-source projects following software
          architecture best practices.
        </p>
      </ResumeSection>
      <ResumeSection title='education'>
        <article>
          <h3 className={classes.articleHeader}>
            Graduating in Computer Science
          </h3>

          <p className={classes.articleSubheader}>
            <IoSchool />
            Università degli studi di Napoli &laquo;Parthenope&raquo;
          </p>
          <p className={classes.articleSubheader}>
            <IoCalendarNumber />
            <time dateTime='2022-09-01'>September 2022</time> — Ongoing
          </p>
          <p className={classes.sectionBody}>
            I began this journey to expand my knowledge about computer science
            and its infinite nuances with the goal of applying new concepts and
            perspectives in my everyday work.
          </p>
        </article>
        <article>
          <h3 className={classes.articleHeader}>
            Technical Institute Degree in Computer Science
          </h3>
          <p className={classes.articleSubheader}>
            <IoSchool />
            I.T.I.S. G. Ferraris
          </p>
          <p className={classes.articleSubheader}>
            <IoCalendarNumber />
            <time dateTime='2016-09-01'>September 2016</time> —{' '}
            <time dateTime='2021-06-01'>June 2021</time>
          </p>
          <p className={classes.sectionBody}>
            Graduated with honors (100/100), I initiated numerous networks with
            colleagues and teachers, implementing and creating new software
            ideas and concepts.
          </p>
          <p className={classes.sectionBody}>
            Technical subjects included Systems and Networks, Programming and
            Telecommunications.
          </p>
          <p className={classes.sectionBody}>
            During this time I consolidated my passion for computer science and
            photography.
          </p>
          <p className={classes.sectionBody}>
            I was able to learn and explore many languages and technologies, but
            most importantly the mental and attitudinal processes that are the
            foundation of this field.
          </p>
        </article>
      </ResumeSection>
    </section>
  );
}
