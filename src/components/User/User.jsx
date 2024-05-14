import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
const params = useParams();
const userid = params.userid;
  return (
    <div className=' text-lg font-semibold mt-5 mb-5 bg-zinc-300'>
      User: {userid}
    </div>
  )
}

export default User
