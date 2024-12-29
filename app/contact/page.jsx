
import HighLightedSubtitle from "@/components/Common/HighLightedSubtitle";

import Title from "@/components/Common/Title";
import ContactForm from "@/components/Contact/ContactForm";
import CallIcon from "@/Icons List/CallIcon";
import MailIcon from "@/Icons List/MailIcon";
import React from "react";

export default function ContactPage() {
  return (
    <div>
      <HighLightedSubtitle text="Contact" />
      <Title text="Contact With Us" />

      <div className="grid grid-cols-1 sm:grid-cols-[2fr_3fr] gap-8 mt-8">
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex gap-1 items-center mb-2">
              <CallIcon className="size-7 bg-secondary-red p-1 rounded-full stroke-primary-white fill-primary-white" />{" "}
              <h3 className=" text-[1.25rem] font-semibold">Call To Us</h3>
            </div>
            <p>We are availbale 24/7.</p>
            <p>7 days a week.</p>
            <p>Phone: +8801723422323</p>
          </div>
          <hr className="text-line" />
          <div>
            <div className="flex gap-1 items-center mb-2">
              <MailIcon className="size-7 bg-secondary-red p-1 rounded-full fill-primary-white" />{" "}
              <h3 className=" text-[1.25rem] font-semibold">Write To Us</h3>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>E-mails: customer@exclusive.com</p>
            <p>E-mails: support@exclusive.com</p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
