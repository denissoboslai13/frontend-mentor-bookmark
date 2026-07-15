import { useState } from 'react'
import './App.css'
import { AnimatePresence, motion } from 'motion/react'
import { useMediaQuery } from 'react-responsive'

import Logo from '../images/logo-bookmark.svg?react'
import Menu from '../images/icon-hamburger.svg?react'
import Close from '../images/icon-close.svg?react'
import hero from '../images/illustration-hero.svg'
import ill1 from '../images/illustration-features-tab-1.svg'
import ill2 from '../images/illustration-features-tab-2.svg'
import ill3 from '../images/illustration-features-tab-3.svg'
import chromeIcon from '../images/logo-chrome.svg'
import firefoxIcon from '../images/logo-firefox.svg'
import operaIcon from '../images/logo-opera.svg'
import dots from '../images/bg-dots.svg'
import DownArrow from '../images/icon-arrow.svg?react'
import FbIcon from '../images/icon-facebook.svg?react'
import TwtIcon from '../images/icon-twitter.svg?react'
import errorIcon from '../images/icon-error.svg'

const Header = ({ setNavVis, isDesktop }) => {
  return (
    <div className='flex flex-row items-center w-full justify-between py-8 px-6 lg:px-20 xl:px-40 xl:py-12'>
      <Logo className='text-[#242A45]'/>
      {!(isDesktop) && (
        <button onClick={() => setNavVis(true)}>
          <Menu />
        </button>
      )}
      {isDesktop && (
        <div className='flex flex-row gap-12 items-center'>
          <button className='cursor-pointer hover:text-[#fa5757] transition'>FEATURES</button>
          <button className='cursor-pointer hover:text-[#fa5757] transition'>PRICING</button>
          <button className='cursor-pointer hover:text-[#fa5757] transition'>CONTACT</button>
          <button className='bg-[#fa5757] py-2 px-8 rounded-md text-white cursor-pointer hover:bg-white hover:outline-[0.15rem] hover:outline-[#fa5757] hover:text-[#fa5757] hover:shadow-[0px_4px_10px_0px_rgba(50,_50,_93,_0.25)] transition'>LOGIN</button>
        </div>
      )}
    </div>
  )
}

const Nav = ({ navVis, setNavVis }) => {
  return (
    <AnimatePresence>
    {navVis && (
      <motion.div className='fixed z-100 bg-[#252b46]/90 w-full h-full inset-0 p-8 px-6 flex flex-col' key={navVis}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
          <div className='w-full flex flex-row justify-between items-center'>
            <Logo className="[&_.logo-text]:fill-white [&_.logo-circle]:fill-white [&_.logo-bookmark]:fill-[#252b46]/90" />
            <button onClick={() => setNavVis(false)}>
              <Close />
            </button>
          </div>
          <div className='mt-10 text-2xl flex flex-col text-white font-light'>
            <button className='border-b border-t py-5 w-full text-center border-white/50 cursor-pointer'>FEATURES</button>
            <button className='border-b py-5 w-full text-center border-white/50 cursor-pointer'>PRICING</button>
            <button className='border-b py-5 w-full text-center border-white/50 cursor-pointer'>CONTACT</button>
            <button className='mt-6 font-normal border-2 border-white py-1.5 rounded-md focus:bg-white/20 transition focus:outline-none hover:bg-white/20 cursor-pointer'>
              LOGIN
            </button>
          </div>
          <div className='flex flex-row justify-center items-center gap-10 mt-45'>
            <button>
              <FbIcon className='text-white cursor-pointer' />
            </button>
            <button>
              <TwtIcon className='text-white cursor-pointer' />
            </button>
          </div>
        </motion.div>
    )}
    </AnimatePresence>
  )
}

const Hero = () => {
  return (
    <div className='relative p-2 flex flex-col gap-12 mt-8 overflow-hidden lg:px-20 xl:px-40 md:grid md:grid-cols-2 md:pb-10'>
      <div className='md:w-full md:h-full lg:ml-7 xl:ml-15'>
        <img src={hero} alt="" className='object-cover w-full h-auto lg:min-h-[300px] xl:min-h-[425px]'/>
      </div>
      <div className='bg-[#5368df] absolute w-80 h-51 -z-1 -right-2 top-17 rounded-l-full xl:top-35 xl:w-130 xl:h-80'></div>
      <div className='flex flex-col items-center justify-center text-center gap-6 md:col-start-1 md:col-end-2 md:row-start-1 lg:text-left'>
        <div className='px-8 flex flex-col gap-4 xl:px-0'>
          <h1 className='text-3xl font-semibold text-[#252b46] xl:text-5xl lg:text-4xl'>A Simple Bookmark Manager</h1>
          <p className='text-[#b2b1b6] text-[0.95rem] xl:text-xl lg:text-base'>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
        </div>
        <div className='flex flex-row gap-3 font-medium text-[0.87rem] xl:items-start xl:w-full'>
          <button className='bg-[#5368df] px-5 py-3 rounded-md text-white cursor-pointer hover:bg-white hover:outline-[0.15rem] hover:outline-[#5368df] hover:text-[#5368df] hover:shadow-[0px_4px_6px_0px_#5368df] transition'>Get it on Chrome</button>
          <button className='bg-[#f7f7f8] px-5 py-3 rounded-md text-[#6b6f7d] shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] cursor-pointer hover:bg-white hover:outline-[0.15rem] hover:outline-[#6b6f7d] hover:text-[#6b6f7d] transition'>Get it on Firefox</button>
        </div>
      </div>
    </div>
  )
}

const Features = ({ selected, setSelected, isDesktop }) => {
  const headers = ['Bookmark in one click', 'Intelligent search', 'Share your bookmarks']
  const paragraphs = ['Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.', 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.', 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.']

  return (
    <div className='mt-30 xl:px-40 lg:px-20'>
      <div className='flex flex-col items-center justify-center text-center gap-10'>
        <div className='px-8 flex flex-col gap-2 lg:px-50 xl:px-75 lg:gap-6'>
          <h1 className='text-2xl font-semibold text-[#252b46] xl:text-4xl lg:text-3xl'>Features</h1>
          <p className='text-[#b2b1b6] text-[0.95rem] xl:text-xl lg:text-base'>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>
        <div className='flex flex-col w-full px-8 text-[1.05rem] text-[#75777f] font-medium md:flex-row md:px-20 lg:px-25 xl:px-50'>
          {['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing'].map((t, i) => (
            <button className='relative border-b max-md:border-t border-[#b2b1b6] w-full py-4 xl:py-8 cursor-pointer group' onClick={() => setSelected(i)}>
              <p className='group-hover:text-[#fa5757] transition'>{t}</p>
              <div className={`${selected == i ? "opacity-100" : "opacity-0"} absolute transition bottom-0 right-20 left-20 border-4 border-b border-[#fa5757] md:right-0 md:left-0`}></div>
            </button>
          ))}
        </div>
      </div>
      <div className='mt-10 md:grid md:grid-cols-2 md:gap-x-20 md:mt-16'>
        <div className='relative p-8 w-full h-full md:px-0 '>
          <AnimatePresence initial={false} mode='wait'>
            {selected == 0 && (
              <motion.img src={ill1} alt="" key={selected} className='max-xl:ml-6'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              />
            )}
            {selected == 1 && (
              <motion.img src={ill2} alt="" key={selected} className='max-xl:ml-6'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              />
            )}
            {selected == 2 && (
              <motion.img src={ill3} alt="" key={selected} className='max-xl:ml-6'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              />
            )}
          </AnimatePresence>
          <div className='bg-[#5368df] absolute w-80 h-51 -z-1 -left-2 top-17 rounded-r-full lg:-left-20 xl:-left-40 lg:top-25 xl:top-30 lg:h-60 xl:h-85 lg:w-100 xl:w-160'></div>
        </div>
          <AnimatePresence mode='wait'>
            {selected == 0 && (
              <motion.div className='flex flex-col px-8 text-center mt-12 gap-2 md:justify-center lg:gap-6 md:text-left md:mt-0 xl:mt-12' key={selected}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              >
                <h1 className='text-2xl font-semibold text-[#252b46] xl:text-4xl lg:text-3xl'>{headers[0]}</h1>
                <p className='text-[#b2b1b6] text-[0.95rem] xl:text-xl lg:text-base'>{paragraphs[0]}</p>
                {isDesktop && (
                  <div className='flex flex-row items-center justify-start w-full mt-2 justify-start'>
                    <button className='bg-[#5368df] px-6 py-2.5 rounded-md text-white cursor-pointer hover:bg-white hover:outline-[0.15rem] hover:outline-[#5368df] hover:text-[#5368df] hover:shadow-[0px_4px_6px_0px_#5368df] transition'>More info</button>
                  </div>
                )}
              </motion.div>
            )}
            {selected == 1 && (
              <motion.div className='flex flex-col px-8 text-center mt-12 gap-2 md:justify-center lg:gap-6 md:text-left md:mt-0 xl:mt-12' key={selected}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              >
                <h1 className='text-2xl font-semibold text-[#252b46] xl:text-4xl lg:text-3xl'>{headers[1]}</h1>
                <p className='text-[#b2b1b6] text-[0.95rem] xl:text-xl lg:text-base'>{paragraphs[1]}</p>
                {isDesktop && (
                  <div className='flex flex-row items-center justify-start w-full mt-2 justify-start'>
                    <button className='bg-[#5368df] px-6 py-2.5 rounded-md text-white cursor-pointer hover:bg-white hover:outline-[0.15rem] hover:outline-[#5368df] hover:text-[#5368df] hover:shadow-[0px_4px_6px_0px_#5368df] transition'>More info</button>
                  </div>
                )}
              </motion.div>
            )}
            {selected == 2 && (
              <motion.div className='flex flex-col px-8 text-center mt-12 gap-2 md:justify-center lg:gap-6 md:text-left md:mt-0 xl:mt-12' key={selected}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              >
                <h1 className='text-2xl font-semibold text-[#252b46] xl:text-4xl lg:text-3xl'>{headers[2]}</h1>
                <p className='text-[#b2b1b6] text-[0.95rem] xl:text-xl lg:text-base'>{paragraphs[2]}</p>
                {isDesktop && (
                  <div className='flex flex-row items-center justify-start w-full mt-2 justify-start'>
                    <button className='bg-[#5368df] px-6 py-2.5 rounded-md text-white cursor-pointer hover:bg-white hover:outline-[0.15rem] hover:outline-[#5368df] hover:text-[#5368df] hover:shadow-[0px_4px_6px_0px_#5368df] transition'>More info</button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
      </div>
    </div>
  )
}

const Extensions = () => {
  return (
    <div className='mt-30 xl:pt-15 lg:px-20 xl:px-40'>
      <div className='flex flex-col px-8 text-center gap-2 lg:px-40 xl:px-70 lg:gap-6'>
        <h1 className='text-2xl font-semibold text-[#252b46] xl:text-4xl lg:text-3xl'>Download the extension</h1>
        <p className='text-[#b2b1b6] text-[0.95rem] xl:text-xl lg:text-lg'>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
      </div>
      <div className='px-12 flex flex-col gap-14 mt-16 lg:flex-row sm:items-center lg:gap-12 sm:justify-center'>
        {[chromeIcon, firefoxIcon, operaIcon].map((icon, i) => (
          <div className={`${i == 0 ? "lg:mb-20" : i == 1 ? "lg:mb-0 xl:mt-0" : "lg:mt-20"} shadow-[0px_6px_6px_3px_rgba(0,_0,_0,_0.1)] w-full flex flex-col items-center rounded-lg pt-14 transition sm:w-auto md:px-10`}>
            <img src={icon} alt="" className='w-24 h-24' />
            <div className='flex flex-col py-8 text-center'>
              <p className='text-[1.4rem] font-semibold text-[#252b46]'>Add to {i == 0 ? 'Chrome' : i == 1 ? 'Firefox' : 'Opera'}</p>
              <p className='text-[#b2b1b6] text-[0.95rem]'>Minimum version {i == 0 ? '62' : i == 1 ? '55' : '46'}</p>
            </div>
            <img src={dots} alt="" className='w-full max-md:h-full max-md:object-cover' />
            <div className='py-6 text-[0.95rem]'>
              <button className='bg-[#5368df] px-9 lg:px-4 xl:px-8 py-3.5 rounded-md text-white cursor-pointer hover:bg-white hover:outline-[0.15rem] hover:outline-[#5368df] hover:text-[#5368df] hover:shadow-[0px_4px_6px_0px_#5368df] transition'>Add & Install Extension</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Faq = ({ vis1, setVis1, vis2, setVis2, vis3, setVis3, vis4, setVis4 }) => {
  const faqView = [vis1, vis2, vis3, vis4]
  const faqSet = [setVis1, setVis2, setVis3, setVis4]
  const faqText = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.', 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.', 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.', 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.']
  return (
    <div className='mt-30 lg:px-40 xl:px-110'>
      <div className='flex flex-col gap-16'>
        <div className='flex flex-col px-8 text-center gap-2 lg:gap-6'>
          <h1 className='text-2xl font-semibold text-[#252b46] xl:text-4xl lg:text-3xl'>Frequently Asked Questions</h1>
          <p className='text-[#b2b1b6] text-[0.95rem] xl:text-xl lg:text-base'>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
        </div>
        <div className=' px-8 flex flex-col gap-6'>
          {['What is Bookmark?', 'How can I request a new browser?', 'Is there a mobile app?', 'What about other Chromium browsers?'].map((a, i) => (
            <div className='flex flex-col border-b border-[#b2b1b6] pb-4 justify-between text-[0.9rem] text-[#252b46] font-medium lg:text-lg lg:pb-6'>
              <button className='flex flex-row items-center justify-between cursor-pointer group' onClick={() => faqSet[i](p => p == 0 ? 1 : 0)}>
                <p className='group-hover:text-[#fa5757] transition'>{a}</p>
                <DownArrow className={`${faqView[i] == 1 ? "text-[#fa5757] -rotate-180" : "text-[#5267DF] rotate-none"} transition`}/>
              </button>
              <AnimatePresence>
                {faqView[i] == 1 && (
                  <motion.div className='mt-8 text-[#b2b1b6] mb-4 overflow-hidden'
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <p className='leading-6 text-[0.95rem] lg:text-[1.08rem] font-normal lg:leading-8'>{faqText[i]}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className='flex flex-row items-center justify-center w-full'>
          <button className='bg-[#5368df] px-6 py-2.5 rounded-md text-white cursor-pointer hover:bg-white hover:outline-[0.15rem] hover:outline-[#5368df] hover:text-[#5368df] hover:shadow-[0px_4px_6px_0px_#5368df] transition'>More info</button>
        </div>
      </div>
    </div>
  )
}

const Signup = ({ email, setEmail, handleEmailCheck, error, setError, success, setSuccess }) => {
  return (
    <div className='mt-30 bg-[#5368df] px-8 text-center text-white py-16'>
      <div className='flex flex-col gap-2 xl:gap-6 xl:px-120'>
        <p className='text-xs tracking-[0.35rem] xl:text-sm'>35,000+ ALREADY JOINED</p>
        <h1 className='text-2xl font-medium xl:text-4xl'>Stay up-to-date with what we’re doing</h1>
      </div>
      <form className='flex flex-col mt-6 md:flex-row md:items-start md:justify-center md:gap-4 xl:mt-10' onSubmit={handleEmailCheck}>
        <div className='max-md:flex max-md:w-full max-md:flex-col'>
        <input type="text" placeholder='Enter your email address' className={`${error == true ? "border-3 border-[#fa5757]" : success == true ? "border-3 border-[#2EE62E]" : "border-none"} bg-white placeholder-[#b2b1b6] text-black py-3 px-4 rounded-md transition xl:pr-20`} value={email} onChange={(e) => setEmail(e.target.value)} onFocus={() => {setError(false); setSuccess(false)}}/>
        <AnimatePresence>
        {error && (
          <>
            <motion.div className='relative bg-[#fa5757] -mt-1 rounded-b-lg text-left px-4 text-xs py-1' key={error}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            >
              <p>Whoops, make sure its an email!</p>
              <motion.div className='absolute -top-8 right-3' key={error}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              >
                <img src={errorIcon} alt="" />
              </motion.div>
            </motion.div>
          </>
        )}
        {success && (
          <>
            <motion.div className='relative bg-[#2EE62E] -mt-1 rounded-b-lg text-left px-4 text-xs py-1' key={success}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            >
              <p>Successfully sent!</p>
            </motion.div>
          </>
        )}
        </AnimatePresence>
        </div>
        <button type='submit' className='bg-[#fa5757] py-3 rounded-md max-md:mt-4 md:px-5 cursor-pointer hover:bg-white hover:outline-[0.15rem] hover:outline-[#fa5757] hover:text-[#fa5757] hover:shadow-[0px_4px_10px_0px_rgba(50,_50,_93,_0.25)] transition'>Contact Us</button>
      </form>
    </div>
  )
}

const Footer = () => {
  return (
    <div className='bg-[#252b46] flex flex-col items-center text-white py-10 gap-10 md:flex-row md:justify-between md:px-8 xl:px-30'>
      <div className='md:flex-row xl:gap-20 flex flex-col gap-10'>
        <Logo className='text-white'/>
        <div className='flex flex-col gap-6 items-center text-[#f5faff] tracking-widest font-thin md:flex-row'>
          <button className='cursor-pointer hover:text-[#fa5757] transition'>FEATURES</button>
          <button className='cursor-pointer hover:text-[#fa5757] transition'>PRICING</button>
          <button className='cursor-pointer hover:text-[#fa5757] transition'>CONTACT</button>
        </div>
      </div>
      <div className='flex flex-row gap-10 items-center'>
        <button>
          <FbIcon className='text-white hover:text-[#fa5757] cursor-pointer transition' />
        </button>
        <button>
          <TwtIcon className='text-white hover:text-[#fa5757] cursor-pointer transition' />
        </button>
      </div>
    </div>
  )
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function App() {
  const [selected, setSelected] = useState(0)
  const [vis1, setVis1] = useState(1)
  const [vis2, setVis2] = useState(0)
  const [vis3, setVis3] = useState(0)
  const [vis4, setVis4] = useState(0)
  const [email, setEmail] = useState("")
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [navVis, setNavVis] = useState(false)

  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' })

  console.log('Email: ', email)
  console.log('Error: ', error)

  const handleEmailCheck = (event) => {
    event.preventDefault()
    if (validateEmail(email)) {
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
      }, 3000);
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <div className='font-["Rubik"] min-w-[375px]'>
      <Header setNavVis={setNavVis} isDesktop={isDesktop}/>
      <Nav setNavVis={setNavVis} navVis={navVis}/>
      <Hero />
      <Features selected={selected} setSelected={setSelected} isDesktop={isDesktop} />
      <Extensions />
      <Faq vis1={vis1} setVis1={setVis1} vis2={vis2} setVis2={setVis2} vis3={vis3} setVis3={setVis3} vis4={vis4} setVis4={setVis4} />
      <Signup email={email} setEmail={setEmail} handleEmailCheck={handleEmailCheck} error={error} setError={setError} success={success} setSuccess={setSuccess}/>
      <Footer />
    </div>
  )
}

export default App
