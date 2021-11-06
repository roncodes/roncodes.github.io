import { get } from '@ember/object';
import env from '../config/environment';

export default function config(path) {
	return get(env, path);
}
