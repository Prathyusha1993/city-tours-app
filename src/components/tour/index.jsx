import React, { Component } from "react";
import newyork from "../../images/newyork.jpg";
import './tour.scss';

class Tour extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<article className="tour">
				<div className="img-container">
					<img width="200" src={newyork} alt="" />
					<span className="close-btn">
					<i className="far fa-window-close"></i>

					</span>
				</div>
				<div className="tour-info">
					<h3>city</h3>
					<h4>name</h4>
					<h5>
						info{" "}
						<span>
						<i className="fas fa-caret-square-down"></i>
						</span>
					</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
						maxime, provident totam.
					</p>
				</div>
			</article>
		);
	}
}

export default Tour;
