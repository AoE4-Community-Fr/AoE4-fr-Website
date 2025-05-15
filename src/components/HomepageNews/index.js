import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Carousel from "../Carousel/Carousel"
import Link from '@docusaurus/Link';

const NewsList = [
  {
    title: 'Le patch de mi saison 10',
    img: 'https://cdn.ageofempires.com/aoe/wp-content/uploads/2025/05/RTR_Patch_1920x1080-1813x1020.webp',
    description: (
      <>
        Découvrer les changements de mi-saison 10!
      </>
    ),
    url: '/patch/patch-13.2.4553',
  },
  {
    title: 'Le patch de la saison 9 preview',
    img: '/img/patch/public-update-preview-s9.png',
    description: (
      <>
        Retrouvez toutes les nouveautés de la saison 9!
      </>
    ),
    url: '/patch/public-update-preview-s9',
  },
  {
    title: 'Le patch de mi-saison',
    img: 'https://cdn.ageofempires.com/aoe/wp-content/uploads/2024/08/Season_Eight_Patch_Banner_1920x1080-1080x608.webp',
    description: (
      <>
        Retrouvez toutes les nouveautés de mi-saison et le retour des monstres !
      </>
    ),
    url: '/patch/patch-11.1.1201',
  },
];

function News({ img, title, description, url }) {
  return (
    <Link className={styles.newsBox} to={url}>
      <article>
        <img src={img} alt="placeholder" className={styles.imgNews} />
        <div className={styles.textNews}>
          <Heading as="h2">{title}</Heading>
          <p className={styles.subtextNews}>{description}</p>
        </div>
      </article>
    </Link>
  );
}

export default function HomepageNews() {
  return (
    <section className={styles.newsContainers}>
      <div className={styles.newsList}>
        <Carousel>
          {NewsList.map((props, idx) => (
            <News key={idx} {...props} />
          ))}
        </Carousel>
      </div>

    </section>
  );
}
