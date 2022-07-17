import { fetchUser } from '../../fakeApi'

import { wrapPromise } from '../../utils'
const userPromise = fetchUser('lc', 1)

const userResource = wrapPromise(userPromise)

function User() {
  const user = userResource.read()
  return (
    <div>
      {user.id}:{user.name}
    </div>
  )
}
export default User
