import React, { Component } from 'react'; //import React Component

const EXAMPLE_SENATORS = [  
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */
export class App extends Component {
  render(){
    return(
    <div className = "container">
      <h1>US Senators 2019</h1>
      <SenatorTable sentors={this.props.senator} />
    </div>);
  }
}

export class SenatorTable extends Component{
  render(){
  
    return(
    <table className="table table-bordered">
    <TableHeader cols={['Name','State','Phone','Twitter']} />
    <tbody>{
    this.props.senators.map((senator)=>
      <SenatorRow key={senator.name} senator={senator}/>
    )}
    </tbody>
    </table>);
  }
}

export class TableHeader extends Component{
  render(){
    let col=this.props.cols;
    return(
      <thead>
      <tr>{col.map((colName)=> <th key={colName}>{colName}</th>)}
      </tr>
      </thead>
    );
  }
}
export class SenatorRow extends Component{
  render(){
    let name=this.props.senator.name;
    let state=this.props.senator.state;
    let party=this.props.senator.party;
    let twitter = this.props.senator.twitter;
    let phone = this.props.senator.phone;
    return (
      <tr>
      <td>{name}</td>
      <td>{party.substring(0,1)+" - "+state}</td>
      <td><a href={"tel:"+phone}>{phone}</a></td>
      <td><a href={"https://twitter.com/"+twitter}>{"@"+twitter}</a></td>
      </tr>
    );
  }
}


