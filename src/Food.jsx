function Food() {
  const food1 = "orange";
  const food2 = "apple";
  const food3 = "banana";

  return (
    <ul>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
      <li>{food3}</li>
    </ul>
  );
}

export default Food;
