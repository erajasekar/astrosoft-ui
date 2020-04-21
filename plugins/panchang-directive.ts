import { DirectiveOptions } from 'vue'
import {VNodeDirective} from 'vue';
import { formatEndTime } from '../mixins/FormatUtils'
const WARNING_STYLE = 'text-yellow-700'
const NEXT_ITEM_STYLE = 'text-blue-600'
const DEEMPHASIS_STYLE = 'text-gray-600 text-sm'

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
    el.innerHTML = stylePanEvent(data ,false)
  }
  else if (name === 'amirthathiYoga'){
    el.innerHTML = stylePanEvent(data, true)
  }
  else if (name === 'karna'){
    const first = data.first
    const second = data.second
    el.innerHTML = `<div>${stylePanEvent(first, false)}</div><div>${stylePanEvent(second, false)}</div>`
  }
  else if (name === 'auspiciousTime'){
    const items = data as Array<String>
    el.innerHTML = styleAuspiciousTime(items)
  }
  else if (name === 'rahuKala' || name === 'yamaKanda'){
    el.innerHTML = styleDurationEvent(data, WARNING_STYLE)
  }
}

function styleAuspiciousTime(items: Array<String>) {
  let html = ''
  for(let i = 0; i < items.length; i++) {
    html = html + "<div>"
    html = html + items[i].split(",")
     .map(item =>  styleDurationEvent(item,'')).join(',')
    html = html + "</div>"
  }
  return html
}

function stylePanEvent(data: any, isAmirthathiYoga: boolean) {
  const name = data.name;
  const endTime = formatEndTime(data.endTime)
  const items = endTime.split(" , ")
  let html = `<div class="${getWarningStyle(isAmirthathiYoga, name, '')}">${name} ${styleDeEmphasizedSpan('upto')} ${items[0]}`;
  if (items.length > 1){
    html = html + styleDeEmphasizedSpan(items[1])
  }
  html = html + '</div>'
  const next = data.next;
  if (next) {
    html = html + `<div class=${getWarningStyle(isAmirthathiYoga, next, NEXT_ITEM_STYLE)}>${next}</div>`
  }
  return html
}

function getWarningStyle(isAmirthathiYoga: boolean, name : string, defaultStyle : string) {
  return (isAmirthathiYoga && (name == 'Marana' || name === 'Prabalarshta')) ? WARNING_STYLE : defaultStyle;
}

function styleDurationEvent(data: any, style: string) {
  const items = data.split(" - ")
  return `<span class="${style}">${items[0]} ${styleDeEmphasizedSpan('-')} ${items[1]}`
}

function styleDeEmphasizedSpan(value: string) {
  return `<span class="${DEEMPHASIS_STYLE}"> ${value} </span>`
}

export default directive;
