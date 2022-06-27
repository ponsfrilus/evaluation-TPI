import { ptsChange } from './Calculation.js'

// TODO: use object in local storage with the URL as the key
//       see https://stackoverflow.com/a/3146971/960623

const localStorageEntriesPrefix = 'evalTPI_'

const LocalStorageSave = () => {
  console.log('Saving data...')
  const inputs = document.querySelectorAll('input[type=text], input[type=number]')
  for (let inp of inputs) {
    localStorage.setItem(`${localStorageEntriesPrefix}${inp.id}`, inp.value)
  }

  // For some reason, materlize-ui add an hidden texaera,
  // so the query has to be more precise...
  const ta_justification = document.querySelectorAll(
    'textarea[id$="_justification"]'
  )
  for (let ta of ta_justification) {
    localStorage.setItem(`${localStorageEntriesPrefix}${ta.id}`, ta.value)
  }

  const ta_remark = document.getElementById('EvaluationComment_comment')
  localStorage.setItem(`${localStorageEntriesPrefix}${ta_remark.id}`, ta_remark.value)
}

const GetCandidateName = () => {
  return localStorage.getItem(`${localStorageEntriesPrefix}cand_name`) ?? null
}

const LocalStorageLoad = () => {
  console.log('Loading data...')
  const inputs = document.querySelectorAll('input[type=text], input[type=number]')
  for (let inp of inputs) {
    let curr_val = localStorage.getItem(`${localStorageEntriesPrefix}${inp.id}`) ?? ''
    if (curr_val !== null && curr_val !== '') {
      document.getElementById(inp.id).value = curr_val
    }
  }
  const textarea = document.querySelectorAll('textarea[id$="_justification"]')
  for (let ta of textarea) {
    let curr_val = localStorage.getItem(`${localStorageEntriesPrefix}${ta.id}`) ?? ''
    if (curr_val !== null && curr_val !== '') {
      document.getElementById(ta.id).value = curr_val
    }
  }
  document.getElementById(
    'EvaluationComment_comment'
  ).value = localStorage.getItem(`${localStorageEntriesPrefix}EvaluationComment_comment`) ?? ''
}

const LocalStorageClear = () => {
  console.log('Clearing data...')
  const inputs = document.querySelectorAll('input[type=text], input[type=number]')
  for (let inp of inputs) {
    document.getElementById(inp.id).value = ''
  }
  const textarea = document.querySelectorAll('textarea[id$="_justification"]')
  for (let ta of textarea) {
    document.getElementById(ta.id).value = ''
  }
  localStorage.clear()
  ptsChange()
}

const ImportDataFromFile = (data) => {
  console.log('Importing data...')
  let myData = JSON.parse(data)
  LocalStorageClear()
  for (const key in myData) {
    //console.log(`${key}: ${myData[key]}`)
    localStorage.setItem(key, myData[key])
  }
  LocalStorageLoad()
  ptsChange()
}

const ExportDataToFile = () => {
  console.log('Exporting data...')
  let myLocalStorage = {}
  for (var i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).startsWith(localStorageEntriesPrefix)) {
      myLocalStorage[`${localStorage.key(i)}`] = localStorage.getItem(localStorage.key(i))
    }
  }
  return myLocalStorage
}

export { LocalStorageSave, LocalStorageLoad, LocalStorageClear, ImportDataFromFile, ExportDataToFile, GetCandidateName }
