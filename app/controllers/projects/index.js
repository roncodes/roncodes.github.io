import Controller from '@ember/controller';

export default class ProjectsIndexController extends Controller {
    projects = [
        {
            title: 'fleetbase',
            description: 'an extendable api-first logistics operations platform.',
            logo_url: 'https://camo.githubusercontent.com/71dd8d2ff033eb220e0f66d37ef2826b864d6dc747bd2911985b15190933d434/68747470733a2f2f666c622d6173736574732e73332e61702d736f757468656173742d312e616d617a6f6e6177732e636f6d2f7374617469632f666c656574626173652d6c6f676f2d7376672e737667',
            urls: {
                link: 'https://fleetbase.io/',
                github: 'https://github.com/fleetbase',
            }
        },
        {
            title: 'cloudrealms.js',
            description: 'cloudrealms is a javascript based rpg/mmorpg game engine.',
            logo_url: 'https://user-images.githubusercontent.com/816371/141607795-4313bcd6-15ad-4599-81f5-eb4223503235.png',
            urls: {
                github: 'https://github.com/cloudrealmsrpg/cloudrealms.js'
            }
        },
        {
            title: 'veterantechstartups.directory',
            description: 'a directory of tech startups with veteran founders.',
        },
        {
            title: 'blacktechstartups.directory',
            description: 'a directory of tech startups with black founders.',
        },
        {
            title: 'horrormovienight.app',
            description: 'a simple app that recommends horror movies.',
        },
        {
            title: 'here.watch',
            description: 'a dead simple video sharing app with monetization controls.',
            urls: {
                link: 'https://here.watch/'
            }
        },
        {
            title: 'm3u8.download',
            description: 'a simple web app for downloading m3u8 playlist files.',
            urls: {
                link: 'https://m3u8.download/'
            }
        },
        {
            title: 'coords.to',
            description: 'a simple reverse coordinate lookup app.',
            urls: {
                link: 'https://coords.to/'
            }
        },
        {
            title: 'appwiz.studio',
            description: 'a no-code tool for form, document and native app generation.'
        },
        {
            title: 'twinflame',
            description: 'an open source dating/community app'
        }
    ]
}
