export default function saySomething({ store }) {
  store.yousay =  '阿里嘎多'
  store.$subscribe((s) => {
    // 在存储变化的时候执行
    console.log('在存储变化的时候执行', s)
  })
  store.$onAction((s) => {
    // 在 action 的时候执行
    console.log('在 action 的时候执行', s)
  })
 
}