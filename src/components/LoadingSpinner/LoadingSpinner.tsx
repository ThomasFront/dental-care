import React from 'react'
import { Oval } from 'react-loader-spinner'

export const LoadingSpinner = () => {
  return (
    <Oval
      height={80}
      width={80}
      color="#02adbe"
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="rgb(2, 149, 163)"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  )
}
