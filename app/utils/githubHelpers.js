var axios = require('axios');
var id = "33fb9c249780d84f7dfd";
var sec = "8eaa7f5772d778703fd1404fb64dc27adb0c93a8";
var param = "?client_id=" + id + "&client_secret=" + sec;


function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param)
}
var Helpers = {
  getPlayersInfo: function(players) {
    //fetch some data from github
    return axios.all(players.map(function(username) {
      return getUserInfo(username);
    })).then(function(info) {
      return info.map(function(user) {
        return user.data;
      })

    }).catch(function(err){
      console.warn('Error in getPlayerInfo ', err);
    })
  }
};
module.exports = Helpers;
