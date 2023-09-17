import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_92acc0a1.mjs';
import 'react';
import 'react-dom/server';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_ce1a6869.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint_78018fba.mjs');
const _page1  = () => import('./chunks/index_ef0af1c6.mjs');
const _page2  = () => import('./chunks/about_d7405e9a.mjs');
const _page3  = () => import('./chunks/_.._5a021d24.mjs');
const _page4  = () => import('./chunks/work_47ffc87b.mjs');
const _page5  = () => import('./chunks/404_1a89129d.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/about.astro", _page2],["src/pages/work/[...slug].astro", _page3],["src/pages/work.astro", _page4],["src/pages/404.astro", _page5]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {"builders":true};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
