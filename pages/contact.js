import Link from "next/link";
import Image from "next/image";

export default function contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        If you want to contribute with an open call or have a question, feel
        free to send us an email at{" "}
        <Link href="/contact">fullyfunded.residencies@gmail.com</Link>
      </p>
      <p>------------------------------</p>

      <p>
        Do you need help with writing an application, motivation letter or
        project proposal?{" "}
        <Link href="/contact">fullyfunded.residencies@gmail.com</Link>
      </p>

      <p>
        Our aim is to help everyone with professional advice regardless of
        individual financial situation. That's why our services are based on
        donations and pay-what-you-can.
      </p>
    </div>
  );
}
