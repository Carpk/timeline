var dataArray  = [
	{id: 'KO', group: 2, content: 'Neolithic',      start: '-007000-07-04', end: '-002600-07-04', type: 'background', className: 'col'},
	{id: 'MI', group: 2, content: 'Minoan',         start: '-002600-07-04', end: '-001100-07-04', type: 'background', className: 'min'},
    {id: 'AG', group: 2, content: 'ancient Greece', start: '-000800-09-01', end: '-000323-09-01', type: 'background', className: 'greece'},
    {id: 'HG', group: 2, content: '',               start: '-000323-09-01', end: '0146-06-22', type: 'background', className: 'greece'},
    {id: 'AR', group: 2, content: 'ancient Rome',   start: '-000510-06-01', end: '0476-06-15', type: 'background', className: 'rome'},
	{id: 'PA', group: 1, content: '',               start: '-000030-06-01', end: '0641-07-04', type: 'background', className: 'rome'},
    {id: 'DA', group: 2, content: 'Dark Ages',      start: '0476-06-01',    end: '1400-06-01', type: 'background', className: 'dark'},
    {id: 'RE', group: 2, content: 'Renaissance',    start: '1300-01-01',    end: '1700-06-01', type: 'background', className: 'renais'},
    {id: 'AE', group: 1, content: 'ancient Egypt',  start: '-003100-01-01', end: '-000332-06-01', type: 'background', className: 'aegypt'},
	{id: 'HE', group: 1, content: '',               start: '-000332-06-01', end: '-000030-06-01', type: 'background', className: 'hegypt'},
    {id: 'ME', group: 3, content: 'Mesopotamia',    start: '-005700-06-01', end: '-000332-06-15', type: 'background', className: 'mesop'},
    {id: 'US', group: 4, content: 'America',        start: '1776-07-04',    end: '2017-06-15', type: 'background', className: 'usa'},
	{id: 'CO', group: 4, content: 'Colonies',       start: '1607-07-04',    end: '1776-07-04', type: 'background', className: 'col'},
	{id: 'MA', group: 4, content: 'Mesoamerica',    start: '-007000-07-04', end: '1492-07-04', type: 'background', className: 'mesoa'},
    {id: 1, group: 2, content: 'WWI',        start: '1914-07-28'},
    {id: 2, group: 2, content: 'WWII',       start: '1939-09-01'},
    {id: 3, group: 2, content: 'Mona Lisa',  start: '1505-06-01'},
    {id: 4, group: 2, content: 'The Scream', start: '1893-06-01'},
    {id: 5, group: 2, content: 'Plato',      start: '-000380-04-25'},
    {id: 6, group: 2, content: 'The Night Watch', start: '1642-06-01'},
	{id: 7, group: 2, content: 'Rome Fell',  start: '0476-09-01',
	 title: '<img src="img/RomulusAugustus.jpg" alt=""><br>Romulus Augustulus,<br>overthrown by Germania'},
	{id: 8, group: 4, content: 'U.S. independence', start: '1776-07-04'},
	{id: 9, group: 2, content: 'Pantheon',   start: '0123-09-01', 
	 title: '<img src="img/Pantheon.jpg" alt=""><br>Temple in Rome, Italy',
	 description: 'Vis.js comes with a flexible DataSet, which can be'},
	{id: 10, group: 2, content: 'Parthenon', start: '-000439-06-01',
	 title: '<img src="img/Parthenon.jpg" alt=""><br>Temple in Athens, Greece'},
	{id: 11, group: 2, content: 'Rome founded', start: '-000753-09-01'},
	{id: 12, group: 2, content: 'Crusades',  start: '1200-06-01',
	 title: '<img src="img/Crusades.jpg" alt="">'},
	{id: 13, group: 3, content: 'Aleppo',    start: '-005000-06-01', 
	 title: '<img src="img/Aleppo.jpg" alt=""><br>Ancient city in Syria,<br>a settlement in 5000BC<br>'},
	{id: 14, group: 3, content: 'Cuneiform',
	 start: '-003200-09-01', title: '<img src="img/Cuneiform.jpg" alt=""><br>Early system of writing'},
	{id: 15, group: 4, content: 'Settlers arrive', start: '1607-09-01'},
	{id: 16, group: 4, content: 'Columbus',   start: '1492-09-01'},
	{id: 17, group: 2, content: 'Napoleon',   start: '1809-05-18'},
	{id: 18, group: 2, content: 'Stonehedge', start: '-003100-05-18', 
	 title: '<img src="img/Stonehenge.jpg" alt=""><br>Prehistoric monument in England'},
	{id: 19, group: 1, content: 'Cleopatra',  start: '-000030-08-12',
	 title: '<img src="img/Cleopatra.jpg" alt=""><br>Cleopatra takes her life'},
	{id: 20, group: 1, content: 'King Tut',   start: '-001328-05-18',
	 title: '<img src="img/Tut.jpg" alt=""><br>Tutankhamun\'s death mask'},
	{id: 21, group: 1, content: 'Ramesses II', start: '-001246-05-18'},
	{id: 22, group: 1, content: 'Narmer',     start: '-003100-05-18'},
	{id: 23, group: 2, content: 'Decorative Jug', start: '-001537-05-18', 
	 title: '<img src="img/Minoan_Decorated_Jug.jpg" alt=""><br>Minoan decorative jug'},
	{id: 24, group: 2, content: 'Knossos',    start: '-001900-05-18',
	 title: '<img src="img/Knossos.jpg" alt=""><br>Europe\'s oldest city'},
	{id: 25, group: 3, content: 'Ishtar Gate', start: '-000575-05-18',
	 title: '<img src="img/Ishtar_Gate.jpg" alt=""><br>Built in Babylon, modern day Iraq'},
	{id: 26, group: 2, content: 'Alexander the Great', start: '-000336-05-18',
	 title: '<img src="img/Alexander_the_Great.jpg" alt=""><br>Alexander the Great'},
	{id: 27, group: 2, content: 'Julius Caesar', start: '-000044-03-15',
	 title: '<img src="img/La_morte_di_Cesare.jpg" alt=""><br>Death of Julius Caesar'},
	{id: 28, group: 2, content: 'Venus Figurines', start: '-026500-03-15',
	 title: '<img src="img/Venus_of_Willendorf.jpg" alt=""><br>Venus of Willendorf'},
	{id: 29, group: 4, content: 'Cueva de las Manos', start: '-009000-03-15',
	 title: '<img src="img/CuevaManos.jpg" alt=""><br>Cueva de las Manos, located in<br>Perito Moreno, Argentina'},
	{id: 30, group: 2, content: 'Barnenez', start: '-004800-03-15',
	 title: '<img src="img/Barnenez.jpg" alt=""><br>Cairn of Barnenez, located in France'},
	{id: 31, group: 2, content: 'Chauvet Cave', start: '-026500-03-15',
	 title: '<img src="img/Chauvet.jpg" alt=""><br>Replica of painting in Chauvet Cave'},
	{id: 32, group: 2, content: 'Venus de Brassempouy', start: '-023000-03-15',
	 title: '<img src="img/Venus_de_Brassempouy.jpg" alt=""><br>Venus de Brassempouy<br>discovered in 1892 France'},
	{id: 33, group: 4, content: 'Toquepala', start: '-009500-03-15',
	 title: '<img src="img/Toquepala.JPG" alt=""><br>Toquepala Caves<br>located in southeast Peru'},
	{id: 34, group: 3, content: 'Wheel', start: '-003500-03-15',
	 title: '<img src="img/wheel.jpg" alt=""><br>Pottery wheel invented<br>Used on chariots 300 years later'},
	{id: 35, group: 4, content: 'Folsom Point', start: '-008750-03-15',
	 title: '<img src="img/Folsom_point.jpg" alt=""><br>Folsom Point'},
	{id: 36, group: 4, content: 'Clovis Point', start: '-011500-03-15',
	 title: '<img src="img/Clovis_Point.jpg" alt=""><br>Clovis projectile point'},
	{id: 37, group: 4, content: 'Tikal', start: '0400-03-15',
	 title: '<img src="img/Tikal.jpg" alt=""><br>ancient Myan citadel'}
];


/**
https://en.wikipedia.org/wiki/List_of_Stone_Age_art
https://en.wikipedia.org/wiki/Art_of_the_Upper_Paleolithic
https://en.wikipedia.org/wiki/Venus_of_Pet%C5%99kovice
https://en.wikipedia.org/wiki/Venus_of_Doln%C3%AD_V%C4%9Bstonice
https://en.wikipedia.org/wiki/Upper_Paleolithic
https://en.wikipedia.org/wiki/Magdalenian
https://en.wikipedia.org/wiki/Mycenaean_Greece
https://en.wikipedia.org/wiki/Military_of_Mycenaean_Greece
https://en.wikipedia.org/wiki/Prehistoric_warfare#Paleolithic
https://en.wikipedia.org/wiki/Lithic_stage

  var items = new vis.DataSet([
    {id: 'A', content: 'Period A', start: '2014-01-16', end: '2014-01-22', type: 'background'},
    {id: 'B', content: 'Period B', start: '2014-01-25', end: '2014-01-30', type: 'background', className: 'negative'},
    {id: 1, content: 'item 1<br>start', start: '2014-01-23'},
    {id: 4, content: 'item 4', start: '2014-01-19', end: '2014-01-24'},
    {id: 5, content: 'item 5', start: '2014-01-28', type:'point'}
  ]);

  var container = document.getElementById('visualization');
  var options = {
    start: '-010000-01-10',
    end: '2017-02-10',
    editable: true
  };

  var groups = ([
    {id: 1,content: 'ancient greece',style: 'background-color: pink;'
      // Optional: a field 'className', 'style', 'order', [properties]},
	{id: 2,content: 'ancient rome',style: 'background-color: red;'}
  ]);
**/
