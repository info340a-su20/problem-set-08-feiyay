import React, { Component } from 'react'; //import React Component
import './style.css';
import _ from 'lodash';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {pets: this.props.pets};
  }
  adopt = (name) => {
    this.setState((state)=>{
      let pet = _.find(state.pets,['name',name]);
      pet.adopted = true;
      return pet;
    })
  }
  render() {
    return (
      <div>
        <header className="jumbotron jumbotron-fluid py-4">
          <div className="container">
            <h1>Adopt a Pet</h1>
          </div>
        </header>

        <main className="container">
          <div className="row">
            <div id="navs" className="col-3">
              <BreedNav breeds={Object.keys(_.groupBy(this.state.pets,"breed"))}/>
              <AboutNav />
            </div>
          </div>
          <div id="petlist" className="col-9">
            <PetList pets={this.state.pets} adoptCallback={this.adopt}></PetList>
            </div>
        </main>
        <footer class="container">
    <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
  </footer>
      </div>
    );
  }
}
class AboutNav extends Component {
  render(){
    return (
      <nav id="aboutLinks">
        <h2>About</h2>
        <ul className="list-unstyled">
          <li><a href="#/">How to Adopt</a></li>
          <li><a href="#/">Volunteering</a></li>
          <li><a href="#/">Events</a></li>
          <li><a href="#/">Donate</a></li>
          <li><a href="#/">About Us</a></li>
        </ul>
      </nav>
    );
  }
}
class BreedNav extends Component {
  render() {
    return (
      <nav id="breedsLinks">
        <h2>Pick a Breed</h2>
        <ul className="list-unstyled">
          {this.props.breeds.map((breed)=>{
            return <li key={breed}><a href="#/">{breed}</a></li>
          })}
        </ul>
      </nav>
    );
  }
}
class PetCard extends Component{
  render(){
    let name = this.props.pet.name;
    let image= this.props.pet.img;
    let sex = this.props.pet.sex;
    let breed = this.props.pet.breed;
    let adoptCallback = this.props.adoptCallback;
    if(this.props.pet.adopted){
      name=name+" (Adopted)";
    }
    return (
      <div className="card" onClick={()=>{adoptCallback(name)}}>
        <img className="card-img-top" alt={name} src={image} />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
    <p className="card-text">{sex+" "+breed}</p>
        </div>
      </div>
    );
  }
}
class PetList extends Component{
  render (){
    let adoptCallback =this.props.adoptCallback;
    let petList = this.props.pets.map((petCard)=>
    <PetCard key={petCard.name} pet={petCard} adoptCallback={adoptCallback}/>)
    return(
      <div>
        <h2>Dogs for Adoption</h2>
        <div className="card-deck">
          {petList}
        </div>
      </div>
    );
  }
}



export default App;
