import config from '#config'
export const all = async () => {
  console.log('All called')
  console.log(config.DEVTO_APIKEY)
}