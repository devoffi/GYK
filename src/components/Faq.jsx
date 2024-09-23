import React from 'react'
import Accordion from './common/Accordian';


function Faq() {
  const accordionItems = [
    {
      title: 'What’s the right plan for me?	',
      content: (
        <>
          <p  className='pb-1 md:pb-1.5'>The Complete plan is perfect for families looking to protect multiple devices with the most advanced safety features. There is no limit on the number of devices you can protect and the features are customizable to work for every family and children of all ages. The Complete plan has all the features included in the Basic plan plus calls &amp; messages monitoring, custom rules for web, apps and games, YouTube monitoring, and more. The Complete plan also includes priority phone support and personalized help from our Care Plus team.</p>
          <p>The Basic plan protects up to 5 devices with core safety features. This plan is ideal for small families looking for basic safety features such as games &amp; app blocking, location monitoring and web filtering.</p>
        </>
      ),
    },
    {
      title: 'What’s the difference between Free and Premium?	',
      content: (
        <>
          <p  className='pb-1 md:pb-1.5'>The Free version of Qustodio can protect a single device and includes basic protection features.</p>
          <p>There are two Premium plans to choose from. Basic Premium gives you access to core protection features for up to 5 devices. Complete Premium gives you access to advanced safety features (as well as all core features), and allows you to fully customize them for your family - on unlimited devices. You can see the full list of Premium features above on this page.</p>
        </>
      ),
    },
    {
      title: 'How to get started with Qustodio?',
      content: (
        <>
          <p className='pb-1 md:pb-1.5'>First choose the plan which is right for you and create your Qustodio account. Next, Qustodio will guide you through an easy configuration process to make sure that all your family devices are protected. Need a download - check out the&nbsp;<a  href="/downloads/" className='text-blue-500 inline'>downloads section</a>&nbsp;of our website.</p>          
          <p>There are two Premium plans to choose from. Basic Premium gives you access to core protection features for up to 5 devices. Complete Premium gives you access to advanced safety features (as well as all core features), and allows you to fully customize them for your family - on unlimited devices. You can see the full list of Premium features above on this page.</p>
        </>
      ),
    },
    {
      title: 'What platforms is Qustodio compatible with?',
      content: (
        <>
          <p>Qustodio works on the most popular platforms: Windows, Android, iOS, Mac, and Kindle.</p>        
        </>
      ),
    },
    {
      title: 'What are my payment options?',
      content: (
        <>
          <p>We offer a wide variety of payment options depending on your location including Visa, Mastercard, American Express, PayPal, Google Pay and Apple Pay.</p>        
        </>
      ),
    },
    {
      title: 'Can I get my money back?',
      content: (
        <>
          <p>Absolutely, we do have 30-day money back guarantee in case you’re not satisfied with the product.</p>        
        </>
      ),
    },
    {
      title: 'How do I switch to a bigger Premium plan?',
      content: (
        <>
          <p>Easy!&nbsp;<a href="https://family.qustodio.com/parents-app#/upgrade" target="_blank" rel="noopener" className='text-blue-500 inline'>Click here</a>&nbsp;to find out exclusive offers for Premium users.</p>        
        </>
      ),
    },
    {
      title: 'More questions?',
      content: (
        <>
          <p>Qustodio offers email support. If you'd like to ask a question, you can visit our&nbsp;<a href="/help/" className='text-blue-500 inline'>Support Center</a>&nbsp;or contact our support team directly&nbsp;<a href="mailto:premiumsupport@qustodio.com" className='text-blue-500 inline'>here</a>. We're here to help.</p>
        </>
      ),
    },


 
  ];
 		
  			

  return (
    <>
        <div className='container mx-auto md:flex justify-between w-full pb-10 md:pb-20 '>
            <div className='w-full md:w-4/12 pb-8 md:pt-8 text-center'>
                <p className='text-3xl md:text-4xl leading-20 text-gray-700 font-bold'>Frequently Asked Questions</p>
            </div>
            <div className='w-full md:w-8/12 md:ml-4 md:border-t px-4'>
              <Accordion items={accordionItems} />
            </div>

        </div>
    </>
  )
}

export default Faq