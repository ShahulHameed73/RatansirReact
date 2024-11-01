function Items() {
    const items = [
      { title: 'cabbage', category: 'veg', id: 1 },
      { title: 'chicken', category: 'veg', id: 2 },
      { title: 'mutton', category: 'veg', id: 3 },
      { title: 'spinach', category: 'veg', id: 4 },
      { title: 'fish', category: 'veg', id: 5 },
      { title: 'potato', category: 'veg', id: 6 }
    ];
  
    const vegItems = items.filter((item) => item.category === 'veg');
    const nonVegItems = items.filter((item) => item.category === 'non-veg');
  
    const vegList = vegItems.map((item) => <li key={item.id}>{item.title}</li>);
    const nonVegList = nonVegItems.map((item) => <li key={item.id}>{item.title}</li>);
    const allItemsList = items.map((item) => <li key={item.id}>{item.title}</li>);

    return (
      <>
      <hr></hr>
      <hr></hr>
      <hr></hr>
        <h1>All Items</h1>
        <ol>{items.length > 0 ? allItemsList : 'No items available'}</ol>

        <h2>Veg Items</h2>
        <ol>{vegItems.length > 0 ? vegList : 'Veg items are not available'}</ol>

        <h2>Non-veg Items</h2>
        <ol>{nonVegItems.length > 0 ? nonVegList : 'Non-veg items are not available'}</ol>
        <hr></hr>
        <hr></hr>
        <hr></hr>
      </>
    );
}

export default Items;
