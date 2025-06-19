Projet Trouve ton Artisan avec la Région Auvergne-Rhône-Alpes
Contennu de ce dépot:
1- dossier contenant le projet du site en React
1- dossier contenant le projet de l'API
1 - dossier contenant le code SQL pour la création de la base de donnés et de l'utilisateur

Comment installer et lancer le projet

1 - Télécharger XAMPP ou WAMP et exécuter les codes contennus dans le dossier sql 
(un code pour la création et l'alimentation de la base de données et un code pour
la création de l'utilisateur). Si toutefois la création de l'utilisateur via l'éxécution
du script SQL échoue, vous trouverez également un fichier.txt avec le nom de l'utilisateur
et le mot de passe qui vous servira pour ajouter un utilisateur pour cette base de données
manuellement sur phpMyadmin.

2 - Lancez XAMPP ou WAMP en vous certifiant de bien mettre en route Apache et Mysql

3 - Clonez le dossier de l'API contenu dans ce lien: https://github.com/boulayM/API-Artisans.git

4 - Accédez au dossier que vous venez de clonner depuis VSCode et lancez l'API en exécutant la commande
nodemon dans le terminal. Vou pourrez vérifier que l'API est bien lancée et connectée à la base de données
en vous rendant sur http://localhost:3000 depuis votre navigateur

5 - Accédez au site sur votre navigateur depuis ce lien: https://site-artsans.onrender.com/
