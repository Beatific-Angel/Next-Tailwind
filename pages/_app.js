import '../styles/index.css'
import '../public/fonts/fonts.css'
import Layout from '../components/layout';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
  	<>
  		<Head>
	        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
	    </Head>
	  	<Layout 
		  	children={
		  		<Component {...pageProps} />
		  	}
	  	/>
  	</>
  )
}

export default MyApp
