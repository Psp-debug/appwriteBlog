import React, { useState, useEffect } from 'react'
import appwriteSevice from "../appwrite/config"
import { Container, PostCard } from "../components"
import { Link } from "react-router-dom"
import authService from "../appwrite/auth"
import { useSelector } from "react-redux"

export default function Home() {
    const [posts, setPosts] = useState([])
    const [state, setState] = useState(false)
    const status = useSelector(state => state.status)
    useEffect(() => {
        if (status) {
            setState(true)
        } else { setState(false) }
        appwriteSevice.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
                console.log(posts)
            }
        })
    }, [])


    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            {/* Link only works upon the text value rather having h1 tag that creates a box structure */}
                            {/* <Link to={"/login"} className="text-2xl font-bold hover:text-gray-500"
                            >
                                {state ? "Loading..." : "Login to read posts"}
                            </Link> */}
                            {state ?
                                <div class="spinner-grow" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                                : <div class="container-fluid px-4 py-3 my-10 text-center">
                                    <div class="lc-block mb-2">
                                        <div editable="rich">
                                            <h2 class="display-2 fw-bold">Level up your <span class="text-primary">Blogging page!</span></h2>
                                        </div>
                                    </div>
                                    <div class="lc-block col-lg-6 mx-auto mb-5">
                                        <div editable="rich">

                                            <p class="lead">Quickly design and customize memories filled blogs with detailed description about places</p>
                                        </div>
                                    </div>

                                    <div class="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                                        <Link to={"/login"}>
                                            <a class="btn btn-primary btn-lg px-4 gap-3" href="#" role="button">Try it free</a>
                                        </Link>
                                        <a class="btn btn-outline-secondary btn-lg px-4" href="#" role="button">Learn more</a>
                                    </div>
                                    <div class="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center">
                                    </div>
                                </div>}
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <h1 className="text-xl mb-3">Top Posts</h1>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )

    // return (
    //     <>
    //         <div class="container-fluid px-4 py-3 my-10 text-center">
    //             <div class="lc-block mb-2">
    //                 <div editable="rich">
    //                     <h2 class="display-2 fw-bold">Level up your <span class="text-primary">Blogging page!</span></h2>
    //                 </div>
    //             </div>
    //             <div class="lc-block col-lg-6 mx-auto mb-5">
    //                 <div editable="rich">

    //                     <p class="lead">Quickly design and customize memories filled blogs with detailed description about places</p>
    //                 </div>
    //             </div>

    //             <div class="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
    //                 <Link to={"/login"}>
    //                     <a class="btn btn-primary btn-lg px-4 gap-3" href="#" role="button">Try it free</a>
    //                 </Link>
    //                 <a class="btn btn-outline-secondary btn-lg px-4" href="#" role="button">Learn more</a>
    //             </div>
    //             <div class="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center">
    //             </div>
    //         </div>
    //         <div className='w-full py-8'>
    //             <Container>
    //                 <h1 className="text-xl mb-3">Top Posts</h1>
    //                 <div className='flex flex-wrap'>
    //                     {posts.map((post) => (
    //                         <div key={post.$id} className='p-2 w-1/4'>
    //                             <PostCard {...post} />
    //                         </div>
    //                     ))}
    //                 </div>
    //             </Container>
    //         </div>
    //         {/* <div id="carouselExampleControls" class="carousel slide pl-12 pr-12 pb-12" data-ride="carousel">
    //             <div class="carousel-inner">
    //                 <div class="carousel-item active">
    //                     <img class="d-block w-100" src="IMG_9714.JPG" alt="First slide"/>
    //                 </div>
    //                 <div class="carousel-item">
    //                     <img class="d-block w-100" src="IMG_9507.JPG" alt="Second slide"/>
    //                 </div>
    //                 <div class="carousel-item">
    //                     <img class="d-block w-100" src="..." alt="Third slide"/>
    //                 </div>
    //             </div>
    //             <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    //                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //                 <span class="sr-only">Previous</span>
    //             </a>
    //             <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    //                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //                 <span class="sr-only">Next</span>
    //             </a>
    //         </div> */}
    //         {/* <div id="carouselExampleIndicators" class="carousel slide pl-12 pr-12 pb-12" data-ride="carousel">
    //             <ol class="carousel-indicators">
    //                 <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    //                 <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    //                 <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    //             </ol>
    //             <div class="carousel-inner">
    //                 <div class="carousel-item active">
    //                     <img class="d-block w-100" src="IMG_9507.JPG" alt="First slide" />
    //                 </div>
    //                 <div class="carousel-item">
    //                     <img class="d-block w-100" src="IMG_9714.JPG" alt="Second slide" />
    //                 </div>
    //                 <div class="carousel-item">
    //                     <img class="d-block w-100" src="IMG_9714.JPG" alt="Third slide" />
    //                 </div>
    //             </div>
    //             <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    //                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //                 <span class="sr-only">Previous</span>
    //             </a>
    //             <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    //                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //                 <span class="sr-only">Next</span>
    //             </a>
    //         </div> */}
    //         {/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
    //             <div class="carousel-inner pl-12 pr-12 pb-12">
    //                 <div class="carousel-item active">
    //                     <img src="IMG_9507.JPG" class="d-block w-100" alt="..." />
    //                 </div>
    //                 <div class="carousel-item">
    //                     <img src="IMG_9507.JPG" class="d-block w-100" alt="..." />
    //                 </div>
    //                 <div class="carousel-item">
    //                     <img src="..." class="d-block w-100" alt="..." />
    //                 </div>
    //             </div>
    //         </div> */}
    //     </>
    // )
}
