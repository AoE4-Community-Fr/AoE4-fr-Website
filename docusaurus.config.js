// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Age of Empire IV : Communauté Française',
  tagline: 'Le site d\'actu sur Age of Empire IV en français',
  favicon: 'img/AoE4.ico',

  // Set the production url of your site here
  url: 'https://aoe4-community-fr.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/AoE4-fr-Website/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AoE4-Community-Fr', // Usually your GitHub org/user name.
  projectName: 'AoE4-fr-Website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/AoE4-Community-Fr/AoE4-fr-Website/blob/master',
        },
        /*blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },*/
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/AoE_share_card.png',
      description: '',
      navbar: {
        title: 'AoE IV : France',
        logo: {
          alt: 'Logo AoE4',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Patch',
          },
          {
            href: 'https://discord.com/invite/56JC8MH7qN',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Ressources',
            items: [
              {
                label: 'Patch',
                to: '/docs/patch-10.1.48',
              },
            ],
          },
          {
            title: 'Communauté',
            items: [
              /* {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              }, */
              {
                label: 'Discord',
                href: 'https://discord.com/invite/56JC8MH7qN',
              },
              /* {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              }, */
            ],
          },
          {
            title: 'Plus',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/AoE4-Community-Fr/AoE4-fr-Website',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AoE4-fr-Website, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
