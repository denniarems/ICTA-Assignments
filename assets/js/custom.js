$(document).ready(function() {
  $("main#spapp > section").height($(document).height() - 75);

  var app = $.spapp({ pageNotFound: "error_404" }); // initialize

  // define routes
  app.route({
    view: "view_1",
    load: "home.html"
  });
  app.route({
    view: "view_2",
    load: "about.html"
  });
  app.route({
    view: "view_3",
    load: "service.html"
  });

  // run app
  app.run();
});
