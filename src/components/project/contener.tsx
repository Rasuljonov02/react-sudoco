import React from "react";

function Contac() {
	const divCount = 9;

	const divElements = [];
	for (let index = 0; index < divCount; index++) {
		divElements.push(
			<div key={index} className="childDiv border-solid border-2 border-indigo-300">
				{index + 1}
			</div>
		);
	}

	return (
		<div className="  w-[100%] grid place-items-center h-[100vh]">
			<div className=" grid border-solid border-2 border-indigo-500  grid-cols-3 grid-rows-3  w-[600px] h-[600px]">
				<div className="border-solid border-2 grid place-items-center border-indigo-900  grid  grid-cols-3 grid-rows-3 cursor-pointer">{divElements}</div>
				<div className="border-solid border-2 grid place-items-center border-indigo-900  grid  grid-cols-3 grid-rows-3 cursor-pointer">{divElements}</div>
				<div className="border-solid border-2 grid place-items-center border-indigo-900  grid  grid-cols-3 grid-rows-3 cursor-pointer">{divElements}</div>
				<div className="border-solid border-2 grid place-items-center border-indigo-900  grid  grid-cols-3 grid-rows-3 cursor-pointer">{divElements}</div>
				<div className="border-solid border-2 grid place-items-center border-indigo-900  grid  grid-cols-3 grid-rows-3 cursor-pointer">{divElements}</div>
				<div className="border-solid border-2 grid place-items-center border-indigo-900  grid  grid-cols-3 grid-rows-3 cursor-pointer">{divElements}</div>
				<div className="border-solid border-2 grid place-items-center border-indigo-900  grid  grid-cols-3 grid-rows-3 cursor-pointer">{divElements}</div>
				<div className="border-solid border-2 grid place-items-center border-indigo-900  grid  grid-cols-3 grid-rows-3 cursor-pointer">{divElements}</div>
				<div className="border-solid border-2 grid place-items-center border-indigo-900  grid  grid-cols-3 grid-rows-3 cursor-pointer">{divElements}</div>
			</div>
		</div>
	);
}

export default Contac;
