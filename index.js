var katzDeliLine = [];

function takeANumber(line, name){
  // we want to add the person to the line
  // then we want to return the message
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
    return !line.length ? 'There is nobody waiting to be served!' : `Currently serving ${line.shift()}.`
}

function currentLine(line){
  if (!line.length)
    return "The line is currently empty."
  else {
    var array = []
    for(var i = 0; i < line.length; i++){
      array.push(`${i + 1}. ${line[i]}`); //The line is currently: 1. Bill 2. Jane
    }
    return "The line is currently: " + array.join(", ");
  }
}
