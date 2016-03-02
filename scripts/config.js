var App = App || {};

App.config = {
	characters: {
		jah: {
			furbizia: 40,
			denaroInPartenza: 1000,
			//nome proprietà del luogo
			startingEnvironment: "downtown",
			prefDrug: null
		},
		russian: {
			furbizia: 70,
			denaroInPartenza: 2000,
			startingEnvironment: "centerCity",
			prefDrug: null
		},
		hacker: {
			furbizia: 100,
			denaroInPartenza: 1000,
			startingEnvironment: "suburbs",
			prefDrug: null
		}
	},
	environments: {
		centerCity: {
			name: "Centro città",
			traffico : 10,
			goods: {
				drugs: {
					label: "Droghe",
					types: {
						hash: {
							label: "Hash",
							price: 10,
							availability: 100
						}, 
						cocain: {
							label: "Coke",
							price: 100,
							availability: 10
						}, 
					}	
				}
			}
		},
		downtown: {
			name: "Downtown",
			traffico : 10,
			goods: {
				drugs: {
					label: "Droghe",
					types: {
						hash: {
							label: "Hash",
							price: 10,
							availability: 100
						}, 
						cocain: {
							label: "Coke",
							price: 100,
							availability: 10
						}, 
					}	
				}
			}
		},
		suburbs: {
			name: "Suburbia",
			traffico : 10,
			goods: {
				drugs: {
					label: "Droghe",
					types: {
						hash: {
							label: "Hash",
							price: 10,
							availability: 100
						}, 
						cocain: {
							label: "Coke",
							price: 100,
							availability: 10
						}, 
					}	
				}
			}
		},

	},
}