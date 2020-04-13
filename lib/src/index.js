import { spawn, Thread, Worker } from 'threads'
// import 'threads/register'; // useless ??

export default async function add(a, b) {
  const add = await spawn(new Worker("./worker.js"))
  const result = await add(a, b)
  await Thread.terminate(add)

  return result
}
