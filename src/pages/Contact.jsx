import React from 'react'

const Contact = () => {

  function sendMessage() {
    window.location.href = "https://api.whatsapp.com/send/?phone=923271042006&text=Hello%21+I%27m+interested+in+your+products&type=phone_number&app_absent=0";
  }

  function sendMessageInsta(){
    window.location = 'https://www.instagram.com/ahemd_brothers?igsh=a2xjd21kZnh4M2U5'
  }


  return (
    <>
      <section className="text-gray-600 body-font container mx-auto p-2">
        <div
          className="container mx-auto flex px-5 py-16 items-center justify-center flex-col"
          bis_skin_checked={1}
        >
          <img
            className="lg:w-[300px] md:w-3/6 w-5/5 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/seoexpertexpert531%40gmail.com%20%2B%201727505848909?alt=media&token=01f4efe9-8edf-4123-9ae8-2ee2715b0813"
          />
          <div className="text-center lg:w-2/3 w-full" bis_skin_checked={1}>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Muhammad Zubair's Shop - Serving You Since 1990
            </h1>
            <p className="mb-8 leading-relaxed">
            elcome to Muhammad Zubair's shop, where tradition meets quality. Proudly serving our customers since 1990, we offer a wide range of products and exceptional service built on decades of experience. Trust us to meet your needs with the care and dedication that only years of hard work can provide. Visit us today and experience excellence!
            </p>
            <h1 className='font-bold'>Contact me For Price And More Catalogue</h1>
            <div className="flex justify-center" bis_skin_checked={1}>
              <button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg">
                <img onClick={sendMessageInsta} className='w-10' src="https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/haseeburrehmanjs%40gmail.com%20%2B%201727505771351?alt=media&token=4cdcec99-d124-4441-b555-cf9b9cb9fde3" alt="" />
              </button>
              <button className="ml-4 inline-flex text-gray-700 border-0 py-2 px-6 focus:outline-none  rounded text-lg">
                <img onClick={sendMessage} className='w-10' src="https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/seoexpertexpert531%40gmail.com%20%2B%201727506348621?alt=media&token=7bb4c949-950d-408a-99fc-c0d273d1db77" alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
