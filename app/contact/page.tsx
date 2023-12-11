import { ContactDetails, Header } from "@/components";

const Contact = () => {
  return (
    <div>
      <Header label="Contacts" />

      <div className="flex justify-between h-[50vh]">
        <div className="mt-5 flex flex-col justify-between">
          <ContactDetails />

          <h1 className="text-3xl custom_gradient font-semibold max-md:text-center">
            I will be happy to get in touch with you!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
