interface item {
    name:string
    price:number
}
const book: item= {
    name:'Essential Typescript',
    price: 450
}
const apple: item= {
    name:'apple',
    price: 320
}
console.log(`book name: ${book.name},price: $${book.price}`)
console.log(`apple name: ${apple.name}, price: $${apple.price}`) 