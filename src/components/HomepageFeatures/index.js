import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Carousel from "../Carousel/Carousel"
import Link from '@docusaurus/Link';

const NewsList = [
  {
    title: 'Nouveau patch',
    img: 'https://cdn.ageofempires.com/aoe/wp-content/uploads/2024/03/S7-Patch-1920x1080-1-1080x608.webp',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
    url: '/docs/patch/patch-10.1.48',
  },
  {
    title: 'Mise à jour de la saison 7',
    img: 'https://cdn.ageofempires.com/aoe/wp-content/uploads/2024/03/S7-Spring-Tournies-Update-1920x1080-1-1080x608.webp',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
    url: '/docs/patch/update-10.0.576',
  },
  /*{
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  */
];

function News({ img, title, description, url }) {
  return (
    <Link className='newsBox' to={url}>
      <div className='news'>
        <img src={img} alt="placeholder" />
        <Heading as="h2">{title}</Heading>
        <div>
          <p>{description}</p>
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
          {/*
          <img src="https://cdn.ageofempires.com/aoe/wp-content/uploads/2024/03/S7-Patch-1920x1080-1-768x432.webp" alt="placeholder" />
          <img src="https://cdn.ageofempires.com/aoe/wp-content/uploads/2024/03/S7-Spring-Tournies-Update-1920x1080-1-1080x608.webp" alt="placeholder" />
          <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
  */}
          {NewsList.map((props, idx) => (
            <News key={idx} {...props} />
          ))}
        </Carousel>
      </div>

    </section>
  );
}
