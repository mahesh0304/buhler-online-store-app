import { reactive, computed } from 'vue'

type CartItem = { id: string, name: string, price: number, image?: string, type?: string }

const state = reactive({
  items: [] as CartItem[]
})

function load() {
  try {
    const raw = localStorage.getItem('cart_v1')
    if (raw) state.items = JSON.parse(raw)
  } catch(e){}
}
function save(){
  try { localStorage.setItem('cart_v1', JSON.stringify(state.items)) } catch(e){}
}
load()

export function useCart(){
  function add(item: CartItem){
    state.items.push(item)
    save()
  }
  function remove(index: number){
    state.items.splice(index,1)
    save()
  }
  function clear(){
    state.items = []
    save()
  }
  const count = computed(() => state.items.length)
  const total = computed(() => state.items.reduce((s,i)=>s + Number(i.price),0))
  const items = computed(() => state.items)
  return { add, remove, clear, count, total, items }
}
