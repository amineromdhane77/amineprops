
import './App.css';
import Fullname from './profile/compoment/Fullname';
{/* importation de nos composants */}
import Bio from './profile/compoment/Bio';
import Profession from './profile/compoment/Profession';


function App() {
  return (
   <>
   <div>
   <Fullname
   title='Amine romdhane'
   profession='web developer'
   
  
   /> </div>
  
   <div>
   <Bio
   paragraphe='AMINE ROMDHANE est un informaticien spécialisé dans la programmation ou expressément impliqué dans le développement des applications du web, ou des applications qui sont exécutées à partir dun serveur web sur un navigateur web et qui utilisent le protocole HTTP comme vecteur de transmission de information  '
   />
   </div>
   <Profession
   title='Skills:'
   titele1='Etude du projet créatif:'
   paragraphe1='Réception du brief du Directeur Artistique (DA) ou directement des équipes marketing et commerciales
   Intervention en support du DA sur l’élaboration de concepts créatifs et la conception des maquettes'
   title2='Conception et réalisation des visuels:'
   paragraphe2='Travail sur l’ergonomie et la réalisation des éléments graphiques d’un site web en accord avec l’identité graphique de l’annonceur : définition du zoning, travail sur l’expérience utilisateur, respect de la charte graphique…
   Conception des éléments graphiques (logos, pictos, animations…) et des visuels (site internet, emailing, …) à partir des maquettes réalisées en amont'
  title3='Coordination de l’intégration:'
  paragraphe3='Suivi du travail des intégrateurs et validation de la qualité du rendu'
   

   
   
   
   />





   </>
      
  );
}

export default App;
