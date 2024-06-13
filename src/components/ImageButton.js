export default function ImageButton ({ logo, name, description, link }) {
return (
  <article class="colonne-img-button col col--6 margin-bottom--lg">
      <a class="card cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module card-img-button"
          href={link}>
          <img decoding="async" loading="lazy" src={logo} alt='logo' className="icone-img-button img_ev3q"></img>
          <div className="text-img-button">
              <h2 class="text--truncate cardTitle_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
                  title={name}>
                  {name}
              </h2>
              <p class="text--truncate cardDescription_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
                  title="Créateur de contenu et grand voyageur">
                  {description}
              </p>
          </div>
      </a>
  </article>
)};