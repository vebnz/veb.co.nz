const darkmode = new darken({
  variables: {
      "--page-bg-color" : ["#fdfdfd", "#36393f"],
      "--page-font-color" : ["#000", "#FFF"],
      "--page-link-color" : ["#1B55A1 ", "#FFF"],
      "--page-link-visited-color" : ["#1B55A1", "#747a86"],
      "--page-paragraph-color" : ["#000", "#bec6d6"],
      "--page-text-color" : ["#000", "#ffdc00"],
      "--page-post-meta": ["#545454", "#ffdc00"],
      "--page-code-color": ["#94004A", "#94004A"]

  },
  toggle: "#theme-toggle",
  remember: true,
}, function(active) {
  document.querySelector('#theme-toggle').innerHTML = active?'Light':'Dark'
});