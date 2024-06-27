import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Carousel from "../Carousel/Carousel"
import Link from '@docusaurus/Link';

const NewsList = [
  {
    title: '2v2 Elyona & Jeando VS Valdemar & Lyralia',
    img: '/img/organisations/hag/2v2-28-juin.jpg',
    description: (
      <>
        L'affrontement qui mix streamers et joueurs semi-pro
      </>
    ),
    url: '/event/2v2-28-Juin',
  },
  {
    title: 'Tournoi FFA avec le mod Battleground',
    img: '/img/organisations/battleground/FFA.png',
    description: (
      <>
        Un tournoi au format FFA avec le mod Battleground
      </>
    ),
    url: '/event/FFA-Battlegrounds',
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
  }
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
