import React from 'react'
import { useSelector } from 'react-redux'
import { updateUsername } from './store/userSlice'
import { useDispatch } from 'react-redux'

const Child = () => {
    const user = useSelector(store=>store.user)
    const dispatch  = useDispatch()
    const handleUpdateName = ()=>{
        console.log('done')
        dispatch(updateUsername('batman'))
    }
  return (
    <div onClick={handleUpdateName}>Child:{user?.username}</div>
  )
}

export default Child