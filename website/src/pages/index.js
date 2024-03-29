
import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Card from '@site/src/components/card';
import BlogPostCard from '@site/src/components/blogPostCard';
import Hero from '@site/src/components/hero';

function Home() {
  const featuredResource = {
    title: "Developing ChatGPT Plugins with SQL using Jinjat",
    link: "/blog/develop-chatgpt-plugins-with-sql-using-jinjat",
  }
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="ex1EMwuCGU33-nOpoOajLXEpMPgUYK5exBWePCu-0l0" />
      </Head>
      <Layout permalink="/">
        <div className="container container--fluid home" style={{ "padding": "0", "background": "#FFF" }}>
         <Hero heading="Data applications made simple with dbt" subheading="Jinjat is a low-code application framework that turns your dbt projects into web apps" showGraphic />
          <section className="resource-section row">
            <div className="popular-header"><h2>Popular resources</h2></div>
            <div className="popular-resources">
              <div className="grid">
                <div>
                  <Card
                    title="What is jinjat?"
                    body="Learn more about the idea behind Jinjat ❯"
                    link="/docs/introduction"
                    icon="question-mark"
                  />
                </div>
                <div>
                  <Card
                    title="Getting started guide"
                    body="Learn how to set up Jinjat and build your first app ❯"
                    link="/docs/getting-started"
                    icon="book"
                  />
                </div>
                <div>
                  <Card
                    title="Routing"
                    body="Learn how we map dbt analysis files as API endpoints ❯"
                    link="/docs/api-routes"
                    icon="docs"
                  />
                </div>
                <div>
                  <Card
                    title="Automatic Front-end"
                    body="Learn how Jinjat automatically generates React and Streamlit apps from dbt projects ❯"
                    link="/docs/front-end"
                    icon="rocket"
                  />
                </div>
              </div>
            </div>
            <div className="featured-header"><h2>Blog</h2></div>
            <div className="featured-resource">
            <BlogPostCard postMetaData={featuredResource} />
            </div>
          </section>

          <section className="from-the-community">
            <h2>Applications</h2>
            <div className="grid--3-col">
              <div>
                <Card
                  title="CRUD applications"
                  body="Generate web applications to interact with your database, just with SQL"
                  link="/blog/develop-crud-app"
                  icon="pencil-paper"
                />
              </div>
              <div>
                <Card
                  title="Cloud-native API Backend"
                  body="Create API backends from the data in your data warehouse only with SQL, no boilerplate needed"
                  icon="book"
                />
              </div>
              <div>
                <Card
                  title="OpenAI Plugins"
                  body="Develop OpenAI plugins to make AI talk to your database"
                  link="/blog/develop-chatgpt-plugins-with-sql-using-jinjat"
                  icon="packages"
                />
              </div>
            </div>
          </section>

        </div>

      </Layout>
    </>
  );
}

export default Home;
