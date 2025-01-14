import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { defineUserAbility } from '../@core/ability'

const withAuthorization = (WrappedComponent, requiredAction, requiredSubject) => {
  const WithAuthorization = (props) => {
    const user = useSelector((state) => state.auth.user)
    const navigate = useNavigate()
    const [ability, setAbility] = useState(null)

    useEffect(() => {
      if (user) {
        setAbility(defineUserAbility(user.role))
      }
    }, [user])

    useEffect(() => {
      if (ability && !ability.can(requiredAction, requiredSubject)) {
        navigate('/unauthorized')
      }
    }, [ability, navigate])

    if (!user) {
      navigate('/login')
      return null
    }

    return <WrappedComponent {...props} />
  }

  // Set the displayName of the HOC for better debugging
  WithAuthorization.displayName = `WithAuthorization(${WrappedComponent.displayName || WrappedComponent.name})`

  return WithAuthorization
}

export default withAuthorization
