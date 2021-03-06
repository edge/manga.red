import React from 'react';
import { Link } from 'react-router';
import { Actions, Stores } from '../hub';
import UIState from '../constants/ui-state-constants';
import Network from '../decorators/network';
import ColorPicker from './colorpicker';

@Network({
	ui: Stores.UI,
	title: Stores.Title,
	chapter: Stores.Chapter
})
export default class extends React.Component {
	static contextTypes = {
		router: React.PropTypes.any.isRequired
	}
	componentDidMount() {
		this.componentDidUpdate();
	}
	componentDidUpdate() {
		_.defer(() => {
			switch (this.state.ui.level) {
				case UIState.index:
					break;
				case UIState.title:
					break;
				case UIState.chapter:
					$('.tooltipped').tooltip({ delay: 50 });
					break;
				default:
					break;
			}
		});
	}
	renderLeft() {
		let extra, params;
		let { ui, title, chapter } = this.state;
		switch (ui.level) {
			case UIState.index:
				break;
			case UIState.title:
				params = this.context.router.getCurrentParams();
				extra = (
					<li key='detail'>
						<Link className={`${ui.color}-text text-lighten-4 animated fadeIn`} to='detail' params={{ alias: params.alias }}>{title.manga.title}</Link>
					</li>
				);
				break;
			case UIState.chapter:
				params = this.context.router.getCurrentParams();
				extra = [
					['detail', 'detail', { alias: params.alias }, title.manga.title],
					['chapter', 'chapter', { alias: params.alias, chapter: params.chapter }, `Ch. ${params.chapter}`],
					['page', 'chapter', { alias: params.alias, chapter: params.chapter }, `Pg. ${chapter.page}`]
				].map(arr => (
					<li key={arr[0]}>
						<Link className={`${ui.color}-text text-lighten-4 animated fadeIn`} to={arr[1]} params={arr[2]}>
							{arr[3]}
						</Link>
					</li>
				));
				break;
			default:
				break;
		}
		return extra;
	}
	renderRight() {
		let { ui } = this.state;
		let extra = [];
		switch (ui.level) {
			case UIState.index:
				break;
			case UIState.title:
				break;
			case UIState.chapter:
				extra = extra.concat([
					[Actions.UI.readFirstPage, 'First Page (Home)', 'av-skip-previous'],
					[Actions.UI.readPreviousPage, 'Previous Page (Left)', 'hardware-keyboard-arrow-left'],
					[Actions.UI.readNextPage, 'Next Page (Right)', 'hardware-keyboard-arrow-right'],
					[Actions.UI.readLastPage, 'Last Page (End)', 'av-skip-next']
				].map((arr, i) => (
					<li onClick={arr[0]} key={i} className={`tooltipped ${ui.color}-text text-lighten-4`}
						data-tooltip={arr[1]} data-position='left'>
						<i className={`widemargin mdi-${arr[2]}`}></i>
					</li>
				)));
				break;
			default:
				break;
		}
		extra.push(
			<li onClick={Actions.UI.toggleColorPicker} className={`tooltipped ${ui.color}-text text-lighten-4`}>
				<i className={`widemargin mdi-image-color-lens`}></i>
				<ColorPicker hidden={!ui.colorOpen} />
			</li>
		);
		return extra;
	}
	render() {
		return (
			<div className='navbar-fixed noselect arrow-cursor'>
				<nav className={`fixed-bottom ${this.state.ui.color} z-depth-0`}>
					<div className='nav-wrapper container'>
						<ul className='left'>
							{this.renderLeft()}
						</ul>
						<ul className='right'>
							{this.renderRight()}
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
