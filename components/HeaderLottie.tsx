import React, { useEffect } from "react";

import lottie from 'lottie-web'

import EducationJson from '../assets/lottie/74321-3d-education.json'

export const HeaderLottie = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#header'),
      animationData: EducationJson,
      renderer: 'svg',
      loop: true,
      autoplay: true
    })

    const headerElemLength = document.querySelector('#header').children.length

    if (headerElemLength > 1) {
      const header = document.querySelector('#header')
      const lastHeader = header.lastElementChild

      header.removeChild(lastHeader)
    }
  })

  return (
    <div className="w-full">
      <div id="header" />
    </div>
  )
}
