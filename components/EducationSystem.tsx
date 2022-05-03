import React, { useEffect } from "react";

import lottie from 'lottie-web'

import SystemJson from '../assets/lottie/28893-book-loading.json'

export const EducationSystem = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#system'),
      animationData: SystemJson,
      renderer: 'svg',
      loop: true,
      autoplay: true
    })

    const headerElemLength = document.querySelector('#system').children.length

    if (headerElemLength > 1) {
      const header = document.querySelector('#system')
      const lastHeader = header.lastElementChild

      header.removeChild(lastHeader)
    }
  })

  return (
    <div className="w-full">
      <div id="system" />
    </div>
  )
}