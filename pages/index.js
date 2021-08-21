import Image from 'next/Image'

export default function IndexPage() {
	return (
		<div>
	        <div className="page md:p-24 p-12 night-sky relative w-full h-screen flex flex-wrap content-end">
	        	<Image 
	        		src="/images/nightsky.jpg"
	        		alt="Night sky image"
	        		layout="fill"
	        		className="object-cover"
	        	/>
	        	<div className="text-white z-10">
	        		<div className="text-4xl font-bold font-poppins-semibold">Fathom Radiant</div>
	        		<div className="mt-12 mb-10 font-avenir-light leading-2">hardware to advance Machine Intelligence for the<br/>benefit of all</div>
	        		<div className="font-avenir-light">
	        			<a href="#" className="flex items-center">
		        			Join us
		        			<svg fill="white" className="ml-8" style={{width: 23, height: 20}} preserveAspectRatio="none" data-bbox="19.117 18.918 161.766 162.164" viewBox="19.117 18.918 161.766 162.164" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="img" aria-labelledby="comp-kikuasnf-svgtitle"><title id="comp-kikuasnf-svgtitle"></title>
							    <g>
							        <path d="M104.133 18.918l-9.431 8.947 61.913 65.269-137.498.938.089 13 138.096-.942-61.338 66.11 9.529 8.842 75.39-81.254-76.75-80.91z"></path>
							    </g>
							</svg>
						</a>
	        		</div>
	        	</div>
	        </div>
	        <div className="page md:h-screen h-auto overflow-hidden py-24 md:px-24 px-12 relative night-sky relative w-full flex flex-wrap justify-end">
	        	<Image 
	        		src="/images/girlstars.jpg"
	        		alt="Night sky image"
	        		layout="fill"
	        		className="object-cover"
	        	/>
	        	<div className="md:w-6/12 w-8/12 text-white z-10 leading-7">
	        		<div className="md:text-4xl text-2xl font-bold font-poppins-semibold">Why Fathom</div>
	        		<div className="mt-12 mb-10 font-avenir-light">
	        			The example of human-level intelligence - the human brain has more than 125 trillion synapses.
	        			Today there is no other hardware that can enable a neural net of such scale.	
	        		</div>
	        		<div className="mb-10 font-avenir-light">
	        			The limitation is the interconnect technology of traditional eletronic computers.
	        		</div>
	        		<div className="mb-10 font-avenir-light">
	        			Fathom's approach has originated from a technology-agnostic search to the interconnect problem and combines the best of optics with the best of eletronics to build a different, more capable interconnect that can enable computing
	        		</div>
	        		<div className="mt-10 flex items-center fill-current text-white">
	        			<a href="#" className="flex items-center font-avenir-light">
		        			Learn more
		        			<svg fill="white" className="ml-8" style={{width: 23, height: 20}} preserveAspectRatio="none" data-bbox="19.117 18.918 161.766 162.164" viewBox="19.117 18.918 161.766 162.164" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="img" aria-labelledby="comp-kikuasnf-svgtitle"><title id="comp-kikuasnf-svgtitle"></title>
							    <g>
							        <path d="M104.133 18.918l-9.431 8.947 61.913 65.269-137.498.938.089 13 138.096-.942-61.338 66.11 9.529 8.842 75.39-81.254-76.75-80.91z"></path>
							    </g>
							</svg>
						</a>
	        		</div>
	        	</div>
	        </div>
		    <div className="lg:p-24 md:20 bg-white p-8">
		    	<div className="grid grid-cols-12 md:gap-10 gap-0">
		    		<div className="col-span-full lg:col-span-4">
		    			<div className="md:text-4xl text-3xl font-poppins-semibold font-bold leading-relaxed text-center lg:text-left">
		    				Latest from Fathom
		    			</div>
		    			<div className="text-lg pt-8 font-avenir-light">
		    				Sign Up To Our Blog
		    			</div>
		    			<div className="pt-4">
			    			<form>
			    				<input required name="email" className="italic focus:outline-none py-4 border-b border-black w-full" placeholder="Enter your email here" />
		    					<button className="focus:outline-none w-full p-4 font-bold text-right">Sign up</button>
		    				</form>
		    			</div>
		    		</div>
		    		<div className="md:mt-0 mt-20 col-span-8 col-span-full lg:col-span-8">
		    			<div className="bg-gray-200 md:px-12 px-8 py-8">
		    				<img src="/images/blogpost.gif" className="w-full" />
		    				<div className="mt-8 p-2 tracking-wide">
		 	    				<div style={{fontSize: 20}} className="text-lg font-avenir-light">
		 	    					Deep Learning with Trillions of Parameters: The Interconnect Challenge
		 	    				</div>
		 	    				<div className="mt-4 font-avenir-light">
		 	    					There is huge economic value in trillion parameter models, but one needs a large amount of hardware to train and deploy them. Scaling deep learning to more hardware can ...
		 	    				</div>
		 	    				<div className="mt-10 text-lg">
		 	    					<div>1 Jan 2021</div>
		 	    					<div className="pt-8">
		 	    						<a href="#" className="flex items-center">
				 	    					<Image
				 	    						src="/icons/arrow-right.svg"
				 	    						width={23}
				 	    						height={20}
				 	    						alt="Arrow Image"
				 	    					/>
				 	    				</a>
		 	    					</div>
		 	    				</div>
		 	    			</div>
	 	    			</div>
		    		</div>
		    	</div>
		    </div>
	    </div>
	)
}
