import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/TooltipProvider.md","filePath":"meta/TooltipProvider.md","lastUpdated":1706592413000}');
const _sfc_main = { name: "meta/TooltipProvider.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PropsTable = resolveComponent("PropsTable");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PropsTable, { data: [
    {
      "name": "delayDuration",
      "description": "<p>The duration from when the pointer enters the trigger until the tooltip gets opened.</p>\n",
      "type": "number",
      "required": false,
      "default": "700"
    },
    {
      "name": "disableClosingTrigger",
      "description": "<p>When <code>true</code>, clicking on trigger will not close the content.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "disableHoverableContent",
      "description": "<p>When <code>true</code>, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.</p>\n",
      "type": "boolean",
      "required": false,
      "default": "false"
    },
    {
      "name": "skipDelayDuration",
      "description": "<p>How much time a user has to enter another trigger without incurring a delay again.</p>\n",
      "type": "number",
      "required": false,
      "default": "300"
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/TooltipProvider.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TooltipProvider = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  TooltipProvider as default
};
