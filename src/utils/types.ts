export interface User {
    id?: number;
    username: string;
    email: string;
    password: string;
    created_at: string;  
}

export interface BlogPost {
    id?: number;
    user_id: number;
    title: string;
    content: string;
    created_at: string;
}

export interface Comment {
    id?: number;
    blog_post_id: number;
    user_id: number;
    content: string;
    created_at: string; 
}  