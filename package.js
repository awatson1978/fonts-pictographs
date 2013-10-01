Package.describe({
  summary: "fonts-barcode is a Meteorite package for adding the 3 of 9 Barcode font to Meteor apps."
});

Package.on_use(function (api) {
    api.add_files('fonts/ModernPictographs.otf', "client");
    api.add_files('fonts-pictographs.css', "client");
});
