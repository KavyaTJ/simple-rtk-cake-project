import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect } from 'react'
import { useAppSElector, useAppDispatch } from '../../../app/hooks'
import { fetchUsers } from './userSlice'

export const UserView = () => {
  const user = useAppSElector((state: { user: any }) => state.user)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}