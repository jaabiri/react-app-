var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var PromptContainer = require('../containers/PromptContainer');
var routes = (
  <Router hashHistory = {hashHistory}>
     <Route path='/' component = {Main}>
        <IndexRoute component = {Home} />
        <routes path='playerOne'  header ='playerOne' component = {PromptContainer} />
        <routes path='playerTwo/:playerOne' header='playerTwo' component = {PromptContainer} />
     </Route>
  </Router>
);
module.exports = routes ;
