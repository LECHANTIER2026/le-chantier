# Le chantier — mode d'emploi complet

*Écrit pour quelqu'un qui n'a jamais fait de site web. Aucune connaissance préalable n'est supposée. Chaque mot technique est expliqué la première fois qu'il apparaît.*

**Comment utiliser ce guide :** faites les parties A et B dans l'ordre, une seule fois, en une petite heure. Ensuite, vous ne reviendrez plus que dans la partie C, qui contient vos gestes de tous les jours.

---

## Sommaire

**Partie A — Avant de commencer**
1. Comprendre en trois minutes
2. Ce dont vous avez besoin

**Partie B — La mise en ligne (une fois pour toutes)**
3. Créer le compte GitHub
4. Déposer le site
5. Publier le site avec Cloudflare
6. Ouvrir votre bureau d'écriture

**Partie C — Écrire**
7. **Votre première tâche : réécrire « Qui sommes-nous ? »**
8. **Publier un article, champ par champ**
9. Corriger, dépublier, supprimer
10. Ajouter une image ou un PDF

**Partie D — Le reste**
11. Les réglages du site
12. Les réactions des lecteurs
13. L'infolettre
14. Un nom de domaine
15. Quand ça coince
16. Petit dictionnaire

---
---

# PARTIE A — AVANT DE COMMENCER

## 1. Comprendre en trois minutes

Un site web, c'est deux choses qu'on confond souvent :

- **le contenu** : vos textes, vos images ;
- **l'affichage** : la mise en page, les couleurs, les menus.

L'affichage est fait. Il ne bougera plus, sauf si vous me demandez de le changer. Vous ne vous occuperez que du contenu.

Votre site repose sur **trois services gratuits**, chacun avec un rôle bien séparé. Vous allez créer un compte sur les trois aujourd'hui, et ensuite vous n'en utiliserez plus qu'un seul.

**GitHub — le coffre-fort.**
Vos textes y sont rangés sous forme de fichiers. Sa particularité : il garde une copie de chaque version successive. Vous corrigez un article aujourd'hui, dans deux ans vous pourrez retrouver la version d'aujourd'hui. Rien ne s'y perd, jamais. Vous n'y retournerez presque jamais — mais c'est lui qui rend tout le reste sûr.

**Cloudflare Pages — l'imprimerie.**
Il surveille le coffre-fort. Dès que quelque chose y change, il fabrique les pages du site et les publie sur Internet, tout seul, en une minute environ. Vous le configurez une fois et vous l'oubliez.

**Pages CMS — votre bureau.**
C'est une page web où vous vous connectez pour écrire. Vous y voyez des formulaires : un champ pour le titre, un champ pour le texte, un bouton pour enregistrer. C'est là que vous passerez tout votre temps. *CMS* veut dire « système de gestion de contenu » — autrement dit : l'endroit où l'on écrit.

**L'enchaînement, une fois pour toutes :**

> vous écrivez dans **Pages CMS** → il range dans **GitHub** → **Cloudflare** republie le site → une minute plus tard, c'est en ligne.

Vous ne déclenchez rien manuellement. Vous cliquez sur *Save*, et le reste se fait sans vous.

---

## 2. Ce dont vous avez besoin

- Un ordinateur — pas un téléphone, pour cette première mise en ligne.
- Le fichier **`le-chantier-site.zip`** que je vous ai envoyé.
- **Une adresse e-mail dédiée au site**, par exemple `lechantier.site@gmail.com`. N'utilisez pas votre adresse personnelle : le jour où quelqu'un d'autre reprendra le site, ou si vous changez de boîte mail, tout resterait bloqué sur vous. Créez-la maintenant si elle n'existe pas, c'est deux minutes.
- Une application d'authentification sur votre téléphone — **Google Authenticator**, **Authy** ou **1Password**. GitHub l'exigera. Installez-la avant de commencer.
- De quoi noter un mot de passe en lieu sûr.

Comptez **une heure** pour la partie B au complet. Vous ne la referez jamais.

---
---

# PARTIE B — LA MISE EN LIGNE

## 3. Créer le compte GitHub

1. Allez sur **github.com/signup**.
2. Saisissez l'**adresse e-mail du site**, pas la vôtre.
3. Choisissez un mot de passe. **Notez-le immédiatement** quelque part de fiable.
4. Choisissez un nom d'utilisateur : `lechantier` s'il est libre, sinon `le-chantier-site` ou approchant. Ce nom apparaîtra dans des adresses techniques, jamais sur votre site : ne vous tracassez pas avec.
5. GitHub envoie un code par e-mail. Recopiez-le.
6. **La double authentification.** GitHub vous demande de la configurer : il affiche un carré de points noirs — un « QR code » — que vous scannez avec votre application d'authentification. Celle-ci affiche ensuite un code à six chiffres, qui change toutes les trente secondes, et que vous recopierez à chaque connexion.

> ⚠️ **Le seul vrai piège de tout ce guide.** À la fin de cette étape, GitHub affiche une liste de **codes de secours** (*recovery codes*). **Copiez-les et rangez-les ailleurs que sur votre téléphone** — dans un document, un carnet, un coffre de mots de passe. Si vous perdez votre téléphone sans ces codes, le compte devient définitivement inaccessible, et le site avec lui. Trente secondes maintenant vous évitent une catastrophe plus tard.

Si plusieurs personnes doivent publier, transmettez-leur l'adresse e-mail et le mot de passe, et faites-leur scanner le même QR code sur leur propre téléphone.

---

## 4. Déposer le site

1. Décompressez `le-chantier-site.zip` : double-cliquez dessus. Vous obtenez un dossier nommé **`site`**.
2. Sur GitHub, cliquez sur le **+** en haut à droite → **New repository**.

   *Un « repository » — abrégé « repo », en français « dépôt » — est simplement un dossier hébergé chez GitHub.*

3. **Repository name** : `le-chantier`
4. Cochez **Public**.

   > Public signifie que n'importe qui peut *lire* vos fichiers, pas les modifier — seul votre compte le peut. C'est gratuit et sans limite, alors qu'un dépôt privé coûterait de l'argent avec l'hébergement gratuit. Vos textes ayant vocation à être publiés, il n'y a aucun inconvénient.

5. Ne cochez rien d'autre. Cliquez **Create repository**.
6. La page suivante affiche du texte technique. Ignorez tout et repérez la phrase **« uploading an existing file »**. Cliquez sur ce lien.
7. Ouvrez le dossier `site` sur votre ordinateur. **Sélectionnez tout ce qu'il contient** (Ctrl+A ou Cmd+A) — les fichiers *et* les sous-dossiers — et faites glisser cette sélection dans la zone du navigateur.

   > ⚠️ Faites glisser **le contenu** du dossier `site`, pas le dossier lui-même. Après le transfert, vous devez voir apparaître des noms comme `src`, `public`, `package.json`, `.pages.yml`. Si vous ne voyez qu'un seul élément nommé `site`, recommencez en entrant d'abord dans le dossier.

8. Patientez pendant le transfert : une à deux minutes.
9. En bas de page, cliquez sur le bouton vert **Commit changes**.

   *« Commit » signifie « enregistrer cette version ». Chaque commit est une photographie de votre site à un instant donné, conservée pour toujours.*

Vos textes sont en sécurité. Le site n'est pas encore visible sur Internet : c'est l'étape suivante.

---

## 5. Publier le site avec Cloudflare

1. Allez sur **dash.cloudflare.com/sign-up** et créez un compte gratuit — adresse e-mail du site, mot de passe, confirmation par e-mail.
2. Dans le menu de gauche, cliquez sur **Workers & Pages**.
3. Cliquez **Create**, puis l'onglet **Pages**, puis **Connect to Git**.
4. Cloudflare demande l'autorisation d'accéder à GitHub : acceptez, puis sélectionnez le dépôt **le-chantier**.
5. Un écran de réglages apparaît. Remplissez exactement :

   | Champ | Valeur |
   |---|---|
   | Project name | `le-chantier` |
   | Production branch | `main` — déjà rempli |
   | Framework preset | **Astro** |
   | Build command | `npm run build` |
   | Build output directory | `dist` |

   *« Astro » est le nom de l'outil qui fabrique vos pages. « Build » veut dire « fabriquer ». Vous n'aurez plus jamais à taper ces mots.*

6. Cliquez **Save and Deploy**.
7. Une page de texte défilant s'affiche pendant une à deux minutes. À la fin : **Success!** et une adresse du type **`le-chantier.pages.dev`**.
8. Cliquez dessus. **Votre site est en ligne.**

Il est pour l'instant presque vide : les cinq articles de démonstration sont en brouillon, donc invisibles. C'est voulu — vous allez le remplir.

**À partir de maintenant, chaque modification sera publiée automatiquement en une minute.** Vous n'aurez plus jamais besoin de revenir dans Cloudflare.

---

## 6. Ouvrir votre bureau d'écriture

1. Allez sur **app.pagescms.org**.
2. Cliquez **Sign in with GitHub** et connectez-vous avec le compte du site.
3. Cliquez **Install the GitHub App**. GitHub demande sur quels dépôts : choisissez **Only select repositories** et cochez uniquement **le-chantier**. Validez.
4. Vous revenez sur Pages CMS et voyez votre dépôt. Cliquez dessus.

Trois entrées s'affichent :

- **Articles** — la liste de tous vos textes
- **Page « Qui sommes-nous ? »**
- **Réglages du site** — nom, slogan, e-mail

**Mettez cette page dans vos favoris.** C'est votre porte d'entrée pour toujours. Les deux autres services, vous pouvez les oublier.

---
---

# PARTIE C — ÉCRIRE

## 7. Votre première tâche : réécrire « Qui sommes-nous ? »

C'est le bon exercice pour commencer : une seule page, pas de champs compliqués, et le résultat en ligne dans la minute.

### Ce qu'il y a à écrire

La page comporte trois zones :

| Zone | Ce que c'est | Longueur |
|---|---|---|
| **Titre de la page** | Le grand titre en haut | 2 à 4 mots |
| **Sous-titre** | Une phrase en dessous | environ 15 mots |
| **Texte** | Le corps de la page | 250 à 600 mots |

Le texte actuellement en place est un **gabarit** : il n'est pas de vous, il montre seulement la structure. Remplacez-le entièrement.

**Une trame qui fonctionne bien**, si vous ne savez pas par où prendre les choses :

1. **Ce que vous faites** — deux ou trois phrases concrètes.
2. **D'où vient le nom** — ce que « chantier » veut dire pour vous. C'est souvent le passage que les lecteurs retiennent.
3. **Ce que veut dire « panser »** — le cœur de votre intention.
4. **Comment on vous écrit** — et si vous acceptez des propositions de textes.

### Les gestes, un par un

1. Sur **app.pagescms.org**, cliquez sur **Page « Qui sommes-nous ? »**.
2. Un formulaire s'ouvre, les trois champs déjà remplis.
3. **Titre de la page** : cliquez dans le champ, sélectionnez tout (Ctrl+A / Cmd+A), tapez le vôtre.
4. **Sous-titre** : pareil.
5. **Texte** : c'est un éditeur normal, comme un traitement de texte. Sélectionnez tout l'ancien texte, supprimez-le, écrivez le vôtre.

   Vous y disposez de :
   - **gras** et *italique* — surlignez le mot, cliquez sur le bouton
   - des **intertitres** — pour découper la page en sections
   - des **listes à puces**
   - des **liens** — surlignez un mot, cliquez sur le bouton lien, collez l'adresse
   - des **citations** en retrait

   Pour créer un paragraphe, appuyez sur Entrée.

6. Quand vous avez fini, cliquez sur **Save**, en haut à droite.

### Ce qui se passe ensuite

Rien de visible tout de suite, et c'est normal. En arrière-plan, Pages CMS range votre texte dans GitHub, et Cloudflare refabrique le site.

**Attendez une à deux minutes**, puis ouvrez `le-chantier.pages.dev/qui-sommes-nous/` et **actualisez la page** (Ctrl+R / Cmd+R). Votre texte est là.

> Si vous ne voyez pas le changement, attendez trente secondes et actualisez de nouveau — votre navigateur garde parfois l'ancienne version en mémoire. Une actualisation forcée (Ctrl+Maj+R / Cmd+Maj+R) règle le problème.

### Et si je me trompe ?

Rien n'est jamais définitif.

- **Pour corriger** : rouvrez la page, modifiez, **Save**. Autant de fois que vous voulez.
- **Pour revenir en arrière** : sur GitHub, ouvrez votre dépôt, cliquez sur **Commits** — la liste de toutes vos modifications, avec leur date. Vous pouvez consulter n'importe quelle version passée. Pour en restaurer une, dites-le-moi : c'est deux minutes.

**Vous ne pouvez pas casser le site en écrivant du texte.** Le pire qui puisse arriver, c'est une faute de frappe publiée trois minutes.

---

## 8. Publier un article, champ par champ

Dans Pages CMS, cliquez sur **Articles**, puis sur **Add an entry** — « ajouter une entrée ».

Le formulaire comporte onze champs. **Trois sont obligatoires**, les autres facultatifs.

### Titre — obligatoire
Le titre de l'article. **3 à 10 mots.** Au-delà de deux lignes à l'écran, la mise en page se déséquilibre.

### Rubrique — obligatoire
Une liste déroulante, trois choix :

- **Recensions** — vous rendez compte d'une œuvre : un livre, un article, un film, une étude.
- **Réflexions** — le texte est de vous : un essai, une note, une prise de position.
- **Recommandations** — vous conseillez quelque chose sans en faire l'analyse.

Un article n'a qu'une seule rubrique. En cas d'hésitation entre recension et réflexion, la question à se poser est : *est-ce que je parle d'une œuvre, ou est-ce que je pense à partir d'elle ?*

### Date de publication — obligatoire
Un calendrier s'ouvre au clic. Les articles s'affichent du plus récent au plus ancien : c'est cette date qui les classe.

> Vous pouvez mettre une date passée pour ranger un texte plus bas dans la liste. Une date future ne le cache pas — pour cela, utilisez le champ *Brouillon*.

### Auteur / autrice
Facultatif. `P. G.`, `Pier Giorgio`, ou rien.

**Décidez une fois pour toutes** : soit tout le monde signe en initiales, soit tout le monde en toutes lettres. Un site où les deux se mélangent donne une impression de flottement.

### Chapeau
**C'est le champ le plus utile du site**, et celui qu'on néglige le plus.

Deux ou trois lignes de résumé — **20 à 45 mots**. Elles apparaissent à trois endroits : sous le titre de l'article, dans la liste de sa rubrique, et sur la page d'accueil. C'est aussi le texte qui s'affiche quand quelqu'un partage votre lien sur un réseau social ou une messagerie.

Un article sans chapeau paraît nu dans les listes : il n'y a que le titre, et rien qui donne envie de cliquer.

Le chapeau n'est pas la première phrase de l'article. C'est une promesse : ce que le lecteur va y trouver.

### Image
Facultatif. Elle s'affiche en haut de l'article et dans les listes. Voir la partie 10.

### Crédit de l'image
Le nom du photographe, la source. S'affiche en petit sous l'image.

### Source
Pour une recension : l'ouvrage et son éditeur. Pour une recommandation : le lieu, la revue, la chaîne.
Exemple : `Patricia Paperman & Sandra Laugier (dir.), éd. de l'EHESS`

### Lien externe
L'adresse complète — commençant par `https://` — de l'article ou du site d'origine.

Dès que vous remplissez ce champ ou le précédent, **un encadré apparaît dans l'article**, avec la source et un bouton « Ouvrir le document original ». C'est particulièrement utile pour les recensions d'articles publiés ailleurs.

### Fichier à télécharger
Un PDF, un tract, un document. Un bouton « Télécharger » apparaît dans l'encadré.

### Mettre à la une
Une case à cocher. **L'article coché ouvre la page d'accueil**, en grand.

> **Ne la cochez que sur un seul article à la fois.** Si vous en cochez deux, le site en choisit un et vous ne saurez pas lequel. Le geste correct : cocher le nouveau, puis rouvrir l'ancien et le décocher.
>
> Si vous ne cochez rien, c'est l'article le plus récent qui prend la une. C'est très bien aussi.

### Brouillon (ne pas publier)
Une case à cocher. **Cochée = l'article n'existe pas sur le site.** Il reste dans votre liste, vous y revenez quand vous voulez.

C'est le champ le plus rassurant : vous pouvez commencer dix textes, les laisser mûrir, n'en publier aucun. Décochez le jour où c'est prêt.

### Texte de l'article
Le corps du texte, dans le même éditeur que la page « Qui sommes-nous ? ».

Deux conseils de lisibilité : **un intertitre toutes les 300 à 400 mots** aère beaucoup ; et une citation en retrait vaut mieux qu'un long passage entre guillemets.

### Puis : Save

Cliquez **Save**. Une à deux minutes plus tard, l'article est en ligne — sur la page d'accueil, dans sa rubrique, et à sa propre adresse.

### Un exemple complet

> **Titre** — Le Souci des autres
> **Rubrique** — Recensions
> **Date** — 8 août 2026
> **Auteur** — L. B.
> **Chapeau** — Une relecture de l'éthique du care à l'heure où l'on somme chacun de « prendre soin » sans jamais en donner les moyens.
> **Source** — Patricia Paperman & Sandra Laugier (dir.), éd. de l'EHESS
> **Lien externe** — *l'adresse de la page de l'éditeur*
> **Mettre à la une** — non
> **Brouillon** — non
> **Texte** — l'article lui-même

Les cinq articles de démonstration encore présents dans votre liste sont remplis de cette façon. **Ouvrez-en un pour voir à quoi ressemble un formulaire correctement rempli** — c'est le meilleur modèle possible. Supprimez-les quand ils ne vous serviront plus.

---

## 9. Corriger, dépublier, supprimer

**Corriger un article publié.** Ouvrez-le dans la liste, modifiez, **Save**. La correction est en ligne une minute plus tard. Il n'y a pas de bouton « republier » : enregistrer *est* publier.

**Retirer temporairement un article.** Ouvrez-le, cochez **Brouillon**, **Save**. Il disparaît du site mais reste dans votre liste.

**Supprimer définitivement.** Ouvrez l'article ; le bouton de suppression est en haut à droite — souvent une corbeille, parfois dans un menu «···». Confirmez.

> Même supprimé, l'article reste consultable dans l'historique GitHub. La suppression n'est donc jamais irrémédiable — mais préférez tout de même *Brouillon* quand vous hésitez.

**Renommer un article.** Changer le titre change aussi son adresse web. Si le lien avait déjà été partagé, l'ancienne adresse ne fonctionnera plus. Sans importance dans les premiers jours ; à éviter sur un texte diffusé depuis longtemps.

---

## 10. Ajouter une image ou un PDF

Dans le formulaire, au champ **Image** — ou **Fichier à télécharger** — cliquez : une fenêtre s'ouvre pour choisir un fichier sur votre ordinateur, ou reprendre un fichier déjà envoyé.

**Formats.** Images : `.jpg` ou `.png`. Documents : `.pdf`.

**Poids.** Réduisez vos images avant de les envoyer : une photo sortie d'un appareil pèse 5 à 10 Mo, ce qui rendrait vos pages lentes. Visez **moins de 500 Ko** et une largeur d'environ **1600 pixels**. Le site **squoosh.app**, gratuit et sans inscription, fait cela en deux clics : vous déposez l'image, vous téléchargez la version allégée.

**Droits.** N'utilisez que des images dont vous disposez : les vôtres, celles qu'on vous a autorisées, ou des banques libres comme Unsplash. Renseignez le champ *Crédit de l'image* : c'est une politesse, et parfois une obligation.

---
---

# PARTIE D — LE RESTE

## 11. Les réglages du site

Pages CMS → **Réglages du site**. Vous y modifiez, sans jamais toucher au code :

| Réglage | Effet |
|---|---|
| Nom du site | En haut à gauche, dans l'onglet du navigateur, dans le pied de page. S'affiche exactement comme vous l'écrivez, majuscules comprises. |
| Slogan | La grande phrase de la page d'accueil. |
| Fin du slogan en couleur | Les derniers mots à faire ressortir en rouge. **Doivent correspondre exactement à la fin du slogan** : si le slogan est « Penser le monde pour le panser » et que vous voulez « le panser » en rouge, écrivez exactement `le panser`. |
| Phrase de présentation | Sous le slogan. |
| Titre de la colonne de droite | Actuellement « À lire ». |
| Adresse e-mail de contact | Pied de page et page « Qui sommes-nous ? ». |
| Description pour Google | La phrase affichée dans les résultats de recherche. Environ 150 caractères. |
| Champs des réactions et de l'infolettre | Voir ci-dessous. |

---

## 12. Les réactions des lecteurs

**Le principe.** Un lecteur écrit sous l'article. **Vous** recevez son message par e-mail. Vous publiez ceux que vous retenez. Rien n'apparaît sur le site sans votre geste : aucun spam visible, aucune surveillance quotidienne, aucun mouchard sur vos pages.

### Mise en route — deux minutes, une seule fois

1. Allez sur **web3forms.com**.
2. Saisissez l'adresse e-mail où recevoir les messages. **Aucun compte à créer.**
3. Vous recevez une **clé d'accès** par e-mail : une longue suite de caractères.
4. Pages CMS → **Réglages du site** → collez-la dans *Clé du formulaire de réactions* → **Save**.

Le formulaire apparaît alors sous chaque article. Tant que le champ est vide, il est simplement remplacé par votre adresse de contact — le site fonctionne parfaitement sans.

### Publier une réaction

1. Vous recevez le message par e-mail, avec le titre de l'article concerné.
2. Pages CMS → **Articles** → ouvrez l'article.
3. Descendez jusqu'à **Réactions publiées** → **Add an item**.
4. Remplissez **Signature**, **Date**, **Message**. L'adresse e-mail du lecteur n'est jamais publiée.
5. **Save**.

Pour retirer une réaction, supprimez l'élément.

> **Fixez votre règle de signature dès la première.** « Claire M. », « Claire Martin », ou « une lectrice de Grenoble » ? Décidez maintenant et tenez-vous-y : c'est une question d'égard envers ceux qui vous écrivent, et cela vous évite de trancher au cas par cas.

---

## 13. L'infolettre

### Mise en route — dix minutes, une seule fois

1. Créez un compte gratuit sur **brevo.com** — société française, conforme au RGPD, interface en français.
2. Créez une **liste de contacts** : appelez-la « Lecteurs ».
3. Menu **Contacts → Formulaires → Créer un formulaire d'inscription**. Un seul champ suffit : l'e-mail.
4. À l'étape « Partager », Brevo affiche un code. Dedans, repérez l'adresse commençant par **`https://…sibforms.com/serve/…`** et copiez-la.
5. Pages CMS → **Réglages du site** → collez-la dans *Adresse du formulaire d'infolettre* → **Save**.

Le bloc d'inscription apparaît en bas de la page d'accueil et de chaque article. Tant que le champ est vide, il n'apparaît pas.

### Envoyer un numéro

Dans Brevo : **Campagnes → Créer une campagne**. Vous écrivez, vous choisissez la liste, vous envoyez. Gratuit jusqu'à 300 envois par jour.

> **N'annoncez jamais de rythme.** « Un courrier à chaque publication » tient dans la durée ; « chaque mardi » devient une dette au bout de trois semaines. Et gardez les numéros courts : le titre, deux lignes, le lien.

**La loi.** Brevo gère le plus lourd : confirmation d'inscription, lien de désinscription, hébergement en Europe. Il vous reste une règle absolue : **n'ajoutez jamais quelqu'un à la liste sans qu'il l'ait demandé lui-même.** Même un ami, même un collègue.

---

## 14. Un nom de domaine

`le-chantier.pages.dev` fonctionne parfaitement et ne coûte rien. Le jour où vous voudrez `lechantier.fr` :

1. Achetez le nom chez **Gandi**, **OVH** ou **Cloudflare Registrar** — souvent le moins cher, et le branchement est alors automatique. Comptez 10 à 15 € par an.
2. Dans Cloudflare → votre projet → onglet **Custom domains** → **Set up a domain** → saisissez le nom → suivez les instructions.
3. Comptez quelques heures avant que l'adresse fonctionne partout dans le monde. Le certificat de sécurité — le petit cadenas — est installé automatiquement et gratuitement.

L'ancienne adresse continuera de fonctionner : aucun lien partagé ne se cassera.

**Pensez alors à me demander** de mettre à jour l'adresse inscrite dans le fichier `astro.config.mjs` : elle sert au fil RSS et à l'aperçu des liens partagés.

---

## 15. Quand ça coince

**« Ma modification n'apparaît pas. »**
Attendez deux minutes et actualisez avec Ctrl+Maj+R (Cmd+Maj+R sur Mac). Si rien ne change, allez dans Cloudflare → votre projet → onglet **Deployments** : la ligne du haut est votre dernière modification. Verte (*Success*) : c'est votre navigateur. Rouge (*Failed*) : voir ci-dessous.

**« Le déploiement est en rouge. »**
Cliquez sur la ligne rouge : le message d'erreur est en bas du texte affiché. Dans neuf cas sur dix, il manque un champ obligatoire — titre, rubrique ou date. Corrigez l'article, enregistrez, tout repart.
**Le site en ligne reste intact pendant ce temps.** Une erreur ne casse jamais la version publiée : elle empêche seulement la nouvelle de sortir.

**« J'ai supprimé quelque chose par erreur. »**
Rien n'est perdu. GitHub → votre dépôt → onglet **Commits** : chaque modification y figure. Dites-moi ce que vous cherchez, je le restaure.

**« J'ai perdu le mot de passe. »**
Procédure de récupération sur GitHub, avec l'adresse e-mail du site.

**« J'ai perdu mon téléphone. »**
Utilisez les codes de secours notés à l'étape 3. C'est exactement à cela qu'ils servent.

**« Je ne comprends pas ce que je vois. »**
Faites une capture d'écran et envoyez-la-moi. C'est toujours plus rapide que de le décrire.

---

## 16. Petit dictionnaire

| Mot | Ce que ça veut dire |
|---|---|
| **Dépôt** (*repository*, *repo*) | Le dossier de votre site, hébergé chez GitHub. |
| **Commit** | Une version enregistrée. Chaque *Save* dans Pages CMS en crée une. |
| **Déploiement** (*deployment*) | La fabrication et la mise en ligne du site, automatique après chaque commit. |
| **Build** | La fabrication des pages. Ce que fait Cloudflare avant de publier. |
| **CMS** | « Système de gestion de contenu » : l'interface où l'on écrit. Ici, Pages CMS. |
| **Markdown** | Le format texte dans lequel vos articles sont stockés. L'éditeur s'en occupe pour vous. |
| **Front matter** | Les champs en haut d'un article — titre, date, rubrique. Ce sont les cases du formulaire. |
| **Statique** | Se dit d'un site fait de pages déjà fabriquées. C'est pourquoi le vôtre est rapide, sûr et gratuit. |
| **Domaine** | L'adresse du site. `le-chantier.pages.dev` aujourd'hui, `lechantier.fr` peut-être demain. |
| **RSS** | Un format qui permet de s'abonner à vos publications avec une application dédiée. Le vôtre existe déjà. |

---

## Ce que vous possédez

Aucun abonnement, aucune plateforme propriétaire, aucun verrou. Vos articles sont des fichiers texte dans **votre** dépôt. Vous pouvez à tout moment tout télécharger, changer d'hébergeur, changer d'outil d'écriture, ou confier le dossier à quelqu'un d'autre.

C'est le contraire d'un site loué.

Bonne écriture.
