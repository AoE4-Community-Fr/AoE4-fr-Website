import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Carousel from "../Carousel/Carousel"
import Link from '@docusaurus/Link';

const NewsList = [
  {
    title: 'FFA de conquérant',
    img: '/img/organisations/hag/Affiche_FFA_1.png',
    description: (
      <>
        FFA casté par HAG, où participe des joueurs de haut niveau
      </>
    ),
    url: '/event/FFA-20-juin',
  },
  {
    title: 'Un coup d\'œil sur le programme de HAG',
    img: '/img/organisations/hag/Teasing_3_events.png',
    description: (
      <>
        Teasing de ce qui se prépare au mois de juin et de juillet
      </>
    ),
    url: '/event/anonce-hag-event-juin-juillet',
  },
  {
    title: 'Nouveau patch',
    img: 'https://cdn.ageofempires.com/aoe/wp-content/uploads/2024/03/S7-Patch-1920x1080-1-1080x608.webp',
    description: (
      <>
        Un nouveau correctif est sorti résolvant des bugs et des correction d'équilibrage.
      </>
    ),
    url: '/patch/patch-10.1.48',
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
      <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 0, marginBottom: 64 }}>
        <Carousel>
          {NewsList.map((props, idx) => (
            <News key={idx} {...props} />
          ))}
        </Carousel>
      </div>

    </section>
  );
}
