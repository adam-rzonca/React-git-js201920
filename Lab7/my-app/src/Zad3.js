import React from "react";

// Zadanie 3
// Napisz prostą aplikacje TODO.
// Zadania na liście powinne mieć przycisk umożliwiający oznaczenie ich jako wykonane.
// Wykonane zadania powinny znajdować się na końcu listy, a tytuł powinien być przekreślony.
// Tytuł strony powinien zawierać informacje o liczbie pozostałych zadań do wykonania.
// Zadanie zrealizuj przy użyciu Class Component.

class App extends React.Component {
  state = { todos: [] };
  inputRef = React.createRef();

  componentDidUpdate(prevProps, prevState) {
    const { todos } = this.state;

    const todosLeft = todos.filter((todo) => !todo.done);

    document.title = `Todos left: ${todosLeft.length}`;
  }

  handleAddTodo = () => {
    const title = this.inputRef.current.value;
    const item = { title, done: false };

    this.setState((state) => ({ todos: [...state.todos, item] }));
  };

  markAsDone = (item) => {
    const { todos } = this.state;

    const newTodos = todos.map((todo) => {
      if (todo === item) {
        return { ...todo, done: true };
      }

      return todo;
    });

    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    console.log(todos);

    const sortedTodos = todos.sort((t1, t2) => {
      return t1.done - t2.done;
    });

    return (
      <div>
        <h2>TODO</h2>
        <div>
          Zadanie:
          <input type="text" ref={this.inputRef}></input>
          <button onClick={this.handleAddTodo}>Dodaj</button>
        </div>
        <div>
          <h4> Twoje zadania:</h4>
          {sortedTodos.map((todo, index) => (
            <div key={index}>
              {todo.done ? (
                <del>{todo.title}</del>
              ) : (
                <>
                  {todo.title}
                  <button onClick={() => this.markAsDone(todo)}>
                    Mark as done
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
