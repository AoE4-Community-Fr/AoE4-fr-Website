import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Carousel from "../Carousel/Carousel"
import Link from '@docusaurus/Link';

const NewsList = [
  {
    title: 'M8 Marinelord vs Wam01',
    img: '/img/hag/MLvsWAM-12-05-2024.png',
    description: (
      <>
        Duel au sommet entre deux des meilleurs joueurs du monde.
      </>
    ),
    url: '/blog/ml-vs-wam-12-05-2024',
  },
  {
    title: 'Nouveau patch',
    img: 'https://cdn.ageofempires.com/aoe/wp-content/uploads/2024/03/S7-Patch-1920x1080-1-1080x608.webp',
    description: (
      <>
        Un nouveau correctif est sorti résolvant des bugs et des correction d'équilibrage.
      </>
    ),
    url: '/docs/patch/patch-10.1.48',
  },
  {
    title: 'Mise à jour de la saison 7',
    img: 'https://cdn.ageofempires.com/aoe/wp-content/uploads/2024/03/S7-Spring-Tournies-Update-1920x1080-1-1080x608.webp',
    description: (
      <>
        Le patch de la saison 7 est sorti avec du nouveau contenu et des changements d'équilibrage
      </>
    ),
    url: '/docs/patch/update-10.0.576',
  },
];

function News({ img, title, description, url }) {
  return (
    <Link className='newsBox' to={url}>
      <div className='news'>
        <img src={img} alt="placeholder" className='img-news'/>
        <div className='text-news'>
          <Heading as="h2">{title}</Heading>
          <p className='subtext-news'>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64, marginBottom: 64 }}>
        <Carousel>
          {NewsList.map((props, idx) => (
            <News key={idx} {...props} />
          ))}
        </Carousel>
      </div>

    </section>
  );
}
