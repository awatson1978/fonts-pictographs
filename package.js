Package.describe({
  summary: "fonts-barcode is a Meteorite package for adding the 3 of 9 Barcode font to Meteor apps."
});

Package.register_extension(
  "otf", function (bundle, source_path, serve_path, where) {
    bundle.add_resource({
      type: "static",
      path: '/fonts/' + serve_path.split('/').pop(),
      source_file: source_path,
      where: where
    });
  }
);

Package.on_use(function (api) {
    api.add_files('ModernPictographs.otf', "client");
    api.add_files('fonts-pictographs.css', "client");
});
