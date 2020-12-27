import React from 'react'


export class MemGenerator extends React.Component {
	constructor(props) {
		super(props)
		this.onChangeHandler = this.onChangeHandler.bind(this)
		this.onClickHandler = this.onClickHandler.bind(this)
	}
	
	onChangeHandler(event) {
		const {name, value} = event.target
		this.props.handler(name, value)
	}

	onClickHandler(event) {
		event.preventDefault()
		const randNum = Math.floor(Math.random() *
			this.props.memes.length)
		const randomMem = this.props.memes[randNum].url;
		this.props.clickHandler(randomMem)
	}

	render() {
		console.log("rendering <MemGenerator />")
		const {topText, bottomText, randomImg} = this.props
		return(
			<div>
				<form className="meme-form" onSubmit={this.onClickHandler}>
					<input type="text" 
						name="topText"
						value={topText}
						onChange={this.onChangeHandler}
						placeholder="Top Text"
					/>
					<input type="text" 
						name="bottomText"
						value={bottomText}
						onChange={this.onChangeHandler}
						placeholder="Bottom Text"
					/>
					<button>Generate</button>
				</form>
				<div className="meme">
					<img src={randomImg} alt="" />
					<h2 className="top">{topText}</h2>
					<h2 className="bottom">{bottomText}</h2>
				</div>
			</div>
		)
	}
}