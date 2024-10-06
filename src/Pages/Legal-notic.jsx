import React from 'react'
import { SectionContainer } from '../components/common/SectionContainer'

function LegalNotic() {
  return (
        <SectionContainer >
            <div className='text-gray-700 text-lg font-medium my-10 md:my-20 text-center md:text-start'>
                <h1 className='text-5xl font-extrabold '>Legal Notice</h1>
                <h2 className='text-2xl font-semibold pt-8'>Who we are</h2>
                <p className="py-4">
                    You are accessing the website of Qustodio Technologies S.L. (“Qustodio”, the “Company” or “we/us”) available at 
                    <a href="https://www.qustodio.com" className="text-blue-500 hover:underline inline "> www.qustodio.com</a> 
                    (hereinafter the “Website”).
                </p>
                <p className="pt-1 pb-2" >
                    Qustodio Technologies S.L. is domiciled at Roger de Flor Street, 193, 08013 Barcelona, Spain, has Spanish tax number B-65825523, and is registered in the Companies Registry of Barcelona, volume 38188, Sheet B322132, page 78. You can contact us at: 
                    <a href="mailto:info@qustodio.com" className="text-blue-500 hover:underline inline "> info@qustodio.com</a>.
                </p>
                
                <h2 className='text-2xl font-semibold pt-8'>Intellectual and Industrial Property</h2>
                <p className="py-4">All rights of intellectual property on any contents of this Web Site including, without limitation, images, trademarks, logos, distinctive signs, sounds and animations, texts, sound, visual and audiovisual recordings, and the databases, are owned by the Company or its licensors and are protected by national and international laws. Such rights are reserved in favor of the Company and / or its licensors. Any reproduction, copying, publication, distribution, modification, transformation, removal, handling, and any other use, with or without profit, all or part of this Web Site or any of its contents, without the prior express written permission of the Company is expressly prohibited. Qustodio may exercise any legal and/or extrajudicial actions it considers appropriate, in case of a possible violation of their rights.</p>
                
                <h2 className='text-2xl font-semibold pt-8'>Responsibility</h2>
                <p className="py-4">Qustodio is not responsible for any third-party webpage are accessible from the Website, nor of the accuracy, veracity and validity of the Website’s information that is not of its own elaboration.</p>
                <p className="">However, by virtue of article 17 of Spanish Law 34/2002, in case Qustodio is aware of the unlawfulness of such content or links, it undertakes to suppress or disable the links, as well as, where appropriate, blocking those contents that may be unlawful or infringe the rights of any third-party, in accordance with articles 11 and 16 of the mentioned Law.</p>
                <p className="py-4">Furthermore, the Company will not be responsible for the damages that may occur due to failures or bad configurations of the browser installed by the user in its computer. Qustodio will not be responsible for any technical incident or failure that occurs when the user connects to the Internet. Likewise, the absence of interruptions or errors in accessing the website is not guaranteed.</p>
                <p className="py-">Likewise, Qustodio reserves the right to update, modify or delete the information contained in its website, as well as its configuration or presentation, at any time without assuming any responsibility for it.</p>

                <h2 className='text-2xl font-semibold pt-8'>Protection of Personal Data</h2>
                <p className="py-4">We will process your personal data collected on our Website or when you contact us via email according to our <a href='#' className="text-blue-500 hover:underline inline ">Privacy Policy </a>.</p>

                <h2 className='text-2xl font-semibold pt-8'>Cookies</h2>
                <p className="py-4">In our Website we use cookies, please see our <a href='#' className="text-blue-500 hover:underline inline ">Cookie Policy </a>  for further details.</p>

                <h2 className='text-2xl font-semibold pt-8'>Qustodio Family Services</h2>
                <p className="py-4">The services offered by Qustodio Family are regulated by the specific <a href='#' className="text-blue-500 hover:underline inline ">Terms and Conditions </a> and <a href='#' className="text-blue-500 hover:underline inline ">Privacy Policy</a>.</p>
                
                <h2 className='text-2xl font-semibold pt-8'>Applicable law and jurisdiction</h2>
                <p className="py-4">These Legal Notice, including our Privacy Policy and Cookie Policy, are governed by Spanish laws. The courts of the city of Barcelona shall be competent to decide any controversy arising from the use of our Website.</p>
            </div>
        </SectionContainer>
  )
}

export default LegalNotic