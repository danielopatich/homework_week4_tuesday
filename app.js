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
     console.log(repo);
     var repo = $('<section class="repo"></section>');
     var name = $('<a class="name" href="'+ repo.html_url +'">' + repo.name + '</a>');

     repo.append(name);
     repoFeed.append(repo);
   });
 }
 displayRepos(data);
});
// fixed repos from going infinte, but no cant get them to line in a row //












// var url = 'https://api.github.com/users/danielopatich/repos';
//
// var displayRepos = function(repos){
//   log.html('');
//
//   repos.forEach(function(repo){
//     var repoFeed = $('');
//     var repoName = $('<a href="' + repoUrl + '">' + repoName + '</a>');
//
//     repoFeed.append(repoName);
//     repoFeed.append(repoFeed);
//
//     log.append(repoName);
//
//   });
// }
//
// var getRepos = function(){
//   var success = function(data){
//     displayRepos(data);
//   }
//   $.get('https://api.github.com/users/danielopatich/repos', null, handleSuccess);
// };
