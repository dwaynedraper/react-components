// const Potatoes = () => (
//   <li>Potatoes</li>
// )
// const Beans = () => (
//   <li>Beans</li>
// )

// const GroceryListItem = (props) => (
//   <li>{props.item}</li>
// )
// const GroceryList = () => (
//     <ul>
//       <GroceryListItem item={'potatoes'} />
//       <GroceryListItem item={'beans'} />
//     </ul>
// )
// ReactDOM.render(<GroceryList />, document.getElementById('app'));

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      hovered : false
    }
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    })
  }
  onMouseOver() {
    this.setState({
      hovered: true
    })
  }
  onMouseOut() {
    this.setState({
      hovered: false
    })
  }
  render() {
    var style = {
      fontWeight: this.state.hovered ? 'bold' : 'normal',
      textDecoration: this.state.done ? 'line-through' : 'none'
    }
    return (
    <li style={style} onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)} onClick={this.onListItemClick.bind(this)}>{this.props.items}</li>
    )
  }
  // render() {
  //   var style = {
  //     fontWeight: this.state.done ? 'bold'
  //   }
  // }
}
const GroceryListPopulate = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem items={item}/>
    )}
  </ul>
)
const GroceryList = () => (
  <div>
    <GroceryListPopulate items={['potatoes', 'beans', 'carrots']} />
  </div>
)
ReactDOM.render(<GroceryList />, document.getElementById('app'))