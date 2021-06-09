import React , {useEffect, useState }from 'react'
import {
	CardContainer,
	CardWrapper,
	CardImg,
	Cards,
    CardH1,
    CardH1W,
	CardTitle,
	CardInfo,CardBG
} from './PostElements'
import {Link} from 'react-router-dom'
import {Button3} from '../../globalStyles'
import {getPost} from "../../core/helper/coreapicalls";

const Card = () =>{

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);

    const loadAllPosts = () => {
        getPost()
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                    console.log(error);
                } else {
                    setPosts(data);
                }
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        loadAllPosts();
    }, []);


	return(
        <>
        <CardH1W>
        <CardH1>
        
       	Blog Post
        </CardH1>
        </CardH1W>
		<CardContainer>
        
        <CardBG>
		<CardWrapper>

{posts.map((post, index) => {
                return (
                    <div key={index}>
                       <Cards>
		<CardImg src={post.thumbnail}/>
		<CardTitle>
		{post.title}
		</CardTitle>
        <CardInfo>
        {post.month} {post.day}
        </CardInfo>
        <CardInfo>
        {post.excerpt}
        </CardInfo>
        
		<Button3 to={`/blog/${post.slug}`}>
        Read More
		</Button3>

		</Cards>
                    </div>
                );
            })}


		</CardWrapper>
        </CardBG>
		</CardContainer>
        </>
		)
}

export default Card