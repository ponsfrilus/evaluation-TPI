import { ptsChange } from './Calculation.js'
import { LocalStorageSave } from './LocalStorage'

const sampleData = () => {
  console.log('Loading sample data...')
  document.getElementById('cdp_name').value = 'Charles De Preux'
  document.getElementById('cdp_phone').value = '+41 21 111 22 33'
  document.getElementById('cdp_mail').value = 'cdp@tpivd.ch'
  document.getElementById('cand_name').value = 'Candide Hatte'
  document.getElementById('cand_phone').value = '+41 21 444 55 66'
  document.getElementById('cand_mail').value = 'candide.hatte@tpivd.ch'
  document.getElementById('exp1_name').value = 'André Céouver'
  document.getElementById('exp1_phone').value = '+41 21 693 11 11'
  document.getElementById('exp1_mail').value = 'andre.ceouver@tpivd.ch'
  document.getElementById('exp2_name').value = 'Henri Gole'
  document.getElementById('exp2_phone').value = '+79 765 43 21'
  document.getElementById('exp2_mail').value = 'henri.gole@tpivd.ch'

  const input_pts = document.querySelectorAll('input[id$="_pts"]')

  for (let inp of input_pts) {
    let qID = inp.id.replace('_pts', '') // return A11
    let grade = Math.random()
    if (0 <= grade && grade <= 0.1) {
      grade = 0
    } // 10% chance to get 0
    if (0.1 < grade && grade <= 0.3) {
      grade = 1
    } // 20% chance to get 1
    if (0.3 < grade && grade <= 0.6) {
      grade = 2
    } // 30% chance to get 2
    if (0.6 < grade && grade <= 1) {
      grade = 3
    } // 40% chance to get 3
    document.getElementById(inp.id).value = grade
    if (grade !== 3) {
      document.getElementById(
        `${qID}_justification`
      ).value = `Un commentaire pour ${qID}`
    } else {
      document.getElementById(`${qID}_justification`).value = ``
    }
    document
      .getElementById(inp.id)
      .closest('.MuiGrid-container').style.backgroundColor = ''
  }
  
  document.getElementById(
    'EvaluationComment_comment'
  ).value = 'Un commentaire général sur le TPI de Candide Hatte.'

  ptsChange()
  LocalStorageSave()
}

export { sampleData }
