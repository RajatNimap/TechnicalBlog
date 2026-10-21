import { apiConfig } from "@/config/site";
import { apiFetch } from "./client";
import { PostsResponse } from "@/types/post";
import { toArticleSummary } from "./mapper";


export async function getLatestArticles(count:number=apiConfig.latestCount){
        const data = await apiFetch<PostsResponse>(`/posts?limit=${count}&sortBy=id&order=desc`);
        return data.posts.map(toArticleSummary);
}   

export async function getArticles(page=1){
        const limit =apiConfig.postsPerPage;
        const skip =(page-1)*limit;
        
        const data =await apiFetch<PostsResponse>(
                `/posts?limit=${limit}&skip=${skip}`
        );

        return {
            articles:data.posts.map(toArticleSummary),
            totalPages:Math.ceil(data.total /limit)
        }

}