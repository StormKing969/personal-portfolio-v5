import { ContactSectionContext, ContactSectionHeader } from "../../constants";
import React, { useState } from "react";
import type { FormDataType } from "../../types";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert.tsx";
import { Particles } from "../components/Particles.tsx";

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const Contact = () => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<string>("");
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    message: "",
    name: "",
  });

  const showAlertModal = (type: string, message: string) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setIsSending(false);

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs
        .send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            to_name: "Sajana",
            from_email: formData.email,
            to_email: "svwijesinghe97@gmail.com",
            message: formData.message,
          },
          { publicKey: publicKey },
        )
        .then(() => {
          showAlertModal("success", "Message sent successfully");
        })
        .finally(() => {
          setFormData({ email: "", message: "", name: "" });
        });
    } catch (error) {
      showAlertModal("danger", "Something went wrong while sending email");
    }
  };

  return (
    <section
      id={"contact"}
      className={"relative flex items-center c-space section-spacing"}
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={120}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div
        className={
          "flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary"
        }
      >
        <div className={"flex flex-col items-start w-full gap-5 mb-10"}>
          <h2 className={"text-heading"}>{ContactSectionHeader}</h2>
          <p className={"font-normal text-neutral-400"}>
            {ContactSectionContext}
          </p>
        </div>
        <form className={"w-full"} onSubmit={handleSubmit}>
          <div className={"mb-5"}>
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id={"name"}
              name={"name"}
              type={"text"}
              className={"field-input field-input-focus"}
              placeholder={"John Doe"}
              autoComplete={"name"}
              autoCapitalize={"words"}
              value={formData.name}
              onChange={handleChange}
              required={true}
            />
          </div>

          <div className={"mb-5"}>
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id={"email"}
              name={"email"}
              type={"email"}
              className={"field-input field-input-focus"}
              placeholder={"johndoe@gmail.com"}
              autoComplete={"email"}
              value={formData.email}
              onChange={handleChange}
              required={true}
            />
          </div>

          <div className={"mb-5"}>
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id={"message"}
              name={"message"}
              rows={5}
              className={"field-input field-input-focus"}
              placeholder={"Share your thoughts..."}
              value={formData.message}
              spellCheck={true}
              onChange={handleChange}
              required={true}
            />
          </div>
          <button
            type={"submit"}
            className={
              "w-full px-px py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
            }
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;