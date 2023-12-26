function Contac() {
	const divSon = 9;

	// reng Remov
	const bgRemov = () => {
			const kattaCell = document.querySelector("#kataCell")!;

			let aa = Array.from(kattaCell.children) as HTMLElement[];

			for (let i = 0; i < aa.length; i++) {
					let childDivs = Array.from(aa[i].children) as HTMLElement[];

					for (let j = 0; j < childDivs.length; j++) {
							childDivs[j].style.backgroundColor = "";
							childDivs[j].style.color = "";

					}
			}
	};

	// reng add
	const celDiv = (i: number) => {
			bgRemov();
			const parentDiv = document.getElementById(`childDiv${i}`)!;

			let a = Array.from(parentDiv.children) as HTMLElement[];

			a.forEach((cel) => {
					cel.style.color = "white";
					cel.style.backgroundColor = "rgba(41, 145, 139, 0.664)";
			});
	};


	const sudokuBord = () => {
			const divElements = [];
// cell
			for (let i = 0; i < divSon; i++) {
					divElements.push(
							<div
									id={`cell${i}`}
									key={i}
									className="childDiv active:scale-95 cursor-pointer grid place-items-center bg-white w-[65px] h-[65px] gap-1"

							>
									{i + 1}
							</div>
					);
			}
// katta div
			const rowElements = [];
			for (let i = 0; i < divSon; i++) {
					rowElements.push(
							<div
									key={i}
									id={`childDiv${i}`}
									onClick={() => celDiv(i)}
									className="grid grid-cols-3 grid-rows-3 border border-black bg-black w-[200px] h-[200px]"
							>
									{divElements}
							</div>
					);
			}

			return rowElements;
	};

	return (
			<div className="w-[100%] grid place-items-center h-[100vh]">
					<div
							id="kataCell"
							className="grid grid-cols-3 grid-rows-3 border border-black w-[600px] h-[600px]">
							{sudokuBord()}
					</div>
			</div>
	);
}

export default Contac;
