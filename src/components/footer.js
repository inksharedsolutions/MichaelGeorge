import React from 'react'
import {faTwitter, faInstagram, faFacebook, faGoodreads } from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navlist from './links'
import FooterLogo from '../assets/img/icon-logo/footer_logo.png'
	
const footer = (props) =>{

	return(
			<footer className="footer-section">
				<div className="container">

					<div className="columns navlist-footer-column">
						<div className="column text-center trademark-heading">

							<div className="logo-footer-container">

								<span className="images-portray">
									<img 
										alt="footer-logo"
										src={FooterLogo} />
								</span>

							</div>
						
							<p>
								Michael George loves to hear from readers. You can reach him via email. 
								Feel free to send questions about writing, his works, interviews 
								and other publicity matters.
							</p>

						</div>

						<div className="column">
							<nav className="footer-nav-list">

								<Navlist arrList={props.navList}/>
								
							</nav>	
						</div>
					</div>

					<div className="columns">
						<div className="column">
							<span className="footer-copyright">

								<span className="footer-year">{
									( new Date() ).getFullYear()
								}</span>

								&#169; Copyright. Stratton press
							</span>


						 	<span class="lower-nav-footer">
						 		<Navlist arrList={[
						 			'Terms and Conditions',
						 			'Privacy Policy']}
						 			/>
						 	</span>
							
						</div>
						
						<div className="column text-center trademark-heading">
							<nav id="style_soc_medias">

								<a
									href="https://www.facebook.com/Michael-George-104293567669725/"
									target="_blank"
									rel="noopener noreferrer" >

									<FontAwesomeIcon
										className='font-awesome'
										icon={faFacebook} />
								</a>

								<a
									href="https://twitter.com/strattonpress/"
									target="_blank"
									rel="noopener noreferrer">

									<FontAwesomeIcon
										className='font-awesome'
										icon={faTwitter} />
								</a>

								<a 

									href="https://www.instagram.com/strattonpress/"
									target="_blank"
									rel="noopener noreferrer">

									<FontAwesomeIcon
										className='font-awesome'
										icon={faInstagram} />
								</a>

								<a 
									href="https://www.goodreads.com/book/show/48565589-horses-lemons-and-pretty-girls?ac=1&from_search=true&qid=kSb5IgGH1c&rank=2"
									target="_blank"
									rel="noopener noreferrer">

									<FontAwesomeIcon 
										className='font-awesome'
										icon={faGoodreads} />
								</a>

							</nav>
						</div>
					</div>
					
				</div>			
			</footer>
	)	
}


export default footer