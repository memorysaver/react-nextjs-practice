//export this, so other component can use it.
// as const -> make this array a read-only array that cannot push any object.
const categories = ["Groceries", "Entertainment", "Utilities"] as const;
export default categories;
