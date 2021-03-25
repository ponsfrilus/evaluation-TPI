const LocalStorageSave = () => {
  const inputs = document.querySelectorAll('input')
  for (let inp of inputs) {
    localStorage.setItem(inp.id, inp.value);
  }
  
  // var testObject = { 'one': 1, 'two': 2, 'three': 3 };
  // localStorage.setItem("myFabulousData", JSON.stringify(testObject));
  console.log("Something has been saved... maybe");
}
const LocalStorageLoad = () => {
  const inputs = document.querySelectorAll('input')
  for (let inp of inputs) {
    let curr_val = localStorage.getItem(inp.id);
    document.getElementById(inp.id).value = curr_val;
  }
  console.log("Something has been loaded... maybe");
}
export {LocalStorageSave, LocalStorageLoad};
