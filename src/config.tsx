interface IEnvironmentConfig {
  API_URL: string
}

interface IConfig {
  production: IEnvironmentConfig
  development: IEnvironmentConfig
  test: IEnvironmentConfig
}

const production: IEnvironmentConfig = {
  API_URL: ''
}

const development: IEnvironmentConfig = {
  API_URL: ''
}

const testEnv: IEnvironmentConfig = {
  API_URL: ''
}

const Config = {
  production,
  development,
  test: testEnv
}

export default Config[process.env.NODE_ENV || 'development']
