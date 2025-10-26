import React from 'react'

const Testimonial = () => {
    const testimonials = [ 
        {
            id :1,
            name : "IBM",
            image : "https://cdn.worldvectorlogo.com/logos/ibm.svg",
            width :100,
            height:100,
        },
        {
            id:2,
            name :"amazon",
            image : "https://cdn.worldvectorlogo.com/logos/logo-amazon.svg",
            width :120,
            height:120,
        },
        {
            id:3,
            name:"meta",
            image:"https://cdn.worldvectorlogo.com/logos/meta-3.svg",
            width :80,
            height:80,
        },
        {
            id :4,
            name :"microsoft",
            image :"https://cdn.worldvectorlogo.com/logos/microsoft-6.svg",
            width :120,
            height:120,
        },
        {
            id:5,
            name:"apple",
            image:"https://cdn.worldvectorlogo.com/logos/apple-11.svg",
            width:120,
            height:120,
        },
        {
            id:6,
            name :"linkedin",
            image:"https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
            width :60,
            height:60,
        }
    ]
  return (
    <main id='testimonial' className="h-auto bg-gray-200 p-10 mt-28 ">
        <div>
            <p className='text-gray-500 mt-10 font-medium text-center'>Craft polished emails to HR and recruiters at your favorite companies.</p>
        </div>
        <div className='max-w-2xl mx-auto  overflow-hidden flex flex-row items-center gap-6 mt-20 mb-10'>
        <div className='flex marquee gap-8 items-center'>
            {
                testimonials.map((testimonial , index) => (
                    <div
                    key={index} className='transition flex-shrink-0 opacity-70 flex items-center '>
                    <img    
                      src={testimonial?.image}
                      alt={testimonial.name}
                      width={testimonial.width}
                      height={testimonial.height}
                      className="mb-4 aspect-auto"
                    />
                  </div>
                ))
            }
        </div>
        </div>
        
    </main>
  )
}

export default Testimonial