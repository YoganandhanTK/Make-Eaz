// import React from 'react'
// import img1 from '../assets/img2.gif'
// import img2 from '../assets/img10.jpg'
// import img3 from '../assets/img21.jpg'
// import './Home.css'
// import mz from '../assets/MZ-02.png'



// function Home() {
//     function openside() {
//         const sbar = document.querySelector('.sbar');
//         const mbar = document.querySelector('.menus');
//         let disVal = sbar.style.display;
//         if (disVal == '' || disVal == 'none') {
//             sbar.style.display = 'block'
//             mbar.style.display = 'none'

//         }
//     }
//     function closeBar() {
//         let sbar = document.querySelector('.sbar');
//         let mbar = document.querySelector('.menus');
//         sbar.style.display = 'none'
//         mbar.style.display = 'block'
//     }
//     return (
//         <>
//             <nav >
//                 <div className="nav">
//                     <div className="menu">
//                         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill=" aliceblue" onClick={openside} className='menus'><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
//                         {/* <a  className='a' href="#">Home</a>
//                   <a  className='a' href="#">About</a>
//                   <a  className='a' href="#">Login</a> */}
//                     </div>
//                     <div className="logo">
//                         <img src={mz} alt="logo" />
//                     </div>
//                 </div>
//                 <div className="sbar">
//                     <svg xmlns="http://www.w3.org/2000/svg" className='close' height="32px" viewBox="0 -960 960 960" width="38px" onClick={closeBar} fill="aliceblue"><path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z" /></svg>
//                     <div className="sidebar">
//                         <a className='a' href="/"><svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#5f6368"><path d="M264-216h96v-240h240v240h96v-348L480-726 264-564v348Zm-72 72v-456l288-216 288 216v456H528v-240h-96v240H192Zm288-327Z" /></svg> Home</a>
//                         <a className='a' href="#footer"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M710-150q-63 0-106.5-43.5T560-300q0-63 43.5-106.5T710-450q63 0 106.5 43.5T860-300q0 63-43.5 106.5T710-150Zm0-80q29 0 49.5-20.5T780-300q0-29-20.5-49.5T710-370q-29 0-49.5 20.5T640-300q0 29 20.5 49.5T710-230Zm-550-30v-80h320v80H160Zm90-250q-63 0-106.5-43.5T100-660q0-63 43.5-106.5T250-810q63 0 106.5 43.5T400-660q0 63-43.5 106.5T250-510Zm0-80q29 0 49.5-20.5T320-660q0-29-20.5-49.5T250-730q-29 0-49.5 20.5T180-660q0 29 20.5 49.5T250-590Zm230-30v-80h320v80H480Zm230 320ZM250-660Z" /></svg>About</a>
//                         <a className='a' href="/Choice"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" /></svg>Login</a>
//                     </div></div>
//             </nav>

//             <main className="main" onClick={closeBar}>
//                 <section className="main-info-tab">
//                     <div className="pic">
//                         <div className="dl"><span>Heading</span> <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, itaque.</div>
//                         <img src={img3} className="head-pic" alt="img1" />
//                     </div>
//                     <div className="pic">
//                         <img src={img2} className="head-pic" alt="img2" />
//                         <div className="dl"><span>Heading</span> <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, itaque.</div>
//                     </div>
//                     <div className="pic">
//                         <div className="dl"><span>Heading</span> <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, itaque.</div>
//                         <img src={img1} className="head-pic" alt="img3" />
//                     </div>
//                 </section>
//             </main>
//             <footer id="footer" className="footer">
//                 <div className="about">
//                     <p> About Us A Government College Of ______ University, <br /> ___place , city  </p>
//                 </div>
//                 <div className="contact">
//                     <p className='ico'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg> <a className='cont'> Ph.no: +144-000000</a></p>
//                     <p className='ico'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg> <a className='mail' href="mailto:Collegemail@mail.com">Collegemail@mail.com</a> </p>
//                 </div>
//                 <div className="dep">
//                     <h4>Department :-</h4>
//                     <ul className='depli'>
//                         <li>B.A Eng</li>
//                         <li>B.A Tam</li>
//                         <li>B.Sc CS</li>
//                         <li>B.Sc Phy</li>
//                         <li>B.Sc Com</li>
//                         <li>B.Sc Mat</li>
//                         <li>B.A Ecom</li>
//                     </ul>
//                 </div>
//             </footer>
//         </>
//     )
// }

// export default Home



import React, { useRef, useState } from 'react';
import '../page/Student/Studentdashboard.css'
import img1 from '../assets/img2.gif'
import img2 from '../assets/img10.jpg'
import img3 from '../assets/img21.jpg'
import mz from '../assets/MZ-02.png'

function Home() {
    let icons ={
            home:"M264-216h96v-240h240v240h96v-348L480-726 264-564v348Zm-72 72v-456l288-216 288 216v456H528v-240h-96v240H192Zm288-327Z",
            mail:"M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z",
            phone:"M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z",
            login:"M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" ,
            about:"M710-150q-63 0-106.5-43.5T560-300q0-63 43.5-106.5T710-450q63 0 106.5 43.5T860-300q0 63-43.5 106.5T710-150Zm0-80q29 0 49.5-20.5T780-300q0-29-20.5-49.5T710-370q-29 0-49.5 20.5T640-300q0 29 20.5 49.5T710-230Zm-550-30v-80h320v80H160Zm90-250q-63 0-106.5-43.5T100-660q0-63 43.5-106.5T250-810q63 0 106.5 43.5T400-660q0 63-43.5 106.5T250-510Zm0-80q29 0 49.5-20.5T320-660q0-29-20.5-49.5T250-730q-29 0-49.5 20.5T180-660q0 29 20.5 49.5T250-590Zm230-30v-80h320v80H480Zm230 320ZM250-660Z",
            profile:"M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z",
            menuOpen:"M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z",
            menuClose:"M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z"
        }
        const [icon,seticon]=useState(icons.menuOpen)

        window.addEventListener('scroll',()=>{closeSideBar()})

    
        function closeSideBar() {
            let menu = document.querySelector('.showside')
            menu.style.display='none'
            seticon(icons.menuOpen)
            console.log("hello")
        }    
    
        
        function showSideBar(){
            let menu = document.querySelector('.showside')
            let menuState = menu.style.display
            if(menuState!='block'){
                menu.style.display='block'
                seticon(icons.menuClose)
            }
            else{
                menu.style.display='none'
                seticon(icons.menuOpen)
            }
        }
  return (
    <>
    <nav>
           <img src={mz} height="38px" width="38px" alt="logo" />
            {/* <svg className='icos'  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d={icons.profile} /></svg> */}

            <svg className='icos' onClick={showSideBar} id='menu' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path className='menuPath' d={icon}/></svg>
        </nav>
        <section className='showside'>
            <div className="list">
            <a className='listItem' href="/"><svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#5f6368"><path d={icons.home} /></svg> Home</a>
                        <a className='listItem' href="#footer"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d={icons.about} /></svg>About</a>
                         <a className='listItem' href="/Login"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d={icons.login}/></svg>Login</a>
            </div>
        </section>
        <>
        <main className='main-cont' onClick={closeSideBar}>
            <section className="main-info-tab">
                                <div className="pic">
                                    <div className="dl"><span>Heading</span> <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, itaque.</div>
                                    <img src={img1} className="head-pic" alt="img1" />
                                </div>
                                <div className="pic">
                                    <img src={img2} className="head-pic" alt="img2" />
                                    <div className="dl"><span>Heading</span> <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, itaque.</div>
                                </div>
                                <div className="pic">
                                    <div className="dl"><span>Heading</span> <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, itaque.</div>
                                    <img src={img3}  className="head-pic" alt="img3" />
                                </div>
                            </section>
        </main>
        </>
        <footer id="footer" className="footer">
                 <div className="about">
                     <p> About Us A Government College Of ______ University, <br /> ___place , city  </p>
                 </div>
                 <div className="contact">
                     <p className='ico'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d={icons.phone} /></svg> <a className='cont'> Ph.no: +144-000000</a></p>
                     <p className='ico'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d={icons.mail} /></svg> <a className='mail' href="mailto:Collegemail@mail.com">Collegemail@mail.com</a> </p>
                 </div>
                 <div className="dep">
                     <h4>Department :-</h4>
                     <ul className='depli'>
                         <li>B.A Eng</li>
                         <li>B.A Tam</li>
                         <li>B.Sc CS</li>
                         <li>B.Sc Phy</li>
                         <li>B.Sc Com</li>
                         <li>B.Sc Mat</li>
                         <li>B.A Ecom</li>
                     </ul>
                 </div>
             </footer>
        </>
  )
}

export default Home