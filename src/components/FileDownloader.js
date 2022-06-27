import { ExportDataToFile } from '../utils/LocalStorage'

// https://theroadtoenterprise.com/blog/how-to-download-csv-and-json-files-in-react
const downloadFile = ({ data, fileName, fileType }) => {
  // Create a blob with the data we want to download as a file
  const blob = new Blob([data], { type: fileType })
  // Create an anchor element and dispatch a click event on it
  // to trigger a download
  const a = document.createElement('a')
  a.download = fileName
  a.href = window.URL.createObjectURL(blob)
  const clickEvt = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  })
  a.dispatchEvent(clickEvt)
  a.remove()
}

const ExportToJson = e => {
  e.preventDefault()
  downloadFile({
    data: JSON.stringify(ExportDataToFile(), null, 2),
    fileName: 'evaluation-TPI.json',
    fileType: 'text/json',
  })
}

export { ExportToJson }
