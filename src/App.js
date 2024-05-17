import React from "react";

export default class App extends React.Component {

  state = {
    someList: [
      {id:1,text:'one'},
       {id:2,text:'two'},
        {id:3,text:'three'},
         {id:4,text:'four'},
    ],
    lastId:4
  };
//   onAddClick = () => {
//     this.setState({
// someList: []
//     });
//   };
onAddClick =() => {
  const newId = this.state.lastId + 1;
  this.setState(prev => ({
    someList: [{id:newId,text:'newText'}, ...prev.someList]
    
  }));
};
  render()
  {
    return (
      <div>
        <button onClick={this.onAddClick}>Add</button>
        <ul>
          {this.state.someList.map(el => (
            <input key={el.id} type="text" value={el.text}/>
          ))}
        </ul>
      </div>
    )
  }
}