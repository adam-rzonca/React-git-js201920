import React from "react";

// Zadanie 4
// Przygotuj komponent zegarek, który będzie pokazywał aktualną godzinę.
// Komponent powinien odświeżać czas co sekunde.
// Dodaj przycisk aby była możliwość pokazania / ukrycia zegarka.
// Pamiętaj o wyczyszczeniu setInterval, zaobserwuj co sie stanie jak tego nie zrobisz.
// Zadanie zrealizuj przy użyciu Class Component.

class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log("update clock");
      this.setState({ date: new Date() });
    }, 1000);
  }

  render() {
    const { date } = this.state;
    return <div>{date.toTimeString()}</div>;
  }
}

class App extends React.Component {
  state = { showClock: true };

  toggleClock = () => {
    this.setState((state) => ({
      showClock: !state.showClock,
    }));
  };

  render() {
    const { showClock } = this.state;
    return (
      <div>
        <button onClick={this.toggleClock}>Show/hide clock</button>
        {showClock && <Clock />}
      </div>
    );
  }
}

export default App;
