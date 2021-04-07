import React from 'react'

class DocumentationPage1 extends React.Component {
  render() {
    return (
      <div className={`DocumentationPage1`}>
        <blockquote className="bd-callout bd-callout-warning">
          Ce document ne doit en aucun cas être montré au candidat après
          l'attribution des points.
        </blockquote>
        <h2>Conseils pour l'évaluation et l'attribution de la note</h2>
        <h3>Documentation</h3>
        <p>
          Les experts/expertes traitent tous les documents de manière
          confidentielle. La conservation des dossiers est régie par le droit
          cantonal.
        </p>
        <h3>Évaluation</h3>
        <p>
          Le/la chef/-e de projet du TPI et les experts/expertes évaluent les
          compétences professionnelles élargies, le résultat et les compétences
          professionnelles.
        </p>
        <p>L'évaluation du TPI est répartie comme suit :</p>
        <ul>
          <li>
            <b>Partie A</b>&thinsp;: Compétences professionnelles (20 critères)
            <ul>
              <li>6 critères relatifs à l'analyse et au concept</li>
              <li>
                7 critères relatifs à la réalisation, aux tests et aux résultats
                du TPI
              </li>
              <li>
                7 critères spécifiques à la tâche demandée par le supérieur
                professionnel
              </li>
            </ul>
          </li>
          <li>
            <b>Partie B</b>&thinsp;: Documentation / rapport du TPI (10
            critères)
          </li>
          <li>
            <b>Partie C</b>&thinsp;: Entretien professionnel et présentation (10
            critères)
          </li>
        </ul>
      </div>
    )
  }
}

export { DocumentationPage1 }
