import React, { useState, useEffect } from 'react';
import dicso from './assets/disco.jpg';
import  duo from './assets/duo.jpg';
import  group from './assets/group.jpg';
import solo from './assets/solo.jpg';
import lights from './assets/lights.jpg';
function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference < 0) return null;
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTime = calculateTimeLeft();
      setTimeLeft(updatedTime);
      if (!updatedTime) clearInterval(timer);
    }, 1000);
  }, [targetDate]);
  return (
    <div>
      <h2>Registration Closes In:</h2>
      <h1>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </h1>
    </div>
  );
}

function App() {
  const member = ["solo", "team", "duo"]
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);
  return (
    <div>
      <div className='h-[150px] bg-gradient-to-r from-black to-orange-400 sticky top-0 z-10'>
        <button className='  text-white font-bold transform transition-transform duration-300 ease-out bg-gradient-to-r from-orange-900 to-orange-400 m-10 px-3 py-1 rounded-full hover:scale-110'onClick={()=>(document.getElementById('form').style.display='block')}>Book now</button>
        <div style={{  color: 'white', padding: '10px', }} className=' absolute top-2 left-[85%]' >
          <CountdownTimer targetDate={targetDate} />
        </div>
        <div className=' text-slate-100 font-bold text-3xl text-center absolute top-10 left-[40%]  tracking-widest animate-pulse'>Rhythm in Motion 2025</div>
      </div>
      <div className='bg-slate-200 shadow-2xl p-6 rounded-3xl m-10 '>
        <h2 className='tittle'>About the event</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores inventore, omnis alias animi exercitationem suscipit accusamus vitae mollitia recusandae expedita aliquid quis, fugit temporibus soluta magnam, quod consequatur eius Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio culpa, incidunt officia earum eveniet, esse consequuntur reprehenderit explicabo, ratione rem qui minima accusamus quidem deleniti ipsa dolorem? Inventore, laboriosam maxime!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis adipisci hic, voluptatum iusto quaerat, nobis fugit dolorum numquam sint officia maiores sed? Enim amet quibusdam magni magnam, in dolores consectetur.</p></div>
      <div>
        <div className='bg-slate-200 shadow-2xl p-6 rounded-3xl m-10'><h2 className='tittle'>Last Year won Moments</h2>
          <div className='grid grid-cols-3 grid-rows-2 m-10 rounded-3xl gap-2 h-[700px] w-full '>
            <img src={solo} alt="" className='transform transition-transform duration-300 hover:scale-75' /> 
            <img src={duo} className=' row-span-2 h-full transform transition-transform duration-300 hover:scale-75' alt="" />
            <img src={solo} className='transform transition-transform duration-300 hover:scale-75' alt="" /> 
            <img src={dicso} className='transform transition-transform duration-300 hover:scale-75'/>
            <img src={dicso} alt="" className='transform transition-transform duration-300 hover:scale-75' />
         </div>
        </div>
        <div >
          <div className='grid grid-cols-3 m-10 p-4 gap-4 justify-center '>
            <div className=' shadow-2xl p-4 bg-orange-100 rounded-3xl transform transition-colors duration-300 ease-out hover:bg-black hover:text-white hover:scale-100'>
              <h3 className='tittle'>Instructions</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil perferendis dolore temporibus incidunt porro, consequuntur, velit dolor doloribus, numquam cupiditate excepturi perspiciatis nisi nobis fugit fugiat voluptatibus asperiores sequi placeat.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis suscipit non obcaecati delectus repellat quo id voluptatibus dolorem impedit similique voluptatem quae expedita, ut, corporis temporibus alias fuga maiores laborum.
              </p>
            </div>
            <div className=' shadow-2xl p-4  bg-orange-100 rounded-3xl transform transition-transform duration-300 ease-out hover:bg-black hover:text-white hover:scale-110'> <h3 className='tittle'>Cheif Guest</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi autem ex commodi dignissimos distinctio adipisci error dolorem eos quod veritatis. Dolorum eius illo beatae ad numquam, repellat eveniet reprehenderit repellendus Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium error minima cupiditate! Earum eveniet, optio accusantium, reiciendis impedit rem, error nemo necessitatibus eius saepe libero consequatur veniam soluta doloribus!</p></div>
            <div className=' shadow-2xl p-4  bg-orange-100 rounded-3xl transform transition-transform duration-300 ease-out hover:bg-black hover:text-white hover:scale-110'> <h3 className='tittle'>Price Money</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ipsa voluptatum. Ea officia maxime minima odit. Voluptate veritatis quae nesciunt illum ut earum veniam incidunt ipsa totam. Non, quisquam dolores!Lorem</p></div>
          </div>
        </div>
        <form action="" id="form" className='absolute top-2 left-[200px] bg-black bg-opacity-80 p-5 rounded-3xl hidden z-30  ' >
          <div onClick={() => (document.getElementById('form').style.display = 'none')}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white float-end transform transition-transform ease-in-out duration-300 hover:scale-150">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg></div>
          <label htmlFor="" className='block text-orange-700 p-1'>Enter Your name(First letter in capital)* </label><br />
          <input type="text" name="" id="" placeholder='John'required className="text-orange-700 outline-none border-2 py-2 border-orange-400 border-solid px-12  placeholder:text-orange-400 rounded-full focus:border-orange-700 " /> <br />
          <label htmlFor="" className='block text-orange-700 p-1'>Enter Your mail id* </label><br />
          <input type="mail" name="" id="" placeholder='sample1232@gmail.com' required className="   text-orange-700 outline-none border-2 py-2 border-orange-400 border-solid px-12  placeholder:text-orange-400  rounded-full focus:border-orange-700 " /> <br />
          <label htmlFor="" className='block text-orange-700 p-1'>Enter your age* </label><br />
          <input type="number" name="" id="" required className="text-orange-700 outline-none border-2 py-2 border-orange-400 border-solid px-12  placeholder:text-orange-400  rounded-full focus:border-orange-700 " /> <br />
          <label htmlFor="" className='block text-orange-700 p-1'>Select your style</label>
          <select name="" id="" className=' text-orange-700 border-2 outline-none border-orange-400 border-solid px-24 py-2 placeholder:text-orange-400 placeholder:John rounded-full focus:border-orange-700 '>
            <option value="">Classical</option>
            <option value="">western</option>
            <option value="">hiphop</option>
            <option value="">Folk</option>
          </select>
          <label htmlFor="" className='block text-orange-700 p-1'>Slect the your participation* </label><br />
          <select name="" id="" className=' text-orange-700 border-2 outline-none border-orange-400 border-solid px-28 py-2 rounded-full focus:border-orange-700 '>
            {member.map((member,index) => (<option key={index} value={member}>{member}</option>))
            }
          </select><br />
          <button type="submit" className='px-6 py-2 my-3 bg-gradient-to-tr from-orange-500 to-black text-white rounded-full transform transition-transform duration-300 ease-in-out hover:scale-110' >Submit</button>
        </form> </div>
      <div className=' bg-orange-200 bg-opacity-75 flex gap-11 p-10'>
        <div className='w-1/2'>
          <h1 className='tittle  tracking-widest'>Greetings for Audience</h1>
          <div className=' bg-slate-100 bg-opacity-85  p-8 rounded-3xl shadow-2xl'>
            Ladies and Gentlemen, Good Evening!"Welcome to a night of rhythm, passion, and unstoppable energy.We are thrilled to have you here for this spectacular dance event.Tonight, the stage will come alive with vibrant moves and boundless creativity.From classcal grace to modern grooves, prepare to be amazed.Our talented performers have poured their hearts into every step.So get ready to clap, cheer, and maybe even dance in your seats!
           Let the music move you and the magic of dance inspire you.Thank you for being part of this unforgettable evening.Now, let the show begin!"</div>
        </div>
        <div className='flex flex-col mt-[80px] mb-10 border border-orange-600 rounded-3xl p-10 w-1/2 gap-6'>
          <div ><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti molestias inventore
              itaque, quasi cum quos sunt ipsa fuga explicabo sed sequi repellendus ut nesciunt assumenda
              amet officia harum. Facilis, labore.</p></div>
            <div className='flex text-orange-700 transform transition-transform duration-300 ease-in hover:scale-110'>
              <svg className='p-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
                <span className=' cursor-pointer'>9478995032</span>
            </div>
        </div>
      </div>
      </div>
  )
}

export default App