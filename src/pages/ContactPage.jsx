
const ContactPage = () => {
  return (
    <div>
      <section className="bg-fixed font-jost grid relative  bg-[url('/src/assets/images/banner.jpg')] h-[300px] lg:h-[400px] bg-center"> 
        <div className="w-full grid place-items-center text-center">
          <div>
            <p className=" text-base lg:text-xl text-white font-normal mb-10">
              Home | Contact
            </p>
            <h1 className="text-white font-bold text-4xl">Contact Us</h1>
          </div>
        </div>
      </section>

      <section className="max-w-[80%] font-jost w-full mx-auto my-20 gap-5 grid grid-cols-1 lg:grid-cols-2">
            <div className="space-y-10">
                    <h1 className="capitalize text-3xl font-semibold text-center">Put Us To Work</h1>
                    <h2 className="text-center text-xl font-medium">
                        Or Just Say Hi. We would Love to Hear From You and Discuss What You Need.
                    </h2>

                    <p className="text-center text-gray-400">
                        Praesent a quam congue, egestas erat sit amet, finibus justo. Quisque viverra neque vehicula eros gravida ultricies. Ut lacinia enim nec consequat tincidunt.
                    </p>

                    <div className="text-center">
                            <p className="font-bold">Phone:</p>
                            <p>012345678</p>
                    </div>

                    <div className="text-center">
                            <p className="font-bold">Email:</p>
                            <p>example@gmail.com</p>
                    </div>
                    <div className="text-center">
                            <p className="font-bold">Facebook:</p>
                            <p>Jonh Doe</p>
                    </div>
                    <div className="text-center">
                            <p className="font-bold">Address:</p>
                            <p>123 street, Cambodia</p>
                    </div>
            </div>
            <div className="shadow-sm border border-gray-100 p-5">
                <form className="space-y-5">
                        <fieldset>
                            <label className="label-b">Name <span className="text-red-600">*</span></label>
                            <input type="text" className="form-input w-full" placeholder="Enter your name" />
                        </fieldset>

                        <fieldset>
                            <label className="label-b">Phone <span className="text-red-600">*</span></label>
                            <input type="text" className="form-input w-full" placeholder="Enter your phone number" />
                        </fieldset>

                        <fieldset>
                            <label className="label-b">Province <span className="text-red-600">*</span></label>
                            <input type="text" className="form-input w-full" placeholder="Enter your province" />
                        </fieldset>

                        <fieldset>
                            <label className="label-b">Message <span className="text-red-600">*</span></label>
                            <textarea rows="8" className="form-input w-full" placeholder="Type your message here..."></textarea>
                        </fieldset>

                        <fieldset className="flex justify-end">
                            <button className="btn btn-primary">Submit</button>
                        </fieldset>
                </form>
            </div>
    </section>

    </div>
  )
}

export default ContactPage