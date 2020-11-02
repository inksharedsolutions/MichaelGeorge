import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import icon from '../assets/icon/author_icon.png'


const abouttheauthor= (props) =>{


	const bannerText = (
		<>
			<span className="banr-tagline-fx">Michael George</span>
			<h1 className="banr-header-fx">
				About the
				<span className="banr-spn-highlight">Author</span>
			</h1>
		</>
	)

	return(
		<Layout>

			<Banner bannerContext={bannerText} defProps={props} />

			<div className="container">
				<section className="body-author-contents columns">
					 	<div className="column">
					 		<div className="heading-quote">

					 			<div className="author-image-container">
					 				<img src={icon} />
					 				<span className="author-name">
					 					<span className="author-span-ft">Author |  Writer </span>
					 					Valentine Cardinale
					 				</span>
					 			</div>

					 			<h4>
								 	The story of starting lost, traveling through life’s trials, finding love, and learning how great home can be when you find it.
					 			</h4>

					 			<span className="ata-span-fx">author quote</span>
					 		</div>
					 	</div>

					 	 <div className="column">
					 	 	<article className="article-section">

					 	 		<p>
								  Michael is a retired carpenter with a varied working background - operated and programmed the old main frame computers, managed a 24/7 service station, managed a dairy farm, owned and operated a furniture building company, and even picked potatoes with Mexican migrant farm workers. He has been married for over 50 years, had 5 children with only 3 still living, and has countless grandchildren and great-grandchildren.
								</p>
					 	 	</article>
					 	</div>
				</section>
			</div>
	  	</Layout>
	)
}

export default abouttheauthor