import emailjs from "@emailjs/browser";
import type { FormDataType } from "../../types";

export type SendResult = { ok: true } | { ok: false; error: string };

const RECIPIENT = { name: "Sajana", email: "svwijesinghe97@gmail.com" };

// Deep module: the whole "deliver a contact message" behaviour behind one interface.
// Config, recipient identity, payload mapping, and the EmailJS call stay internal.
export async function sendContactMessage(
  form: FormDataType,
): Promise<SendResult> {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  if (!publicKey || !serviceId || !templateId) {
    return { ok: false, error: "Email not configured" };
  }

  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: form.name,
        to_name: RECIPIENT.name,
        from_email: form.email,
        to_email: RECIPIENT.email,
        message: form.message,
      },
      { publicKey },
    );
    return { ok: true };
  } catch {
    return { ok: false, error: "Something went wrong while sending email" };
  }
}
