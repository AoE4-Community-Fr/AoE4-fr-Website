import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageNews from '@site/src/components/HomepageNews';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import DiscordLogo from '../components/DiscordLogo';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={clsx(styles.buttons, 'centered-element')}>
          <Link
            className="button button--secondary button--lg"
            to="https://discord.com/invite/56JC8MH7qN">

            {/* <img src="/img/discord-logo.png" alt="Discord" width="50vw" />*/}
            <DiscordLogo />
            <b>Le discord</b>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Accueil`}
      description="Le site de la communauté Age of Empires IV France">
      <HomepageHeader />
      <main>
        <HomepageNews />
      </main>
    </Layout>
  );
}
