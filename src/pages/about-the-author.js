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
								  I was born in 1941. Shortly after that, the war began for America. My father served in the Army Air-core, and my mother moved us to my grandparent’s farm. Even as a small child, I fell in love with it, and have always thought that that way of farming was the best way to live.
								</p>

								<p>
								But before the war was over, my mother found a small house in a suburb of Minneapolis. A place I was never fond of. When the war in Europe was over, my father came home. From then on, I spent every minute I was allowed, on the farm. I fell in love there, lost her, but never forgot her. She is still part of my fondest memories.
								</p>	

								<p>
									As I grew up I worked for my father in the grocery business, but spent as much time working on the farm as I could. I owned 3 horses in my later teen years and my cousin and I rode 2 of them one time from the farm to the suburb where I lived. It took 13 hours.
					 	 		</p>

								<p>
								I married young, had 5 children, and now have countless grandchildren and great grandchildren. But because of that, and the normal financial issues of a working family, I didn’t get much formal education early on. I always wanted to write though, and am pretty much self-taught. It was only later in life that I got some college and went to computer school.
								</p>
								<p>
								In 1965 my cousin and I took a trip to Florida. Between us, we had about 50 dollars. My first decent short story is about an early morning I spent alone in Pensacola. That morning, I ate one of the most memorable breakfasts of my life, at the cost of less than a dollar. It took a few years, but that story, and my time spent digging wells in North Dakota, gave me the start for my first book, ‘Horses Lemons And Pretty Girls’. Also, I did manage a 24/7 service station, worked as a carpenter, and went to computer school during the sixties.  I worked on the novel from the first version of the short story until I published the book in 2010. A time frame of nearly 30 years. During that time, I wrote several novels, many that I consigned to the trash where they belonged.
								</p>
								<p>
								What inspired me to write the book Of Rain Barrels And Bridges was a version of the fish story in the book my older brother, Bud, loved to tell. That, and our time on the farm during the war.
								</p>
								<p>
									An early, wrong number phone call gave me the idea for ‘Finding Perry Gray’. The person on the other end asked for someone with the same name as my long lost love. But it wasn’t until I got a second call from the same person that I wrote the book.
									One day, while working in the garden, I started thinking about people not lucky enough to have their own garden, and from there to people who were hungry. Then I thought about having to leave home to find work in order to eat. Suddenly I had the last line for a story. I told my brother about it and he thought it was a good idea, then he wrote a short story using the line. A year or 2 later, I got the idea for the refuge book, and with his permission I used a revised edition of his story for the first chapter of the book. But I saved the special line for the end of the book. Also, because my father spent the last 30 years of his life as an organic vegetable grower, on a farm we owned together, that was located near a national wild life refuge, where I did volunteer work, I had a lot of background to work with.
									I often wonder if people ever think much about what they do, or about how the work they do, effects the world around them. Having worked a lot as a carpenter, my thoughts drifted to construction in general. My ideas from there led to the second book of the refuge series.
									The subject of human trafficking led me into my novel ‘Grass Was Greener’. It allowed me to explore the effects on a family when a member is kidnapped into that life. It also let me explore the fact that it is not uncommon for so-called reputable citizens to be involved. And because of the setting, it fit well into the refuge series.
									I stopped writing for a few years, but my younger brother, David, the retired college professor who has published many scholarly works and books, decided to write a novel. He asked me to read the work in progress and comment on it. I have been doing that, and in doing it, I have been inspired to start writing again. So I am currently working my fourth refuge novel.
									I am still interested in the environment, still garden, continue with my outdoor photography, read, and listen to Great Courses and Audible books. I consider myself lucky to have had the chance to do so many things with my life, and to still have my wife of 53 years.
									Now, if I could just do it all over again??
								</p>
					 	 	</article>
					 	</div>
				</section>
			</div>
	  	</Layout>
	)
}

export default abouttheauthor