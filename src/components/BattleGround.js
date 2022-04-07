import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Loader from './Loader';
import { Link } from 'react-router-dom';

class BattleGround extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: '',
      playerTwo: '',
    };
    this.result = this.result.bind(this);
  }
  componentDidMount() {
    let players = this.props.match.params.players;
    players = players.split('&');
    this.fetchUser(players[0], 1);
    this.fetchUser(players[1], 2);
  }
  fetchUser = (githubId, index) => {
    let player = index === 1 ? 'playerOne' : 'playerTwo';
    fetch(`https://api.github.com/users/${githubId}`)
      .then((data) => data.json())
      .then((data) =>
        this.setState({
          [player]: data,
        })
      );
  };
  createPlayerCard = (player, result) => {
    return (
      <div className="player-card">
        <div className="result">{result}</div>
        <img src={player.avatar_url} alt="player.login" />
        <div className="score">{result}</div>
        <div className="id" style={{ color: '#BB331F' }}>
          {player.login}
        </div>
        <div className="name">
          <FontAwesomeIcon icon={solid('user')} size="lg" color="#EF7373" />{' '}
          {player.name}
        </div>
        <div className="location">
          <FontAwesomeIcon icon={solid('compass')} size="lg" color="#9172FA" />{' '}
          {player.location}
        </div>
        <div className="company">
          <FontAwesomeIcon
            icon={solid('briefcase')}
            size="lg"
            color="#795548"
          />{' '}
          {player.company}
        </div>
        <div className="followers">
          <FontAwesomeIcon
            icon={solid('users-line')}
            size="lg"
            color="#81C3F5"
          />{' '}
          {player.followers}
        </div>
        <div className="following">
          <FontAwesomeIcon
            icon={solid('user-plus')}
            size="lg"
            color="#55B75F"
          />{' '}
          {player.following}
        </div>
        <div className="repositories">
          <FontAwesomeIcon icon={solid('code')} size="lg" color="#3B4C55" />{' '}
          {player.public_repos}
        </div>
      </div>
    );
  };
  result = (myFollowers, opponentFollowers) => {
    return myFollowers > opponentFollowers
      ? 'Winner'
      : myFollowers === opponentFollowers
      ? 'Tie'
      : 'Loser';
  };
  render() {
    let { playerOne, playerTwo } = this.state;
    if (!playerOne || !playerTwo) {
      return <Loader />;
    }
    return (
      <div className="container">
        <h1>This is BattleGround</h1>
        <ul className="battle-ground flex  justify-center">
          <li>
            {this.createPlayerCard(
              playerOne,
              this.result(playerOne.followers, playerTwo.followers)
            )}
          </li>
          <li>
            {this.createPlayerCard(
              playerTwo,
              this.result(playerTwo.followers, playerOne.followers)
            )}
          </li>
        </ul>
        <Link to="/battle">
           <div className="button reset"> RESET </div>
        </Link>
      </div>
    );
  }
}

export default BattleGround;
