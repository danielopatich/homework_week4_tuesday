$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});


var url = 'https://api.github.com/users/danielopatich';
var repoFeed = $('.repoLog');
var followFeed = $('#leftColumn')

$.getJSON('https://api.github.com/users/danielopatich/repos').done(function(data){
 var displayRepos = function(repos) {

   repos.forEach(function(repo) {
     var time = moment(repo.updated_at).format('ll');
     var repoContainer = $('<section class="repo"></section>');
     var nameContainer = $('<a class="name" href="'+ repo.html_url +'">' + repo.name + '</a><a class="time"> Updated At ' + time + '</a>');

     repoContainer.append(nameContainer);
     repoFeed.prepend(repoContainer);
   });
 }
 displayRepos(data);
});



$.getJSON('https://api.github.com/users/danielopatich').done(function(data){
  console.log(data);
    profileStats = data;

    $(".profileBio").append("<li>" + profileStats.company + "</li>" )
    $(".profileBio").append("<li>" + profileStats.location + "</li>" )
    $(".profileBio").append("<li>" + profileStats.email + "</li>" )
    $(".profileBio").append("<li>" + profileStats.blog + "</li>" )
    $(".profileBio").append("<li>" + profileStats.created_at + "</li>" )

    $(".followStats").append("<h2> Followers " + profileStats.followers + "</h2>" )
    $(".followStats").append("<h2> Starred " + profileStats.followers + "</h2>" )
    $(".followStats").append("<h2> Following " + profileStats.following + "</h2>" )
});
