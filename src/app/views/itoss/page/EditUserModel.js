var React = require('react');
var ReactDOM = require('react-dom');
require('bootstrap');

var ReactRouter = require('react-router');
import EditUser from '../component/indexPages/department/Mengban/EditUser';

var editUserModal = React.createClass({
    render:function(){
        return (
            <div className="modal fade" id="editUserModel" tabIndex="-1" role="dialog" aria-labelledby="editUserModelLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <EditUser />
                </div>
            </div>
        );
    }
});

module.exports = editUserModal;

