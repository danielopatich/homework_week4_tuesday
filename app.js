$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});

var url = 'https://api.github.com/users/danielopatich/repos';


$.JSON('https://api.github.com/users/danielopatich/repos')
