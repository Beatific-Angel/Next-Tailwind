import Link from 'next/link'
import Image from 'next/Image'
import { useRouter } from 'next/router'

const links = [
  { href: '/', label: 'Home' },
  { href: '/technology', label: 'Technology' },
  { href: '/careers', label: 'Join Us' },
  { href: '/post', label: 'Blog' },
  { href: '/blank', label: 'About' }
]

export default function Nav() {
	const router = useRouter()

	const toggleMenu = () => {
		document.getElementById("menuButton").classList.toggle("active");
		document.getElementById("mobileMenu").classList.toggle("open");
	}

  	return (
  		<>
		  	<header className="md:block hidden fixed inset-x-0 top-0 left-0 h-screen nav-bar pt-16 px-10">
				<nav>
			        <div>
			          <Link href="/">
			            <a className="text-blue-500 no-underline text-accent-1 dark:text-blue-300">
			              <Image 
			                src="/images/logo.png"
			                alt="Picture of logo"
			                width={77}
			                height={88}
			              />
			            </a>
			          </Link>
			        </div>
			        <ul className="pt-16">
			          {links.map(({ href, label }) => (
			            <li key={`${href}${label}`} style={{color: router.pathname === href ? 'black':'white'}} className="py-2 text-lg font-bold text-white">
			              <Link href={href} className="no-underline">
			                {label}
			              </Link>
			            </li>
			          ))}
			        </ul>
			    </nav>
		  	</header>
		  	<div className="md:hidden block">
				<button id="menuButton" onClick={() => toggleMenu()} className="mobile-menu toggle">
		            <span className="icon"></span>
	          	</button>
	          	<div id="mobileMenu" className="mobile-nav-menu fixed w-full h-screen left-0 top-0 bg-black">
	          		<ul className="px-16 pt-40">
			          {links.map(({ href, label }) => (
			            <li onClick={() => toggleMenu()} key={`${href}${label}`} style={{color: router.pathname === href ? 'rgb(172,171,171)':'white'}} className="py-3 text-lg font-bold text-white">
			              <Link href={href} className="no-underline">
			                {label}
			              </Link>
			            </li>
			          ))}
			        </ul>
	          	</div>
		  	</div>
		</>
	)
}
