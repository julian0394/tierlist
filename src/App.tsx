import CategoryGuide from "./components/categoryGuide/CategoryGuide"
import NextTools from "./components/NextTools"
import Tierlist from "./components/tierlist/Tierlist"
import TierToggle from "./components/TierToggle"

const App = () => {
  return (
    <div className="m-5">
      <CategoryGuide />
      <TierToggle />
      <Tierlist />
      <NextTools />
    </div>
  )
}

export default App
