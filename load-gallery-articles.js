$(document).ready(function() {
  console.log('success');
  var yourarticles = [{
    Cardtitle: "The Red Violin",
    Cardsubtitle: "1998",
    sometext: "François Girard",
    category:1
    },
    {
      Cardtitle: "The Red Violin",
      Cardsubtitle: "1998",
      sometext: "François Girard",
      category:1
    },
    {
      Cardtitle: "The Red Violin",
      Cardsubtitle: "1998",
      sometext: "François Girarddsfgdfgdgfdfgdfgdfgdgdggdfgdg",
      category:3
    }
  ];
  // Your Articles render
  var markup1 = '<li class="filtr-item " data-category="${category}" style="opacity: 1; transform: scale(1) translate3d(0px,0px,0px);backface-visibility: hidden;';
var markup2 = 'perspective: 1000px; transform-style: preserve-3d; position: absolute;transition: all 0.5s ease-in-out 0ms; pointer-events: auto;"><div class="card article-cards" style="width: 18rem;display: inline-block;"><div class="card-body border border-dark "><h5 class="card-title">${Cardtitle}</h5><h6 class="card-subtitle mb-2 text-muted">${Cardsubtitle}</h6><p class="card-text">${sometext}.</p></div></div></li>';


  $.template("cardTemplate", markup1+markup2);
  $.tmpl("cardTemplate", yourarticles).appendTo("#article-holder");
});
