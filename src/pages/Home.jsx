import React from 'react';

const Home = () => {

  function sendMessage() {
    window.location.href = "https://api.whatsapp.com/send/?phone=923271042006&text=Hello%21+I%27m+interested+in+your+products&type=phone_number&app_absent=0";
  }

  return (
    <>
      <section className="text-gray-600 body-font">
        <div
          className="container mx-auto flex px-5 py-16 items-center justify-center flex-col"
          bis_skin_checked={1}
        >
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/seoexpertexpert531%40gmail.com%20%2B%201727423928068?alt=media&token=2f118a92-0463-4172-aac1-55ea366a1731"
          />
          <div className="text-center lg:w-2/3 w-full" bis_skin_checked={1}>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Your One-Stop Gift Shop Since 1991!
            </h1>
            <p className="mb-8 leading-relaxed">
              Established in 1991, our shop has been providing all types of gifts to make your special moments unforgettable. From elegant home decor to personalized items, you'll find the perfect gift for every occasion. Visit us today to discover a wide variety of unique and thoughtful gifts!
            </p>
            <div className="flex justify-center gap-2" bis_skin_checked={1}>
              <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                Instagram
              </button>
              <button 
                className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg" 
                onClick={sendMessage} // Corrected the onClick event
              >
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
