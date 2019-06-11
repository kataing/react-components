// TODO
class GroceryListItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false
          };
    }
    onListItemClick () {
        this.setState({
            done: !this.state.done
        });
    }
    render() {
        var style = {
            textDecoration: this.state.done ? 'line-through' : 'none'
        }
        return (
            <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
        );
    }
}


var GroceryList = (props) => (
    <ul>
        {props.GroceryListItems.map((todo, key)=>
            <GroceryListItems todo={todo} key={key} />
        )}
    </ul>
)

var App = () => (
    <div>
        <h2>My Grocery List</h2>
        <GroceryList GroceryListItems = {['Cucumbers', 'Kale']}/>
    </div>
);

ReactDOM.render(<App />, document.getElementById('app'));