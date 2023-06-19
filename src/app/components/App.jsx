import emojipedia from "../emojipedia.js";
import Entry from "./Entry.jsx";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(emoji =>
          <Entry
            key={emoji.id}
            emoji={emoji.emoji}
            name={emoji.name}
            meaning={emoji.meaning}
          />
        )}
      </dl>

    </div>
  );
}

export default App;
