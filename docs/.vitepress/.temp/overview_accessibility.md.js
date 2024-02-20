import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"Accessibility","description":"Radix Primitives follow the WAI-ARIA authoring practices guidelines and are tested in a wide selection of modern browsers and commonly used assistive technologies.","frontmatter":{"title":"Accessibility","description":"Radix Primitives follow the WAI-ARIA authoring practices guidelines and are tested in a wide selection of modern browsers and commonly used assistive technologies.","sidebar":true},"headers":[],"relativePath":"overview/accessibility.md","filePath":"overview/accessibility.md","lastUpdated":1696070965000}');
const _sfc_main = { name: "overview/accessibility.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Description = resolveComponent("Description");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_Description, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Radix Primitives follow the WAI-ARIA authoring practices guidelines and are tested in a wide selection of modern browsers and commonly used assistive technologies. `);
      } else {
        return [
          createTextVNode(" Radix Primitives follow the WAI-ARIA authoring practices guidelines and are tested in a wide selection of modern browsers and commonly used assistive technologies. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>We take care of many of the difficult implementation details related to accessibility, including <code>aria</code> and <code>role</code> attributes, focus management, and keyboard navigation. That means that users should be able to use our components as-is in most contexts and rely on functionality to follow the expected accessibility design patterns.</p><h2 id="wai-aria" tabindex="-1">WAI-ARIA <a class="header-anchor" href="#wai-aria" aria-label="Permalink to &quot;WAI-ARIA&quot;">​</a></h2><p><a href="https://www.w3.org/TR/wai-aria-1.2/" target="_blank" rel="noreferrer">WAI-ARIA</a>, published and maintained by the W3C, specifies the semantics for many common UI patterns that show up in Radix Primitives. This is designed to provide meaning for controls that aren&#39;t built using elements provided by the browser. For example, if you use a <code>div</code> instead of a <code>button</code> element to create a button, there are attributes you need to add to the <code>div</code> in order to convey that it&#39;s a button for screen readers or voice recognition tools.</p><p>In addition to semantics, there are behaviors that are expected from different types of components. A <code>button</code> element is going to respond to certain interactions in ways that a <code>div</code> will not, so it&#39;s up to the developer to reimplement those interactions with JavaScript. The <a href="https://www.w3.org/TR/wai-aria-practices-1.2/" target="_blank" rel="noreferrer">WAI-ARIA authoring practices</a> provide additional guidance for implementing behaviors for various controls that come with Radix Primitives.</p><h2 id="accessible-labels" tabindex="-1">Accessible Labels <a class="header-anchor" href="#accessible-labels" aria-label="Permalink to &quot;Accessible Labels&quot;">​</a></h2><p>With many built-in form controls, the native HTML <code>label</code> element is designed to provide semantic meaning and context for corresponding <code>input</code> elements. For non-form control elements, or for custom controls like those provided by Radix Primitives, <a href="https://www.w3.org/TR/wai-aria-1.2/#namecalculation" target="_blank" rel="noreferrer">WAI-ARIA provides a specification</a> for how to provide accessible names and descriptions to those contols.</p><p>Where possible, Radix Primitives include abstractions to make labelling our controls simple. The <a href="./../components/label.html"><code>Label</code></a> primitive is designed to work with many of our controls. Ultimately it&#39;s up to you to provide those labels so that users have the proper context when navigating your application.</p><h2 id="keyboard-navigation" tabindex="-1">Keyboard Navigation <a class="header-anchor" href="#keyboard-navigation" aria-label="Permalink to &quot;Keyboard Navigation&quot;">​</a></h2><p>Many complex components, like <a href="./../components/tabs.html"><code>Tabs</code></a> and <a href="./../components/dialog.html"><code>Dialog</code></a>, come with expectations from users on how to interact with their content using a keyboard or other non-mouse input modalities. Radix Primitives provide basic keyboard support in accordance with the <a href="https://www.w3.org/TR/wai-aria-practices-1.2/" target="_blank" rel="noreferrer">WAI-ARIA authoring practices</a>.</p><h2 id="focus-management" tabindex="-1">Focus Management <a class="header-anchor" href="#focus-management" aria-label="Permalink to &quot;Focus Management&quot;">​</a></h2><p>Proper keyboard navigation and good labelling often go hand-in-hand with managing focus. When a user interacts with an element and something changes as a result, it&#39;s often helpful to move focus with the interaction so that the next tab stop is logical depending on the new context of the app. And for screen reader users, moving focus often results in an announcement to convey this new context, which relies on proper labelling.</p><p>In many Radix Primitives, we move focus based on the interactions a user normally takes in a given component. For example, in <a href="./../components/alert-dialog.html"><code>AlertDialog</code></a>, when the modal is opened, focus is programatically moved to a <code>Cancel</code> button element to anticipate a response to the prompt.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Source: <a href="https://www.radix-ui.com/" target="_blank" rel="noreferrer">Radix UI</a></p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("overview/accessibility.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const accessibility = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  accessibility as default
};
