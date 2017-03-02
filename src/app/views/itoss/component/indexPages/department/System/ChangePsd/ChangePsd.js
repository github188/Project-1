import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
var Usermanager = require('../Usermanager/Usermanager');
var ChangePsd = React.createClass({
	
  render: function() {
    return (
    	<div>
    		<Usermanager/>
    	</div>
    		
  )}
});
module.exports = ChangePsd;
