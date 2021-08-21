import Nav from './nav'
import Footer from './footer'

export default function Layout({children}) {
	return (
		<div>
			<Nav />
			<div className="main-container" id="root">
				{children}
				<Footer />
			</div>
		</div>
	)
}