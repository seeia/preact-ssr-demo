import {h, Component} from 'preact'

export default class Header extends Component{
  handleClick() {
		console.log('what is up')
	}
  render() {
    return (
      <div>
        <div onClick={this.handleClick}>what is up??</div>
        <p> Yes1搜索</p>
      </div>
    )
  }
}