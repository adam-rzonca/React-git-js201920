import React from "react";

// Zadanie 5
// Pobierz randomowego użytkownika korzystając z API https://randomuser.me/api/
// oraz wyświetl kartę z podstawowymi informacjami o nim.
// Dodaj przycisk, który wylosuje kolejnego użytkownika nie przeładowując całej strony.
// Pamiętaj o podejściu Presentational and Container Components,
// aby rozdzielić logike od warstwy prezentacji.

const UserInfo = ({ user }) => {
  console.log(user);
  const { name, email, picture } = user;

  const avatar = picture.large;
  const displayName = `${name.title} ${name.first} ${name.last}`;
  return (
    <div>
      <img src={avatar} alt="avatar" />
      <div>Name: {displayName}</div>
      <div>Email: {email}</div>
    </div>
  );
};

const DATA_STATE = { LOADING: "loading", LOADED: "loaded", ERROR: "error" };

class App extends React.Component {
  state = {
    user: null,
    status: DATA_STATE.LOADING,
  };

  async componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      this.setState({ status: DATA_STATE.LOADING });
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      const [user] = data.results;
      this.setState({ user, status: DATA_STATE.LOADED });
    } catch (e) {
      console.error(e.message);
      this.setState({ user: null, status: DATA_STATE.ERROR });
    }
  }

  reload = async () => {
    await this.fetchData();
  };

  render() {
    const { user, status } = this.state;

    if (status === DATA_STATE.ERROR) {
      return <h4>Something went wrong while data is loading...</h4>;
    }

    if (status === DATA_STATE.LOADING) {
      return <h4>Data is loading...</h4>;
    }

    return (
      <div>
        <UserInfo user={user} />
        <button onClick={this.reload}>Reload</button>
      </div>
    );
  }
}

export default App;
