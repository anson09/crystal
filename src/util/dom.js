function downloadBlob(name, blob) {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blob, name);
  } else {
    const a = document.createElement("a");
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = name;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}

function getPageOffsetY(query) {
  let el = document.querySelector(query);
  let y = el.offsetTop;
  el = el.offsetParent;
  while (el !== null) {
    y += el.offsetTop;
    el = el.offsetParent;
  }
  return y;
}
export { downloadBlob, getPageOffsetY };
