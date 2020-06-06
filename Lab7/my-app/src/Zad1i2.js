import React from "react";

// 1. Stworz komponent, który będzie wyświetlal przycisk oraz informacje o tym ile razy został wciśnięty.
// Pamiętaj o zbindowaniu funkcji obslugujacej klikniecie.

// 2. Spraw aby komponent z Zadania 1 odświeżał infomacje o liczbie kliknięć tylko w przypadku parzystej liczby.
// Wykorzystaj shouldComponentUpdate

class App extends React.Component {
  constructor() {
    super();

    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count % 2 === 0;
  }

  increment() {
    this.setState((state) => ({ count: state.count + 1 }));
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        Clicks :<button onClick={this.increment}>{count}</button>
      </div>
    );
  }
}

export default App;
