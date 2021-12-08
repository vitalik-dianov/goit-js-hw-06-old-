const categotiesListRef = document.querySelector("#categories");

console.dir(`Number of categories: ${categotiesListRef.children.length}
`);

for (const child of categotiesListRef.children) {
  console.log(`Category: ${child.firstElementChild.innerText}`);
  console.log(`Elements: ${child.lastElementChild.children.length}`);
}
