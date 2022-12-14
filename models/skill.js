const skills = [
	{id: 123456, skill: 'HTML', done: true},
	{id: 199999, skill: 'CSS', done: true},
	{id: 188888, skill: 'Javascript', done: false}
];

module.exports = {
	getAll,
	getOne,
    create,
    deleteOne
};

function getOne(id) {
	// Use the Array.prototype.find iterator method
	return skills.find(skill => skill.id === parseInt(id));
}
function getAll() {
	return skills;
}

function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skill.done = false;
    skills.push(skill);
}

function deleteOne(id) {
    // Find the index based on the id of the skill object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}