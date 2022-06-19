function NavBarSearch(props) {
  const { onInputChange, onSearchButtonClickhandler } = props;
  return (
    <div>
      <form>
        <input onChange={onInputChange} placeholder="Write full product name" />
        <button onClick={onSearchButtonClickhandler}>search</button>
      </form>
    </div>
  );
}

export default NavBarSearch;
