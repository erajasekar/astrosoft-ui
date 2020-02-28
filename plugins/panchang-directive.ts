import { DirectiveOptions } from 'vue'
import {VNodeDirective} from 'vue';
import { formatEndTime } from '../mixins/FormatUtils'

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
  console.log('BINDING ', binding)
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
      .map(item =>  `<div>${styleDurationEvent(item)}</div>`).join('')
  }
  else if (name === 'rahuKala' || name === 'yamaKanda'){
    el.innerHTML = styleDurationEvent(data)
  }
}

function stylePanEvent(data: any) {
  return `${data.name} <span class="text-blue-600">upto</span> ${formatEndTime(data.endTime)}`
}

function styleDurationEvent(data: any) {
  const items = data.split(" - ")
  return `<div>${items[0]} <span class="text-blue-600">to</span> ${items[1]}`
}

export default directive;
