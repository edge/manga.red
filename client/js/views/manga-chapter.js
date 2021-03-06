import React from 'react';
import { Actions, Stores } from '../hub';
import Symbiosis from '../decorators/symbiosis';
import DOMEvent from '../decorators/dom.event';
import Progress from '../views/progress';
import Process from '../constants/process-constants';

const keys = {
	end: 35,
	home: 36,
	left: 37,
	right: 39
};

@Symbiosis(Stores.Chapter)
@DOMEvent($(document.body), 'keydown', 'handleKey')
export default class extends React.Component {
	static contextTypes = {
		router: React.PropTypes.any.isRequired
	}
	componentWillMount() {
		Actions.UI.toChapter();
		let params = this.context.router.getCurrentParams();
		Actions.API.getChapter(params.chapter);
	}
	handleKey(e) {
		switch (e.which) {
			case keys.left:
				Actions.UI.readPreviousPage();
				break;
			case keys.right:
				Actions.UI.readNextPage();
				break;
			case keys.home:
				e.preventDefault();
				Actions.UI.readFirstPage();
				break;
			case keys.end:
				e.preventDefault();
				Actions.UI.readLastPage();
				break;
			default:
				break;
		}
	}
	render() {
		let page;
		let chapter = this.state;
		if (chapter.process == Process.Done) {
			page = <img style={{ height: 'calc(86vh - 50px)' }} src={`https://cdn.mangaeden.com/mangasimg/${chapter.pages[chapter.pages.length - chapter.page - 1][1]}`} />;
		}
		return (
			<div>
				<Progress loading={Process.Loading(chapter.process)} />
				<div className='center-align'>
					{page}
				</div>
			</div>
		);
	}
}
