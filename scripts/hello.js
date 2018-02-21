module.exports = function(robot) {
  robot.hear(/!y/, function (res) {
    res.send("Kjør da!")
  }),
  robot.hear(/!Y/, function (res) {
    res.send("Kjør da!")
  }),
  robot.hear(/!Våryr/, function (res) {
    res.send("13.april!")
  })
}
