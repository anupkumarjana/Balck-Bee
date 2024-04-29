import React from "react";
import contactImg from "../../assets/Contact/contact.png";
import useForm from "../../hooks/useForm";

const ContactForm = () => {
  const { formData, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://blackbee-digital.com/page/send_contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        }
      );
      if (response.ok) {
        console.log("Form submitted successfully!");
        // Reset form data after successful submission
        resetForm();
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col gap-20">
      <div className="font-montserrat flex flex-col gap-2 justify-center items-center text-center">
        <h3 className="text-lg text-orange-500 " data-aos="fade-up">
          CONNECT WITH US
        </h3>
        <p className="lg:w-96 text-wrap" data-aos="fade-up">
          Our dedicated team leverages expertise and commitment to deliver
          exceptional value and tailored solutions to our customers.
        </p>
      </div>
      <div
        className="flex lg:flex-row flex-col justify-between lg:items-start items-center font-montserrat lg:gap-40 gap-20"
        data-aos="fade-up"
      >
        {/* --------------------left section---------------------------- */}
        <form
          className="lg:w-1/2 w-full flex flex-col gap-6 text-start "
          onSubmit={handleSubmit}
        >
          <div className="">
            <label htmlFor="name" className="block font-semibold mb-2">
              Name
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black"
            />
          </div>
          <div className="">
            <label htmlFor="email" className="block  font-semibold mb-2">
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black"
            />
          </div>
          <div className="">
            <label htmlFor="phone" className="block  font-semibold mb-2">
              Phone
            </label>
            <input
              required
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black"
            />
          </div>
          <div className="">
            <label htmlFor="message" className="block font-semibold mb-2">
              Message
            </label>
            <textarea
              required
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-40 text-center text-lg font-montserrat font-medium rounded-xl lg:py-4 lg:px-8 px-4 py-2 bg-[#FF4D30] text-white shadow-custom hover:shadow-custom-hovered transition-all duration-300 ease-in-out"
          >
            Send
          </button>
        </form>

        {/* -------------------------right section----------------------------------------- */}
        <div className="lg:w-1/2 w-full lg:pl-20" data-aos="fade-up">
          <img
            src={contactImg}
            alt="hand holding phone"
            className="drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
