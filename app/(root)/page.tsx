import { UserButton } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const SetupPage = (props: Props) => {
  return (
    <div>
      <UserButton afterSwitchSessionUrl='/'/>
    </div>
  )
}

export default SetupPage