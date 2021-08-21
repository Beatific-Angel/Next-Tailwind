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

export default function Footer() {
	const router = useRouter()

	const scrolltop = (path) => {
		if(path === "/") window.scrollTo({top: 0, behavior: 'smooth'});
		else router.push("/");
	}

	return (
		<div>
			<div className="bg-black h-60 relative">
		    	<Image
		    		src="/images/bottomsection.png"
		    		alt="Bottom Section"
		    		layout="fill"
		    		className="object-cover"
		    	/>
		    </div>
			<div className="bg-black md:px-16 px-8 py-6 text-footer font-bold">
				<div className="grid grid-cols-12">
					<div className="md:col-span-4 col-span-full text-2xl pt-12">
						<div className="cursor-pointer" onClick={() => scrolltop(router.pathname)}>
							<Image 
								src="/icons/arrow-top.svg"
								alt="Arrow Top Image"
								width={20}
								height={23}
							/>
							<div className="mt-4">
								Fathom Radiant
							</div>
						</div>
					</div>
					<div className="md:col-span-8 md:pt-0 pt-8 col-span-full">
						<div>
							<ul className="md:flex block justify-start">
								{links.map(({ href, label }) => (
						            <li key={`${href}${label}`} style={{color: router.pathname === href ? '#468189':'rgb(213 213 213)'}} className="pr-6 footer-link py-1.5 text-lg font-bold text-white">
						              <Link href={href} className="no-underline">
						                {label}
						              </Link>
						            </li>
					          	))}
							</ul>
						</div>
						<div className="pt-16">
							<div className="flex justify-start">
								<a href="https://www.twitter.com/wix">
									<Image
										src="/images/twitter.webp"
										alt="Twitter Icon"
										width={24}
										height={24}
									/>
								</a>
								<a href="https://www.instagram.com/wix" className="ml-2">
									<Image
										src="/images/linkedin.webp"
										alt="Linkedin Icon"
										width={24}
										height={24}
									/>
								</a>
							</div>
							<div className="grid grid-cols-12 pt-8 font-normal">
								<div className="md:col-span-6 col-span-full pr-10 font-avenir-light">
									<div>Palo Alto</div>
									<div><small>380 Portage Ave</small></div>
									<div><small>Palo Alto, CA 94306</small></div>
								</div>
								<div className="md:col-span-6 md:pt-0 font-avenir-light pt-6 col-span-full flex items-end">
									<small>© 2020 Fathom Radiant, PBC</small>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}