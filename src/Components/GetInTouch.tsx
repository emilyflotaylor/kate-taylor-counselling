import React from 'react';


const GetInTouch: React.FC = () => {
  return (
    <div className="playfair-regular text-center items-center justify-center bg-cover bg-center flex flex-col w-3/5">
    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
Get in Touch</h1>
<p className="mt-6 text-lg leading-8 text-gray-600">
I believe a safe, trusting and non-judgemental relationship with the right therapist, empowers clients to bring about permanent, positive change.  I understand it can feel overwhelming finding the support you need but please don’t stop looking. 
 </p>
 <p className=" text-lg leading-8 text-gray-600 sm:col-span-1 mt-6">
        I have a peaceful, comfortable therapy room near the centre of Wimbledon with free on-site parking. I offer short and long-term, in-person and online sessions but can be flexible with telephone and walking therapy sessions, depending on individual circumstances. Email or leave a phone message to arrange a free initial chat.
      </p>
      <div className="playfair-regular text-left justify-center flex flex-col w-full sm:w-3/5 gap-12 mt-12">
     

     <form action="#" method="POST" className="mx-auto max-w-xl mb-48">
       <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
         <div>
           <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
             Name
           </label>
           <div className="mt-2.5">
             <input
               type="text"
               name="first-name"
               id="first-name"
               autoComplete="given-name"
               className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             />
           </div>
         </div>
         
         <div className="sm:col-span-2">
           <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
             Email
           </label>
           <div className="mt-2.5">
             <input
               type="email"
               name="email"
               id="email"
               autoComplete="email"
               className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             />
           </div>
         </div>
         
         <div className="sm:col-span-2">
           <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
             Message
           </label>
           <div className="mt-2.5">
             <textarea
               name="message"
               id="message"
               rows={4}
               className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               defaultValue={''}
             />
           </div>
         </div>
         
       </div>
       <div className="mt-10">
         <button
           type="submit"
           className="block w-full rounded-md bg-[#c97467] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#d48f84] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
         >
           Submit
         </button>
       </div>
     </form>
   </div>
</div>

  );
}

export default GetInTouch;
