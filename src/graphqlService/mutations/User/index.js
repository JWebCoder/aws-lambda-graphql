import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import DeleteUser from './DeleteUser'
import Debug from 'debug'

const debug = Debug('poc:graphql-mutation-user')

debug('Creating')
export default {
  CreateUser,
  UpdateUser,
  DeleteUser,
}
debug('Created')
