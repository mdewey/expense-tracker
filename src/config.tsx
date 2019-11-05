interface IEnvironmentConfig {
  API_URL: string
}

interface IConfig {
  production: IEnvironmentConfig
  development: IEnvironmentConfig
  test: IEnvironmentConfig
}

const production: IEnvironmentConfig = {
  API_URL: 'https://sdg-expense-api.herokuapp.com/api'
}

const development: IEnvironmentConfig = {
  API_URL: 'https://localhost:5001/api'
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
