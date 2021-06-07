import React from 'react';

function ListComponent(props) {
  console.log("this is first component props", props.items)
  return (
    <div>
      <ul> {props.items.map((item, index) => {
      return (
        <li key={index}><button onClick={() => props.deleteTodo(index)}>Done</button>{props.items[index]}</li>
      )
      })}
      </ul>
      </div>
  )
}

export default ListComponent;