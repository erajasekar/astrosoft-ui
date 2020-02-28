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
    el.innerHTML = stylePanEvent(data)
  }
  else if (name === 'karna'){
    const first = data.first
    const second = data.second
    el.innerHTML = `<div>${stylePanEvent(first)}</div><div>${stylePanEvent(second)}</div>`
  }
  else if (name === 'auspiciousTime'){
    const items = data as Array<String>
    el.innerHTML = items.flatMap(item => item.split(","))
      .map(item =>  `<div>${item}</div>`).join('')
  }
}

function stylePanEvent(data: any) {
  return `${data.name} <span class="text-gray-500">Until</span> ${data.endTime}`
}

export default directive;
