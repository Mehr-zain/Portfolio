import React, { useState } from "react";

const Contact = () => {

  const[message, setMessage] = useState("")
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "358ef16b-01a1-4747-88b1-4f3f91c7147c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setMessage("Thank you for reaching out! Your message has been received and will be reviewed shortly. I appreciate you taking the time to connect, and I’ll be in touch as soon as possible.")
      event.target.reset();
    }
  };

  return (
    <div className="bg-[#0a192f] " name="contact">
      <div class="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl  font-[sans-serif]">
        <div>
          <h1 class="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Let's Talk
          </h1>
          <p class="text-sm text-gray-300 mt-4">
            Have some big idea or brand to develop and need help? Then reach out
            I'd love to hear about your project and provide help.
          </p>
        </div>

        <form class="ml-auto space-y-4" onSubmit={handleSubmit}>
        {message && (
            <p className="text-sm text-green-500 mt-2">{message}</p>
          )}
          <input
            type="text"
            placeholder="Name"
            name="name"
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-black text-sm outline-pink-400 focus:bg-white"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-black text-sm outline-pink-400 focus:bg-white"
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-black text-sm outline-pink-400 focus:bg-white"
          />
          <textarea
            placeholder="Message"
            rows="6"
            name="message"
            class="w-full rounded-md px-4 bg-gray-100 text-black text-sm pt-3 outline-pink-400 focus:bg-white"
          ></textarea>
          <button
            type="submit"
            class="text-white bg-pink-600 hover:bg-pink-700 tracking-wide rounded-md text-sm px-4 py-3 w-full "
          >
            Submit
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Contact;
