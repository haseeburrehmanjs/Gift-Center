import React from 'react'

const WhatsappBtn = () => {
    function sendMessage() {
        window.location.href = "https://api.whatsapp.com/send/?phone=923271042006&text=Hello%21+I%27m+interested+in+your+products&type=phone_number&app_absent=0";
    }

    return (
        <>
            <button
                className="inline-flex mt-3 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg"
                onClick={sendMessage} // Corrected the onClick event
            >
                WhatsApp
            </button>
        </>
    )
}

export default WhatsappBtn
