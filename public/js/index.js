
// redirect people to rocket.chat/docs if they try and browse the github pages version
if(location.hostname == "rocketchat.github.io" && location.href.indexOf('?noredirect') == -1) {
  location="https://rocket.chat" + location.pathname
}

function scroll_toc(path) {
  // remove base either '/docs/' or '/'
  var base = '/docs/';

  path = path.indexOf(base) == 0? path.substring(base.length) : path.substring(1);

  if(path[path.length - 1] == '/') {
    path = path.substring(0, path.length - 1);
  }

  path = '.' + path.split('/').join(' .');

  $('.active').removeClass('active');

  if(path.length > 1) {
    $(path).addClass('active');

    while(path.lastIndexOf(' ') > -1) {
      path = path.substring(0, path.lastIndexOf(' '));
      $(path).addClass('active');
    }
  }
}

$(function() {
  return $("h2, h3, h4, h5, h6").each(function(i, el) {
    var $el, icon, id;
    $el = $(el);
    id = $el.attr('id');
    icon = '<img src="../../images/icons/link.svg">';
    if (id) {
      return $el.prepend($("<a />").addClass("header-link").attr("href", "#" + id).html(icon));
    }
  });
});

$(document).ready(function() {
  scroll_toc(window.location.pathname);

  var app = new senna.App();

  if(location.hostname == "rocketchat.github.io" || location.hostname == "rocket.chat") {
    app.setBasePath('/docs/');
  }
  else {
    app.setBasePath('/');
  }

  app.addSurfaces('content');
  app.addRoutes(new senna.Route(/.*/, senna.HtmlScreen));

  app.on('startNavigate', function(event) {
    scroll_toc(event.path)
  });

  app.on('endNavigate', function(event) {
    var hash = event.path.indexOf('#');

  	if (hash !== -1) {
  		location.hash = path.substr(hash);
  	}
    else {
  		$('#content').scrollTop(0);
  	}
  });
});
