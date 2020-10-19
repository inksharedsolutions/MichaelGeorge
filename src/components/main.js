 import React from 'react'
 import {Link} from 'gatsby'
 import icon from '../assets/icon/author_icon.png'


 const main = () =>{
 	return(
 		<section className="main-section container">
 			<div className="columns">

 				 <div className="column">
 				 	 <div className="wrapper-heading-content">
 				 	 	<h1>About Me</h1>
 				 	 </div>
 				 </div>

 				 <div className="column is-three-fifths section-main-contents">
 				  	<p>
 				  	   <span className="icon-auhtor">
 				  			<img alt="author_icon" src={icon} />
 				  			<span className="author-name-tagline">Michael George
 				  				<span className="author-fx">/ Author & Writer</span>
 				  			</span>
 				  		</span>
 				  	</p>

 				  	<p>
 					  I was born in 1941. Shortly after that, the war began for America. My father served in the Army Air-core, and my mother moved us to my grandparent’s farm. Even as a small child, I fell in love with it, and have always thought that that way of farming was the best way to live.
					</p>

					<button className="btn-main-customize"><Link> Read More</Link></button>

 				 </div>
 			</div>
 		</section>
 	)
 }

 export default main;