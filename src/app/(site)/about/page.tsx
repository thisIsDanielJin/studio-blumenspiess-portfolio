import Link from "next/link";
import { cvEntries, contactInfo } from "@/app/data/about";
import styles from "./About.module.scss";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.heading}>cv &#10033;</h1>
        <div className={styles.cvList}>
          {cvEntries.map((entry, i) => (
            <div key={i} className={styles.cvEntry}>
              <p className={styles.cvTitle}>
                {entry.title}, {entry.location}, {entry.year}.
                {entry.partner && ` In cooperation with ${entry.partner}.`}
                {entry.collaborators && ` With ${entry.collaborators.join(", ")}.`}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.right}>
        <h1 className={styles.heading}>about &#10033;</h1>
        <div className={styles.contactBlock}>
          <p>{contactInfo.studioName}</p>
          <p>{contactInfo.address.street}</p>
          <p>{contactInfo.address.zip} {contactInfo.address.city}</p>
          <p>{contactInfo.address.country}</p>
        </div>

        <div className={styles.contactBlock}>
          <p>{contactInfo.email}</p>
          <p>Tel.: {contactInfo.phone}</p>
          <p>
            <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </p>
        </div>

        <div className={styles.contactBlock}>
          <p className={styles.label}>team:</p>
          {contactInfo.team.map((member) => (
            <p key={member}>{member}</p>
          ))}
        </div>

        <div className={styles.contactBlock}>
          <Link href="/about/imprint" className={styles.link}>
            Imprint
          </Link>
          <br />
          <Link href="/about/datenschutz" className={styles.link}>
            Datenschutz
          </Link>
        </div>
      </div>
    </div>
  );
}
