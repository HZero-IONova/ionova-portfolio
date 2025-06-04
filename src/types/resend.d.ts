declare module "resend" {
  import type { EmailResponse } from "resend/dist/types";
  interface ResendOptions {
    apiKey: string;
  }
  interface SendEmailOptions {
    from: string;
    to: string | string[];
    subject: string;
    html: string;
    replyTo?: string;
  }
  export class Resend {
    constructor(apiKey: string);
    emails: {
      send(opts: SendEmailOptions): Promise<EmailResponse>;
    };
  }
  // Ajusta o expande estas declaraciones según tu uso
}
