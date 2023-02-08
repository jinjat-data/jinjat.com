
import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Card from '@site/src/components/card';
import BlogPostCard from '@site/src/components/blogPostCard';
import Hero from '@site/src/components/hero';

const bannerAnimation = require('@site/static/img/banner-white.svg');

function getBanner() {
  return { __html: bannerAnimation };
};

function Home() {
  const featuredResource = {
    title: "How we structure our dbt projects",
    description: "Our hands-on learnings for how to structure your dbt project for success and gain insights into the principles of analytics engineering.",
    link: "/guides/best-practices/how-we-structure/1-guide-overview",
    image: "/img/structure-dbt-projects.png"
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
                    body="Jinjat lets you develop REST applications from your dbt analysis and user interfaces from your OpenAPI definitions. ❯"
                    link="/docs/introduction"
                    icon="question-mark"
                  />
                </div>
                <div>
                  <Card
                    title="Getting started guide"
                    body="Learn how to set up Jinjat and build your first app. Jinjat requires you to know dbt in advance. ❯"
                    link="/docs/get-started/getting-started/overview"
                    icon="book"
                  />
                </div>
                <div>
                  <Card
                    title="Docs"
                    body="Discover everything Jinjat has to offer from the basics to advanced concepts. ❯"
                    link="/docs/build/projects"
                    icon="docs"
                  />
                </div>
                <div>
                  <Card
                    title="Integrations"
                    body="Jinjat supports all the databases dbt supports out of the box and also integrates  ❯"
                    link="/docs/supported-data-platforms"
                    icon="rocket"
                  />
                </div>
              </div>
            </div>
            <div className="featured-header"><h2>Integrations</h2></div>
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
                  body="Generate REST APIs and UIs automatically for dbt sources"
                  link="/jinjat-cli/generate#crud"
                  icon="pencil-paper"
                />
              </div>
              <div>
                <Card
                  title="Metric store"
                  body="Create Business Intelligence apps using dbt-metrics with your custom front-end"
                  link="/jinjat-cli/generate#metrics"
                  icon="book"
                />
              </div>
              <div>
                <Card
                  title="Cloud-native Backend APIs"
                  body="Use your custom UDF, procedures natively in SQL to interact with your cloud data-warehouse"
                  link="https://hub.getdbt.com/"
                  icon="packages"
                />
              </div>
            </div>
          </section>

        </div>

        <div className="banner-animation" dangerouslySetInnerHTML={getBanner()}></div>
      </Layout>
    </>
  );
}

export default Home;
