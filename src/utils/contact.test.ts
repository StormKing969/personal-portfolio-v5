import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import emailjs from "@emailjs/browser";
import { sendContactMessage } from "./contact";

vi.mock("@emailjs/browser", () => ({
  default: { send: vi.fn() },
}));

const form = { name: "Ada", email: "ada@example.com", message: "hello" };

describe("sendContactMessage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubEnv("VITE_EMAILJS_PUBLIC_KEY", "pk");
    vi.stubEnv("VITE_EMAILJS_SERVICE_ID", "svc");
    vi.stubEnv("VITE_EMAILJS_TEMPLATE_ID", "tpl");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("returns ok when the send succeeds", async () => {
    vi.mocked(emailjs.send).mockResolvedValue({
      status: 200,
      text: "OK",
    } as never);
    expect(await sendContactMessage(form)).toEqual({ ok: true });
  });

  it("returns an error when the send fails", async () => {
    vi.mocked(emailjs.send).mockRejectedValue(new Error("boom"));
    const result = await sendContactMessage(form);
    expect(result.ok).toBe(false);
  });

  it("returns a config error when an env key is missing", async () => {
    vi.stubEnv("VITE_EMAILJS_PUBLIC_KEY", "");
    expect(await sendContactMessage(form)).toEqual({
      ok: false,
      error: "Email not configured",
    });
    expect(emailjs.send).not.toHaveBeenCalled();
  });
});
