export function handleEditResponse(fetchResponse) {
	const informationReturned = document.createElement('P');
	fetchResponse.json().then((data) => {
		informationReturned.className = 'information-returned';
		const { id = null } = data;
		informationReturned.innerHTML = `Person with id "${id}" successfully updated. \n`;
	});
	document.getElementById('output').appendChild(informationReturned);
}

export function handleAddResponse(fetchResponse) {
	const informationReturned = document.createElement('P');
	fetchResponse.json().then((data) => {
		informationReturned.className = 'information-returned';
		const { name = '', id = null } = data;
		informationReturned.innerHTML = `Person "${name}" successfully created with id ${id}. \n`;
	});
	document.getElementById('output').appendChild(informationReturned);
}

export function handleDeleteResponse(fetchResponse) {
	const informationReturned = document.createElement('P');
	fetchResponse.json().then((id) => {
		informationReturned.className = 'information-returned';
		informationReturned.innerHTML = `Person with id ${id} successfully deleted. \n`;
	});
	document.getElementById('output').appendChild(informationReturned);
}

export function handleSendResponse(fetchResponse) {
	const informationReturned = document.createElement('P');
	fetchResponse.json().then((counter) => {
		informationReturned.className = 'information-returned';
		informationReturned.innerHTML = `Message sent to ${counter} persons. \n`;
	});
	document.getElementById('output').appendChild(informationReturned);
}
