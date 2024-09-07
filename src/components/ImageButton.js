import Link from "@docusaurus/Link";

export default function ImageButton ({ logo, name, description, link }) {
return (
  <article className="colonne-img-button img-button-col col col--6 margin-bottom--lg">
      <Link className="card cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module card-img-button"
          to={link}>
          <img decoding="async" loading="lazy" src={logo} alt='logo' className="icone-img-button img_ev3q"></img>
          <div className="text-img-button">
              <h2 className="text--truncate cardTitle_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
                  title={name}>
                  {name}
              </h2>
              <p className="text--truncate cardDescription_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
                  title={description}>
                  {description}
              </p>
          </div>
      </a>
  </article>
)};