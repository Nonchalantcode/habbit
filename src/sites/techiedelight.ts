(function(){
	let list = document.querySelector(`#tablist1-panel1 ol`)!
	let easyProblems: HTMLLIElement[] = []
	let mediumProblems: HTMLLIElement[] = []
	let hardProblems: HTMLLIElement[] = []

	list
		.querySelectorAll('li')
		.forEach(problem => {
			let difficulty = problem.querySelector('span')!.textContent!.trim()
			switch(difficulty){
				case 'Easy': 
					easyProblems.push(problem)
					break;
				case 'Medium':
					mediumProblems.push(problem)
					break;
				case 'Hard':
					hardProblems.push(problem)
					break;
				default:
					console.log('No case for this', problem)
			}
			
			list.removeChild(problem)
		});

		[...easyProblems, ...mediumProblems, ...hardProblems]
			.forEach(problem => list.appendChild(problem))

})()