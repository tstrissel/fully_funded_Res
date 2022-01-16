import Link from 'next/link';
import Image from 'next/image'
import Logo from '../../public/Logo/FFR-logo.png'
import Insta from '../..//public/Social links/icon_instagram.svg'
import FaceBook from '../..//public/Social links/icon_facebook.svg'
import styles from '../NavBar/NavBar.module.css'

export default function NavBar() {
    return (
      <>
        <nav className= {styles.navBar} >
          <Link href='/'>
            <a className='logo'>
                <Image className='logo' src= { Logo } alt="FFR" width="200" height="100">
                </Image> 
            </a>
          </Link>
          {/* <button className='button'>
            click me
          </button> */}
          {/* <div className='navEntriesWrapper'> */}
          <div className={styles.navEntries}>
            <Link href='/'>
              <a className='navOpenCalls'>
                Open Calls
              </a>
            </Link>
            <Link href='/'>
              <a className='navResources'>
                Resources
              </a>
            </Link>
            <Link href='/'>
              <a className='navInterviews'>
                Interviews
              </a>
            </Link>
            <Link href='/'>
              <a className='navAbout'>    
                About 
              </a>
            </Link>
            <Link href='/'>
              <a className='navContact'>                
              Contact 
              </a>
            </Link>
            <Link href='/'>
              <a className='navInsta'>              
                <Image src= {Insta} alt="IG" >   
                </Image>
              </a>
            </Link>
            <Link href='/'>
              <a className='navFacebook'>                
              <Image src= {FaceBook} alt="FB" >   
              </Image>
            </a>
            </Link>
            
          </div>
        {/* </div> */}
        </nav>
        <div className='heroMessage'>
             <h1>
              Open Calls
             </h1>
             <h3>
              Browse through a list of fully funded residencies that we <br></br>
              update regularly and find the best fit for you.    
             </h3>
        </div>
      </>
    );
  };
  