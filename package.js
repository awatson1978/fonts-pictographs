Package.describe({
  summary: 'fonts-pictographs is a Meteorite package for adding the 3 of 9 Barcode font to Meteor apps.',
  version: '1.0.0',
  name: 'awatson1978:fonts-pictographs',
  git: 'http://github.com/awatson1978/fonts-pictographs.git'
});

Package.on_use(function (api) {
    api.addFiles('fonts/ModernPictographs.otf', 'client');
    api.addFiles('fonts-pictographs.css', 'client');
});
