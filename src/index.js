import * as $ from 'jquery';
import Post from '@models/Post';
import '@/styles/styles.css';
import '@/styles/less.less';
import '@/styles/scss.scss';
import '@/test.js';
import WebpackLogo from '@/assets/webpack-logo.png';

/*import xml from './assets/data.xml';
import csv from './assets/data.csv';
import json from './assets/json.json';*/

const post = new Post('Webpack Post Title', WebpackLogo);

$('pre').addClass('code').html(post.toString());

/*console.log('JSON: ', json);
console.log('XML: ', xml);
console.log('CSV: ', csv);*/
