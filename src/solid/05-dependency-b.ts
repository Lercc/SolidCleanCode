import { LocalDataBaseService, JsonDataBaseService, PostProvider } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    // Inyección de dependencias: se debe saber explicitamente con que modulos se tiene dependencia
    // y asi evitar acoplamientos invisibles o dificiles de detectar (*)
    constructor( private postProvider: PostProvider) {}

    async getPosts() {
        // (*)
        // const jsonDB = new LocalDataBaseService();
        // const jsonDB = new JsonDataBaseService();
        // this.posts = await jsonDB.getPosts();
        this.posts = await this.postProvider.getPosts();
        return this.posts;
    }
}