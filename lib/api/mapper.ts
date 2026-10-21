
import {Post,ArticleSummary} from "@/types/post"


function makeExcerpt(text:string,max=120){
    return text.length <= max ? text : `${text.slice(0,max).trim()}...`;
}

export function toArticleSummary(post:Post):ArticleSummary {

    return {
            id:post.id,
            title:post.title,
            excerpt:makeExcerpt(post.body),
            tags:post.tags,
            views:post.views
    }

}