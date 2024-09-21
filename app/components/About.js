import Image from 'next/image'
import React from 'react'

export const About = () => {
  return (
    <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24" style={{background:'#BEDC74'}}>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            الخازن دوت نيت &الخازن لايت
          </h2>

          <p className="hidden text-white/90 sm:mt-4 sm:block">
        ماهو الفرق بين الخازن دوت نيت و الخازن لايت
          </p>

          <div className="mt-4 md:mt-8">
            <a
              href="#"
              className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
            >
             شاهد المزيد
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
        <img
          alt=""
        
          src={'https://th.bing.com/th/id/OIP.R5b1taK5sSyVcquqfC_UewHaHa?rs=1&pid=ImgDetMain'}
          className="h-40 w-full object-cover sm:h-56 md:h-full"
        />

        <img
          alt=""
          
          src="https://th.bing.com/th/id/OIP.Iz-PD-eE7glApwtCqy4WcQHaE0?rs=1&pid=ImgDetMain"
          className="h-40 w-full object-cover sm:h-56 md:h-full"
        />
      </div>
    </div>
  </div>
</section>
  )
}
