import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Router, Route, Link, IndexRoute} from 'react-router';
import EquipmentTestTxtNormal from './EquipmentTestTxtNormal';
import EquipmentTestTxtError from './EquipmentTestTxtError';
import EquipmentTestTxtDanger from './EquipmentTestTxtDanger';
import EquipmentTestTxtForbid from './EquipmentTestTxtForbid';
var EquipmentTestTxt = React.createClass({
			getInitialState:function(){
					return{
						page:'EquipmentTestTxtNormal'
					}
					},
				componentDidMount:function(){
					$('.equipmentTestTxtNormal1').css({'background':'#66c877','color':'white'})
                    $(".equipmentTestTxtNormal1").click(function(){
					      $(this).css({'background':'#66c877','color':'white'}).siblings().css({'background':'white','color':'#666666'})
					   })
                    $(".equipmentTestTxtNormal2").click(function(){
					      $(this).css({'background':'#6991ee','color':'white'}).siblings().css({'background':'white','color':'#666666'})
					    })
                    $(".equipmentTestTxtNormal3").click(function(){
					      $(this).css({'background':'#e19577','color':'white'}).siblings().css({'background':'white','color':'#666666'})
					   
                    })
                     $(".equipmentTestTxtNormal4").click(function(){
					      $(this).css({'background':'#db8cd4','color':'white'}).siblings().css({'background':'white','color':'#666666'})
					 
                    })
                    
                    
                    
                    
                    },
			  render:function() {
			  		var page = this.state.page;
					var content = [];
					 switch(page){
					 	case 'EquipmentTestTxtNormal':
					 	content.push(<EquipmentTestTxtNormal/>)
					 	break;
					 	case 'EquipmentTestTxtError':
					 	content.push(<EquipmentTestTxtError/>)
					 	break;
					 	case 'EquipmentTestTxtDanger':
					 	content.push(<EquipmentTestTxtDanger/>)
					 	break;
					 	case 'EquipmentTestTxtForbid':
					 	content.push(<EquipmentTestTxtForbid/>)
					 	break;
					 	
					   }					 
			    return (
			    		<div className =''>
			    				<div className='EquipmentkongTop'></div>
			    				<div className='EquipmentTestTxtTop'>
			    				<div className='equipmentTestTxtNormal equipmentTestTxtNormal1' id='idequipmentTestTxtNormal' onClick={this.toggle.bind(this,'EquipmentTestTxtNormal')}>
									 	<span>正常</span>
								 	</div>
								 	<div className='equipmentTestTxtNormal2' onClick={this.toggle.bind(this,'EquipmentTestTxtError')}>
									 	<span>错误</span>
								 	</div>
								 	<div className='equipmentTestTxtNormal3' onClick={this.toggle.bind(this,'EquipmentTestTxtDanger')}>
										<span>危险</span>
								 	</div>
								 	<div className='equipmentTestTxtNormal4' onClick={this.toggle.bind(this,'EquipmentTestTxtForbid')}>
										<span>禁止</span> 	
								 	</div>
							
								</div>
								<div className='equipmentTestTxt'>{content}</div>
						  </div>			
			  )},			  		  
			  toggle:function(page){
				this.setState({
					page:page
				})
			},
			  
});
export default EquipmentTestTxt
