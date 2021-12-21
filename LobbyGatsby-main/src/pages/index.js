import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';
import Layout from "../components/layout";
// import Image from "../components/image"
import SEO from "../components/seo";
import Facebook from "../components/Facebook";
import Twitter from "../components/Twitter";
// import Weather from "../components/Weather";

const SocialStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: blue;
  gap: 5px;
`;

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />

    <div>
        <h2> {data.openWeather.city.name}</h2>

        <p> Sunrise is at {data.openWeather.city.sunrise}  </p>
        {/* <p> Right now it is {data.openWeather}</p> */}
    </div>

    <SocialStyles >
    <Facebook />
    <Twitter />
    </SocialStyles>

  </Layout>
)

const Weather = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    openWeather {
      id
      message
      cnt
      city {
        coord {
          lat
          lon
        }
        name
        sunset
        sunrise
      }
      internal {
        content
        description
        ignoreType
        mediaType
      }
      list {
        rain {
          _3h
        }
        weather {
          icon
          description
        }
      }
    }
  }
`




export default IndexPage
