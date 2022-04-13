function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

const sounds = [
{
  key: "Q",
  id: "Heater-1",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },

{
  key: "W",
  id: "Heater-2",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },

{
  key: "E",
  id: "Heater-3",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },

{
  key: "A",
  id: "Heater-4",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },

{
  key: "S",
  id: "Clap",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },

{
  key: "D",
  id: "Open-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },

{
  key: "Z",
  id: "Kick-n'-Hat",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },

{
  key: "X",
  id: "Kick",
  url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },

{
  key: "C",
  id: "Closed-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }];



const App = () => /*#__PURE__*/
React.createElement("div", { id: "display", className: "display" }, /*#__PURE__*/
React.createElement("h1", null),
sounds.map((sound, index) => /*#__PURE__*/
React.createElement(DrumPad, { text: sound.key, key: index, audio: sound.url, playing: sound.id })));





class DrumPad extends React.Component {

  constructor(props) {
    super(props);_defineProperty(this, "playSound",


    () => {
      this.audio.current.play();
      const id = this.audio.current.id;
      display.querySelector("h1").innerText = id;
    });this.audio = React.createRef();}
  render() {
    const { text, playing, audio } = this.props;
    return /*#__PURE__*/(
      React.createElement("div", { className: "drum-pad", onClick: this.playSound, id: "drum-${id}" },

      text, /*#__PURE__*/
      React.createElement("audio", { ref: this.audio, className: "clip", id: playing, src: audio })));


  }}

document.addEventListener("keydown", e => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);
  if (audio) {
    const parent = audio.parentNode;
    parent.classList.add("active");
    audio.play();
    audio.addEventListener("ended", () => {
      parent.classList.remove("active");
    });
  }
});

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("drum-machine"));