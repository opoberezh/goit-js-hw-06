// 1 variant
// const list = document.querySelector('#categories');
// const els = list.querySelectorAll('li.item');

// console.log('Number of categories:', els.length);

// els.forEach(el => {
//    const elTitle = el.querySelector('h2').textContent;
//    const childrenEls = el.querySelectorAll('li');

//    console.log('Category:', elTitle);
//    console.log('Elements:', childrenEls.length);
// });

// 2 variant
const list = document.querySelector('#categories');
console.log('Number of categories:', list.children.length);
[...list.children].forEach(item => {
   
   const elTitle = item.firstElementChild.textContent;
 
   const childrenEls = item.lastElementChild.children.length;

      console.log('Category:', elTitle);
      console.log('Elements:', childrenEls);
});

