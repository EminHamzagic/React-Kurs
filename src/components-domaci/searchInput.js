export default function SearchInput(props) {
  return (
    <div>
      <input
        onChange={(el) => {
          props.getInput(el.target.value);
        }}
      ></input>
      <button>{props.btn}</button>
    </div>
  );
}
