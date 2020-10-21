import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import Main from '../components/main'
import MainBottom  from '../components/main-bottom'
import Newsletter  from '../components/newsletter'
// import ParallaxBottom from '../components/parallax-bottom'
import Banner from "../components/banner"

const IndexPage = (props) => {
	

	const bannerText = (
		<>
			<span className="banr-tagline-fx">Tagline</span>

			<h1 className="front-banr-header-fx">
				Many people have a lost love in their life, but few ever find that lost love.
				<span className="banr-spn-highlight">This is the tale of one who did.</span>

				<p className="paragraph-content">
					The story of starting lost, traveling through life’s trials, finding love, and learning how great home can be when you find it.
				</p>

				<Link
					key="banr-btn"
					className="btn-link-banr button is-link" 
					to="/books">Read More
				</Link>
			</h1>
		</>
	)

	return (
	  	<Layout>
	  		 <Banner bannerContext={bannerText}  defProps={props} />
			 <Main/>
			 <MainBottom />
			 {/* <ParallaxBottom/> */}
			 <Newsletter />
	  	</Layout>
  	)

}

export default IndexPage
