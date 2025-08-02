import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Carousel from "../Carousel/Carousel";
import Link from "@docusaurus/Link";

const NewsList = [
    {
        title: "Le patch de mi saison 11",
        img: "/img/patch/patch-14.1.5602.png",
        description: <>Découvrer les changements de mi-saison 11!</>,
        url: "/patch/patch-14.1.5602",
    },
    {
        title: "Découvrez le tournoi Molière organisé par Historic Aliance Gaming",
        img: "/img/organisations/hag/moliere.png",
        description: <>Venez découvrir le dernier tournoi organisé par HAG</>,
        url: "/event/tournoi-moliere",
    },
    {
        title: "L'update de la saison 11",
        img: "https://cdn.ageofempires.com/aoe/wp-content/uploads/2025/06/TS_Update_1920x1080-1080x608.webp",
        description: <>Découvrer les futures changements de la saison 11!</>,
        url: "/patch/update-14.0.4963",
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
