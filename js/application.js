
function assignGroups() {
  for (var i=0; i < africaDataArray.length; i++){
    africaDataArray[i].group=1;
  }

  for (var i=0; i < europeDataArray.length; i++){
    europeDataArray[i].group=2;
  }

  for (var i=0; i < middleEastDataArray.length; i++){
    middleEastDataArray[i].group=3;
  }

  for (var i=0; i < americasDataArray.length; i++){
    americasDataArray[i].group=4;
  }

  for (var i=0; i < generalDataArray.length; i++){
    americasDataArray[i].group=5;
  }
}

function concatData() {
  return generalDataArray.concat(europeDataArray, africaDataArray, americasDataArray, middleEastDataArray);
}

function createIds() {
  for (var i=0; i < dataArray.length; i++){
  	dataArray[i].id=i;
  }
}

function addTimePeriods() {
  return periodsDataArray.concat(dataArray);
}

function assignElementsToDoc(item) {
  document.getElementById("modal-title").textContent = item.content;
  document.getElementById("modal-description").innerHTML = item.description;
  document.getElementById("modal-image").innerHTML = item.image;
  document.getElementById("modal-other-image").innerHTML = item.imageOther;
}

