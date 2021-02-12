(function(){
	try {
		document
			.querySelectorAll('.responsive-tabs__panel')
			.forEach(tab => {
				const listContainer = tab.querySelector('ol')!
				const easy: HTMLLIElement[] = []
				const medium: HTMLLIElement[] = []
				const hard: HTMLLIElement[] = []
				listContainer
					.querySelectorAll('li')
					.forEach(problem => {
						const difficulty = problem.querySelector('span')!.textContent!.trim()
						switch(difficulty) {
							case 'Easy':
								easy.push(problem)
								break;
							case 'Medium': 
								medium.push(problem)
								break
							case 'Hard':
								hard.push(problem)
								break;
							default:
								console.log('No case for this', problem)
						}
						listContainer.removeChild(problem)
					});
				[...easy, ...medium, ...hard].forEach(p => listContainer.appendChild(p))
			})
	} catch (ex) {
		console.log(ex.message)
	}

}())	