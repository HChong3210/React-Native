// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// export default class sert extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//         <Text style={styles.test}>
//         我想测试一下
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     // alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   test: {
//   	textAlign: 'right', 
//   	color: '#FF571A', 
//   	margin: 20,
//   }
// });

// AppRegistry.registerComponent('sert', () => sert);

// import React, { Component } from 'react';
// import { AppRegistry, Text} from 'react-native';

// class sert extends Component {
// 	render() {
// 		return(
// 			<Text>Hello, World!</Text>
// 		);
// 	}
// }

// import React, {
// 	Component,
// } from 'react';
//
// import {
// 	AppRegistry,
// 	Image,
// 	StyleSheet,
// 	Text,
// 	View,
// 	ListView,
// } from 'react-native';
//
//
// var MOCKED_MOVIES_DATA = [
// 	{title: '标题', year:'2015', poster: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
// ];
//
// var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
//
//
// class sert extends Component {
//
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			dataSource: new ListView.DataSource({
// 				rowHasChanged: (row1, row2) => row1 !== row2,
// 			}),
// 			loaded: false,
// 		};
// 		this.fetchData = this.fetchData.bind(this);
// 	}
//
// 	componentDidMount() {
// 		this.fetchData();
// 	}
//
// 	fetchData() {
// 		fetch(REQUEST_URL)
// 		.then((response) => response.json())
// 		.then((responseData) => {
// 			this.setState({
// 				dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
// 				loaded: true,
// 			});
// 		});
// 	}
//
// 	render () {
// 		if (!this.state.loaded) {
// 			return this.renderLoadingView();
// 		}
// 		return (
// 			<ListView
// 					dataSource={this.state.dataSource}
// 					renderRow={this.renderMovie}
// 					style={styles.listView}>
// 			</ListView>
// 		);
// 	}
//
// 	renderLoadingView() {
// 		return(
// 			<View style={styles.container}>
// 				<Text>
// 				正在加载电影数据...
// 				</Text>
// 			</View>
// 		);
// 	}
//
// 	renderMovie(movie) {
// 		return(
// 			<View style={styles.container}>
// 				<Image source={{uri: movie.posters.thumbnail}}
// 						style={styles.thumbnail}>
// 				</Image>
// 				<View style={styles.rightContainer}>
// 					<Text style={styles.title}>
// 					{movie.title}
// 					</Text>
// 					<Text style={styles.year}>
// 					{movie.year}
// 					</Text>
// 				</View>
// 			</View>
// 		);
// 	}
// }
//
//
// var styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		flexDirection: 'row',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		backgroundColor: '#F5FCF0',
// 	},
// 	rightContainer: {
// 		flex: 1,
// 	},
// 	title: {
// 		fontSize: 20,
// 		marginBottom: 8,
// 		textAlign: 'center',
// 	},
// 	year: {
// 		textAlign: 'center',
// 	},
// 	thumbnail: {
// 		width: 53,
// 		height: 81,
// 	},
// 	listView: {
// 		paddingTop: 20,
// 		backgroundColor: '#F5FCFF',
// 	},
// })


/*--------------------------------------------*/
//Props

// import React, { Component } from 'react';
// import { AppRegistry, Image } from 'react-native';

// class sert extends Component {
//     render() {
//         let pic = {
//             uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//         };
//         return (
//             <Image source={pic} style={{width: 193, height: 110}}/>
//         );
//     }
// }

// import React, { Component } from 'react';
// import { AppRegistry, Text, View } from 'react-native';

// class Greeting extends Component {
// 	render() {
// 		return (
// 			<Text>
// 			Hello {this.props.name}!
// 			</Text>
// 		);
// 	}
// }

// class sert extends Component {
// 	render() {
// 		return (
// 			<View style={{alignItems: 'center'}}>
// 				<Greeting name='Rexxar' />
// 				<Greeting name='Jania' />
// 				<Greeting name='Valeera' />
// 			</View>
// 		);
// 	}
// }


/*--------------------------------------------*/
/*
//State
//我们使用两种数据来控制一个组件, props和state.props是在父组件中指定, 而且一经指定, 在被指定的组件的生命周期中不再改变.
//对于需要改变的数据, 我们需要使用state.
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

//一般来说, 我们在constructor中来初始化state, 然后再需要修改时调用setState方法.
class Blink extends Component {
	constructor(props) {
		super(props);
		this.state = { showText: true };

		//每1000毫秒对showText状态取一次反操作
		setInterval(() => {
			this.setState({ showText: !this.state.showText });
		}, 100);
	}

	render() {
		//根据当前showtext的值决定是否显示text内容
		let display = this.state.showText ? this.props.text : ' ';
		return (
			<Text>
			{display}
			</Text>
		);
	}
}

class sert extends Component {
	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<Blink text='I love to blink' />
				<Blink text='Yes blinking is so great' />
				<Blink text='Why did they ever take this out of HTML' />
				<Blink text='Look at me look at me' />
			</View>
		);
	}
}
*/

/*----------------------------------------------*/
// style样式
/*
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class sert extends Component {
	render () {
		return (
			<View>
				<Text style={styles.red}>
				just red.
				</Text>
				<Text style={styles.bigblue}>
				just bigblue.
				</Text>
				<Text style={[styles.bigblue, styles.red]}>
				bigblue, then red.
				</Text>
				<Text style={[styles.red, styles.bigblue]}>
				red, then bigblue
				</Text>
			</View>
		);
	}
} 

const styles = StyleSheet.create({
	bigblue: {
		color: 'blue',
		fontWeight: 'bold',
		fontSize: 30,
	},
	red: {
		color: 'red',
	}
});
*/



/*----------------------------------------高度和宽度*/
/*import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

class saddsaf extends Component {
	render() {
		return (
			<View>
				<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
				<View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
				<View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
			</View>
			<View style={{flex: 1}}>
				<View  style={{height: 300, backgroundColor: 'powderblue'}} />//根据flex的Value来均分整个父view
				<View  style={{flex: 2, backgroundColor: 'skyblue'}} />//如果有height的话, flex会按照Value平分余下的部分
				<View  style={{flex: 3, backgroundColor: 'steelblue'}} />
			</View>
		);
	}
}*/

/*-------------------------------Flexbox布局*/


/*import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
class FlexDirectionBasics extends Component {
	render() {
		return (
			<View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>//justifyContent可以决定子元素沿着主轴的排列方式, 一共有五种
				<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
				<View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
				<View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
			</View>
		);
	}
};*/


/*import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

class AlignItemsBasics extends Component {
	render() {
		return (
			<View style={{
				flex: 1,
				flexDirection: 'column', //主轴, 默认值是column
				justifyContent: 'center', //主轴的排列方式, flex-start, center, flex-end, space-around, space-between,
				alignItems: 'stretch',//次轴的排列方式, flex-start, center, flex-end, stretch. 要使stretch生效的话, 子元素在次轴方向上不能有固定的尺寸
			}}>
				<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
				<View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
				<View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
			</View>
		);
	}
};*/


/*--------------------------------------文本输入*/
import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

class PizzaTranslator extends Component {
	constructor(props) {
		super(props);
		this.state = {text: ' '};
	}

	render() {
		return (
			<View style={{padding: 10}}>
				<TextInput 
					style={{height: 40}}
					placeholder="Type here to translate!"
					onChangeText={(text) => this.setState({text})}
				/>
				<Text style={{paddingTop: 10, fontSize: 36, backgroundColor: 'powderblue'}}>
					{this.state.text}
				</Text>
				<Text style={{padding: 10, fontSize: 42, backgroundColor: 'skyblue'}}>
					{this.state.text.split(' ').map((word) => word && 'H').join(' ')}
				</Text>
			</View>
		);
	}
};




AppRegistry.registerComponent('sert', () => PizzaTranslator);//工程名和类名


