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
} from './CardElements'
import {Link} from 'react-router-dom'
import {Button3} from '../../globalStyles'
import {getFeaturedPost} from "../../core/helper/coreapicalls";

const Card = () =>{

    const [fposts, setFposts] = useState([]);
    const [error, setError] = useState(false);

    const loadAllFposts = () => {
        getFeaturedPost()
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                    console.log(error);
                } else {
                    setFposts(data);
                }
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        loadAllFposts();
    }, []);


	return(
        <>
        <CardH1W>
        <CardH1>
        
        Featured Post
        </CardH1>
        </CardH1W>
		<CardContainer>
        
        <CardBG>
		<CardWrapper>

{fposts.map((fpost, index) => {
                return (
                    <div key={index}>
                       <Cards>
		<CardImg src={fpost.thumbnail}/>
		<CardTitle>
		{fpost.title}
		</CardTitle>
        <CardInfo>
        {fpost.month} {fpost.day}
        </CardInfo>
        <CardInfo>
        {fpost.excerpt}
        </CardInfo>
		<Button3 to={`/blog/${fpost.slug}`}>
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