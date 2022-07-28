var p = new Ping()

function userPing() {
  const formValue = $('#userLinkHere').val()

  if (!formValue.includes('http://') && !formValue.includes('https://')) {
    return alert('Link invalid.\nPlease include "http://" or "https://" in your link.')
  }
  $("#serverName").text(formValue)

  for (i=0;i<6;i++)

  p.ping(formValue, function (err, data) {
  if (err) {
    console.log("error loading resource")
    data = data + " "
    return document.getElementById("ping-userPing").innerText = "Error"
  }
  if (data >= 100) {
    document.getElementById("ping-userPing").style.color = "red"
  }
  else if (data >= 70) {
    document.getElementById("ping-userPing").style.color = "orange"
  }
  else {
    document.getElementById("ping-userPing").style.color = "MediumSeaGreen"
  }
  return document.getElementById("ping-userPing").innerText = data 
})
}

