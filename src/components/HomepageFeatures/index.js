import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Carousel from "../Carousel/Carousel"
import Link from '@docusaurus/Link';

const NewsList = [
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
  {
    title: 'FFA de conquérant',
    img: '/img/organisations/hag/FFA_2nd_Edition.png',
    description: (
      <>
        Retrouvez vos 8 champions favoris du FFA dans l'arène dans un combat épique.
      </>
    ),
    url: '/event/FFA-21-08',
  },
  {
    title: 'Le patch note de la saison 8',
    img: 'https://cdn.ageofempires.com/aoe/wp-content/uploads/2024/07/S8_Update_Banner-1-1080x608.webp',
    description: (
      <>
        Retrouvez toutes les nouveautés de la saison 8!
      </>
    ),
    url: '/patch/update-11.0.782',
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
