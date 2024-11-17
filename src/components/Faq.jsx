import React from "react";
import Accordion from "./common/Accordian";

function Faq() {
  const accordionItems = [
    {
      title: "Which plan is right for me?",
      content: (
        <>
          <p className="pb-1 md:pb-1.5">
            The Complete plan is ideal for families who want to protect multiple
            devices with the most advanced safety features. It offers unlimited
            device protection, customizable settings for all family members, and
            includes features like call & message monitoring, web and app
            filtering, YouTube monitoring, and more. The Complete plan also
            comes with priority phone support and personalized assistance from
            our Care Plus team.
          </p>
          <p>
            The Basic plan is perfect for small families, covering up to 5
            devices with essential safety features such as app and game
            blocking, location tracking, and web filtering.
          </p>
        </>
      ),
    },
    {
      title: "What’s the difference between Free and Premium?",
      content: (
        <>
          <p className="pb-1 md:pb-1.5">
            The Free version of GuardMyKids protects a single device and
            includes basic protection features.
          </p>
          <p>
            There are two Premium plans: Basic Premium covers up to 5 devices
            with core protection features, while Complete Premium provides
            advanced safety tools for unlimited devices and allows for full
            customization. You can review the full list of Premium features
            above.
          </p>
        </>
      ),
    },
    {
      title: "How do I get started with GuardMyKids?",
      content: (
        <>
          <p className="pb-1 md:pb-1.5">
            Start by selecting the plan that best suits your needs and creating
            your GuardMyKids account. Our easy-to-follow setup process will
            guide you through securing all your family’s devices. If you need to
            download the app, visit our{" "}
            <a href="/downloads/" className="text-blue-500 inline">
              Downloads section
            </a>
            .
          </p>
        </>
      ),
    },
    {
      title: "Which platforms are supported by GuardMyKids?",
      content: (
        <>
          <p>
            GuardMyKids is compatible with the most popular platforms, including
            Windows, Android, iOS, Mac, and Kindle.
          </p>
        </>
      ),
    },
    {
      title: "What are my payment options?",
      content: (
        <>
          <p>
            We offer a variety of payment methods, including Visa, Mastercard,
            American Express, PayPal, Google Pay, and Apple Pay, depending on
            your location.
          </p>
        </>
      ),
    },
    {
      title: "Can I get a refund?",
      content: (
        <>
          <p>
            Yes, we offer a 30-day money-back guarantee if you're not completely
            satisfied with the product.
          </p>
        </>
      ),
    },
    {
      title: "How do I upgrade to a higher Premium plan?",
      content: (
        <>
          <p>
            Upgrading is easy!{" "}
            <a
              href="https://family.qustodio.com/parents-app#/upgrade"
              target="_blank"
              rel="noopener"
              className="text-blue-500 inline">
              Click here
            </a>{" "}
            to explore exclusive offers for Premium users.
          </p>
        </>
      ),
    },
    {
      title: "Have more questions?",
      content: (
        <>
          <p>
            If you need further assistance, GuardMyKids offers email support.
            Visit our{" "}
            <a href="/help/" className="text-blue-500 inline">
              Support Center
            </a>{" "}
            or contact our support team directly{" "}
            <a
              href="mailto:premiumsupport@qustodio.com"
              className="text-blue-500 inline">
              here
            </a>
            . We're happy to help!
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="container mx-auto md:flex justify-between w-full pb-10 md:py-20 ">
        <div className="w-full md:w-4/12 pb-8 md:pt-8 text-center">
          <p className="text-3xl md:text-4xl leading-20 text-gray-700 font-bold">
            Frequently Asked GuadrMyKids{" "}
          </p>
        </div>
        <div className="w-full md:w-8/12 md:ml-4 md:border-t px-4">
          <Accordion items={accordionItems} />
        </div>
      </div>
    </>
  );
}

export default Faq;
