$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});


var url = 'https://api.github.com/users/danielopatich/repos';
var repoFeed = $('.repoLog');

$.getJSON('https://api.github.com/users/danielopatich/repos').done(function(data){
 var displayRepos = function(repos) {
   repos.forEach(function(repo) {

     var repoContainer = $('<section class="repo"></section>');
     var nameContainer = $('<a class="name" href="'+ repo.html_url +'">' + repo.name + '</a>');

     repoContainer.append(nameContainer);
     repoFeed.prepend(repoContainer);
   });
 }
 displayRepos(data);
});




//
// forEach(function (arr, index, array)
