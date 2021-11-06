import Route from '@ember/routing/route';

export default class PostsPostRoute extends Route {
	model({ id }) {
		return this.store.findRecord('post', id);
	}

	afterModel(post) {
		super.afterModel(...arguments);

		this.metaInfo = {
			title: post.title,
			content: post.html,
			author: post.author,
			date: post.createdAt,
			slug: post.id,
		};
	}
}
