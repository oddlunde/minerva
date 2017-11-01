module.exports = function(robot) {
  robot.hear(/!trening/, function (res) {
    res.send({
    "attachments": [
        {
            "fallback": "Her er ein enkel oversikt over treningstidene til volleyball.",
            "text": "Treningstidene for volleyball høst 2017",
            "image_url": "http://blocazureimage.azureedge.net/widget/200000195/2185/2017/9/10/screen-shot-2017-09-10-at-5.24.32-pm.png?width=1920&height=undefined&scale=both&mode=crop&slimmage=true&quality=90&dpi=72",
            "thumb_url": "http://blocazureimage.azureedge.net/widget/200000195/2185/2017/9/10/screen-shot-2017-09-10-at-5.24.32-pm.png?width=1920&height=undefined&scale=both&mode=crop&slimmage=true&quality=90&dpi=72"
          }
        ]
      })
  })
}
