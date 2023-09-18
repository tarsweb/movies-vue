import axios from 'axios'

export default {
  install: (app, options) => {
    const instance =  axios.create({
        baseURL: options.baseURL,
        params: options.params
      })
    app.config.globalProperties.$axios = {...instance}
    // app.provide(options.Name, instance)
  }
}
