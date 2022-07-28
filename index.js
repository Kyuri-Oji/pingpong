var p = new Ping()

p.ping("https://github.com", function (err, data) {
  if (err) {
    console.log("error loading resource")
    data = data + " "
    return document.getElementById("ping-github").innerText = "Error"
  }
  if (data >= 100) {
    document.getElementById("ping-github").style.color = "red"
  }
  else if (data >= 70) {
    document.getElementById("ping-github").style.color = "orange"
  }
  else {
    document.getElementById("ping-github").style.color = "MediumSeaGreen"
  }
  return document.getElementById("ping-github").innerText = data
})

p.ping("https://www.google.com/", function (err, data) {
  if (err) {
    console.log("error loading resource")
    data = data + " "
    return document.getElementById("ping-google").innerText = "Error"
  }
  if (data >= 100) {
    document.getElementById("ping-google").style.color = "red"
  }
  else if (data >= 70) {
    document.getElementById("ping-google").style.color = "orange"
  }
  else {
    document.getElementById("ping-google").style.color = "MediumSeaGreen"
  }
  return document.getElementById("ping-google").innerText = data
})

p.ping("https://youtube.com/", function (err, data) {
  if (err) {
    console.log("error loading resource")
    data = data + " "
    return document.getElementById("ping-youtube").innerText = "Error"
  }
  if (data >= 100) {
    document.getElementById("ping-youtube").style.color = "red"
  }
  else if (data >= 70) {
    document.getElementById("ping-youtube").style.color = "orange"
  }
  else {
    document.getElementById("ping-youtube").style.color = "MediumSeaGreen"
  }
  return document.getElementById("ping-youtube").innerText = data
})

p.ping("https://cloudflare.com/", function (err, data) {
  if (err) {
    console.log("error loading resource")
    data = data + " "
    return document.getElementById("ping-cloudflare").innerText = "Error"
  }
  if (data >= 100) {
    document.getElementById("ping-cloudflare").style.color = "red"
  }
  else if (data >= 70) {
    document.getElementById("ping-cloudflare").style.color = "orange"
  }
  else {
    document.getElementById("ping-cloudflare").style.color = "MediumSeaGreen"
  }
  return document.getElementById("ping-cloudflare").innerText = data
})

p.ping("https://twitter.com/", function (err, data) {
  if (err) {
    console.log("error loading resource")
    data = data + " "
    return document.getElementById("ping-twitter").innerText = "Error"
  }
  if (data >= 100) {
    document.getElementById("ping-twitter").style.color = "red"
  }
  else if (data >= 70) {
    document.getElementById("ping-twitter").style.color = "orange"
  }
  else {
    document.getElementById("ping-twitter").style.color = "MediumSeaGreen"
  }
  return document.getElementById("ping-twitter").innerText = data
})

function copyText(input) {
  navigator.clipboard.writeText(input);
  document.getElementById("emailText").innerText = "Copied Email!"
  setTimeout(putItBack, 2000)
}

function putItBack() {
  document.getElementById("emailText").innerText = "Benjaminljw17@gmail.com"
}

function scaryTime() {
  $("#myFace").attr('src', 'PufferfishLeMoi.jpg')
  $("#myName").text('Lom Jiom Woi Bonjomon')
}

function backToNormal() {
  $("#myFace").attr('src', 'FaceLeMoi.jpg')
  $("#myName").text('Lim Jian Wei Benjamin')
}