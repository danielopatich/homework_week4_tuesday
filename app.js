var url = 'https://api.github.com/users/danielopatich/repos';

$.getJSON('https://api.github.com/users/danielopatich/repos').done(function(data){
 console.log(data);

 var displayRepos = function(repos) {
   repos.forEach(function(repo) {
     console.log(repo);
     var repoFeed = $('.repoLog');
     var title = $('<section class="repoLog"> ' + '<a class="repoUrl"> ' +
        repo.name + '</a> ' + '<div class= "repoRef"> ' + '</div> ' + '</section>');
     repoFeed.append(repo.name);

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
