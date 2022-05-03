import React, { useEffect } from "react";

import lottie from 'lottie-web'

import PickerJson from '../assets/lottie/103760-3d-picker-machine.json'

export const PickerMachine = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#picker'),
      animationData: PickerJson,
      renderer: 'svg',
      loop: true,
      autoplay: true
    })

    const headerElemLength = document.querySelector('#picker').children.length

    if (headerElemLength > 1) {
      const header = document.querySelector('#picker')
      const lastHeader = header.lastElementChild

      header.removeChild(lastHeader)
    }
  })

  return (
    <div className="w-full">
      <div id="picker" />
    </div>
  )
}
