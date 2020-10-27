const darkmode = new darken({
  variables: {
      "--page-bg-color" : ["#fdfdfd", "#36393f"],
      "--page-font-color" : ["#000", "#FFF"],
      "--page-link-color" : ["#000", "#FFF"],
      "--page-link-visited-color" : ["#000", "#747a86"],
      "--page-paragraph-color" : ["#000", "#bec6d6"],
      "--page-text-color" : ["#000", "#ffdc00"],

  },
  toggle: "#theme-toggle",
  remember: null,
}, function(active) {
  document.querySelector('#theme-toggle').innerHTML = active?'Light':'Dark'
});