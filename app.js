class GroceryList extends React.Component {
  render() {
    return <ul>
      <li>GroceryItem1</li>
      <li>GroceryItem2</li>
    </ul>
  }
}
ReactDOM.render(GroceryList, document.getElementById('app'));