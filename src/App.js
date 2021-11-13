import logo from './logo.svg';
import tick from './img/tick.png';
import './App.css';
import './components/TodoItem.css';
import TodoItem from './components/TodoItem';
import { Component } from 'react/cjs/react.production.min';


class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
      todoItems: [
        {title: "Đi chợ", isComplete: false},
        {title: "Đổ xăng", isComplete: true},
        {title: "Lau nhà", isComplete: false}
      ],
      number: 0
    };
    
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    // khong can bind cho onItemClicked bởi vì dòng 31 khi load trang thì hàm onClick được chạy và ngữ cảnh lúc đó chính là App
    
  }


  onItemClicked(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);

      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      })
    }
  }

  onKeyUp(event) {
    if (event.keyCode === 13) { // enter key
      let text = event.target.value.trim();
      if (!text) { return }

      this.setState({
        newItem: "",
        todoItems: [
          {title: text, isComplete: false},
          ...this.state.todoItems
        ]
      })
    }



  }

  onChange(event) {
    let newItem = event.target.value;
    this.setState({
      newItem: newItem
    })
  }
 

  render() {
    const { todoItems } = this.state;
    if (todoItems.length) {
      return (
        <div className="App">
            <div className="Header" >
              <img src={tick} width={32} />
              <input 
                type="text" 
                placeholder="Add a new item" 
                onKeyUp={this.onKeyUp} 
                value={this.state.newItem} 
                onChange={this.onChange}/>
            </div>
            { todoItems.length && todoItems.map((item, index) => 
                <TodoItem 
                  item={item} 
                  onClick={this.onItemClicked(item)}
                  i={index} 
                />
              )
            }
            {todoItems.length === 0 && <TodoItem item={{title: 'Nothing here'}} />}
        </div>
          
      );
    } else {
      return (
        <div className="App">
          Nothing here
        </div>
          
      );
    } 
  }
}


export default App;
