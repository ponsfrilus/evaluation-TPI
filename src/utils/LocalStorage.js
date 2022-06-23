import { ptsChange } from './Calculation.js'


// TODO: use object in local storage with the URL as the key
//       see https://stackoverflow.com/a/3146971/960623


const localStorageEntriesPrefix = 'evalTPI_'

const LocalStorageSave = () => {
  const inputs = document.querySelectorAll('input')
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

  console.log('Something has been saved... maybe')
}

const LocalStorageLoad = () => {
  const inputs = document.querySelectorAll('input')
  for (let inp of inputs) {
    let curr_val = localStorage.getItem(`${localStorageEntriesPrefix}${inp.id}`)
    document.getElementById(inp.id).value = curr_val
  }
  const textarea = document.querySelectorAll('textarea[id$="_justification"]')
  for (let ta of textarea) {
    let curr_val = localStorage.getItem(`${localStorageEntriesPrefix}${ta.id}`)
    document.getElementById(ta.id).value = curr_val
  }

  document.getElementById(
    'EvaluationComment_comment'
  ).value = localStorage.getItem(`${localStorageEntriesPrefix}EvaluationComment_comment`)
  console.log('Something has been loaded... maybe')
}

const LocalStorageClear = () => {
  const inputs = document.querySelectorAll('input')
  for (let inp of inputs) {
    document.getElementById(inp.id).value = ''
  }
  const textarea = document.querySelectorAll('textarea[id$="_justification"]')
  for (let ta of textarea) {
    document.getElementById(ta.id).value = ''
  }
  localStorage.clear()
  console.log('Something has been cleared... maybe')
  ptsChange()
}

const ExportLocalStorage = () => {
  let myLocalStorage = {}
  for (var i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).startsWith(localStorageEntriesPrefix)) {
      myLocalStorage[`${localStorage.key(i)}`] = localStorage.getItem(localStorage.key(i))
    }
  }
  return myLocalStorage
}

export { LocalStorageSave, LocalStorageLoad, LocalStorageClear, ExportLocalStorage }
