function ConversionPart1() {

    var UnsignedInt = document.getElementById("1_UnsignedInt").value;
    var UnsignedIntBaseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
    var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);
    var outputValue = null;
    var temp = parseInt(UnsignedInt.charAt(0));
    var outputString = null;

    for(var i = 0; i < UnsignedInt.length-1; i++){
      temp = temp*UnsignedIntBaseFrom;
      temp+= parseInt(UnsignedInt.charAt(i+1));
    }

    while(temp > 0){
      outputString+=temp%UnsignedIntBaseTo;

      temp = Math.trunc(temp/UnsignedIntBaseTo);
    }


  var outputValue = Number(outputString)

  // Show the output on the screen
  FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo, outputValue], 1);

}
