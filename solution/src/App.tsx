import { useState } from 'react'
import './App.css'

import Logo from '../../images/logo-bookmark.svg?react'
import Menu from '../../images/icon-hamburger.svg?react'
import hero from '../../images/illustration-hero.svg'
import ill1 from '../../images/illustration-features-tab-1.svg'
import ill2 from '../../images/illustration-features-tab-2.svg'
import ill3 from '../../images/illustration-features-tab-3.svg'
import chromeIcon from '../../images/logo-chrome.svg'
import firefoxIcon from '../../images/logo-firefox.svg'
import operaIcon from '../../images/logo-opera.svg'
import dots from '../../images/bg-dots.svg'
import downArrow from '../../images/icon-arrow.svg'
import fbIcon from '../../images/icon-facebook.svg'
import twtIcon from '../../images/icon-twitter.svg'

const Header = () => {
  return (
    <div className='flex flex-row items-center w-full justify-between py-8 px-6'>
      <Logo className='text-[#242A45]'/>
      <Menu />
    </div>
  )
}

const Hero = () => {
  return (
    <div className='relative p-2 flex flex-col gap-12 mt-8'>
      <img src={hero} alt="" />
      <div className='bg-[#5368df] absolute w-80 h-51 -z-1 -right-2 top-17 rounded-l-full'></div>
      <div className='flex flex-col items-center justify-center text-center gap-6'>
        <div className='px-8 flex flex-col gap-4'>
          <h1 className='text-3xl font-semibold text-[#252b46]'>A Simple Bookmark Manager</h1>
          <p className='text-[#b2b1b6] text-[0.95rem]'>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
        </div>
        <div className='flex flex-row gap-3 font-medium text-[0.87rem]'>
          <button className='bg-[#5368df] px-5 py-3 rounded-md text-white'>Get it on Chrome</button>
          <button className='bg-[#f7f7f8] px-5 py-3 rounded-md text-[#6b6f7d]'>Get it on Firefox</button>
        </div>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <div className='mt-30'>
      <div className='flex flex-col items-center justify-center text-center gap-10'>
        <div className='px-8 flex flex-col gap-2'>
          <h1 className='text-2xl font-semibold text-[#252b46]'>Features</h1>
          <p className='text-[#b2b1b6] text-[0.95rem]'>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>
        <div className='flex flex-col w-full px-8 text-[1.05rem] text-[#75777f] font-medium'>
          <div className='border-b border-t border-[#b2b1b6] w-full py-4'>
            <p>Simple Bookmarking</p>
          </div>
          <div className='border-b border-[#b2b1b6] w-full py-4'>Speedy Searching</div>
          <div className='border-b border-[#b2b1b6] w-full py-4'>Easy Sharing</div>
        </div>
      </div>
      <div className='mt-10'>
        <div className='relative p-8'>
          <img src={ill1} alt="" />
          <div className='bg-[#5368df] absolute w-80 h-51 -z-1 -left-2 top-17 rounded-r-full'></div>
        </div>
        <div className='flex flex-col px-8 text-center mt-12 gap-2'>
          <h1 className='text-2xl font-semibold text-[#252b46]'>Bookmark in one click</h1>
          <p className='text-[#b2b1b6] text-[0.95rem]'>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
        </div>
      </div>
    </div>
  )
}

const Extensions = () => {
  return (
    <div className='mt-30'>
      <div className='flex flex-col px-8 text-center gap-2'>
        <h1 className='text-2xl font-semibold text-[#252b46]'>Download the extension</h1>
        <p className='text-[#b2b1b6] text-[0.95rem]'>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
      </div>
      <div className='px-12 flex flex-col gap-14 mt-16'>
        {[chromeIcon, firefoxIcon, operaIcon].map((icon, i) => (
          <div className='shadow-[0px_6px_6px_3px_rgba(0,_0,_0,_0.1)] w-full flex flex-col items-center rounded-lg pt-14'>
            <img src={icon} alt="" className='w-24 h-24' />
            <div className='flex flex-col py-8 text-center'>
              <p className='text-[1.4rem] font-semibold text-[#252b46]'>Add to {i == 0 ? 'Chrome' : i == 1 ? 'Firefox' : 'Opera'}</p>
              <p className='text-[#b2b1b6] text-[0.95rem]'>Minimum version {i == 0 ? '62' : i == 1 ? '55' : '46'}</p>
            </div>
            <img src={dots} alt="" className='w-full h-full object-cover' />
            <div className='py-6 text-[0.95rem]'>
              <button className='bg-[#5368df] px-9.5 py-3.5 rounded-md text-white'>Add & Install Extension</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Faq = () => {
  return (
    <div className='mt-30'>
      <div className='flex flex-col gap-16'>
        <div className='flex flex-col px-8 text-center gap-2'>
          <h1 className='text-2xl font-semibold text-[#252b46]'>Frequently Asked Questions</h1>
          <p className='text-[#b2b1b6] text-[0.95rem]'>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
        </div>
        <div className=' px-8 flex flex-col gap-6'>
          {['What is Bookmark?', 'How can I request a new browser?', 'Is there a mobile app?', 'What about other Chromium browsers?'].map((a, i) => (
            <div className='flex flex-row items-center border-b border-[#b2b1b6] pb-4 justify-between text-[0.9rem] text-[#252b46] font-medium'>
              <p>{a}</p>
              <img src={downArrow} alt="" />
            </div>
          ))}
        </div>
        <div className='flex flex-row items-center justify-center w-full'>
          <button className='bg-[#5368df] px-6 py-2.5 rounded-md text-white'>More info</button>
        </div>
      </div>
    </div>
  )
}

const Signup = () => {
  return (
    <div className='mt-30 bg-[#5368df] px-8 text-center text-white py-16'>
      <div className='flex flex-col gap-2'>
        <p className='text-xs tracking-[0.35rem]'>35,000+ ALREADY JOINED</p>
        <h1 className='text-2xl font-medium'>Stay up-to-date with what we’re doing</h1>
      </div>
      <form className='flex flex-col gap-4 mt-6'>
        <input type="email" placeholder='Enter your email address' className='bg-white text-[#b2b1b6] py-3 px-4 rounded-md'/>
        <button type='submit' className='bg-[#fa5757] py-3 rounded-md'>Contact Us</button>
      </form>
    </div>
  )
}

const Footer = () => {
  return (
    <div className='bg-[#252b46] flex flex-col items-center text-white py-10 gap-10'>
      <Logo className='text-white'/>
      <div className='flex flex-col gap-6 items-center text-[#f5faff] tracking-widest font-thin'>
        <p>FEATURES</p>
        <p>PRICING</p>
        <p>CONTACT</p>
      </div>
      <div className='flex flex-row gap-10 items-center'>
        <img src={fbIcon} alt="" />
        <img src={twtIcon} alt="" />
      </div>
    </div>
  )
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='font-["Rubik"] min-w-[375px]'>
      <Header />
      <Hero />
      <Features />
      <Extensions />
      <Faq />
      <Signup />
      <Footer />
    </div>
  )
}

export default App
