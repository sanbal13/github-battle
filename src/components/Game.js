import { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: '',
      playerTwo: '',
      playerOneSubmit: false,
      playerTwoSubmit: false,
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let textbox = event.target.querySelector('input');
    let githubId = textbox.value;
    let player;
    if (event.target.name === 'form1') {
      player = 'playerOne';
    } else {
      player = 'playerTwo';
    }
    let playerSubmit = player + 'Submit';
    fetch(`https://api.github.com/users/${githubId}`)
      .then((data) => data.json())
      .then((data) =>
        this.setState({
          [player]: data,
          [playerSubmit]: true,
        })
      );
  };
  handleChange = (event) => {
    let className = event.target.id;
    let submit = document.querySelector(`#${className}Submit`);
    submit.disabled = false;
  };
  handleClose = (event) => {
    let player = event.target.id;
    let submit = player + 'Submit';
    this.setState({
      [player]: '',
      [submit]: false,
    });
  };

  render() {
    let { playerOne, playerTwo } = this.state;
    return (
      <>
        <div className="container">
          <h2 className="game-heading">Players</h2>
          <div className="center gap">
            {this.state.playerOneSubmit ? (
              <div className="user flex">
                <div>
                  <img src={`${playerOne.avatar_url}`} alt={playerOne.login} />
                  <span className="login">{playerOne.login}</span>
                </div>
                <div
                  className="close center"
                  id="playerOne"
                  onClick={(event) => this.handleClose(event)}
                >
                  x
                </div>
              </div>
            ) : (
              <form action="" name="form1" onSubmit={this.handleSubmit}>
                <fieldset>
                  <legend>Player One:</legend>
                  <input
                    type="text"
                    name="user1"
                    id="user1"
                    placeholder="Github username"
                    onChange={this.handleChange}
                  />
                  <input
                    type="submit"
                    value="SUBMIT"
                    name="user1Submit"
                    id="user1Submit"
                    disabled
                  />
                </fieldset>
              </form>
            )}
            {this.state.playerTwoSubmit ? (
              <div className="user flex">
                <div>
                  <img src={`${playerTwo.avatar_url}`} alt={playerTwo.login} />
                  <span className="login">{playerTwo.login}</span>
                </div>
                <div
                  className="close center"
                  id="playerTwo"
                  onClick={(event) => this.handleClose(event)}
                >
                  x
                </div>
              </div>
            ) : (
              <form action="" name="form2" onSubmit={this.handleSubmit}>
                <fieldset>
                  <legend>Player Two:</legend>
                  <input
                    type="text"
                    name="user2"
                    id="user2"
                    placeholder="Github username"
                    onChange={this.handleChange}
                  />
                  <input
                    type="submit"
                    value="SUBMIT"
                    name="user2Submit"
                    id="user2Submit"
                    disabled
                  />
                </fieldset>
              </form>
            )}
          </div>
          {this.state.playerOneSubmit && this.state.playerTwoSubmit ? (
            <NavLink
              to={`/battle-ground/${this.state.playerOne.login}&${this.state.playerTwo.login}`}
            >
              <div className="battle">BATTLE</div>
            </NavLink>
          ) : (
            ''
          )}
        </div>
      </>
    );
  }
}

export default Game;
