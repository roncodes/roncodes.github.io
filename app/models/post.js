import Model, { attr } from '@ember-data/model';
import { computed } from '@ember/object';
import { dasherize } from '@ember/string';
import { format, formatDistanceToNow } from 'date-fns';

export default class PostModel extends Model {
	@attr('string') title;
	@attr('string') author;
	@attr('string') excerpt;
	@attr('string') canonical;
	@attr('string') content;
	@attr('string') html;
	@attr('string') status;
	@attr() tags;
	@attr() categories;
	@attr() meta;
	@attr('date') createdAt;
	@attr('date') updatedAt;

	@computed('title') get slug() {
		return dasherize(this.title);
	}

	@computed('createdAt', 'created_at') get dateCreatedFromNow() {
		return formatDistanceToNow(this.createdAt);
	}

	@computed('createdAt', 'created_at') get dateCreated() {
		return format(this.createdAt, 'PPP p');
	}
}
