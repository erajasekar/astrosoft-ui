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
  const endTime = formatEndTime(data.endTime)
  const items = endTime.split(" , ")
  let html = `${data.name} ${styleDeEmphasizedSpan('upto')} ${items[0]}`;
  if (items.length > 1){
    html = html + styleDeEmphasizedSpan(items[1])
  }
  return html
}

function styleDurationEvent(data: any) {
  const items = data.split(" - ")
  return `<div>${items[0]} ${styleDeEmphasizedSpan('-')} ${items[1].toUpperCase()}`
}

function styleDeEmphasizedSpan(value: string) {
  return `<span class="text-gray-600 text-sm"> ${value} </span>`
}

export default directive;
