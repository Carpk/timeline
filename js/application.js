
function assignGroups() {
  for (var i=0; i < africaDataArray.length; i++){
    africaDataArray[i].group=1;
  }

  for (var i=0; i < europeDataArray.length; i++){
    europeDataArray[i].group=2;
  }
}

function concatData() {
  return generalDataArray.concat(europeDataArray, africaDataArray);
}

function createIds() {
  for (var i=0; i < dataArray.length; i++){
  	dataArray[i].id=i;
  }
}

function addTimePeriods() {
  return periodsDataArray.concat(dataArray);
}
