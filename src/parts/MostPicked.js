import React from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";

export default function MostPicked(props) {
	return (
		// ref ini sebagai penunjuk container mostpicked
		<section className="container" ref={props.refMostPicked}>
			<Fade bottom>
				<h4 className="mb-3">Most Picked</h4>
				{/* panggil container grid yg sebelumnya dibuat */}
				<div className="container-grid">
					{/* data yang sudah diparsing pada mostPicked di landingpage.js, lalu panggil variable item dan index, misal manggil index ke-0 / 1 / 2 dst. kalo item adalah misal item.id / item.price dst */}
					{props.data.map((item, index) => {
						return (
							// logic, apabila index = 0 maka gunakan row-2 jika tidak maka row-1
							// ketika perulangan api tambahkan key sebagai penanda, misal mostpicked-0 / mostpicked-1 dll
							<div
								key={`mostpicked-${index}`}
								className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`}
							>
								<Fade bottom delay={500 * index}>
									{/* perulangan setiap index akan ditambah +1 */}
									<div className="card card-featured">
										<div className="tag">
											${item.price}
											<span className="font-weight-light">per {item.unit}</span>
										</div>
										<figure className="img-wrapper">
											<img
												src={item.imageUrl}
												alt={item.name}
												className="img-cover"
											/>
										</figure>
										<div className="meta-wrapper">
											<Button
												type="link"
												className="stretched-link d-block text-white"
												href={`/properties/${item._id}`}
											>
												<h5>{item.name}</h5>
											</Button>
											<span>
												{item.city}, {item.country}
											</span>
										</div>
									</div>
								</Fade>
							</div>
						);
					})}
				</div>
			</Fade>
		</section>
	);
}
