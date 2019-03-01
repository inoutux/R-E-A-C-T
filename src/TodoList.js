import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./index.css";
import "./TodoList.css";
 
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      });
      this._inputElement.value = "";
    }
     
    console.log(this.state.items);
       
    e.preventDefault();
  }

	deleteItem(key) {
	  var filteredItems = this.state.items.filter(function (item) {
	    return (item.key !== key);
	  });
	 
	  this.setState({
	    items: filteredItems
	  });
	}

  render() {
    return (
      	<div className="bs-docs-section">
	        <div className="row">
	        	<div className="col-lg-12">
	            	<h1 className="text-center">Bienvenid@ a tu organizador de Tareas</h1>
	          	</div>
	        </div>
	        <div className="row">
	        	<div className="col-lg-6">
		        	<div className="card text-white bg-success">
		        		<div className="card-header">Ingresa tus tareas tareas</div>
		                <div className="card-body">
				          <form onSubmit={this.addItem}>
				            <input ref={(a) => this._inputElement = a} placeholder="...quiero dormir">
				            </input>
				            <button type="submit">¡Dale Gas!</button>
				          </form>
				        </div>
			        </div>
			    </div>
			    <div className="col-lg-6">
			       <TodoItems entries={this.state.items} delete={this.deleteItem}/>
				</div>
			</div>	
      	</div>
    );
  }
}
 
export default TodoList;