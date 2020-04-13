const add = require('lib').default

async function main (){
  const res = await add(40, 2)
  console.log(res)
}

main().catch(err => console.error(err))
