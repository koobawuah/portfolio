import { ActionFunctionArgs, json } from "@remix-run/node";
import https from "https";

export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const { message } = Object.fromEntries(form);

  if (!process.env.NOTIFI_CRED) {
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
  return json({ status: 200 });
}
