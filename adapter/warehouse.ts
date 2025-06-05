import previous_assignment from './assignment-3'

export type warehouse = string

export interface Book {
  Id?: warehouse
  name: string
  shelf?: string
  quantity?: number
  stock?: number
  author: string
  description: string
  price: number
  image: string
};
export interface Filter {
  name?: string
  shelf?: string
};
// If multiple filters are provided, any book that matches on the shelf should be returned
async function listBooks(filters?: Filter[]): Promise<Book[]> {
  throw new Error("Todo")
}
async function createOrUpdateBook(book: Book): Promise<warehouse> {
  return await previous_assignment.createOrUpdateBook(book)
}
async function removeBook(book: warehouse): Promise<void> {
  await previous_assignment.removeBook(book)
}
async function lookupBookById(book: warehouse): Promise<Book> {
  throw new Error("Todo")
}
export type ShelfId = string
export type OrderId = string
async function placeBooksOnShelf(bookId: warehouse, numberOfBooks: number, shelf: ShelfId): Promise<void> {
  throw new Error("Todo")
}
async function orderBooks(order: warehouse[]): Promise<{ orderId: OrderId }> {
  throw new Error("Todo")
}
async function findBookOnShelf(book: warehouse): Promise<Array<{ shelf: ShelfId, count: number }>> {
  throw new Error("Todo")
}
async function fulfilOrder(order: OrderId, booksFulfilled: Array<{ book: warehouse, shelf: ShelfId, numberOfBooks: number }>): Promise<void> {
  throw new Error("Todo")
}
async function listOrders(): Promise<Array<{ orderId: OrderId, books: Record<warehouse, number> }>> {
  throw new Error("Todo")
}
const assignment = 'assignment-4'
export default {
  assignment,
  createOrUpdateBook,
  removeBook,
  listBooks,
  placeBooksOnShelf,
  orderBooks,
  findBookOnShelf,
  fulfilOrder,
  listOrders,
  lookupBookById,
} 
