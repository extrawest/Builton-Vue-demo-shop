import BuiltOn from '@builton/core-sdk'
import config from '~/config'

export default new BuiltOn({
  endpoint: config.endpoint,
  apiKey: config.apiKey
})
