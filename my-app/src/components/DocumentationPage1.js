import React from 'react'
class DocumentationPage1 extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    return(
      <div className={`DocumentationPage1`}>
        <p>
          Ce document ne doit en aucun cas être montré au candidat après l’attribution des points.
        </p>
        <h2>
           Conseils pour l’évaluation et l’attribution de la note
        </h2>
        <h3>Documentation</h3>
        <p>
          Les experts/expertes traitent tous les documents de manière confidentielle. La conservation des dossiers est régie par le droit cantonal.
        </p>
        <h3>Evaluation</h3>
        <p>
          Le/la chef/-e de projet du TPI etles experts/expertes évaluent les compétences professionnelles élargies, le résultat et les compétences professionnelles.<br />
          L’évaluation du TPI est répartie comme suit :
        </p>
        <ul>
          <li>Partie A: Compétences professionnelles (20 critères)
            <ul>
              <li>-6 critères relatifs à l’analyse et au concept</li>
              <li>-7 critères relatifs à la réalisation, aux tests et au résultats du TPI</li>
              <li>-7 critères spécifiques à la tâche demandée par le supérieur professionnel</li>
            </ul>
          </li>
          <li>Partie B: Documentation / rapport du TPI (10 critères)</li>
          <li>Partie C: Entretien professionnel et présentation (10 critères)</li>
        </ul>
      </div>
    )
  }
}

export{DocumentationPage1}
