var React = require('react');
var ReactDOM = require('react-dom');
require('bootstrap');

var ReactRouter = require('react-router');
import NewUser from '../component/indexPages/department/Mengban/NewUser';

var newUserModal = React.createClass({
  render:function(){
    return (
      <div className="modal fade" id="newUserModel" tabIndex="-1" role="dialog" aria-labelledby="newUserModelLabel" aria-hidden="true">
        <div className="modal-dialog">
              <NewUser />
        </div>
      </div>
    );
  }
});

module.exports = newUserModal;
