const LocalStorageSave = () => {
  const inputs = document.querySelectorAll('input')
  for (let inp of inputs) {
    localStorage.setItem(inp.id, inp.value);
  }
  const textarea = document.querySelectorAll('textarea')
  for (let ta of textarea) {
    localStorage.setItem(ta.id, ta.value);
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
  const textarea = document.querySelectorAll('textarea')
  for (let ta of textarea) {
    let curr_val = localStorage.getItem(ta.id);
    document.getElementById(ta.id).value = curr_val;
  }
  console.log("Something has been loaded... maybe");
}

const LocalStorageClear = () => {
  const inputs = document.querySelectorAll('input')
  for (let inp of inputs) {
    document.getElementById(inp.id).value = '';
  }
  const textarea = document.querySelectorAll('textarea')
  for (let ta of textarea) {
    document.getElementById(ta.id).value = '';
  }
  localStorage.clear();
  console.log("Something has been cleared... maybe");
}

export {LocalStorageSave, LocalStorageLoad, LocalStorageClear};
