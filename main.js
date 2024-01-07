document.addEventListener("DOMContentLoaded", function () {
  var countries = [
    { text: "Afghanistan (Pashto)", value: "AF", language: "Pashto and Dari" },
    { text: "Åland Islands (Swedish)", value: "AX", language: "Swedish" },
    { text: "Albania (Albanian)", value: "AL", language: "Albanian" },
    { text: "Algeria (Arabic)", value: "DZ", language: "Arabic" },
    { text: "American Samoa (English)", value: "AS", language: "English" },
    { text: "Andorra (Catalan)", value: "AD", language: "Catalan" },
    { text: "Angola (Portuguese)", value: "AO", language: "Portuguese" },
    { text: "Anguilla (English)", value: "AI", language: "English" },
    { text: "Antarctica (Various)", value: "AQ", language: "Various" },
    { text: "Antigua and Barbuda (English)", value: "AG", language: "English" },
    { text: "Argentina (Spanish)", value: "AR", language: "Spanish" },
    { text: "Armenia (Armenian)", value: "AM", language: "Armenian" },
    {
      text: "Aruba (Dutch and Papiamento)",
      value: "AW",
      language: "Dutch and Papiamento",
    },
    { text: "Australia (English)", value: "AU", language: "English" },
    { text: "Austria (German)", value: "AT", language: "German" },
    { text: "Azerbaijan (Azerbaijani)", value: "AZ", language: "Azerbaijani" },
    { text: "Bahamas (English)", value: "BS", language: "English" },
    { text: "Bahrain (Arabic)", value: "BH", language: "Arabic" },
    { text: "Bangladesh (Bengali)", value: "BD", language: "Bengali" },
    { text: "Barbados (English)", value: "BB", language: "English" },
    // ... (add the rest of the countries)
    { text: "United States (English)", value: "US", language: "English" },
    // ... (add any other modifications)
    { text: "Zimbabwe (English)", value: "ZW", language: "English" },
  ];

  for (var i = 0; i < countries.length; i++) {
    countries[i].image =
      "https://cdn.jsdelivr.net/npm/svg-country-flags@1.2.10/svg/" +
      countries[i].value.toLowerCase() +
      ".svg";
  }

  jSuites.dropdown(document.getElementById("dropdown"), {
    data: countries,
    autocomplete: true,
    multiple: false,
    width: "100%",
    style: {
      "border-radius": "10px",
      border: "none",

      // Change the color code as needed
    },
  });
});
