var App = App || {};

App.config = {
	characters: {
		jah: {
			furbizia: 40,
			denaroInPartenza: 1000,
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
			traffico : 10,
			goods: {
				drugs: {
					hash: 10, 
					cocain: 100
				}
			}
		},
		downtown: {
			traffico : 10,
			goods: {
				drugs: {
					hash: 10, 
					cocain: 100
				}
			}
		},
		suburbs: {
			traffico : 10,
			goods: {
				drugs: {
					hash: 10, 
					cocain: 100
				}
			}
		},

	},
}