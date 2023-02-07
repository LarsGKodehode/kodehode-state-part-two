function SearchField(props) {
  const {searchParameter, updateSearchParameter} = props

  return (
    <div>
      <input
        type="text"
        placeholder="Search here"
        value={searchParameter}
        onChange={updateSearchParameter}
      />
    </div>
  )
}

export default SearchField