import nodemailer from "nodemailer";
import { ActionFunctionArgs, json } from "@remix-run/node";
import https from "https";
import { MailOptions } from "nodemailer/lib/json-transport";

export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const { message } = Object.fromEntries(form);

  if (!message) {
    return json({ error: "Message is required" }, { status: 400 });
  }

  if (
    !process.env.NOTIFI_CRED ||
    (!process.env.EMAIL_USER && !process.env.EMAIL_PASS)
  ) {
    throw new Error("Credentials for sending notifications not initialized!");
  }

  const sendNotification = {
    credentials: process.env.NOTIFI_CRED,
    title: "New message from Portfolio Website",
    message: message,
    link: "https://notifi.it/",
    image:
      "https://portfolio-nine-coral-28.vercel.app/favicons/favicon-32x32.png",
  };

  console.log("(received) " + message);
  const url = `https://notifi.it/api?credentials=${process.env.NOTIFI_CRED}&title=${sendNotification.title}&message=${message}&link=${sendNotification.link}&image=${sendNotification.image}`;

  try {
    https
      .get(url, (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          console.log("Response: ", data);
        });
      })
      .on("error", (e) => {
        console.error(`Got error: ${e.message}`);
      });
  } catch (e) {
    console.error("Sorry, something went wrong: " + e);
    throw new Error("Unable to send message: " + e);
  }

  const transporter = nodemailer.createTransport({
    host: "bawuahboakye.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions: MailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.MY_EMAIL,
    subject: "New Message from Portfolio Website",
    html: `<p>${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
    // return json({ error: "Failed to send email" }, { status: 500 });
  }
  return json({ status: 200 });
}
