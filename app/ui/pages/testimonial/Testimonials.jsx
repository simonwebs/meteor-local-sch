// @ts-nocheck
import React from 'react';

const testimonials = [
  [
    {
      content:
        'I will never know how fast and strong my children are, if not Cedar Chiristian Bilingual School. The schol really transformed my children into fully bilingial. My children are happy about their teaching methods.',
      author: {
        name: 'Simon Agbey',
        role: 'Pastor / Software Developer',
        imageSrc: './img/simon.png',
      },
    },
    {
      content:
        'I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.',
      author: {
        name: 'Amy Hahn',
        role: 'Director at Velocity Industries',
        imageSrc: './img/simon.png',
      },
    },
  ],
  [
    {
      content:
        'The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.',
      author: {
        name: 'Leland Kiehn',
        role: 'Founder of Kiehn and Sons',
        imageSrc: './img/simon.png',
      },
    },
    {
      content:
        'There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.',
      author: {
        name: 'Erin Powlowski',
        role: 'COO at Armstrong Inc',
        imageSrc: './img/simon.png',
      },
    },
  ],
  [
    {
      content:
        'I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.',
      author: {
        name: 'Peter Renolds',
        role: 'Founder of West Inc',
        imageSrc: './img/simon.png',
      },
    },
    {
      content:
        'This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.',
      author: {
        name: 'Amy Hahn',
        role: 'Director at Velocity Industries',
        imageSrc: './img/simon.png',
      },
    },
  ],
]


export const Testimonials = () => {
  return(
    <>
  <section
      aria-labelledby="testimonials-title"
      className="mt-16 bg-transparent dark:bg-slate-800  dark:text-slate-300" data-aos="fade-up"
    >
      <section  id="footer" className='bg-transparent dark:divide-slate-800'>
        <div  className="mx-auto max-w-2xl md:text-center">
          <h2
            className="p-4 py-4 font-display dark:text-slate-300 text-3xl tracking-tight bg-transparent dark:divide-slate-800 sm:text-4xl"
          >
            Loved by Parent and Students.
          </h2>
          <p className="p-4 py-4 mt-4 text-lg tracking-tight dark:text-slate-300">
            Our teaching methods are so simple that student can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of
           unercersary things.
          </p>
        </div>
        <ul className="p-8 bg-transparent dark:slate-500 mx-auto shadow-lg mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="space-y-6 sm:space-y-8 bg-transparent dark:slate-800">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-transparent shadow-2xl dark:bg-slate-700 dark:text-slate-300 p-6 shadow-slate-900/10">
                 
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight dark:text-slate-300">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base dark:text-slate-300">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm dark:text-slate-300">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="h-14 w-14 overflow-hidden rounded-full bg-transparent">
                          <img src={testimonial.author.imageSrc} alt="" />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
      </section>
      </>
    );
    }