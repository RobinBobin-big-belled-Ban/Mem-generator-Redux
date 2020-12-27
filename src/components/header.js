import React from 'react'


export class Header extends React.Component {
	componentDidMount() {
		fetch('https://api.imgflip.com/get_memes') 
			.then(response => response.json())
			.then(response => {
				const memes = response.data.memes
				this.props.fetchRequest(memes)
			})
	}

	render() {
		console.log("rendering <Header />")
		return(
			<header>
				<img
					src={this.props.url}
					alt="Problem?"
					/>
				<p>{this.props.text}</p>
			</header>
		)
	}	
} 