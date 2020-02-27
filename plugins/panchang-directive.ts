import { DirectiveOptions } from 'vue'
import {VNodeDirective} from 'vue';

const directive: DirectiveOptions = {
    inserted(el, node) {
    },
    bind(el: Element, binding: VNodeDirective) {
      applyPanchangStyles(el, binding)
    },
    componentUpdated(el: Element, binding: VNodeDirective) {
      applyPanchangStyles(el, binding)
    }
};

function applyPanchangStyles(el: Element, binding: VNodeDirective) {
  const name = binding.value.name
  const data = binding.value.value
  if (name === 'nakshathra' || name === 'thithi' || name === 'yoga') {
    el.innerHTML = `${data.name} <span class="text-gray-500">Until</span> ${data.endTime}`
  }
}

export default directive;
