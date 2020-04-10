function takeANumber(line , name) {
line.push(name);
return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  var firstperson = line.splice[1];
  if (line.length > 0) {
    line.shift()
    return `Currently serving ${firstperson}.`;
  } else {
    return "There is nobody waiting to be served";
  }
}
