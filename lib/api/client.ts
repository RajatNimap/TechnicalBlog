import { apiConfig } from "@/config/site";
import { ApiError } from "@/types/api";


export async function apiFetch<T>(
    path: string,
    revalidate: number = apiConfig.revalidate.posts) {
    let res: Response
    try {
        res = await fetch(`${apiConfig.baseUrl}${path}`,{
            next:{
                revalidate
            },
        });
        
    } catch {
        throw new ApiError("Network Error. Please try again", 503);
    }
    if (res.status === 404) throw new ApiError("Not Found", 404);
    if (!res.ok) throw new ApiError("Request failed", res.status);

    return res.json() as Promise<T>;
}




