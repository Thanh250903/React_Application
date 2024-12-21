import React from 'react'
// second components

export default function TodoList() {
    const todos = ['Go to the gym',
        'Working on company',
        'Eat dinner'
    ]

  return (
    <ul className='main'>
        {todos.map((todo, todoIndex) => {
            return (
                <div>
                    <li className='todoItem' key={todoIndex}>{todo}</li>

                </div>
            )
            

        })} 
    </ul>
  )
}
