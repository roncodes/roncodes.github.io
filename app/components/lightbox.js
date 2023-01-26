import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, setProperties } from '@ember/object';
import GLightbox from 'glightbox';

export default class LightboxComponent extends Component {
	lightbox;

	@action setupComponent(containerNode) {
		const anchors = this.setupAnchors(containerNode.querySelectorAll('a'));
		const lightbox = GLightbox({
			selector: '.glightbox',
		});

		setProperties(this, {
			lightbox,
		});
	}

	@action setupAnchors(anchors) {
		return Array.from(anchors).map((anchorNode) => {
			anchorNode.classList.add('glightbox');

			return anchorNode;
		});
	}
}
