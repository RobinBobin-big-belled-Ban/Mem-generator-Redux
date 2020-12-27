import React from 'react'
import { connect } from 'react-redux'
import { MemGenerator } from '../components/generator'
import { onChangeHandler } from '../actions/changeGeneratorActon'
import { onClickHandler } from '../actions/clickGeneratorAction'


class GeneratorContainer extends React.Component {
	render() {
		return(
			<MemGenerator 
				handler={this.props.changeHandler}
				clickHandler={this.props.clickHandler}
				topText={this.props.generator.topText}
				bottomText={this.props.generator.bottomText}
				randomImg={this.props.generator.randomImg}
				memes={this.props.header.memes}
			/>
		)
	}	
}


const mapStateToProps = store => {
	return {
		generator: store.generator,
		header: store.header,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		changeHandler: (name, value) => dispatch(onChangeHandler(name, value)),
		clickHandler: img_url => dispatch(onClickHandler(img_url))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(GeneratorContainer)