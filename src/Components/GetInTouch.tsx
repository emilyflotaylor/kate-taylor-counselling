import React from 'react';
import emailjs from 'emailjs-com';

const GetInTouch: React.FC = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Access the email input field
    const emailInput = e.currentTarget.email.value;

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput)) {
      alert('Please enter a valid email address.');
      return;
    }

    emailjs.sendForm('service_1v5alca', 'template_zebq9mh', e.target as HTMLFormElement, 'O8976Yj4uyBBsGfxa')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again.');
      });

    e.currentTarget.reset(); // Optional: Reset the form after submission
  };

  return (
    <div className="playfair-regular w-4/5 grid grid-cols-1 lg:grid-cols-2 gap-16 mb-48 mx-auto">
      <div>
        <h1 className="text-xl font-bold tracking-tight text-[#c87467] sm:text-2xl">GET IN TOUCH</h1>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mt-6">
          I understand it can feel overwhelming finding the support you need but please don’t stop looking.
        </h1>
        <hr className="my-12 h-0.5 border-t-0 bg-gray-600 opacity-100 dark:opacity-50" />

        <p className="text-xl leading-8 text-gray-600 sm:col-span-1 mt-6">
          I have a peaceful, comfortable therapy room near the centre of Wimbledon with free on-site parking.
        </p>

        <p className="text-xl leading-8 text-gray-600 sm:col-span-1 mt-6">
          I offer adults (over 18) short and long-term, in-person and online sessions. I can be flexible with telephone and walking therapy sessions, depending on individual circumstances. I charge £60 per 60-minute session.
        </p>

        <p className="text-xl leading-8 text-gray-600 sm:col-span-1 mt-6">
          Leave a message to arrange a free initial chat.
        </p>
      </div>

      <div className="playfair-regular justify-center flex flex-col w-full gap-12">
        <form onSubmit={handleSubmit} className="w-full mt-12">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-l font-semibold leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name" // This should match the placeholder in your EmailJS template
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-l font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email" // This should match the placeholder in your EmailJS template
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-l font-semibold leading-6 text-gray-900">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message" // This should match the placeholder in your EmailJS template
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-[#c97467] px-3.5 py-2.5 text-center text-l font-semibold text-white shadow-sm hover:bg-[#d48f84] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
