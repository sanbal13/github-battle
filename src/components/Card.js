import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Loader from './Loader';
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    this.fetchData("all");
  }
  componentDidUpdate() {
    let link = this.props.link;
    console.log(link);
    /* this.fetchData(link);  */
  }
  fetchData = (link) => {
    let url =
    `https://api.github.com/search/repositories?q=stars:%3E1+language:${link}&sort=stars&order=desc&type=Repositories`;
  fetch(url)
    .then((data) => data.json())
    .then((data) => this.setState({ data: data.items }));
  }
  render() {
    let data = this.state.data;
    console.log(data);
    if (data === null) {
      return <Loader />;
    }
    return (
      <div className="popular-cards container ">
        <ul className="flex justify-space-evenly wrap gap">
          {data.map((channel, index) => {
            return (
              <li key={channel.owner.login + index} className="popular-card flex-23">
                <div className="align-center">
                  <h2
                    className="rank"
                    style={{ fontWeight: 300, fontSize: '2.5rem' }}
                  >{`# ${index + 1}`}</h2>
                  <div className="image">
                    <img
                      src={channel.owner.avatar_url}
                      alt={channel.owner.login}
                    />
                  </div>
                  <h3 className="popular-card-heading">
                    <a
                      href={channel.url}
                      style={{ color: 'brown', fontSize: '1.7rem' }}
                    >
                      {channel.owner.login}
                    </a>
                  </h3>
                </div>
                <h4 className="bold">
                  <FontAwesomeIcon
                    icon={solid('user')}
                    size="lg"
                    color="#f1cc85"
                  />{' '}
                  <a
                    href={channel.owner.html_url}
                    style={{ color: '#000', fontSize: '1.2rem' }}
                  >
                    {channel.owner.login}
                  </a>
                </h4>
                <h4 style={{ fontSize: '1.1rem' }}>
                  <FontAwesomeIcon
                    icon={solid('star')}
                    size="lg"
                    color="#FFD838"
                  />{' '}
                  {channel.stargazers_count.toLocaleString()}
                </h4>
                <h4 style={{ fontSize: '1.1rem' }}>
                  <FontAwesomeIcon
                    icon={solid('code-branch')}
                    size="lg"
                    color="#91C9F4"
                  />{' '}
                  {channel.forks.toLocaleString()}
                </h4>
                <h4 style={{ fontSize: '1.1rem' }}>
                  <FontAwesomeIcon
                    icon={solid('triangle-exclamation')}
                    size="lg"
                    color="#F18A93"
                  />{' '}
                  {channel.open_issues.toLocaleString()}
                </h4>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Card;
