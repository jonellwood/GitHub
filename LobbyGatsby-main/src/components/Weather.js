import React from "react"
import { graphql } from "gatsby"

const Weather = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

function SingleWeather ({data}) {
    return (
        <div>{data.openWeather.city}</div>
    );
}


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

export default Weather
