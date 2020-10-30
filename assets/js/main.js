const darkmode = new darken({
  variables: {
      "--page-bg-color" : ["#fdfdfd", "#36393f"],
      "--page-font-color" : ["#000", "#FFF"],
      "--page-link-color" : ["#1B55A1 ", "#FFF"],
      "--page-link-visited-color" : ["#1B55A1", "#747a86"],
      "--page-paragraph-color" : ["#000", "#bec6d6"],
      "--page-text-color" : ["#000", "#f09b11"],
      "--page-post-meta": ["#545454", "#f09b11"],
      "--page-code-color": ["#94004A", "#94004A"],
      "--nav-icon-color": ["#94004A", "#94004A"],
      "--base-font-weight": [400, 500],
      "--logo-yellow": ["#fbb03b", "#f09b11"],
      "--logo-bottom": ["#534741", "#afafaf"],
      "--page-bg-text-color": ["#36393f", "#fdfdfd"],

  },
  toggle: "#theme-toggle",
  remember: true,
}, function(active) {
  var elem = document.querySelector('#theme-toggle')
  if (elem) {
    elem.innerHTML = active?'Light':'Dark'
  }
});