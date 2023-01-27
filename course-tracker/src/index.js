const {responseMethod} = require('./method') 

/**
 * @param {Request} request
 */

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const res = await responseMethod(request)
  const body = JSON.stringify(res)
  return new Response(body, {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
    },
  })
}