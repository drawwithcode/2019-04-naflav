var mySong;
var analyzer;

function preload() {
  // put preload code here
  mySong = loadSound("./olhaproceu.mp3")
  myImage = loadImage("./sanfo.png");
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight)
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);

}

function draw() {
  // put drawing code here
  var volume = 0;
  if (mouseX = width) {
    background("#690302");
    if (mySong.isPlaying() == false) {
      mySong.play();
    }
  } else {
    background("#690302");
    mySong.stop();
  }

  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 0, height)

  console.log("amplitude:" + analyzer.getLevel());
  console.log("var volume:" + volume);

  image(myImage, width / 3, height / 3, volume);


  //text definitions
  var myText = "listen to luis gonzaga!";
  textFont("Roboto Mono");
  textSize(30);
  fill('#E9E9E7');
  textAlign(CENTER);
  text(myText, width / 3, height / 3);

  //warning
  var myTexto = "(if nothing happens, refresh; he's shy)";
  textFont("Roboto Mono");
  textSize(10);
  fill('#E9E9E7');
  textAlign(LEFT);
  text(myTexto, width / 3, height / 3 + 30);


}
