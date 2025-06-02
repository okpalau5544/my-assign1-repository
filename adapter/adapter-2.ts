import assignment1, { Book } from './assignment-1'; // Adjust the path as needed, or update to the correct relative path if different

// Define bookId type if not already defined elsewhere
type bookId = string; // or the appropriate type

async function listBooks(filters?: Array<{from?: number, to?: number}>): Promise<Book[]>{

	return assignment1.listBooks(filters);

}

async function createOrUpdateBook(book: Book): Promise<bookId> {

throw new Error("Todo")

}

async function removeBook(book: bookId): Promise<void> {

throw new Error("Todo")

}