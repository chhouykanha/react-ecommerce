
const ContactPage = () => {
  return (
    <div>
      <section className="max-w-[90%] lg:max-w-[40%] font-jost w-full mx-auto my-20 gap-5">
            <div className="shadow-sm border border-gray-100 p-5">
              <h1 className="text-center font-bold text-4xl">Contact us</h1>
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
                            <label className="label-b">Message <span className="text-red-600">*</span></label>
                            <textarea rows="8" className="form-input w-full" placeholder="Type your message here..."></textarea>
                        </fieldset>

                        <fieldset className="flex justify-end">
                            <button className="bg-primary text-white rounded-lg px-4 py-2">Submit</button>
                        </fieldset>
                </form>
            </div>
    </section>

    </div>
  )
}

export default ContactPage