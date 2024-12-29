import React from 'react'
import SubmitButton from "@/components/Common/Button/SubmitButton";
import Input from "@/components/Common/Input";
import Label from "@/components/Common/Label";

export default function ContactForm() {
  return (
    <form action="" className='w-full mx-auto'>
    <Label id="name" label="Your Name*" />
    <Input
      type="text"
      id="name"
      name="name"
      placeholder="Input Your Name"
      minLength="4"
      maxLength="15"
      required
      className="w-full sm:w-4/5 mb-1.5"
    />
    <Label id="email" label="Your E-mail*" />
    <Input
      type="email"
      id="email"
      name="email"
      pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$"
      title="Please enter a valid email address, e.g., example@example.com."
      placeholder="Input Your E-mail"
      required
      className="w-full sm:w-4/5 mb-1.5"
    />
    <Label id="phone" label="Your Phone Number*" />
    <Input
      type="tel"
      id="phone"
      name="phone"
      placeholder="Input Your Phone Number"
      pattern="^(\+?[1-9]\d{1,14}|\d{5,15})$"
      title="Please enter a valid phone number. Example: +123456789 or 123456789."
      required
      className="w-full sm:w-4/5 mb-1.5"
    />
    <Label id="message" label="Your Message*" />
    <textarea
      name="message"
      id="message"
      placeholder="Input Your message"
      minLength="20"
      title="Minimum 20 character"
      required
      className="w-full sm:w-4/5 mb-1.5 py-button-block px-button-inline rounded-md bg-secondary-smoke outline-hidden mt-1 text-black border border-line"
    />

    <SubmitButton className="mt-4 w-full sm:w-4/5 text-center" />
  </form>
  )
}
