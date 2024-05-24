export default function Testimonial() {
    return (
      <section className="relative isolate overflow-hidden text-center px-6 py-24 sm:py-32 lg:px-8 playfair-regular ">
     
        <div className="mx-auto max-w-2xl lg:max-w-3xl">
          <figure className="mt-10 bg-[#677d6a] rounded-xl p-12">
            <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9 gap-4 flex flex-col">
       
              <p className="text-3xl">
              "I worked with Kate for over 18 months and it's the best decision I've made in my life."
              </p>
              <p>
              "Kate put me at ease straight away and I felt listened to and supported from the start. Kate's approach is exactly what I needed and thanks to our work together, I am now a different person and I can now say proudly that I am healed. I will be forever grateful to Kate for that and for her exceptional care and professionalism."
              </p>
            </blockquote>
            <figcaption className="mt-10">
        
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-white">Maude</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-white">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-white">Former client</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    )
  }