import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const products = [
  {
    id: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    
  },
  {
    id: 2,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
  
  },
  {
    id: 3,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
  },
  {
    id: 4,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
   
  },
 
]
export const Gallery = () => {
    useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    // @ts-ignore
    }, []);
   });
  return (
    <>
     <div id="contact" className="bg-transparent"
     data-aos-anchor-placement="bottom-center">
      <div className="bg-transparent dark:bg-slate-800 max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight dark:text-gray-300">Our Album</h2>
          <a href="contactForm" className="hidden text-sm font-semibold dark:text-slate-300 hover:text-indigo-500 sm:block">
            Join Us<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="bg-transparent dark:bg-slate-800 mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg"
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-center object-cover group-hover:opacity-75" data-aos="fade-right"
            />
            <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
            <div className="p-6 flex items-end">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                     Escursion
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                 Port Novo
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full" data-aos="fade-left"
  
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Akosombo
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Ghana
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
              alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
              className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full" data-aos="fade-left"
   
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="contactForm">
                    <span className="absolute inset-0" />
                    Port Novo
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Visit
                </p>
              </div>
            </div>
          </div>
        

        <div id="footer" className="mt-6 sm:hidden">
          <a href="contactForm" className="block text-sm font-semibold dark:text-slate-300 hover:text-indigo-500">
            Join Us<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
    <div className="bg-transparent">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl">
        <div className="relative rounded-lg overflow-hidden lg:h-96">
          <div className="absolute inset-0" data-aos="fade-left">
            <img
              src="https://tailwindui.com/img/ecommerce-images/category-page-01-featured-collection.jpg"
              alt=""
              className="w-full h-full object-center object-cover"
         />
          </div>
          <div aria-hidden="true" className="relative w-full h-96 lg:hidden" />
          <div aria-hidden="true" className="relative w-full h-32 lg:hidden" />
          <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 p-6 rounded-bl-lg rounded-br-lg backdrop-filter backdrop-blur sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:rounded-tl-lg lg:rounded-br-none lg:flex-col lg:items-start" data-aos="fade-right">
            <div>
              <h2 className="text-xl font-bold text-white">Sports Conner</h2>
              <p className="mt-1 text-sm text-gray-300">
                Register to join Cedar Christian Bilingual School to enjoin all privilages.
              </p>
            </div>
            <a
              href="blog"
              className="mt-6 flex-shrink-0 flex bg-gray-600 bg-opacity-0 py-3 px-4 border border-white border-opacity-25 rounded-md items-center justify-center text-base font-medium text-white hover:bg-opacity-10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full"
            >
              Read our news collection
            </a>
          </div>
        </div>
      </div>
    </div>
 <div id="footer" className="bg-transparent dark:bg-slate-800" data-aos="fade-up">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold dark:text-gray-300">Parent also paticipate</h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <div className="relative">
                <div className="relative w-full h-72 rounded-lg overflow-hidden">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover" data-aos="fade-right"
  
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">{product.price}</p>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
 </div>
    </>
  )
}