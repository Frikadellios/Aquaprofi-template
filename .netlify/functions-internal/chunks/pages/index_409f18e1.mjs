/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderSlot, d as renderComponent } from '../astro_ce1a6869.mjs';
import 'clsx';
import { g as getCollection, a as $$Pill, b as $$CallToAction, $ as $$ContactCTA } from './__a718e63d.mjs';
import { $ as $$Icon, b as $$Hero, a as $$BaseLayout } from './404_7b0be067.mjs';
/* empty css                           *//* empty css                           */
const $$Astro$3 = createAstro("https://aquaprofi.com");
const $$Grid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Grid;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["grid", { offset: variant === "offset", small: variant === "small" }], "class:list")} data-astro-cid-vc5tsdmu>${renderSlot($$result, $$slots["default"])}</ul>`;
}, "/workspaces/Aquaprofi-template/src/components/Grid.astro", void 0);

const $$Astro$2 = createAstro("https://aquaprofi.com");
const $$PortfolioPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PortfolioPreview;
  const { data, slug } = Astro2.props.project;
  return renderTemplate`${maybeRenderHead()}<a class="card"${addAttribute(`/work/${slug}`, "href")} data-astro-cid-lgkm4u2a><span class="title" data-astro-cid-lgkm4u2a>${data.title}</span><img${addAttribute(data.img, "src")}${addAttribute(data.img_alt || "", "alt")} loading="lazy" decoding="async" data-astro-cid-lgkm4u2a></a>`;
}, "/workspaces/Aquaprofi-template/src/components/PortfolioPreview.astro", void 0);

const $$Astro$1 = createAstro("https://aquaprofi.com");
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Skills;
  return renderTemplate`${maybeRenderHead()}<section class="box skills" data-astro-cid-ab4ihpzs><div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs>${renderComponent($$result, "Icon", $$Icon, { "icon": "terminal-window", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-ab4ihpzs": true })}<h2 data-astro-cid-ab4ihpzs>Full Stack</h2><p data-astro-cid-ab4ihpzs>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p></div><div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs>${renderComponent($$result, "Icon", $$Icon, { "icon": "trophy", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-ab4ihpzs": true })}<h2 data-astro-cid-ab4ihpzs>Industry Leader</h2><p data-astro-cid-ab4ihpzs>Neque viverra justo nec ultrices dui. Est ultricies integer quis auctor elit.</p></div><div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs>${renderComponent($$result, "Icon", $$Icon, { "icon": "strategy", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-ab4ihpzs": true })}<h2 data-astro-cid-ab4ihpzs>Strategy-Minded</h2><p data-astro-cid-ab4ihpzs>Urna porttitor rhoncus dolor purus non enim praesent ornare.</p></div></section>`;
}, "/workspaces/Aquaprofi-template/src/components/Skills.astro", void 0);

const $$Astro = createAstro("https://aquaprofi.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const projects = (await getCollection("work")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 4);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6><div class="wrapper stack gap-8 lg:gap-20" data-astro-cid-j7pv25f6><header class="hero" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Hero", $$Hero, { "title": "Hello, my name is Jeanine White", "tagline": "I am a Creative Developer who is currently based in Portland, Oregon.", "align": "start", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`<div class="roles" data-astro-cid-j7pv25f6>${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33em", "data-astro-cid-j7pv25f6": true })} Developer` })}${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "microphone-stage", "size": "1.33em", "data-astro-cid-j7pv25f6": true })} Speaker` })}${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "pencil-line", "size": "1.33em", "data-astro-cid-j7pv25f6": true })} Writer` })}</div>` })}<img alt="Jeanine White smiling in a red plaid shirt and tortoise shell glasses" width="480" height="620" src="/assets/portrait.jpg" data-astro-cid-j7pv25f6></header>${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-j7pv25f6": true })}</div><main class="wrapper stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6><section class="section with-background with-cta" data-astro-cid-j7pv25f6><header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6><h3 data-astro-cid-j7pv25f6>Selected Work</h3><p data-astro-cid-j7pv25f6>Take a look below at some of my featured work for clients from the past few years.</p></header><div class="gallery" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li data-astro-cid-j7pv25f6>${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project, "data-astro-cid-j7pv25f6": true })}</li>`)}` })}</div><div class="cta" data-astro-cid-j7pv25f6>${renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "/work/", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
View All
${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "data-astro-cid-j7pv25f6": true })}` })}</div></section><section class="section with-background bg-variant" data-astro-cid-j7pv25f6><header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6><h3 data-astro-cid-j7pv25f6>Mentions</h3><p data-astro-cid-j7pv25f6>
I have been fortunate enough to recieve praise for my work in several publications. Take
						a look below to learn more.
</p></header><div class="gallery" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Grid", $$Grid, { "variant": "small", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`${["Medium", "BuzzFeed", "The Next Web", "awwwards.", "TechCrunch"].map((brand) => renderTemplate`<li class="mention-card" data-astro-cid-j7pv25f6><p data-astro-cid-j7pv25f6>${brand}</p></li>`)}` })}</div></section></main>${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-j7pv25f6": true })}</div>` })}`;
}, "/workspaces/Aquaprofi-template/src/pages/index.astro", void 0);

const $$file = "/workspaces/Aquaprofi-template/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Grid as $, $$PortfolioPreview as a, index as i };
