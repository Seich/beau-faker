const Faker = require('faker');

class BeauFaker {
	constructor(registry, settings = {}) {
		registry.addPreRequestModifier(this.fakeItTillYouMakeIt.bind(this));
	}

	fakeItTillYouMakeIt(request, orig) {
		if (!orig.FAKEIT) return request;

		this.fakeIt(request.body);

		return request;
	}

	fakeIt(body) {
		Object.keys(body).forEach(key => {
			if (typeof body[key] === 'string') {
				body[key] = Faker.fake(body[key]);
			} else if (typeof body[key] === 'object') {
				this.fakeIt(body[key]);
			}
		});

		return body;
	}
}

module.exports = BeauFaker;
