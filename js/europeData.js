var europeDataArray  = [
  {content: 'WWI',        start: '1914-07-28'},
  {content: 'WWII',       start: '1939-09-01'},
  {content: 'Mona Lisa',  start: '1505-06-01'},
  {content: 'The Scream', start: '1893-06-01'},
  {content: 'Plato',      start: '-000380-04-25'},
  {content: 'The Night Watch', start: '1642-06-01'},
  {content: 'Rome Fell',  start: '0476-09-01', //original: img/RomulusAugustus.jpg
    title: '<img height="200px" src="img/Romulus_resigns_the_crown.jpg" alt=""><br>Romulus Augustulus,<br>overthrown by Germania',
    image: '<img height="" src="img/Romulus_resigns_the_crown.jpg" alt=""><br>Romulus Augustulus,<br>overthrown by Germania',
    description: '<p>In 476, Orestes refused to grant Odoacer and the Heruli federated status, prompting an invasion. Orestes fled to the city of Pavia on August 23, 476, where the city\'s bishop gave him sanctuary. Orestes was soon forced to flee Pavia when Odoacer\'s army broke through the city walls, and his army ravaged the city. Odoacer\'s army chased Orestes to Piacenza, where they captured and executed him on August 28, 476.</p><p>On September 4, 476, Odoacer forced then 16-year-old Romulus Augustulus, whom his father Orestes had proclaimed to be Rome\'s Emperor, to abdicate. After deposing Romulus, Odoacer did not execute him. The Anonymus Valesianus wrote that Odoacer, "taking pity on his youth", spared Romulus\' life and granted him an annual pension of 6,000 solidi before sending him to live with relatives in Campania. Odoacer then installed himself as ruler over Italy, and sent the Imperial insignia to Constantinople.</p>'},
  {content: 'Pantheon',   start: '0123-09-01',
   title: '<img src="img/Pantheon.jpg" alt=""><br>Temple in Rome, Italy', 
   image: '<img src="img/Pantheon.jpg" alt="">', 
   description: 'Vis.js comes with a flexible DataSet, which can be'},
  {content: 'Parthenon', start: '-000439-06-01',
	title: '<img src="img/Parthenon.jpg" alt=""><br>Temple in Athens, Greece'},
  {content: 'Rome founded', start: '-000753-09-01'},
  {content: 'Crusades',  start: '1200-06-01',
    title: '<img src="img/Crusades.jpg" alt=""><br>Battle of the Field of Blood'},
  {content: 'Napoleon',   start: '1809-05-18'},
  {content: 'Stonehedge', start: '-003100-05-18',
	title: '<img src="img/Stonehenge.jpg" alt=""><br>Prehistoric monument in England'},
  {content: 'Decorative Jug', start: '-001537-05-18', 
	title: '<img src="img/Minoan_Decorated_Jug.jpg" alt=""><br>Minoan decorative jug'},
  {content: 'Knossos',    start: '-001900-05-18',
	 title: '<img src="img/Knossos.jpg" alt=""><br>Ceremonial and political centre of the Minoan civilization'},
  {content: 'Alexander the Great', start: '-000336-05-18',
	 title: '<img src="img/Alexander_the_Great.jpg" alt=""><br>Alexander the Great',
     description: 'King of the Ancient Greek kingdom of Macedon, he had created one of the largest empires of the ancient world by the age of thirty, stretching from Greece to northwestern India.'},
  {content: 'Julius Caesar', start: '-000044-03-15',
	 title: '<img src="img/La_morte_di_Cesare.jpg" alt=""><br>Death of Julius Caesar'},
  {content: 'Venus Figurines', start: '-026500-03-15',
	 title: '<img src="img/Venus_of_Willendorf.jpg" alt=""><br>Venus of Willendorf'},
  {content: 'Barnenez', start: '-004800-03-15',
	 title: '<img src="img/Barnenez.jpg" alt=""><br>Cairn of Barnenez, located in France'},
  {content: 'Chauvet Cave', start: '-026500-03-15',
	 title: '<img src="img/Chauvet.jpg" alt=""><br>Replica of painting in Chauvet Cave'},
  {content: 'Venus de Brassempouy', start: '-023000-03-15',
	 title: '<img src="img/Venus_de_Brassempouy.jpg" alt=""><br>Venus de Brassempouy<br>discovered in 1892 France'},
  {content: 'Azilian points', start: '-008000-06-15',
	 title: '<img src="img/Azilian_points.jpg" alt=""><br>Azilian points(1.8x0.5x0.3in),<br>microliths from France and Spain'}
];



for (var i=0; i < europeDataArray.length; i++){
  europeDataArray[i].group=2;
}

