var React = require('react');
var PropTypes = React.PropTypes;

function UserDetails(user){
  return (
   <div>
     {!!user.score && <li className = "list-group-item"><h3>Score : {user.score}</h3></li>}
     <li className = "list-group-item"><img src={user.info.avatar_url}className="img-rounded img-responsive"/></li>
     {user.info.name && <li className = "list-group-item">UserName  {user.info.name}</li>}
     <li className = "list-group-item">UserName  {user.info.loginn}</li>
     {user.info.location && <li className = "list-group-item">location  {user.info.location}</li>}
     {user.info.company && <li className = "list-group-item">UserName  {user.info.company}</li>}
   </div>


  )
}
UserDetails.PropTypes = {
  
}

module.exports = UserDetails ;
