import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Carousel from "../Carousel/Carousel"
import Link from '@docusaurus/Link';

const NewsList = [
  {
    title: 'Le patch de la saison 9 preview',
    img: 'https://cdn.discordapp.com/attachments/585568729333760002/1285630704457351218/S8_PUP_1920x1080.png?ex=66eaf865&is=66e9a6e5&hm=3d9d2e03990ea6bd09ee5c44bd4d33cbd96d21549a812be6e8aad462a8eb0af3&',
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
