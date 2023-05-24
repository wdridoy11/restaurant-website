import React from 'react'
import { Parallax } from 'react-parallax';

const Cover = ({coverImg,coverTitle}) => {
  return (
    <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={`${coverImg}`}
        bgImageAlt="the dog"
        strength={-200}>
        <div>
            <div className="hero min-h-[750px]">
              <div className="hero-overlay "></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl glass py-14 px-10 rounded-lg">
                  <h1 className="mb-5 text-5xl font-bold">{coverTitle}</h1>
                  <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
              </div>
            </div>
        </div>
    </Parallax>

  )
}

export default Cover