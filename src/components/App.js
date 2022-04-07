import { Component } from 'react';
import Header from './Header';
import Card from './Card';
import Navigation from './Navigation';
import Instructions from './Instructions';
import Game from './Game';
import BattleGround from './BattleGround';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: 'all'
    };
  }
 
  handleNavigation = (link) => {    
      this.setState({
        link
      },() => {console.log("link: ", this.state.link);});
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Header /> 
          <Switch>  
          <Route path='/battle'exact>
          <Instructions />
          <Game />
          </Route>
          <Route path='/battle-ground/:players' component={BattleGround} />  
          <Route path={['/ruby', '/java', '/css', '/python']}>
          <Navigation handleNavigation={this.handleNavigation}/>  
          <Card link={this.state.link}/>
          </Route>
          <Route path='/' exact>
          <Navigation handleNavigation={this.handleNavigation}/>  
          <Card link={this.state.link}/>
          </Route> 
          </Switch>        
        </BrowserRouter>
      </>
    );
  }
}

export default App;
