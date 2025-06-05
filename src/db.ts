import { DebugLogger } from "util";
import { MongoClient, Db, Collection } from "mongodb";

// Define the type for items in 'a_collection'
export interface TheCollectionItemType {
    // Add fields as needed, for example:
    // _id: string;
    // title: string;
    // author: string;
}

// Define the type for items in 'another' collection
export interface TheOtherCollectionItemType {
    // Add fields as needed, for example:
    // _id: string;
    // name: string;
    // description: string;
    another: Collection<TheOtherCollectionItemType>
}

const uri = (global as  any).MONGO_URI as string ?? 'mongodb://mongo';
export const client = new MongoClient(uri)

export interface SomeDatabaseAccessor {
    database: Db,
    a_collection: Collection<TheCollectionItemType>
    another: Collection<TheOtherCollectionItemType>
}

export function getBookDatabase (): SomeDatabaseAccessor {
// If we aren't testing, we are creating a random database name
    const database = client.db((global as any).MONGO_URI !== undefined ?
Math.floor(Math.random() * 100000).toPrecision() : 'database-name')
    const a_collection = database.collection<TheCollectionItemType>('collection name')
    const another = database.collection<TheOtherCollectionItemType>('another collection name')

    return {
        database,
        a_collection,
        another
    }
}

// Define the Filters type (customize fields as needed)
type Filters = {
    // Example fields:
    // field: string;
    // value: string | number | boolean;
};

// Define the Book type (customize fields as needed)
type Book = {
    // Example fields:
    // _id: string;
    // title: string;
    // author: string;
};

async function listBooks(filters: Filters[], database: Db): Promise<Book[]> {
    // Implement the logic to list books based on the provided filters
    // For now, return an empty array to satisfy the return type
    return [];
}

// Add the correct import or definition for ZodRouter
// For example, if ZodRouter is from a library, import it like this:
// import { ZodRouter } from 'zod-router-package';
type ZodRouter = any; // Replace 'any' with the actual type if available

export default function listBooksRoute(router: ZodRouter): void {
    router.register({
        // Define the route for listing books

        // Use the listBooks function to handle the request
        handler: async (ctx: any, next: any) => {
            const { filters } = ctx.request.query

            const { database } = getBookDatabase();
            const result = await listBooks(filters, database);

            ctx.body = result
            await next()  
        }      
    })
}
