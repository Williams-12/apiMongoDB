Fichier README.md
API de gestion de tâches avec Node.js , Express et MongoDB

DESCRIPTION
Ce projet est une API RESTful permettant de gérer des tâches .  Il est construit avec Node.js , Express et MongoDB comme base de données/

Installation et exécution
  Prérequis
Node.js (v12 ou plus)
MongoDB installé localement

Installation
1.	Cloner le dépôt
Sh
git clone git@github.com:Williams-12/apiRestFull.git

2.	Installer les dépendances
npm install mongoose

3.	Démarrer MongoDB avec la commande suivante :
net start MongoDB
Si MongoDB est installé localement , lancez :

4.	L’API avec la commande suivante :
node leNomDeVotreFichier.js

5.	Ce message va s’afficher
Votre serveur est en cours d’exécution sur http://localhost:3000
MongoDB connecté

Et voilà ça passe très bien.

EXEMPLES D’UTILISATION AVEC POSTMAN
	Ajouter une tâche 
Méthode : Post/tasks
Corps de la requête :
{
‘’title’’ : ‘’Ma première tâche ‘’
}

Réponse attendue :
[
   {
‘’_id’’ : ‘’662a4eeeaf4059c8dce39a’’,
‘’title’’ : ‘’Ma première tâche ‘’,
‘’__v’’ : 0
  }
]

	Obtenir la liste des tâches 
Méthode : Get/tasks
Réponse attendue :
[
   {
‘’_id’’ : ‘’662a4eeeaf4059c8dce39a’’,
‘’title’’ : ‘’Ma première tâche ‘’,
‘’__v’’ : 0
  }
]

	Modifier une tâche 
Méthode : Put/tasks/ :id
Corps de la requête :
{
‘’title’’ : ‘’My fisrt task ‘’
}

Réponse attendue :

   {
‘’_id’’ : ‘’662a4eeeaf4059c8dce39a’’,
‘’title’’ : ‘’My fisrt  task‘’,
‘’__v’’ : 0
  }


	Supprimer une tâche 
	Méthode : DELETE /tasks/ :id
	Réponse attendue :

   {
‘’message’’ : ‘’Tâche supprimée avec succès ‘’
  }





TECHNOLOGIES UTILISÉES 
•	Node.js
•	Express.js
•	MongoDB
•	Mongoose




AUTEUR
Développé par le petit développeur Williams GOUBALI – En formation chez D-CLIC, grâce au finacement de l’OIF.
