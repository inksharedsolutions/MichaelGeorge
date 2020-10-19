import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import Book from '../assets/img/books/book_main.png'
import Book2 from '../assets/img/books/book2.png'
import Book3 from '../assets/img/books/book3.png'
import Book4 from '../assets/img/books/book4.png'
import Book5 from '../assets/img/books/book5.png'
import Book6 from '../assets/img/books/book6.png'
import Book7 from '../assets/img/books/book7.png'
import Book8 from '../assets/img/books/book8.png'
import Book9 from '../assets/img/books/book9.png'
import { DiscussionEmbed } from "disqus-react"


const abouttheauthor= (props) =>{


	const slug =(props.location.href);

	const disqusConfig = {
	  shortname: 'michael-george-1',
	  config: { identifier:  12, slug}
	}

	const bannerText = (
		<>
			<span className="banr-tagline-fx">Michael George</span>
			<h1 className="banr-header-fx">
				About the
				<span className="banr-spn-highlight">Book</span>
			</h1>
		</>
	)


	return(
		<Layout>
		
			<Banner bannerContext={bannerText} defProps={props} />

			<main className="wrapperMain">
				<div className='container'>
						<div className="columns">

							<div className="column">
								<div className="bookImgContainer">
									<img alt="main-book" src={Book} />
								</div>
							</div>

							<div className="column">
								<section className="contentBook">
									
									 <p>
									 Michael George’s Horses, Lemons, and Pretty Girls belongs to the road novel genre. To be more precise, it is an exemplar of the proletarian road novel. Like Kerouac’s iconic On the Road, it is the story of young men traveling across the United States in search of adventure and epiphany. Also like Kerouac’s novel, George’s story has the ring of autobiography. If exploration and adventure place the novel in the Kerouac lineage, the proletarian focus moves it into the Grapes of Wrath genealogy. 
									 </p>
									 <p>
									 The young protagonist, Dave Sanders, travels with his friend, Ben, from the Midwest to the Southeast, “for the hell of it.” Sanders later travels on his own back in the Midwest and, near the novel’s end, all the way to San Francisco. Drifting through life, the protagonist seeks work and lodging wherever he can find it. Disdainful of owners and foremen, he remains true to his working-class roots. A typical description of the owner class is this: “men in business suits, screaming orders.” These roots are evident in the precise description of manual labor, whether tearing down drilling rigs near Fargo or removing bricks from box cars in Florida. 
									 </p>
									 <p>
									 The most striking example is a sequence in which Sanders and his brother build an addition to a house. Though on its face this task sounds routine, it becomes a labor of love and high adventure. In contrast to the working-class ethos, he studies the field of computer programming and is split between his identity as a carpenter and programmer. Yet the novel includes moments of lyricism: “Then we left the beach for the hills behind it and found a small meadow near the back of a cove. It was surrounded by hills and vine-covered trees. The ground was covered with lush green grass, studded with spring’s wildflowers. Scattered among the trees, not yet ripe berries grew in thick dark patches. A cold spring bubbled out of a hillside, coming alive as a stream, only to meet a sudden death in the vast open sea.” 
									 </p>
									 <p>
									 Though working class, the protagonist is not a libertarian with a firm belief in social—including racial—justice. He calls himself an “apathist…someone who doesn’t care what other people do as long as what they do doesn’t hurt anyone, and they don’t try to force what they do or believe onto anyone else.” 
									 </p>
									 <p>
									 The novel is set in the sixties: careless use of alcohol; free sex, which turns out to be anything but free; restlessness; Vietnam. The protagonist unabashedly enjoys beer in the morning. Though a casual practitioner of promiscuity, he is a hopeless romantic. Though he searches for stability, he finds it difficult to stay in one place for long. Vietnam provides a disturbing undercurrent. 
									 </p>
									 <p>
									 This novel, besides its road genesis, shines the light of democracy on the darkness of privilege and injustice. One of the preeminent virtues is the authenticity of the first-person voice. The protagonist hides nothing; he allows the reader access not only to his strengths but to his failings. His candor is linked to his childlike unmediated vision of paradise lost: corporate farms replacing the family farm of his childhood, the plague of bosses infecting the working-class ethos, and environmental degradation. 
									 </p>
									 <p>
									 These issues aside, the most important thing is that this book is a good read as the reader avidly follows David Sanders on his adventures in expectation of epiphany, the outcome of his search for authenticity. 
									 </p>
									
										<nav className="booklinkBlocks">
										    <span>Ebooks :</span>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Horses-Lemons-Pretty-Michael-George-ebook/dp/B07Z8GMLHN/ref=sr_1_1?keywords=9781643457826&qid=1571762254&sr=8-1">Amazon</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/horses-lemons-and-pretty-girls/">Stratton Press</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/horses-lemons-and-pretty-girls-michael-george/1100370313?ean=9781643457826">Barnes & Noble</a></li>
										</nav>

										<nav className="booklinkBlocks">
											<span>Purchase Paperbook :</span>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Horses-Lemons-Pretty-Michael-George/dp/1643456083/ref=sr_1_1?keywords=9781643456089&qid=1571769414&sr=8-1">Amazon</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/horses-lemons-and-pretty-girls-michael-george/1100370313?ean=9781643456089">Barnes & Noble </a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Horses-Lemons-Pretty-Girls/Michael-George/9781643456089?id=8009965417365&_ga=2.26290101.948029403.1603093179-1770015116.1600996550">Books A Million</a></li>
										</nav>

								</section>
							</div>
							
						</div>

						<div className="columns">

							<div className="column">
								<div className="bookImgContainer">
									<img alt="main-book" src={Book2} />
								</div>
							</div>

							<div className="column">
								<section className="contentBook">
									
									<p>
									When Deputy Sheriff Mack Thomas is given the job of serving summons on people who have written checks which have overdrawn their accounts, he is extremely irate. He believes that doing this job makes the sheriff’s department little more than a collection agency. But he reluctantly accepts the job, which quickly leads him to a trail of corruption that leads him far beyond a few bounced checks. So he decides to continue doing the job, however much he hates it. He is led into a world of prostitution forced on young girls, kidnapping, and murder, with very high-ranking people involved. Ultimately, what he learns gives him the information he needs to solve the one crime that concerns him the most. 
									</p>
									
										<nav className="booklinkBlocks">
										    <span>Ebooks :</span>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Grass-Was-Greener-Michael-George-ebook/dp/B085VLN33K/ref=sr_1_1?dchild=1&keywords=9781643459585&qid=1584116875&sr=8-1">Amazon</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/grass-was-greener/">Stratton Press</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/grass-was-greener-michael-george/1100924147?ean=9781643459585">Barnes & Noble</a></li>
										</nav>

										<nav className="booklinkBlocks">
											<span>Purchase Paperbook :</span>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Grass-Was-Greener-Michael-George/dp/164345692X/ref=sr_1_1?dchild=1&keywords=9781643456928&qid=1584116889&sr=8-1">Amazon</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/grass-was-greener-michael-george/1100924147?ean=9781643456928">Barnes & Noble </a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Grass-Was-Greener/Michael-George/9781643456928?id=8009965417365">Books A Million</a></li>
										</nav>

								</section>
							</div>
							
						</div>

						<div className="columns">

							<div className="column">
								<div className="bookImgContainer">
									<img alt="main-book" src={Book3} />
								</div>
							</div>

							<div className="column">
								<section className="contentBook">
									
										<p>
										The world is in the midst of WWII. Nick, age 14, his mother, and his younger brother, Billy, have to move to the country. He doesn’t want to go, but his father has gone in the service and they can no longer afford to stay where they are. His grandparents have offered them a place to live while Nick’s father is gone to help save the world.
										</p><p>
										Through adversity, laughter, and tears Nick learns what has real value, and the joy and satisfaction of hard work. His friend, Jennifer, who shares her love, teaches him that it must include respect.
										</p><p>
										In the end, Nick knows he is very lucky and what being in the right place in the right time really means. He owes everything to the farm which provided. Even more, to his family, made up of people who give more than they get without asking why. But most of all he is grateful for his grandfather, who shows him the way.
										</p><p>
										It is a simpler time and a magic place. A story that will leave you with a smile on your face, a tear in your eye, and a warm glow all over.
										</p>
									
										<nav className="booklinkBlocks">
										    <span>Ebooks :</span>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Rain-Barrels-Bridges-Michael-George-ebook/dp/B07Z8FG7YN/ref=sr_1_1?keywords=9781643457741&qid=1571761903&sr=8-1">Amazon</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/of-rain-barrels-and-bridges/">Stratton Press</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/of-rain-barrels-and-bridges-michael-george/1005555041?ean=9781643457741">Barnes & Noble</a></li>
										</nav>

										<nav className="booklinkBlocks">
											<span>Purchase Paperbook :</span>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Rain-Barrels-Bridges-Michael-George/dp/1643457071/ref=sr_1_1?keywords=9781643457079&qid=1571761917&sr=8-1">Amazon</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/of-rain-barrels-and-bridges-michael-george/1005555041?ean=9781643457079">Barnes & Noble </a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Rain-Barrels-Bridges/Michael-George/9781643457079?id=8009965417365">Books A Million</a></li>
										</nav>

								</section>
							</div>
							
						</div>

						<div className="columns">

							<div className="column">
								<div className="bookImgContainer">
									<img alt="main-book" src={Book4} />
								</div>
							</div>

							<div className="column">
								<section className="contentBook">
									
									<p>
									After the murder of his fiancée, Mack Thomas leaves Minnesota and goes to his uncle’s ranch in Texas. While there, he learns that the death of his wife two years ago wasn’t an accident but murder. After getting a description of the murderer and knowing that it had something to do with a resort complex being built in a wildlife refuge in Minnesota, Mack returns to his home there. 
									</p>
									<p>
									Once home, he learns that two boys have recently been murdered the same way his fiancée was. While discussing the murders with his friend, Dale Magee, the Clayborne County Sheriff, at one of the murder sites near a bridge being built, Dale offers Mack a job as a deputy sheriff and Mack accepts. Then, while they are at the bridge, Mack has a serious disagreement with the construction foreman. It was an incident the foreman couldn’t let go of.
									</p>
									<p>
									On his first day on the job, Mack is ambushed and shot, but four days later, he’s back on the job, eager to find the killer of the boys, and almost as eager to find the killer of his wife. He also carries the hope that his wife’s killer will lead him to his fiancée’s ex-husband, someone Mack knows was involved in both of the murders of his wife and, two years later, of his fiancée.
									</p>
									
										<nav className="booklinkBlocks">
										    <span>Ebooks :</span>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Bridge-No-Good-George-Michael-ebook/dp/B08233W3YY/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1575297669&sr=8-1">Amazon</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/bridge-to-no-good/">Stratton Press</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/bridge-to-no-good-michael-george/1100924146?ean=9781643457949">Barnes & Noble</a></li>
										</nav>

										<nav className="booklinkBlocks">
											<span>Purchase Paperbook :</span>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/dp/1643457004/ref=sr_1_1?keywords=9781643457000&qid=1575392028&sr=8-1">Amazon</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/bridge-to-no-good-michael-george/1100924146?ean=9781643457000">Barnes & Noble </a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Bridge-No-Good/Michael-George/9781643457000?id=8009965417365">Books A Million</a></li>
										</nav>

								</section>
							</div>
							
						</div>

						<div className="columns">

							<div className="column">
								<div className="bookImgContainer">
									<img alt="main-book" src={Book5} />
								</div>
							</div>

							<div className="column">
								<section className="contentBook">
									
									 <p>
									 When Ken Dawson receives an early morning phone call from someone looking for his old friend, Peri Gray, he begins a journey that changes his life. The person who calls will only tell him that Peri said she would be there. Because he lives in Tucson, Arizona, and Peri lives in Minnesota, he is quickly very curious about what is going on with Peri. After his morning walk, Ken misses Peri by just a few minutes when she stops and leaves him a note. So he decides to go to Minnesota to try to find her. Along the way, he is filled with vivid memories of the times of finding, then losing her during the lifetime they have known each other. When Ken arrives in Minnesota, he learns that she has been traveling around the country from city to city, but no one seems to know why. The only thing he learns is that Gainesville, Georgia, is going to be one of the cities she is going to visit. Ken’s sister lives there, so he decides to go there, rather than return to Tucson, hoping that there he will finally find Peri Gray.
									 </p>
									
										<nav className="booklinkBlocks">
										    <span>Ebooks :</span>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Finding-Peri-Grey-Michael-George-ebook/dp/B082VLNBXW/ref=sr_1_1?keywords=9781643458335&qid=1576687700&sr=8-1">Amazon</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/finding-peri-grey/">Stratton Press</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/finding-peri-grey-michael-george/1135622814?ean=9781643458335">Barnes & Noble</a></li>
										</nav>

										<nav className="booklinkBlocks">
											<span>Purchase Paperbook :</span>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/dp/1643457012/ref=sr_1_1?keywords=9781643457017&qid=1576687729&sr=8-1">Amazon</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/finding-peri-grey-michael-george/1135622814?ean=9781643457017">Barnes & Noble </a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Finding-Peri-Grey/Michael-George/9781643457017?id=8009965417365">Books A Million</a></li>
										</nav>

								</section>
							</div>
							
						</div>

						<div className="columns">

							<div className="column">
								<div className="bookImgContainer">
									<img alt="main-book" src={Book6} />
								</div>
							</div>

							<div className="column">
								<section className="contentBook">
									
									<p>Michael George's murder mystery, set in rural Minnesota, is masterfully plotted and peopled with sharply drawn characters. The latter include the protagonist, Mack Thomas, a recently retired - due to a back injury - rodeo bull rider, his struggling farmer father, and his uncle. These "common folk," unpretentious, ethical, and socially and environmentally conscious, are the heroes of this story. They are pitted against the retrograde system of corruption run by a banker (a local fallen from grace), a sheriff, and other forces from the dark side, all of whom conspire to turn the local wildlife refuge into a resort, a playground for the wealthy. These forces will do anything to achieve their nefarious ends, including financial malfeasance on a massive scale, poisoning Mack's father's organically grown crops, and even murder. The dark forces individually represent other societal ills such as spousal abuse.</p>
									<p>The wildlife refuge, the last vestige of central Minnesota's environment in its once pristine state, is at the center of this tale. It contains fast disappearing wetlands, an abundance of wildlife, and Walden-like nature in its purest and most transcendental form, Thoreau personified. The novel, published in 2010, is prescient. The criminal conspiracy that would destroy this Midwest Walden serves as a cautionary tale that speaks to the United States in late 2018, a nation struggling under the weight of environmental degradation, mendacity in the public and private spheres, and corruption in all its myriad forms.</p>
									<p>The heroes of this story, Mack, his father and uncle, and two women friends, embody the values and traditions that are the polar opposite of the dark forces. They are generous, empathetic, deeply moral against the hypocrisy - in the view of the main characters - of right-wing fundamentalism, quiet and reserved as opposed to the bluster of those on the side of darkness. It is almost as if Trump himself were lurking in the background of this story.</p>
									<p>WHY A REFUGE manages to communicate these ideas without preaching. As a thriller, the plot's the thing. Suspense and plot twists and turns are in more than sufficient supply to keep the reader turning the pages. For many fans of murder mysteries, the novel is a one-sit-down read.</p>
									<p>Other attractions include the poetic and deeply moving descriptions of the refuge, the spare and salty speech of the heroes, psychological believability, and authenticity of setting. Not everyone will side with the novel's implicit - and on occasion explicit - take on political and social issues, but there is more than enough of the "good stuff" to keep the reader engaged. This novel deserves five stars.</p>

										<nav className="booklinkBlocks">
										    <span>Ebooks :</span>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Why-Refuge-Michael-George-ebook/dp/B0891YNGN4/ref=sr_1_1?dchild=1&keywords=9781648950360&qid=1590781278&sr=8-1">Amazon</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/why-a-refuge/">Stratton Press</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/why-a-refuge-michael-george/1100370260?ean=9781648950360">Barnes & Noble</a></li>
										</nav>

										<nav className="booklinkBlocks">
											<span>Purchase Paperbook :</span>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Why-Refuge-Michael-George/dp/1648950353/ref=sr_1_1?dchild=1&keywords=9781648950353&qid=1590781261&sr=8-1">Amazon</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/why-a-refuge-michael-george/1100370260?ean=9781648950353">Barnes & Noble </a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Refuge/Michael-George/9781648950353?id=8009965417365">Books A Million</a></li>
										</nav>

								</section>
							</div>
							
						</div>

						<div className="columns">

							<div className="column">
								<div className="bookImgContainer">
									<img alt="main-book" src={Book7} />
								</div>
							</div>

							<div className="column">
								<section className="contentBook">
									
									 <p>
									 Between three strange murders, constant poaching in the wild life refuge, and the planned protest against the resort that is destroying the wild life refuge, Mack Thomas has his hands full. That's just the beginning though. He receives a totally unexpected inheritance, which alone, is enough to change his life. Then another unexpected event occurs when someone suddenly becomes a huge part of his life. Someone who shouldn't be part of his life, but is now and forever will be. Then disaster strikes, and it changes everything, even though everything has already been changed.
									 </p>
									
										<nav className="booklinkBlocks">
										    <span>Ebooks :</span>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Save-Refuge-Michael-George-ebook/dp/B088JZ6CH7/ref=sr_1_1?dchild=1&keywords=9781648950285&qid=1589565117&sr=8-1">Amazon</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/to-save-the-refuge/">Stratton Press</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/to-save-the-refuge-michael-george/1137033422?ean=9781648950285">Barnes & Noble</a></li>
										</nav>

										<nav className="booklinkBlocks">
											<span>Purchase Paperbook :</span>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Save-Refuge-Michael-George/dp/1648950272/ref=sr_1_1?dchild=1&keywords=9781648950278&qid=1590085154&sr=8-1">Amazon</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/to-save-the-refuge-michael-george/1137033422?ean=9781648950278">Barnes & Noble </a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Save-Refuge/Michael-George/9781648950278?id=8009965417365">Books A Million</a></li>
										</nav>

								</section>
							</div>
							
						</div>

						<div className="columns">

							<div className="column">
								<div className="bookImgContainer">
									<img alt="main-book" src={Book8} />
								</div>
							</div>

							<div className="column">
								<section className="contentBook">
									
									 <p>
									 The three brothers were raised in the same household, but their stories follow surprisingly divergent paths, displaying a potpourri of styles. The characters that inhabit their imaginary worlds range from rough-hewn cowboys to women of the theater and run the gamut of social class. The stories place these characters in a vast array of settings, from the rural Midwest to far-off Rio de Janeiro. Narrative voice may whisper intimate first person in the reader's ear or travel from the distance of third-person omniscience. Romance and love-besotted sex stand in contrast to the horror of pedophilia. The stories mark the passage of time, from childhood to old age. There are tales told from the few pages of sudden fiction to nearly the length of novelettes. Reality is reflected in stories of social realism and others of dream state. The mood may be lyrical or unsentimental.


									 </p>
									 <p>
									 Common threads hold these tales together. The search for social justice is prevalent. Deeply flawed characters display wellsprings of ethics and morality. Humor bends toward irony and parody. All these tales reflect delight in storytelling, as if the three brothers had spent their childhood sitting around a campfire listening to yarns that would mark them forever. Their hope is this: the readers will join them at the campfire and share that delight.
									 </p>
									
										<nav className="booklinkBlocks">
										    <span>Ebooks :</span>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Stories-Three-Brothers-David-George-ebook/dp/B08HVZSM52/ref=sr_1_1?dchild=1&keywords=9781648951886&qid=1600802107&sr=8-1">Amazon</a></li>
											{/* <li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/the-west-side-kid/">Stratton Press</a></li> */}
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/stories-from-three-brothers-david-george/1137634675?ean=9781648951879">Barnes & Noble</a></li>
										</nav>

										<nav className="booklinkBlocks">
											<span>Purchase Paperbook :</span>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Stories-Three-Brothers-Bud-George/dp/1648951864/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1600802194&sr=8-1">Amazon</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/stories-from-three-brothers-david-george/1137634675?ean=9781648951862">Barnes & Noble </a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Stories-From-Three-Brothers/Bud-George/9781648951862?id=8009965417365">Books A Million</a></li>
										</nav>

								</section>
							</div>
							
						</div>

						<div className="columns">

							<div className="column">
								<div className="bookImgContainer">
									<img alt="main-book" src={Book9} />
								</div>
							</div>

							<div className="column">
								<section className="contentBook">
									
									 <p>
									 	  He was a man looking for a 'rush'. For him it was the hunt followed by the thrill of the kill. For most of his life, hunting and killing animals, expecially deer, provided it. It was fateful day when someone interfered with this rush, that he found a better one. A bigger and better rush came when the prey was human, and the ultimate rush came when the kill was up close and personal. The only thing standing in his way was the sheriff's department, and Mack Thomas and Dale Magee. And the only question was, could they stop him soon enough?
									 </p>
									
										<nav className="booklinkBlocks">
										    <span>Coming Soon...</span>
										</nav>

								</section>
							</div>
							
						</div>
							
						<div className="commentSection" >
						  <DiscussionEmbed {...disqusConfig} />
						</div>

				</div>	
			</main>


	  	</Layout>
	)
}

export default abouttheauthor