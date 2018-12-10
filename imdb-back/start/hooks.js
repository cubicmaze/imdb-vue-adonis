const { ioc } = require('@adonisjs/fold')

ioc.bind('App/GenericSerializer', () => {
  return use('App/Serializers/GenericSerializer')
})