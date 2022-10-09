
import { useState } from 'react'
import React from 'react'

const HandTpage = () => {
    const [option, setOption] = useState("");
	const [prevOption, setPrevOption] = useState("");
	const [obj, setObj] = useState([]);
	const [col, setCol] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();
		setOption("");
		setPrevOption(option);
		if (option === prevOption) {
			setObj((prev) => ({ ...prev, [col]: [...prev[col], option] }));
		} else {
			let colVal = col + 1;
			setObj((prev) => ({ ...prev, [colVal]: [option] }));
			setCol(colVal);
		}
	};

	const Pattern = () => {
		const arr = Object.values(obj);
		return arr.map((row, idx) => (
			<div key={idx} className="col">
				{row.map((val, index) => (
					<div key={index} className="row">
						{val}
					</div>
				))}
			</div>
		));
	};

  return (
    <div className="container">
			<form className="row needs-validation m-3 p-0" onSubmit={handleSubmit}>
				<div className="col-md-6">
					<select
						className="form-select"
						id="validationCustom04"
						required
						value={option}
						onChange={(e) => setOption(e.target.value)}
					>
						<option disabled value="">
							Choose...
						</option>
						<option value="H">H</option>
						<option value="T">T</option>
					</select>
					<div className="invalid-feedback">Please select a valid Value.</div>
				</div>
				<div className="col-md-6">
					<button className="btn btn-primary" type="submit">
						Submit
					</button>
				</div>
			</form>
			<div className="row" >
				<Pattern />
			</div>
		</div>
	);
}

export default HandTpage