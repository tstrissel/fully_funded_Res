import Link from 'next/link';

export const Navbar = () => {
    return (
      <>
        <nav className='navBar'>
          <Link href='/'>
            <a className='logo'>
              
                <img className='logo' src="/public/Logo/FFR-logo.png/" alt="FFR" width="200" height="100">
                </img>
             
            </a>
          </Link>
          <button className='button'>
            click me
          </button>
          {/* <div className='navEntriesWrapper'> */}
          <div className='navEntries'>
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
                <img src="/public/Social links/icon_instagram.svg" alt="IG" width="200" height="100">   
                </img>
              </a>
            </Link>
            <Link href='/'>
              <a className='navFacebook'>                
              <img className='logo' src="/public/Social links/icon_instagram.svg" onerror="this.src='your.png'">   
              </img>
            </a>
            </Link>
            <div className='heroMessage'>
             <h1>
              Open Calls
             </h1>
             <h3>
              Browse through a list of fully funded residencies that we <br></br>
              update regularly and find the best fit for you.    
             </h3>
            </div>
          </div>
        {/* </div> */}
        </nav>
      </>
    );
  };
  