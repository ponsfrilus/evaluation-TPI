import { ImportDataFromFile } from '../utils/LocalStorage'

const FileUploader = ({ onFileSelect }) => {
  const handleFileInput = (e) => {
    // const file = e.target.files[0]
    // console.log(file.name)
    // console.log(file.size)
    // console.log(file.type)
    // console.log(file.value)
    // console.log(file)
    const fileName = e.target.files[0].name
    const reader = new FileReader()
    reader.onload = async (e) => {
      const text = e.target.result
      // console.debug(text)
      let replaceData = window.confirm(`Êtes-vous sur de vouloir charger le fichier «${fileName}»`)
      if (replaceData) {
        ImportDataFromFile(text)
        document.getElementById('uploadJSONdata').value = "";
      }
    }
    reader.readAsText(e.target.files[0])
  }

  return (
    <div className="file-uploader" >
      <input id="uploadJSONdata" type="file" onChange={handleFileInput} />
    </div>
  )

}

export { FileUploader }
