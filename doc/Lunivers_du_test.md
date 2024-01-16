# L'univers du test

> L'univers du test est une mini-(techno)pièce rédigée dans le but de sensibiliser à la protection d'une espèce en voie de disparition dans bon nombre d'application : les tests.  

> Cette pièce raconte les aventures d'un(e) wildeur(se) lors de la prise de son premier poste en tant que développeur. La formation terminée, et après moultes entretiens, un poste en tant que développeur(se) a pu enfin être décroché ! (terminer sur un ton grave et inquiétant) mais tout ne va pas se passer comme prévu... 

## Acte I : le tout premier daily meeting

- rôles : wildeur(se), un(e) développeur(se), le(la) scrum master

> L'équipe au complet se réunie debout et en cercle dans une pièce vide du plateau. Chaque personne énonce en quelques secondes l'état de son travail et le reste à faire. Il ne reste plus qu'un(s) développeur(se) et notre wilder(se)

**<u>Développeur(se)</u> :** Je suis toujours sur l'US 1012 qu'on traine depuis 3 sprints. 

**<u>Développeur(se)</u> :** *(sur un ton jovial mais pas trop non plus)*
c'est un enfer, suite à la modification des valeurs dans la table STATUS, on a autant de status que de fonctionnalité derrière qui se sont mises à planter jusqu'au front'. Et les status, on en a plus d'une centainte à gérer dans notre application...

**<u>Scrum Master</u> :** La fin du sprint approche, tu arrives à estimer le temps qu'il faudrait encore pour cette US ?  

**<u>Développeur(se)</u> :** J'ai résolu la plupart des status, mais j'ai commencé par les plus simples pour entrer en douceur dans l'US. Il reste maintenant des bugs particulièrement tricky à résoudre, c'est compliqué d'estimer le temps nécessaire restant. Encore 1 voir 2 sprints complets dans le pire des cas peut être ?

**<u>Scrum Master</u> :** Ça marche, ça fait un moment que la vélocité est pourrie, le client n'est pas content mais on est plus à ça prêt

**<u>Wildeur(se)</u> :** *(interrogatif)* la vélocité ?

**<u>Scrum Master</u> :** À oui ! Ça correspond simplement au nombre d'US qu'on finalise en un sprint. Et la vélocité nous permet alors de comparer les sprints entre eux et voir si nous filons dans une bonne direction.

**<u>Scrum Master</u> :** *(face au(à la) wildeur(se))* Bref' ! on termine le daily avec toi !

**<u>Wildeur(se)</u> :** Hé bien merci encore pour votre accueil hier ! j'ai passé une partie de la journée à configurer l'ordinateur qu'on m'a remis. J'ai mis un peu de temps à retrouver comment faire pour créer une clé SSH afin de pouvoir cloner le projet sur mon ordi, là aujourd'hui je vais suivre le README.md pour voir comment lancer l'application en local !

**<u>Scrum Master</u> :** N'hésite vraiment pas à demander de l'aide autour de toi, certaines parties du README.md ne sont plus trop à jour en plus.. On termine le daily ! je te rappelle qu'on accueillera ensemble un consultant **QA** aujourd'hui qui va nous épauler ponctuellement pour nous aider à améliorer la qualité du code du projet

**<u>Wildeur(se)</u> :** Je me souviens oui, c'est bien noté !

## Acte II : la réu' avec le consultant QA

- rôles : wildeur(se), le(la) lead technique, le(la) scrum master

> Une partie de l'équipe interne ainsi que le consultant QA s'est réunie en début d'après midi. Le PO prends la parole dans un premier temps afin d'expliquer la situation au QA ; une application vieille de plusieurs années, moultes développeurs qui sont intervenus dessus dont certains qui ne sont plus là, un turn-over qui s'accentue, les estimations des USs de plus en plus élevées, etc... 

> Fraîchement arrivé(e) et donc un peu empreint de timidité ; notre chèr(e) wildeur(se) prit soin de checker en amont sur son téléphone ce que signifie QA, et il/elle a pu lire dans les grandes lignes que ça correspond à ... [AIDEZ NOUS LE PUBLIC !]

> Pris par un autre rendez vous, le PO du partir. La conversation continue entre les participants restants

**<u>Lead Technique</u> :** *(terminant sa phrase)* ...et on se retrouve aujourd'hui prisonniers de notre stack technique. On utilise par exemple un package node qui gère le chiffrage de certaines [données personnelles](https://www.cnil.fr/fr/definition/donnee-personnelle) sensibles et il a deux versions majeures de retard. Si on le met à jour d'autres packages ne seront plus compatibles et doivent donc être changés ; et là rebelote, on va repasser des sprints entiers sur du debug !

> Notre wilder(se) creuse dans sa mémoire, il sait que les données personnelles sont importantes et que cela faisait partie des nombreux points essentiels à réviser pour son titre, mais impossible de se souvenir précisemment de ce qu'est une donnée personnelle... [AIDEZ NOUS LE PUBLIC !]

**<u>QA</u> :** Vous avez déjà mis en place des tests par le passé ?

**<u>Lead Technique</u> :** Oui, mais ils ont été abandonné au bout de quelques semaines; faute de temps, mais aussi sans doute faute de compétences

**<u>QA</u> :** Nous en avons parlé avec le PO avant son départ. Le projet est relativement complexe, il faut absoluement au moins une ressource à temps plein sur l'écriture et la maintenance des tests, puis si on veut être prudent une ressource en backup aussi 

**<u>Scrum Master</u> :** (tournant la tête vers le(la) wilder(se)) C'est justement pour ça que nous avons recruté notre tout nouveau membre ! il va falloir le former sur l'écriture des tests et notre lead fera office de backup

**<u>Wildeur(se)</u> :** *(inquiet(te))* Que va-t-on tester en premier dans notre application ? et des tests il en existe plein de types differents, comment savoir par quel type de test commencer ?

**<u>QA</u> :** Tu viens d'arriver dans l'équipe, l'application a une partie métier importante, la personne la plus compétente pour savoir quelles parties de l'application sont les plus vitales est... [AIDEZ NOUS LE PUBLIC !]

**<u>QA</u> :** Ensuite, oui des catégories de tests, il en existe un paquet ! 

> Le QA se lève, s'approche du tableau et prend un feutre

**<u>QA</u> :** Reponsons par ici quelques bases élémentaires sur les tests. 



**<u>Lead Technique</u> :** Quel code coverage préconisez vous ?

> D'un air dubitatif, notre wilder(se) se frotte le menton, 'code coverage' lui évoque vaguement quelque chose

**<u>QA</u> :** Le code coverage correspond à la couverture de test

**<u>Lead Technique</u> :** Ce chiffre est élevé ! on risque de 

**<u>Scrum master</u> :** Par ou devrions nous commencer les tests ?





#### C'est <u>parce qu'une application est suffisament testée</u> qu'on peut faire évoluer son code sans apréhender des journées voir des semaines de débug 
#### C'est <u>parce qu'une application est suffisament testée</u> qu'on peut s'assurer qu'elle fonctionne toujours après avoir fait du refactoring de code
#### C'est <u>parce qu'une application est suffisament testée</u> qu'on peut la mettre à jour voir refondre une de ses briques techniques

## Acte III : l'écriture du premier test unitaire

## Acte VI : l'écriture du premier test d'intégration

## Acte V : l'écriture du premier test end-to-end

Hello ! je vous présente ici 4 des principaux types de tests qui peuvent exister dans le développement Web, et plus généralement le développement logiciel. 

Le but ici n'est pas de devenir un champion olympique de l'**A**ssurance **Q**ualité logicielle (Software **Q**uality **A**ssurance) mais d'avoir les bases générales et théoriques que tout développeur en herbe **doit avoir** dans son sac.

# Pourquoi des tests ? explorons un cas courant

> Vous avez intégré une nouvelle équipe dans une entreprise qui développe depuis plusieurs années un projet conséquent gérant des données parfois sensibles telles que des **données personnelles**. ([définition à connaitre !](https://www.cnil.fr/fr/cnil-direct/question/une-donnee-caractere-personnel-cest-quoi))

> Le scrum master vous raconte que la vélocité de la team descend en flèche depuis plusieurs sprints, la raison selon lui ; le projet vieillis, moultes développeurs(es) sont intervenus dessus dont certains qui ne sont plus là. En bref : on claque de plus en plus des dents chaque fois que le PO met sur la table une nouvelle fonctionnalité à ajouter dans le projet.

> Vous êtes en présence d'un projet dît **historique** ou encore **legacy**.

> L'ajout d'une simple fonctionnalité, même mineure, peut faire pleuvoir les bugs. Pire encore ! Le projet devient prisonnier de sa stack technique, une mise à jour majeur des packages utilisés (pour des questions de sécurité par exemple) ou une refonte complète de l'application est devenue tout simplement impensable.

Beaucoup de raisons peuvent expliquer la situation actuelle. Un des facteurs probables et des plus aggravants ; **l'absence ou l'insuffisance de tests**.

#### C'est <u>parce qu'une application est suffisament testée</u> qu'on peut faire évoluer son code sans apréhender des journées voir des semaines de débug 
#### C'est <u>parce qu'une application est suffisament testée</u> qu'on peut s'assurer qu'elle fonctionne toujours après avoir fait du refactoring de code
#### C'est <u>parce qu'une application est suffisament testée</u> qu'on peut la mettre à jour voir refondre une de ses briques techniques

# Les tests à la rescousse

Il existe plusieurs types de tests ; par quel type de test commencer ? quoi tester ? jusqu'à quel niveau faut il pousser les tests ? etc..

## Les tests unitaires 

Ce qu'est un test unitaire : 
- un script qui teste une et une seule fonction **[déterministe](https://fr.wikipedia.org/wiki/Fonction_d%C3%A9terministe)**
- Avec le système de mock, il est possible de rendre des fonctions non-déterministes déterministes

Ce que **n'** est **pas** un test unitaire, quelques exemples :
- un script qui teste une fonction qui sollicite un système extérieur : base de données, un fichier de configuration, ...
- un script qui teste une fonctionnalité du frontend au backend

## Les tests d'intégration

Ce qu'est un test d'intégration : 
- un script qui teste un ensemble de composants 
- 

Ce que **n'** est **pas** un test unitaire, quelques exemples :
- un script qui teste une fonctionnalité du frontend au backend

## Les tests e2e (end-to-end)

Ce qu'est un test d'intégration : 
- un script qui teste un ensemble de composants 
- 

Ce que **n'** est **pas** un test unitaire, quelques exemples :
- un script qui teste une fonctionnalité du frontend au backend


## Aller plus loins

### Les tests (importants aussi) qui n'ont pas été abordés ici

- les tests de charge / performance
- les tests d'intrusions (sécurité)