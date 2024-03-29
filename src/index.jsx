import * as $ from 'jquery';
import Post from '@models/Post';
import '@/styles/styles.css';
import '@/styles/less.less';
import '@/styles/scss.scss';
import '@/test.js';
import WebpackLogo from '@/assets/webpack-logo.png';
import React from 'react';
import {render} from 'react-dom';

/*import xml from './assets/data.xml';
import csv from './assets/data.csv';
import json from './assets/json.json';*/

const post = new Post('Webpack Post Title', WebpackLogo);

$('pre').addClass('code').html(post.toString());

const App = () => (
    <div className="container">
        <h1>Webpack course</h1>
        <hr/>
        <div className="logo"></div>
        <hr/>
        <pre/>
        <hr/>
        <div className="box">
            <h2>Less</h2>
        </div>
        <div className="card">
            <h2>Sass</h2>
        </div>
    </div>
)

render(<App/>, document.getElementById('app'));

/*console.log('JSON: ', json);
console.log('XML: ', xml);
console.log('CSV: ', csv);*/
