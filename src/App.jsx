import './App.css'
import ColourBoxGrid from './ColourBoxGrid'

const colours = [
  "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF",
  "#800000", "#008000", "#000080", "#808000", "#800080", "#008080", "#C0C0C0", "#808080",
  "#9999FF", "#993366", "#FFFFCC", "#CCFFFF", "#660066", "#FF8080", "#0066CC", "#CCCCFF"
];

function App() {

  return (
    <>
      <ColourBoxGrid colours={colours} />
    </>
  )
}

export default App
