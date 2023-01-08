import React, { Component, useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Button, Image, Text } from '@chakra-ui/react'
import Axios from "axios";
import Head from 'next/head'
import heroBgImage from 'public/images/heros/blue-lines.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import HeroSimple from '../components/hero-simple';
const pageTitle = "Keep up to date with the latest content from KeepKey";

let mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@highlander_35968";

export default function IntegrationGuide() {

    return (
        <>
            <Head><title>{pageTitle} | KeepKey</title></Head>
            <HeroSimple
                heroBgImg={heroBgImage}
                pageTitle={pageTitle}
            />
            <Main />
        </>
    )
}


const Main = () => {
    const [articlesNews, setArticlesNews] = useState([])
    const [articlesUsers, setArticlesUsers] = useState([])
    const [articlesDevelopers, setArticlesDevelopers] = useState([])

    let onStart = async function(){
        try{
            let response = await Axios.get(mediumURL);
            console.log(response.data);

            const avatar = response.data.feed.image;
            const profileLink = response.data.feed.link;
            const res = response.data.items;
            const posts = response.data.items
            console.log({avatar,profileLink,posts})
            let articlesNews = posts.filter(post => post.categories.includes("news", "keepkey"));
            let articlesUsers = posts.filter(post => post.categories.includes('',"keepkey"));
            let articlesDevelopers = posts.filter(post => post.categories.includes('software-development',"keepkey"));


            setArticlesNews(articlesNews)
            setArticlesUsers(articlesUsers)
            setArticlesDevelopers(articlesDevelopers)

            //user articles
            //developer articles
            //news articles

        }catch(e){
            console.error(e)
        }
    }
    // onStart()
    useEffect(() => {
        onStart()
    }, []) //once on startup

    return (

        <section className="container">
            <Tabs>
                <TabList>
                    <Tab>News</Tab>
                    <Tab>Users</Tab>
                    <Tab>Developers</Tab>
                </TabList>

                <hr className="mt-16" />

                <TabPanel>
                    <div className="article-preview-cards">
                        {articlesNews.map(article => (
                            <div>
                                <Card
                                    direction={{ base: 'column', sm: 'row' }}
                                    overflow='hidden'
                                    variant='outline'
                                >
                                    <Image
                                        objectFit='cover'
                                        maxW={{ base: '100%', sm: '200px' }}
                                        src={article.thumbnail}
                                        alt='Article Image'
                                    />

                                    <Stack>
                                        <CardBody>
                                            <Heading size='md'>{article.title}</Heading>
                                            <Text><small>published: {article.pubDate}</small></Text>
                                            <Text py='2'>
                                                {article.tags}
                                            </Text>
                                        </CardBody>

                                        <CardFooter>
                                            <Button
                                                onClick={() => window.open(article.link, '_blank')}
                                                variant='solid' colorScheme='blue'>
                                                Read More
                                            </Button>
                                        </CardFooter>
                                    </Stack>
                                </Card>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="article-preview-cards">
                        {articlesUsers.map(article => (
                            <div>
                                <Card
                                    direction={{ base: 'column', sm: 'row' }}
                                    overflow='hidden'
                                    variant='outline'
                                >
                                    <Image
                                        objectFit='cover'
                                        maxW={{ base: '100%', sm: '200px' }}
                                        src={article.thumbnail}
                                        alt='Article Image'
                                    />

                                    <Stack>
                                        <CardBody>
                                            <Heading size='md'>{article.title}</Heading>
                                            <Text><small>published: {article.pubDate}</small></Text>
                                            <Text py='2'>
                                                {article.tags}
                                            </Text>
                                        </CardBody>

                                        <CardFooter>
                                            <Button
                                                onClick={() => window.open(article.link, '_blank')}
                                                variant='solid' colorScheme='blue'>
                                                Read More
                                            </Button>
                                        </CardFooter>
                                    </Stack>
                                </Card>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="article-preview-cards">
                        {articlesDevelopers.map(article => (
                            <div>
                                <Card
                                    direction={{ base: 'column', sm: 'row' }}
                                    overflow='hidden'
                                    variant='outline'
                                >
                                    <Image
                                        objectFit='cover'
                                        maxW={{ base: '100%', sm: '200px' }}
                                        src={article.thumbnail}
                                        alt='Article Image'
                                    />

                                    <Stack>
                                        <CardBody>
                                            <Heading size='md'>{article.title}</Heading>
                                            <Text><small>published: {article.pubDate}</small></Text>
                                            <Text py='2'>
                                                {article.tags}
                                            </Text>
                                        </CardBody>

                                        <CardFooter>
                                            <Button
                                                onClick={() => window.open(article.link, '_blank')}
                                                variant='solid' colorScheme='blue'>
                                                Read More
                                            </Button>
                                        </CardFooter>
                                    </Stack>
                                </Card>
                            </div>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>


        </section>
    )
}