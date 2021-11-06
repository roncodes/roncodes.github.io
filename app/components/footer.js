import Component from '@glimmer/component';
import cleanObject from '../utils/clean-object';
import config from '../utils/config';

export default class FooterComponent extends Component {
    get socialLinks() {
        return cleanObject(config('social'));
    }
}
