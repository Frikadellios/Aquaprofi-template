/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro_ce1a6869.mjs';
import 'clsx';
import { g as getCollection, $ as $$ContactCTA } from './__a718e63d.mjs';
import { b as $$Hero, a as $$BaseLayout } from './404_7b0be067.mjs';
import { $ as $$Grid, a as $$PortfolioPreview } from './index_409f18e1.mjs';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
/* empty css                           *//* empty css                           *//* empty css                               *//* empty css                           *//* empty css                           *//* empty css                           */
const $$Astro = createAstro("https://aquaprofi.com");
const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Work;
  const projects = (await getCollection("work")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "My Work | Jeanine White", "description": "Learn about Jeanine White's most recent projects" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="stack gap-20"><main class="wrapper stack gap-8">${renderComponent($$result2, "Hero", $$Hero, { "title": "My Work", "tagline": "See my most recent projects below to get an idea of my past experience.", "align": "start" })}${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li>${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project })}</li>`)}` })}</main>${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})}</div>` })}`;
}, "/workspaces/Aquaprofi-template/src/pages/work.astro", void 0);

const $$file = "/workspaces/Aquaprofi-template/src/pages/work.astro";
const $$url = "/work";

export { $$Work as default, $$file as file, $$url as url };
