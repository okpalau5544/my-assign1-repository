import assignment2 from "./assignment-2";

// Define or import the Filter type
type Filter = {
	// Adding appropriate fields for Filter here
	field: string;
	value: string;
};

// Define or import Book, BookId, book, bookId types
type Book = {
	id: string;
	title: string;
	author: string;
	name: string;
	description: string;
	price: number;
	image: string;
	// add other fields as needed
};
type BookId = string;
type book = Book;
type bookId = BookId;

async function listBooks (filters?: Filter[]): Promise<book[]> {
	throw new Error("Todo")
};

async function createOrUpdateBook (book: Book): Promise<bookId> {
	return await assignment2.createOrUpdateBook(book)
};

async function removeBook (book: BookId): Promise<void> {
	await assignment2.removeBook(book)
};