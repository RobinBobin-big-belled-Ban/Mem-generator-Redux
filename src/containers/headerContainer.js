import React, { Component } from 'react'
import { Header } from '../components/header'
import { connect } from 'react-redux'
import { onFetchRequest } from '../actions/fetchHeader'


class HeaderContainer extends Component {
	render() {
		// Header повторяется дважды из за структуры InitialState. Смотри объект Store.
	    //const { text, url } = this.props.header
		return(
			<Header
				fetchRequest={this.props.fetchRequest}
	        	text={this.props.header.text}
	        	url={this.props.header.url}
	        />
		)	
	}
}

const mapStateToProps = store => {
	console.log(store)
	return {
	    header: store.header, 
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchRequest: memes => dispatch(onFetchRequest(memes)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)