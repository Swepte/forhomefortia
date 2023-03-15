import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import logo from '../public/images/logo.svg'
import frameright from '../public/images/frameright.svg'
import frameleft from '../public/images/frameleft.svg'
import gs from '../public/images/gstart.svg'
import maskleft from '../public/images/maskleft.svg'
import maskright from '../public/images/maskright.svg'

import mission from '../public/images/mission.svg'
import vision from '../public/images/vision.svg'
import footerlogo from '../public/images/footerlogo.svg'
import bg from '../public/images/bg.svg'
import carousel2 from '../public/images/carousel2.svg'
import aboutus from '../public/images/aboutus.svg'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Pacificfortia</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* SECTION1 */}
        <div className='w-[100vw] h-[100vh] relative overflow-hidden'>
          <Image
            className='absolute top-0 right-0 -z-10' 
            src={frameright}
            alt='logo'
          />
          <Image
            className='absolute top-0 left-0 -z-10' 
            src={frameleft}
            alt='logo'
          />
          <div className='flex flex-row items-center justify-between px-[20vh] h-[20vh]'>
            <Image
              src={logo}
              alt='logo'
              height={80}
            />
            <ul className='flex flex-row gap-20'>
              <li>ABOUT US</li>
              <li>PRODUCTS</li>
              <li>SERVICE</li>
              <li>CONTACT US</li>
            </ul>
            <button className='bg-[#006338] px-5 py-1 rounded-full  text-white' >
              CAREERS
            </button>
          </div>    
        </div>

        {/* ----------section2 */}
        <div className='h-[45vh] w-[100vw] relative overflow-hidden flex flex-col justify-center'>
          <Image 
            className='absolute top-0 -z-10'
            src={gs} 
            alt='background'
          />
          <Image 
            className='absolute left-0 -z-10'
            src={maskleft} 
            alt='background'
          />
          <Image 
            className='absolute right-0 -z-10'
            src={maskright} 
            alt='background'
          />
          
          <div className='mx-[63vh] flex flex-col items-center justify-center text-center gap-y-4'>
            <h1 className='text-6xl leading-none tracking-wider font-bold text-white'> SAILING TOWARDS GREATNESS</h1>
            <p className='leading-relaxed tracking-wider  text-white'>Pacificfortia Marine Technologies Inc. is your trusted high quality performance boat designer and builder that's ready to cater to all of your boating necessities.</p>
            <button className='bg-[#006338] px-5 py-1 rounded-full  text-white' >
              GET STARTED
            </button>
          </div>
        </div>

        {/* section3 */}
        <div className='w-[100vw] h-[100vh] relative px-28 pt-20 flex flex-row justify-between gap-20'>
          <div className='w-[24vw] text-justify'>
            <Image
            src={mission} 
            alt='background'
            />
            <span>We are committed to provide quality products on time that exceed customer expectations and comply with all customer statuary requirements. We will ensure success through the adherence to an effective quality management system based on continual improvement and customer satisfaction</span>
          </div>
          <div className='w-[24vw] text-justify'>
            <Image
            src={vision} 
            alt='background'
            />
            <span>Our vision is to move towards achieving our goal of eing a world-class manufacturer, we will inspire our employees to be the best they can be. We will engage in sustainable practices and anticipate the needs of our customers. We will maximize return to the stockholders</span>
          </div>
          <div className='w-[24vw] text-justify'>
            <Image
            src={mission} 
            alt='background'
            />
            <span>To deliver the highest quality as a customer boat builder, We pledge to offer the highest quality products, level of expertise, professionalism, and tireless dedication to our customer's satisfaction in both military and commercial sector. Bringing inspiration to our to our employees by establishing core values that matters - Honesty, Trustworthy, Dedication and Commitment to continually improve to seek solutions based on innovative designs.</span>
          </div>
        </div>

         {/* section */}
        <div className='h-[90vh] w-[100vw] px-28 pt-28 relative overflow-hidden flex flex-row text-white gap-20'>
          <div className='w-[55%]'>
            <Image
              src={carousel2} 
              alt='background'
            />
          </div>
          <div className='w-[45%]' >
            <Image
              className='object-none object-right-top w-[95%] h-30'
              src={aboutus} 
              alt='background'
            />
            <p className='text-black text-justify'>Pacificfortia Marine Technologies, Inc., is a local Philippine registered company, a renowned custom boat designer, builder and manufacturer of various naval platforms from 3 meters to 25 meters in length and versed in both fiberglass and aluminum construction. As an innovative and well established boat builder, Pacificfortia has an in-house Engineering, Manufacturing and Quality Assurance Department tasked with designing, construction and testing boats to the most stringent specifications set forth by our customers. Our company possesses many years of in-depth knowledge and experience in the design of marine naval craft, surveying existing vessels, and has been used as consultants on programs to provide our expertise in Boat Building, Repair and System Integration.</p>
          </div>

          
         
        </div>




        {/* section */}
        <div className='h-[82vh] w-[100vw] px-20 py-10 relative overflow-hidden flex flex-row text-white justify-around gap-10'>
          <Image
          className='top-0 left-0 absolute -z-10'
          src={bg} 
          alt='background'
          objectFit='cover'
          />
          <div className=' w-[50%]'></div>
          <div className='w-[50%] flex flex-col items-center justify-center'>
            <h1 className='text-5xl font-bold mb-10'>BE PART OF OUR TEAM</h1>
            <span>Qualified applicants may submit or email their comprehensive</span>
            <span>resume to: </span>
            <span>Human Resources Department</span>
            <span>#97 Industrial Rd. 2, Araneta Village Potrero, Malabon City,</span>
            <span> Philippines,1475</span>
            <span> (02) 367-0020 to 22 ,/ (02) 367-0023/0905-777-7640 </span>
            <span>Email: jloveria@pacifipicfortia.com</span>

          </div>
           
        </div> 



        
        {/* section footer */}
        <div className='h-[45vh] w-[100vw] relative overflow-hidden flex flex-row justify-between py-7 px-10 bg-[#18184A] text-white'>
          <div className='flex flex-row gap-6 items-center'>
            <div className='flex flex-col gap-2 '>
              <h1>CONTACT US NOW!</h1>
              <input></input>
              <input></input>
              <input></input>
              <textarea></textarea>
              <span className='text-xs'> 2018 © Pacificfortia Marine Technologies Inc.</span>
            </div>
            <div className='flex flex-col w-[14vw] text-xs gap-4'>
              <span>#97 Industrial Rd. 2, Araneta Village Potrero, Malabon City, Philippines,1475</span>
              <span>inquiry@pacificfortia.com</span>
              <span>
                (+632) 367-0020 to 22
                (+63) 917-700-7043
              </span>
              <span>By submitting this form, you agree to our privacy policy.</span>
              <button className='bg-[#006338] px-5 py-1 rounded-full  text-white' >
              SEND MESSAGE 
              </button>
            </div>
          </div>
          <div className='flex flex-row gap-10 items-center justify-end'>
            <div>
              <Image
                width={500}
                src={footerlogo }
                alt='logo'
              />
            </div>
            <div className='flex flex-col gap-2 text-sm'>
              <span className='font-bold'>Our Service</span>
              <span>Test Package</span>
              <span>Online HMO Approval</span>
              <span>Find A Doctor</span>
              <span>Home Service Appointment</span>
            </div>

            <div className='flex flex-col gap-3 text-sm'>
              <span className='font-bold'>About Us</span>
              <span>About</span>
              <span>Corporate Profile</span>
              <span>Mission and Vision</span>
              <span>Core Values</span>
              <span>Board of Directors</span>
            </div>


          </div>

        </div>
        

      </main>
    </>
  )
}




