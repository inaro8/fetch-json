// JSONをフェッチする関数
const fetchJson = url => {
	return new Promise((resolve) => {
		fetch(url)
			.then(res => res.json())
			.then(data => resolve(data))
	});
}

const insertParsons = async () => {
	const parsons = await fetchJson('../data/parsons.json');
	const container = document.querySelector('.js-parsons');

	parsons.forEach(parson => {
		let code1 = '<div>' +
			'<figure><img src="' + parson.img_path + '"></figure>' +
			'<h3>' + parson.name + '</h3>' +
			'<p>' + parson.text + '</p>';
		let code2;
		if (parson.sub_text) {
			code2 = '<p>' + parson.sub_text + '</p>'
		} else {
			code2 = '';
		}
		let code3 = '</div>';
		const joinCode = code1 + code2 + code3;
		container.insertAdjacentHTML('beforeend', joinCode);
	});
}

insertParsons();
