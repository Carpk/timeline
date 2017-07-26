  var container = document.getElementById('visualization');

  var groups = new vis.DataSet([
    { id: 1, content: 'Egypt', value: 2},
    { id: 2, content: 'Europe', value: 3},
    { id: 3, content: 'Middle East', value: 4},
    { id: 4, content: 'America', value: 1}
  ]);

  var items = new vis.DataSet([
	{id: 'KO', group: 2, content: 'Neolithic Greece', start: '-007000-07-04', end: '-001255-07-04', type: 'background', className: 'col'},
	{id: 'MI', group: 2, content: 'Minoan',         start: '-002600-07-04', end: '-001100-07-04', type: 'background', className: 'min'},
    {id: 'AG', group: 2, content: 'ancient Greece', start: '-000800-09-01', end: '-000323-09-01', type: 'background', className: 'greece'},
    {id: 'HG', group: 2, content: '',               start: '-000323-09-01', end: '0146-06-22', type: 'background', className: 'greece'},
    {id: 'AR', group: 2, content: 'ancient Rome',   start: '-000510-06-01', end: '0476-06-15', type: 'background', className: 'rome'},
	{id: 'PA', group: 1, content: '',               start: '-000030-06-01', end: '0641-07-04', type: 'background', className: 'rome'},
    {id: 'DA', group: 2, content: 'Middle/Dark Ages', start: '0476-06-01', end: '1400-06-01', type: 'background', className: 'dark'},
    {id: 'RE', group: 2, content: 'Renaissance',    start: '1300-01-01', end: '1700-06-01', type: 'background', className: 'renais'},
    {id: 'AE', group: 1, content: 'ancient Egypt',  start: '-003100-01-01', end: '-000332-06-01', type: 'background', className: 'aegypt'},
	{id: 'HE', group: 1, content: '',               start: '-000332-06-01', end: '-000030-06-01', type: 'background', className: 'hegypt'},
    {id: 'ME', group: 3, content: 'Mesopotamia',    start: '-005700-06-01', end: '-000332-06-15', type: 'background', className: 'meso'},
    {id: 'US', group: 4, content: 'America',        start: '1776-07-04', end: '2017-06-15', type: 'background', className: 'usa'},
	{id: 'CO', group: 4, content: 'Colonies',       start: '1607-07-04', end: '1776-07-04', type: 'background', className: 'col'},
    {id: 1, group: 2, content: 'WWI', start: '1914-07-28'},
    {id: 2, group: 2, content: 'WWII', start: '1939-09-01'},
    {id: 3, group: 2, content: 'Mona Lisa', start: '1505-06-01'},
    {id: 4, group: 2, content: 'The Scream', start: '1893-06-01'},
    {id: 5, group: 2, content: 'Plato', start: '-000380-04-25'},
    {id: 6, group: 2, content: 'The Night Watch', start: '1642-06-01'},
	{id: 7, group: 2, content: 'Rome Fell', start: '0476-09-01', group: 2},
	{id: 8, group: 4, content: 'U.S. independence', start: '1776-07-04'},
	{id: 9, group: 2, content: 'Pantheon',
	 start: '0123-09-01', title: '<img src="img/Pantheon.jpg" alt=""><br>Temple in Rome, Italy'},
	{id: 10, group: 2, content: 'Parthenon', 
	 start: '-000439-06-01', title: '<img src="img/Parthenon.jpg" alt=""><br>Temple in Athens, Greece'},
	{id: 11, group: 2, content: 'Rome founded', start: '-000753-09-01'},
	{id: 12, group: 2, content: 'Crusades', start: '1200-06-01'},
	{id: 13, group: 3, content: 'Aleppo',
	 start: '-005000-06-01', title: '<img src="img/Aleppo.jpg" alt=""><br>Ancient city in Syria'},
	{id: 14, group: 3, content: 'Cuneiform',
	 start: '-003200-09-01', title: '<img src="img/Cuneiform.jpg" alt=""><br>Early system of writing'},
	{id: 15, group: 4, content: 'Settlers arrive', start: '1607-09-01'},
	{id: 16, group: 4, content: 'Columbus', start: '1492-09-01'},
	{id: 17, group: 2, content: 'Napoleon', start: '1809-05-18'},
	{id: 18, group: 2, content: 'Stonehedge',
	 start: '-003100-05-18', title: '<img src="img/Stonehenge.jpg" alt=""><br>Prehistoric monument in England'},
	{id: 19, group: 1, content: 'Cleopatra', start: '-000051-05-18'},
	{id: 20, group: 1, content: 'King Tut', start: '-001328-05-18'},
	{id: 21, group: 1, content: 'Ramesses II', start: '-001246-05-18'},
	{id: 22, group: 1, content: 'Narmer', start: '-003100-05-18'},
	{id: 23, group: 2, content: 'Decorative Jug', 
	 start: '-001537-05-18', title: '<img src="img/Minoan_Decorated_Jug.jpg" alt=""><br>Minoan decorative jug'},
	{id: 24, group: 2, content: 'Knossos', 
	 start: '-001900-05-18', title: '<img src="img/Knossos.jpg" alt=""><br>Europe\'s oldest city'}
  ]);



  var options = {
	min: '-008000-01-01',
    max: '6000-09-01',
    //zoomMin: 1000 * 60 * 60 * 24,             // one day in milliseconds
    //zoomMax: 1000 * 60 * 60 * 24 * 31 * 3

    groupOrder: function (a, b) {
      return a.value - b.value;},

    tooltip: {
	  // showTooltips: false,
      followMouse: true,
      overflowMethod: 'cap'
	}
  };

  var timeline = new vis.Timeline(container);
  timeline.setOptions(options);
  timeline.setGroups(groups);
  timeline.setItems(items);
