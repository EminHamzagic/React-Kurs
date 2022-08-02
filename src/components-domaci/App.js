import SearchInput from "./searchInput";

export default function App() {
  var BtnText = "Submit";

  const getInputText = (input) => {
    BtnText = input;
    console.log(input);
  };

  return (
    <div>
      <SearchInput btn={BtnText} getInput={getInputText} />
      <h1>{BtnText}</h1>
    </div>
  );
}
