import CategoryGuide from "./components/categoryGuide/CategoryGuide"
import Tierlist from "./components/tierlist/Tierlist"

const App = () => {
  return (
    <div className="m-5">
      <CategoryGuide />
      {/* love/knowledge switch */}
      <Tierlist />
    </div>
  )
}

export default App
