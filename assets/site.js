//load URL parameters
function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

function updateURLParameters(datahash) {
  console.log(window.location.pathname);
  var newurl = window.location.pathname+"?data="+datahash;
  window.history.pushState("", "", newurl);
}
