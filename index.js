function takeANumber(line , name) {
line.push(name);
return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  var origArray = line.slice(0);
  if (line.length > 0) {

    line.shift()
    return `Currently serving ${origArray[0]}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}
