const todos = [
  {
    id: 1,
    title: 'Go to hospital',
    complited: true
  },
  {
    id: 2,
    title: 'Go to concert',
    complited: false
  },
  {
    id: 3,
    title: 'Go to eat',
    complited: true
  }
]

for(let todo of todos) {
  if(todo.complited === true){
    console.log(todo.title);
  }
}

for(let i in todos) {
  let todo = todos[i];
  if(todos[i].complited === true) {
    console.log(todos[i].title)
  };
}