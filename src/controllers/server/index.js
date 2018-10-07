import { addToResponse, nextAndReturn } from 'utils'
import packageJson from '/../package.json'
import Debug from 'debug'

const debug = Debug('poc:controller-server')

class ServerController {
  constructor () {
    debug('Created')
  }

  version (req, res, next) {
    addToResponse(
      res,
      packageJson.version,
      'version'
    )
    nextAndReturn(next)(res.data)
  }
}

const serverController = new ServerController()

export default serverController
