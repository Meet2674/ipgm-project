$(document).ready(function() {
  console.log('success');
  var yourarticles = [{
      Cardtitle: "The Red Violin",
      Cardsubtitle: "1998",
      sometext: "François Girard"
    },
    {
      Cardtitle: "The Red Violin",
      Cardsubtitle: "1998",
      sometext: "François Girard"
    },
    {
      Cardtitle: "The Red Violin",
      Cardsubtitle: "1998",
      sometext: "François Girard"
    }
  ];

  var likedarticles = [{
      Cardtitle: "The Red Violin",
      Cardsubtitle: "6969",
      sometext: "François Girard"
    },
    {
      Cardtitle: "The Red Violin",
      Cardsubtitle: "6969",
      sometext: "François Girard"
    },
    {
      Cardtitle: "The Red Violin",
      Cardsubtitle: "6969",
      sometext: "François Girard"
    },
    {
        Cardtitle: "The Red Violin",
        Cardsubtitle: "6969",
        sometext: "François Girard"
      },
      {
        Cardtitle: "The Red Violin",
        Cardsubtitle: "6969",
        sometext: "François Girard"
      },
      {
        Cardtitle: "The Red Violin",
        Cardsubtitle: "6969",
        sometext: "François Girard"
      }
  ];
  // Your Articles render
  var your_markup = '<div class="card article-cards" style="width: 18rem;display: inline-block;"><div class="card-body border border-dark "><h5 class="card-title">${Cardtitle}</h5><h6 class="card-subtitle mb-2 text-muted">${Cardsubtitle}</h6><p class="card-text">${sometext}.</p><a href="#" class="btn btn-primary btn-edit"><i class="tiny material-icons edit-icon">edit</i></a>></div></div>';
  $.template("cardTemplate", your_markup);
  $.tmpl("cardTemplate", yourarticles).appendTo("#your-articles");
  // Liked Articles render
  var liked_markup = '<div class="card article-cards" style="width: 18rem;display: inline-block;"><div class="card-body border border-dark "><h5 class="card-title">${Cardtitle}</h5><h6 class="card-subtitle mb-2 text-muted">${Cardsubtitle}</h6><p class="card-text">${sometext}.</p></div></div>';
  $.template("cardTemplate", liked_markup);
  $.tmpl("cardTemplate", likedarticles).appendTo("#liked-articles");
});
