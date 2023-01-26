import Route from '@ember/routing/route';

export default class ProjectsProjectRoute extends Route {
	model({ slug }) {
		return this.resolveProject(slug);
	}

	resolveProject(projectSlug) {
		const controller = this.controllerFor('projects.index');
		return controller.projects.find(
			(project) => project.slug === projectSlug
		);
	}
}
