import clsx from 'clsx';
import Link from "@docusaurus/Link";
import styles from './styles.module.css';

export default function ImageButton ({ logo, name, description, link }) {
return (
  <article className={clsx(styles.imgButtonCol,"col col--6 margin-bottom--lg")}>
      <Link className={clsx(styles.cardImgButton, "card cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module")}
          to={link}>
          <img decoding="async" loading="lazy" src={logo} alt='logo' className={clsx(styles.iconeImgButton, "img_ev3q")}></img>
          <div className={styles.textImgButton}>
              <h2 className="text--truncate cardTitle_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
                  title={name}>
                  {name}
              </h2>
              <p className="text--truncate cardDescription_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
                  title={description}>
                  {description}
              </p>
          </div>
      </Link>
  </article>
)};