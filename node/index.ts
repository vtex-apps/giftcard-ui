import { ColossusContext } from 'colossus'
import axios from 'axios'

const appName = 'vtex-giftcard-v2'
const vendor = process.env.VTEX_APP_VENDOR
const workspace = process.env.VTEX_WORKSPACE
const region = process.env.VTEX_REGION

const urlBase = `http://${appName}.${vendor}.${region}.vtex.io/gatewayio/${workspace}/giftcardv2/gatewayio/giftcards`

function getCookieFrom(ctx) {
  const {
    request: {
      header: { cookie },
    },
    vtex: { authToken },
  } = ctx

  return {
    'Proxy-Authorization': authToken,
    Cookie: cookie,
  }
}

export default {
  events: {
    onAppsLinked: async ctx => {
      console.log(`onAppsLinked body: ${ctx.body}`)
    },
  },
  routes: {
    getgiftcards: async (ctx: ColossusContext) => {
      ctx.set('Cache-Control', 'no-cache')

      const response = await axios(urlBase, {
        headers: getCookieFrom(ctx),
      })

      ctx.response.status = response.status
      ctx.response.body = response.data
    },
    getgiftcard: async (ctx: ColossusContext) => {
      ctx.set('Cache-Control', 'no-cache')

      const id = ctx.query.giftCardId

      const response = await axios(`${urlBase}/${id}`, {
        headers: getCookieFrom(ctx),
      })

      ctx.response.status = response.status
      ctx.response.body = response.data
    },
  },
}
