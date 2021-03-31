const ptsChange = () => {
  const input_pts = document.querySelectorAll('.EvaluationMark')
  let marks = {
    A: [],
    B: [],
    C: [],
  }
  for (let inp of input_pts) {
    let qID = inp.id.replace('_pts', '') // return A11
    let part = qID.replace(/[0-9]/g, '') // return A
    marks[part].push([qID, inp.value])
  }

  let markTotal = {
    A: 0,
    B: 0,
    C: 0,
    Tot: 0,
    Grade: 0,
  }
  for (let mPart in marks) {
    marks[mPart].forEach((item, i) => {
      if (item[1] && typeof parseInt(item[1]) === 'number') {
        markTotal[mPart] += parseInt(item[1])
        markTotal['Tot'] += parseInt(item[1])
      }
    })
    document.getElementById('part' + mPart + 'MarkSum').innerHTML =
      markTotal[mPart]
  }
  // Note (5 * somme / 120) + 1
  markTotal['Grade'] = (5 * markTotal['Tot']) / 120 + 1

  document.getElementById('partTotMarkSum').innerHTML = markTotal['Tot']

  // TODO: improve UI in case all the points are not set
  document.getElementById('partFinGradeNoRound').innerHTML =
    '(' + markTotal['Grade'].toFixed(5) + ')'
  document.getElementById('partFinGrade').innerHTML =
    '<b>' + markTotal['Grade'].toFixed(1) + '</b>'
}

export { ptsChange }
