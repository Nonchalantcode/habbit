(function(){
	const list = document.querySelector('#tablist1-panel1 ol')!
	const easyProblems: HTMLLIElement[] = []
	const mediumProblems: HTMLLIElement[] = []
	const hardProblems: HTMLLIElement[] = []

	list
		.querySelectorAll('li')
		.forEach(problem => {
			const difficulty = problem.querySelector('span')!.textContent!.trim()
			switch(difficulty){
			case 'Easy': 
				easyProblems.push(problem)
				break
			case 'Medium':
				mediumProblems.push(problem)
				break
			case 'Hard':
				hardProblems.push(problem)
				break
			default:
				console.log('No case for this', problem)
			}
			
			list.removeChild(problem)
		});

	[...easyProblems, ...mediumProblems, ...hardProblems]
		.forEach(problem => list.appendChild(problem))

})()