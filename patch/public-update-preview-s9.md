# Preview de la Saison 9

![image bannière](https://cdn.discordapp.com/attachments/585568729333760002/1285630704457351218/S8_PUP_1920x1080.png?ex=66eaf865&is=66e9a6e5&hm=3d9d2e03990ea6bd09ee5c44bd4d33cbd96d21549a812be6e8aad462a8eb0af3&)

<!-- truncate -->

## Nouvelles fonctionnalités

### Pause multijoueur

Il est désormais possible de mettre le jeu en pause pendant un match multijoueur.

N'importe quel joueur peut faire une pause à tout moment, mais chaque joueur dispose d'un nombre limité de pauses par match. Tous les joueurs ont la possibilité de reprendre le jeu après une brève interruption.

:::note[Remarque]
Cette fonctionnalité est encore en cours de développement ; il est donc possible que vous rencontriez des bogues, des problèmes de performance, etc. N'hésitez pas à nous en faire part dans les forums !
:::

## Cartes
Deux nouvelles cartes passionnantes ont été ajoutées : 

* Atacama : Même les chefs de guerre les plus puissants seront mis à l'épreuve par les conditions difficiles et exposées du désert d'Atacama.

* Bord du lac : Un lac repose dans le berceau d'une région montagneuse. Sur les hauteurs de chaque côté du lac, différentes factions se préparent à un conflit inévitable.

## Corrections de bugs

* Correction d'un problème à cause duquel les Trébuchets anglais attaquaient plus lentement après la recherche de la technologie des projectiles dispersés.
* Correction d'un problème qui faisait que l'entrepôt japonais de Kura était sélectionné avec le raccourci « Sélectionner tous les avant-postes ».
* Les aqueducs byzantins n'ont plus la capacité « convertir en porte de palissade » lorsqu'ils sont en construction.
* L'indicateur de population ne change plus pendant une seule image lors de la construction d'un siège sur le terrain avec de l'infanterie. 
* Correction d'un exploit pour Rus où l'or des mines d'or pouvait être converti en prime.
* La prime est affichée sur l'interface utilisateur du villageois avec une icône différente.
* Les fonctionnaires impériaux chinois n'annulent plus les commandes des joueurs qui sont émises exactement à la première image après que le fonctionnaire ait choisi automatiquement un dépôt de taxe, alors qu'il est en état d'inactivité et que sa capacité de taxation est maximale.

## Gameplay

### Projectiles mis à jour :

Les projectiles des flèches ont été mis à jour pour avoir des trajectoires plus douces et plus naturelles.
* La différence de hauteur entre deux unités est désormais prise en compte dans le calcul des arcs de trajectoire.
    - La trajectoire devrait être plus « naturelle », c'est-à-dire que les archers sur un mur ou sur une haute falaise ne visent plus vers le haut même si la cible est très proche.
* Les trajectoires des donjons et des avant-postes sont plus fluides lorsqu'elles ciblent des unités situées en dessous.
* Les flèches ne se téléportent plus pour trouver la cible sur la dernière image.
    - Cela était particulièrement visible si l'unité mourait pendant le vol de la flèche.
* Les unités ne tirent plus de projectiles sur les unités dans leur animation de mort.


### Nouveaux graphiques post-jeu ajoutés :

Inclut : Total des ressources collectées, Total de la nourriture collectée, Total du bois collecté, Total de l'or collecté et Total des pierres collectées. 


### Pause multijoueur :

Les lobbies personnalisés ont désormais la possibilité d'autoriser les joueurs à mettre la partie en pause.
* Chaque joueur disposera de 5 pauses qu'il pourra utiliser tout au long de la partie.
* Tous les joueurs ont la possibilité de reprendre la partie après une brève pause.


## Gameplay du Siege

:::info[Présentation des développeurs]
Notre objectif avec la mise à jour de siège est de ralentir le combat siège contre siège en supprimant le rôle anti-siège des Springalds et des Culverins et en augmentant le temps de mise à mort pour de nombreuses interactions de siège. Grâce à ces ajustements, gagner la bataille de siège sur la ligne arrière signifie désormais que vous disposez d'outils efficaces pour pousser sur le terrain. En outre, des ajustements à la durabilité des sièges ont été effectués dans tous les domaines afin d'ajuster les interactions entre les unités et les sièges. En particulier, les unités à distance ne tireront plus un seul coup ou ne tueront plus jamais les armes de siège, mais infligeront des dégâts plus réguliers à tous les sièges. Les changements de haut niveau sont présentés ci-dessous, suivis de la liste détaillée des changements.
:::

* Les espringales sont passés d'un rôle anti-siège à un rôle d'infanterie anti-mêlée avec des projectiles spéciaux qui transpercent leur cible et traversent les formations ennemies pour un effet dévastateur.

* Les Culverins ont été retravaillés pour passer d'un rôle anti-siège à un rôle unique de remplacement de la bombarde pour plusieurs civilisations.

* L'armure de tous les engins de siège a été modifiée, passant d'une armure à distance à une réduction des dégâts à distance (appelée résistance à distance).

    - Les Béliers et tours de siège réduisent les dégâts distants de 95 %.
    - Les bombardes, canons et coulevrines réduisent les dégâts distants de 85 %.
    - Les trébuchets réduisent les dégâts ditants de 80 %.
    - Les mangonneaux et les nids d'abeilles réduisent les dégâts distant de 75%. 
    - Les espringales réduisent les dégâts à distance entrants de 60%.
    - Les ribauldequins réduisent les dégâts à distance entrants de 35%.


### Ajustements du siège type Bombarde :

#### Bombarde

* Santé réduite de 240 à 210.
* Armure à distance remplacée par une résistance à distance de 85 %.
* Dégâts de base réduits de 100 à 50.
* Gagne un bonus de +50 points de dégâts contre l'infanterie.


#### Coulevrine
Unité retravaillée en une bombarde de remplacement unique pour plusieurs civilisations qui tire plus vite, a une portée supplémentaire et inflige moins de dégâts que les bombardes standard.

* Coût réduit de 400 bois 600 or à 325 bois 450 or.
* Santé réduite de 220 à 200.
* L'armure à distance est remplacée par une résistance à distance de 85 %.
* Les dégâts de base sont réduits de 85 à 40.
* Gagne +230 points de dégâts bonus contre les bâtiments et les navires.
* Gain de +40 points de dégâts bonus contre l'infanterie.
* Suppression du bonus de dégâts contre le siège. 
* Temps de recharge augmenté (vitesse d'attaque réduite) de 3,375 à 3,625 .
* Portée réduite de 12 à 11.
* Remplace désormais entièrement les bombardes pour **le Saint Empire romain germanique, l'Ordre du dragon, la dynastie abbasside et les Ayyubides.**
* Supprimé pour **les Maliens.**


#### Canon

* L'armure à distance est remplacée par une résistance à distance de 85 %.
* Dégâts de base réduits de 100 à 55.
* Gagne un bonus de +55 points de dégâts contre l'infanterie.


#### Grande bombarde

* Santé réduite de 300 à 250 (+210 version initiale _(+210 early version)_ (pas sûr de la traduction)).
* Armure à distance remplacée par une résistance à distance de 85 %.
* Dégâts de base réduits de 190 à 70 (+55 au début de la version).
* Gagne un bonus de +150 points de dégâts contre l'infanterie (+120 au début de la version).

 Ajustements de Springald :

### Espringale

* Coût réduit de 250 bois 250 or à 150 bois 100 or.
Santé réduite de 125 à 75.
* Armure à distance remplacée par une résistance à distance de 60 %.
* Armure de mêlée augmentée de 0 à 3.
* Dégâts de base réduits de 30 à 15.
* Bénéficie d'un bonus de +10 points de dégâts contre l'infanterie en mêlée.
* Portée réduite de 10 à 8.
* Coût en population réduit de 3 à 2.
* Tire des carreaux qui transpercent plusieurs unités.
* Ne dispose plus de projectiles à tête chercheuse. 


### Technologie gachette à clapet roullants

* N'offre plus de portée supplémentaire aux espringales, mais seulement +25% de vitesse d'attaque.


### Trébuchet :

#### Trebuchet à contrepoids

* Santé réduite de 170 à 140.
* L'armure à distance est remplacée par une résistance à distance de 80 %.
* Coût de la population réduit de 3 à 2.

#### Trébuchet à traction (Mongole)

* Santé réduite de 150 à 125.
* Armure à distance remplacée par une résistance à distance de 80 %.
* Coût de la population réduit de 3 à 2.

#### Huihui Pao (Mongole et Byzantin)

* Armure à distance remplacée par une résistance à distance de 80 %.


### Ajustements du mangonnaux

#### Le mangonnaux

* Armure à distance remplacée par une résistance à distance de 75 %.
* Bonus de dégâts contre les tirs à distance augmenté de 6 à 8.
* Bonus de dégâts contre les bâtiments augmenté de 24 à 30.
* Portée réduite de 9 à 8.
* Amélioration de la réactivité des unités :
    - Temps de visée réduit de 0,5 à 0,25 seconde.
    - Durée d'enroulement augmentée de 2,25 à 2,5 secondes.
* Le rayon d'explosion de chaque bloc est réduit de 0,875 à 0,5 tuile.
* La portée des projectiles est réduite de 0,75 à 0,5 tuile.
* Ne prédit plus les mouvements et tire directement sur la cible.


#### Technologie des barres ajustables

* Coût augmenté de 300 bois 700 or, 90 secondes à 1000 bois 1200 or, 110 secondes.
* Effet modifié de +25% de vitesse d'attaque à +100% de rayon d'éclaboussure et +1 projectile ajouté aux attaques de Mangonel.
    Mongole: Barres ajustables **amélioré** supprimées.


### Nid d'abeilles

* Armure à distance remplacée par une résistance à distance de 75 %.
* Portée réduite de 8 à 7.

:::info[Note du développeur]
Les dégâts ont été naturellement réduits car la Chimie n'accorde plus de dégâts de base supplémentaires.
:::


#### Technologie des barils supplémentaires

* Coût augmenté de 200<img src="/img/ressource/wood.png" alt="bois" height="15"/> 500<img src="/img/ressource/gold.png" alt="bois" height="15"/> à 400<img src="/img/ressource/wood.png" alt="bois" height="15"/> 800<img src="/img/ressource/gold.png" alt="bois" height="15"/>.
* Effet augmenté de 1 à 2 fusées supplémentaires.


### Ribauldequin :

* Santé réduite de 350 à 225.
* Armure à distance remplacée par une résistance à distance de 35 %.
* Armure de mêlée augmentée de 10 à 15.

### Tour de siège et bélier

* Armure à distance remplacée par une résistance à distance de 95 %.


## Mise à jour de l'Université

:::info[Présentation du développeur]
Notre objectif avec la mise à jour de l'Université est de pimenter la fin de partie en créant un ensemble de décisions plus significatives à l'Université en modifiant le coût, l'effet ou les deux. Désormais, ces améliorations devraient être à la fois plus adaptées aux situations et plus puissantes lorsque ces situations se présentent.
:::

### Flèches incendiaires

* Coût augmenté de 300 bois 700 or à 500 bois 1000 or.
* Ajout d'un effet supplémentaire : Les unités à distance sans poudre gagnent +20% de dégâts et infligent des dégâts de siège supplémentaires aux bâtiments.
    - Les unités de type archer infligent 3 points de dégâts de siège lorsqu'elles tirent sur un bâtiment (sauf exceptions).
    - Les unités de type archer montées infligent 3 points de dégâts de siège (sauf exceptions).
    - Les arbalétriers infligent 4 points de dégâts de siège (sauf exceptions).
    - Exceptions notables :
        + Les éléphants de la tour (sultanat de Delhi) et les raiders du désert (Ayyubides) n'utilisent pas de flèches de siège contre les bâtiments, car ils utilisent respectivement les attaques de défense et de torche.
        + Zhuge Nu (Chinois/Zhu Xi), les Archers de Cavalerie (Ottomans) et les Mangudai (Mongols) infligent 2 points de dégâts au lieu de la quantité générale de carraux/flèches.
        + Les Archers dorés (Ordre du Dragon) infligent 6 points de dégâts de siège et les Arbalétriers dorés 8 points de dégâts de siège.

### Biologie

* Coût augmenté de 300 nourriture 700 or à 500 nourriture 1000 or.
* Santé de la cavalerie augmentée de 20% à 30%.
    - Biologie mongole (améliorée) Coût augmenté de 1000 à 1500 pierres.
        + Confère 40% de santé à toute la cavalerie, 10% si la biologie a déjà fait l'objet d'une recherche.
    - Lignées royales françaises, le coût reste à 300 nourriture 700 or.
        + La santé de la cavalerie est augmentée de 35% à 40%.

### Chimie

* Coût réduit de 300 nourriture 700 or, 90 secondes à 200 nourriture 650 or, 60 secondes.
* Effet modifié des unités de poudre à canon +20% de dégâts de base à Les engins de siège à poudre à canon gagnent +25% de dégâts bonus.
* Temps de recherche sur le sultanat de Delhi réduit de 1080 secondes à 720 secondes.

:::info[Note des développeurs]
Le siège à la poudre à canon inflige principalement des dégâts à des cibles spécifiques avec des dégâts bonus, ce changement rend les armes de siège à la poudre à canon nettement plus efficaces contre des cibles spécifiques, à savoir les bâtiments.
:::


### Tactiques d'armée d'élite

* Coût augmenté de 300 nourriture 700 or à 400 nourriture 1200 or.
* Effet modifié de l'infanterie de mêlée +20% de santé et +20% de dégâts à +4 armure de mêlée et +20% de dégâts de base.

    - Mongols Tactiques d'armée d'élite (amélioré) coût ajusté à 1600 pierre, +30% de dégâts de base et +6 armure.
    - Japonais Tactique d'Oda modifiée : Infanterie de mêlée +20% de santé, +20% de dégâts de base et +20% de dégâts de torche à +20% de dégâts de base, +4 armure de mêlée et +20% de dégâts de torche.


### Travaux de siège

* Effet modifié : engins de siège +20% de points de vie et +10 d'armure à distance à engins de siège +20% de points de vie.
    - Mongols Travaux de siège (amélioré) effet modifié en +30% de santé ; +10% de santé si Travaux de siège a déjà fait l'objet d'une recherche.

### Nouvelle technologie : Poudre serpentine

* Coût : 300 nourriture 500 or, 60 secondes.
* Disponible à l'ère impériale.
* Effet : les canonniers gagnent un bonus de +8 points de dégâts contre l'infanterie en mêlée et une brève augmentation de la vitesse de déplacement lorsqu'ils tirent avec leur arme.
    - Temps de recherche du sultanat de Delhi : 720 secondes.
    - Les Mongols n'obtiennent pas l'amélioration Poudre serpentine (améliorée).
    - Zhu Xi et les Ottomans n'ont pas accès à la poudre serpentine.


### Nouvelle technologie : Cordes d'arc en soie

* Coût : 400 bois 400 or, 60 secondes.
* Disponible à l'ère impériale.
* Effet : Les archers ont une portée de +2, les archers montés une portée de +1.
    - Temps de recherche dans le sultanat de Delhi : 720 secondes.
    - Les éléphants de tour du sultanat de Delhi ne bénéficient pas de cette amélioration.
    - Les Mongols ne bénéficient pas de l'amélioration corde d'arc en soie améliorée.
    - Zhu Xi n'a pas accès aux cordes d'arc en soie.


## Changements généraux

* L'effet des améliorations Horticulture, Fertilisation et Croisement de précision est réduit de 15% à 10% de collecte de nourriture plus rapide.
* Le bénéfice des améliorations de la nourriture amélioré des mongole est réduit de 7,5 % à 5 %.
* Nourriture du sanglier augmentée de 2000 à 2200
* Lignes étendues taux de collecte réduites de 20 % à 15 %.
* Taux de collecte des filets dérivants réduit de 15 % à 10 %.
* Taux de cueillette des baies augmenté de 0,66 à 0,69
    - Bonus de baies du sultanat de Dehli, des Ayyubides et de la dynastie abbasside réduit de 35 % à 30 %.
* Toutes les améliorations économiques de niveau 2 et 3 reçoivent de nouvelles icônes.
* La distillation d'acide a été renommée en exploitation minière de puits.
* Les dégâts de torche des unités de mêlée sont augmentés de 16 à 17 à l'âge du château et de 20 à 22 à l'âge impérial.
* Temps de construction du mur de palissade augmenté de 4 secondes à 8 secondes.
* Santé de l'avant-poste augmentée de 750 à 800.
    - La forteresse de bois de Rus reste inchangée à 1750 points de vie.
* Le bonus d'attaque des cavaliers contre les sièges est désormais proportionnel aux dégâts de base, au lieu de 10 à tous les rangs. Ajusté de +10 à tous les niveaux à +8/9/11/13 pour Early/Féodale/Vétéran/Elite.
    - Ordre du dragon : cavalier doré ajusté à +15/18/20 au lieu de +15 à tous les rangs.
    - Sipahi ottoman et Pilleur Ghazi du Sultanats de Delhi Raider Ghazi obtiennent également +9/11/13 contre les sièges au lieu de correspondre à leurs dégâts plus élevés.


## Changements de civilisation

### Chinois

* Coût des barils supplémentaires augmenté de 200 bois 500 or à 400 bois 800 or.
* L'effet des barils supplémentaires passe de 1 à 2 roquettes supplémentaires.
* L'attaque du grenadier est plus réactive :
    - Temps de visée du grenadier réduit de 0,5 à 0 seconde.
    - Temps de recharge du grenadier augmenté de 0,75 à 1,25 seconde.


### Sultanat de Delhi

* Nouvelle technologie navale : Matériaux récupérés (240 secondes).
    - Le Baghlah se régénère 30 points de vie lorsqu'il coule un navire ennemi.
    - Disponible à l'age des châteaux.

### Français

* Les ports fournissent +10 espace de population.


### Saint Empire romain germanique

* Palais Meinwerk :
    - La chaîne rivetée a été remplacée par les piques à alène, qui confèrent +3 points de dégâts aux lanciers et aux cavaliers.
    - L'effet de la relique en garnison est réduit de 50 % à 25 % d'armure et de 35 % à 25 % de dégâts.
* Défenses renforcées réduites de +40% de santé à +25%.
* La réduction sur les emplacements défensive passe de 25 % à 20%.
* L'armure à distance du centre ville est réduite de 75 à 50. 
* Portée de la chapelle d'Aix-la-Chapelle réduite de 7,5 à 6,5.

### Japonais

* Chaque palier de l'aura du taux de récolte de la ferme du manoir du Daimyo est réduit de 25 % à 20 %.
:::info[Note du développeur]
Ceci est pour garder l'échelle de la nourriture japonaise en accord avec les autres civilisations.
:::


### Jeanne d'Arc

* Les docks fournissent +10 espace de population.
* Jeanne d'Arc Les cavaliers compagnons sont déplacés vers l'écurie, les champions compagnons sont déplacés vers la caserne.
    - L'équipement des compagnons est déplacé dans le bâtiment correspondant.
    Jeanne d'Arc gagne la moitié de l'expérience de construction avant que le Centre-ville de la capitale ne soit construit sur Nomad.

### Maliens

* Garnison de Farimba
    - Passer l'age avec la garnison Farimba vous donne désormais le choix d'enrôler l'une des trois nouvelles unités : le Mansa Musofadi, le Mansa javelinier et le Mansa franc-tirreur (Mansa FreeBorn en anglais pas certain de la traduction).

        + Mansa Musofadi : une version plus résistante du Musofadi normal, dotée d'une meilleure armure de mêlée et d'une meilleure santé.
        + Mansa javelinier : un lanceur de javelots qui se déplace plus rapidement et qui inflige des dégâts de poison.
        + Mansa Franc-tirreur : une unité de mêlée à l'armure très résistante. 
        
    - Le Mansa Musofadi et le Mansa javelinier remplacent leurs homologues dans leurs bâtiments respectifs, tandis que le Mansa franc-tireur est une nouvelle unité qui peut être entraînée dans les casernes.
    - Les joueurs peuvent choisir une autre des deux options restantes s'ils atteignent l'âge impérial.
* Réseau commercial saharien :
    - Agit comme un avant-poste de péage avec un emplacement de javelots défensifs.
        En plus des effets précédents, le Réseau commercial saharien accorde désormais à tous les autres avant-postes à péage l'Emplacement de javelots défensifs, qui remplace l'Emplacement de flèches standard.
            + Les emplacements de javelots ont une portée de 8, des dégâts de base de 11 et une vitesse d'attaque de 1,38 avec +2 dégâts contre les unités à distance.
            + Ils coûtent 75 pièces d'or.

### Ordre du dragon

* Effet des reliques en garnisons réduit de 50% → 25% d'armure et 35% → 25% de dégâts.
* Effet des défenses renforcées réduit de +40% → +25% de points de vie.
* Réduction de 25% → 20% de la remise sur les emplacements d'armes .
* Armure à distance du centre ville réduite de 75 → 50. 
* Portée de la chapelle d'Aix-la-Chapelle réduite de 7,5 → 6,5.
* Tous les dégâts de torche de l'âge du château des unités dorées sont augmentés de 24 → 25, les dégâts de torche de l'âge impérial sont augmentés de 28 → 30.

### Ottomans

* L'effet des canons janissaires passe de +3 → +5 points de dégâts.
#### Conseil impérial
* Entraînement rapide a été supprimé et son effet de +25 % de vitesse de production a été ajouté à Académie avancée. 
* Quatre nouvelles améliorations du Conseil impérial sont disponibles :
    - Fortifications étendues (niveau 2) : Toutes les flèches de garnison sont remplacées par des carreaux d'arbalète, qui infligent un bonus de +2 aux dégâts contre les unités lourdes.
    - Timariots ( Tier 2 ) : Permet d'entraîner les archers de cavalerie à partir du champ de tir et de l'école militaire.
    - Pax Ottomana ( Tier 3 ) : La vitesse de production des villageois est augmentée de +50% pendant 4 minutes.
    - Grande Bombarde (Tier 4) : Une grande bombarde arrive au centre de la capitale.
        + Cette version est utilisée avant l'âge impérial et est automatiquement améliorée lorsque vous atteignez l'âge impérial.
* Les sacs de commerce et les équipes de siège sont passés du niveau 2 au niveau 4.

#### Écoles militaires
* La vitesse de production des chevaliers est réduite de 28 % et celle des janissaires de 25 %.

:::info[Note du développeur]
Cela garantit que les chevaliers et les janissaires produisent les mêmes ressources par minute à partir de l'école militaire que les autres unités militaires.
:::

#### Janissaire
* Reçoit la balise Unité à distance.
* Reçoit une nouvelle étiquette « infanterie légère à poudre à canon »..
* Les canons à main normaux ne sont plus classés comme légers.
* Les archers bénéficient d'un bonus contre l'infanterie légère à poudre.
* Le bonus de dégâts contre la cavalerie est réduit de 16/20 → 12/15.
:::info[Note des développeurs]
Suite à ces changements, les Janissaires ne recevront que les dégâts bonus des Archers plutôt que de toutes les attaques à distance et seront moins extrêmes dans leur relation contre les unités de cavalerie.
:::

### Rus

* Temps de construction des mur de palissade fortifié augmenté de 3 secondes → 8 secondes.
* L'effet de portée de la technologie bras bandés pour les espringales est passé de 0,5 → 1.


### Zhu Xi

* Nouvelle technologie - Chevaux de Dali : Toute la cavalerie gagne +20% de vitesse d'attaque. 75 nourriture 175 or, 45 secondes. 
    - Disponible à l'âge féodal.
    - Temps de rechargement pour la Garde impériale ajusté de 1,5 → 1,75 secondes.
    - Temps de rechargement pour pilleur Yuan ajusté de 1,5 → 1,62 secondes.
* Nouvelle technologie - bombes à enveloppe dure : Grenadiers +2 bonus contre l'infanterie légère. 100 nourriture 150 or, 45 secondes.
    - Disponible à l'âge du château.
* Le grenadier précoce devient disponible à l'âge du château.
* L'attaque du grenadier est plus réactive :
    - Temps de visée du grenadier réduit de 0,5 → 0 seconde.
    - Temps de recharge du grenadier augmenté de 0,75 → 1,25 seconde.